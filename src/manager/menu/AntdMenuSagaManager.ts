import {call, put} from "redux-saga/effects";
// import {getMenuData, menuData} from "../../routes/menu";
import {AntdMenuItem} from "../../model/menu/AntdMenuItem";
import apiClient from "../../fetch/BuildFetchClient";

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
        console.log("---菜单数据-->", menus);
        yield put({
            type,
            payload: menus
        });
    }


}

function queryMenus(params) {

    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         // console.log(menuData);
    //         resolve(getMenuData(menuData))
    //     }, 200);
    // });

    return apiClient.post({
        url: "/common/menus",
        data: {
            enabled: true,
            level: 0
        },
        useFilter: false
    }).then((data) => {
        return convertMenuItem(data.data);
    });
}

/**
 * 转化菜单数据
 * @param list
 * @returns {any}
 */
function convertMenuItem(list) {

    return list.map((item) => {

        const {name, path, icon, subMenus} = item;
        let menu: AntdMenuItem = {
            name,
            path,
            icon,
        };
        if (subMenus) {
            menu.children = convertMenuItem(subMenus)
        }

        return menu;
    });
}
