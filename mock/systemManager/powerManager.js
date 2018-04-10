/**
 * Created by MHC on 2018/3/22.
 */

import Mock from 'mockjs';
import {menuList} from '../login';
/**
 * Path：/perm/list
 * Method：POST
 **/

export const powerManager = Mock.mock('/perm/list', option => {
    const {permName, parentPermId} = JSON.parse(option.body);
    if (permName === '系统权限' || parentPermId === 'Root') {
        return {
            code: 200,
            message: '成功',
            data: {
                "pagination": {
                    "current": 1,
                    "pageSize": 10,
                    "total": 50,
                    "totalPage": 5
                },
                "permList": [
                    {
                        "createTime": 1515050643000,
                        "description": "系统所有权限",
                        "parentPermId": "Root",
                        "permId": "948817283664711680",
                        "permName": "系统权限",
                        "updateTime": 1515050643000
                    },
                ]
            }
        }
    }
    return {
        code: 200,
        message: '成功',
        data: {
            "pagination": {
                "current": 1,
                "pageSize": 10,
                "total": 50,
                "totalPage": 5
            },
            "permList": [
                {
                    "createTime": 1515050643000,
                    "description": "系统所有权限",
                    "parentPermId": "Root",
                    "permId": "948817283664711680",
                    "permName": "系统权限",
                    "updateTime": 1515050643000
                },
                {
                    "createTime": 1515050643000,
                    "description": "1111权限",
                    "parentPermId": "948817283664711680",
                    "permId": "1111",
                    "permName": "1111权限",
                    "updateTime": 1515050643000
                },
                {
                    "createTime": 1515050643000,
                    "description": "11121权限",
                    "parentPermId": "948817283664711680",
                    "permId": "1121",
                    "permName": "1121权限",
                    "updateTime": 1515050643000
                },
                {
                    "createTime": 1515050643000,
                    "description": "11131权限",
                    "parentPermId": "948817283664711680",
                    "permId": "1131",
                    "permName": "1131权限",
                    "updateTime": 1515050643000
                },
                {
                    "createTime": 1515050643001,
                    "description": "2222权限",
                    "parentPermId": "Root",
                    "permId": "2222",
                    "permName": "2222权限",
                    "updateTime": 1515050643000
                },
            ]
        }
    }
});

/**
 * Path：/perm/delete
 * Method：POST
 **/
export const powerDelete = Mock.mock('/perm/delete', option => {
    const {permId} = JSON.parse(option.body);
    return {
        code: 200,
        message: '成功',
        data: {
            "replyInfo": "该权限下含有 2 个子权限，继续操作将删除所有权限！是否继续？",
            "confirm": "true"
        }
    }
});

/**
 * Path：/perm/create
 * Method：POST
 **/

export const powerCreate = Mock.mock('/perm/create', option => {
    const {permName} = JSON.parse(option.body);
    if (permName) {
        return {
            code: 200,
            message: '成功',
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});

/**
 * Path：/perm/detail
 * Method：POST
 **/

export const powerDetail = Mock.mock('/perm/detail', option => {
    const {permId} = JSON.parse(option.body);
    if (permId) {
        return {
            code: 200,
            message: '成功',
            data: {
                "pathList": [
                    {
                        "createTime": 1515134128000,
                        "description": "查询机构列表",
                        "httpMethodType": "POST",
                        "httpPath": "/org/list",
                        "pathId": "949167442412048384",
                        "updateTime": 1515134128000
                    }
                ],
                "menuList": [
                    {
                        "action": "",
                        "createTime": 1515054195000,
                        "menuId": "948832180821692416",
                        "menuName": "首页",
                        "parentMenuId": "Root",
                        "sort": 1,
                        "tab": "home",
                        "updateTime": 1515054195000
                    }
                ],
                "perm": {
                    "createTime": 1515050643000,
                    "description": "系统所有权限",
                    "parentPermId": "Root",
                    "permId": "948817283664711680",
                    "permName": "系统权限",
                    "updateTime": 1515050643000
                }
            }
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});


/**
 * Path：/perm/edit
 * Method：POST
 **/
export const powerEdit = Mock.mock('/perm/edit', option => {
    const {permId} = JSON.parse(option.body);
    if (permId) {
        return {
            code: 200,
            message: '成功',
        }
    }
    return {
        code: 400,
        message: '失败',
    }

});




/**
 * Path：/perm/config
 * Method：POST
 **/
export const powerConfig = Mock.mock('/perm/config', option => {
    const {permId} = JSON.parse(option.body);
    if (permId) {
        return {
            code: 200,
            message: '成功',
            data: {
                "perm": {
                    "createTime": 1515050643000,
                    "description": "系统所有权限",
                    "parentPermId": "Root",
                    "permId": "948817283664711680",
                    "permName": "系统权限",
                    "updateTime": 1515050643000
                },
                "alreadyConfigedMenuList": [
                    {
                        "action": "",
                        "createTime": 1515054195000,
                        "menuId": "948832180821692416",
                        "menuName": "首页",
                        "parentMenuId": "Root",
                        "sort": 1,
                        "tab": "home",
                        "updateTime": 1515054195000
                    }
                ],
                "alreadyConfigedPathList": [
                    {
                        "createTime": 1515134128000,
                        "description": "查询机构列表",
                        "httpMethodType": "POST",
                        "httpPath": "/org/list",
                        "pathId": "949167442412048384",
                        "updateTime": 1515134128000
                    }
                ]
            }
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});

/**
 * Path：/perm/addPermPaths
 * Method：POST
 **/
export const powerConfigAddPath = Mock.mock('/perm/addPermPaths', option => {
    const {permId, pathIds} = JSON.parse(option.body);
    if (permId && pathIds) {
        return {
            code: 200,
            message: '成功',
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});

/**解绑  和绑定 cancel=true解绑 false添加
 * Path：/perm/opPermRelation
 * Method：POST
 **/
export const powerConfigUnbind = Mock.mock('/perm/opPermRelation', option => {
    const {permId, relationId, type , cancel} = JSON.parse(option.body);
    console.log(cancel)
    console.log(permId)
    console.log(relationId)
    console.log(type)
    if (permId && relationId && type && (cancel==true)) {
        return {
            code: 200,
            message: '解绑成功',
        }
    }
    if (permId && relationId && type && (cancel==false)) {
        return {
            code: 200,
            message: '添加成功',
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});


/**未绑定path查询
 * Path：/perm/showPathsToAddPerm
 * Method：POST
 **/
export const powerConfigUnboundPathList = Mock.mock('/perm/showPathsToAddPerm', option => {
    const {permId, httpPath} = JSON.parse(option.body);
    if (permId && !httpPath) {
        return {
            code: 200,
            message: '成功',
            data:{
                "page": {
                    "pageNo": 1,
                    "recordsPerPage": 2,
                    "total": 9,
                    "totalPage": 5
                },
                "pathList": [
                    {
                        "createTime": 1515401986000,
                        "description": "查询所有正常状态机构",
                        "httpMethodType": "POST",
                        "httpPath": "/org/listAll",
                        "pathId": "950290923199533056",
                        "updateTime": 1515401986000
                    },
                    {
                        "createTime": 1515401986000,
                        "description": "1111",
                        "httpMethodType": "POST",
                        "httpPath": "/org/111",
                        "pathId": "111",
                        "updateTime": 1515401986000
                    },
                    {
                        "createTime": 1515401986000,
                        "description": "2222",
                        "httpMethodType": "POST",
                        "httpPath": "/org/222",
                        "pathId": "222",
                        "updateTime": 1515401986000
                    },
                ]
            }
        }
    }
    if(httpPath && permId){
        return {
            code: 200,
            message: '成功',
            data:{
                "page": {
                    "pageNo": 1,
                    "recordsPerPage": 2,
                    "total": 9,
                    "totalPage": 5
                },
                "pathList": [
                    {
                        "createTime": 1515401986000,
                        "description": "2222",
                        "httpMethodType": "POST",
                        "httpPath": "/org/222",
                        "pathId": "222",
                        "updateTime": 1515401986000
                    },
                ]
            }
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});


/**未绑定menuList查询和全部menuList
 * Path：/perm/showMenusToAddPerm
 * Method：POST
 **/
export const powerConfigMenuList = Mock.mock('/perm/showMenusToAddPerm', option => {
    const {permId, relationId, type} = JSON.parse(option.body);
    if (permId) {
        return {
            code: 200,
            message: '成功',
            data:{
                "menuList": menuList,
                "alreadyConfigedMenuList": [
                    {
                        "action": "",
                        "createTime": 1515054195000,
                        "menuId": "100",
                        "menuName": "首页",
                        "parentMenuId": "Root",
                        "sort": 1,
                        "tab": "home",
                        "updateTime": 1515054195000
                    },
                    {
                        "action": "",
                        "createTime": 1515054195000,
                        "menuId": "4",
                        "menuName": "111",
                        "parentMenuId": "Root",
                        "sort": 1,
                        "tab": "home",
                        "updateTime": 1515054195000
                    }
                ]
            }
        }
    }
    return {
        code: 200,
        message: '失败',
    }

});