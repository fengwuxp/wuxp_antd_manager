import ApiAbstractFilter from "typescript_api_sdk/src/api/filter/ApiAbstractFilter"
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {isNullOrUndefined} from "util";
import {message as AntdMessage} from "antd";
import {analysisAction} from "../action/ActionStrategy";

let count = 0;

/**
 * 统一响应处理过滤器
 */
export class UnifiedRespHandleFilter extends ApiAbstractFilter {


    // preHandle(params: FetchOption): boolean | Promise<boolean> {
    //
    //     const {headers} = params;
    //     params.headers = {
    //         ...headers,
    //         viewType: 'react'
    //     };
    //     return true;
    // }

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
            if (count === 0) {
                //请求失败
                count++;
                AntdMessage.warn(message ? message : "操作失败", 2, () => {
                    count--;
                });
            }

        }

        return true;
    }
}
