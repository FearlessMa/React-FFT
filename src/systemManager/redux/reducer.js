/**
 * Created by MHC on 2018/3/13.
 */

import {QUERYORGLIST, LOADING, ALLORGLIST, REQUESTERR, ORGCREATE} from "./actionTypes";
const initValue = {
        requestErr:{},
        index:{
            orgList:[],
            loading:false,
        },
        create:{
            orgList:[]
        },
};
export const organManager = (state=initValue,action)=>{

    switch(action.type){
        case QUERYORGLIST :
            return Object.assign({},{...state},{
                index:{
                    loading:false,
                    ...action
                }
            });
        case LOADING :
            return Object.assign({},{...state},{
                index:{
                    loading:true,
                    orgList:[],
                }
            });
            //create页面
        case ALLORGLIST :
            return Object.assign({},{...state},{
                create : {
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