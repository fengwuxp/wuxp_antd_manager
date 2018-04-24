import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq";

/**
 *查询地区
 **/
export interface QueryAreaReq extends ApiQueryReq {
    /**
     * 地区编码
     */
    id?: string;
    /**
     * ids
     */
    ids?: string[];
    /**
     * 地区名称
     */
    name?: string;
    /**
     * 地区父ID
     */
    parentId?: string;
    /**
     * 地区深度，从1开始
     */
    level?: number;
    /**
     * 第三方地区编码
     */
    thirdCode?: string;
    /**
     * 是否启用
     */
    status?: boolean;
    /**
     * 分割id
     */
    splitIdToIds?: boolean;
    /**
     * 查询上级地区
     */
    loadPrent?: boolean;
    /**
     * 查询下级地区
     */
    loadChildren?: boolean;
}
