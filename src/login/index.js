/**
 * Created by MHC on 2018/2/14.
 */
import React from 'react';
import { Input, Button, Icon, Form, message } from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Log  from 'img/AntdLog.svg';
import Antd from 'img/Antd.svg';
import './index.less';
import {loginAction, loadingAction, clearErrMsgAction } from "./redux/actions";
import {loginReducer} from "./redux/reducer";
import {LOGINERR} from "./redux/actionTypes";


const FormItem = Form.Item;
// const loginData = [
//     {
//         icon : 'user',
//         placeholder : 'username'
//     },
//     {
//         icon : 'lock',
//         placeholder : 'password'
//     },
// ];
const FromCreate =Form.create;

const mapStateToProps = (state)=>state;
const mapDispatchToProps = (dispatch)=>{
    return {
        onLogin : (userName,password)=>dispatch(loginAction(userName,password)),
        isLoading:()=>dispatch(loadingAction()),
        clearErrMsg: ()=>dispatch(clearErrMsgAction())
    }
};

@connect(mapStateToProps,mapDispatchToProps)
export default class LoginComponent extends React.Component{
    static contextTypes = {
        router : PropTypes.object
    }

    constructor(...arg){
        super(...arg);
        this.state = {
            isLoading:false
        }
    }

    toLogin = (values)=>{
        this.props.isLoading();
        this.props.onLogin(values.userName,values.password);
    }

    componentWillMount(){
        const sessionAuth = sessionStorage.getItem('isAuthenticated');
        if(sessionAuth){
            this.context.router.history.replace("/home");
        }
    }

    componentWillReceiveProps(nextProps){
        const {type } =nextProps.login.userData;
        if(type === LOGINERR){
            message.error(nextProps.login.userData.message);
            this.props.clearErrMsg();
        }
        if(nextProps.login.isLogin){
            sessionStorage.setItem('isAuthenticated',true);
            // console.log('this.props************');
            // console.log(this.props);
            this.context.router.history.replace("/home");
        }
    }

    render(){
            return (
                <React.Fragment>
                    <Login {...this.props.login} toLogin={this.toLogin}/>
                </React.Fragment>
            );
    }


}

@FromCreate()
class Login extends React.Component {

    constructor(...arg) {
        super(...arg);
        this.state = {
            loading: false,
        }
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            loading: true
        });
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.toLogin(values);
            }else{
                this.setState({
                    loading : false
                })
            }
        });
    }

    componentWillReceiveProps(nextProps){
            this.setState({
                loading:nextProps.isLoading
            });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit} className="login-form">
                    <div className='loginIcon'>
                        <img src={Log} alt=""/>
                        <img src={Antd} alt=""/>
                    </div>
                    <FormItem>
                        {
                            getFieldDecorator( 'userName',{
                                    rules:[{
                                        required: true,
                                        message: '请输入你的用户名！'
                                    }],
                                    initialValue:'admin'
                                }
                            )(<Input type={'text'}
                                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                     placeholder={'Username'}/>)
                        }
                    </FormItem>
                    <FormItem>
                        {
                            getFieldDecorator( 'password',{
                                    rules:[{
                                        required: true,
                                        message: '请输入你的密码！'
                                    }],
                                    initialValue:'12345'
                                }
                            )(<Input type={'password'}
                                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}} />}
                                     placeholder={'Password'}/>)
                        }
                    </FormItem>
                    <FormItem>
                        <Button loading={this.state.loading} type={'primary'}
                                htmlType={'submit'}
                                style={{width:'100%'}}>Login In</Button>
                    </FormItem>
                </Form>
            </React.Fragment>
        );
    }

}

export {loginReducer}