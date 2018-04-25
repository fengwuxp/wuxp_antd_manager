webpackJsonp([0],{

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _antd = __webpack_require__(29);

var _zh_CN = __webpack_require__(1569);

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _PageHeaderLayout = __webpack_require__(1570);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _TextArea = __webpack_require__(634);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _BaseFormView2 = __webpack_require__(1571);

var _BaseFormView3 = _interopRequireDefault(_BaseFormView2);

var _InfoProvideService = __webpack_require__(1572);

var _InfoProvideService2 = _interopRequireDefault(_InfoProvideService);

var _SendMode = __webpack_require__(1573);

var _SendMode2 = _interopRequireDefault(_SendMode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
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

        _this.state = {
            areaOptions: [],
            submitting: false
        };
        /**
         * 获取地区信息
         * @param {QueryAreaReq} params
         * @returns {Promise<CascaderOptionType[]>}
         */
        _this.getAreaInfo = function (params) {
            //查询地区
            return _InfoProvideService2.default.queryArea(Object.assign({}, params, { querySize: -1 })).then(function (data) {
                var records = data.records;
                //数据转换

                return records.map(function (_ref) {
                    var id = _ref.id,
                        name = _ref.name,
                        level = _ref.level;

                    return {
                        value: id,
                        label: name,
                        isLeaf: level >= 3
                    };
                });
            });
        };
        _this.selectDateTimes = function (value, dateString) {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
        };
        _this.selectDateTimeOnOk = function (value) {
            console.log('onOk: ', value);
        };
        /**
         * 在提交表单之前对参数进行处理，在这里可以进行值转换等操作
         * @param {CreateSampleReq} req
         * @returns {boolean}
         */
        _this.beforeSerialize = function (req) {
            //TODO
            return true;
        };
        /**
         * 级联选中地区
         * @param value
         * @param selectedOptions
         */
        _this.onCascadeAreaChange = function (value, selectedOptions) {
            console.log(value, selectedOptions);
        };
        /**
         * 级联数据处理
         * @param {CascaderOptionType[]} selectedOptions
         */
        _this.loadAreaInfo = function (selectedOptions) {
            //上一个选中的选项
            var targetOption = selectedOptions[selectedOptions.length - 1];
            console.log(targetOption.value);
            _this.getAreaInfo({
                parentId: targetOption.value
            }).then(function (children) {
                targetOption.children = children;
                _this.setState({
                    areaOptions: [].concat(_toConsumableArray(_this.state.areaOptions))
                });
            }).catch(function (e) {
                console.log("加载级联地区数据失败", e);
            });
        };
        _this.submitUrl = "/sample/create";
        return _this;
    }

    _createClass(InputFormView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            _get(InputFormView.prototype.__proto__ || Object.getPrototypeOf(InputFormView.prototype), "componentDidMount", this).call(this);
            this.getAreaInfo({
                level: 1
            }).then(function (areaOptions) {
                _this2.setState({
                    areaOptions: areaOptions
                });
            }).catch(function (e) {
                console.log("加载地区数据失败", e);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;

            return React.createElement(_PageHeaderLayout2.default, { title: "\u65B0\u589E\u793A\u4F8B", content: "\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\u7684\u8868\u5355\u9875\u9762\uFF0C\u805A\u5408\u4E86\u5E38\u89C1\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u6F14\u793A\u4E86\u57FA\u4E8Eantd UI\u6846\u67B6\u7684\u7684\u57FA\u672C\u7528\u6CD5" }, React.createElement(_antd.Card, { bordered: false }, React.createElement(_antd.Form, { onSubmit: this.handleSubmit }, React.createElement(FormItem, { label: "\u7F16\u53F7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('note', {
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
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u56FE\u6807", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('icon', {
                rules: [{
                    required: false,
                    message: '请上传图标'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { type: "hidden" })), React.createElement(_antd.Upload, Object.assign({}, this.getUploadUploadProps('icon')), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "upload" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u56FE\u6807")), React.createElement("div", null, "\u56FE\u6807\u5EFA\u8BAE\u4F7F\u7528200*200\u7684\u6B63\u65B9\u5F62\u7684png\u56FE\u7247")), React.createElement(FormItem, { label: "\u7B80\u4ECB", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('description', {
                rules: [],
                initialValue: null
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7B80\u4ECB" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u53D1\u5E03\u65F6\u95F4", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('publicDate', {
                rules: [],
                initialValue: null
            })(React.createElement(_antd.DatePicker, { showTime: true, locale: _zh_CN2.default, format: "YYYY-MM-DD HH:mm:ss", placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u65F6\u95F4", style: { width: 200 }, onChange: this.selectDateTimes, onOk: this.selectDateTimeOnOk })), React.createElement("div", null, "\u8BF7\u9009\u62E9\u65F6\u95F4")), React.createElement(FormItem, { label: "\u6D3B\u52A8\u4ECB\u7ECD", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('mediumBody', {
                rules: [{ required: true, message: '请填写活动介绍' }]
            })(React.createElement(_TextArea2.default, { autosize: { minRows: 4 }, cols: 15 }))), React.createElement(FormItem, { label: "\u53D1\u5E03\u7C7B\u578B", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sendMode', {
                rules: [{ required: true, message: '请选择发布类型' }]
            })(React.createElement(_antd.Select, { placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u7C7B\u578B", allowClear: true }, Object.keys(_SendMode2.default).map(function (key) {
                return React.createElement(Option, { value: key }, _SendMode2.default[key].desc);
            })))), React.createElement(FormItem, { label: "\u9644\u4EF6", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, React.createElement(_antd.Upload, Object.assign({}, this.getUploadUploadProps("downFile", [], { accept: "*" })), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "file" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u6587\u4EF6")), getFieldDecorator('downFile', {
                rules: [{
                    required: false,
                    message: '请上传附件'
                }],
                initialValue: null
            })(React.createElement(_antd.Input, { type: "hidden" }))), React.createElement(FormItem, { label: "\u6D3B\u52A8url", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('hdUrl', {
                rules: [{ required: true, message: '请填写活动url' }]
            })(React.createElement(_antd.Input, { addonBefore: selectBefore, addonAfter: selectAfter }))), React.createElement(FormItem, { label: "\u6570\u91CF", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('number', {
                rules: [{ required: true, message: '请填写数量' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u8D39\u7387\uFF08\u767E\u5206\u6BD4\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feePct', {
                rules: [{ required: false, message: '请填写费率（百分比）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5206\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeFen', {
                rules: [{ required: false, message: '请填写手续费（分）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeYuan', {
                rules: [{ required: false, message: '请填写手续费（元）' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u9500\u552E\u989D\uFF08\u4E07\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sale', {
                rules: [{ required: false, message: '请选择上级' }]
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u542F\u7528", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('enabled', {
                rules: [{ required: true, message: '请选择启用状态' }],
                initialValue: true
            })(React.createElement(_antd.Switch, { checkedChildren: "\u542F\u7528", unCheckedChildren: "\u7981\u7528", defaultChecked: true }))), React.createElement(FormItem, { label: "\u4E0A\u7EA7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('parentId', {
                rules: [{ required: false, message: '请选择上级' }]
            })(React.createElement(_antd.Input, null))), React.createElement(FormItem, { label: "\u5730\u533A\u4FE1\u606F", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('areaId', {
                rules: [{ required: true, message: '请选择地区信息' }]
            })(React.createElement(_antd.Cascader, { options: this.state.areaOptions, loadData: this.loadAreaInfo, placeholder: "\u8BF7\u9009\u62E9\u5730\u533A\u4FE1\u606F", onChange: this.onCascadeAreaChange, changeOnSelect: true }))), React.createElement(FormItem, { wrapperCol: { span: 12, offset: 5 } }, React.createElement(_antd.Button, { loading: this.state.submitting, type: "primary", htmlType: "submit" }, "\u63D0\u4EA4\u53C2\u6570")))));
        }
    }]);

    return InputFormView;
}(_BaseFormView3.default);
InputFormView = __decorate([_antd.Form.create(), __metadata("design:paramtypes", [Object, Object])], InputFormView);
exports.default = InputFormView;

/***/ }),

/***/ 1541:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _antd = __webpack_require__(29);

var _zh_CN = __webpack_require__(1569);

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _PageHeaderLayout = __webpack_require__(1570);

var _PageHeaderLayout2 = _interopRequireDefault(_PageHeaderLayout);

var _NumberFormatterUtil = __webpack_require__(2675);

var _TextArea = __webpack_require__(634);

var _TextArea2 = _interopRequireDefault(_TextArea);

var _BaseFormView2 = __webpack_require__(1571);

var _BaseFormView3 = _interopRequireDefault(_BaseFormView2);

var _InfoProvideService = __webpack_require__(1572);

var _InfoProvideService2 = _interopRequireDefault(_InfoProvideService);

var _SendMode = __webpack_require__(1573);

var _SendMode2 = _interopRequireDefault(_SendMode);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
var selectBefore = React.createElement(_antd.Select, { defaultValue: "Http://", style: { width: 90 } }, React.createElement(Option, { value: "Http://" }, "Http://"), React.createElement(Option, { value: "Https://" }, "Https://"));
var selectAfter = React.createElement(_antd.Select, { defaultValue: ".com", style: { width: 80 } }, React.createElement(Option, { value: ".com" }, ".com"), React.createElement(Option, { value: ".jp" }, ".jp"), React.createElement(Option, { value: ".cn" }, ".cn"), React.createElement(Option, { value: ".org" }, ".org"));
/**
 * 编辑表单的例子
 */
var EditFormView = function (_BaseFormView) {
    _inherits(EditFormView, _BaseFormView);

    function EditFormView(props, context) {
        _classCallCheck(this, EditFormView);

        var _this = _possibleConstructorReturn(this, (EditFormView.__proto__ || Object.getPrototypeOf(EditFormView)).call(this, props, context));

        _this.state = {
            areaOptions: [],
            submitting: false,
            submitData: null,
            initFormData: {}
        };
        /**
         * 获取地区信息
         * @param {QueryAreaReq} params
         * @returns {Promise<CascaderOptionType[]>}
         */
        _this.getAreaInfo = function (params) {
            //查询地区
            return _InfoProvideService2.default.queryArea(Object.assign({}, params, { querySize: -1 })).then(function (data) {
                var records = data.records;
                //数据转换

                return records.map(function (_ref) {
                    var id = _ref.id,
                        name = _ref.name,
                        level = _ref.level;

                    return {
                        value: id,
                        label: name,
                        isLeaf: level >= 3
                    };
                });
            });
        };
        _this.selectDateTimes = function (value, dateString) {
            console.log('Selected Time: ', value);
            console.log('Formatted Selected Time: ', dateString);
        };
        _this.selectDateTimeOnOk = function (value) {
            console.log('onOk: ', value);
        };
        /**
         * 在表单提交之前做参数序列化操作，
         * @param {EditSampleReq} req
         * @returns {boolean}
         */
        _this.beforeSerialize = function (req) {
            //TODO
            return true;
        };
        /**
         * 级联选中地区
         * @param value
         * @param selectedOptions
         */
        _this.onCascadeAreaChange = function (value, selectedOptions) {
            console.log(value, selectedOptions);
        };
        /**
         * 级联数据处理
         * @param {CascaderOptionType[]} selectedOptions
         */
        _this.loadAreaInfo = function (selectedOptions) {
            //上一个选中的选项
            var targetOption = selectedOptions[selectedOptions.length - 1];
            console.log(targetOption.value);
            _this.getAreaInfo({
                parentId: targetOption.value
            }).then(function (children) {
                targetOption.children = children;
                _this.setState({
                    areaOptions: [].concat(_toConsumableArray(_this.state.areaOptions))
                });
            }).catch(function (e) {
                console.log("加载级联地区数据失败", e);
            });
        };
        _this.submitUrl = "/sample/update";
        _this.isCreated = false;
        return _this;
    }

    _createClass(EditFormView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            _get(EditFormView.prototype.__proto__ || Object.getPrototypeOf(EditFormView.prototype), "componentDidMount", this).call(this);
            this.getAreaInfo({
                level: 1
            }).then(function (areaOptions) {
                _this2.setState({
                    areaOptions: areaOptions
                });
            }).catch(function (e) {
                console.log("加载地区数据失败", e);
            });
        }
    }, {
        key: "render",
        value: function render() {
            var getFieldDecorator = this.props.form.getFieldDecorator;
            var initFormData = this.state.initFormData;

            return React.createElement(_PageHeaderLayout2.default, { title: "\u7F16\u8F91\u793A\u4F8B", content: "\u8FD9\u662F\u4E00\u4E2A\u793A\u4F8B\u7684\u8868\u5355\u9875\u9762\uFF0C\u805A\u5408\u4E86\u5E38\u89C1\u7684\u8868\u5355\u63A7\u4EF6\uFF0C\u6F14\u793A\u4E86\u57FA\u4E8Eantd UI\u6846\u67B6\u7684\u7684\u57FA\u672C\u7528\u6CD5" }, React.createElement(_antd.Card, { bordered: false }, React.createElement(_antd.Form, { onSubmit: this.handleSubmit }, getFieldDecorator('id', {
                initialValue: initFormData.id
            })(React.createElement(_antd.Input, { type: 'hidden' })), React.createElement(FormItem, { label: "\u7F16\u53F7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sn', {
                rules: [{
                    required: true,
                    message: '编码未填写'
                }],
                initialValue: initFormData.sn
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u7F16\u53F7\u662F5-10\u4F4D\u7684\u6570\u5B57\u3001\u5B57\u6BCD\u7B49\u7EC4\u5408")), React.createElement(FormItem, { label: "\u540D\u79F0", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('name', {
                rules: [{
                    max: 5,
                    message: '名称长度最大为5'
                }, {
                    min: 2,
                    message: '名称长度最小为2'
                }],
                initialValue: initFormData.name
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7F16\u53F7" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u56FE\u6807", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('icon', {
                rules: [{
                    required: false,
                    message: '请上传图标'
                }],
                initialValue: initFormData.icon
            })(React.createElement(_antd.Input, { type: "hidden" })), React.createElement(_antd.Upload, Object.assign({}, this.getUploadUploadProps('icon', [initFormData.icon])), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "upload" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u56FE\u6807")), React.createElement("div", null, "\u56FE\u6807\u5EFA\u8BAE\u4F7F\u7528200*200\u7684\u6B63\u65B9\u5F62\u7684png\u56FE\u7247")), React.createElement(FormItem, { label: "\u7B80\u4ECB", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('description', {
                rules: [],
                initialValue: initFormData.description
            })(React.createElement(_antd.Input, { placeholder: "\u8BF7\u586B\u5199\u7B80\u4ECB" })), React.createElement("div", null, "\u540D\u79F0\u957F\u5EA6\u4E3A2-5")), React.createElement(FormItem, { label: "\u53D1\u5E03\u65F6\u95F4", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('publicDate', {
                rules: [],
                initialValue: initFormData.publicDate
            })(React.createElement(_antd.DatePicker, { showTime: true, locale: _zh_CN2.default, format: "YYYY-MM-DD HH:mm:ss", placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u65F6\u95F4", style: { width: 200 }, onChange: this.selectDateTimes, onOk: this.selectDateTimeOnOk })), React.createElement("div", null, "\u8BF7\u9009\u62E9\u65F6\u95F4")), React.createElement(FormItem, { label: "\u6D3B\u52A8\u4ECB\u7ECD", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('mediumBody', {
                rules: [{ required: true, message: '请填写活动介绍' }],
                initialValue: initFormData.mediumBody
            })(React.createElement(_TextArea2.default, { autosize: { minRows: 4 }, cols: 15 }))), React.createElement(FormItem, { label: "\u53D1\u5E03\u7C7B\u578B", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sendMode', {
                rules: [{ required: true, message: '请选择发布类型' }],
                initialValue: initFormData.sendMode
            })(React.createElement(_antd.Select, { placeholder: "\u8BF7\u9009\u62E9\u53D1\u5E03\u7C7B\u578B", allowClear: true }, Object.keys(_SendMode2.default).map(function (key) {
                return React.createElement(Option, { value: key }, _SendMode2.default[key].desc);
            })))), React.createElement(FormItem, { label: "\u9644\u4EF6", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('downFile', {
                rules: [{
                    required: false,
                    message: '请上传附件'
                }],
                initialValue: initFormData.downFile
            })(React.createElement(_antd.Input, { type: "hidden" })), React.createElement(_antd.Upload, Object.assign({}, this.getUploadUploadProps("downFile", [initFormData.downFile], { accept: "*" })), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, { type: "file" }), " \u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u6587\u4EF6"))), React.createElement(FormItem, { label: "\u6D3B\u52A8url", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('hdUrl', {
                rules: [{ required: true, message: '请填写活动url' }],
                initialValue: initFormData.hdUrl
            })(React.createElement(_antd.Input, { addonBefore: selectBefore, addonAfter: selectAfter }))), React.createElement(FormItem, { label: "\u6570\u91CF", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('number', {
                rules: [{
                    required: true, message: '请填写数量'
                }],
                initialValue: initFormData.number
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u8D39\u7387\uFF08\u767E\u5206\u6BD4\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feePct', {
                rules: [{ required: false, message: '请填写费率（百分比）' }, {
                    max: 100, message: '百分比最大值为100'
                }, {
                    min: 0, message: '百分比最小值为0'
                }],
                initialValue: initFormData.feePct
            })(React.createElement(_antd.InputNumber, { placeholder: '请填写0-100', style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5206\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeFen', {
                rules: [{ required: false, message: '请填写手续费（分）' }],
                initialValue: (0, _NumberFormatterUtil.fenToYuan)(initFormData.feeFen)
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u624B\u7EED\u8D39\uFF08\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('feeYuan', {
                rules: [{ required: false, message: '请填写手续费（元）' }],
                initialValue: initFormData.sale
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u9500\u552E\u989D\uFF08\u4E07\u5143\uFF09", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('sale', {
                rules: [{ required: false, message: '请选择上级' }],
                initialValue: initFormData.sale
            })(React.createElement(_antd.InputNumber, { style: { width: 200 } }))), React.createElement(FormItem, { label: "\u542F\u7528", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('enabled', {
                rules: [{ required: true, message: '请选择启用状态' }],
                initialValue: initFormData.enabled
            })(React.createElement(_antd.Switch, { checkedChildren: "\u542F\u7528", unCheckedChildren: "\u7981\u7528", defaultChecked: true }))), React.createElement(FormItem, { label: "\u4E0A\u7EA7", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('parentId', {
                rules: [{ required: false, message: '请选择上级' }],
                initialValue: initFormData.parentId
            })(React.createElement(_antd.Input, null))), React.createElement(FormItem, { label: "\u5730\u533A\u4FE1\u606F", labelCol: { span: 5 }, wrapperCol: { span: 12 } }, getFieldDecorator('areaId', {
                rules: [{ required: true, message: '请选择地区信息' }],
                initialValue: initFormData.areaId
            })(React.createElement(_antd.Cascader, { options: this.state.areaOptions, loadData: this.loadAreaInfo, placeholder: "\u8BF7\u9009\u62E9\u5730\u533A\u4FE1\u606F", onChange: this.onCascadeAreaChange, changeOnSelect: true }))), React.createElement(FormItem, { wrapperCol: { span: 12, offset: 5 } }, React.createElement(_antd.Button, { loading: this.state.submitting, type: "primary", htmlType: "submit" }, "\u63D0\u4EA4\u53C2\u6570")))));
        }
    }]);

    return EditFormView;
}(_BaseFormView3.default);
EditFormView = __decorate([_antd.Form.create(), __metadata("design:paramtypes", [Object, Object])], EditFormView);
exports.default = EditFormView;

/***/ }),

/***/ 1569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(2);

var _extends3 = _interopRequireDefault(_extends2);

var _zh_CN = __webpack_require__(2667);

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_CN3 = __webpack_require__(2668);

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var locale = {
    lang: (0, _extends3['default'])({ placeholder: '请选择日期', rangePlaceholder: ['开始日期', '结束日期'] }, _zh_CN2['default']),
    timePickerLocale: (0, _extends3['default'])({}, _zh_CN4['default'])
};
// should add whitespace between char in Button
locale.lang.ok = '确 定';
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ 1570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _PageHeaderLayout = __webpack_require__(2669);

var styles = _interopRequireWildcard(_PageHeaderLayout);

var _reactRouterDom = __webpack_require__(74);

var _index = __webpack_require__(2671);

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

/***/ 1571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _BuildFetchClient = __webpack_require__(633);

var _BuildFetchClient2 = _interopRequireDefault(_BuildFetchClient);

var _querystring = __webpack_require__(646);

var _UpLoadHelper = __webpack_require__(2674);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 基础表单
 */
var BaseFormView = function (_React$Component) {
    _inherits(BaseFormView, _React$Component);

    function BaseFormView(props, context) {
        _classCallCheck(this, BaseFormView);

        /**
         * 是否为创建
         * @type {boolean}
         */
        var _this = _possibleConstructorReturn(this, (BaseFormView.__proto__ || Object.getPrototypeOf(BaseFormView)).call(this, props, context));

        _this.isCreated = true;
        /**
         * 失败处理
         * @param e
         */
        _this.fetchFormDataFailure = function (e) {};
        /**
         * 提交
         * @param e
         */
        _this.handleSubmit = function (e) {
            //阻止默认动作
            e.preventDefault();
            _this.setState({
                submitting: true
            });
            _this.props.form.validateFields(function (err, values) {
                console.log(values);
                if (err) {
                    //表单验证失败
                    _this.setState({
                        submitting: false
                    });
                    return;
                }
                //复制一份数据
                var formData = Object.assign({}, values);
                var b = _this.beforeSerialize(formData);
                if (!b) {
                    //不提交
                    _this.setState({
                        submitting: false
                    });
                    return;
                }
                console.log(formData);
                //提交数据
                _BuildFetchClient2.default.post({
                    url: _this.submitUrl,
                    data: formData
                }).then(function (data) {
                    _this.submitSuccess(data);
                }).catch(function (e) {
                    _this.submitFailure(e);
                })["finally"](function () {
                    _this.setState({
                        submitting: false
                    });
                });
            });
        };
        _this.submitSuccess = function (data) {
            console.log("请求处理成功");
        };
        _this.submitFailure = function (e) {
            console.log("请求处理失败", e);
        };
        /**
         * 参考文档：https://ant.design/components/upload-cn/
         * 获取一个文件上传对象的props
         * @param {string} formItemName 表单属性的名称
         * @param {Array<string>} defaultFileList 已经上传的文件列表
         * @param {UploadProps} props
         * @returns {UploadProps}
         */
        _this.getUploadUploadProps = function (formItemName) {
            var defaultFileList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var form = _this.props.form;

            var helper = new _UpLoadHelper.UpLoadHelper(form, formItemName);
            return helper.upload(defaultFileList.filter(function (item) {
                return item.trim().length > 0;
            }), props);
        };
        return _this;
    }

    _createClass(BaseFormView, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            if (!this.isCreated) {
                //在编辑是先加载表单数据
                var _props$history$locati = this.props.history.location,
                    search = _props$history$locati.search,
                    state = _props$history$locati.state;
                //TODO  判断查询参数是否有值

                var path = this.props.match.path;
                var params = (0, _querystring.parse)(search.split("?")[1]);
                //加载表单数据
                _BuildFetchClient2.default.post({
                    url: path,
                    data: params,
                    useFilter: false
                }).then(function (data) {
                    console.log("初始化表单的数据", data);
                    _this2.setState({
                        initFormData: data
                    });
                }).catch(this.fetchFormDataFailure);
            }
        }
    }]);

    return BaseFormView;
}(React.Component);

exports.default = BaseFormView;

/***/ }),

/***/ 1572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BuildFetchClient = __webpack_require__(633);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 数据维护服务
 */
var InfoProvideService =
/**
 * 构造函数中返回代理对象
 * @return {any}
 */
function InfoProvideService() {
  _classCallCheck(this, InfoProvideService);

  /**
   * 查询地区
   * @param params 参数
   * @param option 请求配置
   * @param method 请求方法 GET 或者 POST
   * @param dataType 结果数据类型  支持：JSON,JSONP,TEXT
   */
  this.queryArea = function (params, option, method, dataType) {
    return ["/area/page", [], method, dataType];
  };
  return (0, _BuildFetchClient.buildProxyService)(this);
};

exports.default = new InfoProvideService();

/***/ }),

/***/ 1573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 发送模式
 */
var SendMode = function SendMode() {
    _classCallCheck(this, SendMode);
};

SendMode.SYNC = {
    name: "SYNC",
    ordinal: 0,
    desc: "同步"
};
SendMode.ASYNC = {
    name: "ASYNC",
    ordinal: 1,
    desc: "异步"
};
exports.default = SendMode;

/***/ }),

/***/ 2667:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '确定',
  timeSelect: '选择时间',
  dateSelect: '选择日期',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上个月 (翻页上键)',
  nextMonth: '下个月 (翻页下键)',
  monthSelect: '选择月份',
  yearSelect: '选择年份',
  decadeSelect: '选择年代',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
  previousYear: '上一年 (Control键加左方向键)',
  nextYear: '下一年 (Control键加右方向键)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世纪',
  nextCentury: '下一世纪'
};
module.exports = exports['default'];

/***/ }),

/***/ 2668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var locale = {
    placeholder: '请选择时间'
};
exports['default'] = locale;
module.exports = exports['default'];

/***/ }),

/***/ 2669:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2670);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1538)(content, options);

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

/***/ 2670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1537)(false);
// imports


// module
exports.push([module.i, ".PageHeaderLayout__content-1K038 {\n  margin: 24px 24px 0; }\n\n@media screen and (max-width: 576px) {\n  .PageHeaderLayout__content-1K038 {\n    margin: 24px 0 0; } }\n", ""]);

// exports
exports.locals = {
	"content": "PageHeaderLayout__content-1K038"
};

/***/ }),

/***/ 2671:
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

var _pathToRegexp = __webpack_require__(648);

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _antd = __webpack_require__(29);

var _classnames = __webpack_require__(6);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(2672);

var styles = _interopRequireWildcard(_index);

var _pathTools = __webpack_require__(649);

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

            return _react2.default.createElement(_antd.Breadcrumb, { className: styles.breadcrumb, separator: breadcrumbSeparator }, _react2.default.createElement(_antd.Breadcrumb.Item, { href: "" }, _react2.default.createElement(_antd.Icon, { type: "arrow-left" })), breadcrumbList.map(function (item) {
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
            //添加返回
            extraBreadcrumbItems.unshift(_react2.default.createElement(_antd.Breadcrumb.Item, { href: "" }, _react2.default.createElement(_antd.Icon, { type: "arrow-left" })));
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

/***/ 2672:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2673);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(1538)(content, options);

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

/***/ 2673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1537)(false);
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

/***/ 2674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpLoadHelper = undefined;

var _antd = __webpack_require__(29);

var _util = __webpack_require__(30);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UpLoadHelper = exports.UpLoadHelper = function UpLoadHelper(form, formItemName) {
    var _this = this;

    var maxFileSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var errorMessage = arguments[3];

    _classCallCheck(this, UpLoadHelper);

    this.upload = function () {
        var defaultFileList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var helper = _this;
        var uploadProps = {
            action: "/api/upload/upFile",
            // action: `${process.env.NODE_ENV = 'dev' ? '/api' : ''}/upload/upFile`,
            listType: 'picture',
            headers: {},
            //默认只支持传图片
            //https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept
            accept: "image/*",
            //是否支持多选文件，ie10+ 支持。开启后按住 ctrl 可选择多个文件
            multiple: false,
            //发到后台的文件参数名
            name: "file",
            //上传请求时是否携带 cookie
            withCredentials: true,
            /**
             * 上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。
             * 支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传。
             * 注意：IE9 不支持该方法。
             * @param {UploadFile} file
             * @param {UploadFile[]} FileList
             * @returns {boolean}
             */
            beforeUpload: function beforeUpload(file, FileList) {
                return helper.beforeUpload(file);
            },

            //点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。
            onRemove: function onRemove(file) {
                console.log("---------onRemove---------");
                var response = file.response;

                var urlList = helper.form.getFieldValue(helper.formItemName).split(",");
                console.log(urlList);
                helper.setUploadValue(urlList.filter(function (url) {
                    return url != response.url;
                }));
            },

            //上传文件改变时的状态，详见 onChange
            onChange: function onChange(info) {
                console.log("---------onChange---------", helper.formItemName);
                var fileList = info.fileList;

                console.log(fileList);
                // 3. filter successfully uploaded files according to response from server
                var urlList = fileList.filter(function (file) {
                    console.log(file);
                    if (file.response) {
                        return file.response.isSuccess;
                    }
                    return false;
                }).map(function (_ref) {
                    var response = _ref.response;
                    return response.url;
                });
                if (urlList.length > 0) {
                    helper.setUploadValue(urlList);
                }
            },

            //点击文件链接或预览图标时的回调
            onPreview: function onPreview(file) {
                console.log("---------onPreview---------");
                // const {response} = file;
            }
        };
        if (defaultFileList.length > 0) {
            //设置默认
            setTimeout(function () {
                _this.setUploadValue(defaultFileList);
            }, 300);
        }
        return Object.assign({}, uploadProps, props, {
            //默认已经上传的文件列表
            defaultFileList: _this.getDefaultFileList(defaultFileList) });
    };
    this.beforeUpload = function (file) {
        //检查上传文件大小
        var exceedLimit = file.size > _this.maxFileSize;
        if (exceedLimit) {
            _antd.message.error(_this.errorMessage);
        }
        return !exceedLimit;
    };
    this.setUploadValue = function (value) {
        var formItem = {};
        formItem[_this.formItemName] = value.join(",");
        _this.form.setFieldsValue(formItem);
    };
    /**
     * 获取已经上传的文件列表
     * @param {Array<string>} defaultFileList 文件url
     * @returns {UploadFile[]}
     */
    this.getDefaultFileList = function (defaultFileList) {
        return defaultFileList.map(function (url, i) {
            return {
                uid: i,
                size: i,
                name: url,
                type: "file",
                status: "done",
                url: url,
                thumbUrl: url,
                response: {
                    isSuccess: true,
                    url: url
                }
            };
        });
    };
    this.form = form;
    this.formItemName = formItemName;
    this.maxFileSize = maxFileSize * 1024 * 1024;
    if ((0, _util.isNullOrUndefined)(errorMessage)) {
        this.errorMessage = "\u4E0A\u4F20\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC7" + maxFileSize + "MB";
    }
};

/***/ }),

/***/ 2675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.yuanTofen = yuanTofen;
exports.fenToYuan = fenToYuan;
/**
 * 数值金额转换 元转分
 */
function yuanTofen() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var number = value * 1000 / 10;
    var s = parseFloat(number.toString()).toFixed(0); // *1000/10 防止精度损失
    return s; //parseInt(s);
}
/**
 * 数值金额转换 分转元
 */
function fenToYuan() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var number = value / 100;
    var s = parseFloat(number.toString()).toFixed(2); //保证2位小数
    return s; //parseFloat(s);
}

/***/ })

});