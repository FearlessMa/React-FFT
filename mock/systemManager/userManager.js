/**
 * Created by MHC on 2018/3/27.
 */
import Mock from 'mockjs';

/**
 * Path：/user/list
 * Method：POST
 **/

export const userManager = Mock.mock('/user/list', option => {
    const {userName, loginName} = JSON.parse(option.body);
    if (loginName === 'admin' || userName === 'admin') {
        return {
            code: 200,
            message: '成功',
            data: {
                "page": {
                    "pageNo": 1,
                    "recordsPerPage": 1,
                    "total": 2,
                    "totalPage": 2
                },
                "userList": [
                    {
                        "avatar": null,
                        "createTime": 1514969826000,
                        "email": "",
                        "employeeId": "",
                        "loginName": "admin",
                        "loginTime": 1515722062000,
                        "logoutTime": 1515635264000,
                        "mobile": "",
                        "orgId": "948826538287435776",
                        "status": "NORMAL",
                        "telephone": "",
                        "type": "NON_SYSTEM",
                        "updateTime": 1514969826000,
                        "userAddress": "",
                        "userId": "948478309976903680",
                        "userName": "admin"
                    }
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
            "userList": [
                {
                    "avatar": null,
                    "createTime": 1514969826000,
                    "email": "",
                    "employeeId": "",
                    "loginName": "admin",
                    "loginTime": 1515722062000,
                    "logoutTime": 1515635264000,
                    "mobile": "",
                    "orgId": "948826538287435776",
                    "status": "NORMAL",
                    "telephone": "",
                    "type": "NON_SYSTEM",
                    "updateTime": 1514969826000,
                    "userAddress": "",
                    "userId": "948478309976903680",
                    "userName": "admin"
                },
                {
                    "avatar": null,
                    "createTime": 1514969826000,
                    "email": "",
                    "employeeId": "",
                    "loginName": "123",
                    "loginTime": 1515722062000,
                    "logoutTime": 1515635264000,
                    "mobile": "",
                    "orgId": "123",
                    "status": "NORMAL",
                    "telephone": "",
                    "type": "NON_SYSTEM",
                    "updateTime": 1514969826000,
                    "userAddress": "",
                    "userId": "123",
                    "userName": "123"
                },
            ]
        }
    }
});

/**
 * Path：/user/create
 * Method：POST
 **/
export const userCreate = Mock.mock('/user/create', option => {
    const data = JSON.parse(option.body);
    console.log('----userCreateData----');
    console.log(data);
    return {
        code: 200,
        message: '成功',
        data: {
            "userId": "948478309976903680"
        }
    }

});

/**
 * Path：/user/detail
 * Method：POST
 **/
export const userDetail = Mock.mock('/user/detail', option => {
    const {userId} = JSON.parse(option.body);
    if (userId) {
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
                        "createTime": 1515050599000,
                        "description": "拥有系统全部权限",
                        "roleId": "1212",
                        "roleName": "1212",
                        "type": "SYSTEM",
                        "updateTime": 1515050599000
                    }
                ],
                "user": {
                    "avatar": null,
                    "createTime": 1514969826000,
                    "email": "",
                    "employeeId": "",
                    "loginName": "admin",
                    "loginTime": 1515722062000,
                    "logoutTime": 1515635264000,
                    "mobile": "",
                    "orgId": "948826538287435776",
                    "orgName": "中国民生银行",
                    "status": "NORMAL",
                    "telephone": "",
                    "type": "NON_SYSTEM",
                    "updateTime": 1514969826000,
                    "userAddress": "",
                    "userId": "948478309976903680",
                    "userName": "admin"
                }
            }
        }
    }
});

/**
 * Path：/user/delete
 * Method：POST
 **/
export const userDelete = Mock.mock('/user/delete', option => {
    const {userId} = JSON.parse(option.body);
    if (userId) {
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
 * Path：/user/changeStatus
 * Method：POST
 **/
export const userChangeStatus = Mock.mock('/user/changeStatus', option => {
    const {userId, status} = JSON.parse(option.body);
    if (userId && status) {
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
 * Path：/user/changePassword
 * Method：POST
 **/

export const userChangePwd = Mock.mock('/user/changePassword', option => {
    const {userId, password, newPassword} = JSON.parse(option.body);
    if (userId && password && newPassword) {
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