/*
 * @Author: mhc 
 * @Date: 2018-04-24 16:41:51 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-28 13:58:58
 */

import { requestData, alertNotification } from 'common';
import { take, fork } from 'redux-saga/effects';
import { REQUEST_FUNDS_PUBLISH_LIST, FUNDS_PUBLISH_LIST, FUNDS_OFFSHEF, REQUEST_FUNDS_OFFSHEF, REQUEST_FUNDS_PUBLISH_CREATE, FUNDS_PUBLISH_CREATE, REQUEST_PARENT_SC_FORFAITER_LIST, PARENT_SC_FORFAITER_LIST, REQUEST_FORFAITER_LIST, FORFAITER_LIST, REQUEST_SYNC_ALL_FORFAITER, SYNC_ALL_FORFAITER } from './actionTypes';
import { requestFundsPublishList, requestForfaiterList } from './actions';
import { store } from '../../index';

// const createSucc = data => {
//     alertNotification('创建成功', data)
// };
// const editSucc = data => {
//     alertNotification('修改成功', data)
// };
// const deleteSuccModal = (data) => {
//     alertModal('删除成功', data)
// };
// const deleteSuccNot = (data) => {
//     alertNotification('删除成功', data)
// };


/*********---------------fundsModule-----fundsPublish-----------------**********/

//index
/**
 *  Path：/capital/listPublishedCapital
 *  Method：POST
 **/
export function* watchRequestFundsPublish() {
    while (true) {
        const action = yield take(REQUEST_FUNDS_PUBLISH_LIST);
        yield fork(requestData, {
            action,
            url: '/capital/listPublishedCapital',
            type: FUNDS_PUBLISH_LIST,
            loadingMsg: '正在加载发布的资金信息...',
            dispatchLoading: true
        });
    }
}

/**
 * Path：/capital/offshelf
 * Method：POST
**/
export function* watchRequestFundsOffshef() {
    while (true) {
        const action = yield take(REQUEST_FUNDS_OFFSHEF);
        yield fork(requestData, {
            action,
            url: '/capital/offshelf',
            type: FUNDS_OFFSHEF,
            loadingMsg: '下架处理中...',
            dispatchLoading: true
        }, null, offshelfCallback)
    }
}
const offshelfCallback = (data) => {
    if (data.code === 200) {
        alertNotification(data.message, data.message);
        store.dispatch(requestFundsPublishList())
    }
}

/** 创建资金
 * Path：/capital/publish
 * Method：POST
**/

export function* watchRequestPublishCreate() {
    while (true) {
        const action = yield take(REQUEST_FUNDS_PUBLISH_CREATE);
        yield fork(requestData, {
            action,
            url: '/capital/publish',
            type: FUNDS_PUBLISH_CREATE,
            loadingMsg: '资金发布中...',
        }, null, publishCreateCallback)
    }
}

const publishCreateCallback = (data) => {
    if (data.code === 200) {
        alertNotification(data.message, data.message);
    }
}

/**
 * Path：/forfaiter/list
 * Method：POST
**/

export function* watchReuqestParentScForfaiterList() {
    while (true) {
        const action = yield take(REQUEST_PARENT_SC_FORFAITER_LIST);
        yield fork(requestData, {
            action,
            url: '/forfaiter/list',
            type: PARENT_SC_FORFAITER_LIST,
            loadingMsg: '包买商数据...'
        })
    }
}

/**包买商列表
 * Path：/forfaiter/list
 * Method：POST
**/

export function* watchReuqestForfaiterList() {
    while (true) {
        const action = yield take(REQUEST_FORFAITER_LIST);
        yield fork(requestData, {
            action,
            url: '/forfaiter/list',
            type: FORFAITER_LIST,
            loadingMsg: '包买商数据...',
            dispatchLoading: true
        })
    }
}

/**
 * Path：/forfaiter/syncAll
 * Method：POST
**/

export function* watchReuqestSyncAllForfaiterList() {
    while (true) {
        const action = yield take(REQUEST_SYNC_ALL_FORFAITER);
        yield fork(requestData, {
            action,
            url: '/forfaiter/syncAll',
            type: SYNC_ALL_FORFAITER,
            loadingMsg: '正在同步所有包买商...',
            dispatchLoading: true
        }, null, syncCallback)
    }
}
const syncCallback = (data) => {
    if (String(data.code) === '200'){
        alertNotification(data.message, data.message);
        store.dispatch(requestForfaiterList())
    }
}