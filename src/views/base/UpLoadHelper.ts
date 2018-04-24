import {UploadChangeParam, UploadFile, UploadProps} from "antd/lib/upload/interface";
import {WrappedFormUtils} from "antd/lib/form/Form";


export class UpLoadHelper {


    public form: WrappedFormUtils;

    //表单提交的名称
    public formItemName: string;


    constructor(form: WrappedFormUtils, formItemName: string) {
        this.form = form;
        this.formItemName = formItemName;
    }

    public upload = (defaultFileList: Array<string> = [], props: UploadProps = {}): UploadProps => {

        const helper: UpLoadHelper = this;

        const uploadProps: UploadProps = {
            action: '/api/upload/upFile',
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

            //点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
            onRemove(file: UploadFile) {
                console.log("---------onRemove---------");
                const {response} = file;
                const urlList: Array<string> = helper.form.getFieldValue(helper.formItemName);
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
                const {response} = file;
            }
        };

        if (defaultFileList.length > 0) {
            //设置默认
            setTimeout(() => {
                this.setUploadValue(defaultFileList);
            }, 300);
        }

        return {
            ...uploadProps,
            ...props,
            //默认已经上传的文件列表
            defaultFileList: this.getDefaultFileList(defaultFileList),
        };
    };


    public setUploadValue = (value: any) => {
        const formItem = {};
        formItem[this.formItemName] = value;
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
