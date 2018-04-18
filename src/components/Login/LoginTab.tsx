import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs} from 'antd';

const {TabPane} = Tabs;

const generateId = (() => {
    let i = 0;
    return (prefix = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

export default class LoginTab extends React.Component<any, any> {

    static __ANT_PRO_LOGIN_TAB = true;

    static contextTypes = {
        tabUtil: PropTypes.object,
    };

    uniqueId: string;

    constructor(props) {
        super(props);
        this.uniqueId = generateId('login-tab-');
    }

    componentWillMount() {
        if (this.context.tabUtil) {
            this.context.tabUtil.addTab(this.uniqueId);
        }
    }

    render() {
        return <TabPane {...this.props} />;
    }
}
