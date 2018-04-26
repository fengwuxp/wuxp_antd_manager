import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListState} from "../base/BaseListView";
import {ColumnProps} from "antd/es/table/interface";
import {SampleInfo} from "./info/SampleInfo";
import {ReduxRouterProps} from "wuxp_react_dynamic_router/src/model/redux/ReduxRouterProps";
import Button from "antd/es/button/button";
import Dropdown from "antd/lib/dropdown/dropdown";
import {Card, Form, Icon, Menu, Popover} from "antd";
import {Row, Col} from 'antd';
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils"
import {downloadFileByFetch} from "../../fetch/download/FetchDownloader";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {QuerySampleReq} from "./req/QuerySampleReq";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";


const history = BrowserNavigatorFactory.get();
const columns: Array<ColumnProps<SampleInfo>> = [
    {
        title: '操作',
        fixed: true,
        dataIndex: "operation",
        width: 240,
        render: (cellval, rowData) => {


            const menu = (
                <Menu onClick={({item, key, keyPath}) => {
                    console.log(`key =${key}`, rowData);
                    //TODO

                }} selectedKeys={[]}>
                    <Menu.Item key="remove">删除</Menu.Item>
                    <Menu.Item key="confirm">确认</Menu.Item>
                    <Menu.Item key="see_detail">查看详情</Menu.Item>
                </Menu>
            );

            return (
                <div>
                    <Button type="primary"
                            icon="edit"
                            onClick={() => {
                                history.push(`/sample/load?id=${rowData.id}`)
                            }}
                            size={"small"}>编辑</Button>
                    <span style={{marginLeft: 10}}>
                                    <Dropdown overlay={menu}>
                                      <Button>更多操作 <Icon type="down"/></Button>
                                    </Dropdown>
                                </span>
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

export interface SampleListProps extends AntdFromBaseProps {

}


/**
 * 示例列表页面
 */
@(Form.create as any)()
export default class ListView extends BaseListView<SampleListProps, SampleState, QuerySampleReq> {

    constructor(props: any, context: any) {
        super(props, context, {});
    }

    handleMenuClick = () => {

    };

    handleModalVisible = () => {
        this.props.history.push("/sample/input");
    };

    componentDidMount() {
        this.setState({
            simpleFilterItems: [
                {display: "编号", name: "sn"},
                {display: "姓名", name: "name"},
            ]
        })
    }

    render() {
        const {page, loading, pagination, selectedRows} = this.state;

        const moreAction = (
            <Menu onClick={this.handleMenuClick} selectedKeys={[]}>
                <Menu.Item key="remove">删除</Menu.Item>
            </Menu>
        );
        let marginLeft10 = {marginLeft: 10};

        let scrollXy;
        if (page.records.length > 0) {
            scrollXy = {
                x: 2000,
                y: 600,
            }
        }
        return (
            <PageHeaderLayout
                title="示例列表"
                content="示例列表">
                <Card bordered={false}>
                    <Row>
                        <Col span={10}>
                            <Button icon="plus"
                                    type="primary"
                                    onClick={() => {

                                    }}>新建</Button>
                            <Button icon="export"
                                    style={marginLeft10}
                                    type="dashed"
                                    onClick={() => {
                                        //TODO 导出export
                                        this.exportExcelFile('', []);

                                    }}>导出列表</Button>
                            {
                                selectedRows.length > 0
                                &&
                                (
                                    <span style={marginLeft10}>
                                    <Dropdown overlay={moreAction}>
                                     <Button>更多操作 <Icon type="down"/></Button>
                                    </Dropdown>
                                </span>
                                )
                            }
                        </Col>
                        <Col style={{textAlign: 'right'}} span={14}>
                            {this.getRightSimpleSearch()}
                        </Col>

                    </Row>
                    <Table style={{marginTop: 20}}
                           bordered={true}
                           columns={columns}
                           rowKey={this.generateTableRowKey}
                           dataSource={page.records}
                           pagination={pagination}
                           loading={loading}
                           locale={this.getTableLocal()}
                           title={this.getTableTile}
                           onChange={this.onTableChange}
                           rowSelection={this.getRowSelection()}
                           scroll={scrollXy}/>
                </Card>
            </PageHeaderLayout>
        );
    }

    protected getTableTile = (currentPageData: Object[]): React.ReactNode => {

        return "示例表格"
    }
    protected beforeSerialize = (req: QuerySampleReq) => {
        return true;
    };
    protected getQueryFrom: () => React.ReactNode;


}
