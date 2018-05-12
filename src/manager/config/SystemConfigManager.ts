import appClient from "../../fetch/BuildFetchClient";
import {SystemConfigReducer} from "../../reducers/SystemConfigReducer";
import {antdAdminStore} from "../store/StoreManager";
import {reduxActionFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxActionProxy";


class SystemConfigAction implements SystemConfigReducer {

    setSystemConfig: (...p) => void;
}

const systemConfigAction = reduxActionFactory<SystemConfigAction>(new SystemConfigAction(), antdAdminStore);


export function fetchSystemConfig(naems: string[]) {

    appClient.post({
        url: "/setting/getSetting",
        data: {
            naems
        },
        useFilter:false
    }).then((data: Array<any>) => {
        const config = {};
        data.forEach((item, i) => {
            config[naems[i]] = item;
        });
        systemConfigAction.setSystemConfig(config);
        // console.log("------systemConfig--------",antdAdminStore.getState().systemConfig)

    }).catch(() => {
    });
}
