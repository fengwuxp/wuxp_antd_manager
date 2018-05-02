/**
 * 表单项类型
 */
export enum FormItemType {

    /**
     * 默认，不做任何处理
     */
    DEFAULT = "DEFAULT",

    /**
     * 文件上传
     * @type {string}
     */
    UPLOAD_FILE = "UPLOAD_FILE",

    /**
     * 图片上传
     * @type {string}
     */
    UPLOAD_IMAGE = "UPLOAD_IMAGE",

    /**
     * 级联时间选择
     * @type {string}
     */
    CASCADE_TIME_SELECTOR = "CASCADE_TIME_SELECTOR",

    /**
     * 时间选择器
     * @type {string}
     */
    DATE_PICKER = "DATE_PICKER"
}
