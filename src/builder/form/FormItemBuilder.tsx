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

            if (propertyKey === "build") {
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

/**
 * 获取被格式化的值
 * @param key
 * @param fieldValue
 * @param formBuilder
 * @returns {any}
 */
function getFormatterValue(key, fieldValue, formBuilder) {
    const formatter = formBuilder.options.get(key).formatter;

    if (isNullOrUndefined(formatter)) {
        return fieldValue;
    }
    return formatter(fieldValue);
}

/**
 *代理处理 setter getter
 */
function handlerProxy<T extends any>(formBuilder: ProxyFormBuilder, form: WrappedFormUtils) {

    const {setFieldsValue, getFieldValue} = form;
    const proxyHandler: ProxyHandler<T> = {
        get: function (target: T, prop: PropertyKey, receiver: any): any {
            //getter
            const propertyKey = prop as string;
            const fieldValue = getFieldValue(propertyKey);
            return getFormatterValue(propertyKey, fieldValue, formBuilder);
        },
        set: function (target: T, prop: PropertyKey, value: any, receiver): boolean {
            //setter
            const key = prop as string;
            let obj = {};
            obj[key] = value;
            setFieldsValue(obj);
            return true

        }
    };

    return new Proxy<T>({} as T, proxyHandler);
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


interface Builder<T> {


    build: () => T
}

interface Tx extends ApiReq {

    name: string;

    age: number;
}

interface Test extends Builder<Tx> {

    name: ProxyFormBuilderType<Test>;

    age: ProxyFormBuilderType<Test>;

    // setName: (value: string) => Test
    //
    // getName: () => string;

}

let testBuilder = FormItemBuilder.builder<Test>(null);

testBuilder.name(<div></div>, {

    formatter(name: string) {

        return name;
    }
})

// let tx = testBuilder.build({});

