/**
 * Created by MHC on 2018/2/12.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';

import {createLogger} from 'redux-logger';
import './index.less';
import AppRouter from './routers';
import reducer from './redux/reducers';
import '../mock';
import {sagas, sagasRun} from './redux/sagas';
// import  Test from './test'

const logger = createLogger();
//异步saga
//TODO 打生产包需要去掉logger和mock
// const middleware = [sagas,logger];

const middleware = [];
let storeEnhancer = [];
if (process.env.NODE_ENV === 'production') {
    middleware.push(sagas);
    storeEnhancer = applyMiddleware(...middleware);
}
if (process.env.NODE_ENV === 'development') {
    middleware.push(sagas, logger);
    storeEnhancer = compose(
        applyMiddleware(...middleware),
        (window && window.devToolsExtension) ? window.devToolsExtension() : (f) => f
    );
}


export const store = createStore(reducer, storeEnhancer);

sagasRun();



if (process.env.NODE_ENV === 'development') {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        </AppContainer>
        ,
        document.getElementById('root')
    );
    if (module.hot) {
        module.hot.accept(
            './routers', () => ReactDOM.render(AppRouter)
        )
    }
    console.log('----------------');
    console.log("process.env.NODE_ENV 的值是(index.js)：" + process.env.NODE_ENV);
}else {
    ReactDOM.render(
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        ,
        document.getElementById('root')
    );
}

