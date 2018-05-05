import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import "fixed-data-table-2/dist/fixed-data-table.css";
import 'ant-design-pro/dist/ant-design-pro.css';
import {Route, Switch} from 'react-router-dom'
import UserLayout from "./layouts/login/UserLayout";
import BasicLayout from "./layouts/nav/BasicLayout";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory"
import Authorized from './utils/auth/Authorized';
import {Provider} from "react-redux";
import {ConnectedRouter} from 'react-router-redux'
import {antdAdminStore} from "./manager/store/StoreManager";
import {pushRoutes} from "./routes/router";
import routes from "./views/sample";
import {setDefaultLoadingComponent} from "wuxp_react_dynamic_router/src/components/load/AsyncComponent";
import {Spin} from "antd";
import * as styles from "./index.scss";
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

//设置默认加载组件
setDefaultLoadingComponent(() => {
    return <Spin size="large" className={styles.globalSpin}/>;
});

pushRoutes(routes);

const history = BrowserNavigatorFactory.get();

const {AuthorizedRoute} = Authorized;


ReactDOM.render(
    <Provider store={antdAdminStore}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/login" component={UserLayout}/>
                <Route path="/logout" component={UserLayout}/>
                <AuthorizedRoute
                    path="/"
                    render={(props: any) => <BasicLayout {...props} />}
                    authority={['admin', 'user']}
                    redirectPath="/login"
                />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app"));




