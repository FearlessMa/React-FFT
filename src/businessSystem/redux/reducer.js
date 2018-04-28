/*
 * @Author: mhc 
 * @Date: 2018-04-24 16:42:41 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-28 10:21:54
 */

import { FUNDS_PUBLISH_LIST, FUNDS_OFFSHEF, FUNDS_PUBLISH_CREATE, PARENT_SC_FORFAITER_LIST, FORFAITER_LIST, SYNC_ALL_FORFAITER } from "./actionTypes";
import { REQUEST_ERR } from "../../login/redux/actionTypes";
import { LOADING } from "../../systemManager/redux/actionTypes";



/**------------------资金Reducer-------------------------**/

const fundsInitValue = {
    // loading:false
};
export const fundsModule = (state = fundsInitValue, action) => {
    switch (action.type) {
        //loading
        case LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        //请求错误
        case REQUEST_ERR:
            return Object.assign({}, state, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        //我发布的资金列表数据
        case FUNDS_PUBLISH_LIST:
            return Object.assign({}, state, {
                loading: false,
                publishList: {
                    ...action
                }
            });
        //资金下架
        case FUNDS_OFFSHEF:
            return Object.assign({}, state, {
                loading: false,
                offshef: {
                    ...action
                }
            });
        //create publish
        case FUNDS_PUBLISH_CREATE:
            return Object.assign({}, state, {
                publishCreate: {
                    ...action
                }
            });
        //创建页 包买商列表
        case PARENT_SC_FORFAITER_LIST:
            // if (action.data.forfaiterList[0]['isRoot'] === '1') {
            //     action.data.forfaiterList.map((item) => {
            //         item.children = [];
            //     })
            // }else{
            //     state.parentScForfaiterList.data.forfaiterList.find((item)=>{
            //         item.swiftCode
            //     })
            // }
            return Object.assign({}, state, {
                loading: false,
                parentScForfaiterList: {
                    ...action
                }
            });

        default:
            return state;
    }
}


/**------------------包买商 forfaiter-------------------------**/
const forfaiterInitvalue = {}
export const forfaiterModule = (state = forfaiterInitvalue, action) => {
    switch (action.type) {
        //loading
        case LOADING:
            return Object.assign({}, state, {
                loading: true,
            });
        //请求错误
        case REQUEST_ERR:
            return Object.assign({}, state, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        //forfaiterList
        case FORFAITER_LIST:
            return Object.assign({}, state, {
                loading: false,
                forfaiterList: {
                    ...action
                }
            });
        //syncAllForfaiter
        case SYNC_ALL_FORFAITER:
            return Object.assign({}, state, {
                loading: false,
                syncAllForfaiter: {
                    ...action
                }
            });
        default:
            return state;
    }
}