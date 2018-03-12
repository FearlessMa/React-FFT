/**
 * Created by MHC on 2018/3/1.
 */

// import { takeEvery,takeLatest } from 'redux-saga';
import { put, call,take, fork } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN, LOGIN_REQUEST, LOGINERR, LOGIN_ERR } from './actionTypes';
// axios.post('/login.json',{uname:'123',pwd:'345'})
//     .then((resolve)=>{console.log(resolve.data)})
//     .catch((err)=>err);


export function * watchLoginAction() {
    // yield * takeLatest(LOGIN_REQUEST,loginRequest)
    while(true){
        const action = yield take(LOGIN_REQUEST);
        yield fork(loginRequest,action);
        yield take(['logout',LOGIN_ERR,LOGINERR])
    }

}

function * loginRequest(action) {
    console.log(action);
    const {userName, password} = action;
    try{
        const res = yield call(axios.post,'/login',{username:userName,password});
        console.log('res');
        console.log(res);
        const data = res.data;
        if(data.code === 200){
            yield put({type:LOGIN,...data})
        }else {
            yield put({type:LOGINERR,...data})
        }
    }catch (err){
        yield put({type:LOGIN_ERR,...err})
    }
}