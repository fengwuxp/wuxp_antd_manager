import {RouteConfig} from "react-router-config";
import asyncComponent from "wuxp_react_dynamic_router/src/components/load/AsyncComponent";


const routes: Array<RouteConfig> = [
    {
        path: '/demo/form',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "test/form" */ './FormDemo'))
    },
    {
        path: '/demo/rich_text',
        exact: true,
        component: asyncComponent(() => import(/* webpackChunkName: "test/rich_text" */ './RichTextDemo'))
    }
];


export default routes
