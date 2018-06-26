/**
 * Created by MHC on 2018/3/13.
 */

 import { take, fork } from 'redux-saga/effects';

import {
    ORG_LIST,
    REQUEST_MENU_LIST,
    MENU_LIST,
    REQUEST_MENU_DELETE,
    MENU_DELETE,
    REQUEST_MENU_DETAIL,
    MENU_DETAIL,
    REQUEST_MENU_REMOVE_PERM,
    MENU_REMOVE_PERM,
    REQUEST_MENU_CREATE,
    MENU_CREATE,
    REQUEST_POWER_LIST,
    POWER_LIST,
    REQUEST_POWER_DELETE,
    POWER_DELETE,
    REQUEST_POWER_CREATE,
    POWER_CREATE,
    REQUEST_POWER_DETAIL,
    POWER_DETAIL,
    REQUEST_ROLE_LIST,
    ROLE_LIST,
    REQUEST_ROLE_CREATE,
    ROLE_CREATE,
    REQUEST_ROLE_DETAIL,
    ROLE_DETAIL,
    REQUEST_ROLE_DELETE,
    ROLE_DELETE,
    REQUEST_POWER_CONFIG,
    POWER_CONFIG,
    REQUEST_POWER_CONFIG_ADD_PATH,
    POWER_CONFIG_ADD_PATH,
    REQUEST_POWER_CONFIG_UNBIND,
    POWER_CONFIG_UNBIND,
    REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST,
    POWER_CONFIG_UNBOUND_PATH_LIST,
    REQUEST_POWER_CONFIG_MENU_LIST,
    POWER_CONFIG_MENU_LIST,
    REQUEST_USER_LIST,
    USER_LIST,
    REQUEST_USER_CREATE,
    USER_CREATE,
    REQUEST_USER_DETAIL,
    USER_DETAIL,
    REQUEST_USER_DELETE,
    USER_DELETE,
    REQUEST_USER_CHANGE_STATUS,
    USER_CHANGE_STATUS,
    REQUEST_ORG_LIST,
    REQUEST_ALL_ORG_LIST,
    ALL_ORG_LIST,
    REQUEST_ORG_CREATE,
    ORG_CREATE,
    REQUEST_ORG_DETAIL,
    ORG_DETAIL,
    REQUEST_ORG_DELETE,
    ORG_DELETE,
    REQUEST_ORG_MENBERS,
    ORG_MEMBERS,
    REQUEST_ORG_REMOVE_MENBERS,
    ORG_REMOVE_MEMBERS,
    REQUEST_PATH_LIST,
    PATH_LIST,
    REQUEST_PATH_CREATE,
    PATH_CREATE,
    REQUEST_PATH_DETAIL,
    PATH_DETAIL,
    REQUEST_PATH_REMOVE_PERM,
    PATH_REMOVE_PERM,
    REQUEST_PATH_DELETE,
    PATH_DELETE,
    REQUEST_ORG_EDIT,
    ORG_EDIT,
    REQUEST_PATH_EDIT,
    PATH_EDIT,
    REQUEST_MENU_EDIT,
    MENU_EDIT,
    POWER_PATH_MODAL_VISIBLE,
    POWER_MENU_MODAL_VISIBLE,
    REQUEST_POWER_EDIT,
    POWER_EDIT,
    REQUEST_ROLE_EDIT,
    ROLE_EDIT,
    REQUEST_ORG_CHANGE_STATUS,
    ORG_CHANGE_STATUS,
    REQUEST_USER_CHANGE_PWD,
    USER_CHANGE_PWD,
    REQUEST_ORG_ALL_TO_BLOCK_CHAIN,
    ORG_ALL_TO_BLOCK_CHAIN,
    REQUEST_ORG_TO_BLOCK_CHAIN,
    ORG_TO_BLOCK_CHAIN,
    REQUEST_DICT_LIST,
    REQUEST_DICT_DETAIL,
    REQUEST_DICT_DELETE,
    DICT_LIST,
    DICT_DETAIL,
    DICT_DELETE,
    REQUEST_DICT_CREATE,
    DICT_CREATE,
    REQUEST_USER_EDIT,
    USER_EDIT
} from "./actionTypes";

import { store } from '../../index';
import { requestData, alertModal, alertNotification } from "../../common/axios";
import {
    dispatchOrgDetailModalVisible,
    requestPathManager,
    requestPowerConfig,
    requestPowerList,
    requestUserDetail,
    requestOrgDetail,
    userChangePwdModalVisible,
    requestOrgList,
    requestDictList
} from "./actions";

/**   requestData 参数
 * config :{
 *  action : axios 的请求参数
 *  url : 请求地址
 *  type ： 请求成功后 dispatch的type
 *  loadingMsg ： 请求开始时 提示框的显示信息 （默认值：正在获取数据...）
 *  dispatchLoading : 是否向store发送type:loading
 * }
 * succCallback : 请求成功后回调函数 Fun
 * **/


const createSucc = data => {
    alertNotification('创建成功', data)
};
const editSucc = data => {
    alertNotification('修改成功', data)
};
const deleteSuccModal = (data) => {
    alertModal('删除成功', data)
};
const deleteSuccNot = (data) => {
    alertNotification('删除成功', data)
};
// const unboundSuccNot = (data) => {
//     alertNotification('解绑成功', data)
// };

/*********---------------organManager-----------------**********/

//index
export function* watchQueryOrgList() {
    while (true) {
        const action = yield take(REQUEST_ORG_LIST);
        yield fork(requestData, {
            action,
            url: '/org/list',
            type: ORG_LIST,
            dispatchLoading: true
        });
    }
}


/**
 * Path：/org/listAll
 * Method：POST
 * **/
//create 拉取上级机构数据
export function* watchQueryAllOrgList() {
    while (true) {
        const action = yield take(REQUEST_ALL_ORG_LIST);
        yield fork(requestData, {
            action,
            url: '/org/listAll',
            type: ALL_ORG_LIST
        });
    }
}


/**
 * Path：/org/create
 * Method：POST
 **/
//create创建机构
export function* watchRequestOrgCreate() {
    while (true) {
        const action = yield take(REQUEST_ORG_CREATE);
        yield fork(requestData, {
            action,
            url: '/org/create',
            type: ORG_CREATE,
            loadingMsg: '正在提交...'
        }, createSucc);
    }
}


/**
 * Path：/org/edit
 * Method：POST
 * **/
export function* watchRequestOrgEdit() {
    while (true) {
        const action = yield take(REQUEST_ORG_EDIT);
        yield fork(requestData, {
            action,
            url: '/org/edit',
            type: ORG_EDIT,
            loadingMsg: '修改中...'
        }, editSucc);
    }
}


/**
 * Path：/org/detail
 * Method：POST
 **/
//detail
export function* watchRequestOrgDetail() {
    while (true) {
        const action = yield take(REQUEST_ORG_DETAIL);
        yield fork(requestData, {
            action,
            url: '/org/detail',
            type: ORG_DETAIL,
        });
    }
}


/**
 * Path：/org/delete
 * Method：POST
 **/

export function* watchRequestOrgDelete() {
    while (true) {
        const action = yield take(REQUEST_ORG_DELETE);
        yield fork(requestData, {
            action,
            url: '/org/delete',
            type: ORG_DELETE,
            loadingMsg: '正在删除...'
        }, deleteSuccModal);
    }
}


/**
 * Path：/org/listUsersInOrg
 * Method：POST
 * **/
export function* watchRequestOrgMembers() {
    while (true) {
        const action = yield take(REQUEST_ORG_MENBERS);
        yield fork(requestData, {
            action,
            url: '/org/listUsersInOrg',
            type: ORG_MEMBERS,
            dispatchLoading: true
        });
    }
}


/** 踢出机构用户
 * Path：/org/removeUserFromOrg
 * Method：POST
 * **/

export function* watchRequestOrgRemoveMembers() {
    while (true) {
        const action = yield take(REQUEST_ORG_REMOVE_MENBERS);
        yield fork(requestData, {
            action,
            url: '/org/removeUserFromOrg',
            type: ORG_REMOVE_MEMBERS,
            dispatchLoading: true,
            loadingMsg: '正在从机构中删除...'
        }, removeMembersSucc);
    }
}

const removeMembersSucc = (data) => {
    alertModal('已经移出', data)
};

/**
 * Path：/org/changeStatus
 * Method：POST
 **/

export function* watchRequestOrgChangeStatus() {
    while (true) {
        const action = yield take(REQUEST_ORG_CHANGE_STATUS);
        yield fork(requestData, {
            action,
            url: '/org/changeStatus',
            type: ORG_CHANGE_STATUS,
            loadingMsg: '正在修改状态...'
        }, null, succCallback)
    }
}

const succCallback = (data, action) => {
    store.dispatch(dispatchOrgDetailModalVisible({
        visible: false
    }));
    store.dispatch(requestOrgDetail({
        orgId: action.orgId
    }));
};

/**
 * 同步所有未同步的机构信息
 * Path：/org/syncAllToBlockChain
 * Method：POST
 * **/

export function* watchRequestOrgAllToBlockChain() {
    while (true) {
        const action = yield take(REQUEST_ORG_ALL_TO_BLOCK_CHAIN);
        // const {action1 , callbackData} = action;
        yield fork(requestData, {
            action,
            url: '/org/syncAllToBlockChain',
            type: ORG_ALL_TO_BLOCK_CHAIN,
            loadingMsg: '正在同步...',
            dispatchLoading: true,
            //回调参数
            // callbackData
        }, null, blockChainCallback)
    }
}

const blockChainCallback = (data) => {
    alertNotification(data.message, data.message)
    store.dispatch(requestOrgList());
}

/**
 * 同步单独未同步的机构信息
 * Path：/org/syncToBlockChain
 * Method：POST
 * **/
export function* watchRequestOrgToBlockChain() {
    while (true) {
        const action = yield take(REQUEST_ORG_TO_BLOCK_CHAIN);
        yield fork(requestData, {
            action,
            url: '/org/syncToBlockChain',
            type: ORG_TO_BLOCK_CHAIN,
            loadingMsg: '正在同步...',
            dispatchLoading: true,
        }, null, blockChainCallback)
    }
}


/*********---------------pathManager-----------------**********/

/**
 * Path：/resPath/list
 * Method：POST
 * TeslaFunctionName：queryFuncList
 **/

export function* watchRequestPathManager() {
    while (true) {
        const action = yield take(REQUEST_PATH_LIST);
        // yield fork(patchManager, action);
        yield fork(requestData, {
            action,
            url: '/resPath/list',
            type: PATH_LIST,
            dispatchLoading: true
        });
    }
}


/**
 *  Path：/resPath/create
 *  Method：POST
 * **/
export function* watchRequestPathCreate() {
    while (true) {
        const action = yield take(REQUEST_PATH_CREATE);
        yield fork(requestData, {
            action,
            url: '/resPath/create',
            type: PATH_CREATE,
            loadingMsg: "Path数据提交中..."
        }, createSucc);
    }
}

/**
 *  Path：/resPath/edit
 *  Method：POST
 * **/
export function* watchRequestPathEdit() {
    while (true) {
        const action = yield take(REQUEST_PATH_EDIT);
        yield fork(requestData, {
            action,
            url: '/resPath/edit',
            type: PATH_EDIT,
            loadingMsg: "Path数据修改中..."
        }, editSucc);
    }
}


/**
 *  Path：/resPath/detail
 *  Method：POST
 * **/
export function* watchRequestPathDetail() {
    while (true) {
        const action = yield take(REQUEST_PATH_DETAIL);
        yield fork(requestData, {
            action,
            url: '/resPath/detail',
            type: PATH_DETAIL
        });
    }
}


/**
 *  解除权限
 *  Path：/resPath/deletePermPath
 *  Method：POST
 * **/
export function* watchRequestPathRemovePerm() {
    while (true) {
        const action = yield take(REQUEST_PATH_REMOVE_PERM);
        yield fork(requestData, {
            action,
            url: '/resPath/deletePermPath',
            type: PATH_REMOVE_PERM,
            loadingMsg: '正在解除权限...',
        }, removePermSucc);
    }
}

const removePermSucc = data => {
    alertNotification('解除权限成功', data)
}


/**
 *  删除path
 *  Path：/resPath/delete
 *  Method：POST
 * **/
export function* watchRequestPathDelete() {
    while (true) {
        const action = yield take(REQUEST_PATH_DELETE);
        yield fork(requestData, {
            action,
            url: '/resPath/delete',
            type: PATH_DELETE,
            loadingMsg: 'Path删除中...'
        }, deleteSuccNot, succDispatch);
    }
}

const succDispatch = () => {
    store.dispatch(requestPathManager());
};

/*********---------------menuManager-----------------**********/

/**
 *  index获取menuList
 *  Path：/resMenu/list
 *  Method：POST
 * **/
export function* watchRequestMenuList() {
    while (true) {
        const action = yield take(REQUEST_MENU_LIST);
        yield fork(requestData, {
            action,
            url: '/resMenu/list',
            type: MENU_LIST,
            loadingMsg: '正在获取菜单列表...',
            dispatchLoading: true
        });
    }
}

/**
 * Path：/resMenu/delete
 * Method：POST
 **/

export function* watchRequestMenuDelete() {
    while (true) {
        const action = yield take(REQUEST_MENU_DELETE);
        yield fork(requestData, {
            action,
            url: '/resMenu/delete',
            type: MENU_DELETE,
            loadingMsg: '菜单删除中...'
        }, deleteSuccNot);
    }
}


/**
 * Path：/resMenu/detail
 * Method：POST
 * **/

export function* watchRequestMenuDetail() {
    while (true) {
        const action = yield take(REQUEST_MENU_DETAIL);
        yield fork(requestData, {
            action,
            url: '/resMenu/detail',
            type: MENU_DETAIL,
            loadingMsg: '详情查询中...'
        });
    }
}


/**
 * Path：/resMenu/deletePermMenu
 * Method：POST
 * **/

export function* watchRequestMenuRemovePerm() {
    while (true) {
        const action = yield take(REQUEST_MENU_REMOVE_PERM);
        yield fork(requestData, {
            action,
            type: MENU_REMOVE_PERM,
            url: '/resMenu/deletePermMenu',
            loadingMsg: '解绑中...'
        }, deleteSuccNot);
    }
}


/**
 * Path：/resMenu/create
 * Method：POST
 **/

export function* watchRequestMenuCreate() {
    while (true) {
        const action = yield take(REQUEST_MENU_CREATE);
        yield fork(requestData, {
            action,
            url: '/resMenu/create',
            type: MENU_CREATE,
            loadingMsg: '创建中...'
        }, createSucc);
    }
}


/**
 * Path：/resMenu/edit
 * Method：POST
 * **/

export function* watchRequestMenuEdit() {
    while (true) {
        const action = yield take(REQUEST_MENU_EDIT);
        yield fork(requestData, {
            action,
            url: '/resMenu/edit',
            type: MENU_EDIT,
            loadingMsg: '修改中...'
        }, editSucc);
    }
}


/*********---------------powerManager-----------------**********/

/**
 *  index获取powerList数据
 *  Path：/perm/list
 *  Method：POST
 * **/
export function* watchRequestPowerList() {
    while (true) {
        const action = yield take(REQUEST_POWER_LIST);
        yield fork(requestData, {
            action,
            url: '/perm/list',
            loadingMsg: '数据加载中...',
            type: POWER_LIST,
            dispatchLoading: true
        });
    }
}


/**
 *  Path：/perm/delete
 *  Method：POST
 * **/
const PowerDelete = data => {
    alertNotification(`删除成功`, data);
    // const ss =store.getState();
    // console.log('ss----');
    // console.log(ss);
    store.dispatch(requestPowerList());

};

export function* watchRequestPowerDelete() {
    while (true) {
        const action = yield take(REQUEST_POWER_DELETE);
        yield fork(requestData, {
            action,
            url: '/perm/delete',
            type: POWER_DELETE,
            loadingMsg: '正在删除...',
        }, PowerDelete);
    }
}


/**
 * Path：/perm/create
 * Method：POST
 **/
export function* watchRequestPowerCreate() {
    while (true) {
        const action = yield take(REQUEST_POWER_CREATE);
        yield fork(requestData, {
            action,
            url: '/perm/create',
            type: POWER_CREATE,
            loadingMsg: '创建中...'
        }, createSucc);
    }
}

/**
 * Path：/perm/detail
 * Method：POST
 **/
export function* watchRequestPowerDetail() {
    while (true) {
        const action = yield take(REQUEST_POWER_DETAIL);
        yield fork(requestData, {
            action,
            url: '/perm/detail',
            type: POWER_DETAIL,
        });
    }
}

/**
 * Path：/perm/edit
 * Method：POST
 **/
export function* watchRequestPowerEdit() {
    while (true) {
        const action = yield take(REQUEST_POWER_EDIT);
        yield fork(requestData, {
            action,
            url: '/perm/edit',
            type: POWER_EDIT,
            loadingMsg: '修改中...'
        }, editSucc);
    }
}


/**
 * Path：/perm/config
 * Method：POST
 **/
export function* watchRequestPowerConfig() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG);
        // yield fork(powerConfig, action);
        yield fork(requestData, {
            action,
            url: '/perm/config',
            type: POWER_CONFIG,
            dispatchLoading: true
        });
    }
}

// function* powerConfig(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/perm/config', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: POWER_CONFIG, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**
 * 解绑权限 unbind的type与reducer的type关键字冲突 解绑和添加菜单都调用此接口cancel:true为删除，false为添加
 * Path：/perm/opPermRelation
 * Method：POST
 **/

const PowerConfigUnbind = (data, action) => {
    alertNotification(`${action.cancel ? '解绑' : '添加'}成功`, data);
    //解绑和添加成功后要刷新页面数据
    store.dispatch(requestPowerConfig({
        permId: action.permId
    }));
    //如果添加成功要关闭modal弹窗
    if (!action.cancel) {
        store.dispatch({
            type: POWER_MENU_MODAL_VISIBLE,
            menuModalVisible: false
        });
    }
}

export function* watchRequestPowerConfigUnbind() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_UNBIND);
        // yield fork(powerConfigUnbind, action);
        yield fork(requestData, {
            action: action.values,
            url: '/perm/opPermRelation',
            type: POWER_CONFIG_UNBIND,
            loadingMsg: action.values.cancel ? '解绑中...' : '添加中...'
        }, PowerConfigUnbind);
    }
}

// function* powerConfigUnbind(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/perm/opPermRelation', {...action.values});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: POWER_CONFIG_UNBIND, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }


/**
 * Path：/perm/addPermPaths
 * Method：POST
 **/
const createSuccCallback = (data, action) => {
    alertNotification('添加成功', data);
    store.dispatch({
        type: POWER_PATH_MODAL_VISIBLE,
        pathModalVisible: false
    });
    store.dispatch(requestPowerConfig({
        permId: action.permId
    }));
};

export function* watchRequestPowerConfigAddPaths() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_ADD_PATH);
        // yield fork(powerConfigAddPermPaths, action);
        yield fork(requestData, {
            action,
            url: '/perm/addPermPaths',
            type: POWER_CONFIG_ADD_PATH,
            loadingMsg: '添加中...',
            dispatchLoading: true
        },
            createSuccCallback
        );
    }
}

/**未绑定path查询
 * Path：/perm/showPathsToAddPerm
 * Method：POST
 **/
export function* watchRequestPowerConfigUnboundPathList() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST);
        // yield fork(powerConfigUnboundPowerList, action);
        yield fork(requestData, {
            action,
            url: '/perm/showPathsToAddPerm',
            type: POWER_CONFIG_UNBOUND_PATH_LIST,
            dispatchLoading: true
        });
    }
}

// function* powerConfigUnboundPowerList(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/perm/showPathsToAddPerm', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: POWER_CONFIG_UNBOUND_PATH_LIST, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**未绑定menu查询 与全部的menu
 * Path：/perm/showMenusToAddPerm
 * Method：POST
 **/
export function* watchRequestPowerConfigMenuList() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_MENU_LIST);
        // yield fork(powerConfigMenuList, action);
        yield fork(requestData, {
            action,
            url: '/perm/showMenusToAddPerm',
            type: POWER_CONFIG_MENU_LIST,
            dispatchLoading: true
        });
    }
}

/* function* powerConfigMenuList(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/showMenusToAddPerm', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CONFIG_MENU_LIST, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
} */


/*********---------------roleManager-----------------**********/

/**
 * Path：/role/list
 * Method：POST
 **/

export function* watchRequestRoleList() {
    while (true) {
        const action = yield take(REQUEST_ROLE_LIST);
        yield fork(requestData, {
            action,
            url: '/role/list',
            type: ROLE_LIST,
            dispatchLoading: true,
        });
    }
}

// function* roleList(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/role/list', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: ROLE_LIST, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**
 *  Path：/role/create
 *  Method：POST
 * **/

export function* watchRequestRoleCreate() {
    while (true) {
        const action = yield take(REQUEST_ROLE_CREATE);
        yield fork(requestData, {
            action,
            url: '/role/create',
            type: ROLE_CREATE,
            loadingMsg: '正在提交数据...'
        }, createSucc);
    }
}

/**
 *  Path：/role/edit
 *  Method：POST
 * **/

export function* watchRequestRoleEdit() {
    while (true) {
        const action = yield take(REQUEST_ROLE_EDIT);
        yield fork(requestData, {
            action,
            url: '/role/edit',
            type: ROLE_EDIT,
            loadingMsg: '正在提交数据...'
        }, editSucc);
    }
}

// function* roleCreate(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/role/create', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: ROLE_CREATE, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**
 * Path：/role/detail
 * Method：POST
 **/

export function* watchRequestRoleDetail() {
    while (true) {
        const action = yield take(REQUEST_ROLE_DETAIL);
        // yield fork(roleDetail, action);
        yield fork(requestData, {
            action,
            url: '/role/detail',
            type: ROLE_DETAIL,
        });
    }
}

// function* roleDetail(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/role/detail', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: ROLE_DETAIL, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**
 * Path：/role/delete
 * Method：POST
 **/

export function* watchRequestRoleDelete() {
    while (true) {
        const action = yield take(REQUEST_ROLE_DELETE);
        yield fork(requestData, {
            action,
            url: '/role/delete',
            type: ROLE_DELETE,
            loadingMsg: '正在删除用户...'
        }, deleteSuccNot);
    }
}

// function* roleDelete(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/role/delete', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: ROLE_DELETE, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/*********---------------userManager-----------------**********/


/**
 * Path：/user/list
 * Method：POST
 **/
export function* watchRequestUserList() {
    while (true) {
        const action = yield take(REQUEST_USER_LIST);
        yield fork(requestData, {
            action,
            url: '/user/list',
            type: USER_LIST,
            dispatchLoading: true
        });
    }
}


/**
 * Path：/user/create
 * Method：POST
 **/
export function* watchRequestUserCreate() {
    while (true) {
        const action = yield take(REQUEST_USER_CREATE);
        yield fork(requestData, {
            action,
            url: '/user/create',
            loadingMsg: '用户创建中...',
            type: USER_CREATE
        }, createSucc);
    }
}


/**
 * Path：/user/edit
 * Method：POST
 **/
export function* watchRequestUserEdit() {
    while (true) {
        const action = yield take(REQUEST_USER_EDIT);
        yield fork(requestData, {
            action,
            url: '/user/edit',
            loadingMsg: '用户修改中...',
            type: USER_EDIT
        }, editSucc);
    }
}

/**
 * Path：/user/detail
 * Method：POST
 **/
export function* watchRequestUserDetail() {
    while (true) {
        const action = yield take(REQUEST_USER_DETAIL);
        yield fork(requestData, {
            action,
            url: '/user/detail',
            type: USER_DETAIL
        });
    }
}

/**
 * Path：/user/delete
 * Method：POST
 **/
export function* watchRequestUserDelete() {
    while (true) {
        const action = yield take(REQUEST_USER_DELETE);
        yield fork(requestData, {
            action,
            url: '/user/delete',
            type: USER_DELETE,
            loadingMsg: '角色正在删除中...'
        }, deleteSuccNot);
    }
}

/**
 * Path：/user/changeStatus
 * Method：POST
 **/

export function* watchRequestUserChangeStatus() {
    while (true) {
        const action = yield take(REQUEST_USER_CHANGE_STATUS);
        yield fork(requestData, {
            action,
            url: '/user/changeStatus',
            type: USER_CHANGE_STATUS,
            loadingMsg: '状态修改中...'
        }, userChangeStatus);
    }
}

const userChangeStatus = (message, action) => {
    alertNotification('修改成功', `${message}`);
    store.dispatch(requestUserDetail({
        userId: action.userId
    }))
};

/**
 * Path：/user/changePassword
 * Method：POST
 **/

export function* watchRequestUserChangePwd() {
    while (true) {
        const action = yield take(REQUEST_USER_CHANGE_PWD);
        yield fork(requestData, {
            action,
            url: '/user/changePassword',
            type: USER_CHANGE_PWD,
            loadingMsg: '密码修改中...',
            dispatchLoading: true
        }, null, requestCallback);
    }
}

const requestCallback = (data) => {
    console.log(data)
    if (Number(data.code) !== 200) {
        store.dispatch({
            type: USER_CHANGE_PWD,
            action: data
        })
    }
    if (Number(data.code) === 200) {
        alertNotification('修改成功', `${data.message}`);
        store.dispatch(userChangePwdModalVisible({
            changePwdModalVisible: false
        }))
    }
};

// function* userChangeStatus(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/user/changeStatus', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: USER_CHANGE_STATUS, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/*********--------------------dict-----------------**********/

/**
 * Path：/dict/list
 * Method：POST
**/
export function* watchReuqestdictList() {
    while (true) {
        const action = yield take(REQUEST_DICT_LIST);
        yield fork(requestData, {
            action,
            url: '/dict/list',
            type: DICT_LIST,
            loadingMsg: '字典数据...',
            dispatchLoading: true
        })
    }
}



/**
 * Path：/dict/detail
 * Method：POST
**/

export function* watchReuqestdictDetail() {
    while (true) {
        const action = yield take(REQUEST_DICT_DETAIL);
        yield fork(requestData, {
            action,
            url: '/dict/detail',
            type: DICT_DETAIL,
            loadingMsg: '字典详情加载中...',
            dispatchLoading: true
        })
    }
}

/**
 * Path：/dict/delete
 * Method：POST
**/

export function* watchRequestDictDelete() {
    while (true) {
        const action = yield take(REQUEST_DICT_DELETE);
        yield fork(requestData, {
            action,
            url: '/dict/delete',
            type: DICT_DELETE,
            loadingMsg: '正在删除中...'
        }, null, dictDeleteCallback)
    }
}

const dictDeleteCallback = data => {
    if (String(data.code) === '200') {
        alertNotification(data.message, data.message);
        store.dispatch(requestDictList())
    }
}

/**
 * Path：/dict/create
 * Method：POST
**/
export function* watchRequestDictCreate() {
    while (true) {
        const action = yield take(REQUEST_DICT_CREATE);
        yield fork(requestData, {
            action,
            url: '/dict/create',
            type: DICT_CREATE,
            loadingMsg: '正在创建中...'
        }, null, dictCreateCallback)
    }
}
const dictCreateCallback = data => {
    if (String(data.code) === '200') {
        alertNotification(data.message, data.message);
    }
}