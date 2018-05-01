/**
 * 获取级联的地区id
 * @param {string} val
 * @returns {Array<string>}
 */
import {isNullOrUndefined} from "util";

export function getCascadeAreaValues(val: string): Array<string> {

    if (isNullOrUndefined(val)) {
        return [];
    }

    let length = val.length;

    if (length < 2) {

        return [val];

    } else if (length === 6) {
        if (val.endsWith("00")) {

            return [val.substring(0, 2), val];
        } else {
            return [val.substring(0, 2), val.substring(0, 4) + "00", val];
        }
    } else {
        //超过6位
        return [val.substring(0, 2), val.substring(0, 4) + "00", val.substring(0, 6), val];
    }

}
