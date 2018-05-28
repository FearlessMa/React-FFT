webpackJsonp([4],{

/***/ 1279:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _breadcrumbNameMap, _dec, _class;

__webpack_require__(249);

__webpack_require__(250);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(161);

var _common = __webpack_require__(251);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(532);

var _createANDedit = __webpack_require__(1667);

var _detail = __webpack_require__(1668);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by MHC on 2018/3/27.
                                                                                                                                                                                                                   */


var breadcrumbName = 'user';
var breadcrumbNameMap = (_breadcrumbNameMap = {
    '/systemManager': '系统管理'
}, _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager', '用户管理'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/create', '创建用户'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/detail', '用户详情'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/edit', '编辑用户'), _breadcrumbNameMap);

var UserManagerLayout = function UserManagerLayout(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_common.BreadcrumbComponent, _extends({}, props, { breadcrumbNameMap: breadcrumbNameMap })),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/userManager/create', component: _createANDedit.UserCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/userManager/detail/:userId', component: _detail.UserDetailContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/userManager/edit/:userId', component: _createANDedit.UserCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/systemManager/userManager', component: UserManagerContainer }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/systemManager/userManager' })
        )
    );
};

exports.default = UserManagerLayout;


var mapStateToProps = function mapStateToProps(state) {
    return {
        loading: state.systemManager.userManager.loading,
        index: state.systemManager.userManager.index
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userListSaga: function userListSaga(values) {
            return dispatch((0, _actions.requestUserList)(values));
        }
    };
};

var UserManagerContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(UserManagerContainer, _React$Component);

    function UserManagerContainer() {
        var _ref;

        _classCallCheck(this, UserManagerContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = UserManagerContainer.__proto__ || Object.getPrototypeOf(UserManagerContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            _this.props.userListSaga(values);
        };

        _this.btnClick = function () {
            _this.props.history.push('/systemManager/userManager/create');
        };

        _this.paginationOnChange = function (pagination) {
            _this.props.userListSaga({ current: pagination.current, pageSize: pagination.pageSize });
        };

        _this.props.userListSaga();
        return _this;
    }

    //分页


    _createClass(UserManagerContainer, [{
        key: 'render',
        value: function render() {

            var columns = [{
                title: '登录名',
                dataIndex: 'loginName',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'a',
                        { href: '#/systemManager/userManager/detail/' + record.userId },
                        text
                    );
                }
            }, {
                title: '用户姓名',
                dataIndex: 'userName'
            }, {
                title: '固定电话',
                dataIndex: 'telephone'
            }, {
                title: '移动电话',
                dataIndex: 'mobile'
            }, {
                title: '地址',
                dataIndex: 'userAddress'
            }, {
                title: '邮箱',
                dataIndex: 'email'
            }, {
                title: '状态',
                dataIndex: 'status',
                render: function render(text) {
                    var show = text;
                    if (text === "NORMAL") {
                        show = "正常";
                    } else if (text === "CANCEL") {
                        show = "作废";
                    } else if (text === "LOCKED") {
                        show = "锁定";
                    } else {
                        show = text;
                    }
                    return _react2.default.createElement(
                        'span',
                        null,
                        show
                    );
                }
            }];

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(UserManagerContent, _extends({ columns: columns, formSubmit: this.onSubmit, btnClick: this.btnClick
                }, this.props, { onChange: this.paginationOnChange }))
            );
        }
    }]);

    return UserManagerContainer;
}(_react2.default.Component)) || _class);


var searchComponentData = [{
    label: '登录名',
    id: 'loginName',
    type: 'text',
    tag: 'input'
}, {
    label: '用户名',
    id: 'userName',
    type: 'text',
    tag: 'input'
}];

var UserManagerContent = function UserManagerContent(props) {
    var tableData = [];
    var pagination = [];
    try {
        tableData = props.index.data.userList;
        pagination = props.index.data.pagination;
    } catch (err) {}
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'containerHeader' },
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { offset: 3 },
                    _react2.default.createElement(_common.FormComponent, { formList: searchComponentData,
                        btn: { sub: '搜索' },
                        layout: 'inline',
                        formSubmit: props.formSubmit
                    })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'containerContent' },
            _react2.default.createElement(_common.TableComponent, _extends({}, props, { btnName: '创建用户', componentTitle: '用户列表',
                rowKey: 'userId', dataSource: tableData, bordered: true,
                pagination: pagination, onChange: props.onChange }))
        )
    );
};

/***/ }),

/***/ 1288:
/***/ (function(module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(7);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(10);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports['default'] = Divider;

var _react = __webpack_require__(1);

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj['default'] = obj;return newObj;
    }
}

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { 'default': obj };
}

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
function Divider(_a) {
    var _classNames;

    var _a$prefixCls = _a.prefixCls,
        prefixCls = _a$prefixCls === undefined ? 'ant' : _a$prefixCls,
        _a$type = _a.type,
        type = _a$type === undefined ? 'horizontal' : _a$type,
        _a$orientation = _a.orientation,
        orientation = _a$orientation === undefined ? '' : _a$orientation,
        className = _a.className,
        children = _a.children,
        dashed = _a.dashed,
        restProps = __rest(_a, ["prefixCls", "type", "orientation", "className", "children", "dashed"]);

    var orientationPrefix = orientation.length > 0 ? '-' + orientation : orientation;
    var classString = (0, _classnames2['default'])(className, prefixCls + '-divider', prefixCls + '-divider-' + type, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-divider-with-text' + orientationPrefix, children), (0, _defineProperty3['default'])(_classNames, prefixCls + '-divider-dashed', !!dashed), _classNames));
    return React.createElement('div', (0, _extends3['default'])({ className: classString }, restProps), children && React.createElement('span', { className: prefixCls + '-divider-inner-text' }, children));
}
module.exports = exports['default'];

/***/ }),

/***/ 1290:
/***/ (function(module, exports, __webpack_require__) {



__webpack_require__(18);

__webpack_require__(1295);

/***/ }),

/***/ 1295:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1296);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(17)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../../css-loader/index.js??ref--2-1!../../../../less-loader/dist/cjs.js??ref--2-2!./index.less", function() {
		var newContent = require("!!../../../../css-loader/index.js??ref--2-1!../../../../less-loader/dist/cjs.js??ref--2-2!./index.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1296:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-divider {\n  font-family: \"Monospaced Number\", \"Chinese Quote\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.5;\n  color: rgba(0, 0, 0, 0.65);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #e8e8e8;\n}\n.ant-divider,\n.ant-divider-vertical {\n  margin: 0 8px;\n  display: inline-block;\n  height: 0.9em;\n  width: 1px;\n  vertical-align: middle;\n  position: relative;\n  top: -0.06em;\n}\n.ant-divider-horizontal {\n  display: block;\n  height: 1px;\n  width: 100%;\n  margin: 24px 0;\n  clear: both;\n}\n.ant-divider-horizontal.ant-divider-with-text {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 16px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text:before,\n.ant-divider-horizontal.ant-divider-with-text:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 50%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-inner-text {\n  display: inline-block;\n  padding: 0 24px;\n}\n.ant-divider-horizontal.ant-divider-with-text-left {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-left:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-left-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-horizontal.ant-divider-with-text-right {\n  display: table;\n  white-space: nowrap;\n  text-align: center;\n  background: transparent;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 14px;\n  margin: 16px 0;\n}\n.ant-divider-horizontal.ant-divider-with-text-right:before {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 95%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right:after {\n  content: '';\n  display: table-cell;\n  position: relative;\n  top: 50%;\n  width: 5%;\n  border-top: 1px solid #e8e8e8;\n  transform: translateY(50%);\n}\n.ant-divider-horizontal.ant-divider-with-text-right-inner-text {\n  display: inline-block;\n  padding: 0 10px;\n}\n.ant-divider-dashed {\n  background: none;\n  border-top: 1px dashed #e8e8e8;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed {\n  border-top: 0;\n}\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:before,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed:before,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed:before,\n.ant-divider-horizontal.ant-divider-with-text.ant-divider-dashed:after,\n.ant-divider-horizontal.ant-divider-with-text-left.ant-divider-dashed:after,\n.ant-divider-horizontal.ant-divider-with-text-right.ant-divider-dashed:after {\n  border-style: dashed none none;\n}\n", ""]);

// exports


/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserCreateContainer = undefined;

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /**
                   * Created by MHC on 2018/3/27.
                   */


__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(251);

var _actions = __webpack_require__(532);

var _reactRedux = __webpack_require__(123);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        //机构列表数据
        organCreate: state.systemManager.organManager.create,
        //角色列表
        roleListIndex: state.systemManager.roleManager.index,
        userDetail: state.systemManager.userManager.detail,
        loading: state.systemManager.userManager.loading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        requestAllOrgList: function requestAllOrgList(values) {
            return dispatch((0, _actions.requestAllOrgList)(values));
        },
        roleListSaga: function roleListSaga(values) {
            return dispatch((0, _actions.requestRoleList)(values));
        },
        userCreateSaga: function userCreateSaga(values) {
            return dispatch((0, _actions.requestUserCreate)(values));
        },
        userDetailSaga: function userDetailSaga(value) {
            return dispatch((0, _actions.requestUserDetail)(value));
        }
    };
};

var UserCreateContainer = exports.UserCreateContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(UserCreateContainer, _React$Component);

    function UserCreateContainer() {
        var _ref;

        _classCallCheck(this, UserCreateContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = UserCreateContainer.__proto__ || Object.getPrototypeOf(UserCreateContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            console.log(values);
            _this.props.userCreateSaga(values);
        };

        _this.onChange = function (e) {
            if (e.target.id === 'password') {
                _this.setState({
                    password: e.target.value
                });
            }
        };

        _this.checkPassword = function (rules, v, callback) {
            var password = _this.state.password;
            _this.setState({ resPassword: v });
            if (!v) callback('密码不能为空');
            if (password && password !== v) {
                callback('输入的密码不一致');
            } else {
                callback();
            }
        };

        _this.checkResPassword = function (rules, v, callback) {
            var resPassword = _this.state.resPassword;
            if (!v) callback('密码不能为空');
            if (v && resPassword && v !== resPassword) {
                callback('输入的密码不一致');
            } else {
                callback();
            }
        };

        _this.props.requestAllOrgList({ pageSize: 1000 });
        _this.props.roleListSaga({ pageSize: 1000 });
        var componentTitle = 'create';
        var userId = _this.props.match.params.userId;
        if (isNaN(userId) && userId !== undefined || userId === '') {
            //TODO
            _this.props.history.push('/systemManager/userManager');
        }
        if (userId) {
            _this.props.userDetailSaga({ userId: userId });
            componentTitle = 'edit';
        }
        _this.state = {
            password: '',
            resPassword: '',
            componentTitle: componentTitle
        };
        return _this;
    }

    //form 表单onChange


    _createClass(UserCreateContainer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(UserCreateContent, _extends({ formSubmit: this.onSubmit, onChange: this.onChange,
                    checkResPassword: this.checkResPassword, checkPassword: this.checkPassword,
                    componentTitle: this.state.componentTitle }, this.props))
            );
        }
    }]);

    return UserCreateContainer;
}(_react2.default.Component)) || _class);


var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
    }
};
var formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10, offset: 10 }
    }
};

var UserCreateContent = function UserCreateContent(props) {
    var selectData = [];
    var checkboxData = [];
    var initialValueData = {};
    var checkboxInitValue = [];
    var componentTitle = props.componentTitle === 'create' ? '创建' : '修改';
    try {
        selectData = (0, _common.tranTreeData)(props.organCreate.orgAllList.data.orgList, 'orgId', 'parentOrgId', 'shortName');
        checkboxData = (0, _common.tranCheckboxData)(props.roleListIndex.data.roleList, 'roleName', 'roleId');
        if (props.componentTitle === 'edit') {
            initialValueData = props.userDetail.data.user;
            var roleList = props.userDetail.data.roleList;
            if (roleList) {
                roleList.map(function (item) {
                    return checkboxInitValue.push(item.roleId);
                });
            }
        }
    } catch (err) {}
    var passwordRules = {
        required: true,
        disabled: false
    };
    if (props.componentTitle === 'edit') {
        passwordRules.required = false;
        passwordRules.disabled = true;
    }
    var formList = [{
        label: '登录名',
        id: 'loginName',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '登录名必填'
        },
        initialValue: initialValueData.loginName
    }, {
        label: '用户名',
        id: 'userName',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '用户名必填'
        },
        initialValue: initialValueData.userName
    }, {
        label: '用户密码',
        id: 'password',
        type: 'password',
        tag: 'input',
        rules: {
            required: passwordRules.required,
            validator: props.checkResPassword
        },
        disabled: passwordRules.disabled
    }, {
        label: '确认密码',
        id: 'rePassword',
        type: 'password',
        tag: 'input',
        rules: {
            required: passwordRules.required,
            validator: props.checkPassword
        },
        disabled: passwordRules.disabled
    }, {
        label: '固定电话',
        id: 'telephone',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '固定电话必填'
        },
        initialValue: initialValueData.telephone
    }, {
        label: '移动电话',
        id: 'mobile',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '移动电话必填'
        },
        initialValue: initialValueData.mobile
    }, {
        label: '地址',
        id: 'userAddress',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '地址必填'
        },
        initialValue: initialValueData.userAddress
    }, {
        label: '邮箱',
        id: 'email',
        type: 'text',
        tag: 'input',
        rules: {
            required: true,
            message: '邮箱必填'
        },
        initialValue: initialValueData.email
    }, {
        label: '身份证号',
        id: 'idNo',
        type: 'number',
        tag: 'input',
        rules: {
            max: 18,
            min: 18,
            message: '身份证必须为18位'
        },
        initialValue: initialValueData.mobile
    }, {
        label: '所属机构',
        id: 'orgId',
        rules: {
            required: true,
            message: '请输选择机构！'
        },
        type: 'text',
        tag: 'treeSelect',
        initialValue: initialValueData.orgId

    }, {
        label: '角色',
        id: 'roleIds',
        tag: 'checkbox',
        initialValue: checkboxInitValue,
        rules: {
            required: true,
            message: '用户角色必填'
        }
    }];

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'containerContent' },
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { span: 24 },
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            _divider2.default,
                            null,
                            _react2.default.createElement(
                                'h2',
                                null,
                                componentTitle,
                                '\u7528\u6237'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_common.FormComponent, { formList: formList,
                formItemLayout: formItemLayout,
                formSubBtnLayout: formSubBtnLayout,
                btn: { sub: componentTitle, back: '返回' },
                formSubmit: props.formSubmit,
                layout: 'horizontal',
                moreItemInRow: true,
                onChange: props.onChange,
                selectData: selectData,
                checkboxData: checkboxData })
        )
    );
};

/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserDetailContainer = undefined;

var _input = __webpack_require__(534);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _message2 = __webpack_require__(165);

var _message3 = _interopRequireDefault(_message2);

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps; /**
                                                     * Created by MHC on 2018/3/28.
                                                     */


__webpack_require__(104);

__webpack_require__(125);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

__webpack_require__(169);

__webpack_require__(254);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(532);

var _common = __webpack_require__(251);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        userDetail: state.systemManager.userManager.detail,
        loading: state.systemManager.userManager.loading,
        userModalVisible: state.systemManager.userManager.userModalVisible,
        changePwdModalVisible: state.systemManager.userManager.changePwdModalVisible
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        userDetailSaga: function userDetailSaga(value) {
            return dispatch((0, _actions.requestUserDetail)(value));
        },
        userDeleteSaga: function userDeleteSaga(value) {
            return dispatch((0, _actions.requestUserDelete)(value));
        },
        userChangeStatusSaga: function userChangeStatusSaga(value) {
            return dispatch((0, _actions.requestUserChangeStatus)(value));
        },
        dispatchUserModalVisible: function dispatchUserModalVisible(value) {
            return dispatch((0, _actions.userDetailModalVisible)(value));
        },
        disUserPwdModalVisible: function disUserPwdModalVisible(value) {
            return dispatch((0, _actions.userChangePwdModalVisible)(value));
        },
        userChangePwdSaga: function userChangePwdSaga(values) {
            return dispatch((0, _actions.requestUserChangePwd)(values));
        }
    };
};

var UserDetailContainer = exports.UserDetailContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(UserDetailContainer, _React$Component);

    function UserDetailContainer() {
        var _ref;

        _classCallCheck(this, UserDetailContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = UserDetailContainer.__proto__ || Object.getPrototypeOf(UserDetailContainer)).call.apply(_ref, [this].concat(arg)));

        _initialiseProps.call(_this);

        var userId = _this.props.match.params.userId;
        _this.userId = userId;
        if (isNaN(userId)) {
            _this.props.history.push('/systemManager/userManager');
        }
        _this.props.userDetailSaga({ userId: userId });
        _this.state = {
            password: '',
            newPassword: ''
        };
        return _this;
    }

    //Modal组件状态切换显示


    //切换状态


    _createClass(UserDetailContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(UserDetailContent, _extends({ userDelete: this.userDelete,
                    toggleModal: this.toggleModal,
                    toggleStatus: this.toggleStatus,
                    toggleChangePwdModal: this.toggleChangePwdModal,
                    onChangePwdValue: this.onChangePwdValue,
                    submitPwd: this.submitPwd,
                    toEdit: this.toEdit }, this.props))
            );
        }
    }]);

    return UserDetailContainer;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.userDelete = function () {
        var userId = _this2.userId;
        var userDeleteSaga = _this2.props.userDeleteSaga;
        _modal2.default.confirm({
            title: '\u662F\u5426\u5220\u9664?',
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: function onOk() {
                userDeleteSaga({ userId: userId });
            },
            onCancel: function onCancel() {
                //TODO
            }
        });
    };

    this.toggleModal = function () {
        _this2.props.dispatchUserModalVisible({ userModalVisible: !_this2.props.userModalVisible });
    };

    this.toggleStatus = function (status) {
        var userId = _this2.userId;
        _this2.props.userChangeStatusSaga({ userId: userId, status: status });
        _this2.toggleModal();
    };

    this.toEdit = function () {
        var userId = _this2.userId;
        _this2.props.history.push('/systemManager/userManager/edit/' + userId);
    };

    this.toggleChangePwdModal = function () {
        _this2.props.disUserPwdModalVisible({ changePwdModalVisible: !_this2.props.changePwdModalVisible });
    };

    this.onChangePwdValue = function (e) {
        _this2.setState(_defineProperty({}, e.target.id, e.target.value));
    };

    this.submitPwd = function () {
        var userId = _this2.userId;
        var _state = _this2.state,
            password = _state.password,
            newPassword = _state.newPassword;

        if (newPassword && password) {
            _this2.props.userChangePwdSaga({
                userId: userId,
                password: password,
                newPassword: newPassword
            });
        } else {
            _message3.default.error('不能为空', 1);
        }
    };
}, _temp)) || _class);


var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8, offset: 1 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
    }
};

var UserDetailContent = function UserDetailContent(props) {
    var initData = {
        createTime: 0,
        updateTime: 0,
        loginTime: 0
    };
    var rolesData = [];
    try {
        initData = props.userDetail.data.user;
        var roleList = props.userDetail.data.roleList;
        if (roleList) {
            roleList.map(function (item) {
                return rolesData.push(item.roleName);
            });
        }
    } catch (err) {}
    var formList = [{
        label: '登录名',
        id: 'loginName',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.loginName
    }, {
        label: '用户名',
        id: 'userName',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.userName
    }, {
        label: '固定电话',
        id: 'telephone',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.telephone
    }, {
        label: '移动电话',
        id: 'mobile',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.mobile
    }, {
        label: '地址',
        id: 'userAddress',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.userAddress
    }, {
        label: '邮箱',
        id: 'email',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.email
    }, {
        label: '状态',
        id: 'status',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: initData.status === "NORMAL" ? '正常' : initData.status === "CANCEL" ? '作废' : initData.status === "LOCKED" ? '锁定' : ''
    }, {
        label: '创建时间',
        id: 'createTime',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: new Date(initData.createTime).toLocaleString()
    }, {
        label: '更新时间',
        id: 'updateTime',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: new Date(initData.updateTime).toLocaleString()
    }, {
        label: '上次登录时间',
        id: 'loginTime',
        type: 'text',
        tag: 'input',
        disabled: true,
        initialValue: new Date(initData.loginTime).toLocaleString()

    }, {
        label: '所属机构',
        id: 'orgId',
        type: 'text',
        tag: 'treeSelect',
        disabled: true,
        initialValue: initData.orgName
    }, {
        label: '角色',
        id: 'roleIds',
        tag: 'input',
        disabled: true,
        initialValue: rolesData
    }];

    //changePassword页面Modal的配置
    var changePwdModalProps = {
        title: '修改密码',
        visible: props.changePwdModalVisible,
        onCancel: props.toggleChangePwdModal,
        onOk: props.submitPwd,
        confirmLoading: props.loading,
        cancelText: '取消',
        okText: '确认'

    };
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'containerContent' },
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { span: 24 },
                    _react2.default.createElement(
                        'div',
                        { style: { textAlign: 'center' } },
                        _react2.default.createElement(
                            _divider2.default,
                            null,
                            _react2.default.createElement(
                                'h2',
                                null,
                                '\u7528\u6237\u8BE6\u60C5'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_common.FormComponent, { formList: formList, formItemLayout: formItemLayout,
                moreItemInRow: true, layout: 'horizontal' }),
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { offset: 3, className: 'detailBtn' },
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.userDelete,
                            type: 'danger' },
                        '\u5220\u9664'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.toggleModal },
                        '\u72B6\u6001'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.toEdit, type: 'primary' },
                        '\u4FEE\u6539'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.toggleChangePwdModal },
                        '\u4FEE\u6539\u5BC6\u7801'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                props.history.push('/systemManager/userManager');
                            } },
                        '\u8FD4\u56DE'
                    )
                )
            ),
            _react2.default.createElement(
                _modal2.default,
                {
                    title: '\u66F4\u6539\u7528\u6237\u72B6\u6001',
                    visible: props.userModalVisible,
                    onCancel: props.toggleModal,
                    footer: null
                },
                initData.status !== 'NORMAL' ? _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            props.toggleStatus('NORMAL');
                        }, style: { marginRight: 30 } },
                    '\u5F00\u542F'
                ) : null,
                initData.status !== 'LOCKED' ? _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            props.toggleStatus('LOCKED');
                        }, style: { marginRight: 30 } },
                    '\u9501\u5B9A'
                ) : null,
                initData.status !== 'CANCEL' ? _react2.default.createElement(
                    _button2.default,
                    { onClick: function onClick() {
                            props.toggleStatus('CANCEL');
                        } },
                    '\u4F5C\u5E9F'
                ) : null
            ),
            _react2.default.createElement(
                _modal2.default,
                _extends({}, changePwdModalProps, { style: { minWidth: '60%' } }),
                _react2.default.createElement(
                    _row2.default,
                    { style: { height: 30, lineHeight: '30px', margin: 10 } },
                    _react2.default.createElement(
                        _col2.default,
                        { span: 2, offset: 5 },
                        '\u539F\u5BC6\u7801:'
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: 10, offset: 1 },
                        _react2.default.createElement(_input2.default, { type: 'password', id: 'password', onChange: props.onChangePwdValue })
                    )
                ),
                _react2.default.createElement(
                    _row2.default,
                    { style: { height: 30, lineHeight: '30px', margin: 10 } },
                    _react2.default.createElement(
                        _col2.default,
                        { span: 2, offset: 5 },
                        '\u65B0\u5BC6\u7801:'
                    ),
                    _react2.default.createElement(
                        _col2.default,
                        { span: 10, offset: 1 },
                        _react2.default.createElement(_input2.default, { type: 'password', id: 'newPassword', onChange: props.onChangePwdValue })
                    )
                )
            )
        )
    );
};

/***/ })

});