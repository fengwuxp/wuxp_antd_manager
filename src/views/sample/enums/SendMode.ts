import {Enum} from "typescript_api_sdk/src/enums/Enum";

/**
 * 发送模式
 */
class SendMode {

    constructor() {
    }

    public static readonly SYNC: Enum = {
        name: "SYNC",
        ordinal: 0,
        desc: "同步"
    };

    public static readonly ASYNC: Enum = {
        name: "ASYNC",
        ordinal: 1,
        desc: "异步"
    };


}

export default SendMode;
