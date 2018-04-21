import * as React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Row, Col} from 'antd';
import omit from 'omit.js';
import * as styles from './style.scss';
import map from './map';
import TimerUtil from "../../utils/timer/TimerUtil"
import {ReactBaseProps} from "wuxp_react_dynamic_router/src/model/model/ReactBaseProps";


const FormItem = Form.Item;

export interface LoginItemProps extends ReactBaseProps {
    name?: string;

    rules?: any[];

    onGetCaptcha?: () => Promise<any>;

    onChange: () => void;

    defaultValue?: string;

    placeholder?: string;

    value?: string;

    //图片验证码地址
    pictureCodeSrc?: string;
}


function generator({defaultProps, defaultRules, type}) {
    return WrappedComponent => {
        return class BasicComponent extends React.Component<LoginItemProps, any> {

            static contextTypes = {
                form: PropTypes.object,
                updateActive: PropTypes.func,
            };

            constructor(props) {
                super(props);
                this.state = {
                    count: 0,
                };
            }

            componentDidMount() {
                if (this.context.updateActive) {
                    this.context.updateActive(this.props.name);
                }
            }

            componentWillUnmount() {
            }

            onGetCaptcha = () => {
                if (this.props.onGetCaptcha) {

                    this.props.onGetCaptcha().then(() => {
                        let count = 60;
                        this.setState({count});
                        TimerUtil.countDown({
                            total: count,
                            callback: () => {
                                count--;
                                this.setState({count});
                            }
                        });
                    }).catch((e) => {
                        console.log(e);
                    });
                }

            };

            render() {
                const {getFieldDecorator} = this.context.form;

                const options: any = {};
                let otherProps = {};
                const {onChange, defaultValue, rules, name, ...restProps} = this.props;
                const {count} = this.state;
                options.rules = rules || defaultRules;
                if (onChange) {
                    options.onChange = onChange;
                }
                if (defaultValue) {
                    options.initialValue = defaultValue;
                }
                otherProps = restProps || otherProps;
                if (type === 'Captcha' || type === 'PictureCode') {
                    const inputProps = omit(otherProps, ['onGetCaptcha']);

                    return (
                        <FormItem>
                            <Row gutter={8}>
                                <Col span={16}>
                                    {getFieldDecorator(name, options)(
                                        <WrappedComponent {...defaultProps} {...inputProps} />
                                    )}
                                </Col>
                                <Col span={8} style={{textAlign:"right"}}>
                                    {
                                        type === 'Captcha' ? <Button
                                            disabled={count}
                                            className={styles.getCaptcha}
                                            size="large"
                                            onClick={this.onGetCaptcha}>
                                            {count ? `${count} s` : '获取验证码'}
                                        </Button> : <img src={this.props.pictureCodeSrc}
                                                         style={{width:100,height:38,paddingBottom:4}}
                                                         onClick={(event) => {
                                                             let element = event.target as HTMLImageElement;
                                                             element.src = element.src.split("?")[0] + new Date().getTime();
                                                         }
                                                         }/>
                                    }
                                </Col>
                            </Row>
                        </FormItem>
                    );
                }

                return (
                    <FormItem>
                        {getFieldDecorator(name, options)(
                            <WrappedComponent {...defaultProps} {...otherProps} />
                        )}
                    </FormItem>
                );
            }
        };
    };
}

const LoginItem = {};

Object.keys(map).forEach(item => {

    let rulesType: any = {
        defaultProps: map[item].props,
        defaultRules: map[item].rules,
        type: item,
    };

    if (item === "Mobile") {
        rulesType.defaultProps = {
            ...rulesType.defaultProps,
            maxLength: 11,
        };
    }
    LoginItem[item] = generator(rulesType)(map[item].component);
});

export default LoginItem
