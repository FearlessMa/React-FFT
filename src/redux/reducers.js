/**
 * Created by MHC on 2018/2/13.
 */

/*
*   store = {
*       login : {
*           isLogin : bool,
*           userData : {}
*       },
*   }
*
* */
import { combineReducers } from 'redux';
import {loginReducer} from "../login/redux/reducer";
// import {logoutReducer} from "../home/redux/reducer";

// const storeInitValues = {
//     login : {
//         isLogin : false,
//         userData : {}
//     }
// }



const reducers = combineReducers({
    login: loginReducer,
    // logout: logoutReducer
});

export  default reducers ;
