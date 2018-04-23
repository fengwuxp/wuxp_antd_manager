import * as React from "react";
import {PageInfo} from "typescript_api_sdk/src/api/model/PageInfo"
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq"
import apiClient from "../../fetch/BuildFetchClient";
import {parse} from "querystring";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {TablePaginationConfig} from "antd/es/table/interface";
import {message} from "antd";


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

// type E= E extends ApiQueryReq

/**
 * base list view
 */
export default class BaseListView<P extends ReduxRouterProps, S extends BaseListState<any>> extends React.Component<P, S> {


    //抓取数据的url
    protected fetchUrl: string = "";

    //查询请求参数
    protected reqParams: any;

    //默认的查询大小
    protected DEFAULT_QUERY_PAGE: number = 20;

    constructor(props: P, context: any) {
        super(props, context);
    }

    state = {
        page: {
            records: null
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
            onChange: this.onQueryPageChange,
            onShowSizeChange: this.onShowSizeChange
        }
    } as S;

    // componentDidMount() {
    //     const {search} = this.props.history.location;
    //     const path = this.props.match.path;
    //     const params = parse(search);
    //
    //     this.fetchUrl = path.replace("/list", "/page");
    //     console.log(`fetchUrl --> ${fetchUrl}`);
    //     this.reqParams = {
    //         queryPage: this.DEFAULT_QUERY_PAGE,
    //         querySize: 1,
    //         ...params
    //     };
    //     //发起请求
    //     // this.fetchListData();
    // }


    /**
     * 加载列表数据
     */
    // protected fetchListData = () => {
    //     this.setState({
    //         loading: true
    //     });
    //
    //     apiClient.post({
    //         url: this.fetchUrl,
    //         data: this.reqParams,
    //         useFilter: false
    //     }).then((data: PageInfo<any>) => {
    //         this.updatePagination(data)
    //     }).catch(this.fetchListDataFailure)['finally'](() => {
    //         this.setState({
    //             loading: false
    //         });
    //     });
    // };

    /**
     * 查询页码发生变化
     * @param current
     * @param size
     */
    protected onQueryPageChange = (current, size) => {
        console.log("----------------1----------2------")
        // this.reqParams = Object.assign(this.reqParams, {
        //     queryPage: current,
        //     querySize: size
        // });
        //  this.fetchListData()
    };

    /**
     * 查询大小发生变化
     * @param current
     * @param size
     */
    protected onShowSizeChange = (current, size) => {
        this.onQueryPageChange(current, size);
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
            ...pagination,
            ...updater
        };
        this.setState({
            page: data,
            pagination
        });
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
    }
}
