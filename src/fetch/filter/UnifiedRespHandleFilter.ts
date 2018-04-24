import ApiAbstractFilter from "typescript_api_sdk/src/api/filter/ApiAbstractFilter"
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {isNullOrUndefined} from "util";
import {message as AntdMessage} from "antd";
import {analysisAction} from "../action/ActionStrategy";

/**
 * 统一响应处理过滤器
 */
export class UnifiedRespHandleFilter extends ApiAbstractFilter {


    postHandle(resp: ApiResp<any>, context?: any): boolean {

        const {message, success, actions} = resp;
        if (success) {
            if (isNullOrUndefined(actions) || actions.length === 0) {
                AntdMessage.warn(message ? message : "操作成功");
            } else {
                analysisAction(actions[0])
            }

        } else {
            //请求失败
            AntdMessage.warn(message ? message : "操作失败");
        }

        return true;
    }
}
