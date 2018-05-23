import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {message} from "antd";

const history = BrowserNavigatorFactory.get();


let countErrorHandle = 0;

/**
 * 处理 http 301
 * @param {Response} resp
 * @param {FetchOption} option
 * @returns {boolean | void}
 */
export function httpCode301Handler<Response, FetchOption>(resp: Response, option: FetchOption): boolean | void {
    if (countErrorHandle > 0) {
        return;
    }
    countErrorHandle++;
    message.warn("会话已失效，请重新登录", 2, () => {
        countErrorHandle--;
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


/**
 * 默认的错误处理者
 * @param {Response} resp
 * @param {FetchOption} option
 * @returns {boolean | void}
 */
export function httpCodeDefaultHandler<Response, FetchOption>(resp: Response, option: FetchOption): boolean | void {

    console.log("默认错误处理者")
}
