import React, {PureComponent} from 'react';
import {Icon, Layout, Menu} from 'antd';

import * as styles from './style.scss';
import {Link} from "react-router-dom";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {getBreadcrumb} from "../PageHeader/index";

const {Sider} = Layout;
const {SubMenu} = Menu;


export interface SiderMenuProps extends ReduxRouterProps {


    /**
     * 菜单列表
     */
    menus: Array<AntdMenuItem>;

    /**
     * 当前选中的菜单索引列表
     */
    selectedMenuIndexList: number[];

    /**
     * 是否为手机端
     */
    isMobile: boolean;

    /**
     * 是否已经折叠
     */
    collapsed: boolean;

    /**
     * 折叠事件
     * @param {boolean} collapse
     */
    onCollapse: (collapse: boolean) => void;

    /**
     * logo
     */
    logo?: string;

    /**
     * 菜单宽度
     * 默认 256px
     */
    width?: number;


    /**
     * 鉴权
     */
    Authorized?: any;

    /**
     * 匹配菜单策略
     */
    // matchMenuKeyStrategy: MatchMenuKeyStrategy
}

const getIcon = icon => {
    if (typeof icon === 'string' && icon.indexOf('http') === 0) {
        return <img src={icon} alt="icon" className={`${styles.icon} sider-menu-item-img`}/>;
    }
    if (typeof icon === 'string') {
        return <Icon type={icon}/>;
    }
    return icon;
};


export default class SiderMenu extends PureComponent<SiderMenuProps, any> {


    constructor(props) {
        super(props);
    }

    state = {
        openKeys: this.getDefaultCollapsedSubMenus(this.props)
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                openKeys: this.getDefaultCollapsedSubMenus(nextProps),
            });
        }
    }

    /**
     * 获取默认合拢子菜单
     * Convert pathname to openKeys
     * @param  props
     */
    getDefaultCollapsedSubMenus(props: SiderMenuProps): Array<string> {
        const {menus, selectedMenuIndexList} = props || this.props;

        return getBreadcrumb(menus, selectedMenuIndexList.slice(1,3)).map(item =>item.path);
    }


    /**
     * 判断是否是http链接.返回 Link 或 a
     * Judge whether it is http link.return a or Link
     * @memberof SiderMenu
     */
    getMenuItemPath = item => {
        const itemPath = this.conversionPath(item.path);
        const icon = getIcon(item.icon);
        const {target, name} = item;
        // Is it a http link
        if (/^https?:\/\//.test(itemPath)) {
            return (
                <a href={itemPath} target={target}>
                    {icon}
                    <span>{name}</span>
                </a>
            );
        }
        return (
            <Link
                to={itemPath}
                target={target}
                replace={itemPath === this.props.location.pathname}
                onClick={this.props.isMobile ? () => {
                    this.props.onCollapse(true);
                } : undefined}>{icon}<span>{name}</span>
            </Link>
        );
    };
    /**
     * get SubMenu or Item
     */
    getSubMenuOrItem = item => {
        if (item.children && item.children.some(child => child.name)) {
            const childrenItems = this.getNavMenuItems(item.children);
            // 当无子菜单时就不展示菜单
            if (childrenItems && childrenItems.length > 0) {
                return (
                    <SubMenu
                        title={item.icon ? (<span>{getIcon(item.icon)}<span>{item.name}</span></span>) : (item.name)}
                        key={item.path}>{childrenItems}</SubMenu>
                );
            }
            return null;
        } else {
            return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
        }
    };
    /**
     * 获得菜单子节点
     * @memberof SiderMenu
     */
    getNavMenuItems = menusData => {
        if (!menusData) {
            return [];
        }
        return menusData
            .filter(item => item.name && !item.hideInMenu)
            .map(item => {
                // make dom
                const ItemDom = this.getSubMenuOrItem(item);
                return this.checkPermissionItem(item.authority, ItemDom);
            }).filter(item => item);
    };

    /**
     * 获取当前选中的菜单keys
     * @returns {any}
     */
    getSelectedMenuKeys = (openKeys): string[] => {
        return [openKeys[1]];
    };

    /**
     * 转化路径
     * @param {string} path
     * @returns {string}
     */
    conversionPath = (path: string) => {
        if (path && path.indexOf('http') === 0) {
            return path;
        } else {
            return `/${path || ''}`.replace(/\/+/g, '/');
        }
    };

    /**
     * 权限检查
     * @param authority
     * @param ItemDom
     * @returns {any}
     */
    checkPermissionItem = (authority, ItemDom) => {
        if (this.props.Authorized && this.props.Authorized.check) {
            const {check} = this.props.Authorized;
            return check(authority, ItemDom);
        }
        return ItemDom;
    };

    /**
     * 是否为主菜单
     * @param openKey
     * @returns {boolean}
     */
    isMainMenu = openKey => {
        return this.props.menus.some(({key, path}) => openKey && (key === openKey || path === openKey));
    };

    /**
     * 切换当前打开的菜单
     * @param openKeys
     */
    handleOpenChange = openKeys => {
        const lastOpenKey = openKeys[openKeys.length - 1];
        const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
        this.setState({
            openKeys: moreThanOne ? [lastOpenKey] : [...openKeys],
        });
    };

    render() {
        const {logo, collapsed, onCollapse} = this.props;


        //默认打开的菜单keys
        const {openKeys} = this.state;

        // Don't show popup menu when it is been collapsed
        const menuProps = collapsed ? {} : {openKeys,};
        // if pathname can't match, use the nearest parent's key
        let selectedKeys = this.getSelectedMenuKeys(openKeys);
        if (!selectedKeys.length) {
            selectedKeys = [openKeys[openKeys.length - 1]];
        }
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="lg"
                onCollapse={onCollapse}
                width={256}
                className={styles.sider}
            >
                <div className={styles.logo} key="logo">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                        <h1>Ant Design Pro</h1>
                    </Link>
                </div>
                <Menu
                    key="Menu"
                    theme="dark"
                    mode="inline"
                    {...menuProps}
                    onOpenChange={this.handleOpenChange}
                    selectedKeys={selectedKeys}
                    style={{padding: '16px 0', width: '100%'}}
                >
                    {this.getNavMenuItems(this.props.menus)}
                </Menu>
            </Sider>
        );
    }
}
