import AbstractMenuManager from "wuxp_react_dynamic_router/src/manager/menu/AbstractMenuManager";
import {CommonMenuItem} from "wuxp_react_dynamic_router/src/manager/menu/MenuManager";
import ApiClientFetch from "typescript_api_sdk/src/api/impl/es/ApiClientFetch";

const apiClientFetch = new ApiClientFetch(false);

/**
 * antd菜单定义
 */
export interface AntdMenuItem extends CommonMenuItem<AntdMenuItem> {

    key: string;

}


/**
 * 基于antd菜单管理器
 */
class AntdMenuManager extends AbstractMenuManager<Array<AntdMenuItem>> {


    protected initMenus = (): Promise<Array<AntdMenuItem>> => {

        if (this.menus !== null) {
            throw new Error("请不要重复调用初始化菜单的方法");
        }

        return apiClientFetch.post({url: ""});
    };

    clickMenuItem = (...params) => {

    };

    switchMenu = (...params) => {

    };


}

export default new AntdMenuManager();
