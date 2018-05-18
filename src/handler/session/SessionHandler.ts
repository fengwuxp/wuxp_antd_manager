import {AntdAdmin, AntdSession, SessionStatus} from "../../model/session/AntdAdmin";
import apiClient from "../../fetch/BuildFetchClient";
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {setAuthority} from "../../utils/auth/authority";
import {call, put} from "redux-saga/effects";
import * as routerRedux from "react-router-redux";
import {createReducerByHandler, createReduxHandler} from "wuxp_react_dynamic_router/src/redux/ProxyReduxAction";
import {LoginType} from "../../enums/AdminLoginType";
import {SagaHandler} from "wuxp_react_dynamic_router/src/redux/SagaHandler";
import {ReduxAction} from "wuxp_react_dynamic_router/src/redux/ReduxAction";
import {TargetAction} from "wuxp_react_dynamic_router/src/decorator/TargetReduxAction";

/**
 * 会话相关处理
 */
export interface SessionHandler extends SagaHandler<AntdSession> {

    login: (req, type?: string) => void;

    logout: (type?: string) => void;

    setMember: (state: AntdSession, newState: AntdSession) => AntdSession;

}


export class SessionHandlerImpl implements SessionHandler {


    public default: AntdSession = {

        admin: null,

        type: LoginType.ACCOUNT,

        /**
         * 登录状态
         */
        status: null,

        /**
         * 提交状态
         */
        submitting: false,

        errorMessage: null

    };


    /**
     * 用户登录
     * @param req
     * @param {string}type
     * @return {any}
     */
    @TargetAction(SessionHandlerImpl.prototype.setMember)
    * login(req, type?: string): any {

        try {

            yield put({
                type: type,
                payload: {
                    submitting: true
                }
            });

            console.log("登录请求参数", req);
            const {success, data, message, code}: ApiResp<AntdAdmin> = yield call(adminLogin, req);

            if (success) {
                //登录成功
                setAuthority("user");
                console.log("跳转到首页");

                //跳转到首页
                yield put(routerRedux.push('/'));
                return {
                    admin: data,
                    status: SessionStatus.LOGIN_SUCCESS,
                    submitting: false
                };
            } else {
                console.log("登录请求失败");
                console.log(`message-> ${message} , code->${code}`);

                return {
                    status: SessionStatus.LOGIN_ERROR,
                    submitting: false,
                    errorMessage: message
                };
            }

        } catch (e) {
            return {
                status: SessionStatus.LOGIN_ERROR,
                submitting: false,
                errorMessage: "登录出现异常"
            };
        }
    } ;


    /**
     * 退出
     * @returns {IterableIterator<any>}
     */
    @TargetAction(SessionHandlerImpl.prototype.setMember)
    * logout(type?: string): any {
        console.log("退出登录");
        yield call(adminLogout);
        setAuthority("");

        //回到登录页面
        yield put(routerRedux.push('/login'));

        return null;
    }

    setMember(state: AntdSession, newState: AntdSession): AntdSession {
        return newState;
    };


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


const sessionHandlerImpl = new SessionHandlerImpl();

const session = createReducerByHandler<AntdSession>(sessionHandlerImpl);

const sessionHandler = createReduxHandler<SessionHandler>(sessionHandlerImpl);

export {
    sessionHandler,
    session
}
