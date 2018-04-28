/*
 * @Author: mhc 
 * @Date: 2018-04-24 16:42:02 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-28 13:58:14
 */

import { REQUEST_FUNDS_PUBLISH_LIST, REQUEST_FUNDS_OFFSHEF, REQUEST_FUNDS_PUBLISH_CREATE, REQUEST_PARENT_SC_FORFAITER_LIST, REQUEST_FORFAITER_LIST, REQUEST_SYNC_ALL_FORFAITER } from "./actionTypes";

/**---------fundsModule-资金-----------**/

//发布资金列表查询
export const requestFundsPublishList = values => ({
    type: REQUEST_FUNDS_PUBLISH_LIST,
    ...values
});

//资金下架
export const requestFundsOffshef = values => ({
    type: REQUEST_FUNDS_OFFSHEF,
    ...values
})

//发布资金
export const requestFundsPublishCreate = values => ({
    type: REQUEST_FUNDS_PUBLISH_CREATE,
    ...values
})

//根据BIC查询下一级包买商集合
export const reuqestParentScForfaiterList = values => ({
    type: REQUEST_PARENT_SC_FORFAITER_LIST,
    ...values
})

/**---------forfaiter------------**/

export const requestForfaiterList = values => ({
    type: REQUEST_FORFAITER_LIST,
    ...values
})
export const requestSyncAllForfaiter = values => ({
    type: REQUEST_SYNC_ALL_FORFAITER,
    ...values
})
