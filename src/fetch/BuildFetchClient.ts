import EsServiceSimpleProxyFactory from "typescript_api_sdk/src/api/impl/es/EsServiceSimpleProxyFactory"
import FetchHttpErrorHandler from "typescript_api_sdk/src/api/error/FetchHttpErrorHandler"
import ApiClientFetch from "typescript_api_sdk/src/api/impl/es/ApiClientFetch"
import {FilterItem} from "typescript_api_sdk/src/api/filter/model/FilterItem";
import {UnifiedRespHandleFilter} from "./filter/UnifiedRespHandleFilter";
import {FetchOption} from "typescript_api_sdk/src/api/option/FetchOption";
import {DataType} from "typescript_api_sdk/src/api/enums/DataType";
import {httpCode301Handler, httpCode401Handler} from "./http/HttpCodeHandler";


/**
 * fetch 请求过滤器
 * @type {{filter: UnifiedRespHandleFilter; filterName: string}[]}
 */
const filters: Array<FilterItem> = [
    {
        filter: new UnifiedRespHandleFilter(),
        filterName: "RespDataHandleFilter"
    }
];

/**
 * 默认的fetch请求配置
 * @type {FetchOption}
 */
const defaultOptions = {
    // credentials: "same-origin",
    //请求是带上cookie，允许跨越
    credentials: "include",
    dataType: DataType.JSON,
    headers: {
        viewType: 'react'
    }
} as FetchOption;

//http强求处理错误处理者
const httpErrorHandler: FetchHttpErrorHandler = new FetchHttpErrorHandler();

//添加一个301错误状态的处理者
httpErrorHandler.addErrorCodeHandle(301, httpCode301Handler);

//添加一个301错误状态的处理者
httpErrorHandler.addErrorCodeHandle(401, httpCode401Handler);

export default EsServiceSimpleProxyFactory.newProxyInstances<ApiClientFetch>(httpErrorHandler, filters, defaultOptions);

export function buildProxyService<T>(service: T): T {
    return EsServiceSimpleProxyFactory.newProxyInstances<T>(httpErrorHandler, filters, defaultOptions, service);
}
