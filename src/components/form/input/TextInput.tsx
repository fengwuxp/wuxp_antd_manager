import {Input} from "antd";
import {InputProps} from "antd/lib/input/Input";
import * as React from "react";
import {WxpInput} from "wuxp_components_definition/src/components/form/input/WxpInput";
import * as G2 from "bizcharts/typings/g2";
import text = G2.Styles.text;


export interface TextInputProps extends InputProps {

}


export interface TextInputState {

    value: string;
}

/**
 * 文本输入框
 * @author wxup
 * @create 2018-07-28 15:39
 **/
export default class TextInput extends React.Component<InputProps, TextInputState> implements WxpInput<string> {

    private el: Input;

    type: string = "text";

    constructor(props: InputProps, context: any) {
        super(props, context);
        const {value} = this.props;
        this.state = {
            value: value as string || ""
        }
    }

    render() {
        const {value} = this.state;
        return <Input {...this.props}
                      ref={el => this.el = el}
                      value={value}
                      type={this.type}/>
    }

    getValue = (): string => {
        return this.state.value
    };

    setValue = (value: string) => {
        this.setState({
            value
        });
    };



    componentDidMount(): void {
    }




};
