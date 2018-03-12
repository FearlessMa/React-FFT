/**
 * Created by MHC on 2018/3/1.
 */
import Mock from 'mockjs';

Mock.setup({
    timeout:'1000-2000'
});

Mock.mock('/login',function (option) {
    console.log(option);
    const {username,password} = JSON.parse(option.body);
    if(username==='admin'&& password==='12345'){
        let templateRoot =Mock.mock({
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
        let permChildTemplate = Mock.mock({
            'array|6':[{
            action:'',
            menuId: '@increment()',
            createTime:'@now()',
            'menuName|+1':[
                '权限管理',
                '菜单管理',
                '角色管理',
                '用户管理',
                '机构管理',
                '结构权限管理'
            ],
            parentMenuId:200,
            sort:'@increment()',
            tab: "",
            updateTime: '@now()'
        }]
        });

        return {
            message:'登陆成功',
            code:200,
            data:{
                "menulist": [
                    ...templateRoot.array,
                    ...permChildTemplate.array,

                ],
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
            code:'401'
        }
    }
    // return option
})