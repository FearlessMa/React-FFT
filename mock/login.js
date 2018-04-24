/**
 * Created by MHC on 2018/3/13.
 */

import Mock from 'mockjs';

const templateRoot =Mock.mock({
    'array|3':[{
        action:'',
        'menuId|+1':[100,200,300],
        createTime:'@now()',
        'menuName|+1':[
            '首页',
            '系统管理',
            '其他业务模块',
        ],
        parentMenuId:'Root',
        sort:'@increment()',
        'tab|+1':[
            'home',
            'mail',
        ],
        updateTime: '@now()'
    }]
});
const systemManagerTemplate = Mock.mock({
    'array|6':[{
        'action|+1':[
            'systemManager/powerManager',
            'systemManager/menuManager',
            'systemManager/roleManager',
            'systemManager/userManager',
            'systemManager.organManager',
            'systemManager/pathManager'
        ],
        menuId: '@increment()',
        createTime:'@now()',
        'menuName|+1':[
            '权限管理',
            '菜单管理',
            '角色管理',
            '用户管理',
            '机构管理',
            'Path管理'
        ],
        parentMenuId:200,
        sort:'@increment()',
        tab: "",
        updateTime: '@now()'
    }]
});
const otherMenuListTemplate = Mock.mock({
    'array|2':[{
        'action|+1':[
            'businessSystem/fundsModule',
            'businessSystem/fundsModule112'
        ],
        menuId: '@increment()',
        createTime:'@now()',
        'menuName|+1':[
            '资金',
            '资金1'
        ],
        parentMenuId:300,
        sort:'@increment()',
        tab: "",
        updateTime: '@now()'
    }]
});

export const menuList =  [
    ...templateRoot.array,
    ...systemManagerTemplate.array,
    ...otherMenuListTemplate.array
];
export const loginMock =Mock.mock('/login',function (option) {
    const {username,password} = JSON.parse(option.body);
    if(username==='admin'&& password==='5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5'){
        return {
            message:'登陆成功',
            code:200,
            data:{
                "menulist":menuList,
                "user": {
                    "avatar": null,
                    "createTime": 1514969826000,
                    "email": "",
                    "employeeId": "",
                    "loginName": "admin",
                    "loginTime": 1515052983000,
                    "logoutTime": 1514969826000,
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

            },
        };
    }else{
        return {
            message:'登录失败,账号或密码错误！',
            code:'402'
        }
    }
});

