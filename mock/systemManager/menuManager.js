/**
 * Created by MHC on 2018/3/21.
 */
import Mock from 'mockjs';
import {menuList} from '../login';

/**
 * Path：/resMenu/list
 * Method：POST
 **/

export const menuListTemplate = Mock.mock('/resMenu/list', (option) => {
    const {menuName, parentMenuId} = JSON.parse(option.body);
    if (menuName === '首页' || parentMenuId === 'ROOT') {
        return {
            code: 200,
            message: '成功',
            data: {
                "page": {
                    "pageNo": 1,
                    "recordsPerPage": 2,
                    "total": 19,
                    "totalPage": 10
                },
                "menuList": [{
                    "action": "",
                    "createTime": 1515054195000,
                    "menuId": "948832180821692416",
                    "menuName": "首页",
                    "parentMenuId": "Root",
                    "sort": 1,
                    "tab": "home",
                    "updateTime": 1515054195000
                }],
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
            "menuList": menuList
        }
    }
});

/**
 * Path：/resMenu/delete
 * Method：POST
 **/

export const menuDelete = Mock.mock('/resMenu/delete', (option) => {
    const {menuId} = JSON.parse(option.body);
    return {
        code :200,
        message : '成功',
        data :{
            "replyInfo": "该菜单下含有 2 个子菜单，继续操作将删除所有菜单！是否继续？",
            "confirm": "true"
        }
    }
});

/**
 * Path：/resMenu/detail
 * Method：POST
 **/

export const menuDetail = Mock.mock('/resMenu/detail', (option) => {
    const {menuId} = JSON.parse(option.body);
    return {
        code :200,
        message : '成功',
        data :{
            "menu": {
                "action": "",
                "createTime": 1515054195000,
                "menuId": "948832180821692416",
                "menuName": "首页",
                "parentMenuId": "Root",
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
                "sort": 1,
                "tab": "home",
                "updateTime": 1515054195000
            }
        }
    }
});

/**
 *  Path：/resPath/deletePermMenu
 *  Method：POST
 **/
export const pathRemovePerm = Mock.mock('/resMenu/deletePermMenu',(option)=>{
    const { menuId } = JSON.parse(option.body);
    return {
        code:200,
        message:'成功',
    }
});

/**
 * Path：/resMenu/create
 * Method：POST
 **/

export const menuCreate = Mock.mock('/resMenu/create',(option)=>{
    const { menuName, parentMenuId, action, tab, sort } = JSON.parse(option.body);
    if(menuName){
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
 * Path：/resMenu/edit
 * Method：POST
 **/

export const menuEdit = Mock.mock('/resMenu/edit',(option)=>{
    const { menuId,menuName, parentMenuId, action, tab, sort } = JSON.parse(option.body);
    if(menuId){
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