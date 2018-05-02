import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import SendMode from "../enums/SendMode";
import {FormBuilder, ProxyFormBuilderType} from "../../../builder/form/FormItemBuilder";
import {DatePickerProps} from "antd/lib/date-picker/interface";

/**
*创建样例
**/
export interface CreateSampleReq extends ApiReq{
    /**
     * 名称
     */
    name:string;
    /**
     * 图标
     */
    icon?:string;
    /**
     * 简介
     */
    description?:string;
    /**
     * 发布日期
     */
    publicDate?:Date;
    /**
     * 发布类型
     */
    sendMode:SendMode;
    /**
     * 活动介绍
     */
    mediumBody?:string;
    /**
     * 附件
     */
    downFile?:string;
    /**
     * 活动URL
     */
    hdUrl?:string;
    /**
     * 数量
     */
    number:number;
    /**
     * 费率（百分比）
     */
    feePct?:number;
    /**
     * 费率（千分比）
     */
    feePpt?:number;
    /**
     * 手续费（分）
     */
    feeFen?:number;
    /**
     * 手续费（元）
     */
    feeYuan?:number;
    /**
     * 销售额（万元）
     */
    sale?:number;
    /**
     * 上级ID
     */
    parentId?:number;
    /**
     * 地区ID
     */
    areaId?:string;
}


export interface CreateSampleReqBuilder extends FormBuilder<CreateSampleReq>{
    /**
     * 名称
     */
    name:ProxyFormBuilderType<any>;
    /**
     * 图标
     */
    icon?:ProxyFormBuilderType<any>;
    /**
     * 简介
     */
    description?:ProxyFormBuilderType<any>;
    /**
     * 发布日期
     */
    publicDate?:ProxyFormBuilderType<DatePickerProps>;
    /**
     * 发布类型
     */
    sendMode:ProxyFormBuilderType<any>;
    /**
     * 活动介绍
     */
    mediumBody?:ProxyFormBuilderType<any>;
    /**
     * 附件
     */
    downFile?:ProxyFormBuilderType<any>;
    /**
     * 活动URL
     */
    hdUrl?:ProxyFormBuilderType<any>;
    /**
     * 数量
     */
    number:ProxyFormBuilderType<any>;
    /**
     * 费率（百分比）
     */
    feePct?:ProxyFormBuilderType<any>;
    /**
     * 费率（千分比）
     */
    feePpt?:ProxyFormBuilderType<any>;
    /**
     * 手续费（分）
     */
    feeFen?:ProxyFormBuilderType<any>;
    /**
     * 手续费（元）
     */
    feeYuan?:ProxyFormBuilderType<any>;
    /**
     * 销售额（万元）
     */
    sale?:ProxyFormBuilderType<any>;

    /**
     * 启用
     */
    enabled?:ProxyFormBuilderType<any>;
    /**
     * 上级ID
     */
    parentId?:ProxyFormBuilderType<any>;
    /**
     * 地区ID
     */
    areaId?:ProxyFormBuilderType<any>;
}
