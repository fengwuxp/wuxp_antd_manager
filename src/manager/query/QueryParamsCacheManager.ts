import {QueryParamsCacheReducer} from "../../reducers/QueryParamsCacheReducer";
import {QueryParamsCache} from "../../model/AntdAdminStore";
import {reduxActionFactory} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxActionProxy";
import {antdAdminStore} from "../store/StoreManager";

class QueryParamsCacheManager implements QueryParamsCacheReducer {

    updateCache: (...p) => QueryParamsCache<any>;

}

const QueryParamsCacheAction: QueryParamsCacheManager = reduxActionFactory<QueryParamsCacheManager>(new QueryParamsCacheManager(), antdAdminStore);
export {
    QueryParamsCacheAction
}
