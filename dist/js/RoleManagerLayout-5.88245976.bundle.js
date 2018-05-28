webpackJsonp([5],{

/***/ 1278:
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

var _createANDedit = __webpack_require__(1665);

var _detail = __webpack_require__(1666);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * Created by MHC on 2018/3/23.
                                                                                                                                                                                                                   */


var breadcrumbName = 'role';
var breadcrumbNameMap = (_breadcrumbNameMap = {
    '/systemManager': '系统管理'
}, _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager', '角色管理'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/create', '创建角色'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/detail', '角色详情'), _defineProperty(_breadcrumbNameMap, '/systemManager/' + breadcrumbName + 'Manager/edit', '编辑角色'), _breadcrumbNameMap);

var RoleManagerLayout = function RoleManagerLayout(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_common.BreadcrumbComponent, _extends({}, props, { breadcrumbNameMap: breadcrumbNameMap })),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/roleManager/create', component: _createANDedit.RoleCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/roleManager/edit/:roleId', component: _createANDedit.RoleCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/roleManager/detail/:roleId', component: _detail.RoleDetailContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/systemManager/roleManager', component: RoleManagerContainer }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/systemManager/roleManager' })
        )
    );
};

exports.default = RoleManagerLayout;


var mapStateToProps = function mapStateToProps(state) {
    return {
        index: state.systemManager.roleManager.index,
        loading: state.systemManager.roleManager.loading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        roleListSaga: function roleListSaga(values) {
            return dispatch((0, _actions.requestRoleList)(values));
        }
    };
};

var RoleManagerContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(RoleManagerContainer, _React$Component);

    function RoleManagerContainer() {
        var _ref;

        _classCallCheck(this, RoleManagerContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = RoleManagerContainer.__proto__ || Object.getPrototypeOf(RoleManagerContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            _this.props.roleListSaga(values);
        };

        _this.tableBtnClick = function () {
            _this.props.history.push('/systemManager/roleManager/create');
        };

        _this.paginationOnChange = function (pagination) {
            _this.props.roleListSaga({ current: pagination.current, pageSize: pagination.pageSize });
        };

        _this.props.roleListSaga();
        return _this;
    }

    //分页


    _createClass(RoleManagerContainer, [{
        key: 'render',
        value: function render() {
            var columns = [{
                title: '角色名称',
                dataIndex: 'roleName',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'a',
                        { href: '#/systemManager/roleManager/detail/' + record.roleId },
                        text
                    );
                }
            }, {
                title: '角色描述',
                dataIndex: 'description'
            }, {
                title: '创建时间',
                dataIndex: 'createTime',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        new Date(text).toLocaleString().substr(0, 9)
                    );
                }
            }, {
                title: '更新时间',
                dataIndex: 'updateTime',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        new Date(text).toLocaleString().substr(0, 9)
                    );
                }
            }];
            return _react2.default.createElement(RoleManagerContent, _extends({ btnClick: this.tableBtnClick, columns: columns,
                onSubmit: this.onSubmit }, this.props, {
                onChange: this.paginationOnChange
            }));
        }
    }]);

    return RoleManagerContainer;
}(_react2.default.Component)) || _class);


var searchComponentData = [{
    label: '角色名称',
    tag: 'input',
    id: 'roleName'
}];

var RoleManagerContent = function RoleManagerContent(props) {
    var data = [];
    var pagination = [];
    try {
        data = props.index.data.roleList;
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
                    { offset: 4 },
                    _react2.default.createElement(_common.FormComponent, { formList: searchComponentData, formSubmit: props.onSubmit,
                        btn: { sub: '搜索' }, layout: 'inline'
                    })
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'containerContent' },
            _react2.default.createElement(_common.TableComponent, { columns: props.columns, componentTitle: '角色列表', btnName: '创建角色',
                btnClick: props.btnClick, dataSource: data, rowKey: 'roleId',
                loading: props.loading, onChange: props.onChange, pagination: pagination })
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

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RoleCreateContainer = undefined;

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _treeSelect = __webpack_require__(548);

var _treeSelect2 = _interopRequireDefault(_treeSelect);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /**
                   * Created by MHC on 2018/3/23.
                   */


__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

__webpack_require__(572);

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
        powerIndex: state.systemManager.powerManager.index,
        detail: state.systemManager.roleManager.detail,
        loading: state.systemManager.roleManager.loading,
        componentTitle: state.systemManager.roleManager.componentTitle
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        powerListSaga: function powerListSaga(values) {
            return dispatch((0, _actions.requestPowerList)(values));
        },
        roleCreateSaga: function roleCreateSaga(values) {
            return dispatch((0, _actions.requestRoleCreate)(values));
        },
        roleDetailSaga: function roleDetailSaga(values) {
            return dispatch((0, _actions.requestRoleDetail)(values));
        },
        roleComponentTitle: function roleComponentTitle(values) {
            return dispatch((0, _actions.roleComponentTitle)(values));
        },
        requestRoleEditSaga: function requestRoleEditSaga(values) {
            return dispatch((0, _actions.requestRoleEdit)(values));
        }
    };
};

var RoleCreateContainer = exports.RoleCreateContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(RoleCreateContainer, _React$Component);

    function RoleCreateContainer() {
        var _ref;

        _classCallCheck(this, RoleCreateContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = RoleCreateContainer.__proto__ || Object.getPrototypeOf(RoleCreateContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            if (_this.props.componentTitle === 'edit') {
                console.log(_extends({ roleId: _this.roleId }, values));
                _this.props.requestRoleEditSaga(_extends({ roleId: _this.roleId }, values));
            } else {
                _this.props.roleCreateSaga(values);
            }
        };

        _this.props.powerListSaga({ pageSize: 1000 });
        var roleId = _this.props.match.params.roleId;
        _this.roleId = roleId;
        if (roleId) {
            if (isNaN(roleId)) {
                _this.props.history.push('/systemManager/roleManager');
            }
            _this.props.roleComponentTitle({ componentTitle: 'edit' });
            if (!_this.props.detail) {
                _this.props.roleDetailSaga({ roleId: roleId });
            }
        }
        return _this;
    }

    _createClass(RoleCreateContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(RoleCreateContent, _extends({ onSubmit: this.onSubmit }, this.props))
            );
        }
    }]);

    return RoleCreateContainer;
}(_react2.default.Component)) || _class);


var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 4 }
        // sm: {span:11}
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 }
        // sm:{ span: 13}
    }
};

var formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10, offset: 10 }
    }
};

//TreeSelect antd的配置
var treeSelectProps = {
    treeCheckable: true,
    showCheckedStrategy: _treeSelect2.default.SHOW_ALL
};

var RoleCreateContent = function RoleCreateContent(props) {
    var data = [];
    var initialTreeSelect = [];
    var componentTitle = props.componentTitle === 'edit' ? '修改' : '创建';
    if (props.match.params.roleId) {
        try {
            data = props.detail.data.role;
            var permList = props.detail.data.permList;
            permList.map(function (item) {
                return initialTreeSelect.push(item.permId);
            });
        } catch (err) {}
    }
    var formList = [{
        label: '角色名称',
        tag: 'input',
        id: 'roleName',
        rules: {
            required: true,
            message: '角色名称不能为空！'
        },
        initialValue: data.roleName
    }, {
        label: '角色描述',
        tag: 'textarea',
        id: 'description',
        initialValue: data.description
    }, {
        label: '角色权限',
        tag: 'treeSelect',
        id: 'permIds',
        rules: {
            required: true,
            message: '角色权限不能为空！'
        },
        initialValue: initialTreeSelect
    }];
    var treeSelectData = [];
    try {
        treeSelectData = (0, _common.tranTreeData)(props.powerIndex.powerList.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {}

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
                                '\u89D2\u8272'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_common.FormComponent, {
                formList: formList,
                formSubmit: props.onSubmit,
                btn: { back: '返回', sub: componentTitle },
                layout: 'horizontal',
                loading: props.loading,
                formItemLayout: formItemLayout,
                formSubBtnLayout: formSubBtnLayout,
                selectData: treeSelectData,
                treeSelectProps: treeSelectProps
            })
        )
    );
};

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RoleDetailContainer = undefined;

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps; /**
                                                     * Created by MHC on 2018/3/23.
                                                     */


__webpack_require__(125);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

__webpack_require__(254);

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
        detail: state.systemManager.roleManager.detail,
        loading: state.systemManager.roleManager.loading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        roleDetailSaga: function roleDetailSaga(values) {
            return dispatch((0, _actions.requestRoleDetail)(values));
        },
        roleDeleteSaga: function roleDeleteSaga(values) {
            return dispatch((0, _actions.requestRoleDelete)(values));
        }
    };
};

var RoleDetailContainer = exports.RoleDetailContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(RoleDetailContainer, _React$Component);

    function RoleDetailContainer() {
        var _ref;

        _classCallCheck(this, RoleDetailContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = RoleDetailContainer.__proto__ || Object.getPrototypeOf(RoleDetailContainer)).call.apply(_ref, [this].concat(arg)));

        _initialiseProps.call(_this);

        var roleId = _this.props.match.params.roleId;
        if (isNaN(roleId)) {
            _this.props.history.push('/systemManager/roleManager');
        }
        _this.props.roleDetailSaga({ roleId: roleId });
        return _this;
    }

    _createClass(RoleDetailContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(RoleDetailContent, _extends({ roleDelete: this.roleDelete, toEdit: this.toEdit }, this.props))
            );
        }
    }]);

    return RoleDetailContainer;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.roleDelete = function (roleId, roleName) {
        var roleDeleteSaga = _this2.props.roleDeleteSaga;
        _modal2.default.confirm({
            title: '\u662F\u5426\u5220\u9664' + roleName + '?',
            content: '删除后将无法返回',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk: function onOk() {
                roleDeleteSaga({ roleId: roleId });
            },
            onCancel: function onCancel() {
                // console.log(roleId,roleName);
                // todo
            }
        });
    };

    this.toEdit = function (roleId) {
        _this2.props.history.push('/systemManager/roleManager/edit/' + roleId);
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

var RoleDetailContent = function RoleDetailContent(props) {
    var data = {
        createTime: 0,
        updateTime: 0
    };
    var treeData = [];
    try {
        data = props.detail.data.role;
        treeData = (0, _common.tranTreeData)(props.detail.data.permList, 'permId', 'parentPermId', 'permName');
    } catch (err) {}
    var formList = [{
        label: '角色名称',
        tag: 'input',
        id: 'roleName',
        initialValue: data.roleName,
        disabled: true
    }, {
        label: '角色描述',
        tag: 'textarea',
        id: 'description',
        initialValue: data.description,
        disabled: true
    }, {
        label: '创建时间',
        tag: 'input',
        id: 'createTime',
        initialValue: new Date(data.createTime).toLocaleString(),
        disabled: true
    }, {
        label: '更新时间',
        tag: 'input',
        id: 'updateTime',
        initialValue: new Date(data.updateTime).toLocaleString(),
        disabled: true
    }, {
        label: '角色权限',
        tag: 'tree',
        id: 'permIds'
        // disabled: true
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
                                '\u89D2\u8272\u8BE6\u60C5'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_common.FormComponent, {
                formList: formList,
                layout: 'horizontal',
                loading: props.loading,
                formItemLayout: formItemLayout,
                moreItemInRow: true,
                treeData: treeData
                // selectData={treeSelectData}
            }),
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { offset: 3, className: 'detailBtn' },
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                props.roleDelete(data.roleId, data.roleName);
                            }, type: 'danger' },
                        '\u5220\u9664'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                props.toEdit(data.roleId);
                            }, type: 'primary' },
                        '\u4FEE\u6539'
                    ),
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: function onClick() {
                                props.history.push('/systemManager/roleManager');
                            } },
                        '\u8FD4\u56DE'
                    )
                )
            )
        )
    );
};

/***/ })

});