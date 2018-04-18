import * as React from "react";
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-pro/dist/ant-design-pro.css';
import {Form, Input} from 'antd';
import {FormComponentProps} from "antd/es/form";

const FormItem = Form.Item;

interface CustomFormComponentProps extends FormComponentProps {

    username: {
        value: string
    }
    onChange: (...p) => void;
}

const CustomizedForm: any = Form.create<CustomFormComponentProps>({
    onFieldsChange(props: any, changedFields) {
        props.onChange(changedFields);
    },
    mapPropsToFields(props) {
        return {
            username: Form.createFormField({
                ...props.username,
                value: props.username.value,
            }),
        };
    },
    onValuesChange(_, values) {
        console.log(values);
    },
})((props) => {
    const {getFieldDecorator} = props.form;
    return (
        <Form layout="inline">
            <FormItem label="Username">
                {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Username is required!'}],
                })(<Input/>)}
            </FormItem>
        </Form>
    );
});

class Demo extends React.Component<any, any> {
    state = {
        fields: {
            username: {
                value: 'benjycui',
            },
        },
    };
    handleFormChange = (changedFields) => {
        console.log(changedFields);
        this.setState(({fields}) => ({
            fields: {...fields, ...changedFields},
        }));
    };

    render() {
        const fields = this.state.fields;
        return (
            <div>
                <CustomizedForm {...fields} onChange={this.handleFormChange}/>
                <pre className="language-bash">
          {JSON.stringify(fields, null, 2)}
        </pre>
            </div>
        );
    }
}

ReactDOM.render(<Demo/>, document.getElementById("app"));
