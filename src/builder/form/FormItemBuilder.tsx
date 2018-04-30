import {GetFieldDecoratorOptions, WrappedFormUtils} from "antd/lib/form/Form";
import * as React from "react";
import {isNullOrUndefined} from "util";

/**
 * 用于构建表单
 */
export default class FormItemBuilder {

    /**
     *
     * @param {WrappedFormUtils} form
     * @returns {T}
     */
    public static builder<T extends FormBuilder<any>>(form: WrappedFormUtils): T {

        return new ProxyFormBuilder<T>(form).builder();
    }
}

/**
 * 表单代理建造者
 */
class ProxyFormBuilder<T extends FormBuilder<any>> {


    private options: Map<string, ProxyFormItemOptionsAny> = new Map<string, ProxyFormItemOptionsAny>();

    private form: WrappedFormUtils;

    constructor(form: WrappedFormUtils) {
        this.form = form;
    }

    /**
     * @returns {T} 返回一个表单构建造者
     */
    builder() {
        const {getFieldDecorator} = this.form;
        const ProxyFormBuilder: ProxyHandler<T> = {

            get: (target: T, prop: PropertyKey, receiver: any): any => {

                const propertyKey = prop as string;


                if (propertyKey === "build") {
                    //返回一个代理的操作对象
                    return () => this.getAndSetProxy();
                }
                /**
                 * 初始化
                 * @param { React.ReactNode}表单node
                 * @param {ProxyFormItemOptionsAny}配置
                 */
                return (node: React.ReactNode, options?: ProxyFormItemOptionsAny) => {


                    const reactNode = getFieldDecorator(propertyKey, options)(node);
                    this.options.set(propertyKey, options);

                    return reactNode;
                }
            },
            set: (target: T, p: PropertyKey, value: any, receiver: any): boolean => {
                throw new Error("禁止设置新的属性")
            }
        };
        return new Proxy<T>({} as T, ProxyFormBuilder);
    }

    /**
     *代理处理 setter getter
     */
    private getAndSetProxy() {

        const {setFieldsValue, getFieldValue} = this.form;
        const proxyHandler: ProxyHandler<T> = {
            get: (target: T, prop: PropertyKey, receiver: any): any => {
                //getter
                const propertyKey = prop as string;
                const fieldValue = getFieldValue(propertyKey);
                return this.getFormatterValue(propertyKey, fieldValue);
            },
            set: (target: T, prop: PropertyKey, value: any, receiver): boolean => {
                //setter
                console.log("---代理设置值-->", prop, value);

                const key = prop as string;
                if (isNullOrUndefined(this.options.get(key))) {
                    return true;
                }
                let obj = {};
                obj[key] = value;
                setFieldsValue(obj);
                return true

            }
        };

        return new Proxy<T>({} as T, proxyHandler);
    }

    /**
     * 获取被格式化的值
     * @param key
     * @param fieldValue
     * @returns {any}
     */
    private getFormatterValue = (key, fieldValue) => {
        const formatter = this.options.get(key).formatter;

        if (isNullOrUndefined(formatter)) {
            return fieldValue;
        }
        return formatter(fieldValue);
    }


}

// if (propertyKey === "buildSubmitReq") {
//
//     /**
//      * 构建要提交的对象
//      */
//     return <R extends ApiReq>(formData: object): R => {
//         const req = {};
//         for (const name in formData) {
//             const fieldValue = getFieldValue(name);
//             req[name] = this.getFormatterValue(name, fieldValue);
//         }
//         return req as R;
//     }
// }

/**
 * 代理表单配置
 * @param S 表单元素的原始值类型
 * @param E 转化后的值类型
 */
interface ProxyFormItemOptions<S, E> extends GetFieldDecoratorOptions {

    /**
     * 值转换
     * @param {S}value
     * @returns {E}
     */
    formatter?: (value: S) => E;

}

/**
 * 代理表单配置
 */
type ProxyFormItemOptionsAny = ProxyFormItemOptions<any, any>

/**
 * 代理表单建造者类型
 * @param T 表单提交对象
 */
export type ProxyFormBuilderType<T> = (node: React.ReactNode, options?: ProxyFormItemOptionsAny) => T

/**
 * 表单建造者
 */
export interface FormBuilder<T> {

    /**
     * 构建 req对象
     * @returns {T}
     */
    build: () => T;
}
