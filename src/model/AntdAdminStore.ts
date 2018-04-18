import {AntdAdmin, AntdSession} from "./session/AntdAdmin";
import {AntdMenuItem} from "./menu/AntdMenuItem";
import {AntdNoticeItem} from "./notice/AntdNoticeItem";


/**
 * 系统配置
 */
export interface SystemConfig {
    [k: string]: any
}

/**
 * 管理后台store中的state 定义
 */
export interface AntdAdminStore {

    /**
     * 当前登录用户的信息
     */
    session: AntdSession;

    /**
     * 管理员通知消息
     */
    notices: Array<AntdNoticeItem>;

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


