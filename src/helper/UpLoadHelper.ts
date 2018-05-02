import {UploadChangeParam, UploadFile, UploadProps} from "antd/lib/upload/interface";
import {WrappedFormUtils} from "antd/lib/form/Form";
import {message} from "antd";
import {isNullOrUndefined} from "util";


export class UpLoadHelper {


    public form: WrappedFormUtils;

    //表单提交的名称
    public formItemName: string;

    /**
     * 上传文件大小限制 默认1MB
     * @type {number}
     */
    public maxFileSize: number;

    //上传检查的错误提示消息
    public errorMessage: string;

    private props: UploadProps;

    constructor(form: WrappedFormUtils, formItemName: string, maxFileSize: number = 1, errorMessage?: string) {
        this.form = form;
        this.formItemName = formItemName;
        this.maxFileSize = maxFileSize * 1024 * 1024;
        if (isNullOrUndefined(errorMessage)) {
            this.errorMessage = `上传文件不能超过${maxFileSize}MB`;
        }
    }

    public upload = (defaultFileList: Array<string> = [], props: UploadProps = {}): UploadProps => {

        const helper: UpLoadHelper = this;

        const uploadProps: UploadProps = {
            action: `/api/upload/upFile`,
            // action: `${process.env.NODE_ENV = 'dev' ? '/api' : ''}/upload/upFile`,
            listType: 'picture',
            headers: {},
            //默认只支持传图片
            //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
            accept: "image/*",

            //是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件
            multiple: false,

            //发到后台的文件参数名
            name: "file",

            //上传请求时是否携带 cookie
            withCredentials: true,

            /**
             * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。
             * 支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。
             * 注意：IE9 不支持该方法。
             * @param {UploadFile} file
             * @param {UploadFile[]} FileList
             * @returns {boolean}
             */
            beforeUpload(file: UploadFile, FileList: UploadFile[]) {
                return helper.beforeUpload(file)
            },

            //点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
            onRemove(file: UploadFile) {
                console.log("---------onRemove---------");
                const {response} = file;
                const urlList: Array<string> = helper.form.getFieldValue(helper.formItemName).split(",");
                console.log(urlList);
                helper.setUploadValue(urlList.filter(url => url != response.url));
            },

            //上传文件改变时的状态，详见 onChange
            onChange(info: UploadChangeParam) {
                console.log("---------onChange---------", helper.formItemName);
                let {fileList} = info;
                console.log(fileList);

                // 3. filter successfully uploaded files according to response from server
                let urlList = fileList.filter((file) => {
                    console.log(file);
                    if (file.response) {
                        return file.response.isSuccess;
                    }
                    return false;
                }).map(({response}) => response.url);
                if (urlList.length > 0) {
                    helper.setUploadValue(urlList);
                }
            },
            //点击文件链接或预览图标时的回调
            onPreview(file: UploadFile) {
                console.log("---------onPreview---------");
                // const {response} = file;
            }
        };

        if (defaultFileList.length > 0) {
            //设置默认
            setTimeout(() => {
                this.setUploadValue(defaultFileList);
            }, 300);
        }

        this.props = {
            ...uploadProps,
            ...props,
            //默认已经上传的文件列表
            defaultFileList: this.getDefaultFileList(defaultFileList),
        };
        return this.props;
    };

    /**
     * 设置默认的上传列表
     * @param {Array<string>} defaultFileList
     */
    public setDefaultFileList = (defaultFileList: Array<string> = []) => {
        this.props.defaultFileList = this.getDefaultFileList(defaultFileList);
    };


    public beforeUpload = (file: UploadFile): boolean => {

        //检查上传文件大小
        let exceedLimit = file.size > this.maxFileSize;

        if (exceedLimit) {
            message.error(this.errorMessage);
        }
        return !exceedLimit
    };

    public setUploadValue = (value: Array<string>) => {
        const formItem = {};
        formItem[this.formItemName] = value.join(",");
        this.form.setFieldsValue(formItem)
    };


    /**
     * 获取已经上传的文件列表
     * @param {Array<string>} defaultFileList 文件url
     * @returns {UploadFile[]}
     */
    protected getDefaultFileList = (defaultFileList: Array<string>): UploadFile[] => {

        return defaultFileList.map((url, i) => {
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
    }

}
