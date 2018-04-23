import * as React from "react";
import {PageInfo} from "typescript_api_sdk/src/api/model/PageInfo"
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {TablePaginationConfig} from "antd/es/table/interface";
import {message} from "antd";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq"
import {isBoolean} from "util";

/**
 * 列表视图的 base state
 */
export interface BaseListState<T> {

    //数据对象
    page: PageInfo<T>;

    //是否处于加载中
    loading: boolean;

    //分页信息
    pagination: TablePaginationConfig | false
}

/**
 * base list view
 * 泛型说明 P props  S state E 查询查询对象
 */
export default abstract class BaseListView<P extends ReduxRouterProps, S extends BaseListState<any>, E extends ApiQueryReq> extends React.Component<P, S> {


    //抓取数据的url
    protected fetchUrl: string = "";

    //查询请求参数
    protected reqParams: E;

    //默认的查询大小
    protected DEFAULT_QUERY_PAGE: number = 20;

    constructor(props: P, context: any) {
        super(props, context);
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
        }
    } as S;

    componentDidMount() {
        const {search} = this.props.history.location;
        const path = this.props.match.path;

        //获取查询参数
        const params = parse(search);
        this.fetchUrl = path.replace("/list", "/page");
        console.log(`fetchUrl --> ${this.fetchUrl}`);
        this.reqParams = {
            queryPage: 1,
            querySize: this.DEFAULT_QUERY_PAGE,
            ...params
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
    };


    /**
     * 分页、排序、筛选变化时触发
     * @param {TablePaginationConfig | boolean} pagination
     * @param {string[]} filters
     * @param {Object} sorter
     */
    protected onTableChange = (pagination: TablePaginationConfig, filters: string[], sorter: Object) => {

        if (isBoolean(pagination)) {
            // TODO 不分页的处理
        } else {
            const {current, pageSize, total} = pagination;
            console.log(pagination);
            this.reqParams = Object.assign(this.reqParams, {
                queryPage: current,
                querySize: pageSize,
                total
            });
            //重新加载数据
            this.fetchListData()
        }

    };


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
        this.setState({
            page: data,
            pagination
        });
        console.log(this.state.pagination)
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


    protected getRowSelection = () => {
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };

        return rowSelection;
    }
}
