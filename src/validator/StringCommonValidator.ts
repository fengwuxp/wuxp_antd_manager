import {isNullOrUndefined} from "util";

/**
 * String 类型常用的自定义验证器
 */
// type Validator = (rule: any, value: any, callback: any, source?: any, options?: any) => any;

export default class StringCommonValidator {

    /**
     * 输入字符的最大长度
     * @param {number} rule
     * @param {string} value
     * @param callback
     * @param source
     * @param options
     * @return {boolean}
     */
    static maxLength = (rule: number, value: string, callback: any, source?: any, options?: any): boolean => {

        if (isNullOrUndefined(value)) {
            return true
        }

        return value.length <= rule;
    };

    /**
     * 输入字符串的最小长度
     * @param {number} rule
     * @param {string} value
     * @param callback
     * @param source
     * @param options
     * @return {boolean}
     */
    static minLength = (rule: number, value: string, callback: any, source?: any, options?: any): boolean => {
        if (isNullOrUndefined(value)) {
            return true
        }

        return value.length >= rule;
    };


    /**
     * 字符串的输入范围
     * @param {number[]} rule
     * @param {string} value
     * @param callback
     * @param source
     * @param options
     * @return {boolean}
     */
    static rangLength = (rule: number[], value: string, callback: any, source?: any, options?: any): boolean => {

        return StringCommonValidator.minLength(rule[0], value, callback, source, options) ||
            StringCommonValidator.maxLength(rule[1], value, callback, source, options)
    }
}
