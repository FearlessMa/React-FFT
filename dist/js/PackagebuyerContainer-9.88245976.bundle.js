webpackJsonp([9],{

/***/ 1282:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class; /*
                  * @Author: mhc 
                  * @Date: 2018-04-28 09:31:17 
                  * @Last Modified by: mhc
                  * @Last Modified time: 2018-05-21 14:20:48
                  */

__webpack_require__(249);

__webpack_require__(250);

__webpack_require__(549);

__webpack_require__(258);

__webpack_require__(125);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _common = __webpack_require__(251);

var _reactRedux = __webpack_require__(123);

var _actions = __webpack_require__(547);

var _publicConfig = __webpack_require__(259);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        loading: state.businessSystem.forfaiterModule.loading,
        forfaiterList: state.businessSystem.forfaiterModule.forfaiterList
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        forfaiterListSaga: function forfaiterListSaga(values) {
            return dispatch((0, _actions.requestForfaiterList)(values));
        },
        syncAllSaga: function syncAllSaga() {
            return dispatch((0, _actions.requestSyncAllForfaiter)());
        }
    };
};

var PackagebuyerContainer = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(PackagebuyerContainer, _React$Component);

    function PackagebuyerContainer() {
        var _ref;

        _classCallCheck(this, PackagebuyerContainer);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = PackagebuyerContainer.__proto__ || Object.getPrototypeOf(PackagebuyerContainer)).call.apply(_ref, [this].concat(arg)));

        _this.toggleCollapsed = function () {
            _this.setState({
                collapsed: !_this.state.collapsed
            });
        };

        _this.formSubmit = function (values) {
            console.log(values);
            _this.props.forfaiterListSaga(values);
        };

        _this.toAllForfaiter = function () {
            _this.props.syncAllSaga();
        };

        _this.paginationOnChange = function (pagination) {
            _this.props.requestFundsPublishSaga({ current: pagination.current, pageSize: pagination.pageSize });
        };

        _this.state = {
            collapsed: true
        };
        _this.props.forfaiterListSaga();
        return _this;
    }

    //分页


    _createClass(PackagebuyerContainer, [{
        key: 'render',
        value: function render() {
            var data = searchComponentData;
            if (!this.state.collapsed) {
                data = data.concat(searchOtherData);
            }

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(PackagebuyerContent, _extends({
                    collapsed: this.state.collapsed,
                    searchComponentData: data,
                    toggleCollapsed: this.toggleCollapsed,
                    formSubmit: this.formSubmit,
                    onChange: this.paginationOnChange,
                    toAllForfaiter: this.toAllForfaiter
                }, this.props))
            );
        }
    }]);

    return PackagebuyerContainer;
}(_react2.default.Component)) || _class);
exports.default = PackagebuyerContainer;


var searchComponentData = [{
    label: '机构名称',
    id: 'forfaiterNm',
    type: 'text',
    tag: 'input'
}, {
    label: '结构BIC',
    id: 'parentSwiftCode',
    type: 'text',
    tag: 'input'
}];
var searchOtherData = [{
    label: '包买商BIC',
    id: 'swiftCode',
    tag: 'input'
}, {
    label: '包买商状态',
    id: 'forfaiterStatus',
    tag: 'select',
    options: [{
        name: '已发布',
        value: 'publish'
    }, {
        name: '撤销',
        value: 'offline'
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

var columns = [{
    title: '包买商名称',
    dataIndex: 'forfaiterName'
}, {
    title: 'swiftCode',
    dataIndex: 'swiftCode'
}, {
    title: '状态',
    dataIndex: 'forfaiterStatus',
    render: function render(text) {
        return _react2.default.createElement(
            'span',
            null,
            text === 'publish' ? '已发布' : '撤销'
        );
    }
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
    title: '修改时间',
    dataIndex: 'updateTime',
    render: function render(text) {
        return _react2.default.createElement(
            'span',
            null,
            new Date(text).toLocaleString().substr(0, 9)
        );
    }
}];

var PackagebuyerContent = function PackagebuyerContent(props) {
    var collapsed = props.collapsed,
        searchComponentData = props.searchComponentData,
        toggleCollapsed = props.toggleCollapsed,
        forfaiterList = props.forfaiterList,
        loading = props.loading,
        toAllForfaiter = props.toAllForfaiter;

    var formConfig = {
        moreItemInRow: !collapsed,
        formItemLayout: collapsed ? null : formItemLayout,
        layout: collapsed ? 'inline' : null,
        formSubBtnLayout: collapsed ? null : formSubBtnLayout
    };

    var data = [];
    var pagination = [];
    try {
        data = forfaiterList.data.forfaiterList;
        pagination = forfaiterList.data.pagination;
    } catch (e) {}

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_common.BreadcrumbComponent, _extends({}, props, { breadcrumbNameMap: _publicConfig.forfaiterMap })),
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
                        _common.FormComponent,
                        _extends({
                            formList: searchComponentData,
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
            _react2.default.createElement(_common.TableComponent, {
                columns: columns,
                dataSource: data,
                loading: loading
                //分页
                , onChange: props.onChange,
                pagination: pagination,
                rowKey: 'swiftCode',
                componentTitle: '包买商列表',
                btnName: '同步所有',
                tooltipText: '从区块链上获取包买商列表到本地',
                btnClick: toAllForfaiter
            })
        )
    );
};

/***/ })

});