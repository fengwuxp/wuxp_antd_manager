import {ColumnProps} from "antd/es/table/interface";


/**
 * table columns builder
 */
export default class TableColumnsBuilder {


    /**
     * @returns {T}
     */
    public static builder<T extends HasActionTable<T, E>, E>(): T {

        return builder<T, E>(new ProxyTableBuilder<T>());
    }
}

interface Builder<E> {

    build: () => Array<ColumnProps<E>>;
}

export interface HasActionTable<T, E> extends Builder<E> {

    operation?: (column: ColumnProps<E>) => T;

    // [key: string]: (column: ColumnProps<T>) => T;
}

class ProxyTableBuilder<T> {

    public columns: Array<ColumnProps<T>> = [];


    constructor() {
    }
}

function builder<T extends HasActionTable<T, E>, E>(tableBuilder: ProxyTableBuilder<T>): T {


    const ProxyBuilder: ProxyHandler<T> = {
        get(target: T, p: PropertyKey, receiver: any): any {

            const propertyKey = p as string;

            if (propertyKey === "build") {

                return tableBuilder.columns;
            }
            return function (column: ColumnProps<T>) {

                tableBuilder.columns.push({
                    ...column,
                    dataIndex: propertyKey
                });

                return target;
            }
        },
    };

    return new Proxy({} as T, ProxyBuilder);
}
