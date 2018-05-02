import Upload from "antd/lib/upload/Upload";
import Button from "antd/lib/button/button";
import {Icon} from "antd";
import * as React from "react";
import {UpLoadHelper} from "../../../helper/UpLoadHelper";
import {UploadProps} from "antd/lib/upload/interface";

/**
 * 处理图片上传
 * @param form
 * @param formItemName
 * @param {Array<string>} defaultFileList
 * @param {UploadProps} props
 */
export function handleUploadImage(form, formItemName, defaultFileList: Array<string> = [], props: UploadProps = {}) {

    const helper = new UpLoadHelper(form, formItemName);

    const component = <Upload key={`upload_image_${formItemName}`}
                              {... helper.upload(defaultFileList.filter(item => item.trim().length > 0), props)}>
        <Button><Icon type="upload"/>请选择要上传图片</Button>
    </Upload>;

    return component;
}
