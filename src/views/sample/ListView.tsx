import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListState} from "../base/BaseListView";
import locale from "antd/lib/date-picker/locale/zh_CN"
import Button from "antd/es/button/button";
import Dropdown from "antd/lib/dropdown/dropdown";
import {Card, DatePicker, Form, Icon, Input, Menu, Popover, Select, Switch} from "antd";
import {Row, Col} from 'antd';
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils"
import {downloadFileByFetch} from "../../fetch/download/FetchDownloader";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {QuerySampleReq, QuerySampleReqBuilder} from "./req/QuerySampleReq";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import FormItem from "antd/lib/form/FormItem";
import * as styles from "../TableList.scss";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";
import * as moment from "moment";
import {isNullOrUndefined} from "util";
import {Link} from "react-router-dom";
import {ColumnProps} from "antd/es/table/interface";
import {SampleInfo, SampleBuilder} from "./info/SampleInfo";
import SendMode from "./enums/SendMode";

const {RangePicker} = DatePicker;

const Option = Select.Option;

const history = BrowserNavigatorFactory.get();

export interface SampleState extends BaseListState<SampleInfo> {

}

export interface SampleListProps extends AntdFromBaseProps {

}

/**
 * 示例列表页面
 */
@(Form.create as any)()
export default class ListView extends BaseListView<SampleListProps,
    SampleState,
    QuerySampleReq,
    QuerySampleReqBuilder,
    SampleInfo,
    SampleBuilder> {

    constructor(props: any, context: any) {
        super(props, context, {
            sendMode: SendMode.ASYNC.name
        });

        this.fetchUrl = "/sample/page";
        this.tableName = "示例表格";
    }

    handleMenuClick = () => {

    };


    componentDidMount() {
        super.componentDidMount();
        this.setState({
            simpleFilterItems: [
                {display: "编号", name: "sn"},
                {display: "姓名", name: "name"},
            ]
        });
    }


    protected buildColumns = (): ColumnProps<SampleInfo>[] => {

        return this.tableBuilder.operation({
            title: '操作',
            fixed: true,
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


                        <Link style={{marginRight: 10}}
                              to={`/sample/load?id=${rowData.id}`}>
                            <Button type="primary"
                                    icon="edit"
                                    size={"small"}>编辑</Button>
                        </Link>
                        {/*<a href={`/sample/load?id=${rowData.id}`} target='_blank'>编辑</a>*/}
                        <Dropdown overlay={menu}>
                            <Button>更多操作 <Icon type="down"/></Button>
                        </Dropdown>

                    </div>
                )
            }
        }).sn({
            title: 'sn',
            dataIndex: 'sn',
            sorter: true,
            width: 120,
        }).icon({
            title: '图标',
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
        }).description({
            title: '简介',
            sorter: false,
            width: 100,
        }).publicDate({
            title: '发布日期',
            sorter: true,
            width: 120,
        }).sendMode({
            title: '发布类型',
            sorter: true,
            width: 110,
        }).downFile({
            title: '附件',
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
        }).hdUrl({
            title: '活动URL',
            sorter: false,
            width: 120,
        }).number({
            title: '数量',
            sorter: true,
            width: 80
        }).feePct({
            title: '费率（百分比）',
            sorter: true,
            width: 120
        }).feePpt({
            title: '费率（千分比）',
            sorter: true,
            width: 120
        }).sale({
            title: '销售额（万元）',
            sorter: true,
            width: 120
        }).enabled({
            title: '启用禁用',
            sorter: true,
            width: 120
        }).build();
    };

    render() {
        console.log("render");
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
                    <div className={styles.tableListForm}>{this.renderAdvancedForm()}</div>
                    <Row>
                        <Col span={10}>
                            <Button icon="plus"
                                    type="primary"
                                    onClick={() => {
                                        this.props.history.push("/sample/input");
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
                           bordered={false}
                           columns={this.buildColumns()}
                           rowKey="id"
                           dataSource={page.records}
                           pagination={pagination}
                           loading={loading}
                           locale={this.getTableLocal()}
                           title={() => this.tableName}
                           onChange={this.onTableChange}
                           rowSelection={this.getRowSelection()}
                           scroll={scrollXy}/>
                </Card>
            </PageHeaderLayout>
        );
    }


    protected beforeSerialize = (req: QuerySampleReq) => {
        //处理时间参数
        MomentHelper.handlerFormRangerDateParam(req, "publicDate", MomentFormatString.YYYY_MM_DD_HH_mm);
        return true;
    };

    protected getQueryFrom = (): React.ReactNode => {

        const {toggleAdvancedForm} = this.state;

        return toggleAdvancedForm ? this.getExtendedQueryForm() : this.getSimpleQueryForm();
    };

    protected getSimpleQueryForm = (): React.ReactNode => {


        return (
            <Row gutter={{md: "8", lg: "24", xl: "48"}}>
                <Col md={8} sm={24}>
                    <FormItem label="名称模糊查询">
                        {this.formBuilder.nameLike(<Input placeholder="请输入名称"/>)}
                    </FormItem>
                </Col>
                <Col md={8} sm={24}>
                    <FormItem label="发布类型">
                        {
                            this.formBuilder.sendMode(
                                <Select placeholder="请选择发布类型"
                                        style={{width: '100%'}}>
                                    <Option value="SYNC">同步</Option>
                                    <Option value="ASYNC">异步</Option>
                                </Select>
                            )
                        }
                    </FormItem>
                </Col>
                <Col md={8} sm={24}>
                    {this.renderQueryFromButtons()}
                </Col>
            </Row>
        )
    };

    protected getExtendedQueryForm = (): React.ReactNode => {
        return (
            <div>

                <Row gutter={{md: "8", lg: "24", xl: "48"}}>
                    <Col md={8} sm={24}>
                        <FormItem label="名称模糊查询">
                            {this.formBuilder.nameLike(<Input placeholder="请输入名称"/>)}
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="发布类型">
                            {
                                this.formBuilder.sendMode(
                                    <Select placeholder="请选择发布类型"
                                            style={{width: '100%'}}>
                                        <Option value="SYNC">同步</Option>
                                        <Option value="ASYNC">异步</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="是否启用">
                            {
                                this.formBuilder.enabled(
                                    <Switch checkedChildren="启用"
                                            unCheckedChildren="禁用"
                                            defaultChecked/>,
                                    {
                                        initialValue: true
                                    }
                                )
                            }
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={{md: "8", lg: "24", xl: "48"}}>
                    <Col md={8} sm={24}>
                        <FormItem label="发布时间">
                            {
                                this.formBuilder.publicDate(
                                    <RangePicker locale={locale}
                                                 placeholder={['请选择最小发布时间', '请选择最大发布时间']}
                                                 showTime={{format: MomentFormatString.HH_mm}}
                                                 format={MomentFormatString.YYYY_MM_DD_HH_mm}/>,
                                    {
                                        formatter: (value) => {
                                            console.log("---publicDate---", value);
                                        }
                                    }
                                )
                            }
                        </FormItem>
                    </Col>

                </Row>
                <Row gutter={{md: "8", lg: "24", xl: "48"}}>
                    <Col md={8} sm={24}>
                        <FormItem label="请选择最小发布时间">
                            {
                                this.formBuilder.minPublicDate(
                                    <DatePicker locale={locale}
                                                placeholder="请选择最小发布时间"
                                                disabledDate={(current: moment.Moment) => {
                                                    let maxPublicDate = this.props.form.getFieldValue("maxPublicDate") as  moment.Moment;
                                                    if (isNullOrUndefined(maxPublicDate) || isNullOrUndefined(current)) {
                                                        return false;
                                                    }
                                                    return current.toDate().getTime() > maxPublicDate.toDate().getTime()
                                                }}
                                                showTime={{format: MomentFormatString.HH_mm}}
                                                format={MomentFormatString.YYYY_MM_DD_HH_mm}/>,
                                    {
                                        formatter: (value) => {
                                            console.log("---minPublicDate---", value);
                                        }
                                    }
                                )
                            }
                        </FormItem>
                        <FormItem label="请选择最大发布时间">
                            {
                                this.formBuilder.maxPublicDate(
                                    <DatePicker locale={locale}
                                                placeholder="请选择最大发布时间"
                                                disabledDate={(current: moment.Moment) => {

                                                    let minPublicDate = this.props.form.getFieldValue("minPublicDate") as  moment.Moment;
                                                    if (isNullOrUndefined(minPublicDate) || isNullOrUndefined(current)) {
                                                        return false;
                                                    }

                                                    return current.toDate().getTime() < minPublicDate.toDate().getTime()
                                                }}
                                                showTime={{format: MomentFormatString.HH_mm}}
                                                format={MomentFormatString.YYYY_MM_DD_HH_mm}/>,
                                    {
                                        formatter: (value) => {
                                            console.log("---maxPublicDate---", value);
                                        }
                                    }
                                )
                            }
                        </FormItem>
                    </Col>

                </Row>
                <div style={{textAlign: 'right', marginBottom: 20}}>
                    {this.renderQueryFromButtons()}
                </div>
            </div>

        )
    }

}
