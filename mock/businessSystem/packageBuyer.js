/*
 * @Author: mhc 
 * @Date: 2018-04-28 10:11:28 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-14 10:42:04
 */


import Mock from 'mockjs';


/**包买商列表
 * Path：/forfaiter/list
 * Method：POST
**/

export const forfaiter = Mock.mock('/forfaiter/list', option => {
    // const { capitalId } = JSON.parse(option.body);
    return {
        code:200,
        message:'成功',
        data:{
            "pagination": {
                "current": 1,
                "pageSize": 5,
                "total": 2,
                "totalPage": 1
            },
            "forfaiterList": [
                {
                    "swiftCode": "MSBCCNBJ",
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
                },
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
                    "swiftCode": "MSBCCNBJ1011",
                    "forfaiterName": "民生银行北京分行1",
                    "forfaiterStatus": "publish",
                    "rootSwiftCode": "MSBCCNBJ",
                    "rootName": "民生银行",
                    "isRoot": "0",
                    "createTime": 1515052850000,
                    "updateTime": 1515052850000
                },
                {
                    "swiftCode": "MSBCCNBJ1012",
                    "forfaiterName": "民生银行北京分行2",
                    "forfaiterStatus": "publish",
                    "rootSwiftCode": "MSBCCNBJ",
                    "rootName": "民生银行",
                    "isRoot": "0",
                    "createTime": 1515052850000,
                    "updateTime": 1515052850000
                },
                {
                    "swiftCode": "MSBCCNBJ1013",
                    "forfaiterName": "民生银行北京分行3",
                    "forfaiterStatus": "publish",
                    "rootSwiftCode": "MSBCCNBJ",
                    "rootName": "民生银行",
                    "isRoot": "0",
                    "createTime": 1515052850000,
                    "updateTime": 1515052850000
                },
                {
                    "swiftCode": "MSBCCNBJ1014",
                    "forfaiterName": "民生银行北京分行4",
                    "forfaiterStatus": "publish",
                    "rootSwiftCode": "MSBCCNBJ",
                    "rootName": "民生银行",
                    "isRoot": "0",
                    "createTime": 1515052850000,
                    "updateTime": 1515052850000
                },
                {
                    "swiftCode": "MSBCCNBJ1015",
                    "forfaiterName": "民生银行北京分行5",
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
});



/**
 * Path：/forfaiter/syncAll
 * Method：POST
**/

export const syncAllForfaiter = Mock.mock('/forfaiter/syncAll',function(option){
    return {
        code:200,
        message:'成功'
    }
}) 
