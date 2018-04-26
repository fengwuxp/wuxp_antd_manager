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
import {ExportExcelDesc} from "./ExportExcelFileHelper";
import ListQueryHelper from "./ExportExcelFileHelper";

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

}

/**
 * 简单的查询选项
 */
export interface SimpleSearchFilterItem {

    display: string,

    name: string
}

/**
 * base list view
 * 泛型说明 P props  S state E 查询查询对象
 */
export default abstract class BaseListView<P extends AntdFromBaseProps, S extends BaseListState<any>, E extends ApiQueryReq> extends React.Component<P, S> {


    //抓取数据的url
    protected fetchUrl: string = "";

    //查询请求参数
    protected reqParams: E;

    /**
     * 默认的查询条件
     */
    protected defaultPrams: any;

    //默认的查询大小
    protected DEFAULT_QUERY_PAGE: number = 20;


    constructor(props: P, context: any, defaultPrams: E = {} as E) {
        super(props, context);
        this.defaultPrams = defaultPrams;
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
        simpleFilterItems: []
    } as S;

    componentDidMount() {
        const {search} = this.props.history.location;
        const path = this.props.match.path;

        const defaultOrder: Array<string> = this.getDefaultOrder();

        //获取查询参数
        const params = parse(search);
        this.fetchUrl = path.replace("/list", "/page");
        this.reqParams = {
            queryPage: 1,
            querySize: this.DEFAULT_QUERY_PAGE,
            ...params,
            ...this.defaultPrams,
            orderBy: [defaultOrder[0]],
            orderType: [defaultOrder[1]]
        };
        //发起请求
        this.fetchListData();
    }


    /**
     * 加载列表数据
     */
    protected fetchListData = () => {
        this.setState({
            loading: true
        });
        apiClient.post({
            url: this.fetchUrl,
            data: this.reqParams,
            useFilter: false
        }).then((data: PageInfo<any>) => {
            this.updatePagination(data)
        }).catch(this.fetchListDataFailure)['finally'](() => {
            this.setState({
                loading: false
            });
        });

        // let list = [];
        //
        // let max = 50;
        // for (let i = 0; i < max; i++) {
        //     list.push({
        //         id: parseInt(i + ""),
        //         sn: i + "",
        //         addTime: 1524562998000,
        //         icon: "",
        //         sendModeDesc: "异步",
        //         description: "ds",
        //         enabled: true
        //     })
        // }
        //
        // const data: PageInfo<any> = {
        //     total: max,
        //     queryPage: 1,
        //     querySize: max,
        //     records: list,
        //
        // } as PageInfo<any>;
        //
        //
        // this.updatePagination(data)
    };


    /**
     * 分页、排序、筛选变化时触发
     * @param {TablePaginationConfig | boolean} pagination
     * @param {string[]} filters
     * @param {Object} sorter
     */
    protected onTableChange = (pagination: TablePaginationConfig, filters: string[], sorter: any) => {

        console.log("排序处理", sorter);

        if (isBoolean(pagination)) {
            // TODO 不分页的处理
        } else {
            const {current, pageSize, total} = pagination;
            const {field, order} = sorter;
            let orderPrams = {};
            if (isNullOrUndefined(field)) {
                let defaultOrder = this.getDefaultOrder();
                orderPrams = {
                    orderBy: [defaultOrder[0]],
                    orderType: [defaultOrder[1]],
                }
            } else {
                orderPrams = {
                    orderBy: [field],
                    orderType: [order.replace("end", "")]
                }
            }
            console.log(pagination);
            this.reqParams = Object.assign(this.reqParams, {
                queryPage: current,
                querySize: pageSize,
                total,
                ...this.defaultPrams,
                ...orderPrams
            });
            //重新加载数据
            this.fetchListData()
        }
    };

    /**
     * 获取默认的排序字段和类型
     * @returns {Array<string>}
     */
    protected getDefaultOrder(): Array<string> {
        return ["id", "desc"];
    }

    /**
     * 更新当前分页器以及分页数据
     * @param {PageInfo<any>} data
     */
    protected updatePagination = (data: PageInfo<any>): void => {
        const {total, queryPage, querySize} = data;
        let {pagination} = this.state;
        let updater = {
            total,
            current: queryPage,
            pageSize: querySize
        };
        pagination = {
            ...pagination as any,
            ...updater
        };
        console.log(data.records)
        this.setState({
            page: data,
            pagination
        });
        // console.log(this.state.pagination)
    };


    /**
     * 失败处理
     * @param e
     */
    protected fetchListDataFailure = (e: any): void => {
        console.log(e);
        message.error(`请求列表数据失败`);
    };


    /**
     * 表格行 key 的取值，可以是字符串或一个函数
     * 默认使用表格的id生成rowKey，如果当前数据没有id字段则需要使用自定义的生成方法
     * @param rowData
     * @returns {string}
     */
    protected generateTableRowKey = (rowData: any): string => {
        return rowData.id.toString();
    };


    protected getTableLocal = (): any => {

        return {
            filterTitle: '筛选',
            filterConfirm: '确定',
            filterReset: '重置',
            emptyText: '暂无数据',
        }
    };

    /**
     * 列表项可选择项配置
     * @returns {TableRowSelection<any>}
     */
    protected getRowSelection = (): TableRowSelection<any> => {
        // rowSelection object indicates the need for row selection
        const rowSelection: TableRowSelection<any> = {

            /**
             * 发生选择/取消事件
             * @param {string[] | number[]} selectedRowKeys
             * @param {Object[]} selectedRows
             */
            onChange: (selectedRowKeys: string[] | number[], selectedRows: Object[]) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                console.log(selectedRowKeys);
                this.setState({
                    selectedRows: selectedRows
                });
            },
            /**
             * 选择框的默认属性配置
             * @param record
             * @returns {{}}
             */
            getCheckboxProps: (record: any) => {
                return record.id;
            },
            /**
             * 多选/单选，checkbox or radio
             */
            type: "checkbox"
        };

        return rowSelection;
    };


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

            //组合查询参数
            this.reqParams = Object.assign(
                this.defaultPrams,
                simpleParam,
                ...req,
                {
                    queryPage: 1
                }
            );
            delete this.reqParams.total;

            //查询
            this.fetchListData();
        });


    };


    renderAdvancedForm() {
        return (
            <Form onSubmit={this.submitQueryForm} layout="inline">
                {this.getQueryFrom()}
                {this.renderQueryFromButtons()}
            </Form>
        );
    }

    renderQueryFromButtons = () => {

        return (
            <span>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{marginLeft: 8}} onClick={this.resetQueryParams}>重置</Button>
              <a style={{marginLeft: 8}} onClick={this.toggleAdvanceQueryForm}>展开 <Icon type="down"/></a>
            </span>
        )
    };


    protected resetQueryParams = () => {
        const {form, dispatch} = this.props;
        //重置查询参数
        form.resetFields();

        //查询
        this.fetchListData();
    };

    protected toggleAdvanceQueryForm = () => {

    };


    /**
     * 右侧查询条件变更
     * @param {SelectValue} value
     * @param {React.ReactElement<any>} option
     */
    protected searchQueryChange = (value: SelectValue, option: React.ReactElement<any>) => {
        let index = -1;
        this.state.simpleFilterItems.some(({name}, i) => {
            index = i;
            return value === name;
        });

        this.setState({
            simpleFilterIndex: index
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

                        return <Option value={name}>{display}</Option>
                    })}
                </Select>
            )}

            {getFieldDecorator('simpleFilterValue', {

                initialValue: simpleFilterItems[0].name
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

    protected abstract getTableTile: (currentPageData: Object[]) => React.ReactNode;

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

