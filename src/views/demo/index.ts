import {RouteConfig} from "react-router-config";
import asyncComponent from "wuxp_react_dynamic_router/src/components/load/AsyncComponent";


const routes: Array<RouteConfig> = [
    {
        path: '/demo/form',
        exact: true,
        component: asyncComponent(() => {

            // console.log(arguments);
            return import(/* webpackChunkName: "test/form" */ './FormDemo');
        })
        // component: FormDemo
    }
];


export default routes
