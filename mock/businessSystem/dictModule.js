/*
 * @Author: mhc 
 * @Date: 2018-05-04 11:34:44 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-05-07 14:54:53
 */


import Mock from 'mockjs';

/**
 * Path：/dict/list
 * Method：POST
**/

export const dictList = Mock.mock('/dict/list', option => {

    return {
        "code": 200,
        "data": {
            "dictList": [
                {
                    "createTime": 1522371710000,
                    "dictClass": "tranType",
                    "dictDesc": "我发送的",
                    "dictId": "979524062367059968",
                    "dictKey": "send",
                    "dictValue": "0",
                    "extend": "",
                    "operator": "948478309976903680",
                    "updateTime": null
                }
            ],
            "pagination": {
                "current": 1,
                "pageSize": 10,
                "total": 60,
                "totalPage": 6
            }
        },
        "message": "SUCCESS"
    }
})


/**
 * Path：/dict/detail
 * Method：POST
**/

export const dictDetail = Mock.mock('/dict/detail', option => {
    const { dictId } = JSON.parse(option.body);
    if (dictId) {
        return {
            "code": 200,
            "data": {
                "createTime": 1522371710000,
                "dictClass": "tranType",
                "dictDesc": "我发送的",
                "dictId": "979524062367059968",
                "dictKey": "send",
                "dictValue": "0",
                "extend": "",
                "operator": "948478309976903680",
                "updateTime": null
            },
            "message": "SUCCESS"
        }
    }
    return {
        code: 400,
        message: 'err'
    }
});


/**
 * Path：/dict/delete
 * Method：POST
**/
export const dictDelete = Mock.mock('/dict/delete', option => {
    const { dictId } = JSON.parse(option.body);
    if (dictId) {
        return {
            code: 200,
            message: 'succ'
        }
    }
    return {
        code: 400,
        message: 'err'
    }
});

/**
 * Path：/dict/create
 * Method：POST
**/
export const dictCreate = Mock.mock('/dict/create', option => {
    return {
        code: 200,
        message: 'succ'
    }
});

