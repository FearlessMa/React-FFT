/**
 * Created by MHC on 2018/3/13.
 */
export const REQUESTERR = 'requestErr';
export const REQUEST_ERR = 'requestErr';
export const ERROR = 'error';
export const LOADING = 'loading';

/**---------organManager-----------**/

//redux organManager
export const ORG_LIST = 'OrgList';
export const ALL_ORG_LIST = 'allOrgList';
export const ORG_CREATE = 'orgCreate';
export const ORG_DETAIL = 'orgDetail';
export const ORG_DELETE = 'orgDelete';
export const ORG_MEMBERS = 'orgMembers';
export const ORG_REMOVE_MEMBERS = 'orgRemoveMembers';
export const ORG_EDIT = 'orgEdit';
export const ORG_CHANGE_STATUS = 'orgChangeStatus';
export const ORG_DETAIL_MODAL_VISIBLE = 'orgDetailModalVisible';
export const ORG_ALL_TO_BLOCK_CHAIN = 'orgAllToBlockChain';
export const ORG_TO_BLOCK_CHAIN = 'orgToBlockChain';

// sagas organManager
export const REQUEST_ORG_LIST = 'requestOrgList';
export const REQUEST_ALL_ORG_LIST = 'requestAllOrgList';
export const REQUEST_ORG_CREATE = 'requestOrgCreate';
export const REQUEST_ORG_DETAIL = 'requestOrgDetail';
export const REQUEST_ORG_DELETE = 'requestOrgDelete';
export const REQUEST_ORG_MENBERS = 'requestOrgMembers';
export const REQUEST_ORG_REMOVE_MENBERS = 'requestOrgRemoveMembers';
export const REQUEST_ORG_EDIT = 'requestOrgEdit';
export const REQUEST_ORG_CHANGE_STATUS = 'requestOrgChangeStatus';
export const REQUEST_ORG_ALL_TO_BLOCK_CHAIN = 'requestOrgAllToBlockChain';
export const REQUEST_ORG_TO_BLOCK_CHAIN = 'requestOrgToBlockChain';


/**---------pathManager-----------**/
//reducer pathManager
export const PATH_LIST = 'pathList';
export const PATH_CREATE = 'pathCreate';
export const PATH_DETAIL = 'pathDetail';
export const PATH_REMOVE_PERM = 'pathRemovePerm';
export const PATH_DELETE = 'pathDelete';
export const PATH_CLEAR_DELETE_DATA = 'pathClearDeleteData';
export const PATH_EDIT = 'pathEdit';
// sagas pathManager
export const REQUEST_PATH_LIST = 'requestPathList';
export const REQUEST_PATH_CREATE = 'requestPathCreate';
export const REQUEST_PATH_DETAIL = 'requestPathDetail';
export const REQUEST_PATH_REMOVE_PERM = 'requestPathRemovePerm';
export const REQUEST_PATH_DELETE = 'requestPathDelete';
export const REQUEST_PATH_EDIT = 'requestPathEdit';

/**---------menuManager-----------**/
// reducer
export const MENU_LIST = 'menuList';
export const MENU_DELETE = 'menuDelete';
export const MENU_DETAIL = 'menuDetail';
export const MENU_REMOVE_PERM = 'menuRemovePerm';
export const MENU_CREATE = 'menuCreate';
export const MENU_EDIT = 'menuEdit';

// sagas
export const REQUEST_MENU_LIST = 'requestMenuList';
export const REQUEST_MENU_DELETE = 'requestMenuDelete';
export const REQUEST_MENU_DETAIL = 'requestMenuDetail';
export const REQUEST_MENU_REMOVE_PERM = 'requestMenuRemovePerm';
export const REQUEST_MENU_CREATE = 'requestMenuCreate';
export const REQUEST_MENU_EDIT = 'requestMenuEdit';

/**---------powerManager-----------**/
// reducer
export const POWER_LIST = 'powerList';
export const POWER_DELETE = 'powerDelete';
export const POWER_CREATE = 'powerCreate';
export const POWER_DETAIL = 'powerDetail';
export const POWER_EDIT = 'powerEdit';
export const POWER_CONFIG = 'powerConfig';
export const POWER_CONFIG_ADD_PATH = 'powerConfigAddPath';
export const POWER_CONFIG_UNBIND = 'powerConfigUnbind';
export const POWER_CONFIG_UNBOUND_PATH_LIST = 'powerConfigUnboundPathList';
export const POWER_CONFIG_MENU_LIST = 'powerConfigMenuList';
export const POWER_CLEAR_DELETE_DATA = 'powerClearDeleteData';
export const POWER_PATH_MODAL_VISIBLE = 'powerPathModalVisible';
export const POWER_MENU_MODAL_VISIBLE = 'powerMenuModalVisible';
export const POWER_CREATE_COMPONENT_TITLE = 'powerCreateComponentTitle';



// sagas
export const REQUEST_POWER_LIST = 'requestPowerList';
export const REQUEST_POWER_DELETE = 'requestPowerDelete';
export const REQUEST_POWER_CREATE = 'requestPowerCreate';
export const REQUEST_POWER_DETAIL = 'requestPowerDetail';
export const REQUEST_POWER_CONFIG = 'requestPowerConfig';
export const REQUEST_POWER_CONFIG_ADD_PATH = 'requestPowerConfigAddPath';
export const REQUEST_POWER_CONFIG_UNBIND = 'requestPowerConfigUnbind';
export const REQUEST_POWER_CONFIG_UNBOUND_PATH_LIST = 'requestPowerConfigUnboundPathList';
export const REQUEST_POWER_CONFIG_MENU_LIST = 'requestPowerConfigMenuList';
export const REQUEST_POWER_EDIT = 'requestPowerEdit';

/**---------roleManager-----------**/
// reducer
export const ROLE_LIST = 'roleList';
export const ROLE_CREATE = 'roleCreate';
export const ROLE_DETAIL = 'roleDetail';
export const ROLE_DELETE = 'roleDelete';
export const ROLE_COMPONENT_TITLE = 'roleComponentTitle';
export const ROLE_EDIT = 'roleEdit';

// sagas
export const REQUEST_ROLE_LIST = 'requestRoleList';
export const REQUEST_ROLE_CREATE = 'requestRoleCreate';
export const REQUEST_ROLE_DETAIL = 'requestRoleDetail';
export const REQUEST_ROLE_DELETE = 'requestRoleDelete';
export const REQUEST_ROLE_EDIT = 'requestRoleEdit';

/**---------userManager-----------**/
// reducer
export const USER_LIST = 'userList';
export const USER_CREATE = 'userCreate';
export const USER_DETAIL = 'userDetail';
export const USER_DELETE = 'userDelete';
export const USER_CHANGE_STATUS = 'userChangeStatus';
export const USER_DETAIL_MODAL_VISIBLE = 'userDetailModalVisible';
export const USER_CHANGE_PWD_MODAL_VISIBLE = 'userChangePwdModalVisible';
export const USER_CHANGE_PWD = 'userChangePwd';



// sagas
export const REQUEST_USER_LIST = 'requestUserList';
export const REQUEST_USER_CREATE = 'requestUserCreate';
export const REQUEST_USER_DETAIL = 'requestUserDetail';
export const REQUEST_USER_DELETE = 'requestUserDelete';
export const REQUEST_USER_CHANGE_STATUS = 'requestUserChangeStatus';
export const REQUEST_USER_CHANGE_PWD = 'requestUserChangePwd';


/**---------dict字典------------**/

// reducer
export const DICT_LIST = 'dictList';
export const DICT_DETAIL = 'dictDetail';
export const DICT_DELETE = 'dictDelete';
export const DICT_CREATE = 'DictCreate';
// saga
export const REQUEST_DICT_LIST = 'requestDictList';
export const REQUEST_DICT_DETAIL = 'requestDictDetail';
export const REQUEST_DICT_DELETE = 'requestDictDelete';
export const REQUEST_DICT_CREATE = 'requestDictCreate';