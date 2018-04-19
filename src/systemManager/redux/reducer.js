/**
 * Created by MHC on 2018/3/13.
 */

import {
    ORG_LIST,
    LOADING,
    MENU_LIST,
    MENU_DELETE,
    MENU_DETAIL,
    MENU_REMOVE_PERM,
    MENU_CREATE,
    POWER_LIST,
    POWER_DELETE,
    POWER_CREATE,
    POWER_DETAIL,
    ROLE_LIST,
    ROLE_CREATE,
    ROLE_DETAIL,
    ROLE_DELETE,
    POWER_CONFIG,
    POWER_CONFIG_ADD_PATH,
    POWER_CONFIG_UNBIND,
    POWER_CONFIG_UNBOUND_PATH_LIST,
    POWER_CONFIG_MENU_LIST,
    USER_LIST,
    USER_CREATE,
    USER_DETAIL,
    USER_DELETE,
    USER_CHANGE_STATUS,
    ALL_ORG_LIST,
    ORG_CREATE,
    ORG_DETAIL,
    ORG_DELETE,
    ORG_MEMBERS,
    ORG_REMOVE_MEMBERS,
    PATH_LIST,
    PATH_CREATE,
    PATH_DETAIL,
    PATH_REMOVE_PERM,
    PATH_DELETE,
    PATH_CLEAR_DELETE_DATA,
    ORG_EDIT,
    PATH_EDIT,
    MENU_EDIT,
    POWER_CLEAR_DELETE_DATA,
    POWER_PATH_MODAL_VISIBLE,
    POWER_MENU_MODAL_VISIBLE,
    POWER_CREATE_COMPONENT_TITLE,
    POWER_EDIT,
    ROLE_COMPONENT_TITLE,
    REQUEST_ERR,
    ORG_CHANGE_STATUS,
    ORG_DETAIL_MODAL_VISIBLE,
    USER_DETAIL_MODAL_VISIBLE, USER_CHANGE_PWD_MODAL_VISIBLE, USER_CHANGE_PWD
} from "./actionTypes";

/**------------------orgManagerReducer-------------------------**/

const initValue = {
    requestErr: {},
    // loading:false,
    index: {
        orgList: [],
    },
    create: {
        orgList: []
    },
    orgModalVisible:false
};
export const organManager = (state = initValue, action) => {

    switch (action.type) {
        //index
        case ORG_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...action
                }
            });
        //loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        //create页面
        case ALL_ORG_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                create: {
                    orgAllList: action
                }
            });
        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        //创建机构
        case ORG_CREATE :
            return Object.assign({}, {...state}, {
                loading: false,
                create: {
                    createResult: action,
                    ...state.create
                }
            });
        //编辑机构
        case ORG_EDIT :
            return Object.assign({}, {...state}, {
                loading: false,
                edit: action,
            });
        //查看详情
        case ORG_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    detailData: action,
                }
            });
        //删除机构
        case ORG_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    orgDelete: action
                }
            });
        //查询机构下人员
        case ORG_MEMBERS :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    orgMembers: action
                }
            });
            //移除机构下人员
        case ORG_REMOVE_MEMBERS :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    orgRemoveMembers: action,

                }
            });
            //移除机构下人员
        case ORG_CHANGE_STATUS :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    orgChangeStatus:action
                }
            });
        case ORG_DETAIL_MODAL_VISIBLE :
            return Object.assign({}, {...state}, {
                loading: false,
                orgModalVisible:action.visible
            });
        default :
            return state
    }
};

/**------------------pathManagerReducer-------------------------**/
//path管理
const pathManagerInitValue = {
    index: {},
};
export const pathManager = (state = pathManagerInitValue, action) => {
    switch (action.type) {
        // loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        // 请求列表数据
        case PATH_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...action
                }
            });
        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        // 创建path
        case PATH_CREATE :
            return Object.assign({}, {...state}, {
                loading: false,
                create: {
                    ...action
                }
            });
        // edit
        case PATH_EDIT :
            return Object.assign({}, {...state}, {
                loading: false,
                edit: {
                    ...action
                }
            });
        //detail
        case PATH_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...action
                }
            });
        //removePerm
        case PATH_REMOVE_PERM :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    removePerm: action
                }
            });
        //pathDelete
        case PATH_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...state.index,
                    pathDelete: action
                }
            });
        case PATH_CLEAR_DELETE_DATA :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...state.index,
                    pathDelete: ""
                }
            });
        default :
            return state
    }
};

/**------------------menuManagerReducer-------------------------**/

const menuManagerInitValue = {
    index: {},
};
export const menuManager = (state = menuManagerInitValue, action) => {
    switch (action.type) {
        // loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        //index页面menuList数据
        case MENU_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {...action}
            });
        //delete
        case MENU_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...state.index,
                    menuDelete: action
                }
            });
        //detail
        case MENU_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {...action}
            });
        case MENU_REMOVE_PERM :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: {
                    ...state.detail,
                    menuRemovePerm: action
                }
            });
        case MENU_CREATE :
            return Object.assign({}, {...state}, {
                loading: false,
                create: action
            });
        case MENU_EDIT :
            return Object.assign({}, {...state}, {
                loading: false,
                edit: action
            });
        default :
            return state
    }
};

/**------------------powerManagerReducer-------------------------**/

const powerManagerInitValue = {
    index: {},
    pathModalVisible:false,
    // componentTitle:'create'
};

export const powerManager = (state = powerManagerInitValue, action) => {
    switch (action.type) {
        // loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        //powerList
        case POWER_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    powerList: action
                }
            });
        //delete
        case POWER_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...state.index,
                    powerDelete: action
                }
            });
        //claerDeleteData
        case POWER_CLEAR_DELETE_DATA :
            return Object.assign({}, {...state}, {
                loading: false,
                index: {
                    ...state.index,
                    powerDelete: {}
                }
            });
        //create
        case POWER_CREATE :
            return Object.assign({}, {...state}, {
                loading: false,
                create: action
            });
        //detail
        case POWER_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: action
            });
        //edit
        case POWER_EDIT :
            return Object.assign({}, {...state}, {
                edit: action
            });
        //componentTitle
        case POWER_CREATE_COMPONENT_TITLE :
            return Object.assign({}, {...state}, {
                ...action
            });
        //config
        case POWER_CONFIG :
            return Object.assign({}, {...state}, {
                loading: false,
                config: action
            });
        //configAddPath
        case POWER_CONFIG_ADD_PATH :
            return Object.assign({}, {...state}, {
                loading: false,
                configAddPath: action
            });
        //configUnbind
        case POWER_CONFIG_UNBIND :
            return Object.assign({}, {...state}, {
                loading: false,
                configUnbind: action
            });
        //configUnboundPathList
        case POWER_CONFIG_UNBOUND_PATH_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                configUnboundPathList: action
            });
        //configMenuList
        case POWER_CONFIG_MENU_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                configMenuList: action
            });
        //pathModalVisible
        case POWER_PATH_MODAL_VISIBLE :
            return Object.assign({}, {...state}, {
                // pathModalVisible: false,
                // ...action
                pathModalVisible:action.pathModalVisible
            });
        //pathModalVisible
        case POWER_MENU_MODAL_VISIBLE :
            return Object.assign({}, {...state}, {
                menuModalVisible: action.menuModalVisible,
                // ...action
            });


        default :
            return state
    }
};

/**------------------roleManagerReducer-------------------------**/
const roleManagerInitValue = {
    index: {}
};

export const roleManager = (state = roleManagerInitValue, action) => {
    switch (action.type) {
        // /**请求错误**/
        // case REQUESTERR :
        //     return Object.assign({}, {...state}, {
        //         loading: false,
        //         requestErr: {
        //             ...action
        //         }
        //     });
        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        // loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        //index
        case ROLE_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: action
            });
        //create
        case ROLE_CREATE :
            return Object.assign({}, {...state}, {
                create: action
            });
        //detail
        case ROLE_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: action
            });
        //detail
        case ROLE_COMPONENT_TITLE :
            return Object.assign({}, {...state}, {
                // componentTitle:
                ...action
            });
        //delete
        case ROLE_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                delete: action
            });
        default :
            return state
    }
};

/**------------------userManagerReducer-------------------------**/
const userManagerInitValue = {
    index: {}
};

export const userManager = (state = userManagerInitValue, action) => {
    switch (action.type) {

        //请求错误
        case REQUEST_ERR :
            return Object.assign({}, {...state}, {
                loading: false,
                requestErr: {
                    ...action
                }
            });
        // loading
        case LOADING :
            return Object.assign({}, {...state}, {
                loading: true,
            });
        // index
        case USER_LIST :
            return Object.assign({}, {...state}, {
                loading: false,
                index: action
            });
        // create
        case USER_CREATE :
            return Object.assign({}, {...state}, {
                loading: false,
                create: action
            });
        // detail
        case USER_DETAIL :
            return Object.assign({}, {...state}, {
                loading: false,
                detail: action
            });
        // delete
        case USER_DELETE :
            return Object.assign({}, {...state}, {
                loading: false,
                delete: action
            });
        // changeStatus
        case USER_CHANGE_STATUS :
            return Object.assign({}, {...state}, {
                loading: false,
                changeStatus: action
            });

        // changeStatus modalVisible
        case USER_DETAIL_MODAL_VISIBLE :
            return Object.assign({}, {...state}, {
                loading: false,
                userModalVisible: action.userModalVisible
            });
        //changePasswordModal
        case USER_CHANGE_PWD_MODAL_VISIBLE :
            return Object.assign({}, {...state}, {
                changePwdModalVisible: action.changePwdModalVisible,
            });
        //changePassword
        case USER_CHANGE_PWD :
            return Object.assign({}, {...state}, {
                loading: false,
                changePassword: action,
            });

        default :
            return state
    }
};
