import {HasActionTable} from "../../../builder/table/TableColumnsBuilder";
import {ColumnProps} from "antd/es/table/interface";
/**
 * sampleInfo
 */
export interface SampleInfo  {


    /**
     * id
     */
    id: number;


    /**
     * sn
     */
    sn: string;

    /**
     * 姓名
     */
    name: string;

    /**
     * 图标
     */
    icon: string;

    /**
     * 简介
     */
    description: string;

    /**
     * 发布日期
     */
    publicDate: Date;

    /**
     * 发布类型
     */
    sendMode: string

    /**
     * 活动介绍
     */
    mediumBody: string;

    /**
     * 附件
     */
    downFile: string;

    /**
     * 活动URL
     */
    hdUrl: string

    /**
     * 数量
     */
    number: string;


    /**
     * 费率（百分比）
     */
    feePct: number;

    /**
     * 费率（千分比）
     */
    feePpt: number;

    /**
     * 手续费（分）
     */
    feeFen: number;

    /**
     * 手续费（元）
     */
    feeYuan: number;

    /**
     * 销售额（万元）
     */
    sale: string;

    /**
     * 启用
     */
    enabled: boolean;

    /**
     * 上级ID
     */
    parentId: number;

    /**
     * 上级信息
     */
    parentInfo: SampleInfo;

    /**
     * 地区信息ID
     */
    areaId: string;

    /**
     * 地区信息
     */
    areaInfo: any;

    /**
     * 创建日期
     */
    addTime: Date;

    /**
     * 更新日期
     */
    updateTime: Date;
}

/**
 * SampleBuilder
 */
export interface SampleBuilder extends HasActionTable<SampleBuilder, SampleInfo> {

    /**
     * id
     */
    id: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * sn
     */
    sn: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 姓名
     */
    name: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 图标
     */
    icon: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 简介
     */
    description: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 发布日期
     */
    publicDate: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 发布类型
     */
    sendMode: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 活动介绍
     */
    mediumBody: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 附件
     */
    downFile: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 活动URL
     */
    hdUrl: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 数量
     */
    number: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 费率（百分比）
     */
    feePct: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 费率（千分比）
     */
    feePpt: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 手续费（分）
     */
    feeFen: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 手续费（元）
     */
    feeYuan: (column: ColumnProps<SampleInfo>) => SampleBuilder;

    /**
     * 销售额（万元）
     */
    sale: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 启用
     */
    enabled: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 上级ID
     */
    parentId: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 上级信息
     */
    parentInfo: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 地区信息ID
     */
    areaId: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 地区信息
     */
    areaInfo: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 创建日期
     */
    addTime: (column: ColumnProps<SampleInfo>) => SampleBuilder;


    /**
     * 更新日期
     */
    updateTime: (column: ColumnProps<SampleInfo>) => SampleBuilder;

}
