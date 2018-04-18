import AbstractMenuManager from "wuxp_react_dynamic_router/src/manager/menu/AbstractMenuManager";

import {getMenuData} from "../../routes/menu";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import {AntdMenuReducer} from "../../reducers/AntdMenuReducer";
import {Reducer} from "redux";


const AntdMenuAction: AntdMenuReducer = {

    default: [],

    updateMenus: undefined


};


/**
 * 基于antd菜单管理器
 */
class AntdMenuManager extends AbstractMenuManager<Array<AntdMenuItem>> {


    protected initMenus = (): Promise<Array<AntdMenuItem>> | Array<AntdMenuItem> => {

        if (this.menus !== undefined) {
            throw new Error("请不要重复调用初始化菜单的方法");
        }

        return getMenuData();

        // return apiClientFetch.post({url: ""});
    };

    clickMenuItem = (...params) => {

    };

    switchMenu = (...params) => {

    };


}

// class AntdMenuManager implements AntdMenuReducer{
//
//     default: any;
//
//     updateMenus: Reducer<AntdMenuItem>;
//
//
// }


export default new AntdMenuManager();
