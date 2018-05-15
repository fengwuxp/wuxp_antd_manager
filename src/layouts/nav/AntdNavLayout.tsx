import * as React from "react";
import PropTypes from 'prop-types';
import {Icon, Layout} from 'antd';
import SiderMenu from "../../components/SiderMenu/index";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import GlobalHeader, {GlobalHeaderProps} from "../../components/GlobalHeader/index";
import {Scrollbars} from 'react-custom-scrollbars';
import {enquireScreen, unenquireScreen} from 'enquire-js';
import AntdNoticeManager from "../../manager/notice/AntdNoticeManager";
import {push} from "react-router-redux";
import {sessionManager} from "../../manager/session/SessionManager";
import {connect, MapStateToPropsParam} from "react-redux";
import {AntdSession} from "../../model/session/AntdAdmin";
import {SystemConfig} from "../../model/AntdAdminStore";
import {Redirect, Route, Switch} from "react-router";
import {getRoutes} from "../../utils/utils";
import {routeConfigs} from "../../routes/router";
import Authorized from '../../utils/auth/Authorized';
import NotFound from '../../views/exception/404';
import {isUndefined} from "util";
import {RouteConfig} from "react-router-config";
import {DefaultMenuMatchStrategy} from "../../components/SiderMenu/strategy/MatchMenuKeyStrategy";

const {Content, Header, Footer} = Layout;

const {AuthorizedRoute, check} = Authorized;


function convertRouteToObject({path, location, component, exact, strict}: RouteConfig) {
    return {
        path,
        location,
        component,
        exact,
        strict
    };
}


function convertRoutesToMap(routes: Array<RouteConfig>, result: any) {
    routes.forEach((item) => {
        if (item.routes) {
            convertRoutesToMap(routes, result);
        } else {
            result[item.path] = convertRouteToObject(item);
        }
    });
}


export interface AntdNavLayoutProps extends GlobalHeaderProps {
    /**
     * 当前登录用户的信息
     */
    session: AntdSession;


    /**
     * 系统配置列表
     */
    systemConfig: SystemConfig;


    /**
     * 全局异常
     */
    globalError: any;


}


/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, systemConfig, notices, globalError}) => ({
    session,
    notices,
    systemConfig,
    globalError
});


/**
 * 导航布局
 */
@(connect as any)(mapStateToPropsParam)
export default class AntdNavLayout extends React.Component<AntdNavLayoutProps, any> {

    /**
     * enquire-js 处理者
     */
    private enquireHandler: any;


    constructor(props, contentx) {
        super(props, contentx);
    }

    state = {
        collapsed: false,
        isMobile: false,
    };


    static childContextTypes = {
        location: PropTypes.object,
        menus: PropTypes.array,
        selectedMenuIndexList: PropTypes.array
    };

    getChildContext() {

        const {location, menus, selectedMenuIndexList} = this.props;

        // const result = {};
        // convertRoutesToMap(routeConfigs, result);

        return {
            location,
            menus,
            selectedMenuIndexList
        };
    }


    /**
     * 折叠菜单
     * @param collapsed
     */
    handleMenuCollapse = collapsed => {
        this.setState({
            collapsed: !collapsed
        });
    };

    getBashRedirect = () => {
        // According to the url parameter to redirect
        // 这里是重定向的,重定向到 url 的 redirect 参数所示地址
        const urlParams = new URL(window.location.href);

        const redirect = urlParams.searchParams.get('redirect');
        // Remove the parameters in the url
        if (redirect) {
            urlParams.searchParams.delete('redirect');
            window.history.replaceState(null, 'redirect', urlParams.href);
        } else {

            // get the first authorized route path in routerData
            let menus = this.getCurrentMenus();
            const authorizedPath: any = menus.find(
                ({authority, path}) => check(authority, path as any, undefined) && path !== '/'
            );
            return isUndefined(authorizedPath) ? '/' : authorizedPath.path;
        }

        return redirect;
    };

    /**
     * 点击头部菜单
     * @param {any} item
     * @param {any} key
     * @param {any} keyPath
     */
    handleHeaderMenuClick = ({item, key, keyPath}) => {
        // console.log(key);
        if (key === 'triggerError') {
            this.props.dispatch(push('/exception/trigger'));
            return;
        }
        if (key === 'logout') {
            console.log("退出登录", "");
            sessionManager.logout();
        }
    };


    /**
     * 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构
     */
    componentDidMount() {

        AntdNoticeManager.getNotices().then((notices: Array<any>) => {
            this.setState({
                notices
            })
        });

        //监听屏幕大小改变事件
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
                isMobile: mobile,
            });
        });
    }


    /**
     * 在组件从 DOM 中移除的时候立刻被调用。
     */
    componentWillUnmount() {
        //移除监听
        unenquireScreen(this.enquireHandler);
    }

    render() {
        let fetchingNotices = false;
        const {selectedMenuIndexList, session} = this.props;
        const currentUser = {
            notifyCount: 10,
            // name: session.admin.name,
            // avatar: session.admin.name,
            ...session.admin
        };
        const menuItems = this.getCurrentMenus();

        if (redirectData.length === 0 && menuItems.length > 0) {
            //获取重定向数据
            redirectData.push({
                from: `/`,
                to: menuItems[selectedMenuIndexList[1]].children[selectedMenuIndexList[2]],
            });
        }

        const bashRedirect = this.getBashRedirect();

        return (
            <Layout>
                <SiderMenu
                    {...this.props}
                    menus={menuItems}
                    collapsed={this.state.collapsed}
                    isMobile={this.state.isMobile}
                    onCollapse={this.handleMenuCollapse}
                />
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <GlobalHeader
                            logo={this.props.logo}
                            menus={this.props.menus}
                            selectedMenuIndexList={selectedMenuIndexList}
                            currentUser={currentUser}
                            fetchingNotices={fetchingNotices}
                            notices={this.props.notices}
                            collapsed={this.state.collapsed}
                            isMobile={this.state.isMobile}
                            onNoticeClear={AntdNoticeManager.clearNotices}
                            onCollapse={this.handleMenuCollapse}
                            onMenuClick={this.handleHeaderMenuClick}
                            onNoticeVisibleChange={AntdNoticeManager.handleNoticeVisibleChange}
                        />
                    </Header>
                    <Scrollbars style={{width: "100%", height: " 100%"}}>
                        <Content style={{margin: '24px 24px 0', height: '100%'}}>
                            <Switch>
                                {redirectData.map(item => (
                                    <Redirect key={item.from} exact from={item.from} to={item.to}/>
                                ))}
                                {getRoutes(this.props.match.path, routeConfigs).map(item => (
                                    <AuthorizedRoute
                                        key={item.key}
                                        path={item.path}
                                        component={item.component}
                                        exact={item.exact}
                                        authority={item.authority}
                                        redirectPath="/exception/403"
                                    />
                                ))}
                                <Redirect exact from="/" to={bashRedirect}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </Content>
                        <Footer style={{padding: 0}}>
                            <GlobalFooter
                                links={[
                                    {
                                        key: 'Pro 首页',
                                        title: 'Pro 首页',
                                        href: 'http://pro.ant.design',
                                        blankTarget: true,
                                    },
                                    {
                                        key: 'github',
                                        title: <Icon type="github"/>,
                                        href: 'https://github.com/ant-design/ant-design-pro',
                                        blankTarget: true,
                                    },
                                    {
                                        key: 'Ant Design',
                                        title: 'Ant Design',
                                        href: 'http://ant.design',
                                        blankTarget: true,
                                    }
                                ]}
                                copyright={
                                    <div>Copyright <Icon type="copyright"/> 2018 蚂蚁金服体验技术部出品</div>
                                }
                            />
                        </Footer>
                    </Scrollbars>
                </Layout>
            </Layout>
        );
    }

    /**
     * 获取当前激活的菜单
     * @returns {Array<AntdMenuItem>}
     */
    private getCurrentMenus = () => {
        const {menus, selectedMenuIndexList} = this.props;


        if (selectedMenuIndexList.length === 0) {
            console.warn(`--当前选中的菜单为空`);
            return []
        }

        return menus[selectedMenuIndexList[0]].children || [];
    };
}

