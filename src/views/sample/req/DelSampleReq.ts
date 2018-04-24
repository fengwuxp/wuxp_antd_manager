import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";

/**
*删除样例
**/
export interface DelSampleReq extends ApiReq{
    /**
     * ID
     */
    id?:number;
    /**
     * ID集合
     */
    ids?:number[];
}
