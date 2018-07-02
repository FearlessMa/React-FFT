/**
 * Created by MHC on 2018/3/13.
 */

import Mock from 'mockjs';

const templateRoot = Mock.mock({
    'array|3': [{
        action: '',
        'menuId|+1': [100, 200, 300],
        createTime: '@now()',
        'menuName|+1': [
            '首页',
            '系统管理',
            '福费廷',
        ],
        parentMenuId: 'Root',
        sort: '@increment()',
        // 'sort|+1': [3, 1, 2],
        'tab|+1': [
            'home',
            'mail',
            'api',
        ],
        updateTime: '@now()'
    }]
});
const systemManagerTemplate = Mock.mock({
    'array|7': [{
        'action|+1': [
            'systemManager/powerManager',
            'systemManager/menuManager',
            'systemManager/roleManager',
            'systemManager/userManager',
            'systemManager.organManager',
            'systemManager/pathManager',
            'systemManager/dictManager',
        ],
        menuId: '@increment()',
        createTime: '@now()',
        'menuName|+1': [
            '权限管理',
            '菜单管理',
            '角色管理',
            '用户管理',
            '机构管理',
            'Path管理',
            '字典管理'
        ],
        parentMenuId: 200,
        sort: '@increment()',
        tab: "",
        updateTime: '@now()'
    }]
});
const otherMenuListTemplate = Mock.mock({
    'array|3': [{
        'action|+1': [
            '',
            'businessSystem/fundsModule',
            'businessSystem/packageBuyer',
            //'businessSystem/dict',
        ],
        // menuId: '@increment()',
        'menuId|+1': [599, 600, 700, 800],
        createTime: '@now()',
        'menuName|+1': [
            '预询价',
            '资金',
            '包买商',
            //'字典',
        ],
        parentMenuId: 300,
        sort: '@increment()',
        'tab|+1': [
            'notification',
            'pay-circle-o',
            ''
        ],
        updateTime: '@now()'
    }]
});

// 询价
const PreInquiryPrice = Mock.mock({
    'array|2': [
        {
            'action|+1': [
                'businessSystem/preInquiryPrice/ourBank',
                'businessSystem/preInquiryPrice/otherBank'
            ],
            menuId: '@increment()',
            createTime: '@now()',
            'menuName|+1': [
                '我行询价',
                '他行询价'
            ],
            parentMenuId: 599,
            sort: '@increment()',
            tab: "",
            updateTime: '@now()'
        }
    ]
})

const fundsModuleTemplate = Mock.mock({
    'array|2': [{
        'action|+1': [
            'businessSystem/fundsModule/publishFunds',
            'businessSystem/fundsModule/receivedFunds'
        ],
        menuId: '@increment()',
        createTime: '@now()',
        'menuName|+1': [
            '发布的资金',
            '接收的资金'
        ],
        parentMenuId: 600,
        sort: '@increment()',
        tab: "",
        updateTime: '@now()'
    }]
});

export const menuList = [
    ...templateRoot.array,
    ...systemManagerTemplate.array,
    ...otherMenuListTemplate.array,
    ...fundsModuleTemplate.array,
    ...PreInquiryPrice.array
];
export const loginMock = Mock.mock('/login', function (option) {
    const { username, password } = JSON.parse(option.body);
    if (username === 'admin' && password === '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5') {
        return {
            message: '登陆成功',
            code: 200,
            data: {
                "menulist": menuList,
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
    } else {
        return {
            message: '登录失败,账号或密码错误！',
            code: '402'
        }
    }
});

