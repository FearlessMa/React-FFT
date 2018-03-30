import {LOGIN, LOGIN_ERR, IS_AUTHEN, CLEAR_ERR_MSG, LOADING} from "./actionTypes";
import {LOGOUT} from "../../home/index";
import {STOREMENULIST} from './../../routers';

const storeInitValues = {
    userData: {},
};

const loginReducer = (state = storeInitValues, action) => {
    switch (action.type) {
        //登录
        case LOGIN :
            return Object.assign({}, {...state}, {
                isLogin: !state.isLogin,
                loading: false,
                userData: {
                    ...action
                }
            });
        //登录错误
        case LOGIN_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                userData: {
                    ...action
                }
            });
        //退出登录
        case LOGOUT :
            return Object.assign({}, {...state}, {
                loading: false,
                isLogin: action.isLogin,
                userData: {}
            });
        //认证身份
        case IS_AUTHEN :
            return Object.assign({}, {...state},
                {
                    isLogin: action.isLogin,
                });
        //清除错误信息
        case CLEAR_ERR_MSG :
            return Object.assign({}, {...state}, {
                loading: false,
                userData: {}
            });
        //把session里menuList存到store
        case STOREMENULIST :
            return Object.assign({}, {...state}, {
                userData: action.userData
            });
        //loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true
            });
        default :
            return state;
    }
};

export {loginReducer}