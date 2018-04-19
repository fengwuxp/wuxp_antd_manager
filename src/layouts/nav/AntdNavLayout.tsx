import * as React from "react";
import {Layout, Icon} from 'antd';
import SiderMenu from "../../components/SiderMenu/index";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import GlobalHeader, {GlobalHeaderProps} from "../../components/GlobalHeader/index";
import {Scrollbars} from 'react-custom-scrollbars';
import {enquireScreen, unenquireScreen} from 'enquire-js';
import {antdMenuManager} from "../../manager/menu/AntdMenuManager";
import AntdNoticeManager from "../../manager/notice/AntdNoticeManager";
import {push} from "react-router-redux";
import {sessionManager} from "../../manager/session/SessionManager";
import {ReactReduxConnect} from "wuxp_react_dynamic_router/src/decorator/ReactReduxConnect";
import {MapStateToPropsParam} from "react-redux";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import {AntdSession} from "../../model/session/AntdAdmin";
import {SystemConfig} from "../../model/AntdAdminStore";
import {match, Redirect, Route, Switch} from "react-router";
import {getRoutes} from "../../utils/utils";
import {routeConfigs} from "../../routes/router";

import Authorized from '../../utils/auth/Authorized';
import NotFound from '../../views/exception/404';
import {isUndefined} from "util";

const {Content, Header, Footer} = Layout;

const {AuthorizedRoute, check} = Authorized;

export interface AntdNavLayoutProps extends GlobalHeaderProps {
    /**
     * 当前登录用户的信息
     */
    session: AntdSession;

    /**
     * 菜单信息
     */
    menus: Array<AntdMenuItem>;

    /**
     * 系统配置列表
     */
    systemConfig: SystemConfig;


    /**
     * 全局异常
     */
    globalError: any;


    //匹配
    match: match<any>
}


/**
 * 根据菜单取得重定向地址.
 */
const redirectData = [];


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, menus, systemConfig, notices, globalError}) => ({
    session,
    menus,
    notices,
    systemConfig,
    globalError
});


/**
 * 导航布局
 */
@ReactReduxConnect(mapStateToPropsParam)
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
            const {menus} = this.props;
            // get the first authorized route path in routerData
            const authorizedPath = menus.find(
                ({authority, path}) => check(authority, path as any, undefined) && path !== '/'
            );
            // console.log("------------------")
            // console.log(authorizedPath);
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
            sessionManager.logout();
        }
    };


    /**
     * 在渲染前调用,在客户端也在服务端
     */
    componentWillMount() {

        //加载菜单
        antdMenuManager.getMenus();


    }

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
        // console.log("---------------------------1111-----------")
        // console.log(this.props);
        const currentUser = {
            notifyCount: 10,
            name: "李四",//session.name,
            avatar: ""
        };

        if (redirectData.length === 0) {
            this.props.menus.forEach(getRedirect);
        }

        // console.log(this.props);
        const bashRedirect = this.getBashRedirect();

        return (
            <Layout>
                <SiderMenu
                    {...this.props}
                    collapsed={this.state.collapsed}
                    location={location}
                    isMobile={this.state.isMobile}
                    onCollapse={this.handleMenuCollapse}
                />
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <GlobalHeader
                            logo={this.props.logo}
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
}


const getRedirect = item => {
    if (item && item.children) {
        if (item.children[0] && item.children[0].path) {
            redirectData.push({
                from: `${item.path}`,
                to: `${item.children[0].path}`,
            });
            item.children.forEach(children => {
                getRedirect(children);
            });
        }
    }
};


/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 * @param {Object} routerData 路由配置
 */
const getBreadcrumbNameMap = (menuData, routerData) => {
    const result = {};
    const childResult = {};
    for (const i of menuData) {
        if (!routerData[i.path]) {
            result[i.path] = i;
        }
        if (i.children) {
            Object.assign(childResult, getBreadcrumbNameMap(i.children, routerData));
        }
    }
    return Object.assign({}, routerData, result, childResult);
};
