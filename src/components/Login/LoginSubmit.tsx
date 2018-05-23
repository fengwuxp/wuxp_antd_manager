import * as React from 'react';
import classNames from 'classnames';
import {Button, Form} from 'antd';
import styles from './style.module.less';

const FormItem = Form.Item;

export default ({className, ...rest}) => {
    console.log("---------styles--------------", styles);
    const clsString = classNames(styles.submit, className);
    return (
        <FormItem>
            <Button size="large" className={clsString} type="primary" htmlType="submit" {...rest} />
        </FormItem>
    );
};
