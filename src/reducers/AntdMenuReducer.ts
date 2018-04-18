import {reducerFactory, ReduxReducer} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxReducer";
import {AntdMenuItem} from "../model/menu/AntdMenuItem";
import {Reducer} from "redux";


/**
 * 菜单reducer
 */
export interface AntdMenuReducer extends ReduxReducer<AntdMenuItem> {

    /**
     * 更新菜单
     */
    updateMenus: Reducer<AntdMenuItem>;
}

const AntdMenuReducerMaganer: AntdMenuReducer = {

    //菜单默认为空
    default: [],


    updateMenus: undefined

};

//创建Reducer
const menus: Reducer<AntdMenuItem> = reducerFactory<AntdMenuReducer, AntdMenuItem>(AntdMenuReducerMaganer);

export {
    menus
}
