import {call, put, takeEvery} from "redux-saga/effects";
import {SessionSaga} from "../../saga/session/SessionSaga";
import {AdminLoginReq} from "../../saga/session/req/AdminLoginReq";
import {SessionStatus} from "../../model/session/AntdAdmin";
import * as routerRedux from "react-router-redux"


export class LoginSagaManager implements SessionSaga {


    /**
     * 登录
     * @param payload
     * @returns {IterableIterator<ForkEffect>}
     */
    * login(payload: AdminLoginReq) {

        const type = "setAdmin";

        try {
            const response = yield call(adminLogin, payload);
            yield put({
                type,
                payload: {
                    admin: response,
                    status: SessionStatus.LOGIN_SUCCESS
                },
            });
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
        yield call(adminLogout, payload);
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
