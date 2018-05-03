import {UploadProps} from "antd/lib/upload";
import * as React from "react";
import {Icon, message} from "antd";
import Button from "antd/lib/button/button";
import Upload from "antd/lib/upload/Upload";
import {UploadChangeParam, UploadFile, UploadLocale} from "antd/lib/upload/interface";
import {isNullOrUndefined} from "util";


export interface UploadImageProps extends UploadProps {

    placeholder?: string;

    /**
     * 文件上传大小限制
     */
    maxFileSize: number;

    defaultFiles: Array<string>,

    errorMessage?: string;

    uploadSuccess?: (urls: Array<string>) => void;

    uploadError?: (e: any) => void;

    /**
     * 是否初始化
     */
    init: boolean;
}

const DEFAULT_LOCAL: UploadLocale = {
    uploading: "上传中...",
    uploadError: "上传失败",
    removeFile: "移除",
    previewFile: "预览"
};

const DEFAULT_NAME: string = "file";

const DEFAULT_ACTION: string = `${process.env.NODE_ENV === 'dev' ? '/api' : ''}/upload/upFile`;

export default class WUploadFile extends React.Component<UploadImageProps, any> {


    //已经上传的文件列表
    protected uploadList: UploadFile[] = [];

    /**
     * 默认已经的上传的文件列表
     */
    protected defaultFileList: UploadFile[];

    protected refName: string = "w_upload";


    constructor(props: UploadImageProps, context: any) {
        super(props, context);

        let errorMessage = this.props.errorMessage;
        if (isNullOrUndefined(errorMessage)) {
            errorMessage = `上传文件不能超过${this.props.maxFileSize}MB`;
        }
        const maxFileSize = this.props.maxFileSize * 1024 * 1024;

        this.state = {
            errorMessage,
            maxFileSize
        };
    }


    render() {
        const {init, locale, name, action, accept, listType, placeholder, defaultFiles, beforeUpload, onRemove, onPreview} = this.props;
        this.defaultFileList = this.getDefaultFileList(defaultFiles);

        const _locale = locale ? locale : DEFAULT_LOCAL;
        const _name = name ? name : DEFAULT_NAME;
        const _action = action ? action : DEFAULT_ACTION;
        const _listType = listType ? listType : "picture";

        return init ? <Upload ref={this.refName}
                              accept={accept}
                              listType={_listType}
                              action={action ? action : _action}
                              defaultFileList={this.defaultFileList}
                              name={_name}
                              withCredentials={true}
                              beforeUpload={beforeUpload ? beforeUpload : this.beforeUpload}
                              onRemove={onRemove ? onRemove : this.onRemove}
                              onPreview={onPreview ? onPreview : this.onPreview}
                              onChange={this.onChange}
                              locale={_locale}>
            <Button><Icon type="upload"/>{placeholder}</Button>
        </Upload> : null
    }


    /**
     * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。
     * 支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。
     * 注意：IE9 不支持该方法。
     * @param {UploadFile} file
     * @param {UploadFile[]} FileList
     * @returns {boolean}
     */
    protected beforeUpload = (file: UploadFile, FileList: UploadFile[]): boolean => {
        //检查上传文件大小
        let exceedLimit = file.size > this.state.maxFileSize;

        if (exceedLimit) {
            message.error(this.state.errorMessage);
        }
        return !exceedLimit
    };

    /**
     * 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
     * @param {UploadFile} file 移除的文件
     */
    protected onRemove = (file: UploadFile) => {
        // console.log("---------onRemove---------", file, this.uploadList);
        //文件被移除
        let index = -1;
        let r = this.uploadList.some((item, i) => {
            index = i;
            return item.response.url === file.response.url;
        });
        if (r && index > -1) {
            //移除
            this.uploadList.splice(index, 1);
            //更新
            this.props.uploadSuccess(this.uploadList.map(({response}) => response.url))
        }
    };

    /**
     * 上传文件改变时的状态
     * @param {UploadChangeParam} param
     */
    protected onChange = (param: UploadChangeParam) => {
        // console.log("---------onChange---------", helper.formItemName);
        const {fileList} = param;
        console.log(fileList);

        // 3. filter successfully uploaded files according to response from server
        let errorResp;
        const files = fileList.filter((file) => {
            if (file.response) {
                errorResp = file.response;
                return file.response.isSuccess;
            }
            return false;
        });

        const length = files.length;
        if (length > this.uploadList.length) {
            //上传成功
            let urls = files.map(({response}) => response.url);
            this.props.uploadSuccess(urls);
            this.uploadList = files;
            //移除文件
            this.removeFile(files);
        } else {
            if (errorResp) { //上传失败
                this.props.uploadError(errorResp);
            }
        }

    };

    //点击文件链接或预览图标时的回调
    protected onPreview = (file: UploadFile) => {
        console.log("---------onPreview---------");
        // const {response} = file;
    };

    /**
     * 获取已经上传的文件列表
     * @param {Array<string>} defaultFileList 文件url
     * @returns {UploadFile[]}
     */
    protected getDefaultFileList = (defaultFileList: Array<string> = []): UploadFile[] => {

        if (defaultFileList === null) {
            return [];
        }

        let uploadFiles = defaultFileList.map((url, i) => {
            return {
                uid: i,
                size: i,
                name: url,
                type: "file",
                status: "done",
                url: url,
                thumbUrl: url,
                response: {
                    isSuccess: true,
                    url: url
                }
            } as UploadFile;
        });

        this.uploadList = uploadFiles;

        return uploadFiles;
    };

    /**
     * 自动移除图片
     * @param files
     */
    protected removeFile = (files) => {
        if (this.props.multiple === true) {
            return;
        }
        if (files.length === 1) {
            return;
        }
        // console.log("-----files-----", files);
        let file;
        if (this.defaultFileList.length > 0) {
            file = this.defaultFileList[0];
            this.defaultFileList = [];
        } else if (files.length > 1) {
            file = files[0];
        }
        if (isNullOrUndefined(file)) {
            return;
        }
        // console.log("-----移除图片-----", file);
        //移除图片
        this.refs[this.refName]['handleRemove'](file);
    }
}
