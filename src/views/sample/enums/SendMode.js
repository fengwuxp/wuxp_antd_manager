"use strict";
exports.__esModule = true;
/**
 * 发送模式
 */
var SendMode = /** @class */ (function () {
    function SendMode() {
    }
    SendMode.SYNC = {
        name: "SYNC",
        ordinal: 0,
        desc: "同步"
    };
    SendMode.ASYNC = {
        name: "ASYNC",
        ordinal: 1,
        desc: "异步"
    };
    return SendMode;
}());
exports["default"] = SendMode;
