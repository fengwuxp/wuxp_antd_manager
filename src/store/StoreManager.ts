import {Store} from 'redux'
import {reduxStoreBuilderFactory} from "wuxp_react_dynamic_router/src/factory/store/StoreFactory";
import {AntdAdminStore} from "../model/AntdAdminStore";
import {createRootSaga} from "wuxp_react_dynamic_router/src/redux/SagaManager";
import {session} from "../handler/session/SessionHandler";
import {menus} from "../handler/menu/AntdMenuHandler";
import {currentSelectedMenu} from "../handler/menu/MenuChooseHandler";
import {queryParamsCache} from "../handler/query/QueryParamsCacheHandler";
import {systemConfig} from "../handler/config/SystemConfigHandler";


/**
 * 管理 store
 * @type {StoreBuilder<AntdAdminStore>}
 */
const builder = reduxStoreBuilderFactory<AntdAdminStore>({
    session,
    menus,
    currentSelectedMenu,
    queryParamsCache,
    systemConfig
});


const antdAdminStore: Store<AntdAdminStore> = builder.build();

//运行root saga
builder.sagaMiddleware.run(createRootSaga());


export {
    antdAdminStore
}
