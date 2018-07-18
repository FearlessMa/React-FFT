/**
 * Created by MHC on 2018/3/28.
 */


import axios from 'axios';
// import {store} from '../../index';
// import {logoutAction} from "../../home";
import { call, put } from "redux-saga/effects";
import { LOADING } from "../../systemManager/redux/actionTypes";
import { message, Modal, notification } from "antd";
import { REQUEST_ERR } from "../../login/redux/actionTypes";
import { axiosConfig, loginTimeout } from 'publicConfig';


//封装成功返回数据后的校验
export const axiosPost = (url, option) => axios.post(url, option, axiosConfig);
export const axiosGet = (url, option) => {
    const copyOption = Object.assign({}, option);
    delete copyOption['type'];
    const getConfig = Object.assign({}, axiosConfig);
    getConfig.url = url;
    // getConfig.method = 'get';
    getConfig.params = copyOption;
    return axios(getConfig);
}
const axiosMethod = {
    post: axiosPost,
    get: axiosGet
};


//通知提醒
export function alertNotification(message = '成功', description = 'success', type = 'success') {
    notification[type]({
        message,
        description,
    });
}

//modal弹窗
export function alertModal(title = '成功', content = 'succ', type = 'success', okText = '确认', onOk) {
    const funOk = () => {
        window.history.go(-1);
    };
    if (onOk !== null) onOk = onOk || funOk;
    Modal[type](
        {
            title,
            content,
            okText,
            onOk
        }
    );
}

/**
 * config :{
 *  action : axios 的请求参数
 *  url : 请求地址
 *  type ： 请求成功后 dispatch的type
 *  loadingMsg ： 请求开始时 提示框的显示信息 （默认值：正在获取数据...）
 *  dispatchLoading : 是否向store发送type:loading
 * }
 * succCallback : 请求成功后回调函数 Fun
 * succPut : 请求成功后dispatch(action)到reducer
 * callback: 请求完成后可发送dispatch(action)
 * **/

//显示loading前判断是否有loading正在显示
window.hasLoading = false;

//config = {action, url, type, loadingMsg, dispatchLoading}
//执行异步
export function* requestData(config, succCallback = null, dispatchCallback = null) {
    let { action, url, type, loadingMsg, dispatchLoading, callbackData, method } = config;
    loadingMsg = loadingMsg || '正在获取数据...';
    method = method || 'post';

    //支持回调自己传参
    callbackData = callbackData || null;
    let hideLoading = () => {
    };
    if (loadingMsg !== 'closed') {
        if (!window.hasLoading) {
            hideLoading = message.loading(loadingMsg, 0);
            window.hasLoading = true;
        }
    }
    try {
        // dispatchLoading ? yield put({type: LOADING}) : null;
        if (dispatchLoading) {
            yield put({ type: LOADING });
        }
        const res = yield call(axiosMethod[method], url, action);
        const data = res.data;
        if (data.code === 200) {
            yield put({ type: type, ...data });
            if (succCallback) {
                succCallback(data.message, action);
            }
            // succCallback ? succCallback(data.message, action) : null;

        } else {
            yield put({ type: type, ...data });
        }
        // dispatchCallback ? dispatchCallback(data, action) : null;
        if (dispatchCallback) {
            dispatchCallback(data, action, callbackData);
        }
        hideLoading();
        window.hasLoading = false;
    } catch (err) {
        hideLoading();
        yield put({ type: REQUEST_ERR });
        window.hasLoading = false;
        if (err.message === 'Network Error') {
            loginTimeout()
        } else {
            alertModal('未知的错误', `${err}`, 'error', '确认', null);
        }
    }
}

