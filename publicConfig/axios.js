/*
 * @Author: mhc 
 * @Date: 2018-04-23 15:25:19 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-23 15:28:07
 */

import {message, Modal} from "antd";
import {store} from '../src/index';
import {logoutAction} from "../src/home";

export const axiosConfig = {
    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
    // baseURL:'',
    // withCredentials: true,
    //拦截器
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
        if (Number(data.code) === 404) {
            Modal.error(
                {
                    title: '资源不存在',
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