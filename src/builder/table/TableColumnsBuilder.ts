import {ColumnProps} from "antd/es/table/interface";
import {isNullOrUndefined} from "util";


/**
 * table columns builder
 */
export default class TableColumnsBuilder {


    /**
     * @returns {T}
     */
    public static builder<T extends HasActionTable<E>, E>(): T {

        return new ProxyTableBuilder<T, E>().builder();
    }
}

interface Builder<E> {

    build: () => Array<ColumnProps<E>>;
}

/**
 * 有带操作的表格
 */
export interface HasActionTable<E> extends Builder<E> {

    operation?: (column: ColumnProps<E>) => this;

    // [key: string]: (column: ColumnProps<T>) => T;
}

/**
 * 是builder 的属性后缀
 * @type {string}
 */
const IS_BUILDER_SUFFIX = "Info";

class ProxyTableBuilder<T extends HasActionTable<E>, E> {

    private columns = new Map<string, ColumnProps<T>>();

    /**
     * 用来保存 simple builder
     * @type {Map<string, any>}
     */
    protected builderCache = new Map<string, any>();

    /**
     * 代理对象
     */
    private proxy: T;

    constructor() {
    }

    builder(): T {


        const proxyBuilder: ProxyHandler<T> = {
            get: (target: T, p: PropertyKey, receiver: any): any => {

                const propertyKey = p as string;


                if (propertyKey === "build") {

                    return () => {
                        let columns: ColumnProps<T>[] = [];
                        this.columns.forEach((item) => {
                            columns.push(item);
                        });
                        return columns;
                    };
                }


                if (propertyKey.endsWith(IS_BUILDER_SUFFIX)) {

                    return this.simpleProxyBuilder(propertyKey);
                }

                return (column: ColumnProps<T>) => {

                    this.addColumns(propertyKey, column);
                    return this.proxy;
                }
            },
        };

        this.proxy = new Proxy({} as T, proxyBuilder);
        return this.proxy;
    }


    /**
     * 简单的代理builder
     * @param {string} propertyKey
     * @return {any}
     */
    simpleProxyBuilder(propertyKey: string): any {

        if (this.builderCache.has(propertyKey)) {
            return this.builderCache.get(propertyKey);
        } else {
            let builder = new Proxy({}, {

                get: (target: any, p: string, receiver: any): any => {
                    const key = `${propertyKey}.${p}`;
                    //多级支持
                    if (this.propertyIsBuilder(p)) {
                        return this.simpleProxyBuilder(key);
                    }
                    return (column: ColumnProps<T>) => {
                        this.addColumns(key, column);
                        return this.proxy;
                    }
                }
            });
            this.builderCache.set(propertyKey, builder);
            return builder;
        }


    }


    /**
     * 属性是否为一个builder
     * @param {string} propertyKey
     * @return {boolean}
     */
    private propertyIsBuilder = (propertyKey: string): boolean => {
        return propertyKey.endsWith(IS_BUILDER_SUFFIX);
    };

    /**
     * 增加一个列配置
     * @param {string} propertyKey
     * @param {ColumnProps<T extends HasActionTable<E>>} column
     */
    private addColumns = (propertyKey: string, column: ColumnProps<T>) => {
        let oldRender = column.render;

        this.columns.set(propertyKey, {
            ...column,
            key: propertyKey,
            dataIndex: propertyKey,
            render: (cellValue, rowData, index) => {
                if (propertyKey !== "operation" && isNullOrUndefined(cellValue)) {
                    return null;
                }
                if (isNullOrUndefined(oldRender)) {
                    return cellValue;
                }
                return oldRender(cellValue, rowData, index);
            }
        });
    }

}

