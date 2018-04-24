import {Form, Input, DatePicker, Button, Select, Upload, Cascader, InputNumber, Card, Icon, Switch} from 'antd';
import locale from "antd/lib/date-picker/locale/zh_CN"
import * as React from "react";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import TextArea from "antd/lib/input/TextArea";
import {CascaderOptionType} from "antd/lib/cascader";
import BaseFormView, {BaseFormSate} from "../base/BaseFormView";
import InfoProvideService from "../../services/infoprovide/InfoProvideService";
import {QueryAreaReq} from "../../services/infoprovide/req/QueryAreaReq";
import {CreateSampleReq} from "./req/CreateSampleReq";
import SendMode from "./enums/SendMode";
import {SampleInfo} from "./info/SampleInfo";
import {AreaInfo} from "../../services/infoprovide/info/AreaInfo";

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

export interface SampleFormProps extends AntdFromBaseProps {

}

export interface SampleFormState extends BaseFormSate<CreateSampleReq> {

    areaOptions: Array<CascaderOptionType>
}

/**
 * 新增表单的例子
 */
@(Form.create as any)()
export default class InputFormView extends BaseFormView<SampleFormProps, SampleFormState> {


    constructor(props: SampleFormProps, context: any) {
        super(props, context);
        this.submitUrl = "/sample/create";
        this.isCreated = true;
    }


    state = {
        areaOptions: [],
        submitting: false,
        formData: null
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
        })
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
            console.log(data);
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


    protected beforeSerialize = (req: CreateSampleReq) => {

        //TODO

        return true;
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <PageHeaderLayout
                title="基础表单"
                content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。">
                <Card bordered={false}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            label="编号"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {getFieldDecorator('note', {
                                rules: [{
                                    required: true,
                                    message: '编码未填写'
                                }],
                                initialValue: null
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
                                initialValue: null
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
                                        required: true,
                                        message: '请上传图标'
                                    },
                                ],
                                initialValue: null
                            })(
                                <Input type="hidden"/>
                            )}
                            <Upload {...this.getUploadUploadProps('icon')}>
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
                            })(
                                <Input placeholder="请填写编号"/>
                            )}
                            <div>名称长度为2-5</div>
                        </FormItem>
                        <FormItem
                            label="发布时间"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>

                            {getFieldDecorator('publicDate', {
                                rules: [],
                                initialValue: null
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
                            })(
                                <TextArea autosize={{minRows: 4}} cols={15}/>
                            )}
                        </FormItem>
                        <FormItem
                            label="发布类型"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {getFieldDecorator('sendMode', {
                                rules: [{required: true, message: '请选择发布类型'}],
                            })(
                                <Select placeholder="请选择发布类型" allowClear={true}>
                                    {
                                        Object.keys(SendMode).map((key: string) => {
                                            return <Option value={key}>{SendMode[key].desc}</Option>;
                                        })
                                    }
                                </Select>
                            )}
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
                            {getFieldDecorator('downFile', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请上传附件'
                                    },
                                ],
                                initialValue: null
                            })(
                                <Input type="hidden"/>
                            )}
                        </FormItem>
                        <FormItem
                            label="活动url"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {getFieldDecorator('hdUrl', {
                                rules: [
                                    {required: true, message: '请填写活动url'}
                                ],
                            })(
                                <Input addonBefore={selectBefore} addonAfter={selectAfter}/>
                            )}
                        </FormItem>
                        <FormItem
                            label="数量"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {getFieldDecorator('number', {
                                rules: [
                                    {required: false, message: '请填写数量'}
                                ],
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
                                    {required: false, message: '请填写费率（百分比）'}
                                ],
                            })(
                                <InputNumber style={{width: 200}}/>
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
                                initialValue: true
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
                                    {required: false, message: '请选择地区信息'}
                                ],
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
                </Card>
            </PageHeaderLayout>
        );
    }

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

