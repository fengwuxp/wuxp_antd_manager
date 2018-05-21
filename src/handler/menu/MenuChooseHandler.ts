import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {DefaultAction} from "wuxp_react_dynamic_router/src/decorator/TargetReduxAction";

/**
 * 菜单切换（选择）
 */
export interface MenuChooseHandler extends SagaHandler<number> {

    changeMenuNav: (state: number, newState?: number) => number;
}

function readonly(s) {
    // discriptor.writable = false;
    return s;
}

class MenuChooseHandlerImpl implements MenuChooseHandler {

    default: number = 0;

    @DefaultAction()
    changeMenuNav: (state: number, newState?: number) => number;


}

const menuChooseHandlerImpl = new MenuChooseHandlerImpl();

const currentSelectedMenu = createReducerByHandler<number>(menuChooseHandlerImpl);

const menuChooseHandler = createReduxHandler(menuChooseHandlerImpl,true);

export {
    currentSelectedMenu,
    menuChooseHandler
}
