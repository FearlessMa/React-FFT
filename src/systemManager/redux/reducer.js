/**
 * Created by MHC on 2018/3/13.
 */

import {QUERYORGLIST, LOADING, ALLORGLIST, REQUESTERR, ORGCREATE, ORGDETAIL,ORGDELETE } from "./actionTypes";
const initValue = {
        requestErr:{},
        // loading:false,
        index:{
            orgList:[],
        },
        create:{
            orgList:[]
        },
        detail:{
            detailData:{
                data:{org:{}}
            }

        }
};
export const organManager = (state=initValue,action)=>{

    switch(action.type){
        case QUERYORGLIST :
            return Object.assign({},{...state},{
                loading:false,
                index:{
                    ...action
                }
            });
        case LOADING :
            return Object.assign({},{...state},{
                loading:true,
            });
            //create页面
        case ALLORGLIST :
            return Object.assign({},{...state},{
                loading:false,
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
                create:{
                    createResult:action,
                    ...state.create
                }
            });
            //查看详情
        case ORGDETAIL :
            return Object.assign({},{...state},{
                detail:{
                    detailData:action,
                }
            });
            //删除机构
        case ORGDELETE :
            return Object.assign({},{...state},{
                detail:{
                    detailData:state.detail.detailData,
                    orgDelete :action
                }
            });
        default :
            return state
    }
};