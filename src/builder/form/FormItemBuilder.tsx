import {GetFieldDecoratorOptions, WrappedFormUtils} from "antd/lib/form/Form";
import * as React from "react";
import {isArray, isFunction, isNullOrUndefined} from "util";
import {FormItemType} from "./FormItemType";
import {handleUploadImage} from "./item/UploadComponentHandler";
import {simpleHandleDatePicker} from "./item/DatePickerComponentHandler";
import CommonSimpleComponentHandler from "./item/CommonSimpleComponentHandler";
import {handleLookup} from "./item/LookupComponentHandler";


/**
 * 用于构建表单
 */
export default class FormItemBuilder {

    /**
     *
     * @param {WrappedFormUtils} form
     * @returns {T}
     */
    public static builder<T extends FormBuilder<Q>, Q extends object>(form: WrappedFormUtils): T {

        return new ProxyFormBuilder<T, Q>(form).builder();
    }
}

/**
 * 表单代理建造者
 */
class ProxyFormBuilder<T extends FormBuilder<Q>, Q extends object> {


    private options: Map<string, ProxyFormItemOptionsAny<any>> = new Map<string, ProxyFormItemOptionsAny<any>>();

    private form: WrappedFormUtils;

    /**
     *是否执行
     */
    private isExecute: boolean;


    constructor(form: WrappedFormUtils) {
        this.form = form;
    }

    /**
     * @returns {T} 返回一个表单构建造者
     */
    builder() {
        const {getFieldDecorator, getFieldValue} = this.form;
        const ProxyFormBuilder: ProxyHandler<T> = {

            get: (target: T, prop: PropertyKey, receiver: any): any => {

                const propertyKey = prop as string;


                if (propertyKey === "build") {
                    //返回一个代理的操作对象
                    return () => this.getAndSetProxy();
                }

                if (propertyKey === "executeInitFunction") {
                    return () => this.executeInitFunction();
                }
                /**
                 * 初始化
                 * @param {ProxyFormItemOptionsAny}配置
                 */
                return (options: ProxyFormItemOptionsAny<any> = {}) => {

                    if (isNullOrUndefined(options.formItemType)) {
                        options.formItemType = FormItemType.DEFAULT
                    }

                    let newOption = {...options};

                    const {formItemType, formItemProps, initialValue} = newOption;

                    /**
                     * @param { React.ReactNode} 表单node
                     */
                    return (node?: React.ReactNode) => {

                        const reactNodes = [];

                        //处理默认组件
                        switch (formItemType) {
                            case FormItemType.UPLOAD_FILE:
                            case FormItemType.UPLOAD_IMAGE:
                                let value = this.getFormatterValue(propertyKey, getFieldValue(propertyKey));
                                const result = handleUploadImage(formItemType,
                                    propertyKey,
                                    this.form,
                                    this.isExecute,
                                    value,
                                    formItemProps);
                                node = result.node;
                                newOption.setFormatter = result.setFormatter;
                                newOption.getFormatter = result.getFormatter;
                                break;
                            case FormItemType.RANG_PICKER:
                            case FormItemType.WEEK_PICKER:
                            case FormItemType.MONTH_PICKER:
                            case FormItemType.DATE_PICKER:
                                const {
                                    component, setFormatter, getFormatter
                                } = simpleHandleDatePicker(formItemType, formItemProps, propertyKey);
                                node = component;
                                //获取formatter
                                if (isNullOrUndefined(newOption.setFormatter)) {
                                    newOption.setFormatter = setFormatter;
                                }
                                if (isNullOrUndefined(newOption.getFormatter)) {
                                    newOption.getFormatter = getFormatter;
                                }
                                break;
                            // case FormItemType.SELECT:
                            //     break;
                            case FormItemType.LOOKUP:
                                const lookup = handleLookup(formItemProps, propertyKey, this.form);
                                node = lookup.node;
                                break;
                            // case FormItemType.CASCADER:
                            //     break;
                            case FormItemType.DEFAULT:
                                // if(isNullOrUndefined(node)){
                                //     //TODO
                                // }
                                console.log("默认，不处理",propertyKey,node);
                                break;
                            default:
                                node = CommonSimpleComponentHandler[formItemType.toLowerCase()](formItemProps, propertyKey);

                        }

                        if (isFunction(newOption.setFormatter)) {
                            //值转化
                            newOption.initialValue = newOption.setFormatter(initialValue);
                        }

                        this.options.set(propertyKey, newOption);
                        //创建表单关联
                        // console.log("---创建表单item---", propertyKey, node);
                        reactNodes.push(getFieldDecorator(propertyKey, newOption)(node));
                        return reactNodes;
                    }
                }
            },
            set: (target: T, p: PropertyKey, value: any, receiver: any): boolean => {
                throw new Error("禁止设置新的属性")
            }
        };
        return new Proxy<T>({} as T, ProxyFormBuilder);
    }

    public executeInitFunction = () => {

        if (this.isExecute) {
            return;
        }
        this.isExecute = true;
        this.options.forEach((option, key) => {
            if (isFunction(option.initialFunction)) {
                this.setValueByAsync(key, option);
            }
        });
    };

    private setValueByAsync(key, option) {
        const {getFieldValue, setFieldsValue} = this.form;
        const fieldValue = getFieldValue(key);
        // let value = this.getFormatterValue(key, fieldValue);
        // console.log("-----------value--------->", fieldValue);
        const result = option.initialFunction(fieldValue);
        // console.log("-----------value--------->", result,result.constructor === Promise);
        if (isNullOrUndefined(result)) {
            return;
        }
        let p: Promise<any>;
        if (result.constructor === Promise) {
            p = result;
        } else {
            Promise.resolve(() => result);
        }
        p.then((val) => {
            if (!isNullOrUndefined(val)) {
                let obj = {};
                obj[key] = val;
                setFieldsValue(obj);
            }
        }).catch((e) => {
            console.log(e);
        });
    }

    /**
     *代理处理 setter getter
     */
    private getAndSetProxy = (): Q => {

        const {setFieldsValue, getFieldValue} = this.form;
        const proxyHandler: ProxyHandler<Q> = {
            get: (target: Q, prop: PropertyKey, receiver: any): any => {
                //getter
                // console.log("---代理获取值-->", prop);
                const propertyKey = prop as string;
                const fieldValue = getFieldValue(propertyKey);
                return this.getFormatterValue(propertyKey, fieldValue);
            },
            set: (target: Q, prop: PropertyKey, value: any, receiver): boolean => {
                //setter
                // console.log("---代理设置值-->", prop, value);
                const key = prop as string;
                if (!this.options.has(key)) {
                    return true;
                }
                let option = this.options.get(key);
                let val;
                if (isFunction(option.setFormatter)) {
                    val = option.setFormatter(value);
                } else {
                    val = value;
                }
                console.log("---代理设置值-->", prop, val);
                let obj = {};
                obj[key] = val;
                setFieldsValue(obj);
                return true
            }
        };

        return new Proxy<Q>({} as Q, proxyHandler);
    };

    /**
     * 获取被格式化的值
     * @param key
     * @param fieldValue
     * @returns {any}
     */
    private getFormatterValue = (key, fieldValue) => {
        if (isNullOrUndefined(fieldValue) ||
            (isArray(fieldValue) && fieldValue.length === 0)) {
            return null;
        }
        let option = this.options.get(key);

        if (isNullOrUndefined(option)) {
            return fieldValue;
        }
        // console.log("---代理获取 getFormatterValue-->");
        const formatter = option.getFormatter;
        if (isNullOrUndefined(formatter)) {
            return fieldValue;
        }
        // console.log("---代理获取 formatter value-->");
        return formatter(fieldValue);
    }


}

/**
 * 代理表单配置
 * @param S 表单元素的原始值类型
 * @param E 转化后的值类型
 */
interface ProxyFormItemOptions<P, S, E> extends GetFieldDecoratorOptions {

    /**
     * get值时候formatter
     * @param {S}value
     * @returns {E}
     */
    getFormatter?: (value: S) => E;

    /**
     * 设置值的的时候formatter
     * @param {E} val
     * @returns {S}
     */
    setFormatter?: (val: E) => S;

    /**
     * 初始化函数
     * @param value 表单项的值(这个值是指表单的实际值，而不是提交的值)
     * @returns {any}
     */
    initialFunction?: (value: any) => Promise<any> | any;


    /**
     * 根据表单项类型，构造对应于的组件
     */
    formItemType?: FormItemType;

    /**
     * 对应表单项类型组件的props
     */
    formItemProps?: P

    /**
     * 表单实际提交值
     */
    // submitValue?:any;

}

/**
 * 代理表单配置
 */
type ProxyFormItemOptionsAny<P> = ProxyFormItemOptions<P, any, any>

/**
 * 代理表单建造者类型
 * @param T 表单提交对象 node: React.ReactNode
 */
export type ProxyFormBuilderType<P> = (options?: ProxyFormItemOptionsAny<P>) => (node?: React.ReactNode) => React.ReactNode | React.ReactNode[];

/**
 * 表单建造者
 */
export interface FormBuilder<T> {

    /**
     * 构建 req对象
     * @returns {T}
     */
    build: () => T;

    /**
     * 执行表单项的初始化函数
     */
    executeInitFunction: () => void;
}
