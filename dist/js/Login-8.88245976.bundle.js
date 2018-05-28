webpackJsonp([8],{

/***/ 1273:
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginReducer = exports.default = undefined;

var _button = __webpack_require__(102);

var _button2 = _interopRequireDefault(_button);

var _input = __webpack_require__(534);

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(26);

var _icon2 = _interopRequireDefault(_icon);

var _message2 = __webpack_require__(165);

var _message3 = _interopRequireDefault(_message2);

var _form = __webpack_require__(540);

var _form2 = _interopRequireDefault(_form);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class3; /**
                                   * Created by MHC on 2018/2/14.
                                   */

// import Log from 'img/AntdLog.svg';

// import Antd from 'img/Antd.svg';


__webpack_require__(125);

__webpack_require__(104);

__webpack_require__(258);

__webpack_require__(169);

__webpack_require__(549);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(123);

var _msLog = __webpack_require__(575);

var _msLog2 = _interopRequireDefault(_msLog);

__webpack_require__(1651);

var _actions = __webpack_require__(274);

var _reducer = __webpack_require__(576);

var _actionTypes = __webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _form2.default.Item;

var FromCreate = _form2.default.create;

var mapStateToProps = function mapStateToProps(state) {
    return {
        loading: state.login.loading,
        login: state.login
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        onLogin: function onLogin(userName, password) {
            return dispatch((0, _actions.loginAction)(userName, password));
        },
        clearErrMsg: function clearErrMsg() {
            return dispatch((0, _actions.clearErrMsgAction)());
        }
    };
};

var LoginComponent = (_dec = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), _dec(_class = function (_React$Component) {
    _inherits(LoginComponent, _React$Component);

    function LoginComponent() {
        var _ref;

        _classCallCheck(this, LoginComponent);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = LoginComponent.__proto__ || Object.getPrototypeOf(LoginComponent)).call.apply(_ref, [this].concat(arg)));

        _this.toLogin = function (values) {
            _this.props.onLogin(values.userName, values.password);
        };

        var sessionAuth = sessionStorage.getItem('isAuthenticated');
        var userData = sessionStorage.getItem('userData');
        if (sessionAuth && userData) {
            _this.props.history.push("/");
        }
        _this.state = {
            isLoading: false
        };
        return _this;
    }

    _createClass(LoginComponent, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var type = nextProps.login.userData.type;
            //验证失败提示

            if (type === _actionTypes.LOGIN_ERR) {
                _message3.default.error(nextProps.login.userData.message);
                this.props.clearErrMsg();
            }
            // 登录成功后存储登录状态
            if (nextProps.login.isLogin) {
                sessionStorage.setItem('isAuthenticated', true);
                this.props.history.push("/");
            }
        }
    }, {
        key: 'render',
        value: function render() {
            // const {type} = this.props.login.userData;
            // //验证失败提示
            // if (type === LOGIN_ERR) {
            //     message.error(this.props.login.userData.message);
            //     this.props.clearErrMsg();
            // }
            // // 登录成功后存储登录状态
            // if (this.props.login.isLogin) {
            //     sessionStorage.setItem('isAuthenticated', true);
            //     this.props.history.push("/");
            // }
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(Login, _extends({}, this.props, { toLogin: this.toLogin }))
            );
        }
    }]);

    return LoginComponent;
}(_react2.default.Component)) || _class);
exports.default = LoginComponent;
var Login = (_dec2 = FromCreate(), _dec2(_class3 = function (_React$Component2) {
    _inherits(Login, _React$Component2);

    function Login() {
        var _ref2;

        var _temp, _this2, _ret;

        _classCallCheck(this, Login);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref2 = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref2, [this].concat(args))), _this2), _this2.onSubmit = function (e) {
            e.preventDefault();
            _this2.setState({
                loading: true
            });
            _this2.props.form.validateFields(function (err, values) {
                if (!err) {
                    _this2.props.toLogin(values);
                }
            });
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    // constructor(...arg) {
    //     super(...arg);
    // }

    _createClass(Login, [{
        key: 'render',
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _form2.default,
                    { onSubmit: this.onSubmit, className: 'login-form' },
                    _react2.default.createElement(
                        'div',
                        { className: 'loginIcon' },
                        _react2.default.createElement('img', { src: _msLog2.default, alt: '' }),
                        _react2.default.createElement(
                            'div',
                            { style: { fontSize: '1.2rem', marginLeft: '8px' } },
                            '\u8D44\u4EA7\u4EA4\u6613\u96C6\u5E02'
                        )
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('userName', {
                            rules: [{
                                required: true,
                                message: '请输入你的用户名！'
                            }],
                            initialValue: 'admin'
                        })(_react2.default.createElement(_input2.default, { type: 'text',
                            prefix: _react2.default.createElement(_icon2.default, { type: 'user', style: { color: 'rgba(0,0,0,.25)' } }),
                            placeholder: 'Username' }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        getFieldDecorator('password', {
                            rules: [{
                                required: true,
                                message: '请输入你的密码！'
                            }],
                            initialValue: '12345'
                        })(_react2.default.createElement(_input2.default, { type: 'password',
                            prefix: _react2.default.createElement(_icon2.default, { type: 'lock', style: { color: 'rgba(0,0,0,.25)' } }),
                            placeholder: 'Password' }))
                    ),
                    _react2.default.createElement(
                        FormItem,
                        null,
                        _react2.default.createElement(
                            _button2.default,
                            {
                                loading: this.props.loading,
                                type: 'primary',
                                htmlType: 'submit',
                                style: { width: '100%' } },
                            'Login In'
                        )
                    )
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component)) || _class3);
exports.loginReducer = _reducer.loginReducer;

/***/ }),

/***/ 1651:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1652);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(17)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/less-loader/dist/cjs.js??ref--2-2!./index.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js??ref--2-1!../../node_modules/less-loader/dist/cjs.js??ref--2-2!./index.less");

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

/***/ 1652:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "/**\n * Created by MHC on 2018/2/14.\n */\n.login-form {\n  max-width: 285px;\n  align-self: center;\n  border: 1px solid #d9d9d9;\n  box-shadow: 5px 5px 5px 0px #d9d9d9;\n  padding: 25px;\n  border-radius: 3px;\n}\n.login-form .loginIcon {\n  display: flex;\n  align-items: center;\n  padding: 15px;\n}\n.login-form .loginIcon :first-child {\n  width: 25%;\n}\n.login-form .loginIcon :last-child {\n  flex: 1;\n  width: 25%;\n}\n", ""]);

// exports


/***/ })

});