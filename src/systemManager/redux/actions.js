/**
 * Created by MHC on 2018/3/13.
 */

import {
    REQUEST_ORG_LIST, REQUESTALLORG, REQUESTORGCREATE, REQUESTORGDETAIL, REQUESTORGDELETE, REQUESTORGMENBERS,
    REQUESTPATH, REQUESTPATHCREATE, REQUESTPATHDETAIL, REQUESTPATHREMOVEPERM, REQUESTPATHDELETE, REQUEST_MENU_LIST,
    REQUEST_MENU_DELETE, REQUEST_MENU_DETAIL, REQUEST_MENU_REMOVE_PERM, REQUEST_MENU_CREATE, REQUEST_POWER_LIST,
    REQUEST_POWER_DELETE, REQUEST_POWER_CREATE, REQUEST_POWER_DETAIL, REQUEST_ROLE_LIST, REQUEST_ROLE_CREATE,
    REQUEST_ROLE_DETAIL, REQUEST_ROLE_DELETE, REQUEST_POWER_CONFIG, REQUEST_POWER_CONFIG_ADD_PATH,
    REQUEST_POWER_CONFIG_UNBIND, REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST, REQUEST_POWER_CONFIG_MENU_LIST,
    REQUEST_USER_LIST, REQUEST_USER_CREATE, REQUEST_USER_DETAIL, REQUEST_USER_DELETE, REQUEST_USER_CHANGE_STATUS,
    REQUEST_ALL_ORG_LIST, REQUEST_ORG_CREATE, REQUEST_ORG_DETAIL, REQUEST_ORG_DELETE, REQUEST_ORG_MENBERS,
    REQUEST_ORG_REMOVE_MENBERS, REQUEST_PATH_LIST, REQUEST_PATH_CREATE, REQUEST_PATH_DETAIL, REQUEST_PATH_REMOVE_PERM,
    REQUEST_PATH_DELETE, PATH_CLEAR_DELETE_DATA, REQUEST_ORG_EDIT, REQUEST_PATH_EDIT, REQUEST_MENU_EDIT
} from "./actionTypes";

/**--------------orgManager------------------**/

export const requestOrgList = valves => ({
    type: REQUEST_ORG_LIST,
    ...valves
});
export const requestAllOrgList = () => ({
    type: REQUEST_ALL_ORG_LIST
});
export const requestOrgCreate = value => ({
    type: REQUEST_ORG_CREATE,
    ...value
});

export const requestOrgDetail = value => ({
    type: REQUEST_ORG_DETAIL,
    ...value
});

export const requestOrgDelete = value => ({
    type: REQUEST_ORG_DELETE,
    ...value
});

export const requestOrgMembers = value => ({
    type: REQUEST_ORG_MENBERS,
    ...value
});
//
export const requestOrgRemoveMembers = value => ({
    type: REQUEST_ORG_REMOVE_MENBERS,
    ...value
});
export const requestOrgEdit = value => ({
    type: REQUEST_ORG_EDIT,
    ...value
});

/**--------------pathManager------------------**/
export const requestPathManager = value => ({
    type: REQUEST_PATH_LIST,
    ...value
});

//create
export const requestPathCreate = value => ({
    type: REQUEST_PATH_CREATE,
    ...value
});
//edit
export const requestPathEdit = value => ({
    type: REQUEST_PATH_EDIT,
    ...value
});

//detail
export const requestPathDetail = value => ({
    type: REQUEST_PATH_DETAIL,
    ...value
});
//removePerm
export const requestPathRemovePrem = value => ({
    type: REQUEST_PATH_REMOVE_PERM,
    ...value
});
//pathDelete
export const requestPathDelete = value => ({
    type: REQUEST_PATH_DELETE,
    ...value
});
export const clearPathDeleteData = () => ({
    type: PATH_CLEAR_DELETE_DATA,
});

/**--------------menuManager------------------**/

export const requestMenuList = values => ({
    type: REQUEST_MENU_LIST,
    ...values
});
//menuDelete
export const requestMenuDelete = values => ({
    type: REQUEST_MENU_DELETE,
    ...values
});

//menuDetail
export const requestMenuDetail = values => ({
    type: REQUEST_MENU_DETAIL,
    ...values
});

//menuRemovePerm
export const requestMenuRemovePerm = values => ({
    type: REQUEST_MENU_REMOVE_PERM,
    ...values
});

//menuCreate
export const requestMenuCreate = values => ({
    type: REQUEST_MENU_CREATE,
    ...values
});
//menu edit
export const requestMenuEdit = values => ({
    type: REQUEST_MENU_EDIT,
    ...values
});

/**--------------powerManager------------------**/
//powerList
export const requestPowerList = values => ({
    type: REQUEST_POWER_LIST,
    ...values
});

//powerDelete
export const requestPowerDelete = values => ({
    type: REQUEST_POWER_DELETE,
    ...values
});

//powerCreate
export const requestPowerCreate = values => ({
    type: REQUEST_POWER_CREATE,
    ...values
});

//powerDetail
export const requestPowerDetail = values => ({
    type: REQUEST_POWER_DETAIL,
    ...values
});

// config
export const requestPowerConfig = values => ({
    type: REQUEST_POWER_CONFIG,
    ...values
});

// configAddPath
export const requestPowerConfigAddPath = values => ({
    type: REQUEST_POWER_CONFIG_ADD_PATH,
    ...values
});

// configUnbind
export const requestPowerConfigUnbind = values => ({
    type: REQUEST_POWER_CONFIG_UNBIND,
    values
});

// configUnbound
export const requestPowerConfigUnboundPathList = values => ({
    type: REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST,
    ...values
});
// configUnbound
export const requestPowerConfigMenuList = values => ({
    type: REQUEST_POWER_CONFIG_MENU_LIST,
    ...values
});


/**--------------roleManager------------------**/

// roleList
export const requestRoleList = values => ({
    type: REQUEST_ROLE_LIST,
    ...values
});
// roleCreate
export const requestRoleCreate = values => ({
    type: REQUEST_ROLE_CREATE,
    ...values
});
// detail
export const requestRoleDetail = values => ({
    type: REQUEST_ROLE_DETAIL,
    ...values
});
// delete
export const requestRoleDelete = values => ({
    type: REQUEST_ROLE_DELETE,
    ...values
});

/**--------------userManager------------------**/


//index userList
export const requestUserList = values => ({
    type: REQUEST_USER_LIST,
    ...values
});

//create
export const requestUserCreate = values => ({
    type: REQUEST_USER_CREATE,
    ...values
});

//detail
export const requestUserDetail = values => ({
    type: REQUEST_USER_DETAIL,
    ...values
});

//delete
export const requestUserDelete = values => ({
    type: REQUEST_USER_DELETE,
    ...values
});

//changeStatus
export const requestUserChangeStatus = values => ({
    type: REQUEST_USER_CHANGE_STATUS,
    ...values
});














