import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import {Switch, Route} from 'react-router-dom'
import UserLayout from "./layouts/login/UserLayout";
import BasicLayout from "./layouts/nav/BasicLayout";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory"
import Authorized from './utils/auth/Authorized';
import {Provider} from "react-redux";
import {ConnectedRouter, goBack, push} from 'react-router-redux'
import {antdAdminStore} from "./manager/store/StoreManager";


const history = BrowserNavigatorFactory.get();

const {AuthorizedRoute} = Authorized;


ReactDOM.render(
    <Provider store={antdAdminStore}>
        <ConnectedRouter history={history}>
            <Switch>
                <AuthorizedRoute
                    exact
                    path="/"
                    render={(props: any) => <BasicLayout {...props} />}
                    authority={['admin', 'user']}
                    redirectPath="/login"
                />
                <Route path="/login" component={UserLayout}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app"));


