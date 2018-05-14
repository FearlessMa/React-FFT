webpackJsonp([7],{1320:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.MenuDetailContainer=void 0;var a,r,i,o=y(n(156)),l=y(n(157)),u=y(n(57)),d=y(n(410)),c=y(n(948)),s=y(n(161)),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(158),n(159),n(72),n(413),n(950),n(162);var m=y(n(1)),g=n(414),b=n(71),h=n(406);function y(e){return e&&e.__esModule?e:{default:e}}t.MenuDetailContainer=(0,b.connect)(function(e){return{detail:e.systemManager.menuManager.detail,loading:e.systemManager.menuManager.loading}},function(e){return{menuDetailSaga:function(t){return e((0,h.requestMenuDetail)(t))},menuRemovePermSaga:function(t){return e((0,h.requestMenuRemovePerm)(t))}}})((r=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));i.call(o);var l=o.props.match.params.menuId;return o.menuId=l,isNaN(l)&&o.props.history.push("/systemManager/menuManager"),o.props.menuDetailSaga({menuId:l}),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,m.default.Component),f(t,[{key:"render",value:function(){var e=this,t=[{title:"权限ID",dataIndex:"permId"},{title:"权限名称",dataIndex:"permName"},{title:"描述",dataIndex:"description"},{title:"操作",dataIndex:"",render:function(t,n){return m.default.createElement("div",null,m.default.createElement(u.default,{onClick:e.deletePermMenu.bind(e,n),type:"danger"},"解绑"))}}];return m.default.createElement(m.default.Fragment,null,m.default.createElement(x,p({},this.props,{columns:t,toBack:this.toBack,toEdit:this.toEdit})))}}]),t}(),i=function(){var e=this;this.toBack=function(){e.props.history.push("/systemManager/menuManager")},this.deletePermMenu=function(t){var n=e.menuId,a=e.props.menuRemovePermSaga;s.default.confirm({title:"是否解绑"+t.permName+"?",content:"解绑后将无法返回",okText:"解绑",okType:"danger",cancelText:"取消",onOk:function(){a({permId:t.permId,menuId:n})},onCancel:function(){}})},this.toEdit=function(){var t=e.menuId;e.props.history.push("/systemManager/menuManager/edit/"+t)}},a=r))||a;var v={labelCol:{xs:{span:24},sm:{span:8,offset:1}},wrapperCol:{xs:{span:24},sm:{span:15}}},x=function(e){var t={},n=[];try{t=e.detail.data.menu||{},n=e.detail.data.menu.perms||[]}catch(e){}var a=[{label:"菜单ID",id:"menuId",initialValue:t.menuId,type:"text",tag:"input",disabled:!0},{label:"菜单名称",id:"menuName",initialValue:t.menuName,type:"text",tag:"input",disabled:!0},{label:"父菜单Id",id:"parentMenuId",initialValue:t.parentMenuId,type:"text",tag:"input",disabled:!0}];return m.default.createElement(m.default.Fragment,null,m.default.createElement("div",{className:"containerContent"},m.default.createElement(o.default,null,m.default.createElement(l.default,{span:24},m.default.createElement("div",{style:{textAlign:"center"}},m.default.createElement(c.default,null,m.default.createElement("h2",null,"菜单详情"))))),m.default.createElement(g.FormComponent,{formList:a,layout:"horizontal",formItemLayout:v,moreItemInRow:!0,laoding:e.loading}),m.default.createElement(o.default,null,m.default.createElement(d.default,{loading:e.loading,columns:e.columns,dataSource:n,rowKey:"permId",bordered:!0})),m.default.createElement(o.default,null,m.default.createElement(l.default,{span:4,offset:8},m.default.createElement(u.default,{onClick:e.toEdit,type:"primary"},"编辑")),m.default.createElement(l.default,{span:4},m.default.createElement(u.default,{onClick:e.toBack},"返回")))))}},1321:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.MenuCreateContainer=void 0;var a,r,i,o=g(n(156)),l=g(n(157)),u=g(n(948)),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n(158),n(159),n(950);var s=g(n(1)),p=n(414),f=n(71),m=n(406);function g(e){return e&&e.__esModule?e:{default:e}}t.MenuCreateContainer=(0,f.connect)(function(e){return{create:e.systemManager.menuManager.create,loading:e.systemManager.menuManager.loading,menuDetail:e.systemManager.menuManager.detail}},function(e){return{menuCreateSaga:function(t){return e((0,m.requestMenuCreate)(t))},menuDetailSaga:function(t){return e((0,m.requestMenuDetail)(t))},menuEditSaga:function(t){return e((0,m.requestMenuEdit)(t))}}})((r=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));i.call(o);var l=o.props.match.params.menuId;return o.menuId=l,isNaN(l)&&void 0!==l&&alert("错误"),l?(o.props.menuDetailSaga({menuId:l}),o.state={componentTitle:"edit"}):o.state={componentTitle:"create"},o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),c(t,[{key:"render",value:function(){return s.default.createElement(s.default.Fragment,null,s.default.createElement(y,d({},this.props,{formSubmit:this.onSubmit,componentTitle:this.state.componentTitle})))}}]),t}(),i=function(){var e=this;this.onSubmit=function(t){var n=e.menuId;n?e.props.menuEditSaga(d({menuId:n},t)):e.props.menuCreateSaga(t)}},a=r))||a;var b={labelCol:{xs:{span:24},sm:{span:4,offset:4}},wrapperCol:{xs:{span:24},sm:{span:10}}},h={wrapperCol:{xs:{span:24},sm:{span:10,offset:10}}},y=function(e){var t="create"===e.componentTitle?"创建":"修改",n=[];try{"edit"===e.componentTitle&&((n=e.menuDetail.data.menu).sortNumber=n.sort)}catch(e){}var a=[{label:"菜单名称",id:"menuName",rules:{required:!0},type:"text",tag:"input",initialValue:n.menuName},{label:"父级菜单ID",id:"parentMenuId",type:"text",tag:"input",initialValue:n.parentMenuId},{label:"action",id:"action",type:"text",tag:"input",initialValue:n.action},{label:"tab",id:"tab",type:"text",tag:"input",initialValue:n.tab},{label:"排序号",id:"sort",rules:{required:!0},type:"text",tag:"input",initialValue:n.sortNumber}];return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{className:"containerContent"},s.default.createElement(o.default,null,s.default.createElement(l.default,{span:24},s.default.createElement("div",{style:{textAlign:"center"}},s.default.createElement(u.default,null,s.default.createElement("h2",null,t,"菜单"))))),s.default.createElement(p.FormComponent,{btn:{sub:t,back:"返回"},formList:a,formSubmit:e.formSubmit,layout:"horizontal",formItemLayout:b,formSubBtnLayout:h})))}},933:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a,r=h(n(156)),i=h(n(157)),o=h(n(57)),l=h(n(161)),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};n(158),n(159),n(72),n(162);var c=h(n(1)),s=n(94),p=n(160),f=n(71),m=n(406),g=n(1320),b=n(1321);function h(e){return e&&e.__esModule?e:{default:e}}var y={"/systemManager":"系统管理","/systemManager/menuManager":"菜单管理","/systemManager/menuManager/create":"创建菜单","/systemManager/menuManager/detail":"菜单详情","/systemManager/menuManager/edit":"编辑菜单"};t.default=function(e){return c.default.createElement(c.default.Fragment,null,c.default.createElement(p.BreadcrumbComponent,d({},e,{breadcrumbNameMap:y})),c.default.createElement(s.Switch,null,c.default.createElement(s.Route,{exact:!0,path:"/systemManager/menuManager",component:v}),c.default.createElement(s.Route,{path:"/systemManager/menuManager/create",component:b.MenuCreateContainer}),c.default.createElement(s.Route,{path:"/systemManager/menuManager/detail/:menuId",component:g.MenuDetailContainer}),c.default.createElement(s.Route,{path:"/systemManager/menuManager/edit/:menuId",component:b.MenuCreateContainer}),c.default.createElement(s.Redirect,{to:"/systemManager/menuManager"})))};var v=(0,f.connect)(function(e){return{index:e.systemManager.menuManager.index,loading:e.systemManager.menuManager.loading}},function(e){return{menuListSaga:function(t){return e((0,m.requestMenuList)(t))},menuDeleteSaga:function(t){return e((0,m.requestMenuDelete)(t))}}})(a=function(e){function t(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=Array(n),r=0;r<n;r++)a[r]=arguments[r];var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return i.onSubmit=function(e){e.pageSize=1e3,i.props.menuListSaga(e)},i.btnClick=function(){i.props.history.push("/systemManager/menuManager/create")},i.delete=function(e){var t=i.props.menuDeleteSaga;l.default.confirm({title:"是否删除"+e.menuName+"?",content:"删除后将无法返回",okText:"删除",okType:"danger",cancelText:"取消",onOk:function(){console.log(e.menuName),t({menuId:e.menuId})},onCancel:function(){console.log(e.menuName)}})},i.paginationOnChange=function(e){i.props.menuListSaga({current:e.current,pageSize:e.pageSize})},i.toEdit=function(e){i.props.history.push("/systemManager/menuManager/edit/"+e)},i.props.menuListSaga({pageSize:1e3}),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),u(t,[{key:"render",value:function(){var e=this,t=[{title:"菜单名称",dataIndex:"menuName",render:function(e,t){return c.default.createElement("a",{href:"#/systemManager/menuManager/detail/"+t.menuId},e)}},{title:"菜单ID",dataIndex:"menuId"},{title:"父菜单ID",dataIndex:"parentMenuId"},{title:"action",dataIndex:"action"},{title:"tab",dataIndex:"tab"},{title:"排序",dataIndex:"sort"},{title:"操作",dataIndex:"",render:function(t,n){return c.default.createElement("div",null,c.default.createElement(o.default,{onClick:e.toEdit.bind(e,n.menuId)},"编辑"),c.default.createElement(o.default,{type:"danger",onClick:e.delete.bind(e,n),style:{marginLeft:5}},"删除"))}}];return c.default.createElement(M,d({},this.props,{formSubmit:this.onSubmit,columns:t,componentTitle:"菜单列表",btnClick:this.btnClick,btnName:"创建菜单",onChange:this.paginationOnChange}))}}]),t}())||a,x=[{label:"菜单名称",id:"menuName",type:"text",tag:"input"},{label:"父菜单ID",id:"parentMenuId",type:"text",tag:"input"}],M=function(e){var t=[],n=[];try{t=(0,p.tranTreeData)(e.index.data.menuList,"menuId","parentMenuId","menuName"),n=e.index.data.pagination}catch(e){}return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"containerHeader"},c.default.createElement(r.default,null,c.default.createElement(i.default,{offset:3},c.default.createElement(p.FormComponent,{formList:x,btn:{sub:"搜索"},layout:"inline",formSubmit:e.formSubmit})))),c.default.createElement("div",{className:"containerContent"},c.default.createElement(p.TableComponent,d({},e,{dataSource:t,pagination:n,rowKey:"menuId"}))))}},948:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var a=l(n(6)),r=l(n(9));t.default=function(e){var t,n=e.prefixCls,l=void 0===n?"ant":n,d=e.type,c=void 0===d?"horizontal":d,s=e.orientation,p=void 0===s?"":s,f=e.className,m=e.children,g=e.dashed,b=u(e,["prefixCls","type","orientation","className","children","dashed"]),h=p.length>0?"-"+p:p,y=(0,o.default)(f,l+"-divider",l+"-divider-"+c,(t={},(0,r.default)(t,l+"-divider-with-text"+h,m),(0,r.default)(t,l+"-divider-dashed",!!g),t));return i.createElement("div",(0,a.default)({className:y},b),m&&i.createElement("span",{className:l+"-divider-inner-text"},m))};var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(1)),o=l(n(7));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};e.exports=t.default},950:function(e,t,n){n(13),n(955)},955:function(e,t,n){var a=n(956);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(12)(a,r);a.locals&&(e.exports=a.locals)},956:function(e,t,n){(e.exports=n(11)(!1)).push([e.i,'/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n.ant-divider {\n  font-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #e8e8e8;\n}\n.ant-divider,\n.ant-divider-vertical {\n  margin: 0 8px;\n  display: inline-block;\n  height: 0.9em;\n  width: 1px;\n  vertical-align: middle;\n  position: relative;\n  top: -0.06em;\n}\n.ant-divider-horizontal {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin: 24px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text:before,\n.ant-divider-horizontal.ant-divider-with-text:after {\n  content: \'\';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 50%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 24px;\n}\n.ant-divider-horizontal.ant-divider-with-text-left {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-left:before {\n  content: \'\';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left:after {\n  content: \'\';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-horizontal.ant-divider-with-text-right {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-right:before {\n  content: \'\';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right:after {\n  content: \'\';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-dashed {\n  background: none;\n  border-top: 1px dashed #e8e8e8;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed {\n  border-top: 0;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:before,\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:after {\n  border-style: dashed none none;\n}\n',""])}});