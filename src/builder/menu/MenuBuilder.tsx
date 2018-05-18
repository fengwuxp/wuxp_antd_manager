import * as React from "react";
import Menu, {ClickParam} from "antd/lib/menu";
import {isNullOrUndefined} from "util";


export interface MenuItemBuilder {

    // [key: string]: SimpleMenuItemBuilder;

    build: () => React.ReactNode;
}


type SimpleMenuItemBuilder = (content: React.ReactNode, handle?: (event: ClickParam) => void) => SimpleCommonOperation;

/**
 * 简单的通用菜单操作
 */
export interface SimpleCommonOperation extends MenuItemBuilder {


    /**
     * 删除
     */
    deleted: SimpleMenuItemBuilder;

    /**
     * 确认
     */
    confirm: SimpleMenuItemBuilder;

    /**
     * 查看详情
     */
    seeView: SimpleMenuItemBuilder;


}


export default class MenuBuilder {

    static builder<T extends MenuItemBuilder>(): T {
        return new ProxyMenuSimpleBuilder<T>().builder();
    }
}


class ProxyMenuSimpleBuilder<T extends MenuItemBuilder> {


    private menuItems: Array<React.ReactNode> = [];

    /**
     * 点击菜单项处理方法
     * @type {Map<string, Function>}
     */
    private handles: Map<string, Function> = new Map<string, Function>();

    private proxy: T;

    builder(): T {

        const proxyBuilder: ProxyHandler<T> = {
            get: (target: T, p: PropertyKey, receiver: any): any => {

                const propertyKey = p as string;

                if (propertyKey === "build") {

                    return () => {
                        return <Menu onClick={(event: ClickParam) => {
                            //处理
                            let handle = this.handles.get(event.key);
                            if (isNullOrUndefined(handle)) {
                                return;
                            }
                            handle(event);
                        }}>{...this.menuItems}</Menu>
                    };
                }

                return (content: React.ReactNode, handle?: (event: ClickParam) => void) => {

                    this.menuItems.push(
                        <Menu.Item key={propertyKey}>{content}</Menu.Item>
                    );
                    this.handles.set(propertyKey, handle);
                    return this.proxy;
                }
            }
        };

        this.proxy = new Proxy({} as T, proxyBuilder);

        return this.proxy;
    }
}
