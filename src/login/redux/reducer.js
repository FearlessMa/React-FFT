

import { LOGIN, LOGINERR, ISLOADING, ISAUTHEN, CLEARERRMSG } from "./actionTypes";
import {LOGOUT} from "../../home/index";
import { STOREMENULIST } from './../../routers';
const storeInitValues = {
        isLogin : false,
        isLoading:false,
        userData : {}
};

const loginReducer = (state=storeInitValues,action)=>{
    switch(action.type){
        case ISLOADING :
            return Object.assign({},{...state},{isLoading:!state.isLoading})
        case LOGIN :
                return Object.assign({},{...state},
                    {
                        isLogin:!state.isLogin,
                        isLoading:!state.isLoading,
                        userData:{
                            ...action
                        }
                    });
        case LOGINERR :
                return Object.assign({},{...state},{
                    isLoading:!state.isLoading,
                    userData:{
                        ...action
                    }
                });
        case LOGOUT :
            return Object.assign({},{...state},
            {
                isLogin:action.isLogin,
                userData:{}
            });
        case ISAUTHEN :
            return Object.assign({},{...state},
                {
                    isLogin:action.isLogin,
                });
        case CLEARERRMSG :
            return Object.assign({},{...state},{
                userData: {}
            });
        case STOREMENULIST :
            return Object.assign({},{...state},{userData:action.userData});
        default :
            return state;
    }
};

export {loginReducer}