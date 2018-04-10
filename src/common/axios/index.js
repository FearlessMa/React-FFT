/**
 * Created by MHC on 2018/3/28.
 */


import axios from 'axios';
import {store} from '../../index';
import {logoutAction} from "../../home";
import {call, put} from "redux-saga/effects";
import {LOADING} from "../../systemManager/redux/actionTypes";
import {message, Modal, notification} from "antd";


//封装成功返回数据后的校验
export const axiosPost = (url, option) => axios.post(url, option, config);

const config = {
    transformResponse: [(data) => {
        data = JSON.parse(data);
        if (Number(data.code) === 400) {
            Modal.error(
                {
                    title: '请求失败',
                    content: data.message,
                    okText: '确认',
                    onOk: () => {
                    }
                }
            );
        }
        if (Number(data.code) === 401) {
            Modal.error(
                {
                    title: '当前未登录',
                    content: data.message,
                    okText: '确认',
                    onOk: () => {
                        store.dispatch(logoutAction());
                        sessionStorage.clear();
                        window.location.hash = '#/login';
                    }
                }
            );
        }
        if (Number(data.code) === 402) {
            message.error(data.message, 1)
        }
        if (Number(data.code) === 403) {
            Modal.error(
                {
                    title: '无访问权限',
                    content: data.message,
                    okText: '确认',
                    onOk: () => {
                        window.history.go(-1);
                    }
                }
            );
        }
        if (Number(data.code) === 500) {
            Modal.error(
                {
                    title: '系统错误',
                    content: data.message,
                    okText: '确认',
                    onOk: () => {
                        window.history.go(-1);
                    }
                }
            );
        }
        return data;
    }]
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
 * callback: code!==200是回调函数
 * **/

//显示loading前判断是否有loading正在显示
window.hasLoading = false;

//执行异步
export function* requestData(config = {action, url, type, loadingMsg, dispatchLoading}, succCallback, callback) {
    let {action, url, type, loadingMsg, dispatchLoading} = config;
    loadingMsg = loadingMsg || '正在获取数据...';
    let hideLoading = () => {
    };
    if (loadingMsg !== 'closed') {
        if (!window.hasLoading) {
            hideLoading = message.loading(loadingMsg, 0);
            window.hasLoading = true;
        }
    }
    try {
        dispatchLoading ? yield put({type: LOADING}) : null;
        const res = yield call(axiosPost, url, action);
        const data = res.data;
        if (data.code === 200) {
            yield put({type: type, ...data});
            succCallback ? succCallback(data.message, action) : null;
            // dispatchStore?dispatchStore:null;
            // succPut?yield put(succPut):null;

        }
        callback ? callback(data, action) : null;
        hideLoading();
        window.hasLoading = false;
    } catch (err) {
        hideLoading();
        window.hasLoading = false;
        alertModal('未知的错误', `${err}`, 'error', '确认', null);
    }
}

