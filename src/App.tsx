import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import {Switch, Route} from 'react-router-dom'
import UserLayout from "./layouts/login/UserLayout";
import BasicLayout from "./layouts/nav/BasicLayout";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory"
import Authorized from './utils/Authorized';
import {Provider} from "react-redux";
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
import {antdAdminStore} from "./manager/store/StoreManager";


const history = BrowserNavigatorFactory.get();

// const App = withRouter(BasicLayout);
//
// const {AuthorizedRoute} = Authorized;
//
// <Switch>
//     <Route path="/user" component={UserLayout}/>
//     <AuthorizedRoute
//         path="/"
//         render={props => <App {...props} />}
//         authority={['admin', 'user']}
//         redirectPath="/user/login"
//     />
// </Switch>

ReactDOM.render(
    <Provider store={antdAdminStore}>
        <ConnectedRouter history={history}>
           <Route path="/login"  component={UserLayout}   />
        </ConnectedRouter>
    </Provider>

    , document.getElementById("app"));


