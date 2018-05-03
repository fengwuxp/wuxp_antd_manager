import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import SendMode from "../enums/SendMode";
import {FormBuilder, ProxyFormBuilderType} from "../../../builder/form/FormItemBuilder";
import {DatePickerProps} from "antd/lib/date-picker/interface";
import {AntdSelectProps} from "../../../builder/form/item/CommonSimpleComponentHandler";
import {InputProps, TextAreaProps} from "antd/lib/input";
import {InputNumberProps} from "antd/lib/input-number";
import {UploadProps} from "antd/lib/upload";
import {SampleInfo} from "../info/SampleInfo";
import {LookupProps} from "../../../components/form/lookup/Lookup";
import {TextareaHTMLAttributes} from "react";
import {SwitchProps} from "antd/lib/switch";
import {CascaderProps} from "antd/lib/cascader";

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
    name?: ProxyFormBuilderType<InputProps>;
    /**
     * 图标
     */
    icon?: ProxyFormBuilderType<UploadProps>;

    /**
     * 简介
     */
    description?: ProxyFormBuilderType<InputProps>;
    /**
     * 发布日期
     */
    publicDate?: ProxyFormBuilderType<DatePickerProps>;
    /**
     * 发布类型
     */
    sendMode?: ProxyFormBuilderType<AntdSelectProps>;
    /**
     * 活动介绍
     */
    mediumBody?: ProxyFormBuilderType<TextAreaProps & TextareaHTMLAttributes<any>>;
    /**
     * 附件
     */
    downFile?: ProxyFormBuilderType<UploadProps>;
    /**
     * 活动URL
     */
    hdUrl?: ProxyFormBuilderType<InputProps>;
    /**
     * 数量
     */
    number?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 费率（百分比）
     */
    feePct?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 费率（千分比）
     */
    feePpt?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 手续费（分）
     */
    feeFen?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 手续费（元）
     */
    feeYuan?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 销售额（万元）
     */
    sale?: ProxyFormBuilderType<InputNumberProps>;
    /**
     * 启用
     */
    enabled?: ProxyFormBuilderType<SwitchProps>;

    /**
     * 上级ID
     */
    parentId?: ProxyFormBuilderType<LookupProps<SampleInfo>>;

    /**
     * 地区ID
     */
    areaId?: ProxyFormBuilderType<CascaderProps>;
}
