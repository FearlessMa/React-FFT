/**
 * Created by MHC on 2018/2/14.
 */
import {LOGOUT} from "./actionTypes";

export const logoutReducer = (state,action)=>{
    console.log(state);
    switch(action.type){
        case LOGOUT :
            return Object.assign({},state,{ login:{isLogin:action.isLogin}});
        default :
            return state;
    }
};