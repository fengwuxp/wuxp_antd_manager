import {GetFieldDecoratorOptions, WrappedFormUtils} from "antd/lib/form/Form";
import * as React from "react";
import {isNullOrUndefined} from "util";
import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";

/**
 * 用于构建表单
 */
export default class FormItemBuilder {

    /**
     *
     * @param {WrappedFormUtils} form
     * @returns {T}
     */
    public static builder<T extends any>(form: WrappedFormUtils): T {

        return builder(new ProxyFormBuilder(), form)
    }
}

class ProxyFormBuilder {

    public formItems: React.ReactNode[] = [];

    public options: Map<string, ProxyFormItemOptionsAny> = new Map<string, ProxyFormItemOptionsAny>();


    constructor() {
    }
}


function builder<T extends any>(formBuilder: ProxyFormBuilder, form: WrappedFormUtils) {
    const {getFieldDecorator, setFieldsValue, getFieldValue} = form;
    const ProxyFormBuilder: ProxyHandler<T> = {

        get: function (target: T, prop: PropertyKey, receiver: any): any {

            const propertyKey = prop as string;

            if (propertyKey.startsWith("set")) {
                //setter
                const key = propertyKey.replace("set", "");
                return function (value: any) {
                    let obj = {};
                    obj[key] = value;
                    setFieldsValue(obj);
                    return target;
                }
            } else if (propertyKey.startsWith("get")) {
                //getter
                const key = propertyKey.replace("get", "");
                return function () {
                    const fieldValue = getFieldValue(key);
                    return getFormatterValue(key, fieldValue, formBuilder);
                }
            } else if (propertyKey === "build") {
                return formBuilder.formItems;
            } else if (propertyKey === "buildSubmitReq") {

                /**
                 * 构建要提交的对象
                 */
                return function <R extends ApiReq>(formData: object): R {
                    const req = {};
                    for (const name in formData) {
                        const fieldValue = getFieldValue(name);
                        req[name] = getFormatterValue(name, fieldValue, formBuilder);
                    }
                    return req as R;
                }
            }


            /**
             * 初始化
             * @param { React.ReactNode}表单node
             * @param {ProxyFormItemOptionsAny}配置
             */
            return function (node: React.ReactNode, options?: ProxyFormItemOptionsAny) {

                const reactNode = getFieldDecorator(propertyKey, options)(node);
                formBuilder.options.set(propertyKey, options);
                formBuilder.formItems.push(reactNode);

                return target;
            }
        }
    };
    return new Proxy<T>({} as T, ProxyFormBuilder);
}

function getFormatterValue(key, fieldValue, formBuilder) {
    const formatter = formBuilder.options.get(key).formatter;

    if (isNullOrUndefined(formatter)) {
        return fieldValue;
    }
    return formatter(fieldValue);
}

interface ProxyFormItemOptions<S, E> extends GetFieldDecoratorOptions {

    /**
     * 值转换
     * @param value
     * @returns {any}
     */
    formatter: (value: S) => E;
}

type ProxyFormItemOptionsAny = ProxyFormItemOptions<any, any>;

type ProxyFormBuilderType<T> = (node: React.ReactNode, options?: ProxyFormItemOptionsAny) => T


// interface Tx extends ApiReq {
//     name: string;
// }
//
// interface Test<T> {
//
//     name: ProxyFormBuilderType<Test<any>>
//
//     setName: (value: string) => Test<any>
//
//     getName: () => string;
//
//     buildSubmitReq: (value: any) => T
// }
//
// let testBuilder = FormItemBuilder.builder<Test<Tx>>(null);
// testBuilder.name(<div></div>, {
//
//     formatter(name: string) {
//
//         return name;
//     }
// }).setName("value")
//     .getName();
//
// let tx = testBuilder.buildSubmitReq({});
// tx.name
