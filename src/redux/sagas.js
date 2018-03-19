/**
 * Created by MHC on 2018/3/1.
 */
import createSagaMiddleware from 'redux-saga';
import { watchLoginAction } from '../login/redux/sagas';
import {watchQueryOrgList, watchQueryAllOrgList, watchRequestOrgCreate, watchRequestOrgDetail,
    watchRequestOrgDelete
} from '../systemManager/redux/sagas';

export const sagas = createSagaMiddleware(...[watchLoginAction,watchQueryOrgList,watchQueryAllOrgList,
    watchRequestOrgCreate, watchRequestOrgDetail, watchRequestOrgDelete]);
//
// export {
//     watchLoginAction,
//     watchQueryOrgList,
//     watchQueryAllOrgList
// }
export const sagasRun = ()=>{
    sagas.run(watchLoginAction);
    sagas.run(watchQueryOrgList);
    sagas.run(watchQueryAllOrgList);
    sagas.run(watchRequestOrgCreate);
    sagas.run(watchRequestOrgDetail);
    sagas.run(watchRequestOrgDelete);
};
