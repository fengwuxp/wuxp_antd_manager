import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import SendMode from "../enums/SendMode";

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
