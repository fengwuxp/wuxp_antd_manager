import {reducerFactory, ReduxReducer} from "wuxp_react_dynamic_router/src/proxy/redux/ReduxReducer";
import {QueryParamsCache} from "../model/AntdAdminStore";
import {Reducer} from "redux";

/**
 * 默认的查询大小
 * @type {number}
 */
export const DEFAULT_QUERY_SIZE: number = 20;

export interface QueryParamsCacheReducer extends ReduxReducer<QueryParamsCache<any>> {

    /**
     * 更新缓存数据
     */
    updateCache: Reducer<QueryParamsCache<any>>;
}

const QueryParamsCacheManager: QueryParamsCacheReducer = {

    default: {

        params: {
            querySize: DEFAULT_QUERY_SIZE,
            queryPage: 1,
        },

        prevFetchUrl: null
    },

    updateCache: undefined


};

const queryParamsCache = reducerFactory<QueryParamsCacheReducer, QueryParamsCache<any>>(QueryParamsCacheManager);

export {
    queryParamsCache
}
