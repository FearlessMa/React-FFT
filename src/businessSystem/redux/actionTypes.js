/*
 * @Author: mhc 
 * @Date: 2018-04-24 16:42:22 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-03 09:51:16
 */


/**---------buinessSystem-----------**/

/**---------fundsModule-资金-----------**/

//  reducer
export const FUNDS_PUBLISH_LIST = 'fundsPublishList';
export const FUNDS_OFFSHEF = 'fundsOffshef';
export const FUNDS_PUBLISH_CREATE = 'fundsPublishCreate';
export const FUNDS_RECEIVED_LIST = 'fundsReceivedList';
export const FUNDS_DETAIL_LIST = 'fundsDetailList';

//根据BIC查询下一级包买商集合
export const PARENT_SC_FORFAITER_LIST = 'parentScForfaiterList';
//  saga
export const REQUEST_FUNDS_PUBLISH_LIST = 'requestFundsPublishList';
export const REQUEST_FUNDS_OFFSHEF = 'requestFundsOffshef';
export const REQUEST_FUNDS_PUBLISH_CREATE = 'requestFundsPublishCreate';
export const REQUEST_FUNDS_RECEIVED_LIST = 'requestFundsReceivedList';
export const REQUEST_FUNDS_DETAIL_LIST = 'requestFundsDetailList';


//根据BIC查询下一级包买商集合
export const REQUEST_PARENT_SC_FORFAITER_LIST = 'requestParentScForfaiterList';


/**---------forfaiter------------**/

// reducer
export const FORFAITER_LIST = 'forfaiterList';
export const SYNC_ALL_FORFAITER = 'syncAllForfaiter';

// saga
export const REQUEST_FORFAITER_LIST = 'requestForfaiterList';
export const REQUEST_SYNC_ALL_FORFAITER = 'requestSyncAllForfaiter';



