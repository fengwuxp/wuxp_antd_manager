import * as React from "react";
import {PageInfo} from "typescript_api_sdk/src/api/model/PageInfo"
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {TablePaginationConfig, TableRowSelection} from "antd/es/table/interface";
import {Button, Form, Icon, Input, message, Select} from "antd";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq"
import {isBoolean, isNullOrUndefined} from "util";
import zh_CN from 'rc-pagination/lib/locale/zh_CN';
import {SelectValue} from "antd/lib/select";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils";
import {ExportExcelDesc} from "../../helper/ExportExcelFileHelper";
import ListQueryHelper from "../../helper/ExportExcelFileHelper";
import {SimpleSearchFilterItem} from "./BaseLookupView";
import BaseAbstractTableView from "./BaseAbstractTableView";

const Option = Select.Option;

/**
 * 列表视图的 base state
 */
export interface BaseListState<T> {

    //数据对象
    page: PageInfo<T>;

    //是否处于加载中
    loading: boolean;

    //分页信息
    pagination: TablePaginationConfig | false,

    /**
     * 选中的行
     */
    selectedRows: Array<T>;

    /**
     * simple默认查询的index
     */
    simpleFilterIndex?: number;


    /**
     * 简单的查询过滤配置
     */
    simpleFilterItems?: Array<SimpleSearchFilterItem>;

    /**
     * 高级搜索面板控制
     */
    toggleAdvancedForm: boolean;
}



/**
 * base list view
 * 泛型说明 P props  S state E 查询查询对象
 */
export default abstract class BaseListView<P extends AntdFromBaseProps, S extends BaseListState<any>, E extends ApiQueryReq>
    extends BaseAbstractTableView<P, S, E>  {


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



    /**
     * 提交查询
     */
    protected submitQueryForm = () => {

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
            console.log("简单", this.defaultPrams);
            console.log("高级查询参数", req);

            //组合查询参数
            this.reqParams = Object.assign(
                this.defaultPrams,
                simpleParam,
                req,
                {
                    queryPage: 1,
                    querySize: this.reqParams.querySize,
                    orderBy: this.reqParams.orderBy,
                    orderType: this.reqParams.orderType
                }
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

    renderQueryFromButtons = () => {
        const {toggleAdvancedForm} = this.state;
        return (
            <span>
              <Button type="primary" onClick={() => {
                  this.submitQueryForm();
              }}>查询</Button>
              <Button style={{marginLeft: 8}} onClick={this.resetQueryParams}>重置</Button>
                {
                    toggleAdvancedForm ?
                        <a style={{marginLeft: 8}} onClick={this.toggleAdvanceQueryForm}>展开 <Icon type="down"/></a>
                        : <a style={{marginLeft: 8}} onClick={this.toggleAdvanceQueryForm}>收起 <Icon type="up"/></a>
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
        //查询
        this.fetchListData();
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
     * 获取查询页面的表单
     */
    protected abstract getQueryFrom: () => React.ReactNode;


    /**
     * 提交查询表单之前的序列化操作
     * return false 则不提交查询
     */
    protected abstract beforeSerialize: (req: E) => boolean;
}

