/*
 * @Author: mhc 
 * @Date: 2018-04-24 15:09:54 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 16:36:14
 */

import Mock from 'mockjs';

/** 发布的资金
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


/** 接收的资金列表
 * Path：/capital/listReceivedCapital
 * Method：POST
 **/

export const receivedFundsList = Mock.mock('/capital/listReceivedCapital', (option) => {

    return Mock.mock({
        "code": 200,
        "data": {
            "capitalList|5": [
                {
                    "capitalId": "@id()",
                    "forfaiterNm": "中信银行",
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
 * Path：/capital/detail
 * Method：POST
**/

export const fundsDetail = Mock.mock('/capital/detail', option => {
    const { capitalId } = JSON.parse(option.body);
    if(capitalId){
        return {
            code: 200,
            message: '成功',
            data: {
                "capitalId": "979524062367059968",
                "forfaiterNm": "民生银行北京分行",
                "forfaiterSc": "MSBCCNBJ100",
                "forfaiterAtten": "李四",
                "forfaiterContacts": "18200000000",
                "financingMaturity": "",
                "price": 0.15,
                "requirements": "",
                "priceValidStart": 1515052850000,
                "priceValidEnd": 1515052850000,
                "capitalStatus": "1",
                "forfaiter": '[{"BK_NM_C":"民生银行","BK_SC":"MSBCCNBJ","FORFEITER":[{"NM":"民生银行北京分行","SC":"MSBCCNBJ101"},{"NM":"民生银行北京分行1","SC":"MSBCCNBJ1011"},{"NM":"民生银行北京分行2","SC":"MSBCCNBJ1012"},{"NM":"民生银行北京分行3","SC":"MSBCCNBJ1013"},{"NM":"民生银行北京分行4","SC":"MSBCCNBJ1014"},{"NM":"民生银行北京分行5","SC":"MSBCCNBJ1015"},{"NM":"民生银行天津分行","SC":"MSBCCNBJ102"}]},{"BK_NM_C":"中信银行","BK_SC":"MSBCCNBJ200","FORFEITER":[]}]',
                "txId": "943d7109-070b-4f87-9da7-1824e0e6683a",
                "tranType": "1",
                "tranDate": 1515052850000,
                "extend": ""
            }
        }
    }
    return {
        code:400,
        message:'失败'
    }
    
})