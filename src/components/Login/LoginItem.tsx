import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Row, Col} from 'antd';
import omit from 'omit';
import styles from './style.scss';
import map from './map';
import TimerUtil from "../../utils/timer/TimerUtil"


const FormItem = Form.Item;

export interface LoginItemProps {
    name?: string;
    rules?: any[];
    style?: React.CSSProperties;
    onGetCaptcha?: () => Promise<any>;
    onChange: () => void;
    defaultValue?: string;
    placeholder?: string;
    value?: string;
}


function generator({defaultProps, defaultRules, type}) {
    return WrappedComponent => {
        return class BasicComponent extends Component<LoginItemProps, any> {

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
                let count = 59;
                this.setState({count});
                this.props.onGetCaptcha().then(() => {
                    TimerUtil.countDown({
                        total: 60,
                        callback: () => {
                            count--;
                            this.setState({count});
                            if (count > 0) {

                            }
                        }
                    });
                }).catch((e) => {
                    console.log(e);
                });

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
                if (type === 'Captcha') {
                    const inputProps = omit(otherProps, ['onGetCaptcha']);
                    return (
                        <FormItem>
                            <Row gutter={8}>
                                <Col span={16}>
                                    {getFieldDecorator(name, options)(
                                        <WrappedComponent {...defaultProps} {...inputProps} />
                                    )}
                                </Col>
                                <Col span={8}>
                                    <Button
                                        disabled={count}
                                        className={styles.getCaptcha}
                                        size="large"
                                        onClick={this.onGetCaptcha}
                                    >
                                        {count ? `${count} s` : '获取验证码'}
                                    </Button>
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
    LoginItem[item] = generator({
        defaultProps: map[item].props,
        defaultRules: map[item].rules,
        type: item,
    })(map[item].component);
});

export  {
    LoginItem
};
