import * as React from "react";
import Table from "antd/es/table/Table";
import BaseListView, {BaseListProps, BaseListState} from "../base/BaseListView";
import Button from "antd/es/button/button";
import Dropdown from "antd/lib/dropdown/dropdown";
import {Card, Col, DatePicker, Form, Icon, Menu, Popover, Row, Select} from "antd";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import StringUtils from "typescript_api_sdk/src/utils/StringUtils"
import {downloadFileByFetch} from "../../fetch/download/FetchDownloader";
import BrowserNavigatorFactory from "wuxp_react_dynamic_router/src/factory/navigator/web/BrowserNavigatorFactory";
import {QuerySampleReq, QuerySampleReqBuilder} from "./req/QuerySampleReq";
import FormItem from "antd/lib/form/FormItem";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";
import * as moment from "moment";
import {isNullOrUndefined} from "util";
import {Link} from "react-router-dom";
import {ColumnProps} from "antd/es/table/interface";
import {SampleBuilder, SampleInfo} from "./info/SampleInfo";
import SendMode from "./enums/SendMode";
import * as styles from "../TableList.scss";
import {FormItemType} from "../../builder/form/FormItemType";
import MenuBuilder, {SimpleCommonOperation} from "../../builder/menu/MenuBuilder";
import {ClickParam} from "antd/lib/menu";

const {RangePicker} = DatePicker;

const Option = Select.Option;

const history = BrowserNavigatorFactory.get();

export interface SampleListState extends BaseListState<SampleInfo> {

}

export interface SampleListProps extends BaseListProps<QuerySampleReq> {

}

/**
 * 示例列表页面
 */
@(Form.create as any)()
export default class ListView extends BaseListView<SampleListProps,
    SampleListState,
    QuerySampleReq,
    QuerySampleReqBuilder,
    SampleInfo,
    SampleBuilder<SampleBuilder>> {

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

        let build = this.tableBuilder.parentInfo.name({
            title: "上级"
        }).parentInfo.feePct({
            title: "123"
        }).areaInfo.name({
            title:"地区名称"
        }).areaInfo.areaInfo.name({
            title:"上级地区名称"
        }).sn({
            title:"sn"
        }).sn({

        }).build();

        console.log("---------------", build);

        return this.tableBuilder.operation({
            title: '操作',
            fixed: true,
            width: 240,
            render: (cellval, rowData) => {

                const menu = MenuBuilder.builder<SimpleCommonOperation>()
                    .deleted(
                        "删除",
                        (param: ClickParam) => {
                            console.log("删除", rowData)
                        }
                    ).confirm(
                        "确认",
                        () => {
                            console.log("确认", rowData)
                        }
                    ).seeView(
                        <Link to={`/sample/show?id=${rowData.id}`}>{"查看详情"}</Link>
                    ).build();
                return (
                    <div>

                        <Link style={{marginRight: 10}}
                              to={`/sample/load?id=${rowData.id}`}>
                            <Button type="primary"
                                    icon="edit"
                                    size={"small"}>编辑</Button>
                        </Link>
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

        //     .areaInfo((builder:any)=>{
        //     return builder.name({
        //
        //     }).build();
        // })


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
                        {
                            this.formBuilder.nameLike({
                                formItemType: FormItemType.INPUT,
                                formItemProps: {
                                    placeholder: "请输入名称"
                                }
                            })()
                        }
                    </FormItem>
                </Col>
                <Col md={8} sm={24}>
                    <FormItem label="发布类型">
                        {
                            this.formBuilder.sendMode({
                                formItemType: FormItemType.SELECT,
                                formItemProps: {
                                    placeholder: "请选择发布类型",
                                    allowClear: true,
                                    onChange: (value, option) => {
                                        console.log("---------change----------", value);
                                        this.submitQueryForm({sendMode: value});
                                    },
                                    renderOptions: () => {
                                        return Object.keys(SendMode).map((key: string) => {
                                            return <Option key={key} value={key}>{SendMode[key].desc}</Option>;
                                        });
                                    }
                                }
                            })()
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
                        <FormItem key={"ext_query_form_nameLike"}
                                  label="名称模糊查询">
                            {
                                this.formBuilder.nameLike({
                                    formItemType: FormItemType.INPUT,
                                    formItemProps: {
                                        placeholder: "请输入名称"
                                    }
                                })()
                            }
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="发布类型">
                            {
                                this.formBuilder.sendMode({
                                    formItemType: FormItemType.SELECT,
                                    formItemProps: {
                                        placeholder: "请选择发布类型",
                                        allowClear: true,
                                        onChange: (value) => {
                                            this.submitQueryForm({sendMode: value});
                                        },
                                        renderOptions: () => {
                                            return Object.keys(SendMode).map((key: string) => {
                                                return <Option key={key} value={key}>{SendMode[key].desc}</Option>;
                                            });
                                        }
                                    }
                                })()
                            }
                        </FormItem>
                    </Col>
                    <Col md={8} sm={24}>
                        <FormItem label="是否启用">
                            {
                                this.formBuilder.enabled({
                                    initialValue: true,
                                    formItemType: FormItemType.SWITCH,
                                    formItemProps: {
                                        checkedChildren: "启用",
                                        unCheckedChildren: "禁用",
                                        defaultChecked: true
                                    }
                                })()
                            }
                        </FormItem>
                    </Col>
                </Row>
                <Row gutter={{md: "8", lg: "24", xl: "48"}}>
                    <Col md={8} sm={24}>
                        <FormItem label="发布时间">
                            {
                                this.formBuilder.publicDate(
                                    {
                                        getFormatter: (value) => {
                                            console.log("---publicDate---", value);
                                        },
                                        formItemType: FormItemType.RANG_PICKER,
                                        formItemProps: {
                                            placeholder: ['请选择最小发布时间', '请选择最大发布时间'],
                                            showTime: {format: MomentFormatString.HH_mm},
                                            format: MomentFormatString.YYYY_MM_DD_HH_mm
                                        }
                                    }
                                )()
                            }
                        </FormItem>
                    </Col>

                </Row>
                <Row type="flex" gutter={{md: "5", lg: "24", xl: "48"}}>

                    <FormItem label="发布时间">
                        {
                            this.formBuilder.minPublicDate(
                                {
                                    formItemType: FormItemType.DATE_PICKER,
                                    formItemProps: {
                                        placeholder: "请选择最小发布时间",
                                        showTime: {format: MomentFormatString.HH_mm},
                                        format: MomentFormatString.YYYY_MM_DD_HH_mm,
                                        disabledDate: (current: moment.Moment) => {
                                            let maxPublicDate = this.props.form.getFieldValue("maxPublicDate") as  moment.Moment;
                                            if (isNullOrUndefined(maxPublicDate) || isNullOrUndefined(current)) {
                                                return false;
                                            }
                                            return current.toDate().getTime() > maxPublicDate.toDate().getTime()
                                        }
                                    }
                                }
                            )()
                        }
                    </FormItem>

                    <FormItem>
                        {
                            this.formBuilder.maxPublicDate(
                                {
                                    formItemType: FormItemType.DATE_PICKER,
                                    formItemProps: {
                                        placeholder: "请选择最大发布时间",
                                        showTime: {format: MomentFormatString.HH_mm},
                                        format: MomentFormatString.YYYY_MM_DD_HH_mm,
                                        disabledDate: (current: moment.Moment) => {
                                            let minPublicDate = this.props.form.getFieldValue("minPublicDate") as  moment.Moment;
                                            if (isNullOrUndefined(minPublicDate) || isNullOrUndefined(current)) {
                                                return false;
                                            }

                                            return current.toDate().getTime() < minPublicDate.toDate().getTime()
                                        }
                                    }
                                }
                            )()
                        }
                    </FormItem>

                </Row>
                <div style={{textAlign: 'right', marginBottom: 20}}>
                    {this.renderQueryFromButtons()}
                </div>
            </div>

        )
    }

}
