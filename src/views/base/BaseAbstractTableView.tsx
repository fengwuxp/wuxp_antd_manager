import * as React from "react";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq";
import {PageInfo} from "typescript_api_sdk/src/api/model/PageInfo";
import {TablePaginationConfig, TableRowSelection} from "antd/es/table/interface";
import {parse} from "querystring";
import zh_CN from 'rc-pagination/lib/locale/zh_CN';
import {isBoolean, isNullOrUndefined} from "util";
import apiClient from "../../fetch/BuildFetchClient";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {SelectValue} from "antd/lib/select";
import {QueryParamsCache} from "../../model/AntdAdminStore";
import {DEFAULT_QUERY_SIZE} from "../../reducers/QueryParamsCacheReducer";

/**
 * 列表视图的 base state
 */
export interface BaseAbstractTableViewState<T> {

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

export interface BaseAbstractTableViewProps<E> extends ReduxRouterProps {
    /**
     *缓存的查询参数
     */
    queryParamsCache?: QueryParamsCache<E>;
}

/**
 * 简单的查询选项
 */
export interface SimpleSearchFilterItem {

    display: string,

    name: string
}

export default abstract class BaseAbstractTableView<P extends BaseAbstractTableViewProps<E>, S extends BaseAbstractTableViewState<any>, E extends ApiQueryReq>
    extends React.Component<P, S> {


    //抓取数据的url
    protected fetchUrl: string;

    //查询请求参数
    protected reqParams: E;

    /**
     * 默认的查询条件
     */
    protected defaultPrams: any;

    //默认的查询大小
    protected DEFAULT_QUERY_PAGE: number = 3;//DEFAULT_QUERY_SIZE;

    protected tableName: string;

    constructor(props: P, context: any, defaultPrams: E = {} as E) {
        super(props, context);

        const {search} = this.props.history.location;
        //获取查询参数
        const params = parse(search);
        this.defaultPrams = Object.assign({}, params);

    }


    componentDidMount() {

        const defaultOrder = this.getDefaultOrder();
        const {prevFetchUrl, params} = this.props.queryParamsCache;

        let queryParamsCache;

        if (isNullOrUndefined(prevFetchUrl)) {
            queryParamsCache = {};
            //TODO 更新查询参数缓存
        } else {
            if (prevFetchUrl === this.fetchUrl) {
                //上一次查询的url和当前查询的url相同，使用缓存中的参数
                queryParamsCache = {...params as any};
            } else {
                //TODO 清空查询参数缓存
            }

        }

        //参数初始化
        this.reqParams = {
            queryPage: 1,
            ...this.defaultPrams,
            ...defaultOrder,
            ...queryParamsCache,
            querySize: this.DEFAULT_QUERY_PAGE,
        };

        //发起请求
        this.fetchListData();

        //TODO 将查询参数映射到查询表单上
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
     * @returns {object}
     */
    protected getDefaultOrder(): object {
        return {};
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
        //console.log(e);
        // message.error(`请求列表数据失败`);
    };

    /**
     * 表格local配置
     * @returns {any}
     */
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
     * @param multiple 是否为多选
     * @returns {TableRowSelection<any>}
     */
    protected getRowSelection = (multiple: boolean = true): TableRowSelection<any> => {
        // rowSelection object indicates the need for row selection

        const rowSelection: TableRowSelection<any> = {

            selectedRowKeys: this.state.selectedRows.map(item => item.id),

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
            type: multiple ? "checkbox" : "radio"
        };

        return rowSelection;
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

        const {simpleFilterIndex, simpleFilterItems} = this.state;

        //移除右侧simple查询的值
        delete this.reqParams[simpleFilterItems[simpleFilterIndex].name];


        this.setState({
            simpleFilterIndex: index
        })
    };


}