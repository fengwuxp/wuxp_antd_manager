import * as React from "react";
import {Button, Form, Icon, Input, Modal, Select} from "antd";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq"
import zh_CN from 'rc-pagination/lib/locale/zh_CN';
import StringUtils from "typescript_api_sdk/src/utils/StringUtils";
import ListQueryHelper, {ExportExcelDesc} from "../../helper/base/ExportExcelFileHelper";
import BaseAbstractTableView, {BaseAbstractTableViewProps, BaseAbstractTableViewState} from "./BaseAbstractTableView";
import {HasActionTable} from "../../builder/table/TableColumnsBuilder";
import {FormComponentProps} from "antd/lib/form";
import FormItemBuilder, {FormBuilder} from "../../builder/form/FormItemBuilder";
import {generateDeleteURL} from "./GenerateFetchURL";

const Option = Select.Option;

/**
 * 列表视图的 base state
 */
export interface BaseListState<T> extends BaseAbstractTableViewState<T> {

    /**
     * 高级搜索面板控制
     */
    toggleAdvancedForm: boolean;
}

export interface BaseListProps<E> extends BaseAbstractTableViewProps<E>, FormComponentProps {

}

/**
 * base list view
 * 泛型说明 P props  S state E 查询查询对象
 */
export default abstract class BaseListView<P extends BaseListProps<E>,
    S extends BaseListState<T>,
    E extends ApiQueryReq,
    Q extends FormBuilder<E>/*查询对象的表单builder*/,
    T,
    B extends HasActionTable<T>>
    extends BaseAbstractTableView<P, S, E, T, B> {


    protected formBuilder: Q;

    protected proxyReq: E;

    /**
     * 删除请求的url
     */
    protected deletedRequestUrl: string;

    constructor(props: P, context: any, defaultPrams: E) {
        super(props, context, defaultPrams);

        this.formBuilder = FormItemBuilder.builder<Q, E>(this.props.form);
        if (this.deletedRequestUrl == null) {
            //生成默认的请求url
            this.deletedRequestUrl = generateDeleteURL();
        }
    }

    state = {
        page: {
            records: []
        },
        loading: false,

        //参考文档https://ant.design/components/pagination-cn/
        pagination: {
            total: 0,
            current: 1,
            defaultCurrent: 1,
            defaultPageSize: this.DEFAULT_QUERY_PAGE,
            hideOnSinglePage: true,
            showQuickJumper: true,
            showSizeChanger: true,
            position: "bottom",
            locale: zh_CN
        },
        selectedRows: [],
        simpleFilterIndex: 0,
        simpleFilterItems: [],
        toggleAdvancedForm: false
    } as S;


    componentWillMount() {
        super.componentWillMount();
    }

    componentDidMount() {
        console.log("componentDidMount");

        //将参数初始化到查询表单上
        this.proxyReq = this.formBuilder.build();

        console.log(this.reqParams);

        for (const key in this.reqParams) {
            this.proxyReq[key] = this.reqParams[key];
        }
    }

    /**
     * 提交查询
     * @param forceParam 强制提交的参数
     */
    protected submitQueryForm = (forceParam: object = {}) => {

        this.props.form.validateFields((err, values) => {
            const {simpleFilterValue} = values;
            const {simpleFilterIndex, simpleFilterItems} = this.state;


            //simple 查询条件
            let simpleParam: any = {};
            if (StringUtils.hasText(simpleFilterValue)) {
                simpleParam[simpleFilterItems[simpleFilterIndex].name] = simpleFilterValue;
            }

            const req: any = {...values};
            delete req.simpleFilterItemKey;
            delete req.simpleFilterValue;

            let isSubmit = this.beforeSerialize(req);
            if (!isSubmit) {
                return;
            }
            console.log("默认查询参数", this.defaultPrams);
            console.log("简单查询参数", simpleParam);
            console.log("高级查询参数", req);

            //组合查询参数
            this.reqParams = Object.assign(
                {},
                this.defaultPrams,
                simpleParam,
                req,
                {
                    queryPage: 1,
                    querySize: this.reqParams.querySize,
                    orderBy: this.reqParams.orderBy,
                    orderType: this.reqParams.orderType
                },
                forceParam
            );
            delete this.reqParams.total;
            console.log("查询参数", this.reqParams);
            //查询
            this.fetchListData();
        });


    };


    renderAdvancedForm() {
        return (
            <Form layout="inline">
                {this.getQueryFrom()}
            </Form>
        );
    }

    /**
     *
     * @param {boolean} useAdvancedForm 是否使用高级搜索
     * @returns {any}
     */
    renderQueryFromButtons = (useAdvancedForm: boolean = true) => {
        const {toggleAdvancedForm} = this.state;
        return (
            <span>
                <Button type="primary" onClick={this.submitQueryForm}>查询</Button>
                <Button style={{marginLeft: 8}} onClick={this.resetQueryParams}>重置</Button>
                {
                    useAdvancedForm ? (toggleAdvancedForm ?
                        <a style={{marginLeft: 8}} onClick={this.toggleAdvanceQueryForm}>收起 <Icon type="up"/></a> :
                        <a style={{marginLeft: 8}} onClick={this.toggleAdvanceQueryForm}>展开 <Icon
                            type="down"/></a>) : null
                }

            </span>
        )
    };


    /**
     * 重置查询表单
     */
    protected resetQueryParams = () => {
        const {form} = this.props;

        //重置查询参数
        form.resetFields();

        //恢复默认参数
        for (const key in this.defaultPrams) {
            this.proxyReq[key] = this.defaultPrams[key];
        }
        //查询
        this.submitQueryForm();
    };

    protected toggleAdvanceQueryForm = () => {
        const {toggleAdvancedForm} = this.state;
        this.setState({
            toggleAdvancedForm: !toggleAdvancedForm
        })
    };

    /**
     * 获取右侧的简单查询组件
     */
    protected getRightSimpleSearch() {
        let {simpleFilterItems} = this.state;
        let keys = simpleFilterItems || [];
        if (keys.length === 0) {
            return null;
        }
        const {getFieldDecorator} = this.props.form;

        return <div>
            {getFieldDecorator('simpleFilterItemKey', {

                initialValue: simpleFilterItems[0].name
            })(
                <Select style={{minWidth: 120}}
                        placeholder="请选择查询条件"
                        optionFilterProp="children"
                        onChange={this.searchQueryChange}>
                    {keys.map(({display, name}) => {

                        return <Option key={name} value={name}>{display}</Option>
                    })}
                </Select>
            )}

            {getFieldDecorator('simpleFilterValue', {
                initialValue: null
            })(
                <Input type={'text'}
                       style={{width: 220, marginLeft: 5}}
                       placeholder={`请输入${this.state.simpleFilterItems[this.state.simpleFilterIndex].display}`}/>
            )}
            <Button style={{marginLeft: 10}}
                    onClick={this.submitQueryForm}
                    type={"ghost"}>确认</Button>
        </div>
    }


    /**
     * 导出export excel file
     * @param {string} exportUrl
     * @param {Array<ExportExcelDesc>} exportItems
     * @param {string} fileName
     */
    protected exportExcelFile = (exportUrl: string, exportItems: Array<ExportExcelDesc>, fileName: string = "export.xlsx") => {

        ListQueryHelper.exportExcelFile(exportUrl, this.reqParams, exportItems, fileName);

    };

    /**
     * 导入 import excel file
     */
    protected importExcelFile = () => {

    };


    /**
     * 删除
     * @param {any[]} ids
     */
    protected deletedTableItem = (ids: any[]) => {
        Modal.confirm({
            title: "提示",
            content: "确认删除？",
            onOk: () => {
                this.apiClient.post({
                    url: this.deletedRequestUrl,
                    data: {
                        ids
                    }
                }).then(() => {
                    //刷新
                    this.fetchListData();
                });
            },
            okText: "确认",
            cancelText: "取消"
        })
    };

    /**
     * 获取查询页面的表单
     */
    protected abstract getQueryFrom: () => React.ReactNode;


    /**
     * 提交查询表单之前的序列化操作
     * return false 则不提交查询
     */
    protected beforeSerialize = (req: E) => true;
}

