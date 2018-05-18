import {FetchOption} from "typescript_api_sdk/src/api/option/FetchOption";
import {ReqMethod} from "typescript_api_sdk/src/api/enums/ReqMethod";
import {DataType} from "typescript_api_sdk/src/api/enums/DataType";
import {PageInfo} from "typescript_api_sdk/src/api/model/PageInfo";
import {AreaInfo} from "./info/AreaInfo";
import {QueryAreaReq} from "./req/QueryAreaReq";
import {buildProxyService} from "../../fetch/BuildFetchClient";


/**
 * 数据维护服务
 */
class InfoProvideService {

    /**
     * 构造函数中返回代理对象
     * @return {any}
     */
    constructor() {
        return buildProxyService(this);
    }


    /**
     * 查询地区
     * @param params 参数
     * @param option 请求配置
     */
    queryArea = (params: QueryAreaReq, option?: FetchOption ): Promise<PageInfo<AreaInfo>> => {

        return [] as any;
    };

}

export default new InfoProvideService();
