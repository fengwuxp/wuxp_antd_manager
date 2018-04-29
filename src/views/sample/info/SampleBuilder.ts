import {HasActionTable} from "../../../builder/table/TableColumnsBuilder";
import {ColumnProps} from "antd/es/table/interface";
import {SampleInfo} from "./SampleInfo";

/**
 * sampleInfo
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
