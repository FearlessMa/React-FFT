/**
 * Created by MHC on 2018/3/23.
 */

import Mock from 'mockjs';

/**
 * Path：/role/list
 * Method：POST
 **/

export const roleList = Mock.mock('/role/list', option => {
    const {roleName} = JSON.parse(option.body);
    if (roleName === '1111') {
        return {
            code: 200,
            message: '成功',
            data: {
                "roleList": [
                    {
                        "createTime": 1515050599001,
                        "description": "1111",
                        "roleId": "1111",
                        "roleName": "1111",
                        "type": "1111",
                        "updateTime": 1515050599001
                    }
                ],
                "page": {
                    "pageNo": 1,
                    "recordsPerPage": 2,
                    "total": 1,
                    "totalPage": 1
                }
            }
        }
    }
    return {
        code: 200,
        message: '成功',
        data: {
            "roleList": [
                {
                    "createTime": 1515050599000,
                    "description": "拥有系统全部权限",
                    "roleId": "948817099538960384",
                    "roleName": "系统管理员",
                    "type": "SYSTEM",
                    "updateTime": 1515050599000
                },
                {
                    "createTime": 1515050599001,
                    "description": "1111",
                    "roleId": "1111",
                    "roleName": "1111",
                    "type": "1111",
                    "updateTime": 1515050599001
                }
            ],
            "page": {
                "pageNo": 1,
                "recordsPerPage": 2,
                "total": 1,
                "totalPage": 1
            }
        }
    }

});

/**
 * Path：/role/create
 * Method：POST
 **/

export const roleCreate = Mock.mock('/role/create', option => {
    const {roleName, description, permIds} = JSON.parse(option.body);
    console.log('----------------permIds---------------');
    console.log(permIds);
    if (roleName && permIds) {
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
 * Path：/role/detail
 * Method：POST
 **/

export const roleDetail = Mock.mock('/role/detail', option => {
    const {roleId} = JSON.parse(option.body);
    if (roleId) {
        return {
            code: 200,
            message: '成功',
            data :{
                "role": {
                    "createTime": 1515050599000,
                    "description": "拥有系统全部权限",
                    "roleId": "948817099538960384",
                    "roleName": "系统管理员",
                    "type": "SYSTEM",
                    "updateTime": 1515050599000
                },
                "allPermList": [
                    {
                        "createTime": 1515050643000,
                        "description": "系统所有权限",
                        "parentPermId": "Root",
                        "permId": "948817283664711680",
                        "permName": "系统权限",
                        "updateTime": 1515050643000
                    }
                ],
                "permList": [
                    // {
                    //     "createTime": 1515050643000,
                    //     "description": "系统所有权限",
                    //     "parentPermId": "Root",
                    //     "permId": "948817283664711680",
                    //     "permName": "系统权限",
                    //     "updateTime": 1515050643000
                    // },
                    {
                        "createTime": 1515050643000,
                        "description": "111",
                        "parentPermId": "948817283664711680",
                        "permId": "1111",
                        "permName": "111",
                        "updateTime": 1515050643000
                    },
                    {
                        "createTime": 1515050643000,
                        "description": "2222",
                        "parentPermId": "Root",
                        "permId": "2222",
                        "permName": "2222",
                        "updateTime": 1515050643000
                    },
                ]
            }
        }
    }
    return {
        code: 400,
        message: '失败',
    }

});

/**
 * Path：/role/delete
 * Method：POST
 **/

export const roleDelete = Mock.mock('/role/delete', option => {
    const {roleId} = JSON.parse(option.body);
    if(roleId){
        return {
            code:200,
            message:'成功'
        }
    }
});














