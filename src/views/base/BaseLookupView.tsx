import * as React from "react";
import {ApiQueryReq} from "typescript_api_sdk/src/api/model/ApiQueryReq";
import zh_CN from 'rc-pagination/lib/locale/zh_CN';
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import {SelectValue} from "antd/lib/select";
import Input from "antd/lib/input/Input";
import Button from "antd/lib/button/button";
import {Select} from "antd";
import BaseAbstractTableView, {BaseAbstractTableViewState} from "./BaseAbstractTableView";
import {HasActionTable} from "../../builder/table/TableColumnsBuilder";

const Option = Select.Option;

/**
 * 列表视图的 base state
 */
export interface BaseLookupViewState<T> extends BaseAbstractTableViewState<T> {

    /**
     * 简单查询的值
     */
    simpleSearchValue: string;

}


export interface BaseLookupViewProps<T> extends ReduxRouterProps {

    /**
     * 确认选中
     * @param {Array<T>} rows
     */
    onSelectedRow: (rows: Array<T>) => void;

    /**
     * 默认选中的行
     */
    selectedRows?: Array<T>;

    /**
     *是否多选，
     * 默认 true
     */
    multiple?: boolean



}


export default abstract class BaseLookupViewBaseListView<P extends BaseLookupViewProps<T>,
    S extends BaseLookupViewState<T>,
    E extends ApiQueryReq,
    T,
    B extends HasActionTable<T>>
    extends BaseAbstractTableView<P, S, E, T, B> {


    constructor(props: P, context: any, defaultPrams: E) {
        super(props, context, defaultPrams, false);
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
        simpleSearchValue: "",
    } as S;


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

        return <div>
            <Select style={{minWidth: 120}}
                    placeholder="请选择查询条件"
                    optionFilterProp="children"
                    defaultValue={simpleFilterItems[0].name}
                    onChange={this.searchQueryChange}>
                {keys.map(({display, name}) => {

                    return <Option key={name} value={name}>{display}</Option>;
                })}
            </Select>

            <Input type={'text'}
                   style={{width: 220, marginLeft: 5}}
                   onChange={this.searchInputChange}
                   value={this.state.simpleSearchValue}
                   placeholder={`请输入${this.state.simpleFilterItems[this.state.simpleFilterIndex].display}`}/>
            <Button style={{marginLeft: 10}}
                    onClick={this.submitQueryForm}
                    type={"ghost"}>确认</Button>
        </div>
    }

    protected searchInputChange = (event) => {
        let value = event.target.value;
        this.setState({
            simpleSearchValue: value
        });
    };

    /**
     * 提交查询
     */
    protected submitQueryForm = () => {

        const {simpleFilterIndex, simpleFilterItems, simpleSearchValue} = this.state;

        const name = simpleFilterItems[simpleFilterIndex].name;

        this.reqParams = Object.assign({}, this.reqParams, {
            queryPage: 1,
        });
        this.reqParams[name] = simpleSearchValue;
        delete  this.reqParams.total;
        //查询
        this.fetchListData();

    };

    abstract getSelectedRows: () => Array<T>
}
