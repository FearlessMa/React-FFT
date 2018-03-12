/**
 * Created by MHC on 2018/2/14.
 */
import { LOGIN_REQUEST, ISLOADING, ISAUTHEN, CLEARERRMSG } from "./actionTypes";


const loginAction = (userName,password)=>({
    type : LOGIN_REQUEST,
    userName,
    password
});

const loadingAction = ()=>({
    type : ISLOADING,
});

const authenticatedAction = (isAuthenticated1)=>{
    return {
        type:ISAUTHEN,
        isLogin: isAuthenticated1
    }
};

const clearErrMsgAction = ()=>({
    type : CLEARERRMSG
});



export { loginAction, loadingAction, authenticatedAction, clearErrMsgAction };