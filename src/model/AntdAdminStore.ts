import {AntdSession} from "./session/AntdAdmin";
import {AntdMenuItem} from "./menu/AntdMenuItem";
import {AntdNoticeItem} from "./notice/AntdNoticeItem";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq";

/**
 * 系统配置
 */
export interface SystemConfig {

    [k: string]: any

    /**
     * 站点名称
     */
    site_name: string;

    /**
     * 站点logo
     */
    admin_logo: string;

}

/**
 * 查询参数缓存
 */
export interface QueryParamsCache<T extends ApiQueryReq> {

    /**
     * 上一次查询列表的url
     */
    prevFetchUrl: string;

    /**
     * 当前列表缓存的查询参数
     */
    params: T
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
     * 当前选中的导航菜单
     */
    currentSelectedMenu: number;

    /**
     * 系统配置列表
     */
    systemConfig: SystemConfig;


    /**
     * 全局异常
     */
    globalError: any;

    /**
     * 查询参数缓存对象
     * 该对象在保证用户在操作列表数据是能记录下当前的查询条件
     */
    queryParamsCache: QueryParamsCache<any>
}


