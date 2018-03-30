/**
 * Created by MHC on 2018/3/20.
 */

import Mock from 'mockjs';

export const  pathManager = Mock.mock('/resPath/list',(option)=>{
    const { httpPath } = JSON.parse(option.body);
    if(httpPath == '/org/list'){
        return {
            code:200,
            message:'成功',
            data:{
                "pagination": {
                    "current": 1,
                    "pageSize": 10,
                    "total": 1,
                    "totalPage": 1
                },
                "pathList": [
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
    }else{
        return {
            code:200,
            message:'成功',
            data:{
                "pagination": {
                    "current": 1,
                    "pageSize": 10,
                    "total": 11,
                    "totalPage": 1
                },
                "pathList": [
                    {
                        "createTime": 1515134128000,
                        "description": "查询机构列表",
                        "httpMethodType": "POST",
                        "httpPath": "/org/list",
                        "pathId": "949167442412048384",
                        "updateTime": 1515134128000
                    },
                    {
                        "createTime": 1515401986000,
                        "description": "查询所有正常状态机构",
                        "httpMethodType": "POST",
                        "httpPath": "/org/listAll",
                        "pathId": "950290923199533056",
                        "updateTime": 1515401986000
                    }
                ]
            }
        }
    }

});

/**
 *  Path：/resPath/create
 *  Method：POST
 **/
export const pathCreate = Mock.mock('/resPath/create',(option)=>{
    const { httpPath, httpMethodType, description } = JSON.parse(option.body);
    if(httpPath){
        return {
            code:200,
            message:'成功',
        }
    }else{
        return {
            code:400,
            message:'失败',
        }
    }

});

/**
 *  Path：/resPath/edit
 *  Method：POST
 * **/
export const pathEdit = Mock.mock('/resPath/edit',(option)=>{
    const { pathId} = JSON.parse(option.body);
    if(pathId){
        return {
            code:200,
            message:'成功',
        }
    }else{
        return {
            code:400,
            message:'失败',
        }
    }

});


/**
 *  Path：/resPath/detail
 *  Method：POST
 **/
export const pathDetail = Mock.mock('/resPath/detail',(option)=>{
    const { pathId } = JSON.parse(option.body);
    if(pathId==949167442412048384){
        return {
            code:200,
            message:'成功',
            data:{
                "path": {
                    "createTime": 1515134128000,
                    "description": "查询机构列表",
                    "httpMethodType": "POST",
                    "httpPath": "/org/list",
                    "pathId": "949167442412048384",
                    "perms": [
                        {
                            "createTime": 1515050643000,
                            "description": "系统所有权限",
                            "parentPermId": "Root",
                            "permId": "948817283664711680",
                            "permName": "系统权限",
                            "updateTime": 1515050643000
                        }
                    ],
                    "updateTime": 1515134128000
                }
            }
        }
    }else{
        return {
            code:200,
            message:'成功,没有匹配的结果',
        }
    }

});

/**
 *  Path：/resPath/deletePermPath
 *  Method：POST
 **/
export const pathRemovePerm = Mock.mock('/resPath/deletePermPath',(option)=>{
    const { pathId } = JSON.parse(option.body);
        return {
            code:200,
            message:'成功',
        }
});

/**
 *  删除path
 *  Path：/resPath/delete
 *  Method：POST
 * **/
export const pathDelete = Mock.mock('/resPath/delete',(option)=>{
    const { pathId } = JSON.parse(option.body);
    return {
        code:200,
        message:'成功',
    }
});
