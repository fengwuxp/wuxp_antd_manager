webpackJsonp([1],{

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = __webpack_require__(32);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _PageHeaderLayout = __webpack_require__(1545);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _TextArea = __webpack_require__(650);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _BaseFormView2 = __webpack_require__(1551);

var _BaseFormView3 = _interopRequireDefault(_BaseFormView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
function getUploadOptions(form, options) {
    var uploadProps = {
        action: 'https//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        accept: "*",
        name: "file",
        defaultFileList: [],
        onRemove: function onRemove(file) {
            console.log("---------onRemove---------");
            var response = file.response;

            form.setFieldsValue({
                icon: ""
            });
            console.log("设置icon的值");
        },
        onChange: function onChange(info) {
            console.log("---------onChange---------");
            var fileList = info.fileList;

            if (fileList.length > 0) {
                form.setFieldsValue({
                    icon: "456"
                });
            }
        }
    };
    return uploadProps;
}
var selectBefore = React.createElement(_antd.Select, { defaultValue: "Http://", style: { width: 90 } }, React.createElement(Option, { value: "Http://" }, "Http://"), React.createElement(Option, { value: "Https://" }, "Https://"));
var selectAfter = React.createElement(_antd.Select, { defaultValue: ".com", style: { width: 80 } }, React.createElement(Option, { value: ".com" }, ".com"), React.createElement(Option, { value: ".jp" }, ".jp"), React.createElement(Option, { value: ".cn" }, ".cn"), React.createElement(Option, { value: ".org" }, ".org"));
/**
 * 新增表单的例子
 */

var InputFormView = function (_BaseFormView) {
    _inherits(InputFormView, _BaseFormView);

    function InputFormView(props, context) {
        _classCallCheck(this, InputFormView);

        var _this = _possibleConstructorReturn(this, (InputFormView.__proto__ || Object.getPrototypeOf(InputFormView)).call(this, props, context));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            _this.props.form.validateFields(function (err, values) {
                if (!err) {
                    console.log('Received values of form: ', values);
                }
            });
        };
        _this.state = {
            options: [{
                value: "35",
                label: "福建",
                isLeaf: false
            }, {
                value: "11",
                label: "北京",
                isLeaf: false
            }]
        };
        _this.selectDateTimes = function (value, dateString) {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
        };
        _this.selectDateTimeOnOk = function (value) {
            console.log('onOk: ', value);
        };
        _this.onChange = function (value, selectedOptions) {
            console.log(value, selectedOptions);
        };
        /**
         * 级联数据处理
         * @param {CascaderOptionType[]} selectedOptions
         */
        _this.loadAreaInfo = function (selectedOptions) {
            console.log(selectedOptions);
            var targetOption = selectedOptions[selectedOptions.length - 1];
            console.log(targetOption.value);
            // load options lazily
            setTimeout(function () {
                targetOption.children = [{
                    label: targetOption.label + " Dynamic 1",
                    value: 'dynamic1'
                }, {
                    label: targetOption.label + " Dynamic 2",
                    value: 'dynamic2'
                }];
                _this.setState({
                    options: [].concat(_toConsumableArray(_this.state.options))
                });
            }, 1000);
        };
        return _this;
    }

    _createClass(InputFormView, [{
        key: "render",
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;
            // console.log(this.props);

            return React.createElement(_PageHeaderLayout2.default, { title: "\u57FA\u7840\u8868\u5355", content: "\u8868\u5355\u9875\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u6216\u9A8C\u8BC1\u4FE1\u606F\uFF0C\u57FA\u7840\u8868\u5355\u5E38\u89C1\u4E8E\u6570\u636E\u9879\u8F83\u5C11\u7684\u8868\u5355\u573A\u666F\u3002" }, React.createElement(_antd.Card, { bordered: false }, React.createElement(_antd.Form, { onSubmit: this.handleSubmit }, React.createElement(FormItem, { label: "\u7F16\u53F7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('note', {
                rules: [{
                    required: true,
                    message: '编码未填写'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u7F16\u53F7\u662F5-10\u4F4D\u7684\u6570\u5B57\u3001\u5B57\u6BCD\u7B49\u7EC4\u5408")), React.createElement(FormItem, { label: "\u540D\u79F0", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('name', {
                rules: [{
                    max: 5,
                    message: '名称长度最大为5'
                }, {
                    min: 2,
                    message: '名称长度最小为2'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u56FE\u6807", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, React.createElement(_antd.Upload, Object.assign({}, this.getUploadUploadProps('icon')), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "upload" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u56FE\u6807")), getFieldDecorator('icon', {
                rules: [{
                    required: true,
                    message: '请上传图标'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { type: "hidden" })), React.createElement("div", null, "\u56FE\u6807\u5EFA\u8BAE\u4F7F\u7528200*200\u7684\u6B63\u65B9\u5F62\u7684png\u56FE\u7247")), React.createElement(FormItem, { label: "\u7B80\u4ECB", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('description', {
                rules: [{
                    max: 5,
                    message: '名称长度最大为5'
                }, {
                    min: 2,
                    message: '名称长度最小为2'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u53D1\u5E03\u65F6\u95F4", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('publicDate', {
                rules: [{
                    max: 5,
                    message: '名称长度最大为5'
                }, {
                    min: 2,
                    message: '名称长度最小为2'
                }],
                initialValue: null
            })(React.createElement(_antd.DatePicker, { showTime: true, locale: "zb_CN", format: "YYYY-MM-DD HH:mm:ss", placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u65F6\u95F4", style: { width: 200 }, onChange: this.selectDateTimes, onOk: this.selectDateTimeOnOk })), React.createElement("div", null, "\u8BF7\u9009\u62E9\u65F6\u95F4")), React.createElement(FormItem, { label: "\u6D3B\u52A8\u4ECB\u7ECD", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('mediumBody', {
                rules: [{ required: true, message: '请填写活动介绍' }]
            })(React.createElement(_TextArea2.default, { autosize: { minRows: 4 }, cols: 15 }))), React.createElement(FormItem, { label: "\u53D1\u5E03\u7C7B\u578B", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sendMode', {
                rules: [{ required: true, message: '请选择发布类型' }]
            })(React.createElement(_antd.Select, { placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u7C7B\u578B" }, React.createElement(Option, { value: "SYNC" }, "\u540C\u6B65"), React.createElement(Option, { value: "ASYNC" }, "\u5F02\u6B65")))), React.createElement(FormItem, { label: "\u9644\u4EF6", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, React.createElement(_antd.Upload, Object.assign({}, getUploadOptions(this.props.form, {})), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "file" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u6587\u4EF6")), getFieldDecorator('downFile', {
                rules: [{
                    required: true,
                    message: '请上传附件'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { type: "hidden" }))), React.createElement(FormItem, { label: "\u6D3B\u52A8url", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('hdUrl', {
                rules: [{ required: true, message: '请填写活动url' }]
            })(React.createElement(_antd.Input, { addonBefore: selectBefore, addonAfter: selectAfter }))), React.createElement(FormItem, { label: "\u6570\u91CF", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('number', {
                rules: [{ required: false, message: '请填写数量' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u8D39\u7387\uFF08\u767E\u5206\u6BD4\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feePct', {
                rules: [{ required: false, message: '请填写费率（百分比）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5206\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeFen', {
                rules: [{ required: false, message: '请填写手续费（分）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeYuan', {
                rules: [{ required: false, message: '请填写手续费（元）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u9500\u552E\u989D\uFF08\u4E07\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sale', {
                rules: [{ required: false, message: '请选择上级' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u542F\u7528", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('enabled', {
                rules: [{ required: true, message: '请选择启用状态' }]
            })(React.createElement(_antd.Switch, { checkedChildren: "\u542F\u7528", unCheckedChildren: "\u7981\u7528", defaultChecked: true }))), React.createElement(FormItem, { label: "\u4E0A\u7EA7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('parentId', {
                rules: [{ required: false, message: '请选择上级' }]
            })(React.createElement(_antd.Input, null))), React.createElement(FormItem, { label: "\u5730\u533A\u4FE1\u606F", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('areaId', {
                rules: [{ required: false, message: '请选择地区信息' }]
            })(React.createElement(_antd.Cascader, { options: this.state.options, loadData: this.loadAreaInfo, placeholder: "\u8BF7\u9009\u62E9\u5730\u533A\u4FE1\u606F", onChange: this.onChange, changeOnSelect: true }))), React.createElement(FormItem, { wrapperCol: { span: 12, offset: 5 } }, React.createElement(_antd.Button, { type: "primary", htmlType: "submit" }, "\u63D0\u4EA4\u53C2\u6570")))));
        }
    }]);

    return InputFormView;
}(_BaseFormView3.default);

exports.default = _antd.Form.create()(InputFormView);

/***/ }),

/***/ 1545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(1546);

var styles = _interopRequireWildcard(_PageHeaderLayout);

var _reactRouterDom = __webpack_require__(74);

var _index = __webpack_require__(1548);

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

exports.default = function (props) {
    var children = props.children,
        wrapperClassName = props.wrapperClassName,
        top = props.top,
        restProps = __rest(props, ["children", "wrapperClassName", "top"]);

    return _react2.default.createElement("div", { style: { margin: '-22px -24px 0' }, className: wrapperClassName }, top, _react2.default.createElement(_index2.default, Object.assign({ key: "pageheader" }, restProps, { linkElement: _reactRouterDom.Link })), children ? _react2.default.createElement("div", { className: styles.content }, children) : null);
};

/***/ }),

/***/ 1546:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1547);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1534)(content, options);

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

/***/ 1547:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1533)(false);
// imports


// module
exports.push([module.i, ".PageHeaderLayout__content-1K038 {\n  margin: 24px 24px 0; }\n\n@media screen and (max-width: 576px) {\n  .PageHeaderLayout__content-1K038 {\n    margin: 24px 0 0; } }\n", ""]);

// exports
exports.locals = {
	"content": "PageHeaderLayout__content-1K038"
};

/***/ }),

/***/ 1548:
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

var _pathToRegexp = __webpack_require__(647);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _antd = __webpack_require__(32);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(1549);

var styles = _interopRequireWildcard(_index);

var _pathTools = __webpack_require__(648);

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
            // console.log(routes);
            // console.log(params);
            // console.log(routerLocation);
            // console.log(breadcrumbNameMap);


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
            // console.log(this.props);

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
    menus: _propTypes2.default.object,
    location: _propTypes2.default.object,
    breadcrumbNameMap: _propTypes2.default.object
};

/***/ }),

/***/ 1549:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(1550);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1534)(content, options);

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

/***/ 1550:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1533)(false);
// imports


// module
exports.push([module.i, ".index__pageHeader-3H9hO {\n  background: #fff;\n  padding: 16px 32px 0 32px;\n  border-bottom: 1px solid #e8e8e8; }\n  .index__pageHeader-3H9hO .index__detail-1lt1T {\n    display: flex; }\n  .index__pageHeader-3H9hO .index__row-3eSbl {\n    display: flex; }\n  .index__pageHeader-3H9hO .index__breadcrumb-2389e {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__tabs-1s1ll {\n    margin: 0 0 -17px -8px; }\n    .index__pageHeader-3H9hO .index__tabs-1s1ll .ant-tabs-bar {\n      border-bottom: 1px solid #e8e8e8; }\n  .index__pageHeader-3H9hO .index__logo-1Iprp {\n    flex: 0 1 auto;\n    margin-right: 16px;\n    padding-top: 1px; }\n    .index__pageHeader-3H9hO .index__logo-1Iprp > img {\n      width: 28px;\n      height: 28px;\n      border-radius: 4px;\n      display: block; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr {\n    font-size: 20px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.85); }\n  .index__pageHeader-3H9hO .index__action-3cQGV {\n    margin-left: 56px;\n    min-width: 266px; }\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group:not(:last-child),\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn:not(:last-child) {\n      margin-right: 8px; }\n    .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group > .ant-btn {\n      margin-right: 0; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr,\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__content-qLMvi,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO,\n  .index__pageHeader-3H9hO .index__main-2FqCv {\n    flex: auto; }\n  .index__pageHeader-3H9hO .index__title-2Ozhr,\n  .index__pageHeader-3H9hO .index__action-3cQGV {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__logo-1Iprp,\n  .index__pageHeader-3H9hO .index__content-qLMvi,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-bottom: 16px; }\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    text-align: right; }\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 88px;\n    min-width: 242px; }\n\n@media screen and (max-width: 1200px) {\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 44px; } }\n\n@media screen and (max-width: 992px) {\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 20px; } }\n\n@media screen and (max-width: 768px) {\n  .index__pageHeader-3H9hO .index__row-3eSbl {\n    display: block; }\n  .index__pageHeader-3H9hO .index__action-3cQGV,\n  .index__pageHeader-3H9hO .index__extraContent-3DfDO {\n    margin-left: 0;\n    text-align: left; } }\n\n@media screen and (max-width: 576px) {\n  .index__pageHeader-3H9hO .index__detail-1lt1T {\n    display: block; } }\n\n@media screen and (max-width: 480px) {\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group,\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn {\n    display: block;\n    margin-bottom: 8px; }\n  .index__pageHeader-3H9hO .index__action-3cQGV .ant-btn-group > .ant-btn {\n    display: inline-block;\n    margin-bottom: 0; } }\n", ""]);

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

/***/ }),

/***/ 1551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _BuildFetchClient = __webpack_require__(644);

var _BuildFetchClient2 = _interopRequireDefault(_BuildFetchClient);

var _querystring = __webpack_require__(645);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseFormView = function (_React$Component) {
    _inherits(BaseFormView, _React$Component);

    function BaseFormView(props, context) {
        _classCallCheck(this, BaseFormView);

        /**
         * 失败处理
         * @param e
         */
        var _this = _possibleConstructorReturn(this, (BaseFormView.__proto__ || Object.getPrototypeOf(BaseFormView)).call(this, props, context));

        _this.fetchFormDataFailure = function (e) {};
        /**
         * 参考文档：https://ant.design/components/upload-cn/
         * 获取一个文件上传对象的props
         * @param {string} formItemName 表单属性的名称
         * @param {UploadProps} props
         * @returns {UploadProps}
         */
        _this.getUploadUploadProps = function (formItemName) {
            var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var form = _this.props.form;

            var uploadProps = {
                action: '/upload/upFile',
                listType: 'picture',
                headers: {},
                //默认只支持传图片
                //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
                accept: "image/*",
                //是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件
                multiple: false,
                //发到后台的文件参数名
                name: "file",
                //默认已经上传的文件列表
                defaultFileList: [],
                //上传请求时是否携带 cookie
                withCredentials: true,
                //点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
                onRemove: function onRemove(file) {
                    console.log("---------onRemove---------");
                    var response = file.response;

                    form.setFieldsValue({ formItemName: [] });
                },

                //上传文件改变时的状态，详见 onChange
                onChange: function onChange(info) {
                    console.log("---------onChange---------");
                    var fileList = info.fileList;
                    // 3. filter successfully uploaded files according to response from server

                    fileList = fileList.filter(function (file) {
                        console.log(file.response);
                        if (file.response) {
                            return file.response.status === 'success';
                        }
                        return true;
                    });
                    if (fileList.length > 0) {
                        form.setFieldsValue({ formItemName: fileList });
                    }
                },

                //点击文件链接或预览图标时的回调
                onPreview: function onPreview(file) {
                    console.log("---------onPreview---------");
                }
            };
            return Object.assign({}, uploadProps, props);
        };
        return _this;
    }

    _createClass(BaseFormView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            //cong url中获取参数
            console.log("-------------------------1------------------------");
            console.log(this.props);
            var _props$history$locati = this.props.history.location,
                search = _props$history$locati.search,
                state = _props$history$locati.state;

            var path = this.props.match.path;
            var params = (0, _querystring.parse)(search);
            console.log(params);
            console.log(path);
            //加载表单数据
            _BuildFetchClient2.default.post({
                url: path,
                data: params
            }).then(function (data) {
                _this2.setState({
                    formData: data
                });
            }).catch(this.fetchFormDataFailure);
        }
    }]);

    return BaseFormView;
}(React.Component);

exports.default = BaseFormView;

/***/ })

});