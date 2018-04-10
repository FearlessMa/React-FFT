# 说明

## 知识点需求
antd的前端UI框架，react-router4，redux状态管理，redux-saga，Axios,generator函数，mockJS。
* dist目录下为打包后文件，目前预览使用
## 生成版本打包
目前生成版本需手动去掉src/index.js中的mockJS和redux-saga-logger插件。
## 1.使用离线字体
### 1.1配置方法
##### 1.1.1修改antd
```
在node_modules/antd/dist下添加fonts/iconfont/antd官网下载的离线字体包（本项目根目录下fonts里为3.4版本字体）
修改node_modules/antd/lib/style/theme/default.less
代码70行左右修改为以下
@icon-url: "~antd/dist/fonts/iconfont/iconfont";

```
##### 1.1.2修改webpack配置
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

## 2.封装的公共组件与方法

### 2.1 saga与axios封装

##### 2.1.1接口返回数据类型 
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
404 => 资源不存在
500 => 系统错误

```
##### 2.1.2使用方法
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
 * succCallback : 请求成功后且data.code=200时回调函数 Fun 默认接受两个参数data.message为请求返回结果message，action为此次saga的action。
 * dispatchCallback: 请求完成后可发送dispatch(action),dispatchCallback默认接受两个参数data为请求返回结果，action为此次saga的action。

```
export function* watchRequestPathDelete() {
    while (true) {
        const action = yield take(REQUEST_PATH_DELETE);
        yield fork(requestData, {
            action,
            url:'/resPath/delete',
            type:PATH_DELETE,
            loadingMsg:'Path删除中...'
        },succCallback,dispatchCallback);
    }
}
 const dispatchCallback = (data,action)=>{
    store.dispatch(clearPathDeleteData());
    store.dispatch(requestPathManager());
 };
```

### 2.2FormComponent组件

##### 2.2.1 参数说明
 * Form组件接收的props
 *  formList ： 表单数据（必填）Array
 *  formSubmit ： 接受处理表单提交的值 （btn.sub填写formSubmit必填）Function
 *  selectData : selectTree组件数据 (必须树形结构，可以使tranTreeData(可转换树形结构的数据，子属性key,父属性key,显示的key)转换树形结构）Array
 *  treeSelectProps : selectTree组件配置 Obj
 *  treeData : Tree组件数据
 *  btn : {{back:'返回',sub:'提交'}} 显示按钮 Object
 *  layout : 'horizontal','vertical','inline' (horizontal值时填写formItemLayout和formSubBtnLayout）
 *  formItemLayout ：表单输入布局  Obj
 *  formSubBtnLayout ： 提交按钮布局   Obj
 *  toBack : 返回按钮的onClick时间 Function
 *  moreItemInRow : 是否是一行显示多条item （布局不合适可配置formItemLayout） Object
 *  onChange : 可以调用e.target获得当前表单的值
 *  checkbox : checkboxData 需要使用tranCheckboxData(数组数据,label属性key，value属性key)
 
##### 2.2.2 使用方法
formList配置
```
const formList = [
    {
        label: 'label', //label
        id: 'menuName',  //表单id
        rules: {    //antd表单rules
            required: true,
        },
        type: 'text', //表单输入类型 text | password
        tag: 'input', // 表单标签   antd的表单 目前支持input,textarea,select,tree,checkbox,
        initialValue: menuInitValues.menuName //默认值
    }
]


```

FormComponent使用
```
//表单item布局
const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4, offset: 1},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10},
    },
};
//button布局
const formSubBtnLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10, offset: 5},
    }
};
//表单配置项
const formList = [
    {
        label: '菜单名称',
        id: 'menuName',
        rules: {
            required: true,
        },
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.menuName
    }
    ...
];

< FormComponent 
                btn={{sub: title, back: '返回'}}
                formList={formList} 
                formSubmit={props.formSubmit}
                layout={'horizontal'} 
                formItemLayout={formItemLayout} 
                formSubBtnLayout={formSubBtnLayout}
                />
```