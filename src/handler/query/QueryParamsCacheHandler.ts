import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";

import {QueryParamsCache} from "../../model/AntdAdminStore";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {DefaultAction} from "wuxp_react_dynamic_router/src/decorator/TargetReduxAction";

/**
 *  缓存查询参数处理
 */
export interface QueryParamsCacheHandler extends SagaHandler<QueryParamsCache> {

    updateCache: (state: QueryParamsCache, newState?: QueryParamsCache) => QueryParamsCache;
}

class QueryParamsCacheHandlerImpl implements QueryParamsCacheHandler {

    default: QueryParamsCache = {} as QueryParamsCache;

    @DefaultAction()
    updateCache: (state: QueryParamsCache, newState?: QueryParamsCache) => QueryParamsCache;

}

const queryParamsCacheHandler = new QueryParamsCacheHandlerImpl();

const queryParamsCache = createReducerByHandler<QueryParamsCache>(queryParamsCacheHandler);

const paramsCacheHandler = createReduxHandler<QueryParamsCacheHandler>(queryParamsCacheHandler,true);

/**
 * 默认的查询大小
 * @type {number}
 */
const DEFAULT_QUERY_SIZE: number = 10;

export {
    queryParamsCache,
    paramsCacheHandler,
    DEFAULT_QUERY_SIZE
}
