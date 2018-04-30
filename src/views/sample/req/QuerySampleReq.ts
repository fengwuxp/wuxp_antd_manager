import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq";
import SendMode from "../enums/SendMode";
import {FormBuilder, ProxyFormBuilderType} from "../../../builder/form/FormItemBuilder";


/**
 *查询样例
 **/
export interface QuerySampleReq extends ApiQueryReq {
    /**
     * ID
     */
    id?: number;
    /**
     * 编号
     */
    sn?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 名称模糊查询
     */
    nameLike?: string;
    /**
     * 最小发布日期
     */
    minPublicDate?: Date;
    /**
     * 最大发布日期
     */
    maxPublicDate?: Date;
    /**
     * 发布类型
     */
    sendMode?: SendMode;
    /**
     * 启用
     */
    enabled?: boolean;
    /**
     * 上级ID
     */
    parentId?: number;
    /**
     * 加载上级信息
     */
    loadParent?: boolean;
    /**
     * 地区ID
     */
    areaId?: string;
    /**
     * 最小创建日期
     */
    minAddTime?: Date;
    /**
     * 最大创建日期
     */
    maxAddTime?: Date;
    /**
     * 最小更新日期
     */
    minUpdateTime?: Date;
    /**
     * 最大更新日期
     */
    maxUpdateTime?: Date;
}

export interface QuerySampleReqBuilder extends FormBuilder<QuerySampleReq> {
    /**
     * ID
     */
    id?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 编号
     */
    sn?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 名称
     */
    name?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 名称模糊查询
     */
    nameLike?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最小发布日期
     */
    minPublicDate?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最大发布日期
     */
    maxPublicDate?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 发布类型
     */
    sendMode?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 启用
     */
    enabled?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 上级ID
     */
    parentId?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 加载上级信息
     */
    loadParent?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 地区ID
     */
    areaId?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最小创建日期
     */
    minAddTime?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最大创建日期
     */
    maxAddTime?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最小更新日期
     */
    minUpdateTime?: ProxyFormBuilderType<QuerySampleReqBuilder>;
    /**
     * 最大更新日期
     */
    maxUpdateTime?: ProxyFormBuilderType<QuerySampleReqBuilder>;

    publicDate: ProxyFormBuilderType<QuerySampleReqBuilder>;
}
