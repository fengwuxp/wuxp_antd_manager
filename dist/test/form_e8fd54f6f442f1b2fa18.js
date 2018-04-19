webpackJsonp([0],{

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _antd = __webpack_require__(39);

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _antd.Form.Item;
var Option = _antd.Select.Option;
var formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
    }
};

var FormDemo = function (_React$Component) {
    _inherits(FormDemo, _React$Component);

    function FormDemo() {
        _classCallCheck(this, FormDemo);

        return _possibleConstructorReturn(this, (FormDemo.__proto__ || Object.getPrototypeOf(FormDemo)).apply(this, arguments));
    }

    _createClass(FormDemo, [{
        key: "render",
        value: function render() {
            return React.createElement(_antd.Form, null, React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Fail", validateStatus: "error", help: "Should be combination of numbers & alphabets" }), React.createElement(_antd.Input, { placeholder: "unavailable choice", id: "error" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Warning", validateStatus: "warning" }), React.createElement(_antd.Input, { placeholder: "Warning", id: "warning" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Validating", hasFeedback: true, validateStatus: "validating", help: "The information is being validated..." }), React.createElement(_antd.Input, { placeholder: "I'm the content is being validated", id: "validating" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Success", hasFeedback: true, validateStatus: "success" }), React.createElement(_antd.Input, { placeholder: "I'm the content", id: "success" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Warning", hasFeedback: true, validateStatus: "warning" }), React.createElement(_antd.Input, { placeholder: "Warning", id: "warning" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Fail", hasFeedback: true, validateStatus: "error", help: "Should be combination of numbers & alphabets" }), React.createElement(_antd.Input, { placeholder: "unavailable choice", id: "error" })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Success", hasFeedback: true, validateStatus: "success" }), React.createElement(_antd.DatePicker, { style: { width: '100%' } })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Warning", hasFeedback: true, validateStatus: "warning" }), React.createElement(_antd.TimePicker, { style: { width: '100%' } })), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Error", hasFeedback: true, validateStatus: "error" }), React.createElement(_antd.Select, { defaultValue: "1" }, React.createElement(Option, { value: "1" }, "Option 1"), React.createElement(Option, { value: "2" }, "Option 2"), React.createElement(Option, { value: "3" }, "Option 3"))), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Validating", hasFeedback: true, validateStatus: "validating", help: "The information is being validated..." }), React.createElement(_antd.Cascader, { defaultValue: ['1'], options: [] })), React.createElement(FormItem, Object.assign({ label: "inline" }, formItemLayout), React.createElement(_antd.Col, { span: 11 }, React.createElement(FormItem, { validateStatus: "error", help: "Please select the correct date" }, React.createElement(_antd.DatePicker, null))), React.createElement(_antd.Col, { span: 2 }, React.createElement("span", { style: { display: 'inline-block', width: '100%', textAlign: 'center' } }, "-")), React.createElement(_antd.Col, { span: 11 }, React.createElement(FormItem, null, React.createElement(_antd.DatePicker, null)))), React.createElement(FormItem, Object.assign({}, formItemLayout, { label: "Success", hasFeedback: true, validateStatus: "success" }), React.createElement(_antd.InputNumber, { style: { width: '100%' } })));
        }
    }]);

    return FormDemo;
}(React.Component);

exports.default = FormDemo;

/***/ })

});