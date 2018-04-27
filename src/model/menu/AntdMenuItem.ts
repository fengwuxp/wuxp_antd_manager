import {CommonMenuItem} from "wuxp_react_dynamic_router/src/manager/menu/MenuManager";


/**
 * antd菜单定义
 */
export interface AntdMenuItem extends CommonMenuItem<AntdMenuItem> {

    key?: string;

    authority?: string;

    hideInMenu?:boolean;

}

