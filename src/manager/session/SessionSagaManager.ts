import {call, put} from "redux-saga/effects";
import {AntdAdmin, SessionStatus} from "../../model/session/AntdAdmin";
import * as routerRedux from "react-router-redux"
import {setAuthority} from "../../utils/auth/authority";
import {LoginType} from "../../enums/AdminLoginType";
import apiClient from "../../fetch/BuildFetchClient";
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";


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


export interface SessionSaga {

    login: (req: AdminLoginReq) => any;

    logout: (...p) => any;
}


export class SessionSagaManager implements SessionSaga {


    /**
     * 登录
     * @param payload
     * @returns {IterableIterator<ForkEffect>}
     */
    * login(payload) {

        const type = "setAdmin";

        try {
            yield put({
                type,
                payload: {submitting: true},
            });
            const {success, data, message, code}: ApiResp<AntdAdmin> = yield call(adminLogin, payload);

            if (success) {
                //登录成功
                setAuthority("user");
                yield put({
                    type,
                    payload: {
                        admin: data,
                        status: SessionStatus.LOGIN_SUCCESS,
                        submitting: false
                    },
                });
                console.log("跳转到首页");
                //跳转到首页
                yield put(routerRedux.push('/'));
            } else {
                console.log("登录请求失败");
                console.log(`message-> ${message} , code->${code}`);
                yield put({
                    type,
                    payload: {
                        status: SessionStatus.LOGIN_ERROR,
                        submitting: false,
                        errorMessage: message
                    },
                });
            }

        } catch (e) {
            console.log("登录请求异常");
            console.log(e);
            yield put({
                type,
                payload: {
                    status: SessionStatus.LOGIN_ERROR,
                    submitting: false,
                    errorMessage: "登录出现异常"
                },
            });
        }
    }


    /**
     * 退出
     * @param payload
     * @returns {IterableIterator<any>}
     */
    * logout(payload) {
        console.log("退出登录");
        yield call(adminLogout, payload);
        setAuthority("");

        yield put({
            type: "removeAdmin",
            payload: null,
        });
        //回到登录页面
        yield put(routerRedux.push('/login'));
    }


}


function adminLogin(payload): Promise<ApiResp<AntdAdmin>> {

    const {userName, password, captcha} = payload;
    return apiClient.post({
        url: "/login_json",
        data: {
            loginName: userName,
            password,
            captcha
        },
        useFilter: false
    });
}

function adminLogout() {

    apiClient.get({
        url: "/logout"
    });

}
