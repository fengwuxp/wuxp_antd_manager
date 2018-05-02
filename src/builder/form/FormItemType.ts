/**
 * 表单项类型
 */
export enum FormItemType {

    /**
     * 默认，不做任何处理
     */
    DEFAULT = "DEFAULT",


    /**
     * 输入框
     * @type {string}
     */
    INPUT = "INPUT",

    /**
     * 数值输入框
     * @type {string}
     */
    INPUT_NUMBER = "INPUT_NUMBER",

    /**
     * 自动完成
     * @type {string}
     */
    AUTO_COMPLETE = "AUTO_COMPLETE",


    /**
     * 提及
     * @type {string}
     */
    MENTION = "MENTION",

    /**
     * 评分
     * @type {string}
     */
    RATE = "RATE",

    /**
     * 复选框
     * @type {string}
     */
    CHECKBOX = "CHECKBOX",

    /**
     * 复选框组
     * @type {string}
     */
    CHECKBOX_GROUP = "CHECKBOX_GROUP",

    /**
     * 单选框
     * @type {string}
     */
    RADIO = "RADIO",

    /**
     * 单选框组
     * @type {string}
     */
    RADIO_GROUP = "RADIO_GROUP",

    /**
     * 选择框
     * @type {string}
     */
    SELECT = "SELECT",


    /**
     * 滑动输入条
     * @type {string}
     */
    SLIDER = "SLIDER",

    /**
     * 开关
     * @type {string}
     */
    SWITCH = "SWITCH",

    /**
     * 树形选择控件
     * @type {string}
     */
    TREE_SELECT = "TREE_SELECT",

    /**
     * 文本域
     * @type {string}
     */
    TEXT_AREA = "TEXT_AREA",

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
     * 时间选择器
     * @type {string}
     */
    TIMER_PICKER = "TIMER_PICKER",

    /**
     * 穿梭框
     * @type {string}
     */
    TRANSFER = "TRANSFER",

    /**
     * 级联时间选择
     * @type {string}
     */
    // CASCADE_TIME_SELECTOR = "CASCADE_TIME_SELECTOR",

    /**
     * 日期时间选择器
     * @type {string}
     */
    DATE_PICKER = "DATE_PICKER",

    /**
     * 范围时间选择器
     * @type {string}
     */
    RANG_PICKER = "RANG_PICKER",

    /**
     * 月份选择器
     * @type {string}
     */
    MONTH_PICKER = "MONTH_PICKER",

    /**
     * 星期选择器
     * @type {string}
     */
    WEEK_PICKER = "WEEK_PICKER"
}
