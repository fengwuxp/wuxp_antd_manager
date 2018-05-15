import {Button, Card, Form, Select} from 'antd';
import * as React from "react";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import TextArea from "antd/lib/input/TextArea";
import {CascaderOptionType} from "antd/lib/cascader";
import BaseFormView, { BaseFormState} from "../base/BaseFormView";
import InfoProvideService from "../../services/infoprovide/InfoProvideService";
import {QueryAreaReq} from "../../services/infoprovide/req/QueryAreaReq";
import SendMode from "./enums/SendMode";
import {SampleInfo} from "./info/SampleInfo";
import {EditSampleReq, EditSampleReqBuilder} from "./req/EditSampleReq";
import LookupListView from "./LookupListView";
import {getCascadeAreaValues} from "../../utils/AreaUtil";
import {FormItemType} from "../../builder/form/FormItemType";
import {loadAreaToCasaderOptions, queryAreaToCasaderOptions} from "../../helper/area/AreaHelper";

const FormItem = Form.Item;
const Option = Select.Option;


interface SampleFormProps extends AntdFromBaseProps {

}

interface SampleFormState extends BaseFormState<SampleInfo, EditSampleReq> {

    areaOptions: Array<CascaderOptionType>

}

/**
 * 编辑表单的例子
 */
@(Form.create as any)()
export default class EditFormView extends BaseFormView<SampleFormProps,
    SampleFormState,
    SampleInfo,
    EditSampleReq,
    EditSampleReqBuilder> {


    constructor(props: SampleFormProps, context: any) {
        super(props, context);
        this.submitUrl = "/sample/edit";
        this.isCreated = false;
    }


    state = {
        areaOptions: [],
        submitting: false,
        submitData: null,
        initFormData: null
    };

    componentWillMount() {
        super.componentWillMount();

        //TODO
    }


    fetchDataSuccess(data: SampleInfo, proxyReq: EditSampleReq) {
        super.initFormData(data, proxyReq);
    };

    /**
     * 获取地区信息
     * @param {QueryAreaReq} params
     * @returns {Promise<CascaderOptionType[]>}
     */
    getAreaInfo = queryAreaToCasaderOptions.bind(this);

    /**
     * 级联数据处理
     * @param {CascaderOptionType[]} selectedOptions
     */
    loadAreaInfo = loadAreaToCasaderOptions.bind(this);


    /**
     * 在表单提交之前做参数序列化操作，
     * @param {EditSampleReq} req
     * @returns {boolean}
     */
    protected beforeSerialize = (req: EditSampleReq) => {
        //TODO
        return true;
    };


    render() {

        const {initFormData} = this.state;

        return (
            <PageHeaderLayout
                title="编辑示例"
                content="这是一个示例的表单页面，聚合了常见的表单控件，演示了基于antd UI框架的的基本用法">
                <Card bordered={false}>
                    {initFormData === null ? null : this.renderForm(initFormData)}
                </Card>
            </PageHeaderLayout>
        );
    }

    renderForm = (initFormData) => {
        return <Form onSubmit={this.handleSubmit}>
            <FormItem
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
                            formItemType: FormItemType.INPUT,
                            formItemProps: {
                                placeholder: "请填写编号"
                            }
                        }
                    )()
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
                    )()
                }
                <div>图标建议使用200*200的正方形的png图片</div>
            </FormItem>
            <FormItem
                label="简介"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {
                    this.formBuilder.description(
                        {
                            rules: [],
                            formItemType: FormItemType.INPUT,
                            formItemProps: {
                                placeholder: "请填写简介"
                            }
                        }
                    )()
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
                            formItemType: FormItemType.DATE_PICKER,
                            formItemProps: {
                                placeholder: "请选择发布时间",
                                showTime: true
                            }
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
                            ],
                            formItemType: FormItemType.TEXT_AREA,
                            formItemProps: {
                                placeholder: "请填写活动介绍",
                                autosize: {minRows: 4},
                                cols: 15
                            }
                        }
                    )(
                        <TextArea autosize={{minRows: 4}} cols={15}/>
                    )
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
                            ],
                            formItemType: FormItemType.SELECT,
                            formItemProps: {
                                placeholder: "请选择发布类型",
                                allowClear: true,
                                renderOptions: () => {
                                    return Object.keys(SendMode).map((key: string) => {
                                        return <Option key={key} value={key}>{SendMode[key].desc}</Option>;
                                    });
                                }
                            }

                        }
                    )()
                }
            </FormItem>
            <FormItem
                label="附件"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {
                    this.formBuilder.downFile(
                        {
                            rules: [],
                            formItemType: FormItemType.UPLOAD_FILE
                        }
                    )()
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
                            formItemType: FormItemType.INPUT,
                            formItemProps: {
                                placeholder: "请填写活动url"
                            }
                        }
                    )()
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
                            ],
                            formItemType: FormItemType.INPUT_NUMBER,
                            formItemProps: {
                                placeholder: "请填写活动url",
                                style: {width: 200}
                            }
                        }
                    )()
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
                            ],
                            formItemType: FormItemType.INPUT_NUMBER,
                            formItemProps: {
                                placeholder: "请填写费率",
                                style: {width: 200}
                            }
                        }
                    )()
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
                            formItemType: FormItemType.INPUT_NUMBER,
                            formItemProps: {
                                placeholder: "请填写手续费(分)",
                                style: {width: 200}
                            }

                        })()
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
                            ],
                            formItemType: FormItemType.INPUT_NUMBER,
                            formItemProps: {
                                placeholder: "请填写手续费(元)",
                                style: {width: 200}
                            }
                        })()
                }
            </FormItem>
            <FormItem
                label="销售额（万元）"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {
                    this.formBuilder.sale(
                        {
                            rules: [],
                            formItemType: FormItemType.INPUT_NUMBER,
                            formItemProps: {
                                placeholder: "请填写销售额(万元)",
                                style: {width: 200}
                            }
                        })()
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
                            formItemType: FormItemType.SWITCH,
                            formItemProps: {
                                defaultChecked: initFormData.enabled,
                                checkedChildren: "启用",
                                unCheckedChildren: "禁用"
                            }
                        })()
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
                            formItemType: FormItemType.LOOKUP,
                            formItemProps: {
                                onOk: (rows: Array<SampleInfo>) => {
                                    console.log("选中的行", rows);
                                },
                                showValue(rows: Array<SampleInfo>) {
                                    // if (initFormData.parentInfo === null) {
                                    //     return null;
                                    // }
                                    initFormData.parentInfo = rows[0];
                                    return rows[0].name;
                                },
                                multiple: false,
                                lookupTable: (LookupListView as any),
                                placeholder: "请选择上级",
                                defaultSelectedRows: initFormData.parentInfo ? [initFormData.parentInfo] : []
                            },
                            setFormatter: () => {
                                return [initFormData.parentInfo];
                            },
                            getFormatter: (sampleInfos: SampleInfo[]) => {
                                console.log("--formatter parent--", sampleInfos);
                                return sampleInfos[0].id;
                            }
                        }
                    )()
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
                            formItemType: FormItemType.CASCADER,
                            formItemProps: {
                                options: this.state.areaOptions,
                                loadData: this.loadAreaInfo,
                                expandTrigger: "hover",
                                placeholder: "请选择地区信息",
                                onChange: this.onCascadeAreaChange,
                                changeOnSelect: true
                            },
                            /**
                             * 初始化函数
                             * @param {Array<string>} values
                             */
                            initialFunction: (values: Array<string>) => {
                                return this.getAreaInfo({
                                    level: 1
                                }).then((areaOptions) => {
                                    this.setState({
                                        areaOptions
                                    });
                                    //获取级联地区数据的初始化数据
                                    this.getCascadeAreaSelectInitValue(values);
                                }).catch((e) => {
                                    console.log("加载地区数据失败", e);
                                });
                            },
                            setFormatter(val) {
                                console.log("-----set 地址 -----", val);
                                return getCascadeAreaValues(val);
                            },
                            getFormatter: (values: string[]) => {
                                console.log("-----获取地址 -----", values);
                                return values[values.length - 1];
                            }
                        })()
                }
            </FormItem>
            <FormItem wrapperCol={{span: 12, offset: 5}}>
                <Button loading={this.state.submitting} type="primary" htmlType="submit">提交参数</Button>
            </FormItem>
        </Form>
    };


    async getCascadeAreaSelectInitValue(selectedValues: string[]) {
        // let selectedValues = getCascadeAreaValues(areaId);
        console.log("----------selectedValues--------", selectedValues);
        let i = 0;
        let prentOptions = null;
        while (i < selectedValues.length) {
            let options = prentOptions === null ? this.state.areaOptions : prentOptions;
            const selectedOptions = options.find((item) => {
                return item.value === selectedValues[i];
            });
            await this.loadAreaInfo([selectedOptions]);
            prentOptions = selectedOptions.children;
            i++;
        }
    };

    /**
     * 级联选中地区
     * @param value
     * @param selectedOptions
     */
    onCascadeAreaChange = (value, selectedOptions) => {
        console.log("--------onCascadeAreaChange-------", value, selectedOptions);
    };

}

