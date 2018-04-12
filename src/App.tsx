import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import {BrowserRouter as Router, withRouter} from "react-router-dom";
import {Switch, Route} from 'react-router'

import UserLayout from "./layouts/login/UserLayout";
import BasicLayout from "./layouts/nav/BasicLayout";



const App = withRouter(BasicLayout);

ReactDOM.render(<Router>
    <Switch>
        <Route exact path="/login" component={UserLayout}/>
        <Route path="" component={App}/>
    </Switch>

</Router>, document.getElementById("app"));
