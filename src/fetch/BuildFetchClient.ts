import EsServiceSimpleProxyFactory from "typescript_api_sdk/src/api/impl/es/EsServiceSimpleProxyFactory"
import ApiClientFetch from "typescript_api_sdk/src/api/impl/es/ApiClientFetch"
import {FilterItem} from "typescript_api_sdk/src/api/filter/model/FilterItem";
import {UnifiedRespHandleFilter} from "./filter/UnifiedRespHandleFilter";


const filters: Array<FilterItem> = [
    {
        filter: new UnifiedRespHandleFilter(),
        filterName: "RespDataHandleFilter"
    }
];

export default EsServiceSimpleProxyFactory.newProxyInstances<ApiClientFetch>(filters);
