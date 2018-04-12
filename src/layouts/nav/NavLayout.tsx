import * as React from "react";
import {Layout, Icon} from 'antd';

import SiderMenu from "../../components/SiderMenu/index";
import GlobalFooter from "../../components/GlobalFooter/GlobalFooter";
import GlobalHeader, {GlobalHeaderProps} from "../../components/GlobalHeader/index";
import {Scrollbars} from 'react-custom-scrollbars';

import SessionManagerImpl from "../../session/SessionManager";
import {NoticeManager,NoticeManagerImpl} from "../../session/NoticeManager";
import {getMenuData} from "../../common/menu";
import logo from "../../assets/logo.svg";


const {Content, Header, Footer} = Layout;


export interface NavLayoutProps extends GlobalHeaderProps {

}

/**
 * 导航布局
 */
export default class NavLayout extends React.Component<NavLayoutProps, any> {


    private noticeManager: NoticeManager<any>;

    constructor(props, contentx) {
        super(props, contentx);
        this.noticeManager = new NoticeManagerImpl();
    }

    state = {
        collapsed: false,
        isMobile: false
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

    /**
     * 点击菜单
     * @param {any} key
     */
    handleMenuClick = ({key}) => {
        if (key === 'triggerError') {

            return;
        }
        if (key === 'logout') {

        }
    };

    render() {
        let fetchingNotices = false;
        return (
            <Layout>
                <SiderMenu
                    {...this.props}
                    logo={logo}
                    menuData={getMenuData()}
                    collapsed={this.state.collapsed}
                    location={location}
                    isMobile={this.state.isMobile}
                    onCollapse={this.handleMenuCollapse}
                />
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <GlobalHeader
                            logo={logo}
                            currentUser={SessionManagerImpl.getCurrentManager()}
                            fetchingNotices={fetchingNotices}
                            notices={this.noticeManager.getNotices()}
                            collapsed={this.state.collapsed}
                            isMobile={this.state.isMobile}
                            onNoticeClear={this.noticeManager.handleNoticeClear}
                            onCollapse={this.handleMenuCollapse}
                            onMenuClick={this.handleMenuClick}
                            onNoticeVisibleChange={this.noticeManager.handleNoticeVisibleChange}
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
