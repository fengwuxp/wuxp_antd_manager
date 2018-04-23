import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListState} from "../base/BaseListView";
import {ColumnProps} from "antd/es/table/interface";
import {SampleInfo} from "./info/SampleInfo";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";


const columns: Array<ColumnProps<SampleInfo>> = [
    {
        title: '操作',
        fixed: true,
        dataIndex: "",
        width: 100,
        key: "operation",
        render: () => <a href="javascript:;">action</a>,
    },
    {
        title: 'sn',
        dataIndex: 'sn',
        sorter: true,
        width: 120,
    },
    {
        title: '姓名',
        dataIndex: 'name',
        sorter: true,
        width: 100,
    },
    {
        title: '图标',
        dataIndex: 'icon',
        sorter: true,
        width: 100,
    },
    {
        title: '简介',
        dataIndex: 'description',
        sorter: false,
        width: 100,
    },
    {
        title: '发布日期',
        dataIndex: 'publicDate',
        sorter: true,
        width: 120,
    },
    {
        title: '发布类型',
        dataIndex: 'sendMode',
        sorter: true,
        width: 110,
    },
    {
        title: '附件',
        dataIndex: 'downFile',
        sorter: false,
        width: 80,
    },
    {
        title: '活动URL',
        dataIndex: 'hdUrl',
        sorter: false,
        width: 120,
    },
    {
        title: '数量',
        dataIndex: 'number',
        sorter: true,
        width: 80,
    },
    {
        title: '费率（百分比）',
        dataIndex: 'feePct',
        sorter: true,
        width: 120,
    },
    {
        title: '费率（千分比）',
        dataIndex: 'feePpt',
        sorter: true,
        width: 120,
    },
    {
        title: '费率（千分比）',
        dataIndex: 'feePpt',
        sorter: true,
        width: 120,
    },
    {
        title: '销售额（万元）',
        dataIndex: 'sale',
        sorter: true,
        width: 120,
    },
    {
        title: '启用禁用',
        dataIndex: 'enabled',
        sorter: true,
        width: 120,
    },

];

interface SampleState extends BaseListState<SampleInfo> {

}

interface SampleListProps extends ReduxRouterProps {

}


/**
 * 示例列表页面
 */
export default class ListView extends BaseListView<SampleListProps, SampleState, any> {

    constructor(props: any, context: any) {
        super(props, context);
    }


    render() {
        const {page, loading, pagination} = this.state;
        return (
            <Table columns={columns}
                   rowKey={this.generateTableRowKey}
                   dataSource={page.records}
                   pagination={pagination}
                   loading={loading}
                   onChange={this.onTableChange}
                   rowSelection={this.getRowSelection()}
                   scroll={{x: 2000}}
            />
        );
    }

}
