import {LoginType} from "../../../enums/AdminLoginType";


export interface AdminLoginReq {

    /**
     * 登录类型
     */
    type: LoginType;

    /**
     * 用户名
     */
    userName?: string;

    /**
     * 登录密码
     */
    password?: string;

    /**
     * 手机号码
     */
    mobilePhone?: string;

    /**
     * 验证码
     */
    captcha?: string;
}
