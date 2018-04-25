import {RouteConfig} from "react-router-config";
import asyncComponent from "wuxp_react_dynamic_router/src/components/load/AsyncComponent";


const routes: Array<RouteConfig> = [
    {
        path: '/sample/list',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "sample/list" */ './ListView'))
        // component: asyncComponent(() => import(/* webpackChunkName: "sample/list" */ './ListView'))
    },
    {
        path: '/sample/input',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "sample/input" */ './InputFormView'))
    },
    {
        path: '/sample/load',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "sample/input" */ './EditFormView'))
    },
    {
        path: '/sample/rich_text',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "sample/rich_text" */ './RichTextDemo'))
    }
];


export default routes
