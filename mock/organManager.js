/**
 * Created by MHC on 2018/3/13.
 */
import Mock from 'mockjs';

//queryList
export const queryorganListMock =Mock.mock('/org/list',(option)=>{
    const {name,realOrgId} = JSON.parse(option.body);
    if(realOrgId == 2){
        return Mock.mock({
            code:200,
            message:'成功!!',
            "orgList": [],
            "page": {
            "pageNo": 1,
                "recordsPerPage": 5,
                "total": 1,
                "totalPage": 1
            }
        })
    }else{
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
    }



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
    const {createData} = JSON.parse(option.body);
    console.log('createData');
    console.log(createData);
    return {
        code:200,
        message:'成功',
    }

});

export  const  orgDetail = Mock.mock('/org/detail',(option)=>{
    const { orgId } = JSON.parse(option.body);
    if(orgId == 948826538287435776){
        return {
            code:200,
            message:'成功',
            data:{
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
    }else{
        return {
            code:200,
            message:'成功',
            data:{
                "org": []
            }
        }
    }
});

// Path：/org/delete
// Method：POST
// TeslaFunctionName：cancelOrg
export  const  orgDelete = Mock.mock('/org/delete',(option)=>{
    const { orgId } = JSON.parse(option.body);
    if(orgId == 948826538287435776){
        return {
            code:200,
            message:'成功',
            data:{
                "replyInfo": "该机构下含有 2 个子机构，继续操作将删除所有机构！是否继续？",
                "confirm": "true"
            }

        }
    }else{
        return {
            code:200,
            message:'成功',
            data:{
            }
        }
    }

})


