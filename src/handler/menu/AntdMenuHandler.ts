import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import apiClient from "../../fetch/BuildFetchClient";
import {call} from "redux-saga/effects";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";


/**
 * 菜单加载处理者
 */
export interface AntdMenuHandler extends SagaHandler<AntdMenuItem[]> {

    /**
     * 更新菜单
     * @param req
     * @param {string} type
     */
    updateMenus: (req?, type?: string)=> ReduxAction<AntdMenuItem[]>;
}


class AntdMenuHandlerImpl implements AntdMenuHandler {

    default: Array<AntdMenuItem> = [];

    * updateMenus(req, type?: string):any {

        const menus = yield call(queryMenus, req);

        return menus;
    }


}

function queryMenus(params) {

    return apiClient.post({
        url: "/common/menus",
        data: {
            enabled: true,
            level: 0
        },
        useFilter: false
    }).then((data) => {
        if (data.success) {
            return convertMenuItem(data.data);
        }
    });
}

/**
 * 转化菜单数据
 * @param list
 * @returns {any}
 */
function convertMenuItem(list) {

    return list.map((item) => {

        const {name, path, icon, subMenus} = item;
        let menu: AntdMenuItem = {
            name,
            path,
            icon,
        };
        if (subMenus) {
            menu.children = convertMenuItem(subMenus)
        }

        return menu;
    });
}

const antdMenuHandler = new AntdMenuHandlerImpl();

const menus = createReducerByHandler<AntdMenuItem>(antdMenuHandler);

const menuHandler = createReduxHandler<AntdMenuHandler>(antdMenuHandler);

export {
    menuHandler,
    menus
}
