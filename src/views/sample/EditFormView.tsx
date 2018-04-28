import {Form, Input, DatePicker, Button, Select, Upload, Cascader, InputNumber, Card, Icon, Switch} from 'antd';
import locale from "antd/lib/date-picker/locale/zh_CN"
import * as React from "react";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import {fenToYuan} from "wuxp_react_dynamic_router/src/utils/common/NumberFormatterUtil";
import TextArea from "antd/lib/input/TextArea";
import {CascaderOptionType} from "antd/lib/cascader";
import BaseFormView, {BaseFormSate} from "../base/BaseFormView";
import InfoProvideService from "../../services/infoprovide/InfoProvideService";
import {QueryAreaReq} from "../../services/infoprovide/req/QueryAreaReq";
import SendMode from "./enums/SendMode";
import {SampleInfo} from "./info/SampleInfo";
import {EditSampleReq} from "./req/EditSampleReq";

const FormItem = Form.Item;
const Option = Select.Option;


interface SampleFormProps extends AntdFromBaseProps {

}

interface SampleFormState extends BaseFormSate<SampleInfo, EditSampleReq> {

    areaOptions: Array<CascaderOptionType>
}

/**
 * 编辑表单的例子
 */
@(Form.create as any)()
export default class EditFormView extends BaseFormView<SampleFormProps, SampleFormState> {


    constructor(props: SampleFormProps, context: any) {
        super(props, context);
        this.submitUrl = "/sample/update";
        this.isCreated = false;
    }


    state = {
        areaOptions: [],
        submitting: false,
        submitData: null,
        initFormData: null
    };

    componentDidMount() {
        super.componentDidMount();

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


    selectDateTimes = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    selectDateTimeOnOk = (value) => {
        console.log('onOk: ', value);
    };


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
                    {
                        initFormData === null ? null : this.renderForm(initFormData)
                    }
                </Card>
            </PageHeaderLayout>
        );
    }

    renderForm = (initFormData) => {
        const {getFieldDecorator} = this.props.form;
        return <Form onSubmit={this.handleSubmit}>
            {getFieldDecorator('id', {
                initialValue: initFormData.id
            })(
                <Input type={'hidden'}/>
            )}
            <FormItem
                label="编号"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('sn', {
                    rules: [{
                        required: true,
                        message: '编码未填写'
                    }],
                    initialValue: initFormData.sn
                })(
                    <Input placeholder="请填写编号"/>
                )}
                <div>编号是5-10位的数字、字母等组合</div>
            </FormItem>
            <FormItem
                label="名称"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('name', {
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
                    initialValue: initFormData.name
                })(
                    <Input placeholder="请填写编号"/>
                )}
                <div>名称长度为2-5</div>
            </FormItem>
            <FormItem
                label="图标"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('icon', {
                    rules: [
                        {
                            required: false,
                            message: '请上传图标'
                        },
                    ],
                    initialValue: initFormData.icon
                })(
                    <Input type="hidden"/>
                )}
                <Upload {...this.getUploadUploadProps('icon', [initFormData.icon])}>
                    <Button>
                        <Icon type="upload"/> 请选择要上传的图标
                    </Button>
                </Upload>
                <div>图标建议使用200*200的正方形的png图片</div>
            </FormItem>
            <FormItem
                label="简介"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('description', {
                    rules: [],
                    initialValue: initFormData.description
                })(
                    <Input placeholder="请填写简介"/>
                )}
                <div>名称长度为2-5</div>
            </FormItem>
            <FormItem
                label="发布时间"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>

                {getFieldDecorator('publicDate', {
                    rules: [],
                    initialValue: initFormData.publicDate
                })(
                    <DatePicker
                        showTime
                        locale={locale}
                        format="YYYY-MM-DD HH:mm:ss"
                        placeholder="请选择发布时间"
                        style={{width: 200}}
                        onChange={this.selectDateTimes}
                        onOk={this.selectDateTimeOnOk}
                    />
                )}
                <div>请选择时间</div>
            </FormItem>
            <FormItem
                label="活动介绍"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('mediumBody', {
                    rules: [
                        {required: true, message: '请填写活动介绍'}
                    ],
                    initialValue: initFormData.mediumBody
                })(
                    <TextArea autosize={{minRows: 4}} cols={15}/>
                )}
            </FormItem>
            <FormItem
                label="发布类型"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('sendMode', {
                    rules: [
                        {required: true, message: '请选择发布类型'},
                    ],
                    initialValue: initFormData.sendMode
                })(
                    <Select placeholder="请选择发布类型" allowClear={true}>
                        {
                            Object.keys(SendMode).map((key: string) => {
                                return <Option key={key} value={key}>{SendMode[key].desc}</Option>;
                            })
                        }
                    </Select>
                )}
            </FormItem>
            <FormItem
                label="附件"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('downFile', {
                    rules: [
                        {
                            required: false,
                            message: '请上传附件'
                        },
                    ],
                    initialValue: initFormData.downFile
                })(
                    <Input type="hidden"/>
                )}
                <Upload {...this.getUploadUploadProps("downFile", [initFormData.downFile], {accept: "*"})}>
                    <Button>
                        <Icon type="file"/> 请选择要上传的文件
                    </Button>
                </Upload>
            </FormItem>
            <FormItem
                label="活动url"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('hdUrl', {
                    rules: [
                        {required: true, message: '请填写活动url'},
                    ],
                    initialValue: initFormData.hdUrl
                })(
                    <Input/>
                )}
            </FormItem>
            <FormItem
                label="数量"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('number', {
                    rules: [
                        {
                            required: true, message: '请填写数量',
                        },
                    ],
                    initialValue: initFormData.number
                })(
                    <InputNumber style={{width: 200}}/>
                )}
            </FormItem>
            <FormItem
                label="费率（百分比）"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('feePct', {
                    rules: [
                        {required: false, message: '请填写费率（百分比）'},
                        {
                            max: 100, message: '百分比最大值为100',
                        },
                        {
                            min: 0, message: '百分比最小值为0',
                        }
                    ],
                    initialValue: initFormData.feePct
                })(
                    <InputNumber placeholder={'请填写0-100'} style={{width: 200}}/>
                )}
            </FormItem>
            <FormItem
                label="手续费（分）"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('feeFen', {
                    rules: [
                        {required: false, message: '请填写手续费（分）'}
                    ],
                    initialValue: fenToYuan(initFormData.feeFen)
                })(
                    <InputNumber style={{width: 200}}/>
                )}
            </FormItem>
            <FormItem
                label="手续费（元）"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('feeYuan', {
                    rules: [
                        {required: false, message: '请填写手续费（元）'}
                    ],
                    initialValue: initFormData.sale
                })(
                    <InputNumber style={{width: 200}}/>
                )}
            </FormItem>
            <FormItem
                label="销售额（万元）"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('sale', {
                    rules: [
                        {required: false, message: '请选择上级'}
                    ],
                    initialValue: initFormData.sale
                })(
                    <InputNumber style={{width: 200}}/>
                )}
            </FormItem>
            <FormItem
                label="启用"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('enabled', {
                    rules: [
                        {required: true, message: '请选择启用状态'}
                    ],
                    initialValue: initFormData.enabled
                })(
                    <Switch checkedChildren="启用" unCheckedChildren="禁用" defaultChecked/>
                )}
            </FormItem>
            <FormItem
                label="上级"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>
                {getFieldDecorator('parentId', {
                    rules: [
                        {required: false, message: '请选择上级'}
                    ],
                    initialValue: initFormData.parentId
                })(
                    <Input/>
                )}
            </FormItem>
            <FormItem
                label="地区信息"
                labelCol={{span: 5}}
                wrapperCol={{span: 12}}>

                {getFieldDecorator('areaId', {
                    rules: [
                        {required: true, message: '请选择地区信息'}
                    ],
                    //TODO
                    initialValue: null
                })(
                    <Cascader options={this.state.areaOptions}
                              loadData={this.loadAreaInfo}
                              placeholder="请选择地区信息"
                              onChange={this.onCascadeAreaChange}
                              changeOnSelect/>
                )}
            </FormItem>
            <FormItem wrapperCol={{span: 12, offset: 5}}>
                <Button loading={this.state.submitting} type="primary" htmlType="submit">提交参数</Button>
            </FormItem>
        </Form>
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

