import * as React from "react";
import {ModalFuncProps} from "antd/lib/modal";
import Modal from "antd/lib/modal/Modal";


export default class LookupHelper {


    public static showLookupHelper = (props: ModalFuncProps) => {

        const oldOk = props.onOk;
        const oldOnCancel = props.onCancel;

        props.onOk = () => {
            console.log(props.content);
            oldOk();
        };

        const modal = Modal.confirm(props);

        props.onCancel = () => {
            oldOnCancel();
            modal.destroy;
        };
    }

}
