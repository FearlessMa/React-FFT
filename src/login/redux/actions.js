/**
 * Created by MHC on 2018/2/14.
 */
import {LOGIN_REQUEST, IS_AUTHEN, CLEAR_ERR_MSG} from "./actionTypes";

// 登录
export const loginAction = (userName, password) => ({
    type: LOGIN_REQUEST,
    userName,
    password
});

// 认证
export const authenticatedAction = (isAuthenticated1) => {
    return {
        type: IS_AUTHEN,
        isLogin: isAuthenticated1
    }
};
// 清除错误信息
export const clearErrMsgAction = () => ({
    type: CLEAR_ERR_MSG
});

