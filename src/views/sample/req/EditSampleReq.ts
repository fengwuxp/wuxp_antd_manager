import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import SendMode from "../enums/SendMode";
import {FormBuilder, ProxyFormBuilderType} from "../../../builder/form/FormItemBuilder";

/**
 *编辑样例
 **/
export interface EditSampleReq extends ApiReq {
    /**
     * ID
     */
    id: number;
    /**
     * 名称
     */
    name?: string;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 简介
     */
    description?: string;
    /**
     * 发布日期
     */
    publicDate?: Date;
    /**
     * 发布类型
     */
    sendMode?: SendMode;
    /**
     * 活动介绍
     */
    mediumBody?: string;
    /**
     * 附件
     */
    downFile?: string;
    /**
     * 活动URL
     */
    hdUrl?: string;
    /**
     * 数量
     */
    number?: number;
    /**
     * 费率（百分比）
     */
    feePct?: number;
    /**
     * 费率（千分比）
     */
    feePpt?: number;
    /**
     * 手续费（分）
     */
    feeFen?: number;
    /**
     * 手续费（元）
     */
    feeYuan?: number;
    /**
     * 销售额（万元）
     */
    sale?: number;
    /**
     * 启用
     */
    enabled?: boolean;
    /**
     * 上级ID
     */
    parentId?: number;
    /**
     * 地区ID
     */
    areaId?: string;
}

export interface EditSampleReqBuilder extends FormBuilder<EditSampleReq> {
    /**
     * ID
     */
    id: ProxyFormBuilderType;
    /**
     * 名称
     */
    name?: ProxyFormBuilderType;
    /**
     * 图标
     */
    icon?: ProxyFormBuilderType;
    /**
     * 简介
     */
    description?: ProxyFormBuilderType;
    /**
     * 发布日期
     */
    publicDate?: ProxyFormBuilderType;
    /**
     * 发布类型
     */
    sendMode?: ProxyFormBuilderType;
    /**
     * 活动介绍
     */
    mediumBody?: ProxyFormBuilderType;
    /**
     * 附件
     */
    downFile?: ProxyFormBuilderType;
    /**
     * 活动URL
     */
    hdUrl?: ProxyFormBuilderType;
    /**
     * 数量
     */
    number?: ProxyFormBuilderType;
    /**
     * 费率（百分比）
     */
    feePct?: ProxyFormBuilderType;
    /**
     * 费率（千分比）
     */
    feePpt?: ProxyFormBuilderType;
    /**
     * 手续费（分）
     */
    feeFen?: ProxyFormBuilderType;
    /**
     * 手续费（元）
     */
    feeYuan?: ProxyFormBuilderType;
    /**
     * 销售额（万元）
     */
    sale?: ProxyFormBuilderType;
    /**
     * 启用
     */
    enabled?: ProxyFormBuilderType;
    /**
     * 上级ID
     */
    parentId?: ProxyFormBuilderType;
    /**
     * 地区ID
     */
    areaId?: ProxyFormBuilderType;
}

