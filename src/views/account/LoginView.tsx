import * as React from 'react';
import {Checkbox, Alert, message} from 'antd';
import Login from "../../components/Login/";
import * as styles from './Login.scss';
import {sessionManager} from "../../manager/session/SessionManager";
import {ReactReduxConnect} from "wuxp_react_dynamic_router/src/decorator/ReactReduxConnect";
import {LoginType} from "../../enums/AdminLoginType";
import {MapStateToPropsParam} from 'react-redux';
import {AntdAdmin, SessionStatus} from "../../model/session/AntdAdmin";

const {Tab, UserName, Password, Mobile, Captcha, Submit, PictureCode} = Login as any;


export interface LoginPageProps {
    session: {
        admin: AntdAdmin,
        status: SessionStatus,
        type: string,
        submitting?: string
    },

    submitting: boolean
}

const mapStateToPropsParam: MapStateToPropsParam<any, any, any> = ({session}) => ({
    session
});

@ReactReduxConnect(mapStateToPropsParam)
export default class LoginView extends React.Component<LoginPageProps, any> {


    constructor(props: any, context: any) {
        super(props, context);
    }

    state = {
        type: LoginType.ACCOUNT,
        autoLogin: true,
        //是否有点击获取过手机验证码
        hasGetMobileCaptcha: false,
        mobilePhone: ""
    };

    onTabChange = type => {
        this.setState({type});
    };

    handleSubmit = (err, values) => {
        console.log(err);
        console.log(values);
        if (!err) {
            sessionManager.login({
                type: this.state.type,
                userName: "123",
                password: "455"
            });
        }
    };

    changeAutoLogin = e => {
        this.setState({
            autoLogin: e.target.checked,
        });
    };

    renderMessage = content => {
        return <Alert style={{marginBottom: 24}} message={content} type="error" showIcon/>;
    };

    onChange = (changedFields) => {
        if (this.state.type === LoginType.MOBILE_PHONE) {
            //使用手机号码登录
            const {mobilePhone} = changedFields;
            this.setState({
                mobilePhone
            })
        }
    };


    /**
     * 获取手机验证码
     * @returns {Promise<boolean>}
     */
    onGetMobileCaptcha = (): Promise<boolean> => {
        if (!this.state.hasGetMobileCaptcha) {
            this.setState({
                hasGetMobileCaptcha: true
            });
        }
        if (this.state.mobilePhone.trim().length < 11) {
            message.warn("手机号码不足11位");
            return Promise.reject(false)
        }

        //TODO请求手机验证码

        return Promise.resolve(true);

    };

    render() {

        const {session, submitting} = this.props;

        const {type} = this.state;
        console.log(this.props);

        return (
            <div className={styles.main}>
                <Login ref="loginFrom"
                       onChange={this.onChange}
                       defaultActiveKey={session.type}
                       onTabChange={this.onTabChange}
                       onSubmit={this.handleSubmit}>
                    <Tab key={LoginType.ACCOUNT} tab="账户密码登录">
                        {session.status === SessionStatus.LOGIN_ERROR && session.type === LoginType.ACCOUNT && !session.submitting && this.renderMessage('账户或密码错误')}
                        <UserName rules={[{required: true, message: "登录账号"}]}
                                  name="userName"
                                  placeholder="请填写登录账号"/>
                        <Password rules={[{required: true, message: '写登录密码'}]}
                                  name="password"
                                  placeholder="请填写登录密码"/>
                        <PictureCode name="pictureCode"
                                     pictureCodeSrc={`${process.env.ROOT_DOMAIN}/login/captcha.htm`}/>

                    </Tab>
                    <Tab key={LoginType.MOBILE_PHONE} tab="手机号登录">
                        {session.status === SessionStatus.LOGIN_ERROR && session.type === LoginType.ACCOUNT && !session.submitting && this.renderMessage('验证码错误')}
                        <Mobile name="mobilePhone"/>
                        <Captcha name="captcha" onGetCaptcha={this.onGetMobileCaptcha}/>
                    </Tab>
                    <div>
                        <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>自动登录</Checkbox>
                        <a style={{float: 'right'}} href="">忘记密码</a>
                    </div>
                    <Submit loading={submitting}>登录</Submit>
                </Login>
            </div>
        );
    }
}
