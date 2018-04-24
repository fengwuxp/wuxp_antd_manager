/**
 *地区信息
 **/
export interface AreaInfo {
    /**
     * 地区名称
     */
    name: string;
    /**
     * 地区父ID
     */
    parentId: string;
    /**
     * 第三方地区
     */
    thirdCode: string;
    /**
     * 下级地区列表
     */
    children: Array<AreaInfo>;
    /**
     * 地区行政编码
     */
    id: string;
    /**
     * 地区启用状态
     */
    status: boolean;
    /**
     * 上级地区
     */
    parent: AreaInfo;
    /**
     * 地区深度，从1开始
     */
    level: number;
    /**
     * 排序
     */
    sort: number;
    /**
     * 地区简称
     */
    shortName: string;
}
