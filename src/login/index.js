/**
 * Created by MHC on 2018/2/14.
 */
import React from 'react';
import { Input, Button, Icon, Form, message } from 'antd';
import { connect } from 'react-redux';
import Log from 'img/AntdLog.svg';
import Antd from 'img/Antd.svg';
import './index.less';
import { loginAction, clearErrMsgAction } from "./redux/actions";
import { loginReducer } from "./redux/reducer";
import { LOGIN_ERR } from "./redux/actionTypes";


const FormItem = Form.Item;

const FromCreate = Form.create;

const mapStateToProps = state => ({
    loading: state.login.loading,
    login: state.login
});
const mapDispatchToProps = dispatch => ({
    onLogin: (userName, password) => dispatch(loginAction(userName, password)),
    clearErrMsg: () => dispatch(clearErrMsgAction())
});

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginComponent extends React.Component {
    constructor(...arg) {
        super(...arg);
        const sessionAuth = sessionStorage.getItem('isAuthenticated');
        const userData = sessionStorage.getItem('userData');
        if (sessionAuth && userData) {
            this.props.history.push("/");
        }
        this.state = {
            isLoading: false
        }
    }

    toLogin = (values) => {
        this.props.onLogin(values.userName, values.password);
    }

    componentWillReceiveProps(nextProps) {
        const { type } = nextProps.login.userData;
        //验证失败提示
        if (type === LOGIN_ERR) {
            message.error(nextProps.login.userData.message);
            this.props.clearErrMsg();
        }
        // 登录成功后存储登录状态
        if (nextProps.login.isLogin) {
            sessionStorage.setItem('isAuthenticated', true);
            this.props.history.push("/");
        }
    }

    render() {
        // const {type} = this.props.login.userData;
        // //验证失败提示
        // if (type === LOGIN_ERR) {
        //     message.error(this.props.login.userData.message);
        //     this.props.clearErrMsg();
        // }
        // // 登录成功后存储登录状态
        // if (this.props.login.isLogin) {
        //     sessionStorage.setItem('isAuthenticated', true);
        //     this.props.history.push("/");
        // }
        return (
            <React.Fragment>
                <Login {...this.props} toLogin={this.toLogin} />
            </React.Fragment>
        );
    }


}

@FromCreate()
class Login extends React.Component {

    // constructor(...arg) {
    //     super(...arg);
    // }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.toLogin(values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit} className="login-form">
                    <div className='loginIcon'>
                        <img src={Log} alt="" />
                        <img src={Antd} alt="" />
                    </div>
                    <FormItem>
                        {
                            getFieldDecorator('userName', {
                                rules: [{
                                    required: true,
                                    message: '请输入你的用户名！'
                                }],
                                initialValue: 'admin'
                            }
                            )(<Input type={'text'}
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={'Username'} />)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                rules: [{
                                    required: true,
                                    message: '请输入你的密码！'
                                }],
                                initialValue: '12345'
                            }
                            )(<Input type={'password'}
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder={'Password'} />)
                        }
                    </FormItem>
                    <FormItem>
                        <Button loading={this.props.loading} type={'primary'}
                            htmlType={'submit'}
                            style={{ width: '100%' }}>Login In</Button>
                    </FormItem>
                </Form>
            </React.Fragment>
        );
    }

}

export { loginReducer }