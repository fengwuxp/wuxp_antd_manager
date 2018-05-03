import * as React from "react";
import {QuerySampleReq} from "./req/QuerySampleReq";
import {Table} from "antd";
import {SampleBuilder, SampleInfo} from "./info/SampleInfo";
import {ColumnProps} from "antd/es/table/interface";
import BaseLookupView, {BaseLookupViewProps, BaseLookupViewState} from "../base/BaseLookupView";


interface LookupListViewProps extends BaseLookupViewProps<SampleInfo> {
}

interface LookupListViewState extends BaseLookupViewState<SampleInfo> {
}

/**
 * 带回查找
 */
export default class LookupListView extends BaseLookupView<LookupListViewProps,
    LookupListViewState,
    QuerySampleReq,
    SampleInfo,
    SampleBuilder> {


    constructor(props: LookupListViewProps, context: any,) {
        super(props, context, {});

        this.fetchUrl = "/sample/page";
        this.tableName = "示例列表";
    }


    componentWillMount() {
        super.componentWillMount();
        this.setState({
            simpleFilterItems: [
                {display: "编号", name: "sn"},
                {display: "姓名", name: "name"},
            ],
            selectedRows: this.props.selectedRows
        });
    }

    protected buildColumns = (): ColumnProps<SampleInfo>[] => {

        return this.tableBuilder.sn({
            title: 'sn',
            sorter: true,
            width: 120
        }).name({
            title: '姓名',
            sorter: true,
            width: 100
        }).build();
    };


    render() {
        const {page, loading, pagination} = this.state;

        let scrollXy;
        if (page.records.length > 0) {
            scrollXy = {
                y: 400,
            }
        }
        return (
            <React.Fragment>
                <div style={{textAlign: "right"}}>{this.getRightSimpleSearch()}</div>
                <Table style={{marginTop: 20}}
                       bordered={true}
                       columns={this.buildColumns()}
                       rowKey="id"
                       dataSource={page.records}
                       pagination={pagination}
                       loading={loading}
                       locale={this.getTableLocal()}
                       title={() => this.tableName}
                       onChange={this.onTableChange}
                       rowSelection={this.getRowSelection(this.props.multiple)}
                       scroll={scrollXy}/>
            </React.Fragment>
        )
    };

    public getSelectedRows = () => {

        return this.state.selectedRows;
    }


}
