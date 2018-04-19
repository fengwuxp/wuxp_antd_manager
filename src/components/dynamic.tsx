import React from 'react';

const cached = {};

function registerModel(app, model) {
    model = model.default || model;
    if (!cached[model.namespace]) {
        app.model(model);
        cached[model.namespace] = 1;
    }
}

let defaultLoadingComponent = () => null;

function asyncComponent(config) {
    const {resolve} = config;

    return class DynamicComponent extends React.Component<any, any> {

        private LoadingComponent: any;

        private mounted: boolean;

        constructor(props: any, context: any) {
            super(props, context);
            this.LoadingComponent =
                config.LoadingComponent || defaultLoadingComponent;
            this.state = {
                AsyncComponent: null,
            };
            this.load();
        }

        state = {
            AsyncComponent: null
        };

        componentDidMount() {
            this.mounted = true;
        }

        componentWillUnmount() {
            this.mounted = false;
        }

        load() {
            resolve().then((m) => {
                const AsyncComponent = m.default || m;
                if (this.mounted) {
                    this.setState({AsyncComponent});
                } else {
                    this.state.AsyncComponent = AsyncComponent; // eslint-disable-line
                }
            });
        }

        render() {
            const {AsyncComponent} = this.state;
            const {LoadingComponent} = this;
            if (AsyncComponent) return <AsyncComponent {...this.props} />;

            return <LoadingComponent {...this.props} />;
        }
    };
}

export default function dynamic(config) {
    const {app, models: resolveModels, component: resolveComponent} = config;

    return asyncComponent({
        resolve: config.resolve || function () {
            const models = typeof resolveModels === 'function' ? resolveModels() : [];
            const component = resolveComponent();
            return new Promise((resolve) => {
                Promise.all([...models, component]).then((ret) => {
                    if (!models || !models.length) {
                        return resolve(ret[0]);
                    } else {
                        const len = models.length;
                        ret.slice(0, len).forEach((m) => {
                            m = m.default || m;
                            if (!Array.isArray(m)) {
                                m = [m];
                            }
                            m.map(_ => registerModel(app, _));
                        });
                        resolve(ret[len]);
                    }
                });
            });
        },
        ...config,
    });
}

dynamic['setDefaultLoadingComponent'] = (LoadingComponent) => {
    defaultLoadingComponent = LoadingComponent;
};


// import {createElement} from "react";
//
//
// // wrapper of dynamic
// const dynamicWrapper = (component) => {
//     // () => import('module')
//     return dynamic({
//         app:null,
//         models:null,
//         component: () => {
//
//             return component().then(raw => {
//                 const Component = raw.default || raw;
//                 return props =>
//                     createElement(Component, {
//                         ...props
//                     });
//             });
//         }
//     });
// };
