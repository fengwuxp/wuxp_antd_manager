import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {UploadChangeParam, UploadFile, UploadProps} from "antd/lib/upload/interface";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {UpLoadHelper} from "./UpLoadHelper";


export interface BaseFormSate<E> {

    /**
     * 提交的表单数据
     */
    formData: E;

    /**
     * 表单提交状态
     */
    submitting: boolean
}

/**
 * 基础表单
 */
export default abstract class BaseFormView<P extends AntdFromBaseProps, S extends BaseFormSate<any>> extends React.Component<P, S> {


    /**
     * 提交表单的url
     */
    protected submitUrl: string;

    /**
     * 是否为创建
     * @type {boolean}
     */
    protected isCreated: boolean = true;


    constructor(props: P, context: any) {
        super(props, context);
    }


    componentDidMount(): void {

        if (!this.isCreated) {
            //在编辑是先加载表单数据

            const {search, state} = this.props.history.location;
            const path = this.props.match.path;
            const params = parse(search);

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
    }


    /**
     * 失败处理
     * @param e
     */
    public fetchFormDataFailure = (e: any) => {

    };


    /**
     * 提交
     * @param e
     */
    handleSubmit = (e) => {
        //阻止默认动作
        e.preventDefault();
        this.setState({
            submitting: true
        });
        this.props.form.validateFields((err, values) => {
            console.log(values);
            if (err) {
                //表单验证失败
                this.setState({
                    submitting: false
                });
                return;
            }

            //复制一份数据
            const formData = [...values];
            const b = this.beforeSerialize(formData);

            if (!b) {
                //不提交
                this.setState({
                    submitting: false
                });
                return;
            }
            //提交数据
            apiClient.post({
                url: this.submitUrl,
                data: formData
            }).then((data: ApiResp<any>) => {
                this.submitSuccess(data)
            }).catch((e) => {
                this.submitFailure(e);
            })["finally"](() => {
                this.setState({
                    submitting: false
                });
            })
        });
    };

    /**
     * 表单序列化之前的处理
     * return false 则不提交
     */
    protected abstract beforeSerialize: (formData: any) => boolean;


    protected submitSuccess = (data: ApiResp<any>) => {
        console.log("请求处理成功")
    };

    protected submitFailure = (e) => {
        console.log("请求处理失败", e);
    };

    /**
     * 参考文档：https://ant.design/components/upload-cn/
     * 获取一个文件上传对象的props
     * @param {string} formItemName 表单属性的名称
     * @param {Array<string>} defaultFileList 已经上传的文件列表
     * @param {UploadProps} props
     * @returns {UploadProps}
     */
    protected getUploadUploadProps = (formItemName: string, defaultFileList: Array<string> = [], props: UploadProps = {}): UploadProps => {

        const {form} = this.props;

        const helper = new UpLoadHelper(form, formItemName);


        return helper.upload(defaultFileList, props);
    }
}
