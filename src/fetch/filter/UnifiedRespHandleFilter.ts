import ApiAbstractFilter from "typescript_api_sdk/src/api/filter/ApiAbstractFilter"
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";


/**
 * 统一响应处理过滤器
 */
export class UnifiedRespHandleFilter extends ApiAbstractFilter {


    preHandle(params: any): boolean | Promise<boolean> {
        return super.preHandle(params);
    }

    postHandle(resp: ApiResp<any>, context?: any): boolean {

        const {code,}=resp;


        return super.postHandle(resp, context);
    }
}
