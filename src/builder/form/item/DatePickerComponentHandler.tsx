import locale from "antd/lib/date-picker/locale/zh_CN";
import DatePicker from "antd/lib/date-picker";
import * as React from "react";
import {DatePickerProps} from "antd/lib/date-picker/interface";
import {isNullOrUndefined} from "util";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";
import moment from "moment";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";

export function handleSimpleDatePicker(props: DatePickerProps) {

    if (isNullOrUndefined(props.format)) {
        props.format = MomentFormatString.YYYY_MM_DD_HH_mm_ss;
    }
    if (isNullOrUndefined(props.locale)) {
        props.locale = locale;
    }

    return {
        component: <DatePicker {...props} style={{width: 220}}/>,
        setFormatter: (value) => {
            return defaultSetFormatter(value, props.format)
        },
        getFormatter: (value) => {
            return defaultGetFormatter(value, props.format)
        }
    };
}

export function defaultSetFormatter(value, format) {
    console.log("-----defaultSetFormatter------", value);
    return moment(value, format);
}

export function defaultGetFormatter(value, format) {
    console.log("-----defaultGetFormatter------", value);
    return MomentHelper.handlerMoment(value, format);
}
