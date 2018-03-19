/**
 * Created by MHC on 2018/3/13.
 */

import { put, call,take, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
    QUERYORGLIST, REQUESTORG, REQUESTERR, ERROR, LOADING, ALLORGLIST, REQUESTALLORG,
    REQUESTORGCREATE, ORGCREATE, REQUESTORGDETAIL, ORGDETAIL, REQUESTORGDELETE, ORGDELETE
} from "./actionTypes";

//创建机构index
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
        console.log('listdata');
        console.log(data);
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
        yield put({type:LOADING});
        const res = yield call(axios.post,'/org/create',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:ORGCREATE,...data})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}

// Path：/org/detail
// Method：POST
//detail REQUESTORGID
export function * watchRequestOrgDetail(){
    while(true){
        const action = yield take(REQUESTORGDETAIL);
        yield fork(orgDetail,action);
    }
}

function * orgDetail(action) {
    console.log('action');
    console.log(action);
    try{
        yield put({type:LOADING});
        const res = yield call(axios.post,'/org/detail',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:ORGDETAIL,...data})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}


// Path：/org/delete
// Method：POST
// TeslaFunctionName：cancelOrg

export function * watchRequestOrgDelete(){
    while(true){
        const action = yield take(REQUESTORGDELETE);
        yield fork(orgDelete,action);
    }
}

function * orgDelete(action) {
    console.log('action');
    console.log(action);
    try{
        yield put({type:LOADING});
        const res = yield call(axios.post,'/org/delete',{...action});
        const data = res.data;
        if(data.code === 200){
            yield put({type:ORGDELETE,...data})
        }else {
            yield put({type:REQUESTERR,...data})
        }
    }catch (err){
        yield put({type:ERROR,...err})
    }
}
