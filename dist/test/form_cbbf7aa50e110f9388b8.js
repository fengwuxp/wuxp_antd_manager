webpackJsonp([0],{

/***/ 1508:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = __webpack_require__(32);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _button = __webpack_require__(625);

var _button2 = _interopRequireDefault(_button);

var _PageHeaderLayout = __webpack_require__(1509);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;

var FormDemo = function (_React$Component) {
    _inherits(FormDemo, _React$Component);

    function FormDemo() {
        _classCallCheck(this, FormDemo);

        var _this = _possibleConstructorReturn(this, (FormDemo.__proto__ || Object.getPrototypeOf(FormDemo)).apply(this, arguments));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };
        _this.handleSelectChange = function (value) {
            console.log(value);
            var obj = {
                note: "Hi, " + (value === 'male' ? 'man' : 'lady') + "!"
            };
            _this.props.form.setFieldsValue(obj);
        };
        return _this;
    }

    _createClass(FormDemo, [{
        key: "render",
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            console.log(this.props);
            return React.createElement(_PageHeaderLayout2.default, { title: "\u57FA\u7840\u8868\u5355", content: "\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002" }, React.createElement(_antd.Card, { bordered: false }, React.createElement(_antd.Form, { onSubmit: this.handleSubmit }, React.createElement(FormItem, { label: "\u7F16\u53F7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('note', {
                rules: [{
                    required: true,
                    message: 'Please input your note!'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("p", null, "\u7F16\u53F7\u662F5-10\u4F4D\u7684\u6570\u5B57\u3001\u5B57\u6BCD\u7B49\u7EC4\u5408")), React.createElement(FormItem, { label: "\u6027\u522B", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('gender', {
                rules: [{ required: true, message: 'Please select your gender!' }]
            })(React.createElement(_antd.Select, { placeholder: "Select a option and change input text above", onChange: this.handleSelectChange }, React.createElement(Option, { value: "male" }, "male"), React.createElement(Option, { value: "female" }, "female")))), React.createElement(FormItem, { wrapperCol: { span: 12, offset: 5 } }, React.createElement(_button2.default, { type: "primary", htmlType: "submit" }, "\u63D0\u4EA4\u53C2\u6570")))));
        }
    }]);

    return FormDemo;
}(React.Component);

exports.default = _antd.Form.create()(FormDemo);

/***/ }),

/***/ 1509:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(1510);

var styles = _interopRequireWildcard(_PageHeaderLayout);

var _reactRouterDom = __webpack_require__(72);

var _index = __webpack_require__(1512);

var _index2 = _interopRequireDefault(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
// import PageHeader from 'ant-design-pro/lib/PageHeader';

exports.default = function (props) {
    var children = props.children,
        wrapperClassName = props.wrapperClassName,
        top = props.top,
        restProps = __rest(props, ["children", "wrapperClassName", "top"]);

    return _react2.default.createElement("div", { style: { margin: '-24px -24px 0' }, className: wrapperClassName }, top, _react2.default.createElement(_index2.default, Object.assign({ key: "pageheader" }, restProps, { linkElement: _reactRouterDom.Link })), children ? _react2.default.createElement("div", { className: styles.content }, children) : null);
};

/***/ }),

/***/ 1510:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1511);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1507)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./PageHeaderLayout.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./PageHeaderLayout.scss");

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

/***/ 1511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1506)(false);
// imports


// module
exports.push([module.i, ".PageHeaderLayout__content-1K038 {\n  margin: 24px 24px 0; }\n\n@media screen and (max-width: 576px) {\n  .PageHeaderLayout__content-1K038 {\n    margin: 24px 0 0; } }\n", ""]);

// exports
exports.locals = {
	"content": "PageHeaderLayout__content-1K038"
};

/***/ }),

/***/ 1512:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getBreadcrumb = getBreadcrumb;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pathToRegexp = __webpack_require__(623);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _antd = __webpack_require__(32);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(1513);

var styles = _interopRequireWildcard(_index);

var _pathTools = __webpack_require__(624);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabPane = _antd.Tabs.TabPane;
function getBreadcrumb(breadcrumbNameMap, url) {
    var breadcrumb = breadcrumbNameMap[url];
    if (!breadcrumb) {
        Object.keys(breadcrumbNameMap).forEach(function (item) {
            if ((0, _pathToRegexp2.default)(item).test(url)) {
                breadcrumb = breadcrumbNameMap[item];
            }
        });
    }
    return breadcrumb || {};
}
/**
 * 业务通用页面头部
 * 1:处理面包屑导航
 * 2：页面标题，以及提示内容等展示
 */

var PageHeader = function (_PureComponent) {
    _inherits(PageHeader, _PureComponent);

    function PageHeader() {
        _classCallCheck(this, PageHeader);

        var _this = _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));

        _this.onChange = function (key) {
            if (_this.props.onTabChange) {
                _this.props.onTabChange(key);
            }
        };
        _this.getBreadcrumbProps = function () {
            return {
                routes: _this.props.routes || _this.context.routes,
                params: _this.props.params || _this.context.params,
                routerLocation: _this.props.location || _this.context.location,
                breadcrumbNameMap: _this.props.breadcrumbNameMap || _this.context.breadcrumbNameMap
            };
        };
        // Generated according to props
        _this.conversionFromProps = function () {
            var _this$props = _this.props,
                breadcrumbList = _this$props.breadcrumbList,
                breadcrumbSeparator = _this$props.breadcrumbSeparator,
                _this$props$linkEleme = _this$props.linkElement,
                linkElement = _this$props$linkEleme === undefined ? 'a' : _this$props$linkEleme;

            return _react2.default.createElement(_antd.Breadcrumb, { className: styles.breadcrumb, separator: breadcrumbSeparator }, breadcrumbList.map(function (item) {
                return _react2.default.createElement(_antd.Breadcrumb.Item, { key: item.title }, item.href ? (0, _react.createElement)(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', item.href), item.title) : item.title);
            }));
        };
        _this.conversionFromLocation = function (routerLocation, breadcrumbNameMap) {
            var _this$props2 = _this.props,
                breadcrumbSeparator = _this$props2.breadcrumbSeparator,
                _this$props2$linkElem = _this$props2.linkElement,
                linkElement = _this$props2$linkElem === undefined ? 'a' : _this$props2$linkElem;
            // Convert the url to an array

            var pathSnippets = (0, _pathTools.urlToList)(routerLocation.pathname);
            // Loop data mosaic routing
            var extraBreadcrumbItems = pathSnippets.map(function (url, index) {
                var currentBreadcrumb = getBreadcrumb(breadcrumbNameMap, url);
                var isLinkable = index !== pathSnippets.length - 1 && currentBreadcrumb.component;
                return currentBreadcrumb.name && !currentBreadcrumb.hideInBreadcrumb ? _react2.default.createElement(_antd.Breadcrumb.Item, { key: url }, (0, _react.createElement)(isLinkable ? linkElement : 'span', _defineProperty({}, linkElement === 'a' ? 'href' : 'to', url), currentBreadcrumb.name)) : null;
            });
            // Add home breadcrumbs to your head
            extraBreadcrumbItems.unshift(_react2.default.createElement(_antd.Breadcrumb.Item, { key: "home" }, (0, _react.createElement)(linkElement, _defineProperty({}, linkElement === 'a' ? 'href' : 'to', '/'), '首页')));
            return _react2.default.createElement(_antd.Breadcrumb, { className: styles.breadcrumb, separator: breadcrumbSeparator }, extraBreadcrumbItems);
        };
        /**
         * 将参数转化为面包屑
         * Convert parameters into breadcrumbs
         */
        _this.conversionBreadcrumbList = function () {
            var _this$props3 = _this.props,
                breadcrumbList = _this$props3.breadcrumbList,
                breadcrumbSeparator = _this$props3.breadcrumbSeparator;

            var _this$getBreadcrumbPr = _this.getBreadcrumbProps(),
                routes = _this$getBreadcrumbPr.routes,
                params = _this$getBreadcrumbPr.params,
                routerLocation = _this$getBreadcrumbPr.routerLocation,
                breadcrumbNameMap = _this$getBreadcrumbPr.breadcrumbNameMap;

            console.log(routes);
            console.log(params);
            console.log(routerLocation);
            console.log(breadcrumbNameMap);
            if (breadcrumbList && breadcrumbList.length) {
                return _this.conversionFromProps();
            }
            // 如果传入 routes 和 params 属性
            // If pass routes and params attributes
            if (routes && params) {
                return _react2.default.createElement(_antd.Breadcrumb, { className: styles.breadcrumb, routes: routes.filter(function (route) {
                        return route.breadcrumbName;
                    }), params: params, itemRender: _this.itemRender, separator: breadcrumbSeparator });
            }
            // 根据 location 生成 面包屑
            // Generate breadcrumbs based on location
            if (routerLocation && routerLocation.pathname) {
                return _this.conversionFromLocation(routerLocation, breadcrumbNameMap);
            }
            return null;
        };
        // 渲染Breadcrumb 子节点
        // Render the Breadcrumb child node
        _this.itemRender = function (route, params, routes, paths) {
            var _this$props$linkEleme2 = _this.props.linkElement,
                linkElement = _this$props$linkEleme2 === undefined ? 'a' : _this$props$linkEleme2;

            var last = routes.indexOf(route) === routes.length - 1;
            return last || !route.component ? _react2.default.createElement("span", null, route.breadcrumbName) : (0, _react.createElement)(linkElement, {
                href: paths.join('/') || '/',
                to: paths.join('/') || '/'
            }, route.breadcrumbName);
        };
        return _this;
    }

    _createClass(PageHeader, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                logo = _props.logo,
                action = _props.action,
                content = _props.content,
                extraContent = _props.extraContent,
                tabList = _props.tabList,
                className = _props.className,
                tabActiveKey = _props.tabActiveKey,
                tabDefaultActiveKey = _props.tabDefaultActiveKey,
                tabBarExtraContent = _props.tabBarExtraContent;

            var clsString = (0, _classnames2.default)(styles.pageHeader, className);
            var breadcrumb = this.conversionBreadcrumbList();
            var activeKeyProps = {};
            if (tabDefaultActiveKey !== undefined) {
                activeKeyProps.defaultActiveKey = tabDefaultActiveKey;
            }
            if (tabActiveKey !== undefined) {
                activeKeyProps.activeKey = tabActiveKey;
            }
            return _react2.default.createElement("div", { className: clsString }, breadcrumb, _react2.default.createElement("div", { className: styles.detail }, logo && _react2.default.createElement("div", { className: styles.logo }, logo), _react2.default.createElement("div", { className: styles.main }, _react2.default.createElement("div", { className: styles.row }, title && _react2.default.createElement("h1", { className: styles.title }, title), action && _react2.default.createElement("div", { className: styles.action }, action)), _react2.default.createElement("div", { className: styles.row }, content && _react2.default.createElement("div", { className: styles.content }, content), extraContent && _react2.default.createElement("div", { className: styles.extraContent }, extraContent)))), tabList && tabList.length && _react2.default.createElement(_antd.Tabs, Object.assign({ className: styles.tabs }, activeKeyProps, { onChange: this.onChange, tabBarExtraContent: tabBarExtraContent }), tabList.map(function (item) {
                return _react2.default.createElement(TabPane, { tab: item.tab, key: item.key });
            })));
        }
    }]);

    return PageHeader;
}(_react.PureComponent);

exports.default = PageHeader;

PageHeader.contextTypes = {
    routes: _propTypes2.default.array,
    params: _propTypes2.default.object,
    location: _propTypes2.default.object,
    breadcrumbNameMap: _propTypes2.default.object
};

/***/ }),

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1514);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1507)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../../../node_modules/css-loader/index.js?modules&localIdentName=[name]__[local]-[hash:base64:5]!../../../node_modules/sass-loader/lib/loader.js!./index.scss");

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

/***/ 1514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1506)(false);
// imports


// module
exports.push([module.i, ".index__pageHeader-3H9hO {\n  background: #fff;\n  padding: 16px 32px 0 32px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.9); }\n  .index__pageHeader-3H9hO .index__detail-1lt1T {\n    display: flex; }\n  .index__pageHeader-3H9hO .index__row-3eSbl {\n    display: flex; }\n  .index__pageHeader-3H9hO .index__breadcrumb-2389e {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__tabs-1s1ll {\n    margin: 0 0 -17px -8px; }\n    .index__pageHeader-3H9hO .index__tabs-1s1ll .ant-tabs-bar {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.9); }\n  .index__pageHeader-3H9hO .index__logo-1Iprp {\n    flex: 0 1 auto;\n    margin-right: 16px;\n    padding-top: 1px; }\n    .index__pageHeader-3H9hO .index__logo-1Iprp > img {\n      width: 28px;\n      height: 28px;\n      border-radius: 4px;\n      display: block; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr {\n    font-size: 20px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.85); }\n  .index__pageHeader-3H9hO .index__action-3cQGV {\n    margin-left: 56px;\n    min-width: 266px; }\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group:not(:last-child),\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn:not(:last-child) {\n      margin-right: 8px; }\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group > .ant-btn {\n      margin-right: 0; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr,\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__content-qLMvi,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO,\n  .index__pageHeader-3H9hO .index__main-2FqCv {\n    flex: auto; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr,\n  .index__pageHeader-3H9hO .index__action-3cQGV {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__logo-1Iprp,\n  .index__pageHeader-3H9hO .index__content-qLMvi,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    text-align: right; }\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 88px;\n    min-width: 242px; }\n\n@media screen and (max-width: 1200px) {\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 44px; } }\n\n@media screen and (max-width: 992px) {\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 20px; } }\n\n@media screen and (max-width: 768px) {\n  .index__pageHeader-3H9hO .index__row-3eSbl {\n    display: block; }\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 0;\n    text-align: left; } }\n\n@media screen and (max-width: 576px) {\n  .index__pageHeader-3H9hO .index__detail-1lt1T {\n    display: block; } }\n\n@media screen and (max-width: 480px) {\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group,\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn {\n    display: block;\n    margin-bottom: 8px; }\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group > .ant-btn {\n    display: inline-block;\n    margin-bottom: 0; } }\n", ""]);

// exports
exports.locals = {
	"pageHeader": "index__pageHeader-3H9hO",
	"detail": "index__detail-1lt1T",
	"row": "index__row-3eSbl",
	"breadcrumb": "index__breadcrumb-2389e",
	"tabs": "index__tabs-1s1ll",
	"logo": "index__logo-1Iprp",
	"title": "index__title-2Ozhr",
	"action": "index__action-3cQGV",
	"content": "index__content-qLMvi",
	"extraContent": "index__extraContent-3DfDO",
	"main": "index__main-2FqCv"
};

/***/ })

});