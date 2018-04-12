import {SessionManager} from "wuxp_react_dynamic_router/src/session/SessionManager";

/**
 * 简单的会话管理器
 */
class SimpleSessionManager implements SessionManager<any> {

    getCurrentMember: () => any;

    login: (...params) => void;

    logout: () => void;


}

export default new SimpleSessionManager();
