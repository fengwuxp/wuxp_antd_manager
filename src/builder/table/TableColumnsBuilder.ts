import {ColumnProps} from "antd/es/table/interface";


/**
 * table columns builder
 */
export default class TableColumnsBuilder {


    /**
     * @returns {T}
     */
    public static builder<T extends HasActionTable<T, E>, E>(): T {

        return new ProxyTableBuilder<T, E>().builder();
    }
}

interface Builder<E> {

    build: () => Array<ColumnProps<E>>;
}

/**
 * 有带操作的表格
 */
export interface HasActionTable<T, E> extends Builder<E> {

    operation?: (column: ColumnProps<E>) => T;

    // [key: string]: (column: ColumnProps<T>) => T;
}

class ProxyTableBuilder<T extends HasActionTable<T, E>, E> {

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

                    this.columns.push({
                        ...column,
                        key: propertyKey,
                        dataIndex: propertyKey
                    });

                    return this.proxy;
                }
            },
        };

        this.proxy = new Proxy({} as T, proxyBuilder);
        return this.proxy;
    }

}

