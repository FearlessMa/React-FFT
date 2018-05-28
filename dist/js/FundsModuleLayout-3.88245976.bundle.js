webpackJsonp([3],{

/***/ 1281:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FundsModuleLayout = undefined;

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _form = __webpack_require__(540);

var _form2 = _interopRequireDefault(_form);

var _icon = __webpack_require__(26);

var _icon2 = _interopRequireDefault(_icon);

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /*
                                                                                                                                                                                                                                                                   * @Author: mhc 
                                                                                                                                                                                                                                                                   * @Date: 2018-04-23 14:15:38 
                                                                                                                                                                                                                                                                   * @Last Modified by: mhc
                                                                                                                                                                                                                                                                   * @Last Modified time: 2018-05-18 11:27:15
                                                                                                                                                                                                                                                                   */

//引入发布资金路径


__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(549);

__webpack_require__(258);

__webpack_require__(125);

__webpack_require__(254);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(161);

var _publicConfig = __webpack_require__(259);

var _common = __webpack_require__(251);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(547);

var _create = __webpack_require__(1675);

var _detail = __webpack_require__(1676);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//路由
var FundsModuleLayout = exports.FundsModuleLayout = function FundsModuleLayout(props) {
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_common.BreadcrumbComponent, _extends({}, props, { breadcrumbNameMap: _publicConfig.fundsModuleMap })),
        _react2.default.createElement(
            _reactRouterDom.Switch,
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '' + _publicConfig.publishFundsPath.basePath, component: PublishFunds }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '' + _publicConfig.receivedFundsPath.basePath, component: ReceivedFunds }),
            _react2.default.createElement(_reactRouterDom.Route, { path: _publicConfig.publishFundsPath.createPath, component: _create.PublishCreateContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '' + _publicConfig.publishFundsPath.detailPath + _publicConfig.publishFundsPath.detailParam,
                component: _detail.FundsDetailContainer }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '' + _publicConfig.receivedFundsPath.detailPath + _publicConfig.receivedFundsPath.detailParam,
                component: _detail.FundsDetailContainer }),
            _react2.default.createElement(_reactRouterDom.Redirect, { to: _publicConfig.publishFundsPath.basePath }),
            '>'
        )
    );
};

exports.default = FundsModuleLayout;

//我接收到的

var ReceivedFunds = function ReceivedFunds(props) {
    return _react2.default.createElement(FundsModuleContainer, _extends({}, props, { description: 'receivedFunds' }));
};
//我发布的

var PublishFunds = function PublishFunds(props) {
    return _react2.default.createElement(FundsModuleContainer, _extends({}, props, { description: 'publishFunds' }));
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        publishLoading: state.businessSystem.fundsModule.loading,
        publishList: state.businessSystem.fundsModule.publishList,
        receivedList: state.businessSystem.fundsModule.receivedList
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        requestFundsPublishSaga: function requestFundsPublishSaga(values) {
            return dispatch((0, _actions.requestFundsPublishList)(values));
        },
        requestOffshefSaga: function requestOffshefSaga(values) {
            return dispatch((0, _actions.requestFundsOffshef)(values));
        },
        requestFundsReceivedSaga: function requestFundsReceivedSaga(values) {
            return dispatch((0, _actions.requestFundsReceivedList)(values));
        }
    };
};

var FundsModuleContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(FundsModuleContainer, _React$Component);

    function FundsModuleContainer() {
        var _ref;

        _classCallCheck(this, FundsModuleContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = FundsModuleContainer.__proto__ || Object.getPrototypeOf(FundsModuleContainer)).call.apply(_ref, [this].concat(arg)));

        _this.formSubmit = function (values) {
            console.log('priceValidEnd');
            console.log(values.priceValidEnd);
            if (!values.priceValidStart) {
                values.priceValidStart = '';
            } else {
                var milliseconds = new Date(values.priceValidStart).getTime();
                var ymdhms = (0, _common.formatYYYYMMDD)(milliseconds);
                values.priceValidStart = new Date(ymdhms).getTime();
            }
            if (!values.priceValidEnd) {
                values.priceValidEnd = '';
            } else {
                var _milliseconds = new Date(values.priceValidEnd).getTime();
                var _ymdhms = (0, _common.formatYYYYMMDD)(_milliseconds) + ' 23:59:59';
                values.priceValidEnd = new Date(_ymdhms).getTime();
            }
            if (_this.props.description === 'publishFunds') {
                _this.props.requestFundsPublishSaga(values);
            } else if (_this.props.description === 'receivedFunds') {
                _this.props.requestFundsReceivedSaga(values);
            }
        };

        _this.toggleCollapsed = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        };

        _this.offshelf = function (capitalId) {
            var that = _this;
            _modal2.default.confirm({
                title: '\u662F\u5426\u4E0B\u67B6?',
                content: '下架后需要重新创建新资金',
                okText: '下架',
                okType: 'danger',
                cancelText: '取消',
                onOk: function onOk() {
                    that.props.requestOffshefSaga({ capitalId: capitalId });
                },
                onCancel: function onCancel() {
                    // console.log(record.menuName)
                }
            });
        };

        _this.toCreateFunds = function () {
            _this.props.history.push(_publicConfig.publishFundsPath.createPath);
        };

        _this.paginationOnChange = function (pagination) {
            if (_this.props.description === 'publishFunds') {
                _this.props.requestFundsPublishSaga({ current: pagination.current, pageSize: pagination.pageSize });
            } else if (_this.props.description === 'receivedFunds') {
                _this.props.requestFundsReceivedSaga({ current: pagination.current, pageSize: pagination.pageSize });
            }
        };

        _this.state = {
            collapsed: true
        };
        if (_this.props.description === 'publishFunds') {
            _this.props.requestFundsPublishSaga();
        } else if (_this.props.description === 'receivedFunds') {
            _this.props.requestFundsReceivedSaga();
        }
        return _this;
    }

    // 搜索

    //下架资金


    //创建资金

    // //查看发布资金详情
    // toPublishFundsDetail = () => {
    // }

    //分页


    _createClass(FundsModuleContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var data = searchComponentData;
            if (!this.state.collapsed) {
                data = data.concat(searchOtherData);
            }

            var publicColumns = [{
                title: '包买商名称',
                dataIndex: 'forfaiterNm',
                render: function render(text, record) {
                    if (_this2.props.description === 'publishFunds') {
                        return _react2.default.createElement(
                            'a',
                            { href: '#' + _publicConfig.publishFundsPath.detailPath + '/' + record.capitalId },
                            text
                        );
                    }
                    return _react2.default.createElement(
                        'a',
                        { href: '#' + _publicConfig.receivedFundsPath.detailPath + '/' + record.capitalId },
                        text
                    );
                }
            }, {
                title: '价格',
                dataIndex: 'price',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        text + '%'
                    );
                }
            }, {
                title: '价格有效期开始时间',
                dataIndex: 'priceValidStart',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        '' + new Date(text).toLocaleString()
                    );
                }
            }, {
                title: '价格有效期截止时间',
                dataIndex: 'priceValidEnd',
                render: function render(text) {
                    return _react2.default.createElement(
                        'span',
                        null,
                        '' + new Date(text).toLocaleString()
                    );
                }
            }, {
                title: '状态',
                dataIndex: 'capitalStatus',
                render: function render(text) {
                    if (typeof text !== 'string') {
                        text = String(text);
                    }
                    var state = '';
                    switch (text) {
                        case "0":
                            state = '未发布';
                            break;
                        case '1':
                            state = '已发布';
                            break;
                        case '2':
                            state = '已下架';
                            break;
                        case '3':
                            state = '超时';
                            break;
                        case '4':
                            state = '失败';
                            break;
                        default:
                            return null;
                    }
                    return _react2.default.createElement(
                        'span',
                        null,
                        state
                    );
                }
            }];
            var publishColumns = [{
                title: '操作',
                dataIndex: '',
                render: function render(text, record) {
                    if (typeof record.capitalStatus !== 'string') {
                        record.capitalStatus = String(record.capitalStatus);
                    }
                    if (record.capitalStatus === '1') {
                        return _react2.default.createElement(
                            _button2.default,
                            { onClick: _this2.offshelf.bind(_this2, record.capitalId), type: 'danger' },
                            '\u4E0B\u67B6'
                        );
                    } else {
                        return _react2.default.createElement(
                            _button2.default,
                            { disabled: 'disabled' },
                            '\u4E0B\u67B6'
                        );
                    }
                }
            }];

            return _react2.default.createElement(FundsModuleContent, _extends({
                formSubmit: this.formSubmit,
                collapsed: this.state.collapsed,
                searchComponentData: data,
                toggleCollapsed: this.toggleCollapsed,
                publicColumns: publicColumns,
                onChange: this.paginationOnChange,
                toCreateFunds: this.toCreateFunds,
                publishColumns: publishColumns
            }, this.props));
        }
    }]);

    return FundsModuleContainer;
}(_react2.default.Component)) || _class);
/**搜索框数据和布局 **/

var searchComponentData = [{
    label: '包买商名称',
    id: 'forfaiterNm',
    type: 'text',
    tag: 'input'
}, {
    label: '包买商BIC',
    id: 'forfaiterSc',
    type: 'text',
    tag: 'input'
}];
var searchOtherData = [{
    label: '开始时间',
    id: 'priceValidStart',
    rules: {
        type: 'object'
    },
    tag: 'date',
    config: {
        placeholder: ''
    }
}, {
    label: '结束时间',
    id: 'priceValidEnd',
    rules: {
        type: 'object'
    },
    tag: 'date',
    config: {
        placeholder: ''
    }
}, {
    label: '资金状态',
    id: 'capitalStatus',
    tag: 'select',
    options: [{
        name: '未发布',
        value: '0'
    }, {
        name: '已发布',
        value: '1'
    }, {
        name: '已下架',
        value: '2'
    }, {
        name: '超时',
        value: '3'
    }, {
        name: '失败',
        value: '4'
    }]
}];
var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
    }
};
var formSubBtnLayout = {
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4, offset: 17 }
    }
};
/**-----------------**/

var FundsModuleContent = function FundsModuleContent(props) {
    var collapsed = props.collapsed,
        searchComponentData = props.searchComponentData,
        toggleCollapsed = props.toggleCollapsed,
        publicColumns = props.publicColumns,
        publishColumns = props.publishColumns,
        toCreateFunds = props.toCreateFunds,
        description = props.description;
    // 搜索

    var formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };
    var publishData = [];
    var publishPagination = [];
    var tableConfig = {};
    var receivedData = [];
    var receivedPaginaton = [];
    try {
        // 发布的资金数据
        publishData = props.publishList.data.capitalList;
        publishPagination = props.publishList.data.pagination;
    } catch (e) {}
    try {
        // 接收的资金数据
        receivedData = props.receivedList.data.capitalList;
        receivedPaginaton = props.receivedList.data.pagination;
    } catch (e) {}
    if (description === 'publishFunds') {
        //发布资金
        publicColumns.push.apply(publicColumns, _toConsumableArray(publishColumns));
        var publishFundsConfig = {
            columns: publicColumns,
            dataSource: publishData,
            // loading: props.publishLoading,
            componentTitle: '发布的资金列表',
            btnName: '资金发布',
            btnClick: toCreateFunds,
            pagination: publishPagination
        };
        tableConfig = publishFundsConfig;
    } else {
        //接收的资金
        var receivedFundsCongig = {
            columns: publicColumns,
            dataSource: receivedData,
            componentTitle: '接收的资金列表',
            pagination: receivedPaginaton
        };
        tableConfig = receivedFundsCongig;
    }
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
                    { offset: collapsed ? 5 : 0 },
                    _react2.default.createElement(
                        _common.FormComponent
                        // 搜索
                        ,
                        _extends({ formList: searchComponentData,
                            formSubmit: props.formSubmit
                        }, formConfig),
                        _react2.default.createElement(
                            _form2.default.Item,
                            formConfig.formSubBtnLayout,
                            _react2.default.createElement(
                                _button2.default,
                                { type: 'primary', htmlType: 'submit' },
                                '\u641C\u7D22'
                            ),
                            _react2.default.createElement(
                                'span',
                                { onClick: toggleCollapsed,
                                    style: { marginLeft: '10px', color: '#1890ff', cursor: 'pointer' } },
                                collapsed ? '\u5C55\u5F00' : '收起',
                                collapsed ? _react2.default.createElement(_icon2.default, { type: 'down' }) : _react2.default.createElement(_icon2.default, { type: 'up' })
                            )
                        )
                    )
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'containerContent' },
            _react2.default.createElement(_common.TableComponent
            //公共
            , _extends({ rowKey: 'capitalId',
                onChange: props.onChange,
                bordered: true,
                loading: props.publishLoading
            }, tableConfig))
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

/***/ 1675:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PublishCreateContainer = undefined;

var _modal = __webpack_require__(253);

var _modal2 = _interopRequireDefault(_modal);

var _table = __webpack_require__(535);

var _table2 = _interopRequireDefault(_table);

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _notification2 = __webpack_require__(550);

var _notification3 = _interopRequireDefault(_notification2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: mhc 
                   * @Date: 2018-04-25 15:15:22 
                   * @Last Modified by: mhc
                   * @Last Modified time: 2018-05-17 14:11:18
                   */

__webpack_require__(254);

__webpack_require__(538);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(1290);

__webpack_require__(574);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(251);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        parentScForfaiterList: state.businessSystem.fundsModule.parentScForfaiterList
        // modalTableLoading: state.businessSystem.forfaiterModule.loading,
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fundsPublishCreateSaga: function fundsPublishCreateSaga(values) {
            return dispatch((0, _actions.requestFundsPublishCreate)(values));
        },
        modalForfaiterListSaga: function modalForfaiterListSaga(values) {
            return dispatch((0, _actions.reuqestParentScForfaiterList)(values));
        }
    };
};

var PublishCreateContainer = exports.PublishCreateContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(PublishCreateContainer, _React$Component);

    function PublishCreateContainer() {
        var _ref;

        _classCallCheck(this, PublishCreateContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = PublishCreateContainer.__proto__ || Object.getPrototypeOf(PublishCreateContainer)).call.apply(_ref, [this].concat(arg)));

        _this.onSubmit = function (values) {
            var selectedForfaiter = _this.state.selectedForfaiter;

            values.priceValidEnd = new Date(values.priceValidEnd).getTime();
            values.priceValidStart = new Date(values.priceValidStart).getTime();
            var list = _this.formatForfaiterList(selectedForfaiter);
            // values.forfaiter = JSON.stringify(list);
            values.forfaiter = list;
            console.log(values);
            if (!selectedForfaiter[0]) {
                _notification3.default['error']({
                    message: '错误！',
                    description: '包买商为必选'
                });
            } else {
                _this.props.fundsPublishCreateSaga(values);
            }
        };

        _this.formatForfaiterList = function (list) {
            var rootMap = {};
            var childrenList = [];
            list.map(function (item) {
                //筛选出根机构
                if (String(item['isRoot']) === '1') {
                    rootMap[item['swiftCode']] = {
                        BK_NM_C: item['forfaiterName'],
                        BK_SC: item['swiftCode'],
                        FORFEITER: []
                    };
                } else {
                    childrenList.push(item);
                }
                return null;
            });
            childrenList.map(function (item) {
                if (item['rootSwiftCode'] in rootMap) {
                    rootMap[item['rootSwiftCode']].FORFEITER.push({
                        NM: item.forfaiterName,
                        SC: item.swiftCode
                    });
                } else {
                    // 如果只传子机构，创建对应的根机构并添加当前子机构在根机构中
                    rootMap[item['rootSwiftCode']] = {
                        BK_NM_C: item['rootName'],
                        BK_SC: item['rootSwiftCode'],
                        FORFEITER: [{
                            NM: item.forfaiterName,
                            SC: item.swiftCode
                        }]
                    };
                }
                return null;
            });
            return Object.values(rootMap);
        };

        _this.toggleModal = function (type) {
            _this.setState({
                modalVisible: !_this.state.modalVisible
            });
            if (type === 'btn') {
                _this.props.modalForfaiterListSaga({ forfaiterStatus: 'publish' });
            }
        };

        _this.modalTableValue = function () {
            _this.setState({
                selectedForfaiter: _this.state.modalSelectedForfaiter,
                modalVisible: !_this.state.modalVisible
            });
        };

        _this.rowSelection = {
            onChange: function onChange(selectedRowKeys, selectedRows) {
                _this.setState({
                    modalSelectedForfaiter: selectedRows
                });
            }
        };

        _this.deleteSelectedForfaiter = function (record) {
            var newData = _this.state.selectedForfaiter.filter(function (item) {
                if (item.swiftCode !== record.swiftCode) {
                    return true;
                }
                return null;
            });
            _this.setState({
                selectedForfaiter: newData
            });
        };

        _this.paginationOnChange = function (pagination) {
            _this.props.modalForfaiterListSaga({ current: pagination.current, pageSize: pagination.pageSize });
        };

        _this.state = {
            modalVisible: false,
            //最终存储已选择的包买商数据
            selectedForfaiter: [],
            //modal框已选择的数据
            modalSelectedForfaiter: []
        };
        return _this;
    }
    // 提交


    // 创建包买商列表数据forfaiter

    //切换显示

    //modal确认按钮回调


    //modal 中table选择的数据


    // 删除已选中包买商


    //分页


    _createClass(PublishCreateContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            //扩展columns删除操作
            var tableDeleteColumns = [{
                title: '操作',
                dataIndex: '',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'span',
                        { className: 'detail-columns-delete', onClick: _this2.deleteSelectedForfaiter.bind(_this2, record) },
                        '\u5220\u9664'
                    );
                }
            }];
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(PublishCreateContent, _extends({
                    formSubmit: this.onSubmit,
                    toggleModal: this.toggleModal,
                    modalTableValue: this.modalTableValue,
                    rowSelection: this.rowSelection,
                    tableDeleteColumns: tableDeleteColumns,
                    paginationOnChange: this.paginationOnChange
                }, this.state, this.props))
            );
        }
    }]);

    return PublishCreateContainer;
}(_react2.default.Component)) || _class);


var PublishCreateContent = function PublishCreateContent(props) {
    var forfaiterData = [];
    var selectedColumns = tableColumns.concat(props.tableDeleteColumns);
    try {
        forfaiterData = props.parentScForfaiterList.data.forfaiterList;
    } catch (e) {}
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
                                '\u521B\u5EFA\u8D44\u91D1'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                _common.FormComponent,
                {
                    formList: formList,
                    layout: 'horizontal',
                    moreItemInRow: true,
                    formItemLayout: formItemLayout,
                    formSubBtnLayout: formSubBtnLayout,
                    btn: { sub: '提交', back: '返回' },
                    formSubmit: props.formSubmit
                },
                _react2.default.createElement(_common.TableComponent, {
                    componentTitle: '包买商列表',
                    btnName: '添加包买商',
                    columns: selectedColumns,
                    dataSource: props.selectedForfaiter,
                    rowKey: 'swiftCode',
                    btnClick: props.toggleModal.bind(undefined, 'btn'),
                    scroll: { y: 240 },
                    pagination: false
                }),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        '\u9009\u62E9\u6DFB\u52A0\u603B\u884C\u9ED8\u8BA4\u5305\u62EC\u6240\u6709\u5206\u884C'
                    ),
                    _react2.default.createElement(
                        'li',
                        { style: { color: 'red' } },
                        '\u5305\u4E70\u5546\u4E3A\u5FC5\u9009'
                    )
                )
            ),
            _react2.default.createElement(
                _modal2.default,
                {
                    //modal 
                    title: '\u5305\u4E70\u5546\u5217\u8868',
                    visible: props.modalVisible,
                    onOk: props.modalTableValue,
                    onCancel: props.toggleModal,
                    cancelText: '取消',
                    style: { minWidth: '80%' }
                },
                _react2.default.createElement(_common.FormComponent
                //modal搜索
                , { formList: ModalsearchComponentData,
                    formSubmit: props.formSubmit,
                    btn: { sub: '搜索' },
                    layout: 'inline'
                    //formItemLayout={formItemLayout}
                    //formSubBtnLayout={modalFormSubBtnLayout}
                    //moreItemInRow={true}
                }),
                _react2.default.createElement(_table2.default, {
                    //modal table
                    rowKey: 'swiftCode',
                    columns: tableColumns,
                    dataSource: forfaiterData,
                    scroll: { y: 400 }
                    //扩展子table
                    //expandedRowRender={expandedRowRender}
                    //点击扩展图标是回调
                    //onExpand={props.onExpand}
                    //显示选择框
                    , rowSelection: props.rowSelection,
                    onChange: props.paginationOnChange
                    //loading={props.modalTableLoading}
                })
            )
        )
    );
};

// 表单
var formList = [{
    label: '包买商名称',
    id: 'forfaiterNm',
    tag: 'input',
    type: 'text',
    rules: {
        required: true,
        message: '包买商名称必填'
    }
}, {
    label: '包买商BIC',
    id: 'forfaiterSc',
    tag: 'input',
    type: 'text',
    rules: {
        required: true,
        message: '包买商BIC必填'
    }
}, {
    label: '包买商联系人',
    id: 'forfaiterAtten',
    tag: 'input',
    type: 'text',
    rules: {
        required: true,
        message: '包买商联系人必填'
    }
}, {
    label: '包买商联系方式',
    id: 'forfaiterContacts',
    tag: 'input',
    type: 'text',
    rules: {
        required: true,
        message: '包买商联系方式必填'
    }
}, {
    label: '融资期限',
    id: 'financingMaturity',
    tag: 'number',
    rules: {
        type: 'number',
        required: true,
        message: '融资期限必填'
    },
    config: {
        formatter: function formatter(value) {
            return value + '\u5929';
        },
        style: { width: '100%' }
    }
}, {
    label: '价格',
    id: 'price',
    tag: 'number',
    rules: {
        type: 'number',
        required: true,
        message: '价格必填且取值范围为0-99.99',
        max: 99.99,
        min: 0
    },
    config: {
        formatter: function formatter(value) {
            return value + '%';
        },
        style: { width: '100%' }
    }
}, {
    label: '价格有效开始时间',
    id: 'priceValidStart',
    tag: 'date',
    rules: {
        required: true,
        message: '价格有效开始时间必填',
        type: 'object'
    },
    config: {
        placeholder: ''
    }
}, {
    label: '价格有效结束时间',
    id: 'priceValidEnd',
    tag: 'date',
    rules: {
        required: true,
        message: '价格有效结束时间必填',
        type: 'object'
    },
    config: {
        placeholder: ''
    }
}, {
    label: '其他要求',
    id: 'requirements',
    tag: 'textarea',
    type: 'text'
}];

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
//table columns数据
var tableColumns = [{
    title: '包买商名称',
    dataIndex: 'forfaiterName'
}, {
    title: 'swiftCode',
    dataIndex: 'swiftCode'
}];
//modal 搜索
var ModalsearchComponentData = [{
    label: '机构名称',
    id: 'forfaiterNm',
    type: 'text',
    tag: 'input'
}, {
    label: '结构BIC',
    id: 'parentSwiftCode',
    type: 'text',
    tag: 'input'
}, {
    label: '包买商BIC',
    id: 'swiftCode',
    tag: 'input'
}];
// //modal
// const modalFormSubBtnLayout = {
//     wrapperCol: {
//         xs: { span: 24 },
//         sm: { span: 4, offset: 20 },
//     }
// };

/***/ }),

/***/ 1676:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FundsDetailContainer = undefined;

var _table = __webpack_require__(535);

var _table2 = _interopRequireDefault(_table);

var _divider = __webpack_require__(1288);

var _divider2 = _interopRequireDefault(_divider);

var _row = __webpack_require__(247);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(248);

var _col2 = _interopRequireDefault(_col);

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                   * @Author: mhc 
                   * @Date: 2018-04-26 09:51:29 
                   * @Last Modified by: mhc
                   * @Last Modified time: 2018-05-07 17:18:01
                   */

__webpack_require__(538);

__webpack_require__(1290);

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(125);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(1677);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FundsMap = {
    capitalId: 'id',
    forfaiterNm: '包买商名称',
    forfaiterSc: '包买商BIC',
    forfaiterAtten: '包买商联系人',
    forfaiterContacts: '包买商联系方式',
    financingMaturity: '融资期限',
    price: '价格',
    requirements: '其他要求',
    priceValidStart: '价格有效期开始时间',
    priceValidEnd: '价格有效期截止时间',
    capitalStatus: '状态',
    forfaiter: '包买商列表',
    txId: '交易ID',
    tranType: '交易类型',
    tranDate: '交易时间',
    extend: '扩展字段'
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        fundsDetail: state.businessSystem.fundsModule.fundsDetail
    };
};

var mapDispatchToprops = function mapDispatchToprops(dispatch) {
    return {
        fundsDetailSaga: function fundsDetailSaga(values) {
            return dispatch((0, _actions.requestFundsDetail)(values));
        }
    };
};
var FundsDetailContainer = exports.FundsDetailContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToprops), _dec(_class = function (_React$Component) {
    _inherits(FundsDetailContainer, _React$Component);

    function FundsDetailContainer(props) {
        _classCallCheck(this, FundsDetailContainer);

        var _this = _possibleConstructorReturn(this, (FundsDetailContainer.__proto__ || Object.getPrototypeOf(FundsDetailContainer)).call(this, props));

        _this.goBack = function () {
            window.history.go(-1);
        };

        var capitalId = _this.props.match.params.capitalId;
        _this.capitalId = capitalId;
        _this.props.fundsDetailSaga({ capitalId: capitalId });
        return _this;
    }

    _createClass(FundsDetailContainer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(FundsDetaulContent, { fundsDetail: this.props.fundsDetail, goBack: this.goBack })
            );
        }
    }]);

    return FundsDetailContainer;
}(_react2.default.Component)) || _class);


var FundsDetaulContent = function FundsDetaulContent(props) {
    var detailList = [];
    var forfaiterList = [];
    try {
        var dataList = props.fundsDetail.data;
        forfaiterList = tranTreeList(JSON.parse(dataList.forfaiter));
        detailList = tranFundsList(dataList, FundsMap);
    } catch (e) {}
    if ((typeof detailList === 'undefined' ? 'undefined' : _typeof(detailList)) !== 'object') {
        detailList = [];
    }
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
                    { span: 3, offset: 21 },
                    _react2.default.createElement(
                        _button2.default,
                        { onClick: props.goBack, type: 'primary' },
                        '\u8FD4\u56DE'
                    )
                )
            ),
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
                                '\u8D44\u91D1\u8BE6\u60C5'
                            )
                        )
                    )
                )
            ),
            _react2.default.createElement(
                _row2.default,
                null,
                detailList.map(function (item) {
                    return _react2.default.createElement(
                        _col2.default,
                        { span: 10, offset: 1, key: item.key },
                        _react2.default.createElement(
                            'div',
                            { className: 'detail-row' },
                            _react2.default.createElement(
                                'div',
                                null,
                                item.name,
                                ':'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                item.value
                            )
                        )
                    );
                })
            ),
            _react2.default.createElement(
                _row2.default,
                { style: { marginTop: '100px' } },
                _react2.default.createElement(
                    'div',
                    { id: 'forfaiterTable' },
                    _react2.default.createElement(_table2.default, {
                        columns: columns,
                        dataSource: forfaiterList,
                        rowKey: 'SC',
                        pagination: false,
                        title: function title() {
                            return _react2.default.createElement(
                                'h3',
                                null,
                                '\u5305\u4E70\u5546\u5217\u8868'
                            );
                        },
                        bordered: true
                        //scroll={{ y: 400 }}
                    })
                )
            )
        )
    );
};

var columns = [{
    title: '名称',
    dataIndex: 'NM'
}, {
    title: 'swiftCode',
    dataIndex: 'SC'
}];
//转换显示
function tranFundsList(list, listMap) {
    var newList = [];
    for (var k in list) {

        newList.push({
            key: k,
            name: listMap[k],
            value: list[k]
        });
    }
    newList.map(function (item) {
        switch (item.key) {
            case 'price':
                item.value += '%';
                break;
            case 'priceValidStart':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'priceValidEnd':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'tranDate':
                item.value = new Date(item.value).toLocaleString();
                break;
            case 'tranType':
                if (typeof item.value !== 'string') {
                    item.value = String(item.value);
                };
                item.value === '1' ? item.value = '我发布的' : item.value = '我收到的';
                break;
            case 'capitalStatus':
                if (typeof item.value !== 'string') {
                    item.value = String(item.value);
                };
                switch (item.value) {
                    case "0":
                        item.value = '未发布';
                        break;
                    case '1':
                        item.value = '已发布';
                        break;
                    case '2':
                        item.value = '已下架';
                        break;
                    case '3':
                        item.value = '超时';
                        break;
                    case '4':
                        item.value = '失败';
                        break;
                    default:
                        return null;
                }
                break;
            case 'forfaiter':
                item.value = _react2.default.createElement(
                    'a',
                    null,
                    '\u8BF7\u770B\u4E0B\u65B9\u5217\u8868'
                );
                break;
            default:
                return item.value;
        }
        return null;
    });
    return newList;
}

//forfaiter 列表转化为树形结构
function tranTreeList(list) {
    if (!Array.isArray(list)) {
        alert('fortaiter列表不是一个数组！');
        return;
    }
    list.map(function (item) {
        if (Array.isArray(item.FORFEITER)) {
            item.children = item.FORFEITER;
        }
        item.SC = item.BK_SC;
        item.NM = item.BK_NM_C;
        return null;
    });
    return list;
}

/***/ }),

/***/ 1677:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1678);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(17)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/less-loader/dist/cjs.js??ref--2-2!./index.less", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/less-loader/dist/cjs.js??ref--2-2!./index.less");

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

/***/ 1678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/*\n * @Author: mhc \n * @Date: 2018-05-02 10:45:44 \n * @Last Modified by: mhc\n * @Last Modified time: 2018-05-07 16:12:19\n */\n.detail-row {\n  padding: 6px;\n}\n.detail-row > div {\n  width: 40%;\n  float: left;\n  text-align: right;\n  white-space: nowrap;\n  margin-right: 20px;\n}\n.detail-row > p {\n  width: 50%;\n  float: left;\n  word-wrap: break-word;\n  margin: 0;\n}\n.detail-row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.detail-columns-delete {\n  color: #1890ff;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ })

});