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


    protected selectedMenuIndexList: number[] = [0, 0, 0];

    constructor(props: any, context: any) {
        super(props, context);
    }


    /**
     * 获取页面标题
     * @returns {string}
     */
    getPageTitle() {
        const {menus, location} = this.props;

        let title = this.props.systemConfig.site_name || "";
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
                                                                                         selectedMenuIndexList={this.selectedMenuIndexList}
                                                                                         className={classNames(params) as string}/>}</ContainerQuery> : null}
            </DocumentTitle>
        );
    }

    /**
     * 更具当前路径找到菜单
     * @param {Array<AntdMenuItem>} menus
     * @param {string} path
     * @return {AntdMenuItem}
     */
    findMenuItemByPath = (menus: Array<AntdMenuItem>, path: string): AntdMenuItem => {

        //当前一级菜单的索引
        let selectedMenuIndexList = [];

        let menu: AntdMenuItem;


        menus.some((item, i) => {

            if (item.children === null) {
                return false;
            }


            let menuItem = findMenuItem(item, path.substring(1, path.length), i, selectedMenuIndexList);
            if (isNullOrUndefined(menuItem)) {
                return false;
            }
            selectedMenuIndexList = selectedMenuIndexList.reverse();
            let currentMenu = menuItem.children[selectedMenuIndexList[selectedMenuIndexList.length - 1]];
            let b = currentMenu != null;
            if (b) {
                menu = currentMenu;
            }
            return b;
        });

        // console.log("----------menu----------",menu);

        //更新当前菜单的索引
        this.selectedMenuIndexList = selectedMenuIndexList;
        return menu
    }
}

function findMenuItem(menu: AntdMenuItem, path: string, index: number, selectedMenuIndexList: number[]): AntdMenuItem {

    if (menu.path === path) {
        selectedMenuIndexList.push(index);
        return menu;
    }
    if (menu.children == null) {
        return null;
    }

    return menu.children.find((item, i) => {

        let b = findMenuItem(item, path, i, selectedMenuIndexList) != null;
        if (b) {
            selectedMenuIndexList.push(index)
        }
        return b;
    })

}

