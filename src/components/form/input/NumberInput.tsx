import * as React from "react";
import {InputNumber} from "antd";
import {InputNumberProps} from "antd/lib/input-number";
import {WxpInput} from "wuxp_components_definition/src/components/form/input/WxpInput";
import {isString} from "util";


export interface NumberInputProps extends InputNumberProps {


}

export interface NumberInputState {

    value: number;
}

/**
 * 数值输入框
 * @author wxup
 * @create 2018-07-28 16:11
 **/


export default class NumberInput extends React.Component<NumberInputProps, NumberInputState> implements WxpInput<number> {

    private el: InputNumber;

    type: string = "number";


    constructor(props: NumberInputProps, context: any) {
        super(props, context);
        const {value} = this.props;

        this.state = {
            value: value != null ? value : null
        }
    }

    render() {
        const {value} = this.state;
        return <InputNumber {...this.props}
                            ref={el => this.el = el}
                            value={value}/>
    }

    getValue = (): number => {
        return this.state.value
    };

    setValue = (value: (string | number)) => {
        if (isString(value)) {
            value = this.props.parser(value);
        }
        this.setState({
            value
        });
    };


}
