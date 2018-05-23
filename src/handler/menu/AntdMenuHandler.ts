import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import apiClient from "../../fetch/BuildFetchClient";
import {call} from "redux-saga/effects";
import {
    createReducerByHandler,
    createReduxHandler,
} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {DefaultAction, TargetAction} from "wuxp_react_dynamic_router/src/decorator/TargetReduxAction";


/**
 * 菜单加载处理者
 */
export interface AntdMenuHandler extends SagaHandler<AntdMenuItem[]> {

    /**
     * 更新菜单
     * @param req
     * @param {string} type
     */
    getMenus: (req?, type?: string) => void

    setMenus: (state: AntdMenuItem[], newState?: AntdMenuItem[]) => void;
}

class AntdMenuHandlerImpl implements AntdMenuHandler {

    default: Array<AntdMenuItem> = [];

    @DefaultAction()
    setMenus: (state: AntdMenuItem[], newState?: AntdMenuItem[]) => void;


    @TargetAction(AntdMenuHandlerImpl.prototype.setMenus)
    * getMenus(req, type?: string): any {

        return yield call(queryMenus, req);
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
        return convertMenuItem(data);
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
