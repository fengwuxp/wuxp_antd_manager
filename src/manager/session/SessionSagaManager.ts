import {call, put} from "redux-saga/effects";
import {SessionSaga} from "../../saga/session/SessionSaga";
import {AdminLoginReq} from "../../saga/session/req/AdminLoginReq";
import {SessionStatus} from "../../model/session/AntdAdmin";
import * as routerRedux from "react-router-redux"
import {setAuthority} from "../../utils/auth/authority";


export class SessionSagaManager implements SessionSaga {


    /**
     * 登录
     * @param payload
     * @returns {IterableIterator<ForkEffect>}
     */
    * login(payload: AdminLoginReq) {

        const type = "setAdmin";

        try {
            const response = yield call(adminLogin, payload);
            setAuthority("user");
            yield put({
                type,
                payload: {
                    admin: response,
                    status: SessionStatus.LOGIN_SUCCESS
                },
            });
            console.log("跳转到首页");
            //跳转到首页
            yield put(routerRedux.push('/'));
        } catch (e) {
            console.log(e);
            yield put({
                type,
                payload: {
                    status: SessionStatus.LOGIN_ERROR
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
        console.log("退出登录")
        yield call(adminLogout, payload);
        setAuthority("");
        //回到登录页面
        yield put(routerRedux.push('/login'));
        yield put({
            type: "removeAdmin",
            payload: null,
        });
    }


}


function adminLogin(payload: AdminLoginReq) {
    console.log("调用登录");
    console.log(payload);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "张三"
            })
        }, 1500);
    });
}

function adminLogout({type, payload}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(payload)
        }, 1500);
    });
}
