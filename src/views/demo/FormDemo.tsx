import {Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber, Card} from 'antd';
import * as React from "react";
import Button from "antd/lib/button/button";
import PageHeaderLayout from "../../layouts/page/PageHeaderLayout";

const FormItem = Form.Item;
const Option = Select.Option;


class FormDemo extends React.Component<any, any> {


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleSelectChange = (value) => {
        console.log(value);
        let obj = {
            note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
        };
        this.props.form.setFieldsValue(obj);
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(this.props);
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
                                    message: 'Please input your note!'
                                }],
                                initialValue: null
                            })(
                                <Input placeholder="请填写编号"/>
                            )}
                            <p>编号是5-10位的数字、字母等组合</p>
                        </FormItem>
                        <FormItem
                            label="性别"
                            labelCol={{span: 5}}
                            wrapperCol={{span: 12}}>
                            {getFieldDecorator('gender', {
                                rules: [{required: true, message: 'Please select your gender!'}],
                            })(
                                <Select
                                    placeholder="Select a option and change input text above"
                                    onChange={this.handleSelectChange}
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>
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
}

export default Form.create()(FormDemo);
