import * as React from "react";
import DocumentTitle from 'react-document-title';
import {ContainerQuery} from "react-container-query";
import classNames from 'classnames';
import MediaQuery from "./MediaQuery";
import AntdNavLayout, {AntdNavLayoutProps} from "./AntdNavLayout";
import {connect, MapStateToPropsParam} from "react-redux";
import {isNullOrUndefined} from "util";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import {antdMenuManager} from "../../manager/menu/AntdMenuManager";



const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, menus, systemConfig, currentSelectedMenu}) => ({
    session,
    currentSelectedMenu,
    menus,
    systemConfig
});

@(connect as any)(mapStateToPropsParam)
export default class BasicLayout extends React.Component<AntdNavLayoutProps, any> {


    protected currentMenuIndex: number = 0;

    constructor(props: any, context: any) {
        super(props, context);
    }


    /**
     * 获取页面标题
     * @returns {string}
     */
    getPageTitle() {
        const {menus, location} = this.props;

        let title = this.props.systemConfig.site_name||"";
        if (isNullOrUndefined(menus)) {
            return title
        }
        const {pathname} = location;
        if (pathname === "/") {
            return title;
        }
        let menuItem: AntdMenuItem = this.findMenuItemByPath(menus, pathname);
        if (isNullOrUndefined(menuItem)) {
            return title;
        } else {
            title = `${menuItem.name} - ${this.props.systemConfig.site_name}`;
        }

        //查找当前路径所在的一级菜单

        return title;
    }

    /**
     * 在渲染前调用,在客户端也在服务端
     */
    componentWillMount() {

        //加载菜单
        antdMenuManager.getMenus();


    }

    render() {

        const {menus} = this.props;
        const showMenu = menus && menus.length > 0;
        let title = this.getPageTitle();
        return (
            <DocumentTitle title={title}>
                {showMenu ? <ContainerQuery query={MediaQuery}>{params => <AntdNavLayout {...this.props}
                                                                                         currentSelectedMenu={this.currentMenuIndex}
                                                                                         className={classNames(params) as string}/>}</ContainerQuery> : null}
            </DocumentTitle>
        );
    }

    findMenuItemByPath = (menus: Array<AntdMenuItem>, path: string): AntdMenuItem => {

        //当前一级菜单的索引
        let currentMenuIndex = 0;

        let menu: AntdMenuItem;


        menus.some((item, i) => {
            let index = 0;
            let menuItem = findMenuItem(item, path, index);
            if (isNullOrUndefined(menuItem)) {
                return false;
            }

            let currentMenu = menuItem.children[index];
            // console.log("--------------", currentMenu, index, i);
            let b = currentMenu != null;
            if (b) {
                menu = currentMenu;
                currentMenuIndex = i;
            }
            return b;
        });

        //更新当前菜单的索引
        // console.log("-----------currentMenuIndex-------", currentMenuIndex);
        this.currentMenuIndex = currentMenuIndex;
        return menu
    }
}

function findMenuItem(menu: AntdMenuItem, path: string, index): AntdMenuItem {
    if (menu.children == null) {
        return menu;
    }
    return menu.children.find((item) => {
        if (menu.path === path || path.startsWith(menu.path)) {
            return findMenuItem(item, path, index++) != null;
        } else {
            return false;
        }
    });

}

