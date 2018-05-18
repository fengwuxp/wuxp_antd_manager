import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import apiClient from "../../fetch/BuildFetchClient";
import {call} from "redux-saga/effects";
import {
    createReducerByHandler,
    createReduxHandler,
    USE_NEW_SATE
} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";
import {returnAtIndex} from "lodash-decorators/utils";


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

    setMenus: string;
}

class AntdMenuHandlerImpl implements AntdMenuHandler {

    default: Array<AntdMenuItem> = [];

    * getMenus(req, type?: string): any {

        const menus = yield call(queryMenus, req);
        console.log("-------------------menus-----------", menus);
        return menus;
    }

    setMenus = USE_NEW_SATE


}

// const antdMenuHandler: AntdMenuHandler = {
//
//     default: [],
//
//     * updateMenus(req, type?: string): any {
//
//         const menus = yield call(queryMenus, req);
//
//         return menus;
//     },
//
//     setMenus(state: AntdMenuItem[], action: ReduxAction): any {
//
//         return action.payload;
//     }
//
// };

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

// console.log("---",Object.keys(antdMenuHandler["__proto__"]));
// console.log("---", Object.getPrototypeOf(antdMenuHandler));
// console.log("---", Object.getOwnPropertyNames(Object.getPrototypeOf(antdMenuHandler)));


const menus = createReducerByHandler<AntdMenuItem>(antdMenuHandler);

const menuHandler = createReduxHandler<AntdMenuHandler>(antdMenuHandler);

// const menus = function (state: Array<AntdMenuItem>, action: ReduxAction): Array<AntdMenuItem> {
//
//     console.log("--------action.type----------",action)
//
//     switch (action.type) {
//
//         case "AntdMenuHandlerImpl.updateMenus":
//             return action.payload;
//
//         default:
//             return []
//     }
//
// };

export {
    menuHandler,
    menus
}
