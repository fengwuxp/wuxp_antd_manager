import * as React from "react";
import {QuerySampleReq} from "./req/QuerySampleReq";
import {Table} from "antd";
import {SampleInfo} from "./info/SampleInfo";
import {ColumnProps} from "antd/es/table/interface";
import BaseLookupView, {BaseLookupViewProps, BaseLookupViewState} from "../base/BaseLookupView";
import {ButtonType} from "antd/lib/button";
import Modal from "antd/lib/modal/Modal";


const columns: Array<ColumnProps<SampleInfo>> = [
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
    }
];

interface LookupListViewProps extends BaseLookupViewProps {

}

interface LookupListViewState extends BaseLookupViewState<SampleInfo> {


}

/**
 * 带回查找
 */
export default class LookupListView extends BaseLookupView<LookupListViewProps, LookupListViewState, QuerySampleReq> {


    constructor(props: LookupListViewProps, context: any,) {
        super(props, context, {});

        this.fetchUrl = "/sample/page";

    }


    componentDidMount() {
        super.componentDidMount();
        this.setState({
            simpleFilterItems: [
                {display: "编号", name: "sn"},
                {display: "姓名", name: "name"},
            ],
            selectedRows: this.props.selectedRows,

        });
    }


    render() {
        const {page, loading, pagination} = this.state;

        const {width, visible, title} = this.props;

        let scrollXy;
        if (page.records.length > 0) {
            scrollXy = {
                y: 400,
            }
        }
        return (
            <Modal title={title ? title : "带回查找"}
                   width={width ? width : 800}
                   visible={visible}
                   okText="确认"
                   cancelText="取消"
                   onOk={() => {
                       this.props.onSelectedRow(this.state.selectedRows);
                   }}
                   onCancel={() => {
                       this.props.onCancel(false);
                   }}>
                <div style={{textAlign: "right"}}>{this.getRightSimpleSearch()}</div>
                <Table style={{marginTop: 20}}
                       bordered={true}
                       columns={columns}
                       rowKey="id"
                       dataSource={page.records}
                       pagination={pagination}
                       loading={loading}
                       locale={this.getTableLocal()}
                       title={this.getTableTile}
                       onChange={this.onTableChange}
                       rowSelection={this.getRowSelection()}
                       scroll={scrollXy}/>
            </Modal>
        )
    };


    protected getTableTile = (currentPageData: Object[]) => {

        return "示例列表";
    };


}
