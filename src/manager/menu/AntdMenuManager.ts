import {addSagaHandler} from "wuxp_react_dynamic_router/src/manager/saga/SagaManager";
import {AntdMenuReducer} from "../../reducers/AntdMenuReducer";
import {AntdMenuSaga, AntdMenuSagaManager} from "./AntdMenuSagaManager";
import {reduxHandlerFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxActionProxy";
import {antdAdminStore} from "../store/StoreManager";


class AntdMenuAction implements AntdMenuReducer {

    default = [];

    updateMenus: undefined

}


/**
 * 基于antd菜单管理器
 */
class AntdMenuManager extends AntdMenuAction implements AntdMenuSaga {

    constructor() {
        super();
        return reduxHandlerFactory<AntdMenuManager>(this, antdAdminStore);
    }

    getMenus: () => void;

}

const antdMenuManager = new AntdMenuManager();
addSagaHandler(AntdMenuSagaManager, AntdMenuManager);
export {
    antdMenuManager
}
