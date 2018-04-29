

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
