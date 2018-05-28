webpackJsonp([7],{

/***/ 1274:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by MHC on 2018/3/21.
                                                                                                                                                                                                                                                                   */


__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(125);

__webpack_require__(254);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(161);

var _common = __webpack_require__(251);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(532);

var _detail = __webpack_require__(1653);

var _createANDedit = __webpack_require__(1654);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var breadcrumbNameMap = {
    '/systemManager': '系统管理',
    '/systemManager/menuManager': '菜单管理',
    '/systemManager/menuManager/create': '创建菜单',
    '/systemManager/menuManager/detail': '菜单详情',
    '/systemManager/menuManager/edit': '编辑菜单'
};

var MenuManagerLayout = function MenuManagerLayout(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_common.BreadcrumbComponent, _extends({}, props, { breadcrumbNameMap: breadcrumbNameMap })),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/systemManager/menuManager', component: MenuManagerContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/menuManager/create', component: _createANDedit.MenuCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/menuManager/detail/:menuId', component: _detail.MenuDetailContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/systemManager/menuManager/edit/:menuId', component: _createANDedit.MenuCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: '/systemManager/menuManager' })
        )
    );
};
exports.default = MenuManagerLayout;


var mapStateToProps = function mapStateToProps(state) {
    return {
        index: state.systemManager.menuManager.index,
        loading: state.systemManager.menuManager.loading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        menuListSaga: function menuListSaga(values) {
            return dispatch((0, _actions.requestMenuList)(values));
        },
        menuDeleteSaga: function menuDeleteSaga(values) {
            return dispatch((0, _actions.requestMenuDelete)(values));
        }
    };
};

var MenuManagerContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(MenuManagerContainer, _React$Component);

    function MenuManagerContainer() {
        var _ref;

        _classCallCheck(this, MenuManagerContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = MenuManagerContainer.__proto__ || Object.getPrototypeOf(MenuManagerContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            values.pageSize = 1000;
            _this.props.menuListSaga(values);
        };

        _this.btnClick = function () {
            _this.props.history.push('/systemManager/menuManager/create');
        };

        _this.delete = function (record) {
            var menuDeleteSaga = _this.props.menuDeleteSaga;
            _modal2.default.confirm({
                title: '\u662F\u5426\u5220\u9664' + record.menuName + '?',
                content: '删除后将无法返回',
                okText: '删除',
                okType: 'danger',
                cancelText: '取消',
                onOk: function onOk() {
                    console.log(record.menuName);
                    menuDeleteSaga({ menuId: record.menuId });
                },
                onCancel: function onCancel() {
                    console.log(record.menuName);
                }
            });
        };

        _this.paginationOnChange = function (pagination) {
            _this.props.menuListSaga({ current: pagination.current, pageSize: pagination.pageSize });
        };

        _this.toEdit = function (menuId) {
            _this.props.history.push('/systemManager/menuManager/edit/' + menuId);
        };

        _this.props.menuListSaga({ pageSize: 1000 });
        return _this;
    }

    //分页


    _createClass(MenuManagerContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var columns = [{
                title: '菜单名称',
                dataIndex: 'menuName',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'a',
                        { href: '#/systemManager/menuManager/detail/' + record.menuId },
                        text
                    );
                }
            }, {
                title: '菜单ID',
                dataIndex: 'menuId'
            }, {
                title: '父菜单ID',
                dataIndex: 'parentMenuId'
            }, {
                title: 'action',
                dataIndex: 'action'
            }, {
                title: 'tab',
                dataIndex: 'tab'
            }, {
                title: '排序',
                dataIndex: 'sort'
            }, {
                title: '操作',
                dataIndex: '',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { onClick: _this2.toEdit.bind(_this2, record.menuId) },
                            '\u7F16\u8F91'
                        ),
                        _react2.default.createElement(
                            _button2.default,
                            { type: 'danger',
                                onClick: _this2.delete.bind(_this2, record),
                                style: {
                                    marginLeft: 5
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];
            return _react2.default.createElement(MenuManagerContent, _extends({}, this.props, {
                formSubmit: this.onSubmit,
                columns: columns,
                componentTitle: '菜单列表',
                btnClick: this.btnClick,
                btnName: '创建菜单',
                onChange: this.paginationOnChange }));
        }
    }]);

    return MenuManagerContainer;
}(_react2.default.Component)) || _class);


var searchComponentData = [{
    label: '菜单名称',
    id: 'menuName',
    type: 'text',
    tag: 'input'
}, {
    label: '父菜单ID',
    id: 'parentMenuId',
    type: 'text',
    tag: 'input'
}];
var MenuManagerContent = function MenuManagerContent(props) {
    var menuList = [];
    var pagination = [];
    try {
        menuList = (0, _common.tranTreeData)(props.index.data.menuList, 'menuId', 'parentMenuId', 'menuName');
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
                    _react2.default.createElement(_common.FormComponent, {
                        formList: searchComponentData,
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
            _react2.default.createElement(_common.TableComponent, _extends({}, props, { dataSource: menuList, pagination: pagination,
                rowKey: 'menuId' }))
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

/***/ 1653:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuDetailContainer = undefined;

var _table = __webpack_require__(535);

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps; /**
                                                     * Created by MHC on 2018/3/21.
                                                     */


__webpack_require__(538);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

__webpack_require__(254);

__webpack_require__(125);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formComponent = __webpack_require__(539);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(532);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        detail: state.systemManager.menuManager.detail,
        loading: state.systemManager.menuManager.loading
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        menuDetailSaga: function menuDetailSaga(values) {
            return dispatch((0, _actions.requestMenuDetail)(values));
        },
        menuRemovePermSaga: function menuRemovePermSaga(values) {
            return dispatch((0, _actions.requestMenuRemovePerm)(values));
        }
    };
};

var MenuDetailContainer = exports.MenuDetailContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(MenuDetailContainer, _React$Component);

    function MenuDetailContainer() {
        var _ref;

        _classCallCheck(this, MenuDetailContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = MenuDetailContainer.__proto__ || Object.getPrototypeOf(MenuDetailContainer)).call.apply(_ref, [this].concat(arg)));

        _initialiseProps.call(_this);

        var menuId = _this.props.match.params.menuId;
        _this.menuId = menuId;
        if (isNaN(menuId)) {
            _this.props.history.push('/systemManager/menuManager');
        }
        _this.props.menuDetailSaga({ menuId: menuId });
        return _this;
    }

    // componentDidMount(){
    //     const menuId = this.props.match.params.menuId;
    //     if (isNaN(menuId)) {
    //         this.props.history.push('/systemManager/menuManager');
    //     }
    //     this.props.menuDetailSaga({menuId});
    // }


    _createClass(MenuDetailContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var columns = [{
                title: '权限ID',
                dataIndex: 'permId'
            }, {
                title: '权限名称',
                dataIndex: 'permName'
            }, {
                title: '描述',
                dataIndex: 'description'
            }, {
                title: '操作',
                dataIndex: '',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            { onClick: _this2.deletePermMenu.bind(_this2, record), type: 'danger' },
                            '\u89E3\u7ED1'
                        )
                    );
                }
            }];
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(MenuDetailContent, _extends({}, this.props, { columns: columns, toBack: this.toBack,
                    toEdit: this.toEdit }))
            );
        }
    }]);

    return MenuDetailContainer;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.toBack = function () {
        _this3.props.history.push('/systemManager/menuManager');
    };

    this.deletePermMenu = function (record) {
        var menuId = _this3.menuId;
        var menuRemovePermSaga = _this3.props.menuRemovePermSaga;
        _modal2.default.confirm({
            title: '\u662F\u5426\u89E3\u7ED1' + record.permName + '?',
            content: '解绑后将无法返回',
            okText: '解绑',
            okType: 'danger',
            cancelText: '取消',
            onOk: function onOk() {
                menuRemovePermSaga({ permId: record.permId, menuId: menuId });
                // console.log(record.permId)
                // console.log(menuId)
            },
            onCancel: function onCancel() {
                // console.log(record.permName)
                // TODO
            }
        });
    };

    this.toEdit = function () {
        var menuId = _this3.menuId;
        _this3.props.history.push('/systemManager/menuManager/edit/' + menuId);
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

var MenuDetailContent = function MenuDetailContent(props) {
    var data = {};
    var dataSource = [];
    try {
        data = props.detail.data.menu || {};
        dataSource = props.detail.data.menu.perms || [];
        // if(props.detail.code != 200){
        //     message.error('未查询到数据');
        // }
    } catch (err) {}
    var formList = [{
        label: '菜单ID',
        id: 'menuId',
        initialValue: data.menuId,
        type: 'text',
        tag: 'input',
        disabled: true
    }, {
        label: '菜单名称',
        id: 'menuName',
        initialValue: data.menuName,
        type: 'text',
        tag: 'input',
        disabled: true
    }, {
        label: '父菜单Id',
        id: 'parentMenuId',
        initialValue: data.parentMenuId,
        type: 'text',
        tag: 'input',
        disabled: true
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
                                '\u83DC\u5355\u8BE6\u60C5'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_formComponent.FormComponent, {
                formList: formList,
                layout: 'horizontal',
                formItemLayout: formItemLayout,
                moreItemInRow: true,
                laoding: props.loading
            }),
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(_table2.default, { loading: props.loading, columns: props.columns, dataSource: dataSource, rowKey: 'permId', bordered: true })
            ),
            _react2.default.createElement(
                _row2.default,
                null,
                _react2.default.createElement(
                    _col2.default,
                    { span: 4, offset: 8 },
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.toEdit, type: 'primary' },
                        '\u7F16\u8F91'
                    )
                ),
                _react2.default.createElement(
                    _col2.default,
                    { span: 4 },
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.toBack },
                        '\u8FD4\u56DE'
                    )
                )
            )
        )
    );
};

/***/ }),

/***/ 1654:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MenuCreateContainer = undefined;

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps; /**
                                                     * Created by MHC on 2018/3/21.
                                                     */

// import {Row, Col, notification} from 'antd';


__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _formComponent = __webpack_require__(539);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(532);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        create: state.systemManager.menuManager.create,
        loading: state.systemManager.menuManager.loading,
        menuDetail: state.systemManager.menuManager.detail
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        menuCreateSaga: function menuCreateSaga(values) {
            return dispatch((0, _actions.requestMenuCreate)(values));
        },
        menuDetailSaga: function menuDetailSaga(values) {
            return dispatch((0, _actions.requestMenuDetail)(values));
        },
        menuEditSaga: function menuEditSaga(values) {
            return dispatch((0, _actions.requestMenuEdit)(values));
        }

    };
};

var MenuCreateContainer = exports.MenuCreateContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = (_temp = _class2 = function (_React$Component) {
    _inherits(MenuCreateContainer, _React$Component);

    function MenuCreateContainer() {
        var _ref;

        _classCallCheck(this, MenuCreateContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = MenuCreateContainer.__proto__ || Object.getPrototypeOf(MenuCreateContainer)).call.apply(_ref, [this].concat(arg)));

        _initialiseProps.call(_this);

        var menuId = _this.props.match.params.menuId;
        _this.menuId = menuId;
        if (isNaN(menuId) && menuId !== undefined) {
            alert('错误');
            //TODO
        }
        if (menuId) {
            _this.props.menuDetailSaga({ menuId: menuId });
            _this.state = {
                componentTitle: 'edit'
            };
        } else {
            _this.state = {
                componentTitle: 'create'
            };
        }
        return _this;
    }

    _createClass(MenuCreateContainer, [{
        key: 'render',


        // componentDidMount() {
        //     const menuId = this.props.match.params.menuId;
        //     if (isNaN(menuId) && menuId !== undefined) {
        //         alert('错误');
        //         //TODO
        //     }
        //     if (menuId) {
        //         this.props.menuDetailSaga({menuId});
        //         this.setState({
        //             componentTitle: 'edit',
        //         });
        //     }
        // }

        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(MenuCreateContent, _extends({}, this.props, { formSubmit: this.onSubmit,
                    componentTitle: this.state.componentTitle }))
            );
        }
    }]);

    return MenuCreateContainer;
}(_react2.default.Component), _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.onSubmit = function (values) {
        var menuId = _this2.menuId;
        if (menuId) {
            _this2.props.menuEditSaga(_extends({ menuId: menuId }, values));
        } else {
            _this2.props.menuCreateSaga(values);
        }
    };
}, _temp)) || _class);


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

var MenuCreateContent = function MenuCreateContent(props) {
    var title = props.componentTitle === 'create' ? '创建' : '修改';
    var menuInitValues = [];
    try {
        if (props.componentTitle === 'edit') {
            menuInitValues = props.menuDetail.data.menu;
            menuInitValues.sortNumber = menuInitValues.sort;
        }
    } catch (e) {}
    var formList = [{
        label: '菜单名称',
        id: 'menuName',
        rules: {
            required: true
        },
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.menuName
    }, {
        label: '父级菜单ID',
        id: 'parentMenuId',
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.parentMenuId
    }, {
        label: 'action',
        id: 'action',
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.action
    }, {
        label: 'Icon图标',
        id: 'tab',
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.tab
    }, {
        label: '排序号',
        id: 'sort',
        rules: {
            required: true
        },
        type: 'text',
        tag: 'input',
        initialValue: menuInitValues.sortNumber
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
                                title,
                                '\u83DC\u5355'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(_formComponent.FormComponent, {
                btn: { sub: title, back: '返回' },
                formList: formList,
                formSubmit: props.formSubmit,
                layout: 'horizontal',
                formItemLayout: formItemLayout,
                formSubBtnLayout: formSubBtnLayout
            })
        )
    );
};

/***/ })

});