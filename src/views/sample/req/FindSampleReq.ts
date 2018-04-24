import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";

/**
*查找样例
**/
export interface FindSampleReq extends ApiReq{
    /**
     * ID
     */
    id:number;
}
