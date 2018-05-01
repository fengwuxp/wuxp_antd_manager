import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {UploadChangeParam, UploadFile, UploadProps} from "antd/lib/upload/interface";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {UpLoadHelper} from "../../helper/UpLoadHelper";
import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import FormItemBuilder, {FormBuilder} from "../../builder/form/FormItemBuilder";
import {isNullOrUndefined} from "util";


export interface BaseFormSate<E, Q extends ApiReq> {

    /**
     * 初始化表单数据
     */
    initFormData?: E;


    /**
     * 提交的数据
     */
    submitData?: Q

    /**
     * 表单提交状态
     */
    submitting: boolean
}


/**
 * 基础表单
 * @param P
 * @param S
 * @param E  表单数据对象
 * @param Q  表单提交对象
 * @param B  表单建造者
 */
export default abstract class BaseFormView<P extends AntdFromBaseProps,
    S extends BaseFormSate<E, Q>,
    E,
    Q extends ApiReq,
    B extends FormBuilder<Q>>
    extends React.Component<P, S> {


    /**
     * 提交表单的url
     */
    protected submitUrl: string;

    /**
     * 是否为创建
     * @type {boolean}
     */
    protected isCreated: boolean = true;

    /**
     * 表单建造者
     */
    protected formBuilder: B;


    constructor(props: P, context: any) {
        super(props, context);

        this.formBuilder = FormItemBuilder.builder<B, Q>(this.props.form);
    }


    componentWillMount(): void {

        if (!this.isCreated) {
            //在编辑是先加载表单数据
            const {search} = this.props.history.location;

            //TODO  判断查询参数是否有值

            const path = this.props.match.path;
            const params = parse(search.split("?")[1]);

            //加载表单数据
            apiClient.post({
                url: path,
                data: params,
                useFilter: false
            }).then((data) => {
                console.log("初始化表单的数据", data);
                this.setState({
                    initFormData: data
                });
                setTimeout(() => {
                    const proxyReq = this.formBuilder.build();
                    for (const key in data) {
                        // proxyReq[key] = data[key];
                    }
                }, 300);
                this.fetchDataSuccess(data);
            }).catch(this.fetchFormDataFailure)
        }
    }


    protected fetchDataSuccess = (data) => {

    };

    /**
     * 失败处理
     * @param e
     */
    protected fetchFormDataFailure = (e: any) => {

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
            // const formData = {...values};

            //默认数据处理
            const proxyReq: Q = this.formBuilder.build();

            //提交的数据
            const submit = {};
            for (const key in values) {
                submit[key] = proxyReq[key];
                // if (!isNullOrUndefined(submit[key]) &&
                //     submit[key]["__proto__"].constructor.name === "Moment") {
                //     //处理时间
                // }
            }


            const b = this.beforeSerialize(submit);

            if (!b) {
                //不提交
                this.setState({
                    submitting: false
                });
                return;
            }
            console.log("---提交数据---", submit);
            //提交数据
            apiClient.post({
                url: this.submitUrl,
                data: submit
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
     * 表单提交之前的处理
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


        return helper.upload(defaultFileList.filter(item => item.trim().length > 0), props);
    }
}
