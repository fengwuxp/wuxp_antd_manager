import {default as Lookup, LookupProps} from "../../../components/form/lookup/Lookup";
import * as React from "react";
import {WrappedFormUtils} from "antd/lib/form/Form";
import {isNullOrUndefined} from "util";


/**
 * 处理带回查找
 * @param {LookupProps<T>} props
 * @param {string} propName
 * @param {WrappedFormUtils} from
 * @returns {{node: any}}
 */
export function handleLookup<T>(props: LookupProps<T>, propName: string, from: WrappedFormUtils,) {


    let showValue = props.showValue;

    props.showValue = (rows: Array<any>) => {

        let val = {};
        val[propName] = rows;

        from.setFieldsValue(val);
        console.log("------设置值-------", propName, from.getFieldValue(propName));
        if (isNullOrUndefined(rows) || rows.length === 0) {
            return null;
        }
        return showValue(rows);
    };

    return {
        node: <Lookup key={`lookup_key_${propName}`} {...props}/>
        // setFormatter:()=>{
        //
        // },
        // getFormatter:()=>{
        //
        // }
    }
}
