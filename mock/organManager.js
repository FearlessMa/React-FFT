/**
 * Created by MHC on 2018/3/13.
 */
import Mock from 'mockjs';

//queryList
export const queryorganListMock =Mock.mock('/org/list',(option)=>{
    let queryOrgListTemplate =Mock.mock({
        code:200,
        message:'成功',
        "orgList": [
            {
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
            }
        ],
        "page": {
            "pageNo": 1,
            "recordsPerPage": 5,
            "total": 1,
            "totalPage": 1
        }
    });
    return queryOrgListTemplate

});

// Path：/org/listAll
// Method：POST

export const queryAllOrgList =Mock.mock('/org/listAll',()=>{
    let template = Mock.mock({
        code:200,
        message:'成功',
        data:{
            "orgList": [
                {
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
                }
            ]
        }
    });
    return template
});


// Path：/org/create
// Method：POST

export const orgCreate = Mock.mock('/org/create',(option)=>{
    const createData = JSON.parse(option.body);
    console.log('createData');
    console.log(createData);
    return {
        code:200,
        message:'成功',
    }

});
