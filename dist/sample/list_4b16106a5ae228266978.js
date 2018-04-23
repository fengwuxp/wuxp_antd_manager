webpackJsonp([2],{

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _Table = __webpack_require__(633);

var _Table2 = _interopRequireDefault(_Table);

var _BaseListView2 = __webpack_require__(1544);

var _BaseListView3 = _interopRequireDefault(_BaseListView2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var columns = [{
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: function render() {
        return React.createElement("a", { href: "javascript:;" }, "action");
    }
}, {
    title: 'sn',
    dataIndex: 'sn',
    sorter: true,
    render: function render(cell, rowData, index) {
        return cell;
    },
    width: 40
}];
console.log(_BaseListView3.default);
/**
 * 实例列表页面
 */

var ListView = function (_BaseListView) {
    _inherits(ListView, _BaseListView);

    function ListView(props, context) {
        _classCallCheck(this, ListView);

        return _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props, context));
    }

    _createClass(ListView, [{
        key: "render",
        value: function render() {
            // const {page, loading} = this.state;
            return React.createElement(_Table2.default, { columns: columns, rowKey: this.generateTableRowKey, dataSource: [], pagination: false, loading: false });
        }
    }]);

    return ListView;
}(_BaseListView3.default);

exports.default = ListView;

/***/ }),

/***/ 1544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

});