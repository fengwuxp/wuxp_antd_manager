import ApiAbstractFilter from "typescript_api_sdk/src/api/filter/ApiAbstractFilter"


/**
 * 统一响应处理过滤器
 */
export class UnifiedRespHandleFilter extends ApiAbstractFilter{


    preHandle(params: any): boolean | Promise<boolean> {
        return super.preHandle(params);
    }

    postHandle(data: any, context?: any): boolean {
        return super.postHandle(data, context);
    }
}
