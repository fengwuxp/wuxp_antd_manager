import * as React from "react";
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from "react-container-query";
import classNames from 'classnames';
import MediaQuery from "./MediaQuery";
import AntdNavLayout, {AntdNavLayoutProps} from "./AntdNavLayout";
import {MapStateToPropsParam} from "react-redux";
import {ReactReduxConnect} from "wuxp_react_dynamic_router/src/decorator/ReactReduxConnect";


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session}) => ({
    session
});

@ReactReduxConnect(mapStateToPropsParam)
export default class BasicLayout extends React.Component<AntdNavLayoutProps, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }


    getPageTitle() {

        let title = 'Ant Design Pro';
        return title;
    }

    render() {

        // console.log(this.props);

        const {session} = this.props;



        return (
            <DocumentTitle title={this.getPageTitle()}>
                <ContainerQuery query={MediaQuery}>
                    {params => <AntdNavLayout {...this.props}
                                              className={classNames(params) as string}/>}
                </ContainerQuery>
            </DocumentTitle>
        );
    }
}

