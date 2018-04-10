# 说明

## 知识点需求
antd的前端UI框架，react-router4，redux状态管理，redux-saga，Axios,generator函数

## 1.使用离线字体
1.1修改antd
```
在node_modules/antd/dist下添加fonts/iconfont/antd官网下载的离线字体包（本项目根目录下fonts里为3.4版本字体）
修改node_modules/antd/lib/style/theme/default.less
代码70行左右修改为以下
@icon-url: "~antd/dist/fonts/iconfont/iconfont";

```
1.2修改webpack配置
```
//babel-plugin-import修改
    ["import", {libraryName: "antd", style: 'css'}]
    //改为
    ["import", {libraryName: "antd", style: true}]
    
//loader修改
    {
        test: /\.(less)$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
    }
    //改为
    {
        test: /\.(less)$/,
        use:[
            {loader:'style-loader'},
            {loader:'css-loader'},
            {loader:'less-loader',options: { javascriptEnabled: true }},
        ]
    }
    //使用file-loader转换字体
    {
        test:/\.(eot|svg|ttf|woff|woff2)$/,
        include:[
            path.resolve(__dirname,'../node_modules/antd')
        ],
        loader:'file-loader',
        options:{
            name:'fonts/iconfont/[name].[ext]'
        }
    }

```

## 2.基于antd封装的公共组件

### 2.1 saga与axios封装

#### 2.1.1 接口返回数据类型 
```
const res = {
    message: '提示信息',
    code: '返回的状态码 Num',
    data: {
        //请求返回的数据
    }
};

请求成功后后台返回操作结果的code 
200 => 请求成功
400 => 请求失败 
401 => 当前未登录 
402 => 账号或密码错误 
403 => 无权访问
500 => 系统错误

```
 * 方法名称 requestData
 * requestData(config = {action, url, type, loadingMsg, dispatchLoading}, succCallback, callback) 
 * 参数如下
 * config :{
    action : axios 的请求参数
    url : 请求地址
    type ： 请求成功后 dispatch的type
    loadingMsg ： 请求开始时 提示框的显示信息 （默认值：正在获取数据...）
    dispatchLoading : 是否向store发送type:loading
 }
 * succCallback : 请求成功后回调函数 Fun
 * callback: code!==200时回调函数

```
export function* watchRequestOrgCreate() {
    while (true) {
        const action = yield take(REQUEST_ORG_CREATE);
        yield fork(requestData, {
            action,
            url: '/org/create',
            type: ORG_CREATE,
            loadingMsg: '正在提交...'
        }, createSucc);
    }
}
```