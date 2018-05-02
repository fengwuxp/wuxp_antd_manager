import * as React from "react";
import {UploadProps} from "antd/lib/upload/interface";
import {FormItemType} from "../FormItemType";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils";
import {isArray, isNullOrUndefined} from "util";
import WUploadFile from "../../../components/upload/WUploadFile";

// const helpers:Map<string,UpLoadHelper>=new Map<string, UpLoadHelper>();
/**
 * 处理图片上传
 * @param {FormItemType} formItemType 类型
 * @param {string} propName
 * @param {boolean} init 是否已经初始化
 * @param {Array<string>} defaultFiles
 * @param {UploadProps} props
 */
export function handleUploadImage(formItemType: FormItemType,
                                  propName: string,
                                  init: boolean,
                                  defaultFiles: Array<string>,
                                  props: UploadProps = {}) {


    let placeholder, accept, maxFileSize;

    if (formItemType === FormItemType.UPLOAD_FILE) {
        placeholder = "请选择要上传的文件";
        accept = "*";
        maxFileSize = 5
    } else {
        placeholder = "请选择要上传的图片";
        accept = "image/*";
        maxFileSize = 1;
    }
    if (!isNullOrUndefined(defaultFiles) && !isArray(defaultFiles)) {
        defaultFiles = (defaultFiles as string).split(",");
    }
    const uploadSuccess = (urls: Array<string>) => {

        // console.log("文件上传成功", urls);
    };
    return {
        node: <WUploadFile key={`upload_image_${propName}`}
                           {...props}
                           accept={accept}
                           uploadSuccess={uploadSuccess}
                           uploadError={(resp) => {
                           }}
                           init={init}
                           defaultFiles={defaultFiles}
                           maxFileSize={maxFileSize}
                           placeholder={placeholder}/>,
        setFormatter(value: string) {
            // console.log("--------upload setFormatter------------", propName, value);
            if (!StringUtils.hasText(value)) {
                return null;
            }
            let values = value.split(",");
            // helper.setDefaultFileList(values);
            return values
        },
        getFormatter(value: Array<string>) {
            if (isNullOrUndefined(value)) {
                return null
            }
            // console.log("--------upload getFormatter ------------", propName, value);
            return value.join(",");
        }
    }
}

function defaultSetFormatter(value: string) {

    return value.split(",")
}

function defaultGetFormatter() {

}
