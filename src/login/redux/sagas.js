/**
 * Created by MHC on 2018/3/1.
 */

// import {put, call, take, fork} from 'redux-saga/effects';
// import axios from 'axios';
import {take, fork} from 'redux-saga/effects';
import {LOGIN, LOGIN_REQUEST, LOGIN_ERR, REQUEST_ERR, CLEAR_LOADING} from './actionTypes';
import {requestData} from "../../common/axios";
import {store} from "../../index";
import {clearLoadingAction} from "./actions";
import sha256 from 'js-sha256';

export function* watchLoginAction() {
    while (true) {
        const action = yield take(LOGIN_REQUEST);
        const {userName, password} = action;
        yield fork(requestData, {
            action: {username: userName, password:sha256(password)},
            type: LOGIN,
            url: '/login',
            loadingMsg: 'closed',
            dispatchLoading: true
        }, null, errLogin);
        yield take(['logout', REQUEST_ERR, LOGIN_ERR, CLEAR_LOADING])
    }

}

const errLogin = (data) => {
    store.dispatch(clearLoadingAction())
};
