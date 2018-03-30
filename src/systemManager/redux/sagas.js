/**
 * Created by MHC on 2018/3/13.
 */

import {put, call, take, fork} from 'redux-saga/effects';
import {
    ORG_LIST, REQUESTERR, ERROR, LOADING, REQUESTPATH, PATHMANAGER, REQUESTPATHCREATE, PATHCREATE,
    REQUESTPATHDETAIL, PATHDETAIL, REQUESTPATHREMOVEPERM, PATHREMOVEPERM, PATHDELETE, REQUESTPATHDELETE,
    REQUEST_MENU_LIST, MENU_LIST, REQUEST_MENU_DELETE, MENU_DELETE, REQUEST_MENU_DETAIL, MENU_DETAIL,
    REQUEST_MENU_REMOVE_PERM, MENU_REMOVE_PERM, REQUEST_MENU_CREATE, MENU_CREATE, REQUEST_POWER_LIST, POWER_LIST,
    REQUEST_POWER_DELETE, POWER_DELETE, REQUEST_POWER_CREATE, POWER_CREATE, REQUEST_POWER_DETAIL, POWER_DETAIL,
    REQUEST_ROLE_LIST, ROLE_LIST, REQUEST_ROLE_CREATE, ROLE_CREATE, REQUEST_ROLE_DETAIL, ROLE_DETAIL,
    REQUEST_ROLE_DELETE, ROLE_DELETE, REQUEST_POWER_CONFIG, POWER_CONFIG, REQUEST_POWER_CONFIG_ADD_PATH,
    POWER_CONFIG_ADD_PATH, REQUEST_POWER_CONFIG_UNBIND, POWER_CONFIG_UNBIND, REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST,
    POWER_CONFIG_UNBOUND_PATH_LIST, REQUEST_POWER_CONFIG_MENU_LIST, POWER_CONFIG_MENU_LIST, REQUEST_USER_LIST,
    USER_LIST, REQUEST_USER_CREATE, USER_CREATE, REQUEST_USER_DETAIL, USER_DETAIL, REQUEST_USER_DELETE, USER_DELETE,
    REQUEST_USER_CHANGE_STATUS, USER_CHANGE_STATUS, REQUEST_ORG_LIST, REQUEST_ERR, REQUEST_ALL_ORG_LIST, ALL_ORG_LIST,
    REQUEST_ORG_CREATE, ORG_CREATE, REQUEST_ORG_DETAIL, ORG_DETAIL, REQUEST_ORG_DELETE, ORG_DELETE, REQUEST_ORG_MENBERS,
    ORG_MEMBERS, REQUEST_ORG_REMOVE_MENBERS, ORG_REMOVE_MEMBERS, REQUEST_PATH_LIST, PATH_LIST, REQUEST_PATH_CREATE,
    PATH_CREATE, REQUEST_PATH_DETAIL, PATH_DETAIL, REQUEST_PATH_REMOVE_PERM, PATH_REMOVE_PERM, REQUEST_PATH_DELETE,
    PATH_DELETE, REQUEST_ORG_EDIT, ORG_EDIT, REQUEST_PATH_EDIT, PATH_EDIT, REQUEST_MENU_EDIT, MENU_EDIT
} from "./actionTypes";

import axios from 'axios';

import {requestData, alertModal, alertNotification} from "../../common/axios";

// //通知提醒
// function alertNotification(message = '成功', description = 'success', type = 'success') {
//     notification[type]({
//         message,
//         description,
//     });
// }
//
// //modal弹窗
// function alertModal(title = '成功', content = 'succ', type = 'success', okText = '确认', onOk) {
//     const funOk = () => {
//         window.history.go(-1);
//     };
//     if (onOk !== null) onOk = onOk || funOk;
//     Modal[type](
//         {
//             title,
//             content,
//             okText,
//             onOk
//         }
//     );
// }

/**         requestData 参数
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
    alertNotification('创建成功',data)
};
const editSucc = data => {
    alertNotification('修改成功',data)
};
const deleteSuccModal = (data) => {
    alertModal('删除成功', data)
};
const deleteSuccNot = (data) => {
    alertNotification('删除成功', data)
};

/*********---------------organManager-----------------**********/

//index
export function* watchQueryOrgList() {
    while (true) {
        const action = yield take(REQUEST_ORG_LIST);
        yield fork(requestData, {action, url: '/org/list', type: ORG_LIST, dispatchLoading: true});
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
        yield fork(requestData, {action, url: '/org/listAll', type: ALL_ORG_LIST});
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
            loadingMsg:"Path数据提交中..."
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
            loadingMsg:"Path数据修改中..."
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
            url:'/resPath/detail',
            type:PATH_DETAIL
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
            url:'/resPath/deletePermPath',
            type:PATH_REMOVE_PERM,
            loadingMsg:'正在解除权限...',
        },removePermSucc);
    }
}
const removePermSucc = data=>{
    alertNotification('解除权限成功',data)
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
            url:'/resPath/delete',
            type:PATH_DELETE,
            loadingMsg:'Path删除中...'
        },deleteSuccNot);
    }
}


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
            url:'/resMenu/list',
            type:MENU_LIST,
            loadingMsg:'正在获取菜单列表...',
            dispatchLoading:true
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
            url:'/resMenu/delete',
            type:MENU_DELETE,
            loadingMsg:'菜单删除中...'
        },deleteSuccNot);
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
            url:'/resMenu/detail',
            type:MENU_DETAIL,
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
            type:MENU_REMOVE_PERM,
            url:'/resMenu/deletePermMenu',
            loadingMsg:'解绑中...'
        },deleteSuccNot);
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
            url:'/resMenu/create',
            type:MENU_CREATE,
            loadingMsg:'创建中...'
        },createSucc);
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
            url:'/resMenu/edit',
            type:MENU_EDIT,
            loadingMsg:'修改中...'
        },editSucc);
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
        // yield fork(powerList, action);
        yield fork(requestData,{
            action,
            url:'/perm/list',
            loadingMsg:'数据加载中...',
            type:POWER_LIST
        });
    }
}

// function* powerList(action) {
//     try {
//         yield put({type: LOADING});
//         const res = yield call(axios.post, '/perm/list', {...action});
//         const data = res.data;
//         if (data.code === 200) {
//             yield put({type: POWER_LIST, ...data})
//         } else {
//             yield put({type: REQUESTERR, ...data})
//         }
//     } catch (err) {
//         yield put({type: ERROR, ...err})
//     }
// }

/**
 *  Path：/perm/delete
 *  Method：POST
 * **/
export function* watchRequestPowerDelete() {
    while (true) {
        const action = yield take(REQUEST_POWER_DELETE);
        yield fork(powerDelete, action);
    }
}

function* powerDelete(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/delete', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_DELETE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}


/**
 * Path：/perm/create
 * Method：POST
 **/
export function* watchRequestPowerCreate() {
    while (true) {
        const action = yield take(REQUEST_POWER_CREATE);
        yield fork(powerCreate, action);
    }
}

function* powerCreate(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/create', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CREATE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/perm/detail
 * Method：POST
 **/
export function* watchRequestPowerDetail() {
    while (true) {
        const action = yield take(REQUEST_POWER_DETAIL);
        yield fork(powerDetail, action);
    }
}

function* powerDetail(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/detail', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_DETAIL, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/perm/config
 * Method：POST
 **/
export function* watchRequestPowerConfig() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG);
        yield fork(powerConfig, action);
    }
}

function* powerConfig(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/config', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CONFIG, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * 解绑权限 unbind的type与reducer的type关键字冲突
 * Path：/perm/opPermRelation
 * Method：POST
 **/

export function* watchRequestPowerConfigUnbind() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_UNBIND);
        yield fork(powerConfigUnbind, action);
    }
}

function* powerConfigUnbind(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/opPermRelation', {...action.values});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CONFIG_UNBIND, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}


/**
 * Path：/perm/addPermPaths
 * Method：POST
 **/
export function* watchRequestPowerConfigAddPaths() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_ADD_PATH);
        yield fork(powerConfigAddPermPaths, action);
    }
}

function* powerConfigAddPermPaths(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/addPermPaths', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CONFIG_ADD_PATH, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**未绑定path查询
 * Path：/perm/showPathsToAddPerm
 * Method：POST
 **/
export function* watchRequestPowerConfigUnboundPathList() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST);
        yield fork(powerConfigUnboundPowerList, action);
    }
}

function* powerConfigUnboundPowerList(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/perm/showPathsToAddPerm', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: POWER_CONFIG_UNBOUND_PATH_LIST, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**未绑定menu查询 与全部的menu
 * Path：/perm/showMenusToAddPerm
 * Method：POST
 **/
export function* watchRequestPowerConfigMenuList() {
    while (true) {
        const action = yield take(REQUEST_POWER_CONFIG_MENU_LIST);
        yield fork(powerConfigMenuList, action);
    }
}

function* powerConfigMenuList(action) {
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
}


/*********---------------roleManager-----------------**********/

/**
 * Path：/role/list
 * Method：POST
 **/

export function* watchRequestRoleList() {
    while (true) {
        const action = yield take(REQUEST_ROLE_LIST);
        yield fork(roleList, action);
    }
}

function* roleList(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/role/list', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: ROLE_LIST, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 *  Path：/role/create
 *  Method：POST
 * **/

export function* watchRequestRoleCreate() {
    while (true) {
        const action = yield take(REQUEST_ROLE_CREATE);
        yield fork(roleCreate, action);
    }
}

function* roleCreate(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/role/create', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: ROLE_CREATE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/role/detail
 * Method：POST
 **/

export function* watchRequestRoleDetail() {
    while (true) {
        const action = yield take(REQUEST_ROLE_DETAIL);
        yield fork(roleDetail, action);
    }
}

function* roleDetail(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/role/detail', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: ROLE_DETAIL, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/role/delete
 * Method：POST
 **/

export function* watchRequestRoleDelete() {
    while (true) {
        const action = yield take(REQUEST_ROLE_DELETE);
        yield fork(roleDelete, action);
    }
}

function* roleDelete(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/role/delete', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: ROLE_DELETE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/*********---------------userManager-----------------**********/


/**
 * Path：/user/list
 * Method：POST
 **/
export function* watchRequestUserList() {
    while (true) {
        const action = yield take(REQUEST_USER_LIST);
        yield fork(userList, action);
    }
}

function* userList(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/user/list', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: USER_LIST, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/user/create
 * Method：POST
 **/
export function* watchRequestUserCreate() {
    while (true) {
        const action = yield take(REQUEST_USER_CREATE);
        yield fork(userCreate, action);
    }
}

function* userCreate(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/user/create', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: USER_CREATE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}


/**
 * Path：/user/detail
 * Method：POST
 **/
export function* watchRequestUserDetail() {
    while (true) {
        const action = yield take(REQUEST_USER_DETAIL);
        yield fork(userDetail, action);
    }
}

function* userDetail(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/user/detail', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: USER_DETAIL, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/user/delete
 * Method：POST
 **/
export function* watchRequestUserDelete() {
    while (true) {
        const action = yield take(REQUEST_USER_DELETE);
        yield fork(userDelete, action);
    }
}

function* userDelete(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/user/delete', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: USER_DELETE, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}

/**
 * Path：/user/changeStatus
 * Method：POST
 **/

export function* watchRequestUserChangeStatus() {
    while (true) {
        const action = yield take(REQUEST_USER_CHANGE_STATUS);
        yield fork(userChangeStatus, action);
    }
}

function* userChangeStatus(action) {
    try {
        yield put({type: LOADING});
        const res = yield call(axios.post, '/user/changeStatus', {...action});
        const data = res.data;
        if (data.code === 200) {
            yield put({type: USER_CHANGE_STATUS, ...data})
        } else {
            yield put({type: REQUESTERR, ...data})
        }
    } catch (err) {
        yield put({type: ERROR, ...err})
    }
}



