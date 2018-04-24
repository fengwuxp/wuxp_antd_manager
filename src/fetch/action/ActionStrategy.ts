import {Action} from "typescript_api_sdk/src/api/model/Action";
import {LocationActionType} from "../../enums/LocationActionType";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";

const history = BrowserNavigatorFactory.get();

/**
 * 解析动作
 * @param {Action} action
 */
export function analysisAction(action: Action) {

    const {type, value} = action;

    if (type.startsWith("view_")) {
        //视图处理
        simpleViewHandle(type.split("_")[1] as LocationActionType, value);
    } else if (type.startsWith("action_")) {
        //动作处理
    } else {

    }

}

/**
 * 简单的视图处理
 * @param {LocationActionType} type
 * @param {string} value
 */
function simpleViewHandle(type: LocationActionType, value: string) {

    switch (type) {
        case LocationActionType.BACK:
            history.goBack();
            break;
        case LocationActionType.RELOAD:
            //刷新
            history.replace(history.location.pathname, history.location.search);
            break;
        case LocationActionType.URL:
            history.push(value);
            break;
        default:
            console.error(`未处理的的LocationActionType= ${type}`);
    }
}
