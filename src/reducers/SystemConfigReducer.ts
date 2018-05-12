import {ReduxReducer, reducerFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxReducer";
import {SystemConfig} from "../model/AntdAdminStore";
import {Reducer} from "redux";


export interface SystemConfigReducer extends ReduxReducer<SystemConfig> {

    /**
     * 设置系统配置
     */
    setSystemConfig: ReduxReducer<SystemConfig>;
}

const SystemConfigManager:SystemConfigReducer={

    default:{
        site_name:""
    },

    setSystemConfig: undefined

};

//创建Reducer
const systemConfig: Reducer<SystemConfig> = reducerFactory<SystemConfigReducer, SystemConfig>(SystemConfigManager);

export {
    systemConfig
}
