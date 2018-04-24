import EsServiceSimpleProxyFactory from "typescript_api_sdk/src/api/impl/es/EsServiceSimpleProxyFactory"
import ApiClientFetch from "typescript_api_sdk/src/api/impl/es/ApiClientFetch"
import {FilterItem} from "typescript_api_sdk/src/api/filter/model/FilterItem";
import {UnifiedRespHandleFilter} from "./filter/UnifiedRespHandleFilter";
import {FetchOption} from "typescript_api_sdk/src/api/option/FetchOption";
import {DataType} from "typescript_api_sdk/src/api/enums/DataType";


const filters: Array<FilterItem> = [
    {
        filter: new UnifiedRespHandleFilter(),
        filterName: "RespDataHandleFilter"
    }
];

let defaultOptions = {
    // credentials: "same-origin",
    credentials: "include",
    dataType: DataType.JSON
} as FetchOption;

export default EsServiceSimpleProxyFactory.newProxyInstances<ApiClientFetch>(filters, defaultOptions);

export function buildProxyService<T>(service: T): T {
    return EsServiceSimpleProxyFactory.newProxyInstances<T>([], defaultOptions, service);
}
