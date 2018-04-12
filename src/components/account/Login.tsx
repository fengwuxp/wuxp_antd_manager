import * as React from 'react';
import {Checkbox, Alert, Icon} from 'antd';
import Login from "ant-design-pro/lib/Login";
import {Link} from "react-router-dom";
import * as styles from './Login.scss';

const {Tab, UserName, Password, Mobile, Captcha, Submit} = Login;


export interface LoginPageProps {
    login: {
        status?: string,
        type?: string,
        submitting?: string
    },

    submitting: boolean
}

export default class LoginPage extends React.Component<LoginPageProps, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }

    state = {
        type: 'account',
        autoLogin: true,
    };

    onTabChange = type => {
        this.setState({type});
    };

    handleSubmit = (err, values) => {
        const {type} = this.state;

    };

    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked,
        });
    };

    renderMessage = content => {
        return <Alert style={{marginBottom: 24}} message={content} type="error" showIcon/>;
    };

    render() {
        // {
        //     login: {
        //         type: "",
        //             status: "",
        //             submitting: ""
        //     },
        //     submitting: false
        // }
        const {login, submitting} = this.props;

        const {type} = this.state;

        return (
            <div className={styles.main}>
                <Login defaultActiveKey={type} onTabChange={this.onTabChange} onSubmit={this.handleSubmit}>
                    <Tab key="account" tab="账户密码登录">
                        {login.status === 'error' && login.type === 'account' && !login.submitting && this.renderMessage('账户或密码错误')}
                        <UserName name="userName" placeholder="请填写登录账号"/>
                        <Password name="password" placeholder="请填写登录密码"/>
                    </Tab>
                    <Tab key="mobile" tab="手机号登录">
                        {login.status === 'error' && login.type === 'mobile' && !login.submitting && this.renderMessage('验证码错误')}
                        <Mobile name="mobile"/>
                        <Captcha name="captcha"/>
                    </Tab>
                    <div>
                        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
                        <a style={{float: 'right'}} href="">忘记密码</a>
                    </div>
                    <Submit loading={submitting}>登录</Submit>
                    <div className={styles.other}>
                        其他登录方式
                        <Icon className={styles.icon} type="alipay-circle"/>
                        <Icon className={styles.icon} type="taobao-circle"/>
                        <Icon className={styles.icon} type="weibo-circle"/>
                        <Link className={styles.register} to="/user/register">注册账户</Link>
                    </div>
                </Login>
            </div>
        );
    }
}
