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

class ProxyTableBuilder<T extends HasActionTable<E>, E> {

    private columns: Array<ColumnProps<T>> = [];

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

                    return () => this.columns;
                }
                return (column: ColumnProps<T>) => {


                    const isExist = this.columns.some(({dataIndex}) => {

                        return propertyKey === dataIndex;
                    });
                    if (isExist) {
                        return this.proxy;
                    }

                    let oldRender = column.render;

                    this.columns.push({
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

                    return this.proxy;
                }
            },
        };

        this.proxy = new Proxy({} as T, proxyBuilder);
        return this.proxy;
    }

}

