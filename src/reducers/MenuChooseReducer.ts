import {ReduxReducer, reducerFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxReducer";
import {Reducer} from "redux";

/*
* 切换菜单
* */

export interface MenuChooseReducer extends ReduxReducer<number> {

    changeMenuNav: Reducer<number>
}


const MenuChooseReducerManager: MenuChooseReducer = {

    //菜单默认选中为0
    default: 0,


    changeMenuNav: undefined


};

//创建Reducer
const currentSelectedMenu: Reducer<number> = reducerFactory<MenuChooseReducer, number>(MenuChooseReducerManager);

export {
    currentSelectedMenu
}
