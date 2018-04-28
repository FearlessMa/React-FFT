/*
 * @Author: mhc 
 * @Date: 2018-04-24 15:09:54 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-04-27 18:18:35
 */

import Mock from 'mockjs';

/**
 *  Path：/capital/listPublishedCapital
 *  Method：POST
**/

export const publishFundsList = Mock.mock('/capital/listPublishedCapital', (option) => {

    return Mock.mock({
        "code": 200,
        "data": {
            "capitalList|20": [
                {
                    "capitalId": "@id()",
                    "forfaiterNm": "民生银行北京分行",
                    "forfaiterSc": "MSBCCNBJ100",
                    "forfaiterAtten": "李四",
                    "forfaiterContacts": "18200000000",
                    "financingMaturity": "",
                    "price": 0.15,
                    "requirements": "",
                    "priceValidStart": 1515052850000,
                    "priceValidEnd": 1515052850000,
                    "capitalStatus|+1": ['0', "1", '2', '3', '4'],
                    "forfaiter": "",
                    "txId": "943d7109-070b-4f87-9da7-1824e0e6683a",
                    "tranType": "1",
                    "tranDate": 1515052850000,
                    "extend": ""
                }
            ],
            "pagination": {
                "current": 1,
                "pageSize": 10,
                "total": 50,
                "totalPage": 5
            }
        },
        "message": "SUCCESS"
    })
})


/**
 * Path：/capital/offshelf
 * Method：POST
**/

export const offshelf = Mock.mock('/capital/offshelf', option => {
    const { capitalId } = JSON.parse(option.body);
    if (capitalId) {
        return {
            code: 200,
            message: '成功!'
        }
    } else {
        return {
            code: 400,
            message: 'offshelf失败!'
        }
    }
})

/** 创建资金
 * Path：/capital/publish
 * Method：POST
**/
export const createPublishFunds = Mock.mock('/capital/publish', option => {
    const { forfaiterNm } = JSON.parse(option.body);
    if (forfaiterNm) {
        return {
            code: 200,
            message: '成功!'
        }
    } else {
        return {
            code: 400,
            message: 'offshelf失败!'
        }
    }
})

/** 创建资金查询包买商
 * Path：/forfaiter/listByParentSc
 * Method：POST
**/

export const forfaiterListByParentSc = Mock.mock('/forfaiter/listByParentSc', option => {
    const { parentSwiftCode } = JSON.parse(option.body);
    if (parentSwiftCode == 'MSBCCNBJ100') {
        return {
            code: 200,
            message: '成功!',
            data: {
                "forfaiterList": [
                    {
                        "swiftCode": "MSBCCNBJ101",
                        "forfaiterName": "民生银行北京分行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "MSBCCNBJ",
                        "rootName": "民生银行",
                        "isRoot": "0",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    },
                    {
                        "swiftCode": "MSBCCNBJ102",
                        "forfaiterName": "民生银行天津分行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "MSBCCNBJ",
                        "rootName": "民生银行",
                        "isRoot": "0",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    }
                ]
            }
        }
    } else if (parentSwiftCode == 'MSBCCNBJ200') { 
        return {
            code: 200,
            message: '成功!',
            data: {
                "forfaiterList": [
                    {
                        "swiftCode": "MSBCCNBJ201",
                        "forfaiterName": "中信银行北京分行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "MSBCCNBJ",
                        "rootName": "民生银行",
                        "isRoot": "0",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    },
                    {
                        "swiftCode": "MSBCCNBJ201",
                        "forfaiterName": "中信银行天津分行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "MSBCCNBJ",
                        "rootName": "民生银行",
                        "isRoot": "0",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    }
                ]
            }
        }
    } else {
        return {
            code: 200,
            message: '成功!',
            data: {
                "forfaiterList": [
                    {
                        "swiftCode": "MSBCCNBJ100",
                        "forfaiterName": "民生银行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "",
                        "rootName": "",
                        "isRoot": "1",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    },
                    {
                        "swiftCode": "MSBCCNBJ200",
                        "forfaiterName": "中信银行",
                        "forfaiterStatus": "publish",
                        "rootSwiftCode": "",
                        "rootName": "",
                        "isRoot": "1",
                        "createTime": 1515052850000,
                        "updateTime": 1515052850000
                    }
                ]
            }
        }
    }
})