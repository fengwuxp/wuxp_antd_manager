import {MenuChooseReducer} from "../../reducers/MenuChooseReducer";
import {Reducer} from "redux";
import {reduxHandlerFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxActionProxy";
import {antdAdminStore} from "../store/StoreManager";
import {put} from "redux-saga/effects";
import {addSagaHandler} from "wuxp_react_dynamic_router/src/manager/saga/SagaManager";


class MenuChooseAction implements MenuChooseReducer {

    changeMenuNav: Reducer<number>;

}

export interface MenuChooseSaga {

    changeTopMenuNav: (...p) => void;
}

const type = "changeMenuNav";

class MenuChooseSagaManager implements MenuChooseSaga {

    * changeTopMenuNav(payload) {
        yield put({
            type,
            payload,
        });
    };


}

class MenuChooseManager extends MenuChooseAction implements MenuChooseSaga {

    constructor() {
        super();
        return reduxHandlerFactory<MenuChooseManager>(this, antdAdminStore);
    }

    changeTopMenuNav: (currentIndex: number) => void;


}

const menuChooseManager = new MenuChooseManager();

addSagaHandler(MenuChooseSagaManager, MenuChooseManager);

export {
    menuChooseManager
}
