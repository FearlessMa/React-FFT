/*
 * @Author: mhc 
 * @Date: 2018-04-24 16:42:41 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-07-03 21:49:05
 */

import { FUNDS_PUBLISH_LIST, FUNDS_OFFSHEF, FUNDS_PUBLISH_CREATE, PARENT_SC_FORFAITER_LIST, FORFAITER_LIST, SYNC_ALL_FORFAITER, FUNDS_RECEIVED_LIST, FUNDS_DETAIL_LIST, PRE_INQUIRY_OUR_BANK_LIST, PRE_INQUIRY_OUR_BANK_DETAIL, PRE_INQUIRY_OUR_BANK_DETAIL_HISTORY } from "./actionTypes";
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
            return Object.assign({}, state, {
                loading: false,
                parentScForfaiterList: {
                    ...action
                }
            });
        //接收到的资金列表
        case FUNDS_RECEIVED_LIST:
            return Object.assign({}, state, {
                loading: false,
                receivedList: {
                    ...action
                }
            });
        //资金详情
        case FUNDS_DETAIL_LIST:
            return Object.assign({}, state, {
                loading: false,
                fundsDetail: {
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

/**------------------询价-------------------------**/

export const preInquiryPriceModule = (state = {}, action) => {
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
        case PRE_INQUIRY_OUR_BANK_LIST:
            return Object.assign({}, state, {
                ourBankList: {
                    ...action
                }
            })
        case PRE_INQUIRY_OUR_BANK_DETAIL:
            return Object.assign({}, state, {
                ourBankDetail: {
                    ...action
                }
            })
        case PRE_INQUIRY_OUR_BANK_DETAIL_HISTORY:
            return Object.assign({}, state, {
                ourBankDetailHistory: {
                    ...action
                }
            })
        default:
            return state
    }
}






// /**------------------字典 dict-------------------------**/
// const dictModuleInitvalue = {}

// export const dictModule = (state = dictModuleInitvalue, action) => {
//     switch (action.type) {
//         //loading
//         case LOADING:
//             return Object.assign({}, state, {
//                 loading: true,
//             });
//         //请求错误
//         case REQUEST_ERR:
//             return Object.assign({}, state, {
//                 loading: false,
//                 requestErr: {
//                     ...action
//                 }
//             });
//         //请求字列表
//         case DICT_LIST:
//             return Object.assign({}, state, {
//                 loading: false,
//                 dictList: {
//                     ...action
//                 }
//             });
//         //字典详情
//         case DICT_DETAIL:
//             return Object.assign({}, state, {
//                 loading: false,
//                 dictDetail: {
//                     ...action
//                 }
//             });
//         //删除字典
//         case DICT_DELETE:
//             return Object.assign({}, state, {
//                 loading: false,
//                 dictDelete: {
//                     ...action
//                 }
//             });

//         default:
//             return state;
//     }
// }