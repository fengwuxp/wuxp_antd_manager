import {call, put, takeEvery} from "redux-saga/effects";
import {SessionSaga} from "../../saga/session/SessionSaga";
import {AdminLoginReq} from "../../saga/session/req/AdminLoginReq";


export class LoginSagaManager implements SessionSaga {


    /**
     * 登录
     * @param payload
     * @returns {IterableIterator<ForkEffect>}
     */
    * login(payload: AdminLoginReq) {
        console.log("调用登录")
        try {
            const response = yield call(adminLogin, payload);
            yield put({
                type: "setAdmin",
                payload: {
                    admin:response
                },
            });
        } catch (e) {
            console.log("登录失败")
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
                name:"张三"
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
