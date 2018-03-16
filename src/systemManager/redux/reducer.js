/**
 * Created by MHC on 2018/3/13.
 */

import {QUERYORGLIST, LOADING, ALLORGLIST, REQUESTERR, ORGCREATE} from "./actionTypes";
const initValue = {
    organManager:{
        orgList:[],
        loading:false
    },
    orgListAll : {
        orgList:[]
    }
};
export const systemReducer = (state=initValue,action)=>{
    switch(action.type){
        case QUERYORGLIST :
            return Object.assign({},{...state},{
                organManager:{
                    loading:false,
                    ...action
                }
            });
        case LOADING :
            return Object.assign({},{...state},{
                organManager:{
                    loading:true,
                }
            });
            //orgList
        case ALLORGLIST :
            return Object.assign({},{...state},{
                orgListAll : {
                    ...action
                }
            });
            //请求错误
        case REQUESTERR :
            return Object.assign({},{...state},{
                requestErr : {
                    ...action
                }
            });
            //创建机构
        case ORGCREATE :
            return Object.assign({},{...state},{
                orgCreate : true
            });
        default :
            return state
    }
};