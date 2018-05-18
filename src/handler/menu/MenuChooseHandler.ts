import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";

/**
 * 菜单切换（选择）
 */
export interface MenuChooseHandler extends SagaHandler<number>{

    changeMenuNav:()=> ReduxAction<number>;
}


class MenuChooseHandlerImpl implements  MenuChooseHandler{

    default: number=0;

    changeMenuNav: () => ReduxAction<number>;

}

const  menuChooseHandler=new MenuChooseHandlerImpl();

const currentSelectedMenu = createReducerByHandler<number>(menuChooseHandler);

const menuChooseManager=createReduxHandler(menuChooseHandler);

export {
    currentSelectedMenu,
    menuChooseManager
}
