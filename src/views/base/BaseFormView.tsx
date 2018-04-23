import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {UploadChangeParam, UploadFile, UploadProps} from "antd/lib/upload/interface";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";

export interface BaseFormSate<E> {

    formData: E
}

export default class BaseFormView<P extends AntdFromBaseProps, S extends BaseFormSate<any>> extends React.Component<P, S> {


    constructor(props: P, context: any) {
        super(props, context);
    }


    componentDidMount(): void {

        //cong url中获取参数
        console.log("-------------------------1------------------------");
        console.log(this.props);
        const {search, state} = this.props.history.location;
        const path = this.props.match.path;
        const params = parse(search);

        console.log(params)
        console.log(path);
        //加载表单数据
        apiClient.post({
            url: path,
            data: params
        }).then((data) => {
            this.setState({
                formData: data
            });
        }).catch(this.fetchFormDataFailure)
    }


    /**
     * 失败处理
     * @param e
     */
    public fetchFormDataFailure = (e: any) => {

    };


    /**
     * 参考文档：https://ant.design/components/upload-cn/
     * 获取一个文件上传对象的props
     * @param {string} formItemName 表单属性的名称
     * @param {UploadProps} props
     * @returns {UploadProps}
     */
    public getUploadUploadProps = (formItemName: string, props: UploadProps = {}): UploadProps => {

        const {form} = this.props;

        const uploadProps: UploadProps = {
            action: '/upload/upFile',
            listType: 'picture',
            headers: {},
            //默认只支持传图片
            //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
            accept: "image/*",

            //是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件
            multiple: false,

            //发到后台的文件参数名
            name: "file",

            //默认已经上传的文件列表
            defaultFileList: [],

            //上传请求时是否携带 cookie
            withCredentials: true,

            //点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
            onRemove(file: UploadFile) {
                console.log("---------onRemove---------");
                const {response} = file;

                form.setFieldsValue({formItemName: []});
            },

            //上传文件改变时的状态，详见 onChange
            onChange(info: UploadChangeParam) {
                console.log("---------onChange---------");

                let {fileList} = info;

                // 3. filter successfully uploaded files according to response from server
                fileList = fileList.filter((file) => {
                    console.log(file.response);
                    if (file.response) {
                        return file.response.status === 'success';
                    }
                    return true;
                });

                if (fileList.length > 0) {
                    form.setFieldsValue({formItemName: fileList})
                }
            },
            //点击文件链接或预览图标时的回调
            onPreview(file: UploadFile) {
                console.log("---------onPreview---------");
            }
        };

        return {
            ...uploadProps,
            ...props
        };
    }
}
