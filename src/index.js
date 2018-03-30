/**
 * Created by MHC on 2018/2/12.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer} from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

import { createLogger } from 'redux-logger';
import './index.less';
import AppRouter from './routers';
import reducer from './redux/reducers';
import '../mock';
import { sagas, sagasRun } from './redux/sagas';
// import  Test from './test'

const win = window;
const logger = createLogger();
//异步saga
//TODO 打生产包需要去掉logger和mock
const middleware = [sagas,logger];
const storeEnhancer = compose(
    applyMiddleware(...middleware),
    (win && win.devToolsExtension)?win.devToolsExtension():(f)=>f
);



export const store = createStore(reducer,storeEnhancer);

sagasRun();

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
           './routers', () =>ReactDOM.render(AppRouter)
       )
}

