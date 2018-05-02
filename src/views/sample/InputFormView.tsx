import {Button, Card, Cascader, DatePicker, Form, Icon, Input, InputNumber, Select, Switch, Upload} from 'antd';
import locale from "antd/lib/date-picker/locale/zh_CN"
import * as React from "react";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import TextArea from "antd/lib/input/TextArea";
import {CascaderOptionType} from "antd/lib/cascader";
import BaseFormView, {BaseFormSate} from "../base/BaseFormView";
import InfoProvideService from "../../services/infoprovide/InfoProvideService";
import {QueryAreaReq} from "../../services/infoprovide/req/QueryAreaReq";
import {CreateSampleReq, CreateSampleReqBuilder} from "./req/CreateSampleReq";
import SendMode from "./enums/SendMode";
import {SampleInfo} from "./info/SampleInfo";
import MomentHelper from "wuxp_react_dynamic_router/src/helper/MomentHelper";
import {MomentFormatString} from "wuxp_react_dynamic_router/src/enums/MomentFormatString";
import LookupListView from "./LookupListView";
import {FormItemType} from "../../builder/form/FormItemType";
import moment from "moment";
// import Modal from "../../components/modal/";

const FormItem = Form.Item;
const Option = Select.Option;


const selectBefore = (
    <Select defaultValue="Http://" style={{width: 90}}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" style={{width: 80}}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);

interface SampleFormProps extends AntdFromBaseProps {

}

interface SampleFormState extends BaseFormSate<SampleInfo, CreateSampleReq> {

    areaOptions: Array<CascaderOptionType>,


    showSampleLookup: boolean;

    selectedSampleRows: Array<SampleInfo>;

}

/**
 * 新增表单的例子
 */
@(Form.create as any)()
export default class InputFormView extends BaseFormView<SampleFormProps,
    SampleFormState,
    SampleInfo,
    CreateSampleReq,
    CreateSampleReqBuilder> {

    constructor(props: SampleFormProps, context: any) {
        super(props, context);
        this.submitUrl = "/sample/create";

    }


    state = {
        areaOptions: [],
        submitting: false,
        selectedSampleRows: [],
        showSampleLookup: false
    };

    componentWillMount() {
        super.componentWillMount();

        this.getAreaInfo({
            level: 1
        }).then((areaOptions) => {
            this.setState({
                areaOptions
            });
        }).catch((e) => {
            console.log("加载地区数据失败", e);
        });
    }

    /**
     * 获取地区信息
     * @param {QueryAreaReq} params
     * @returns {Promise<CascaderOptionType[]>}
     */
    getAreaInfo = (params: QueryAreaReq): Promise<CascaderOptionType[]> => {
        //查询地区
        return InfoProvideService.queryArea({
            ...params,
            querySize: -1
        }).then((data) => {
            const {records} = data;
            //数据转换
            return records.map(({id, name, level}) => {
                return {
                    value: id,
                    label: name,
                    isLeaf: level >= 3
                };
            });
        });
    };

    /**
     * 在提交表单之前对参数进行处理，在这里可以进行值转换等操作
     * @param {CreateSampleReq} req
     * @returns {boolean}
     */
    protected beforeSerialize = (req: CreateSampleReq) => {

        //TODO

        // console.log("-------req.publicDate------", req.publicDate)

        //时间处理
        // req.publicDate = MomentHelper.handlerMoment(req.publicDate, MomentFormatString.YYYY_MM_DD_HH_mm_ss);

        return true;
    };


    render() {

        console.log("----showSampleLookup----", this.state.showSampleLookup);

        return (
            <PageHeaderLayout
                title="新增示例"
                content="这是一个示例的表单页面，聚合了常见的表单控件，演示了基于antd UI框架的的基本用法">
                <Card bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem key={"form_item_name"}
                                  label="名称"
                                  labelCol={{span: 5}}
                                  wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.name(
                                    {
                                        rules: [
                                            {
                                                max: 5,
                                                message: '名称长度最大为5'
                                            },
                                            {
                                                min: 2,
                                                message: '名称长度最小为2'
                                            }
                                        ],
                                        initialValue: null
                                    }
                                )(<Input placeholder="请填写编号"/>)
                            }
                            <div>名称长度为2-5</div>
                        </FormItem>
                        <FormItem
                            label="图标"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.icon(
                                    {
                                        rules: [],
                                        formItemType: FormItemType.UPLOAD_IMAGE
                                    }
                                )(<Input type="hidden"/>)
                            }
                            <div>图标建议使用200*200的正方形的png图片</div>
                        </FormItem>
                        <FormItem label="简介"
                                  labelCol={{span: 5}}
                                  wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.description(
                                    {
                                        rules: [],
                                    }
                                )(<Input placeholder="请填写简介"/>)
                            }
                            <div>请填写简介</div>
                        </FormItem>
                        <FormItem
                            label="发布时间"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.publicDate(
                                    {
                                        rules: [],
                                        initialValue: "2018-02-11 12:56:12",
                                        formItemProps: {
                                            showTime: true,
                                            format: MomentFormatString.YYYY_MM_DD_HH_mm,
                                            placeholder: "请选择发布时间"
                                        },
                                        formItemType: FormItemType.DATE_PICKER
                                    }
                                )()
                            }
                            <div>请选择时间</div>
                        </FormItem>
                        <FormItem
                            label="活动介绍"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.mediumBody(
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请填写活动介绍'
                                            }
                                        ]
                                    },
                                )(<TextArea autosize={{minRows: 4}} cols={15}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="发布类型"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.sendMode(
                                    {
                                        rules: [
                                            {
                                                required: true, message: '请选择发布类型'
                                            }
                                        ]
                                    }
                                )(<Select placeholder="请选择发布类型" allowClear={true}>
                                    {
                                        Object.keys(SendMode).map((key: string) => {
                                            return <Option key={key} value={key}>{SendMode[key].desc}</Option>;
                                        })
                                    }
                                </Select>)
                            }
                        </FormItem>
                        <FormItem
                            label="附件"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            <Upload {...this.getUploadUploadProps("downFile", [], {accept: "*"})}>
                                <Button>
                                    <Icon type="file"/> 请选择要上传的文件
                                </Button>
                            </Upload>
                            {
                                this.formBuilder.downFile(
                                    {
                                        rules: [
                                            {
                                                required: false,
                                                message: '请上传附件'
                                            }
                                        ],
                                        initialValue: null
                                    }
                                )(<Input type="hidden"/>)
                            }
                        </FormItem>
                        <FormItem
                            label="活动url"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.hdUrl(
                                    {
                                        rules: [
                                            {required: true, message: '请填写活动url'}
                                        ],
                                    }
                                )(<Input addonBefore={selectBefore} addonAfter={selectAfter}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="数量"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.number(
                                    {
                                        rules: [
                                            {
                                                required: true, message: '请填写数量'
                                            }
                                        ]
                                    }
                                )(<InputNumber style={{width: 200}}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="费率（百分比）"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.feePct(
                                    {
                                        rules: [
                                            {
                                                required: false, message: '请填写费率（百分比）'
                                            }
                                        ]
                                    }
                                )(<InputNumber style={{width: 200}}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="手续费（分）"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.feeFen(
                                    {
                                        rules: [
                                            {
                                                required: false, message: '请填写手续费（分）'
                                            }
                                        ],
                                    }
                                )(<InputNumber style={{width: 200}}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="手续费（元）"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.feeYuan(
                                    {
                                        rules: [
                                            {required: false, message: '请填写手续费（元）'}
                                        ]
                                    }
                                )(<InputNumber style={{width: 200}}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="销售额（万元）"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.sale(
                                    {
                                        rules: [
                                            {
                                                required: false, message: '请选择上级'
                                            }
                                        ]
                                    })(<InputNumber style={{width: 200}}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="启用"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.enabled(
                                    {
                                        rules: [
                                            {required: true, message: '请选择启用状态'}
                                        ],
                                        initialValue: true
                                    }
                                )(<Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked/>)
                            }
                        </FormItem>
                        <FormItem
                            label="上级"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {
                                this.formBuilder.parentId(
                                    {
                                        rules: [
                                            {
                                                required: false, message: '请选择上级'
                                            }
                                        ],
                                        initialValue: this.state.selectedSampleRows.length > 0 ? this.state.selectedSampleRows[0].name : null,
                                        getFormatter: (parent: SampleInfo) => {
                                            console.log("--formatter parent--", parent);
                                            return this.state.selectedSampleRows[0].id;
                                        }
                                    })(<Input readOnly={true} onClick={() => {
                                    this.onShowParentTable();
                                }}/>)
                            }
                        </FormItem>
                        <FormItem
                            label="地区信息"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>

                            {
                                this.formBuilder.areaId(
                                    {
                                        rules: [
                                            {
                                                required: true, message: '请选择地区信息'
                                            }
                                        ],
                                        getFormatter: (values: string[]) => {
                                            console.log("-----获取地址 -----", values);
                                            return values[values.length - 1];
                                        }
                                    }
                                )(
                                    <Cascader options={this.state.areaOptions}
                                              loadData={this.loadAreaInfo}
                                              placeholder="请选择地区信息"
                                              onChange={this.onCascadeAreaChange}
                                              changeOnSelect/>
                                )
                            }
                        </FormItem>
                        <FormItem wrapperCol={{span: 12, offset: 5}}>
                            <Button loading={this.state.submitting} type="primary" htmlType="submit">提交参数</Button>
                        </FormItem>
                    </Form>
                    <LookupListView onSelectedRow={this.onTableOk}
                                    visible={this.state.showSampleLookup}
                                    onCancel={this.onShowParentTable}
                                    selectedRows={this.state.selectedSampleRows}
                                    location={this.props.location}
                                    history={this.props.history}
                                    match={this.props.match}/>
                </Card>
            </PageHeaderLayout>
        );
    }


    onShowParentTable = (showSampleLookup = true) => {
        this.setState({
            showSampleLookup
        })

    };

    onTableOk = (rows: Array<SampleInfo>) => {
        console.log("选中的行", rows);
        this.setState({
            selectedSampleRows: rows,
            showSampleLookup: false
        })
    };

    /**
     * 级联选中地区
     * @param value
     * @param selectedOptions
     */
    onCascadeAreaChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    /**
     * 级联数据处理
     * @param {CascaderOptionType[]} selectedOptions
     */
    loadAreaInfo = (selectedOptions?: CascaderOptionType[]) => {

        //上一个选中的选项
        const targetOption = selectedOptions[selectedOptions.length - 1];

        console.log(targetOption.value);

        this.getAreaInfo({
            parentId: targetOption.value,
        }).then((children) => {
            targetOption.children = children;
            this.setState({
                areaOptions: [...this.state.areaOptions],
            });
        }).catch((e) => {
            console.log("加载级联地区数据失败", e);
        });

    }
}

