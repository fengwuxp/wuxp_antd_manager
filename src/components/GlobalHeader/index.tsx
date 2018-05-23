import React, {PureComponent} from 'react';
import {Avatar, Col, Divider, Dropdown, Icon, Menu, Row, Spin, Tag, Tooltip} from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';
import {Link} from "react-router-dom";
import * as styles from './style.less';
import {ReactBaseProps} from "wuxp_react_dynamic_router/src/model/ReactBaseProps";
import HeaderSearch from "../HeaderSearch/index";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";

const history = BrowserNavigatorFactory.get();

/**
 * 管理员
 */
export interface GlobalManager {

    /**
     * 通知数量
     */
    notifyCount: number;

    /**
     * 管理员名称
     */
    name: string;

    /**
     * 管理员头像
     */
    avatar: string;
}

export interface GlobalHeaderProps extends ReactBaseProps {


    /**
     * 菜单列表
     */
    menus: Array<AntdMenuItem>;


    /**
     * 当前选中的菜单的索引列表
     */
    selectedMenuIndexList: number[];

    /**
     * 通知列表
     */
    notices?: Array<any>,

    /**
     * 当前用户
     */
    currentUser: GlobalManager,

    /**
     * 是否已经折叠
     */
    collapsed?: boolean,

    /**
     * 是否已经抓取了通知
     */
    fetchingNotices?: boolean,
    /**
     * 是否Wie移动端
     */
    isMobile?: boolean,

    /**
     * logo
     */
    logo?: string,


    /**
     * 通知显示状态改变
     */
    onNoticeVisibleChange?: (...p) => void,

    /**
     * 点击菜单
     */
    onMenuClick?: (...p) => void,

    /**
     * 清空通知
     */
    onNoticeClear?: (...p) => void,

    /**
     * 发生折叠事件
     * @param {boolean} collapse
     */
    onCollapse?: (collapse: boolean) => void


}


export default class GlobalHeader extends PureComponent<GlobalHeaderProps, any> {

    componentWillUnmount() {
        this.triggerResizeEvent['cancel']();
    }

    getNoticeData() {
        const {notices = []} = this.props;
        if (notices.length === 0) {
            return {};
        }
        const newNotices = notices.map((notice, index) => {
            const newNotice = {...notice};
            if (newNotice.datetime) {
                newNotice.datetime = moment(notice.datetime).fromNow();
            }
            // transform id to item key
            if (newNotice.id) {
                newNotice.key = newNotice.id;
            }
            if (newNotice.extra && newNotice.status) {
                const color = {
                    todo: '',
                    processing: 'blue',
                    urgent: 'red',
                    doing: 'gold',
                }[newNotice.status];
                newNotice.extra = (
                    <Tag key={index} color={color} style={{marginRight: 0}}>{newNotice.extra}</Tag>
                );
            }
            return newNotice;
        });
        return groupBy(newNotices, 'type');
    }

    /**
     * 折叠菜单
     */
    toggleMenu = () => {
        const {collapsed, onCollapse} = this.props;
        onCollapse(collapsed);
        this.triggerResizeEvent();
    };

    /* eslint-disable*/
    @Debounce(600)
    triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }

    render() {
        const {
            currentUser,
            collapsed,
            fetchingNotices,
            isMobile,
            logo,
            onNoticeVisibleChange,
            onMenuClick,
            onNoticeClear,
            menus,
            selectedMenuIndexList
        } = this.props;

        const menu = (
            <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item disabled><Icon type="user"/>个人中心</Menu.Item>
                <Menu.Item disabled><Icon type="setting"/>设置</Menu.Item>
                <Menu.Item key="triggerError"><Icon type="close-circle"/>触发报错</Menu.Item>
                <Menu.Divider/>
                <Menu.Item key="logout">
                    <Icon type="logout"/>退出登录
                </Menu.Item>
            </Menu>
        );
        const noticeData = this.getNoticeData();
        return (
            <Row type="flex"
                 className={styles.header}>
                {isMobile && [
                    <Link to="/" className={styles.logo} key="logo">
                        <img src={logo} alt="logo" width="32"/>
                    </Link>,
                    <Divider type="vertical" key="line"/>,
                ]}
                <Icon
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggleMenu}
                />
                <Col style={{flex: 1}}>
                    {
                        menus.map((item, i) => {
                            let classNames = [styles.nav_menu_tab];
                            if (i === selectedMenuIndexList[0]) {
                                classNames.push(styles.nav_menu_tab_selected)
                            }
                            return <span data-index={i}
                                         key={i}
                                         onClick={(event) => {

                                             const target: HTMLElement = event.target as HTMLElement;
                                             const domStringMap: DOMStringMap = target.dataset;
                                             const path = menus[parseInt(domStringMap.index)].children[0].children[0].path;
                                             console.log("path--->", path);
                                             let p;
                                             if (path.startsWith("/")) {
                                                 p = `/${path}`
                                             } else {
                                                 p = path;
                                             }
                                             history.push(p);
                                         }} className={classNames.join(" ")}>{item.name}</span>
                        })
                    }
                </Col>
                <Col className={styles.right}>
                    <HeaderSearch
                        className={`${styles.action} ${styles.search}`}
                        placeholder="站内搜索"
                        dataSource={['搜索提示一', '搜索提示二', '搜索提示三']}
                        onSearch={value => {
                            console.log('input', value); // eslint-disable-line
                        }}
                        onPressEnter={value => {
                            console.log('enter', value); // eslint-disable-line
                        }}
                    />
                    <Tooltip title="使用文档">
                        <a target="_blank"
                           href="http://pro.ant.design/docs/getting-started"
                           rel="noopener noreferrer"
                           className={styles.action}>
                            <Icon type="question-circle-o"/>
                        </a>
                    </Tooltip>
                    <NoticeIcon
                        className={styles.action}
                        count={currentUser.notifyCount}
                        onItemClick={(item, tabProps) => {
                            console.log(item, tabProps); // eslint-disable-line
                        }}
                        onClear={onNoticeClear}
                        onPopupVisibleChange={onNoticeVisibleChange}
                        loading={fetchingNotices}
                        popupAlign={{offset: [20, -16]}}
                    >
                        <NoticeIcon.Tab
                            list={noticeData['通知']}
                            title="通知"
                            emptyText="你已查看所有通知"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                        />
                        <NoticeIcon.Tab
                            list={noticeData['消息']}
                            title="消息"
                            emptyText="您已读完所有消息"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
                        />
                        <NoticeIcon.Tab
                            list={noticeData['待办']}
                            title="待办"
                            emptyText="你已完成所有待办"
                            emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
                        />
                    </NoticeIcon>
                    {currentUser.name ? (
                        <Dropdown overlay={menu}><span className={`${styles.action} ${styles.account}`}><Avatar
                            size="small" className={styles.avatar} src={currentUser.avatar}/><span
                            className={styles.name}>{currentUser.name}</span></span></Dropdown>) : (
                        <Spin size="small" style={{marginLeft: 8}}/>)}
                </Col>
            </Row>
        );
    }
}
