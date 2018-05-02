import locale from "antd/lib/date-picker/locale/zh_CN";
import DatePicker from "antd/lib/date-picker";
import * as React from "react";
import {
    DatePickerProps,
    MonthPickerProps,
    PickerProps,
    RangePickerProps,
    WeekPickerProps
} from "antd/lib/date-picker/interface";
import {isNullOrUndefined, isNumber} from "util";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";
import moment from "moment";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";
import {FormItemType} from "../FormItemType";

const {MonthPicker, WeekPicker, RangePicker} = DatePicker;


/**
 * 根据类型获取一个时间处理器
 * @param {FormItemType} formItemType
 * @param {PickerProps} props
 * @param propName
 * @returns {{component: React.ReactNode; setFormatter: (value) => moment.Moment; getFormatter: (value) => any | string}}
 */
export function simpleHandleDatePicker(formItemType: FormItemType, props: PickerProps, propName) {

    switch (formItemType) {
        case FormItemType.DATE_PICKER:
            return handleDatePicker(props, propName);
        case FormItemType.RANG_PICKER:
            return handleRangePicker(props, propName);
        case FormItemType.MONTH_PICKER:
            return handleMonthPicker(props, propName);
        case FormItemType.WEEK_PICKER:
            return handleWeekPicker(props, propName);
        default:
            console.error(`--未处理的类型-->${formItemType}`);
        // throw new Error(`--未处理的类型-->${formItemType}`);
    }
}

/**
 * 获取一个简单的日期选择器
 * @param {DatePickerProps} props
 * @param propName
 * @returns {{component: any; setFormatter: (value) => moment.Moment; getFormatter: (value) => any | string}}
 */
export function handleDatePicker(props: DatePickerProps, propName) {

    initProps(props);

    return generatorResult(<DatePicker key={`simple_datePicker_${propName}`} {...props} style={{width: 220}}/>, props)
}

/**
 * 获取一个范围时间选择器
 * @param {RangePickerProps} props
 * @param propName
 * @returns {{component: any; setFormatter: (value) => moment.Moment; getFormatter: (value) => any | string}}
 */
export function handleRangePicker(props: RangePickerProps, propName) {

    initProps(props);

    return generatorResult(<RangePicker key={`range_picker_${propName}`} {...props}/>, props);
}


/**
 * 获取一个月份选择器
 * @param {MonthPickerProps} props
 * @param propName
 */
export function handleMonthPicker(props: MonthPickerProps, propName) {
    initProps(props);

    return generatorResult(<MonthPicker key={`month_picker_${propName}`} {...props}/>, props);
}

/**
 * 获取一个星期选择器
 * @param {WeekPickerProps} props
 * @param propName
 * @returns {{component: React.ReactNode; setFormatter: (value) => moment.Moment; getFormatter: (value) => any | string}}
 */
export function handleWeekPicker(props: WeekPickerProps, propName) {
    initProps(props);

    return generatorResult(<WeekPicker key={`week_picker_${propName}`} {...props}/>, props);
}


function initProps(props: PickerProps) {
    if (isNullOrUndefined(props.format)) {
        props.format = MomentFormatString.YYYY_MM_DD_HH_mm_ss;
    }
    if (isNullOrUndefined(props.locale)) {
        props.locale = locale;
    }
}

function generatorResult(component: React.ReactNode, props) {
    return {
        component,
        setFormatter: (value) => {
            return defaultSetFormatter(value, props.format)
        },
        getFormatter: (value) => {
            return defaultGetFormatter(value, props.format)
        }
    };
}

function defaultSetFormatter(value, format) {
    if (isNullOrUndefined(value)) {
        return null;
    }

    if (isNumber(value)) {
        let date = new Date(value);
        // console.log("-------------d---------",date,format);
        return moment(date, format);
    }
    console.log("-----defaultSetFormatter------", value);
    return moment(value, format);
}

function defaultGetFormatter(value, format) {
    console.log("-----defaultGetFormatter------", value);
    return MomentHelper.handlerMoment(value, format);
}
