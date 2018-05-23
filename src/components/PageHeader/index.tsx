import React, {createElement, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb, Col, Icon, Row, Tabs} from 'antd';
import classNames from 'classnames';
import * as styles from './style.less';
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {ReactBaseProps} from "wuxp_react_dynamic_router/src/model/ReactBaseProps";
import {RouteConfig} from "react-router-config";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";


export interface PageHeaderProps extends ReduxRouterProps, ReactBaseProps {

    title?: React.ReactNode;

    logo?: React.ReactNode;

    action?: React.ReactNode;

    content?: React.ReactNode;

    extraContent?: React.ReactNode;

    routes?: RouteConfig[];

    params?: any;

    breadcrumbSeparator?: React.ReactNode

    breadcrumbList?: Array<{ title: React.ReactNode; href?: string }>;

    tabList?: Array<{ key: string; tab: React.ReactNode }>;

    tabActiveKey?: string;

    tabDefaultActiveKey?: string;

    onTabChange?: (key: string) => void;

    tabBarExtraContent?: React.ReactNode;

    linkElement?: any  //React.ReactNode ;


}

const history = BrowserNavigatorFactory.get();

const {TabPane} = Tabs;
const BreadcrumbItem :any=Breadcrumb.Item;

export function getBreadcrumb(menus: AntdMenuItem[], selectedMenuIndexList: number[]): AntdMenuItem[] {

    let list: AntdMenuItem[] = [];
    selectedMenuIndexList.forEach((i, index) => {
        let number = index - 1;
        if (index > 0 && list[number].children) {
            list.push(list[number].children[i]);
        } else {
            list.push(menus[i]);
        }
    });
    return list;

}


/**
 * 业务通用页面头部
 * 1:处理面包屑导航
 * 2：页面标题，以及提示内容等展示
 */
export default class PageHeader extends PureComponent<PageHeaderProps, any> {

    static contextTypes = {

        routes: PropTypes.array,

        params: PropTypes.object,

        menus: PropTypes.array,

        selectedMenuIndexList: PropTypes.array,

        location: PropTypes.object,


    };
    onChange = key => {
        if (this.props.onTabChange) {
            this.props.onTabChange(key);
        }
    };
    getBreadcrumbProps = () => {
        return {
            routes: this.props.routes || this.context.routes,
            params: this.props.params || this.context.params,
            routerLocation: this.props.location || this.context.location,
        };
    };
    // Generated according to props
    conversionFromProps = () => {
        const {breadcrumbList, breadcrumbSeparator, linkElement = 'a'} = this.props;
        return (
            <Breadcrumb className={styles.breadcrumb} separator={breadcrumbSeparator}>
                <BreadcrumbItem href="">
                    <Icon type="arrow-left"/>
                </BreadcrumbItem>
                {breadcrumbList.map(item => (
                    <BreadcrumbItem key={item.title}>
                        {item.href ? createElement(linkElement, {[linkElement === 'a' ? 'href' : 'to']: item.href,}, item.title) : item.title}
                    </BreadcrumbItem>
                ))}
            </Breadcrumb>
        );
    };


    conversionFromLocation = () => {
        const {breadcrumbSeparator, linkElement = 'a'} = this.props;

        const {menus, selectedMenuIndexList} = this.context;


        //获取面包屑导航的菜单
        const breadcrumbList: AntdMenuItem[] = getBreadcrumb(menus, selectedMenuIndexList);

        const extraBreadcrumbItems = breadcrumbList.map((item) => {
            return <BreadcrumbItem key={item.path}>
                {createElement(
                    linkElement,
                    {[linkElement === 'a' ? 'href' : 'to']: item.path},
                    item.name
                )}
            </BreadcrumbItem>
        });


        return (
            <Row type="flex">
                {/*返回按钮*/}
                <Col>
                    <Icon style={{fontSize: 46}}
                          type="arrow-left"
                          onClick={() => {
                              history.goBack();
                          }}/>
                </Col>
                <Col span={23} style={{
                    height: 20,
                    marginTop: 10,
                    marginLeft: 10
                }}>
                    <Breadcrumb className={styles.breadcrumb}
                                separator={breadcrumbSeparator}>{extraBreadcrumbItems}</Breadcrumb>
                </Col>
            </Row>

        );
    };
    /**
     * 将参数转化为面包屑
     * Convert parameters into breadcrumbs
     */
    conversionBreadcrumbList = () => {
        const {breadcrumbList, breadcrumbSeparator} = this.props;
        const {routes, params, routerLocation} = this.getBreadcrumbProps();

        //传入了面包屑列表
        if (breadcrumbList && breadcrumbList.length) {
            return this.conversionFromProps();
        }
        // 如果传入 routes 和 params 属性
        // If pass routes and params attributes
        if (routes && params) {
            return (

                <Breadcrumb
                    className={styles.breadcrumb}
                    routes={routes.filter(route => route.breadcrumbName)}
                    params={params}
                    itemRender={this.itemRender}
                    separator={breadcrumbSeparator}
                />
            );
        }
        // 根据 location 生成 面包屑
        // Generate breadcrumbs based on location
        if (routerLocation && routerLocation.pathname) {
            return this.conversionFromLocation();
        }
        return null;
    };

    // 渲染Breadcrumb 子节点
    // Render the Breadcrumb child node
    itemRender = (route, params, routes, paths) => {
        const {linkElement = 'a'} = this.props;
        const last = routes.indexOf(route) === routes.length - 1;
        return last || !route.component ? (
            <span>{route.breadcrumbName}</span>
        ) : (
            createElement(
                linkElement,
                {
                    href: paths.join('/') || '/',
                    to: paths.join('/') || '/',
                },
                route.breadcrumbName
            )
        );
    };

    render() {
        const {
            title,
            logo,
            action,
            content,
            extraContent,
            tabList,
            className,
            tabActiveKey,
            tabDefaultActiveKey,
            tabBarExtraContent,
        } = this.props;

        // console.log(this.props);

        const clsString = classNames(styles.pageHeader, className);
        const breadcrumb = this.conversionBreadcrumbList();
        const activeKeyProps: any = {};
        if (tabDefaultActiveKey !== undefined) {
            activeKeyProps.defaultActiveKey = tabDefaultActiveKey;
        }
        if (tabActiveKey !== undefined) {
            activeKeyProps.activeKey = tabActiveKey;
        }

        return (
            <div className={clsString}>
                {breadcrumb}
                <div className={styles.detail}>
                    {logo && <div className={styles.logo}>{logo}</div>}
                    <div className={styles.main}>
                        <div className={styles.row}>
                            {title && <h1 className={styles.title}>{title}</h1>}
                            {action && <div className={styles.action}>{action}</div>}
                        </div>
                        <div className={styles.row}>
                            {content && <div className={styles.content}>{content}</div>}
                            {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
                        </div>
                    </div>
                </div>
                {tabList &&
                tabList.length && (
                    <Tabs
                        className={styles.tabs}
                        {...activeKeyProps}
                        onChange={this.onChange}
                        tabBarExtraContent={tabBarExtraContent}
                    >
                        {tabList.map(item => <TabPane tab={item.tab} key={item.key}/>)}
                    </Tabs>
                )}
            </div>
        );
    }
}
