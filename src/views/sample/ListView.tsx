import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListState} from "../base/BaseListView";
import {ColumnProps} from "antd/es/table/interface";
import {SampleInfo} from "./info/SampleInfo";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import Button from "antd/es/button/button";
import Dropdown from "antd/lib/dropdown/dropdown";
import {Card, Icon, Menu, Popover} from "antd";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils"
import {downloadFileByFetch} from "../../fetch/download/FetchDownloader";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";


const history = BrowserNavigatorFactory.get();
const columns: Array<ColumnProps<SampleInfo>> = [
    {
        title: '操作',
        fixed: true,
        dataIndex: "operation",
        width: 100,
        render: (cellval,rowData) => {
            return (
                <div>
                    <Button type="primary"
                            icon="edit"
                            onClick={()=>{
                                history.push(`/sample/load?id=${rowData.id}`)
                            }}
                            size={"small"}>编辑</Button>
                </div>
            )
        }
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
        render: (cellValue) => {
            if (!StringUtils.hasText(cellValue)) {
                return null;
            }
            return <Popover content={<img src={cellValue} style={{maxWidth: 140}}/>}>
                <img src={cellValue} style={{maxWidth: 40}}/>;
            </Popover>
        },
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
        render: (cellValue) => {
            if (!StringUtils.hasText(cellValue)) {
                return null;
            }
            return <Popover content={<Button icon="download"
                                             type="primary"
                                             size="small"
                                             onClick={() => downloadFileByFetch({url: cellValue}, cellValue)}>下载</Button>}>
                <Icon type="file"/>
            </Popover>
        }
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
        width: 80
    },
    {
        title: '费率（百分比）',
        dataIndex: 'feePct',
        sorter: true,
        width: 120
    },
    {
        title: '费率（千分比）',
        dataIndex: 'feePpt',
        sorter: true,
        width: 120
    },
    {
        title: '费率（千分比）',
        dataIndex: 'feePpt',
        sorter: true,
        width: 120
    },
    {
        title: '销售额（万元）',
        dataIndex: 'sale',
        sorter: true,
        width: 120
    },
    {
        title: '启用禁用',
        dataIndex: 'enabled',
        sorter: true,
        width: 120
    },

];

export interface SampleState extends BaseListState<SampleInfo> {

}

export interface SampleListProps extends ReduxRouterProps {

}


/**
 * 示例列表页面
 */
export default class ListView extends BaseListView<SampleListProps, SampleState, any> {

    constructor(props: any, context: any) {
        super(props, context);
    }

    handleMenuClick = () => {

    };

    handleModalVisible = () => {
        this.props.history.push("/sample/input");
    };

    render() {
        const {page, loading, pagination, selectedRows} = this.state;

        const menu = (
            <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
                <Menu.Item key="remove">删除</Menu.Item>
            </Menu>
        );

        return (
            <PageHeaderLayout
                title="示例列表"
                content="示例列表">
                <Card bordered={false}>
                    <div>
                        <Button icon="plus"
                                type="primary"
                                onClick={() => this.handleModalVisible()}>新建</Button>
                        {
                            selectedRows.length > 0
                            &&
                            (
                                <span style={{marginLeft: 10}}>
                                    <Dropdown overlay={menu}>
                                     <Button>更多操作 <Icon type="down"/></Button>
                                    </Dropdown>
                                </span>
                            )
                        }
                    </div>
                    <Table columns={columns}
                           rowKey={this.generateTableRowKey}
                           dataSource={page.records}
                           pagination={pagination}
                           loading={loading}
                           locale={this.getTableLocal()}
                           title={this.getTableTile}
                           onChange={this.onTableChange}
                           rowSelection={this.getRowSelection()}
                           scroll={{x: 2000,y:600}}/>
                </Card>
            </PageHeaderLayout>
        );
    }

    protected getTableTile = (currentPageData: Object[]): React.ReactNode => {

        return "示例表格"
    }


}
