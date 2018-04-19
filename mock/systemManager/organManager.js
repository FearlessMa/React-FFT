/**
 * Created by MHC on 2018/3/13.
 */
import Mock from 'mockjs';


/**
 * Path：/org/list
 * Method：POST
 * **/
//queryList 首页表格数据
export const queryorganListMock = Mock.mock('/org/list', (option) => {
    const {name, realOrgId, current, pageSize} = JSON.parse(option.body);
    let orgList = Mock.mock({
        "orgList|10": [
            {
                "address": "中国民生银行",
                "createTime": '@increment()',
                "creatorId": "",
                "name": "中国民生银行",
                "orgId": "@increment()",
                "parentOrgId": "Root",
                "realLevel": "",
                "realOrgId": "1",
                "shortName": "中国民生银行",
                "status": "NORMAL",
                "sysSyncDate": 1515052850000,
                "updateTime": 1515052850000
            }
        ]
    });
    let queryOrgListTemplate = Mock.mock({
        code: 200,
        message: '成功',
        data: {
            ...orgList,
            "pagination": {
                "current": 1,
                "pageSize": 10,
                "total": 50,
                "totalPage": 5
            }
        }
    });
    if (realOrgId == 2) {
        return Mock.mock({
            code: 200,
            message: '成功!!',
            data: {
                "orgList": [],
                "pagination": {
                    "current": 1,
                    "pageSize": 10,
                    "total": 0,
                    "totalPage": 0
                }
            }
        })
    } else if (current != 1 && pageSize) {
        return Mock.mock({
            code: 200,
            message: '成功!!',
            data: {
                "orgList": [],
                "pagination": {
                    "current": current,
                    "pageSize": 10,
                    "total": 50,
                    "totalPage": 5
                }
            }
        });
    } else {
        return queryOrgListTemplate
    }
});

// Path：/org/listAll
// Method：POST

export const queryAllOrgList = Mock.mock('/org/listAll', () => {
    let orgList = Mock.mock({
        "orgList|1": [
            [{
                "address": "中国民生银行",
                "createTime": 1515052850000,
                "creatorId": "",
                "name": "中国民生银行",
                "orgId": "948826538287435776",
                "parentOrgId": "Root",
                "realLevel": "",
                "realOrgId": "1",
                "shortName": "中国民生银行",
                "status": "NORMAL",
                "sysSyncDate": 1515052850000,
                "updateTime": 1515052850000
            }]
        ]
    });
    let template = Mock.mock({
        code: 200,
        message: '成功',
        data: {
            ...orgList
        }
    });
    return template
});


/**
 * Path：/org/create
 * Method：POST
 * **/

export const orgCreate = Mock.mock('/org/create', (option) => {
    const {createData} = JSON.parse(option.body);
    console.log('createData');
    console.log(createData);
    return {
        code: 200,
        message: '成功',
    }

});


/**
 * Path：/org/edit
 * Method：POST
 * **/
export const orgEdit = Mock.mock('/org/edit', (option) => {
    const createData = JSON.parse(option.body);
    console.log('createData');
    console.log(createData);
    return {
        code: 200,
        message: '成功',
    }

});




/**
 * Path：/org/detail
 * * */
export const orgDetail = Mock.mock('/org/detail', (option) => {
    const {orgId} = JSON.parse(option.body);
    if (orgId == 948826538287435776) {
        return {
            code: 200,
            message: '成功',
            data: {
                "org":
                    {
                        "address": "中国民生银行",
                        "createTime": 1515052850000,
                        "creatorId": "",
                        "name": "中国民生银行",
                        "orgId": "948826538287435776",
                        "parentOrgId": "Root",
                        "parentOrgName": "",
                        "realLevel": "",
                        "realOrgId": "1",
                        "shortName": "中国民生银行",
                        "status": "NORMAL",
                        "sysSyncDate": 1515052850000,
                        "updateTime": 1515052850000
                    }
            }
        }
    } else {
        return {
            code: 200,
            message: '成功',
            data: {
                "org": {
                    "address": "中国民生银行",
                    "createTime": 1515052850000,
                    "creatorId": "",
                    "name": "中国民生银行",
                    "orgId": "948826538287435776",
                    "parentOrgId": "Root",
                    "parentOrgName": "",
                    "realLevel": "",
                    "realOrgId": "1",
                    "shortName": "中国民生银行",
                    "status": "NORMAL",
                    "sysSyncDate": 1515052850000,
                    "updateTime": 1515052850000
                }
            }
        }
    }
});

// Path：/org/delete
// Method：POST
// TeslaFunctionName：cancelOrg
export const orgDelete = Mock.mock('/org/delete', (option) => {
    const {orgId} = JSON.parse(option.body);
    if (orgId == 948826538287435776) {
        return {
            code: 200,
            message: '成功',
            data: {
                "replyInfo": "该机构下含有 2 个子机构，继续操作将删除所有机构！是否继续？",
                "confirm": "true"
            }

        }
    } else {
        return {
            code: 200,
            message: '成功',
            data: {}
        }
    }

});


/** 查看机构下人员
 * Path：/org/listUsersInOrg
 * Method：POST
 * **/

export const orgViewMembers = Mock.mock('/org/listUsersInOrg', (option) => {
    const {orgId} = JSON.parse(option.body);
    if (orgId == 948826538287435776) {
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
                        "loginTime": 1515391424000,
                        "logoutTime": 1515391420000,
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
                ],
                "org": {
                    "address": "中国民生银行",
                    "createTime": 1515052850000,
                    "creatorId": "",
                    "name": "中国民生银行",
                    "orgId": "948826538287435776",
                    "parentOrgId": "Root",
                    "parentOrgName": "",
                    "realLevel": "",
                    "realOrgId": "1",
                    "shortName": "中国民生银行",
                    "status": "NORMAL",
                    "sysSyncDate": 1515052850000,
                    "updateTime": 1515052850000
                }
            }
        }
    } else {
        return {
            code: 200,
            message: '成功',
            data: {}
        }
    }

});


/**
 * 踢出机构用户
 * Path：/org/removeUserFromOrg
 * Method：POST
 * **/
export const orgRemoveMembers = Mock.mock('/org/removeUserFromOrg', (option) => {
    const {orgId, userId} = JSON.parse(option.body);
    if (orgId && userId) {
        return {
            code: 200,
            message: '成功',
        }
    } else {
        return {
            code: 400,
            message: '失败',
        }
    }

});


/**
 * 修改用户状态
 * Path：/org/changeStatus
 * Method：POST
 * **/
export const orgChangeStatus = Mock.mock('/org/changeStatus', (option) => {
    const {orgId, status} = JSON.parse(option.body);
    if (orgId && status) {
        return {
            code: 200,
            message: '成功',
        }
    } else {
        return {
            code: 400,
            message: '失败',
        }
    }

});