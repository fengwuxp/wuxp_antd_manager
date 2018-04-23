import {reduxHandlerFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxActionProxy";
import {addSagaHandler} from "wuxp_react_dynamic_router/src/manager/saga/SagaManager";
import {SessionReducer} from "../../reducers/SessionReducer";
import {antdAdminStore} from "../store/StoreManager";

import {SessionSaga, SessionSagaManager} from "./SessionSagaManager";


/**
 * 会话相关 action
 */
class SessionAction implements SessionReducer {


    constructor() {
    }

    default: null;

    removeAdmin: null;

    setAdmin: null;


}

/**
 * 会话管理器
 */
class SessionManager extends SessionAction implements SessionSaga {


    constructor() {
        super();
        return reduxHandlerFactory<SessionManager>(this, antdAdminStore);
    }

    login: (...p) => any;

    logout: (...p) => any;


}

const sessionManager = new SessionManager();
addSagaHandler(SessionSagaManager, SessionManager);
export {
    sessionManager
}
