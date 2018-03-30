/**
 * Created by MHC on 2018/3/1.
 */

import {put, call, take, fork} from 'redux-saga/effects';
import axios from 'axios';
import {LOGIN, LOGIN_REQUEST, LOGIN_ERR, LOADING, REQUEST_ERR} from './actionTypes';

export function* watchLoginAction() {
    // yield * takeLatest(LOGIN_REQUEST,loginRequest)
    while (true) {
        const action = yield take(LOGIN_REQUEST);
        yield fork(loginRequest, action);
        yield take(['logout', REQUEST_ERR, LOGIN_ERR])
    }

}

function* loginRequest(action) {
    const {userName, password} = action;
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/login', {username: userName, password});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: LOGIN, ...data})
        } else {
            yield put({type: LOGIN_ERR, ...data})
        }
    } catch (err) {
        yield put({type: REQUEST_ERR, ...err})
    }
}