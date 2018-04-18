import {call, put} from "redux-saga/effects";
import {SessionStatus} from "../../model/session/AntdAdmin";
import {getMenuData} from "../../routes/menu";


/**
 * 菜单saga 接口
 */
export interface AntdMenuSaga {

    getMenus: (...p) => void;
}


export class AntdMenuSagaManager implements AntdMenuSaga {


    /**
     * 从服务端获取菜单列表
     * @param payload
     * @returns {IterableIterator<any>}
     */
    * getMenus(payload: any) {

        const type = "updateMenus";

        const menus = yield call(queryMenus, payload);

        // console.log(menus);

        yield put({
            type,
            payload: menus
        });
    }

}

function queryMenus(params) {
    console.log("获取菜单列表");
    // console.log(params);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getMenuData())
        }, 1500);
    });
}
