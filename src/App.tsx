import * as React from "react";
import * as ReactDOM from 'react-dom';
import styles from "./index.module.less";
// import "fixed-data-table-2/dist/fixed-data-table.css";
import {Route, Switch} from 'react-router-dom'
import {antdAdminStore} from "./store/StoreManager";
import UserLayout from "./layouts/login/UserLayout";
import BasicLayout from "./layouts/nav/BasicLayout";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory"
import Authorized from './utils/auth/Authorized';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux'
import {pushRoutes} from "./routes/router";
import routes from "./views/sample";
import {setDefaultLoadingComponent} from "wuxp_react_dynamic_router/src/components/load/AsyncComponent";
import {Spin} from "antd";
import moment from 'moment';
import 'moment/locale/zh-cn';
import {systemConfigHandler} from "./handler/config/SystemConfigHandler";
import {registerStoreByProxy} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {sessionHandler} from "./handler/session/SessionHandler";
import {AntdAdmin, SessionStatus} from "./model/session/AntdAdmin";
import {LoginType} from "./enums/AdminLoginType";
import {isNullOrUndefined} from "util";

moment.locale('zh-cn');

//设置默认加载组件
setDefaultLoadingComponent(() => {
    return <Spin size="large" className={styles.globalSpin}/>;
});

pushRoutes(routes);

const history = BrowserNavigatorFactory.get();

const {AuthorizedRoute} = Authorized;

//将store 注册到代理handler中
registerStoreByProxy(antdAdminStore);

//加载系统配置
systemConfigHandler.getSystemConfig([
    "site_name",
    "admin_logo"
]);


function render(isLogin) {

    ReactDOM.render(
        <Provider store={antdAdminStore}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/login" exact component={UserLayout}/>
                    <Route path="/logout" exact component={UserLayout}/>
                    <Route path="/" render={(props: any) => <BasicLayout {...props} />}/>
                    {/*<AuthorizedRoute*/}
                    {/*path="/"*/}
                    {/*render={(props: any) => <BasicLayout {...props} />}*/}
                    {/*authority={['admin', 'user']}*/}
                    {/*redirectPath="/login"*/}
                    {/*/>*/}
                </Switch>
            </ConnectedRouter>
        </Provider>,
        document.getElementById("app"));
}

window['setAdminInfo'] = (admin: AntdAdmin) => {
    let isLogin = !isNullOrUndefined(admin);
    if (isLogin) {
        sessionHandler.setSession(
            {
                type: LoginType.ACCOUNT,
                submitting: false,
                status: SessionStatus.LOGIN_SUCCESS,
                admin: admin
            }
        );
    }

    render(isLogin);
};


if (process.env.NODE_ENV === "dev") {

    window['setAdminInfo'](require("../mock/MockAdmin").mockAdmin());
}

