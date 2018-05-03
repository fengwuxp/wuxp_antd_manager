import * as React from "react";
import Modal from "antd/lib/modal";
import {BaseLookupViewProps} from "../../../views/base/BaseLookupView";
import BaseLookupViewBaseListView from "../../../views/base/BaseLookupView";
import {isArray, isNullOrUndefined} from "util";
import Input from "antd/lib/input/Input";
import Button from "antd/lib/button/button";
import Row from "antd/lib/grid/row";
import Col from "antd/lib/grid/col";


type a = any;


export interface LookupProps<T> {

    /**
     * 确认选中
     * @param {Array<T>} row
     */
    onOk: (row: Array<T>) => void;

    /**
     * 显示值
     * @param {Array<T>} row
     * @returns {any}
     */
    showValue: (row: Array<T>) => any

    /**
     * 取消
     */
    onCancel?: () => void;

    /**
     * 默认选中的行
     */
    defaultSelectedRows?: Array<T>;

    /**
     * 是否多选，
     * 默认 false
     */
    multiple?: boolean


    width?: number | string;

    title?: string;

    /**
     * 表格
     */
    lookupTable: BaseLookupViewBaseListView<any, any, any, T, any>;

    placeholder: string;


}

interface LookupState<T> {

    visible: boolean;

    /**
     * 用于显示的值
     */
    values: Array<any>;

    /**
     * 选中的行
     */
    // rows: Array<T>;
}

type ModalHandler = {
    destroy: () => void;
}

/**
 * 带回查找组件
 */
export default class Lookup<T> extends React.Component<LookupProps<T>, LookupState<T>> {


    private refTableName: string = "lookup_table";


    constructor(props: LookupProps<T>, context: any) {
        super(props, props);

        let defaultSelectedRows = this.props.defaultSelectedRows;
        this.state = {
            visible: false,
            values: this.getValues(defaultSelectedRows),
            // rows: defaultSelectedRows ? defaultSelectedRows : []
        };
    }


    render() {


        return <React.Fragment>
            {this.props.multiple === true ? this.getMultipleShowComponent() : this.getRadioShowComponent()}
            {this.getModalPlan()}
        </React.Fragment>
    }

    getRadioShowComponent() {
        const props = {...this.props};

        [
            "onOk",
            "onCancel",
            "defaultSelectedRows",
            "title",
            "lookupTable",
            "multiple",
            "showValue"
        ].forEach(key => delete  props[key]);

        return (
            <Row type={"flex"}>
                <Col span={10}>
                    <Input {...props}
                           value={this.state.values[0]}
                           readOnly={true}
                           onClick={() => {
                               this.show();
                           }}/>
                </Col>
                <Col style={{marginLeft: 15}}>
                    <Button type="primary"
                            onClick={() => {
                                this.setState({
                                    values: this.getValues([])
                                })
                            }}>清除</Button>
                </Col>
            </Row>
        )
    }

    /**
     * 多选
     * @returns {null}
     */
    getMultipleShowComponent() {
        return null;
    }


    show = () => {
        this.toggle(true);
    };
    hide = () => {
        this.toggle(false);
    };

    toggle = (visible: boolean) => {
        this.setState({
            visible
        })
    };

    private getRows = () => {
        const table = this.refs[this.refTableName] as BaseLookupViewBaseListView<any, any, any, T, any>;

        return table.getSelectedRows();
    };

    private getValues = (rows: Array<T> = []) => {
        let values = this.props.showValue(rows);
        if (isNullOrUndefined(values)) {
            return [];
        }
        return isArray(values) ? values : [values];
    };

    private getModalPlan = () => {

        const {width, title, lookupTable, defaultSelectedRows, onOk, multiple, onCancel} = this.props;

        let C = lookupTable as any;


        const {visible, values} = this.state;

        let selectedRows = [];
        if (values.length > 0) {
            selectedRows = defaultSelectedRows
        }

        const tableProps: BaseLookupViewProps<T> = {
            selectedRows,
            onSelectedRow: onOk,
            multiple: isNullOrUndefined(multiple) ? false : multiple
        };

        return <Modal title={title ? title : "带回查找"}
                      width={width ? width : 800}
                      visible={visible}
                      okText="确认"
                      cancelText="取消"
                      onOk={() => {
                          let rows = this.getRows();
                          onOk(rows);
                          let values = this.getValues(rows);
                          this.setState({
                              values
                          });
                          this.hide();
                      }}
                      onCancel={() => {
                          this.hide();
                          if (!isNullOrUndefined(onCancel)) {
                              onCancel()
                          }
                      }}>
            <C ref={this.refTableName} {...tableProps as any} />
        </Modal>


    };

}
