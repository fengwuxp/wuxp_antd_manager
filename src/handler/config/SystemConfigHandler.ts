import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {SystemConfig} from "../../model/AntdAdminStore";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";
import appClient from "../../fetch/BuildFetchClient";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {call} from "redux-saga/effects";

export interface SystemConfigHandler extends SagaHandler<SystemConfig> {

    getSystemConfig: (req: string[], type?: string) => ReduxAction<SystemConfig>;
}


class SystemConfigHandlerImpl implements SystemConfigHandler {

    default: SystemConfig = null;

    /**
     * 获取系统配置
     * @param {string[]}req
     * @param {string} type
     * @return {any}
     */
    * getSystemConfig(req: string[], type?: string): any {

        return yield call(fetchSystemConfig, req);
    };


}

function fetchSystemConfig(naems: string[]) {

    return appClient.post({
        url: "/setting/getSetting",
        data: {
            naems
        },
        useFilter: false
    }).then((data: Array<any>) => {
        const config = {};
        data.forEach((item, i) => {
            config[naems[i]] = item;
        });
        return config;
    }).catch((e) => {
        console.error("获取系统配置失败", e);
    });
}

const systemConfigHandlerImpl = new SystemConfigHandlerImpl();

const systemConfig = createReducerByHandler<SystemConfig>(systemConfigHandlerImpl);

const systemConfigHandler = createReduxHandler(systemConfigHandlerImpl);

export {
    systemConfig,
    systemConfigHandler
}
