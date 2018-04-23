import {Form, Input, DatePicker, Button, Select, Upload, Cascader, InputNumber, Card, Icon, Switch} from 'antd';
import * as React from "react";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";
import {WrappedFormUtils} from "antd/lib/form/Form";
import {AntdFromBaseProps} from "wuxp_react_dynamic_router/src/model/antd/AntdFromBaseProps";
import {UploadChangeParam, UploadFile} from "antd/lib/upload/interface";
import TextArea from "antd/lib/input/TextArea";
import {CascaderOptionType} from "antd/lib/cascader";
import BaseFormView from "../base/BaseFormView";

const FormItem = Form.Item;
const Option = Select.Option;


function getUploadOptions(form: WrappedFormUtils, options: any): any {
    const uploadProps: any = {
        action: 'https//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        accept: "*",
        name: "file",
        defaultFileList: [],
        onRemove(file: UploadFile) {
            console.log("---------onRemove---------");
            const {response} = file;

            form.setFieldsValue({
                icon: ""
            });
            console.log("设置icon的值")
        },
        onChange(info: UploadChangeParam) {
            console.log("---------onChange---------");

            const {fileList} = info;
            if (fileList.length > 0) {
                form.setFieldsValue({
                    icon: "456"
                });
            }
        }
    };

    return uploadProps;
}


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

export interface FormDemoProps extends AntdFromBaseProps {

}

/**
 * 新增表单的例子
 */
class InputFormView extends BaseFormView<FormDemoProps, any> {


    constructor(props: FormDemoProps, context: any) {
        super(props, context);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    state = {
        options: [
            {
                value: "35",
                label: "福建",
                isLeaf: false
            },
            {
                value: "11",
                label: "北京",
                isLeaf: false
            }
        ]
    };


    selectDateTimes = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    selectDateTimeOnOk = (value) => {
        console.log('onOk: ', value);
    };


    render() {
        const {getFieldDecorator} = this.props.form;
        // console.log(this.props);
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
                            <Upload {...this.getUploadUploadProps('icon')}>
                                <Button>
                                    <Icon type="upload"/> 请选择要上传的图标
                                </Button>
                            </Upload>
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
                                <DatePicker
                                    showTime
                                    locale="zb_CN"
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
                                <Select placeholder="请选择发布类型">
                                    <Option value="SYNC">同步</Option>
                                    <Option value="ASYNC">异步</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem
                            label="附件"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            <Upload {...getUploadOptions(this.props.form, {})}>
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
                                <Cascader options={this.state.options}
                                          loadData={this.loadAreaInfo}
                                          placeholder="请选择地区信息"
                                          onChange={this.onChange}
                                          changeOnSelect/>
                            )}
                        </FormItem>
                        <FormItem wrapperCol={{span: 12, offset: 5}}>
                            <Button type="primary" htmlType="submit">提交参数</Button>
                        </FormItem>
                    </Form>
                </Card>
            </PageHeaderLayout>
        );
    }

    onChange = (value, selectedOptions) => {
        console.log(value, selectedOptions);
    };

    /**
     * 级联数据处理
     * @param {CascaderOptionType[]} selectedOptions
     */
    loadAreaInfo = (selectedOptions?: CascaderOptionType[]) => {

        console.log(selectedOptions);


        const targetOption = selectedOptions[selectedOptions.length - 1];

        console.log(targetOption.value);


        // load options lazily
        setTimeout(() => {
            targetOption.children = [{
                label: `${targetOption.label} Dynamic 1`,
                value: 'dynamic1',
            }, {
                label: `${targetOption.label} Dynamic 2`,
                value: 'dynamic2',
            }];
            this.setState({
                options: [...this.state.options],
            });
        }, 1000);
    }
}

export default Form.create()(InputFormView);
