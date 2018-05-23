import React from 'react';
import {Icon, Input} from 'antd';
import * as styles from './style.less';

const map = {
    UserName: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="user" className={styles.prefixIcon}/>,
            placeholder: '登录用户名',
        },
        rules: [
            {
                required: true,
                message: '请填写用户名',
            },
        ],
    },
    Password: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="lock" className={styles.prefixIcon}/>,
            type: 'password',
            placeholder: '登录密码',
        },
        rules: [
            {
                required: true,
                message: '请输入密码',
            },
        ],
    },
    Mobile: {
        component: Input,
        props: {
            size: 'large',
            prefix: <Icon type="mobile" className={styles.prefixIcon}/>,
            placeholder: '手机号码',
        },
        rules: [
            {
                required: true,
                message: '请输入手机号码!',
            },
            {
                pattern: /^1\d{10}$/,
                message: '手机号码格式错误',
            },
        ],
    },
    Captcha: {
        component: Input,
        props: {
            size: 'large',
            maxLength:6,
            prefix: <Icon type="mail" className={styles.prefixIcon}/>,
            placeholder: '手机验证码',
        },
        rules: [
            {
                required: true,
                message: '请输入验证码',
            },
        ],
    },
    PictureCode:{
        component: Input,
        props: {
            size: 'large',
            maxLength:4,
            prefix: <Icon type="code" className={styles.prefixIcon}/>,
            placeholder: '图片验证码',
        },
        rules: [
            {
                required: true,
                message: '请输入图片验证码',
            },
        ],
    }
};

export default map;
