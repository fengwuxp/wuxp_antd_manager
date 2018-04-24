import ApiAbstractFilter from "typescript_api_sdk/src/api/filter/ApiAbstractFilter"
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {isNullOrUndefined} from "util";
import {message as AntdMessage} from "antd";
import {analysisAction} from "../action/ActionStrategy";

/**
 * 统一响应处理过滤器
 */
export class UnifiedRespHandleFilter extends ApiAbstractFilter {


    preHandle(params: any): boolean | Promise<boolean> {
        return super.preHandle(params);
    }

    postHandle(resp: ApiResp<any>, context?: any): boolean {
        const {message, success, actions} = resp;

        if ('records' in resp) {
            //返回列表数据的请求
            return true;
        }
        if (success) {
            AntdMessage.success(message ? message : "操作成功", 2, () => {
                if (isNullOrUndefined(actions) || actions.length === 0) {
                    return;
                }
                analysisAction(actions[0]);
            });

        } else {
            //请求失败
            AntdMessage.warn(message ? message : "操作失败");
        }

        return true;
    }
}
