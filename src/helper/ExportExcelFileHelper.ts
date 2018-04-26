import apiClient from "../fetch/BuildFetchClient";


/**
 * excel导出描述
 */
export interface ExportExcelDesc {


    /**
     * 导出属性表达式 支持 a.b.c
     */
    fieldNameExp: string;

    /**
     * 导出excel文件的标题
     */
    title: string;

    /**
     * 格式化类型
     * 默认值 FormatterType.DEFAULT;
     */
    formatterType?: FormatterType

    /**
     * 格式化表正则达式
     */
    formatterPattern?: string

    /**
     * map装换数据源，在该对象不为空时，将自动启用map转换器
     */
    mapFormatterSource?: object
}

/**
 * 格式化类型
 */
export enum FormatterType {

    /**
     * 默认，不处理
     */
    DEFAULT = 'DEFAULT',

    /**
     * map转换器
     */
    MAP_DATA = 'MAP_DATA',

    /**
     * 金额转换,分转元
     */
    FEN_TO_YUAN = 'FEN_TO_YUAN',

    /**
     * 金额转换,元转分
     */
    YUAN_TO_FEN = 'YUAN_TO_FEN',

    /**
     * 时间转字符串
     */
    DATE_TO_STRING = 'DATE_TO_STRING',

    /**
     * 格式化数值
     */
    NUMBER = 'NUMBER',

    /**
     * 自定义转换
     */
    CUSTOM = 'CUSTOM'
}

export default class ListQueryHelper {


    /**
     * 导出excel file
     * @param {string} url
     * @param params  查询参数
     * @param exportItems 需要导出的字段
     * @param fileName 导出的文件名称
     */
    public static exportExcelFile = (url: string, params: any, exportItems: Array<ExportExcelDesc>, fileName: string): void => {
        // Modal.confirm({
        //     title:"提示",
        //     content:"确认导出"
        // })
        const data = {
            ...params,
            exportDescJSON: JSON.stringify(exportItems),
            async: true,
            fileName
        };
        apiClient.post({
            url,
            data: params
        }).then((data) => {
            ListQueryHelper.pollingExportStatus(data)
        }).catch((e) => {

        });

    };


    /**
     * 导入excel file
     */
    public static importExcelFile = () => {

    };


    /**
     * 轮询导出状态
     * @param {string} sessionId
     */
    private static pollingExportStatus = (sessionId: string) => {
        //TODO
    };

    /**
     * 轮询导入状态
     * @param {string} sessionId
     */
    private static pollingImportStatus = (sessionId: string) => {
        //TODO
    };
}
