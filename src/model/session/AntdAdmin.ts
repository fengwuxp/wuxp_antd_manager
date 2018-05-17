import {LoginType} from "../../enums/AdminLoginType";

/**
 * 管理员信息
 */
export interface AntdAdmin {

    /**
     * 姓名
     */
    readonly name: string;

    /**
     * 头像
     */
    readonly avatar: string;
}

export enum SessionStatus {

    /**
     * 登录成功
     */
    LOGIN_SUCCESS,

    /**
     * 登录失败
     */
    LOGIN_ERROR,

    /**
     * 未登录
     */
    NOT_LOGIN

}

export interface AntdSession {

    /**
     * 用户信息
     */
    admin?: AntdAdmin,

    /**
     * 会话状态
     */
    status?: SessionStatus,

    /**
     * 登录类型
     */
    type?: LoginType,

    /**
     * 提交状态
     */
    submitting?: boolean;

    //登录失败的错误提示
    errorMessage?: string;
}
