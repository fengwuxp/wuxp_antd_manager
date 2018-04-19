import {RouteConfig} from "react-router-config";

/*
* router 集中配置
* */


//路由配置列表
const routeConfigs: Array<RouteConfig> = [];

/**
 * 添加路由
 * @param {Array<RouteConfig>} routes
 */
export function pushRoutes(routes: Array<RouteConfig>) {
    routeConfigs.push(...routes);
}

export {
    routeConfigs
}
