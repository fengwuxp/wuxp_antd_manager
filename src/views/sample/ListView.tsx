import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListState} from "../base/BaseListView";
import {ColumnProps, TableProps} from "antd/es/table/interface";
import {SampleInfo} from "./info/SampleInfo";


const columns: Array<ColumnProps<SampleInfo>> = [
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:;">action</a>,
    },
    {
        title: 'sn',
        dataIndex: 'sn',
        sorter: true,
        render: (cell, rowData, index) => cell,
        width: 40,
    },
];

interface SampleState extends BaseListState<SampleInfo> {

}

/**
 * 实例列表页面
 */
export default class ListView extends BaseListView<any, SampleState, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }


    render() {
        const {page, loading} = this.state;
        return (
            <Table columns={columns}
                   rowKey={this.generateTableRowKey}
                   dataSource={page.records}
                   pagination={this.state.pagination}
                   loading={loading}
                   scroll={{
                       x: 1200,
                       y: 200
                   }}
            />
        );
    }
}
