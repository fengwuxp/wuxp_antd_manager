import {Store} from 'redux'
import {reduxStoreBuilderFactory} from "wuxp_react_dynamic_router/src/factory/store/StoreFactory";
import {AntdAdminStore} from "../../model/AntdAdminStore";
import {createRootSaga} from "wuxp_react_dynamic_router/src/manager/saga/SagaManager";
import {session} from "../../reducers/SessionReducer";
import {menus} from "../../reducers/AntdMenuReducer";
import {currentSelectedMenu} from "../../reducers/MenuChooseReducer";
import {queryParamsCache} from "../../reducers/QueryParamsCacheReducer";
import {systemConfig} from "../../reducers/SystemConfigReducer";


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
