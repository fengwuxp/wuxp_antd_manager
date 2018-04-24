import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {message} from "antd";

const history = BrowserNavigatorFactory.get();


/**
 * 处理 http 301
 * @param {Response} resp
 * @param {FetchOption} option
 * @returns {boolean | void}
 */
export function httpCode301Handler<Response, FetchOption>(resp: Response, option: FetchOption): boolean | void {
    message.warn("会话已失效，请重新登录", 2000, () => {
        history.push("/login");
    });
}

/**
 * 处理http 401
 * @param {Response} resp
 * @param {FetchOption} option
 * @returns {boolean | void}
 */
export function httpCode401Handler<Response, FetchOption>(resp: Response, option: FetchOption): boolean | void {

    console.log("无权限")
}
