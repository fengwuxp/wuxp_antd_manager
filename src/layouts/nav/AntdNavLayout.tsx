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
import {AntdNoticeItem} from "../../model/notice/AntdNoticeItem";


const {Content, Header, Footer} = Layout;


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
    globalError: any
}


const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session, menus, systemConfig, notices,globalError}) => ({
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

    handleHeaderMenuClick = ({item, key, keyPath}) => {
        console.log(key);
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
        console.log("---------------------------1111-----------")
        console.log(this.props);
        const currentUser = {
            notifyCount: 10,
            name: "李四",//session.name,
            avatar: ""
        };

        return (
            <Layout>
                <SiderMenu
                    {...this.props}
                    menuData={this.props['menus']}
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
                            <div style={{height: 1000}}>12345</div>
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
