import * as React from "react";
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import {ApiResp} from "typescript_api_sdk/src/api/model/ApiResp";
import {ApiReq} from "typescript_api_sdk/src/api/model/ApiReq";
import FormItemBuilder, {FormBuilder} from "../../builder/form/FormItemBuilder";
import {message} from "antd";
import {FetchOption} from "typescript_api_sdk/src/api/option/FetchOption";
import {ApiClientInterface} from "typescript_api_sdk/src/api/base/ApiClientInterface";
import {generateCreateURL, generateUpdateURL} from "./GenerateFetchURL";


export interface BaseFormState<E, Q extends ApiReq> {

    /**
     * 初始化表单数据
     */
    initFormData?: E;

    /**
     * 上下文数据
     */
    contextData?: any,

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
    S extends BaseFormState<E, Q>,
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

    /**
     * 客户端请求工具
     */
    protected apiClient: ApiClientInterface<FetchOption> = apiClient;


    constructor(props: P, context: any) {
        super(props, context);

        this.formBuilder = FormItemBuilder.builder<B, Q>(this.props.form);
    }


    componentWillMount(): void {

        if (this.submitUrl == null) {
            //生成默认的请求url
            if (this.isCreated) {
                this.submitUrl = generateCreateURL();
            } else {
                this.submitUrl = generateUpdateURL();
            }
        }

        //在编辑是先加载表单数据
        const {search} = this.props.history.location;

        //TODO  判断查询参数是否有值

        const path = this.props.match.path;
        const params = parse(search.split("?")[1]);

        message.loading("数据加载中", 0);
        //加载表单数据
        apiClient.post({
            url: path,
            data: params,
            useFilter: false
        }).then((data) => {

            if (!this.isCreated) {
                //编辑
                const proxyReq: Q = this.formBuilder.build();
                let key = this.findFormDataKey(data);
                let formData = Object.assign({}, data[key]);
                this.initFormData(formData, proxyReq);
                delete data[key];
            }

            //设置到上下文对象中
            this.setState({
                contextData: data
            });

            //执行表单项的初始化函数
            this.formBuilder.executeInitFunction();
        }).catch(this.fetchFormDataFailure)['finally'](() => {
            message.destroy();
        })
    }

    componentDidMount() {


    }


    protected initFormData(data: E, proxyReq: Q) {
        //初始化表单的值
        this.setState({
            initFormData: data
        });
        if (proxyReq !== null) {
            console.log("----------super fetchDataSuccess------", data);
            for (const key in data) {
                (proxyReq as any)[key] = data[key];
            }
        }
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
            const submit: any = {};
            for (const key in values) {
                if (key === "id") {
                    continue;
                }
                submit[key] = proxyReq[key];
            }
            if (!this.isCreated) {
                submit.id = this.state.initFormData['id'];
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
     * @param {Q} formData
     * @returns {boolean} 返回false 则不提交
     */
    protected beforeSerialize = (formData: Q) => {
        return true;
    };


    protected submitSuccess = (data: ApiResp<any>) => {
        console.log("请求处理成功")
    };

    protected submitFailure = (e) => {
        console.log("请求处理失败", e);
    };

    /**
     * 查找 表单当前维护对象数据的key
     * @param data
     */
    protected findFormDataKey = (data: any) => {
        //TODO 完全匹配
        return Object.keys(data).find((key) => key.endsWith("Info"));
    }

}
