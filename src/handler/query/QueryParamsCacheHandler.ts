import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";
import {QueryParamsCache} from "../../model/AntdAdminStore";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";

/**
 *  缓存查询参数处理
 */
export interface QueryParamsCacheHandler extends SagaHandler<QueryParamsCache> {

    updateCache: (...p) => ReduxAction<QueryParamsCache>;
}

class QueryParamsCacheHandlerImpl implements QueryParamsCacheHandler {

    default: QueryParamsCache = null;

    updateCache: (...p) => ReduxAction<QueryParamsCache>;

}

const queryParamsCacheHandler = new QueryParamsCacheHandlerImpl();

const queryParamsCache = createReducerByHandler<QueryParamsCache>(queryParamsCacheHandler);

const paramsCacheHandler = createReduxHandler<QueryParamsCacheHandler>(queryParamsCacheHandler);

/**
 * 默认的查询大小
 * @type {number}
 */
const DEFAULT_QUERY_SIZE:number=10;

export {
    queryParamsCache,
    paramsCacheHandler,
    DEFAULT_QUERY_SIZE
}
