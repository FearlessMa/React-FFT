/**
 * Created by MHC on 2018/3/13.
 */

import { put, call,take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
    QUERYORGLIST, REQUESTORG, REQUESTERR, ERROR, LOADING, ALLORGLIST, REQUESTALLORG,
    REQUESTORGCREATE, ORGCREATE
} from "./actionTypes";

export function* watchQueryOrgList() {
    while(true){
        const action = yield take(REQUESTORG);
        yield fork(orgListRequest,action);
    }
}

function* orgListRequest(action) {

    try{
        yield put({type:LOADING});
        const res = yield call(axios.post,'/org/list',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:QUERYORGLIST,...data})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}

//create.js拉取上级机构数据
export function* watchQueryAllOrgList() {
    while(true){
        const action = yield take(REQUESTALLORG);
        yield fork(requestAllOrgList,action);
    }
}

function* requestAllOrgList(action) {

    try{
        // yield put({type:LOADING});
        const res = yield call(axios.post,'/org/listAll',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:ALLORGLIST,...data.data})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}

//create创建机构
//create.js拉取上级机构数据
export function* watchRequestOrgCreate() {
    while(true){
        const action = yield take(REQUESTORGCREATE);
        yield fork(orgCreate,action);
    }
}

function* orgCreate(action) {

    try{
        // yield put({type:LOADING});
        const res = yield call(axios.post,'/org/create',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:ORGCREATE})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}