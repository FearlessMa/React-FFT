# 文档

## 目录

* [README](#README)

* [更新日志](#更新日志)

* [使用离线字体](#1.使用离线字体)

* [封装的公共组件与方法](#2.封装的公共组件与方法)
  * [saga与axios封装](#2.1saga与axios封装)
  * [表单组件](#2.2FormComponent组件)
  * [面包屑导航](#2.3面包屑导航BreadcrumbComponent)

## README

### 知识点需求

antd，react-router4,redux,redux-saga,Axios,generator,mockJS.

* dist目录下为打包后文件，目前预览使用
* 支持React Developer Tools和Redux DevTools调试工具，需要自己在浏览器中安装相应的插件即可使用。

### 生产版本打包

* 生产版本打(需注释掉src/index.js中引入的mockJs)

### 模块按需加载

* 按需加载在src/routers/lazyRouters里配置

## 1.使用离线字体

### 1.1配置方法

#### 1.1.1 方法1

```ruby

# 方法1(打包后需手动将字体文件放在dist目录下)
# 根目录创建theme/index.json添加以下内容：(修改主题配置在这里添加其他配置即可)
{
  "@icon-url":"'../fonts/iconfont/iconfont'"
}

# 根目录添加fonts/iconfont/antd字体文件。

# webpack配置
const theme = require('../theme');

# babel-plugin-import修改
    ["import", {libraryName: "antd", style: 'csÏs'}]
    # 改为
    ["import", {libraryName: "antd", style: true}]
# less配置
{
    test: /\.(less)$/,
    use:[
        {loader:'style-loader'},
        {
            loader:'css-loader',
            options: {
                url:false
            }
        },
        {
            loader:'less-loader',
            options: {
                javascriptEnabled: true,
                modifyVars: theme,
            }
        },
    ]
},

```

##### 1.1.2方法2

```ruby

# 方法2
# 在node_modules/antd/dist下添加fonts/iconfont/antd官网下载的离线字体包（本项目根目录下fonts/iconfont里为3.4版本字体）
# 修改node_modules/antd/lib/style/theme/default.less
# 代码70行左右修改为以下
@icon-url: "~antd/dist/fonts/iconfont/iconfont";

webpack配置
# babel-plugin-import修改
    ["import", {libraryName: "antd", style: 'css'}]
    # 改为
    ["import", {libraryName: "antd", style: true}]
# loader修改
    {
        test: /\.(less)$/,
        loader: ['style-loader', 'css-loader', 'less-loader']
    }
    # 改为
    {
        test: /\.(less)$/,
        use:[
            {loader:'style-loader'},
            {loader:'css-loader'},
            {loader:'less-loader',options: { javascriptEnabled: true }},
        ]
    }
    # 使用file-loader转换字体
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

### 2.1saga与axios封装

#### 2.1.1接口返回数据类型

* src/common/axios下是封装的axios
* publicConfig/axiso里可以配置config对象来设置所需的各种功能
* 参照[axios使用文档](https://www.kancloud.cn/yunye/axios/234845)

```ruby

const res = {
    message: '提示信息',
    code: '返回的状态码 Num',
    data: {
        # 请求返回的数据
    }
};

# 请求成功后后台返回操作结果的code
# 200 => 请求成功
# 400 => 请求失败
# 401 => 当前未登录
# 402 => 账号或密码错误
# 403 => 无权访问
# 404 => 资源不存在
# 500 => 系统错误

```

##### 2.1.2使用方法

* 方法名称 requestData
* requestData(config = {action, url, type, loadingMsg, dispatchLoading,method}, succCallback, callback
* 参数如下
* config :{
    action : axios 的请求参数,
    url : 请求地址,
    type ： 请求成功后 dispatch的type,
    loadingMsg ： 请求开始时 提示框的显示信息 （默认值：正在获取数据...）,
    dispatchLoading : 是否向store发送type:loading,
    method:不传默认post方法,(可选值'get','post')
 }
* succCallback : 请求成功后且data.code=200时回调函数 Fun 默认接受两个参数data.message为请求返回结果message，action为此次saga的action。
* dispatchCallback: 请求完成后可发送dispatch(action),dispatchCallback默认接受两个参数data为请求返回结果，action为此次saga的action。

```ruby

export function* watchRequestPathDelete() {
    while (true) {
        const action = yield take(REQUEST_PATH_DELETE);
        yield fork(requestData, {
            action,
            url:'/resPath/delete',
            type:PATH_DELETE,
            loadingMsg:'Path删除中...'
            # method没有 默认 method:'post'
        },succCallback,dispatchCallback);
    }
}

const succCallback = message => {
    alertModal('删除成功', message)
};
# code不等于200时需要处理其他事件的回调
const dispatchCallback = (data,action)=>{
    store.dispatch(requestPathManager());
};
```

### 2.2FormComponent组件

* 引入 import {FormComponent, tranTreeData} from 'common';

#### 2.2.1 参数说明

* Form组件接收的props
* formList ： 表单数据（必填）Array
* formSubmit ： 接受处理表单提交的值 （btn.sub填写后，formSubmit必填）Function
* selectData : selectTree组件数据 (数据结构必须树形结构，可以使tranTreeData转换成树形结构，tranTreeData(可转换树形结构的数据，子属性key,父属性key,显示的key)转换树形结构）Array
* treeSelectProps : selectTree组件配置 Obj 详情antd组件的selectTree
* treeData : Tree组件数据
* btn : {{back:'返回',sub:'提交'}} 显示按钮 Object
* layout : 'horizontal','vertical','inline' (为horizontal值时,填写formItemLayout和formSubBtnLayout）
* formItemLayout ：表单输入布局  Obj
* formSubBtnLayout ： 提交按钮布局   Obj
* toBack : 返回按钮的onClick回调 默认调用window.history.go(-1)   Fun
* moreItemInRow : 是否是一行显示多条item （布局不合适，可配置formItemLayout调整布局） Object
* onChange : 可以调用e.target获得当前表单的值     Fun
* checkbox : checkboxData 需要使用tranCheckboxData(数组数据,label属性key，value属性key)
* 组件可以使用组件嵌套(this.props.children)，children组件会显示在输入框组件和按钮组件之间
* 目前支持输入表单（input,textarea,treeSelect,tree,checkbox,date,select,number）

##### 2.2.2 使用方法

formList配置

```ruby

const formList = [
    {
        label: 'label', #label
        id: 'menuName',  #表单id
        type: 'text', #选填 表单输入类型 text | password
        tag: 'input', # 表单标签   antd的表单 目前支持input,textarea,select,tree,checkbox,date,treeSelect
        initialValue: menuInitValues.menuName， #默认值
        rules: {    #antd表单rules
            required: true,
        },
        config:{
            # config可以配置表单的各种标签属性 disabled等 详情产看antd
            placeholder:'123' 
        }
    }
]


```

tranTreeData

* 转为树形结构最终代码
* selectData: 数据数组         例如 orgList      Array
* id: 数据id                 例如  'orgId'       String
* parentId : 数据parentId    例如  'parentOrgId'              String
* name : 组件显示的name属性     例如    'orgName'                  String

```ruby

# 数据结构
[
     {
         id:'xxx',
         name:'xxx',
         parentId:'xxx',
         children:[]
     }
]

# 使用方法
import {tranTreeData} from 'common';
menuList = tranTreeData(props.index.data.menuList, 'menuId', 'parentMenuId', 'menuName');

```

FormComponent使用

```ruby

# 表单item布局
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
# button布局
const formSubBtnLayout = {
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10, offset: 5},
    }
};
# 表单配置项
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

<FormComponent
                btn={{sub: title, back: '返回'}}
                formList={formList}
                formSubmit={props.formSubmit}
                layout={'horizontal'}
                formItemLayout={formItemLayout}
                formSubBtnLayout={formSubBtnLayout}
                />
```

### 2.3 面包屑导航 BreadcrumbComponent

* 引入 import {BreadcrumbComponent} from 'common';

#### 2.3.1 参数配置

```ruby
# breadcrumbNameMap是path与显示名称的Map

const breadcrumbNameMap = {
    '/systemManager': '系统管理',
    '/systemManager/menuManager': '菜单管理',
    '/systemManager/menuManager/create': '创建菜单',
    '/systemManager/pathManager': 'Path管理',
};

# BreadcrumbComponent组件 需要获取路由的location.pathname属性来匹配breadcrumbNameMap的key值

< BreadcrumbComponent  location={props.location} breadcrumbNameMap={breadcrumbNameMap}/>

```

## 更新日志

### 2.1.4版本

更新时间：2018/7/6

更新内容：

>1.部分新功能开发完成

### 2.1.3版本

更新时间：2018/5/28

更新内容：

>1.优化flex样式

### 2.1.2版本

更新时间：2018/5/25

更新内容：

>1.增加babel-polyfill

### 2.1.1版本

更新时间：2018/5/21

更新内容：

>1.用户创建页面新增身份证号字段。

### 2.1.0版本

更新时间：2018/5/17

更新内容：

> 1.修复资金模块搜索组件问题
>
> 2.修复系统管理模块的一些显示bug
>
> 3.优化部分按钮（对按钮添加文字说明）
>
> 4.优化部分表单，表单format数据，及错误提示
>
> 5.TableComponet 组件增加按钮文字说明功能（tooltipText）

### 2.0.4版本

更新时间：2018/5/16

更新内容：

> 1.修复显示字段问题
>
> 2.暂时解决连接超时报错问题，可正常使用（问题还未解决）
>
> 3.修复因按需加载引起的样式问题

### 2.0.3版本

更新时间：2018/5/10

更新内容：

> 1.优化树形结构显示的table分页默认请求数量较少

### 2.0.2版本

更新时间：2018/5/9

更新内容：

> 1.增加菜单按照sort字段排序

### 2.0.1版本

更新时间：2018/5/9

更新内容：

> 1.修复因按需加载引起的一些bug

### 2.0.0版本

更新时间：2018/5/8

更新内容：

> 1.增加代码分割，实现按需加载
