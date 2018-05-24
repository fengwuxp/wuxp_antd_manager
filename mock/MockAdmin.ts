import {AntdAdmin} from "../src/model/session/AntdAdmin";


/**
 * 模拟用户
 * @return {AntdAdmin}
 */
export function mockAdmin(): AntdAdmin {

    return {
        name: "张三",
        avatar: "",
    }
}
