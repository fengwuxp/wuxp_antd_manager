import * as React from "react";
import {InputProps, TextAreaProps} from "antd/lib/input";
import {InputNumberProps} from "antd/lib/input-number";
import {SelectProps} from "antd/lib/select";
import {Input, InputNumber, Radio, Rate, Select, Slider} from "antd";
import {CheckboxGroupProps, CheckboxProps} from "antd/lib/checkbox";
import Checkbox from "antd/lib/checkbox/Checkbox";
import CheckboxGroup from "antd/lib/checkbox/Group";
import {RadioGroupProps, RadioProps} from "antd/lib/radio";
import RadioGroup from "antd/lib/radio/group";
import {SliderProps} from "antd/lib/slider";
import {default as Switch, SwitchProps} from "antd/lib/switch";
import {default as Mention, MentionProps} from "antd/lib/mention";
import {RateProps} from "antd/lib/rate";
import TextArea from "antd/lib/input/TextArea";
import Cascader, {CascaderProps} from "antd/lib/cascader";


export interface AntdSelectProps extends SelectProps {
    renderOptions: () => React.ReactNode[];
}

/**
 * 通用的表单组件处理者，用于获取简单的表单组件
 */
export default class CommonSimpleComponentHandler {

    /**
     * 处理Input
     * @param {InputProps} props
     * @param {string}propName
     */
    static input = (props: InputProps, propName: string): React.ReactNode => {

        return <Input key={getDefaultKey(propName)} {...props}/>
    };

    /**
     * 获取InputNumber
     * @param {InputNumberProps} props
     * @param {string}propName
     * @returns {{component: any}}
     */
    static input_number = (props: InputNumberProps, propName: string): React.ReactNode => {

        return <InputNumber key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 TextArea
     * @param {TextAreaProps} props
     * @param {string} propName
     * @returns {React.ReactNode}
     */
    static text_area = (props: TextAreaProps, propName: string): React.ReactNode => {
        return <TextArea key={getDefaultKey(propName)} {...props}/>;
    };


    /**
     * 获取 Select
     * @param {AntdSelectProps} props
     * @param {string}propName
     */
    static select = (props: AntdSelectProps, propName: string): React.ReactNode => {

        let renderOptions = props.renderOptions;
        delete props.renderOptions;

        return <Select key={getDefaultKey(propName)} {...props} children={renderOptions()}/>;
    };


    /**
     * 获取 Cascader
     * @param {CascaderProps} props
     * @param {string} propName
     * @returns {any}
     */
    static cascader = (props: CascaderProps, propName: string) => {

        return <Cascader key={getDefaultKey(propName)} {...props}/>
    };

    /**
     * 获取 CheckBox
     * @param {CheckboxProps} props
     * @param {string}propName
     */
    static checkbox = (props: CheckboxProps, propName: string): React.ReactNode => {
        return <Checkbox key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 CheckboxGroup
     * @param {CheckboxGroupProps} props
     * @param {string}propName
     * @returns {React.ReactNode}
     */
    static checkbox_group = (props: CheckboxGroupProps, propName: string): React.ReactNode => {
        return <CheckboxGroup key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 Radio
     * @param {RadioProps} props
     * @param {string}propName
     */
    static radio = (props: RadioProps, propName: string): React.ReactNode => {
        return <Radio key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 RadioGroup
     * @param {RadioGroupProps} props
     * @param {string}propName
     * @returns {React.ReactNode}
     */
    static radio_group = (props: RadioGroupProps, propName: string): React.ReactNode => {
        return <RadioGroup key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 Slider
     * @param {SliderProps} props
     * @param {string}propName
     * @returns {React.ReactNode}
     */
    static slider = (props: SliderProps, propName: string): React.ReactNode => {

        return <Slider key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 Switch
     * @param {SwitchProps} props
     * @param {string}propName
     */
    static switch = (props: SwitchProps, propName: string): React.ReactNode => {
        return <Switch key={getDefaultKey(propName)} {...props}/>;
    };

    /**
     * 获取 Mention
     * @param {MentionProps} props
     * @param {string} propName
     * @returns {React.ReactNode}
     */
    static mention = (props: MentionProps, propName: string): React.ReactNode => {
        return <Mention key={getDefaultKey(propName)} {...props}/>
    };

    /**
     * 获取 Rate
     * @param {RateProps} props
     * @param {string} propName
     * @returns {React.ReactNode}
     */
    static rate = (props: RateProps, propName: string): React.ReactNode => {
        return <Rate key={getDefaultKey(propName)} {...props}/>
    }
}


function getDefaultKey(key) {

    return `from_item_${key}`;
}
