/**
 * Created by MHC on 2018/3/1.
 */
import createSagaMiddleware from 'redux-saga';
import { watchLoginAction } from '../login/redux/sagas';
import {
    watchQueryOrgList, watchQueryAllOrgList, watchRequestOrgCreate, watchRequestOrgDetail,
    watchRequestOrgDelete, watchRequestOrgMembers, watchRequestPathManager, watchRequestPathCreate,
    watchRequestPathDetail, watchRequestPathRemovePerm, watchRequestPathDelete, watchRequestMenuList,
    watchRequestMenuDelete, watchRequestMenuDetail, watchRequestMenuRemovePerm, watchRequestMenuCreate,
    watchRequestPowerList, watchRequestPowerDelete, watchRequestPowerCreate, watchRequestPowerDetail,
    watchRequestRoleList, watchRequestRoleCreate, watchRequestRoleDetail, watchRequestRoleDelete,
    watchRequestPowerConfigUnbind, watchRequestPowerConfig, watchRequestPowerConfigAddPaths,
    watchRequestPowerConfigUnboundPathList, watchRequestPowerConfigMenuList, watchRequestUserList,
    watchRequestUserCreate, watchRequestUserDetail, watchRequestUserDelete, watchRequestUserChangeStatus,
    watchRequestOrgRemoveMembers, watchRequestOrgEdit, watchRequestPathEdit, watchRequestMenuEdit,
    watchRequestPowerEdit, watchRequestRoleEdit, watchRequestOrgChangeStatus, watchRequestUserChangePwd,
    watchRequestOrgAllToBlockChain, watchRequestOrgToBlockChain
} from '../systemManager/redux/sagas';

import {
    watchRequestFundsPublish, watchRequestFundsOffshef, watchRequestPublishCreate, watchReuqestParentScForfaiterList,
    watchReuqestForfaiterList, watchReuqestSyncAllForfaiterList, watchRequestFundsReceived,watchRequestFundsDetailList
} from '../businessSystem/redux/sgags';

export const sagas = createSagaMiddleware(...[watchLoginAction, watchQueryOrgList, watchQueryAllOrgList,
    watchRequestOrgCreate, watchRequestOrgDetail, watchRequestOrgDelete, watchRequestOrgMembers,
    watchRequestOrgRemoveMembers, watchRequestPathManager, watchRequestPathCreate, watchRequestPathDetail, watchRequestPathRemovePerm,
    watchRequestPathDelete, watchRequestMenuList, watchRequestMenuDelete, watchRequestMenuDetail,
    watchRequestMenuRemovePerm, watchRequestMenuCreate, watchRequestPowerList, watchRequestPowerDelete,
    watchRequestPowerCreate, watchRequestPowerDetail, watchRequestPowerConfig, watchRequestPowerConfigAddPaths,
    watchRequestPowerConfigUnbind, watchRequestPowerConfigUnboundPathList, watchRequestPowerConfigMenuList,
    watchRequestRoleList, watchRequestRoleCreate, watchRequestRoleDetail, watchRequestRoleDelete,
    watchRequestUserList, watchRequestUserCreate, watchRequestUserDetail, watchRequestUserDelete,
    watchRequestUserChangeStatus, watchRequestOrgEdit, watchRequestPathEdit, watchRequestMenuEdit,
    watchRequestPowerEdit, watchRequestRoleEdit, watchRequestOrgChangeStatus, watchRequestUserChangePwd,
    watchRequestOrgAllToBlockChain, watchRequestOrgToBlockChain,
    //资金
    watchRequestFundsPublish, watchRequestFundsOffshef, watchRequestPublishCreate, watchReuqestParentScForfaiterList,
    watchReuqestForfaiterList, watchReuqestSyncAllForfaiterList, watchRequestFundsReceived,watchRequestFundsDetailList
]);
//
// export {
//     watchLoginAction,
//     watchQueryOrgList,
//     watchQueryAllOrgList
// }
export const sagasRun = () => {
    sagas.run(watchLoginAction);
    //org
    sagas.run(watchQueryOrgList);
    sagas.run(watchQueryAllOrgList);
    sagas.run(watchRequestOrgCreate);
    sagas.run(watchRequestOrgDetail);
    sagas.run(watchRequestOrgDelete);
    sagas.run(watchRequestOrgMembers);
    sagas.run(watchRequestOrgRemoveMembers);
    sagas.run(watchRequestOrgEdit);
    sagas.run(watchRequestOrgChangeStatus);
    sagas.run(watchRequestOrgAllToBlockChain);
    sagas.run(watchRequestOrgToBlockChain);

    //path
    sagas.run(watchRequestPathManager);
    sagas.run(watchRequestPathCreate);
    sagas.run(watchRequestPathDetail);
    sagas.run(watchRequestPathRemovePerm);
    sagas.run(watchRequestPathDelete);
    sagas.run(watchRequestPathEdit);

    //menuManager
    sagas.run(watchRequestMenuList);
    sagas.run(watchRequestMenuDelete);
    sagas.run(watchRequestMenuDetail);
    sagas.run(watchRequestMenuRemovePerm);
    sagas.run(watchRequestMenuCreate);
    sagas.run(watchRequestMenuEdit);

    //powerManager
    sagas.run(watchRequestPowerList);
    sagas.run(watchRequestPowerDelete);
    sagas.run(watchRequestPowerCreate);
    sagas.run(watchRequestPowerDetail);
    sagas.run(watchRequestPowerConfig);
    sagas.run(watchRequestPowerConfigAddPaths);
    sagas.run(watchRequestPowerConfigUnbind);
    sagas.run(watchRequestPowerConfigUnboundPathList);
    sagas.run(watchRequestPowerConfigMenuList);
    sagas.run(watchRequestPowerEdit);

    // roleManager
    sagas.run(watchRequestRoleList);
    sagas.run(watchRequestRoleCreate);
    sagas.run(watchRequestRoleDetail);
    sagas.run(watchRequestRoleDelete);
    sagas.run(watchRequestRoleEdit);

    // userManager
    sagas.run(watchRequestUserList);
    sagas.run(watchRequestUserCreate);
    sagas.run(watchRequestUserDetail);
    sagas.run(watchRequestUserDelete);
    sagas.run(watchRequestUserChangeStatus);
    sagas.run(watchRequestUserChangePwd);

    /* *-----------资金查询 fundsModule ---------* */
    // fundsPublish
    sagas.run(watchRequestFundsPublish);
    sagas.run(watchRequestFundsOffshef);
    sagas.run(watchRequestPublishCreate);
    //创建页面查询包买商
    sagas.run(watchReuqestParentScForfaiterList);
    sagas.run(watchRequestFundsReceived);
    sagas.run(watchRequestFundsDetailList);

    /* *-----------forfaiterModule ---------* */
    sagas.run(watchReuqestForfaiterList);
    sagas.run(watchReuqestSyncAllForfaiterList);
};









