webpackJsonp([2],{

/***/ 1542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slateReact = __webpack_require__(2676);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 富文本示例
 * 使用 slate
 * github：https://github.com/ianstormtaylor/slate
 * 中文文档 ：https://doodlewind.github.io/slate-doc-cn/walkthroughs/installing-slate.html
 */
// console.log(State);
// const initialState = State.fromJSON({
//     document: {
//         nodes: [
//             {
//                 kind: 'block',
//                 type: 'paragraph',
//                 nodes: [
//                     {
//                         kind: 'text',
//                         ranges: [
//                             {
//                                 text: 'A line of text in a paragraph.'
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// });
var RichTextDemo = function (_React$Component) {
    _inherits(RichTextDemo, _React$Component);

    function RichTextDemo() {
        _classCallCheck(this, RichTextDemo);

        // 设置应用创建时的初始状态。
        var _this = _possibleConstructorReturn(this, (RichTextDemo.__proto__ || Object.getPrototypeOf(RichTextDemo)).apply(this, arguments));

        _this.state = {
            state: {
                state: {}
            }
        };
        // 发生变更时，使用新的编辑器状态更新应用的 React 状态。
        _this.onChange = function (_ref) {
            var state = _ref.state;

            console.log(state);
            _this.setState({ state: state });
        };
        // 定义一个新的回调函数，在按键时记录下按下的 key code。
        _this.onKeyDown = function (event, data, change) {
            console.log(event.which);
        };
        return _this;
    }
    // 渲染编辑器。


    _createClass(RichTextDemo, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_slateReact.Editor, { state: this.state.state, onChange: this.onChange, onKeyDown: this.onKeyDown });
        }
    }]);

    return RichTextDemo;
}(_react2.default.Component);

exports.default = RichTextDemo;

/***/ }),

/***/ 1551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Change; });
/* unused harmony export Changes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Leaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Node; });
/* unused harmony export Operation */
/* unused harmony export Operations */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return Stack$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return Value; });
/* unused harmony export resetKeyGenerator */
/* unused harmony export setKeyGenerator */
/* unused harmony export resetMemoization */
/* unused harmony export useMemoization */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object__ = __webpack_require__(2682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_plain_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_is_plain_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_direction__ = __webpack_require__(2684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_direction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_direction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_esrever__ = __webpack_require__(2685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_esrever___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_esrever__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_debug__ = __webpack_require__(1574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith__ = __webpack_require__(2686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__ = __webpack_require__(2687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick__ = __webpack_require__(2688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_omit__ = __webpack_require__(2694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_omit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_omit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_is_empty__ = __webpack_require__(2714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_is_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_is_empty__);













var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Data.
 *
 * This isn't an immutable record, it's just a thin wrapper around `Map` so that
 * we can allow for more convenient creation.
 *
 * @type {Object}
 */

var Data = function () {
  function Data() {
    classCallCheck(this, Data);
  }

  createClass(Data, null, [{
    key: 'create',

    /**
     * Create a new `Data` with `attrs`.
     *
     * @param {Object|Data|Map} attrs
     * @return {Data} data
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Map"].isMap(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Data.fromJSON(attrs);
      }

      throw new Error('`Data.create` only accepts objects or maps, but you passed it: ' + attrs);
    }

    /**
     * Create a `Data` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Data}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](object);
    }

    /**
     * Alias `fromJS`.
     */

  }]);
  return Data;
}();

/**
 * Export.
 *
 * @type {Object}
 */

Data.fromJS = Data.fromJSON;

/**
 * Slate-specific model types.
 *
 * @type {Object}
 */

var MODEL_TYPES = {
  BLOCK: '@@__SLATE_BLOCK__@@',
  CHANGE: '@@__SLATE_CHANGE__@@',
  CHARACTER: '@@__SLATE_CHARACTER__@@',
  DOCUMENT: '@@__SLATE_DOCUMENT__@@',
  HISTORY: '@@__SLATE_HISTORY__@@',
  INLINE: '@@__SLATE_INLINE__@@',
  LEAF: '@@__SLATE_LEAF__@@',
  MARK: '@@__SLATE_MARK__@@',
  OPERATION: '@@__SLATE_OPERATION__@@',
  RANGE: '@@__SLATE_RANGE__@@',
  SCHEMA: '@@__SLATE_SCHEMA__@@',
  STACK: '@@__SLATE_STACK__@@',
  TEXT: '@@__SLATE_TEXT__@@',
  VALUE: '@@__SLATE_VALUE__@@'

  /**
   * Export.
   *
   * @type {Object}
   */

};

/**
 * GLOBAL: True if memoization should is enabled.
 *
 * @type {Boolean}
 */

var ENABLED = true;

/**
 * GLOBAL: Changing this cache key will clear all previous cached results.
 *
 * @type {Number}
 */

var CACHE_KEY = 0;

/**
 * The leaf node of a cache tree. Used to support variable argument length. A
 * unique object, so that native Maps will key it by reference.
 *
 * @type {Object}
 */

var LEAF = {};

/**
 * A value to represent a memoized undefined value. Allows efficient value
 * retrieval using Map.get only.
 *
 * @type {Object}
 */

var UNDEFINED = {};

/**
 * Default value for unset keys in native Maps
 *
 * @type {Undefined}
 */

var UNSET = undefined;

/**
 * Memoize all of the `properties` on a `object`.
 *
 * @param {Object} object
 * @param {Array} properties
 * @return {Record}
 */

function memoize(object, properties) {
  var _loop = function _loop(property) {
    var original = object[property];

    if (!original) {
      throw new Error("Object does not have a property named \"" + property + "\".");
    }

    object[property] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // If memoization is disabled, call into the original method.
      if (!ENABLED) return original.apply(this, args);

      // If the cache key is different, previous caches must be cleared.
      if (CACHE_KEY !== this.__cache_key) {
        this.__cache_key = CACHE_KEY;
        this.__cache = new Map(); // eslint-disable-line no-undef,no-restricted-globals
        this.__cache_no_args = {};
      }

      if (!this.__cache) {
        this.__cache = new Map(); // eslint-disable-line no-undef,no-restricted-globals
      }
      if (!this.__cache_no_args) {
        this.__cache_no_args = {};
      }

      var takesArguments = args.length !== 0;

      var cachedValue = void 0;
      var keys = void 0;

      if (takesArguments) {
        keys = [property].concat(args);
        cachedValue = getIn(this.__cache, keys);
      } else {
        cachedValue = this.__cache_no_args[property];
      }

      // If we've got a result already, return it.
      if (cachedValue !== UNSET) {
        return cachedValue === UNDEFINED ? undefined : cachedValue;
      }

      // Otherwise calculate what it should be once and cache it.
      var value = original.apply(this, args);
      var v = value === undefined ? UNDEFINED : value;

      if (takesArguments) {
        this.__cache = setIn(this.__cache, keys, v);
      } else {
        this.__cache_no_args[property] = v;
      }

      return value;
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      _loop(property);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * Get a value at a key path in a tree of Map.
 *
 * If not set, returns UNSET.
 * If the set value is undefined, returns UNDEFINED.
 *
 * @param {Map} map
 * @param {Array} keys
 * @return {Any|UNSET|UNDEFINED}
 */

function getIn(map, keys) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      map = map.get(key);
      if (map === UNSET) return UNSET;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return map.get(LEAF);
}

/**
 * Set a value at a key path in a tree of Map, creating Maps on the go.
 *
 * @param {Map} map
 * @param {Array} keys
 * @param {Any} value
 * @return {Map}
 */

function setIn(map, keys, value) {
  var parent = map;
  var child = void 0;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      child = parent.get(key);

      // If the path was not created yet...
      if (child === UNSET) {
        child = new Map(); // eslint-disable-line no-undef,no-restricted-globals
        parent.set(key, child);
      }

      parent = child;
    }

    // The whole path has been created, so set the value to the bottom most map.
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  child.set(LEAF, value);
  return map;
}

/**
 * In DEV mode, clears the previously memoized values, globally.
 *
 * @return {Void}
 */

function resetMemoization() {
  CACHE_KEY++;

  if (CACHE_KEY >= Number.MAX_SAFE_INTEGER) {
    CACHE_KEY = 0;
  }
}

/**
 * In DEV mode, enable or disable the use of memoize values, globally.
 *
 * @param {Boolean} enabled
 * @return {Void}
 */

function useMemoization(enabled) {
  ENABLED = enabled;
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS = {
  data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
  type: undefined

  /**
   * Mark.
   *
   * @type {Mark}
   */

};
var Mark = function (_Record) {
  inherits(Mark, _Record);

  function Mark() {
    classCallCheck(this, Mark);
    return possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
  }

  createClass(Mark, [{
    key: 'getComponent',


    /**
     * Get the component for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Component|Void}
     */

    value: function getComponent(schema) {
      return schema.__getComponent(this);
    }

    /**
     * Return a JSON representation of the mark.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON()
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     */

    get: function get$$1() {
      return 'mark';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Mark` with `attrs`.
     *
     * @param {Object|Mark} attrs
     * @return {Mark}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Mark.fromJSON(attrs);
      }

      throw new Error('`Mark.create` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a set of marks.
     *
     * @param {Array<Object|Mark>} elements
     * @return {Set<Mark>}
     */

  }, {
    key: 'createSet',
    value: function createSet(elements) {
      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(elements) || Array.isArray(elements)) {
        var marks = new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](elements.map(Mark.create));
        return marks;
      }

      if (elements == null) {
        return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"]();
      }

      throw new Error('`Mark.createSet` only accepts sets, arrays or null, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable mark properties from `attrs`.
     *
     * @param {Object|String|Mark} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return {
          data: attrs.data,
          type: attrs.type
        };
      }

      if (typeof attrs == 'string') {
        return { type: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        return props;
      }

      throw new Error('`Mark.createProperties` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a `Mark` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Mark}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Mark.fromJS` requires a `type` string.');
      }

      var mark = new Mark({
        type: type,
        data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](data)
      });

      return mark;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isMark',


    /**
     * Check if `any` is a `Mark`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isMark(any) {
      return !!(any && any[MODEL_TYPES.MARK]);
    }

    /**
     * Check if `any` is a set of marks.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isMarkSet',
    value: function isMarkSet(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(any) && any.every(function (item) {
        return Mark.isMark(item);
      });
    }
  }]);
  return Mark;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS));

/**
 * Attach a pseudo-symbol for type checking.
 */

Mark.fromJS = Mark.fromJSON;
Mark.prototype[MODEL_TYPES.MARK] = true;

/**
 * Memoize read methods.
 */

memoize(Mark.prototype, ['getComponent']);

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$1 = {
  anchorKey: null,
  anchorOffset: 0,
  focusKey: null,
  focusOffset: 0,
  isBackward: null,
  isFocused: false,
  marks: null

  /**
   * Range.
   *
   * @type {Range}
   */

};
var Range = function (_Record) {
  inherits(Range, _Record);

  function Range() {
    classCallCheck(this, Range);
    return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  createClass(Range, [{
    key: 'hasAnchorAtStartOf',


    /**
     * Check whether anchor point of the range is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

    value: function hasAnchorAtStartOf(node) {
      // PERF: Do a check for a `0` offset first since it's quickest.
      if (this.anchorOffset != 0) return false;
      var first = getFirst(node);
      return this.anchorKey == first.key;
    }

    /**
     * Check whether anchor point of the range is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'hasAnchorAtEndOf',
    value: function hasAnchorAtEndOf(node) {
      var last = getLast(node);
      return this.anchorKey == last.key && this.anchorOffset == last.text.length;
    }

    /**
     * Check whether the anchor edge of a range is in a `node` and at an
     * offset between `start` and `end`.
     *
     * @param {Node} node
     * @param {Number} start
     * @param {Number} end
     * @return {Boolean}
     */

  }, {
    key: 'hasAnchorBetween',
    value: function hasAnchorBetween(node, start, end) {
      return this.anchorOffset <= end && start <= this.anchorOffset && this.hasAnchorIn(node);
    }

    /**
     * Check whether the anchor edge of a range is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'hasAnchorIn',
    value: function hasAnchorIn(node) {
      return node.object == 'text' ? node.key == this.anchorKey : this.anchorKey != null && node.hasDescendant(this.anchorKey);
    }

    /**
     * Check whether focus point of the range is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'hasFocusAtEndOf',
    value: function hasFocusAtEndOf(node) {
      var last = getLast(node);
      return this.focusKey == last.key && this.focusOffset == last.text.length;
    }

    /**
     * Check whether focus point of the range is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'hasFocusAtStartOf',
    value: function hasFocusAtStartOf(node) {
      if (this.focusOffset != 0) return false;
      var first = getFirst(node);
      return this.focusKey == first.key;
    }

    /**
     * Check whether the focus edge of a range is in a `node` and at an
     * offset between `start` and `end`.
     *
     * @param {Node} node
     * @param {Number} start
     * @param {Number} end
     * @return {Boolean}
     */

  }, {
    key: 'hasFocusBetween',
    value: function hasFocusBetween(node, start, end) {
      return start <= this.focusOffset && this.focusOffset <= end && this.hasFocusIn(node);
    }

    /**
     * Check whether the focus edge of a range is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'hasFocusIn',
    value: function hasFocusIn(node) {
      return node.object == 'text' ? node.key == this.focusKey : this.focusKey != null && node.hasDescendant(this.focusKey);
    }

    /**
     * Check whether the range is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtStartOf',
    value: function isAtStartOf(node) {
      return this.isCollapsed && this.hasAnchorAtStartOf(node);
    }

    /**
     * Check whether the range is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtEndOf',
    value: function isAtEndOf(node) {
      return this.isCollapsed && this.hasAnchorAtEndOf(node);
    }

    /**
     * Focus the range.
     *
     * @return {Range}
     */

  }, {
    key: 'focus',
    value: function focus() {
      return this.merge({
        isFocused: true
      });
    }

    /**
     * Blur the range.
     *
     * @return {Range}
     */

  }, {
    key: 'blur',
    value: function blur() {
      return this.merge({
        isFocused: false
      });
    }

    /**
     * Unset the range.
     *
     * @return {Range}
     */

  }, {
    key: 'deselect',
    value: function deselect() {
      return this.merge({
        anchorKey: null,
        anchorOffset: 0,
        focusKey: null,
        focusOffset: 0,
        isFocused: false,
        isBackward: false
      });
    }

    /**
     * Flip the range.
     *
     * @return {Range}
     */

  }, {
    key: 'flip',
    value: function flip() {
      return this.merge({
        anchorKey: this.focusKey,
        anchorOffset: this.focusOffset,
        focusKey: this.anchorKey,
        focusOffset: this.anchorOffset,
        isBackward: this.isBackward == null ? null : !this.isBackward
      });
    }

    /**
     * Move the anchor offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Range}
     */

  }, {
    key: 'moveAnchor',
    value: function moveAnchor() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var anchorKey = this.anchorKey,
          focusKey = this.focusKey,
          focusOffset = this.focusOffset,
          isBackward = this.isBackward;

      var anchorOffset = this.anchorOffset + n;
      return this.merge({
        anchorOffset: anchorOffset,
        isBackward: anchorKey == focusKey ? anchorOffset > focusOffset : isBackward
      });
    }

    /**
     * Move the anchor offset `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Range}
     */

  }, {
    key: 'moveFocus',
    value: function moveFocus() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var anchorKey = this.anchorKey,
          anchorOffset = this.anchorOffset,
          focusKey = this.focusKey,
          isBackward = this.isBackward;

      var focusOffset = this.focusOffset + n;
      return this.merge({
        focusOffset: focusOffset,
        isBackward: focusKey == anchorKey ? anchorOffset > focusOffset : isBackward
      });
    }

    /**
     * Move the range's anchor point to a `key` and `offset`.
     *
     * @param {String} key
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveAnchorTo',
    value: function moveAnchorTo(key, offset) {
      var anchorKey = this.anchorKey,
          focusKey = this.focusKey,
          focusOffset = this.focusOffset,
          isBackward = this.isBackward;

      return this.merge({
        anchorKey: key,
        anchorOffset: offset,
        isBackward: key == focusKey ? offset > focusOffset : key == anchorKey ? isBackward : null
      });
    }

    /**
     * Move the range's focus point to a `key` and `offset`.
     *
     * @param {String} key
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveFocusTo',
    value: function moveFocusTo(key, offset) {
      var focusKey = this.focusKey,
          anchorKey = this.anchorKey,
          anchorOffset = this.anchorOffset,
          isBackward = this.isBackward;

      return this.merge({
        focusKey: key,
        focusOffset: offset,
        isBackward: key == anchorKey ? anchorOffset > offset : key == focusKey ? isBackward : null
      });
    }

    /**
     * Move the range to `anchorOffset`.
     *
     * @param {Number} anchorOffset
     * @return {Range}
     */

  }, {
    key: 'moveAnchorOffsetTo',
    value: function moveAnchorOffsetTo(anchorOffset) {
      return this.merge({
        anchorOffset: anchorOffset,
        isBackward: this.anchorKey == this.focusKey ? anchorOffset > this.focusOffset : this.isBackward
      });
    }

    /**
     * Move the range to `focusOffset`.
     *
     * @param {Number} focusOffset
     * @return {Range}
     */

  }, {
    key: 'moveFocusOffsetTo',
    value: function moveFocusOffsetTo(focusOffset) {
      return this.merge({
        focusOffset: focusOffset,
        isBackward: this.anchorKey == this.focusKey ? this.anchorOffset > focusOffset : this.isBackward
      });
    }

    /**
     * Move the range to `anchorOffset` and `focusOffset`.
     *
     * @param {Number} anchorOffset
     * @param {Number} focusOffset (optional)
     * @return {Range}
     */

  }, {
    key: 'moveOffsetsTo',
    value: function moveOffsetsTo(anchorOffset) {
      var focusOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : anchorOffset;

      return this.moveAnchorOffsetTo(anchorOffset).moveFocusOffsetTo(focusOffset);
    }

    /**
     * Move the focus point to the anchor point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToAnchor',
    value: function moveToAnchor() {
      return this.moveFocusTo(this.anchorKey, this.anchorOffset);
    }

    /**
     * Move the anchor point to the focus point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToFocus',
    value: function moveToFocus() {
      return this.moveAnchorTo(this.focusKey, this.focusOffset);
    }

    /**
     * Move the range's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToStartOf',
    value: function moveAnchorToStartOf(node) {
      node = getFirst(node);
      return this.moveAnchorTo(node.key, 0);
    }

    /**
     * Move the range's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToEndOf',
    value: function moveAnchorToEndOf(node) {
      node = getLast(node);
      return this.moveAnchorTo(node.key, node.text.length);
    }

    /**
     * Move the range's focus point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToStartOf',
    value: function moveFocusToStartOf(node) {
      node = getFirst(node);
      return this.moveFocusTo(node.key, 0);
    }

    /**
     * Move the range's focus point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToEndOf',
    value: function moveFocusToEndOf(node) {
      node = getLast(node);
      return this.moveFocusTo(node.key, node.text.length);
    }

    /**
     * Move to the entire range of `start` and `end` nodes.
     *
     * @param {Node} start
     * @param {Node} end (optional)
     * @return {Range}
     */

  }, {
    key: 'moveToRangeOf',
    value: function moveToRangeOf(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;

      var range = this.isBackward ? this.flip() : this;
      return range.moveAnchorToStartOf(start).moveFocusToEndOf(end);
    }

    /**
     * Normalize the range, relative to a `node`, ensuring that the anchor
     * and focus nodes of the range always refer to leaf text nodes.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'normalize',
    value: function normalize(node) {
      var range = this;
      var anchorKey = range.anchorKey,
          anchorOffset = range.anchorOffset,
          focusKey = range.focusKey,
          focusOffset = range.focusOffset,
          isBackward = range.isBackward;


      var anchorOffsetType = typeof anchorOffset === 'undefined' ? 'undefined' : _typeof(anchorOffset);
      var focusOffsetType = typeof focusOffset === 'undefined' ? 'undefined' : _typeof(focusOffset);
      if (anchorOffsetType != 'number' || focusOffsetType != 'number') {
        __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].warn('The range offsets should be numbers, but they were of type "' + anchorOffsetType + '" and "' + focusOffsetType + '".');
      }

      // If the range is unset, make sure it is properly zeroed out.
      if (anchorKey == null || focusKey == null) {
        return range.merge({
          anchorKey: null,
          anchorOffset: 0,
          focusKey: null,
          focusOffset: 0,
          isBackward: false
        });
      }

      // Get the anchor and focus nodes.
      var anchorNode = node.getDescendant(anchorKey);
      var focusNode = node.getDescendant(focusKey);

      // If the range is malformed, warn and zero it out.
      if (!anchorNode || !focusNode) {
        __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].warn('The range was invalid and was reset. The range in question was:', range);
        var first = node.getFirstText();
        return range.merge({
          anchorKey: first ? first.key : null,
          anchorOffset: 0,
          focusKey: first ? first.key : null,
          focusOffset: 0,
          isBackward: false
        });
      }

      // If the anchor node isn't a text node, match it to one.
      if (anchorNode.object != 'text') {
        __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].warn('The range anchor was set to a Node that is not a Text node. This should not happen and can degrade performance. The node in question was:', anchorNode);
        var anchorText = anchorNode.getTextAtOffset(anchorOffset);
        var offset = anchorNode.getOffset(anchorText.key);
        anchorOffset = anchorOffset - offset;
        anchorNode = anchorText;
      }

      // If the focus node isn't a text node, match it to one.
      if (focusNode.object != 'text') {
        __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].warn('The range focus was set to a Node that is not a Text node. This should not happen and can degrade performance. The node in question was:', focusNode);
        var focusText = focusNode.getTextAtOffset(focusOffset);
        var _offset = focusNode.getOffset(focusText.key);
        focusOffset = focusOffset - _offset;
        focusNode = focusText;
      }

      // If `isBackward` is not set, derive it.
      if (isBackward == null) {
        if (anchorNode.key === focusNode.key) {
          isBackward = anchorOffset > focusOffset;
        } else {
          isBackward = !node.areDescendantsSorted(anchorNode.key, focusNode.key);
        }
      }

      // Merge in any updated properties.
      return range.merge({
        anchorKey: anchorNode.key,
        anchorOffset: anchorOffset,
        focusKey: focusNode.key,
        focusOffset: focusOffset,
        isBackward: isBackward
      });
    }

    /**
     * Return a JSON representation of the range.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        anchorKey: this.anchorKey,
        anchorOffset: this.anchorOffset,
        focusKey: this.focusKey,
        focusOffset: this.focusOffset,
        isBackward: this.isBackward,
        isFocused: this.isFocused,
        marks: this.marks == null ? null : this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'range';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Check whether the range is blurred.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBlurred',
    get: function get$$1() {
      return !this.isFocused;
    }

    /**
     * Check whether the range is collapsed.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isCollapsed',
    get: function get$$1() {
      return this.anchorKey == this.focusKey && this.anchorOffset == this.focusOffset;
    }

    /**
     * Check whether the range is expanded.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isExpanded',
    get: function get$$1() {
      return !this.isCollapsed;
    }

    /**
     * Check whether the range is forward.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isForward',
    get: function get$$1() {
      return this.isBackward == null ? null : !this.isBackward;
    }

    /**
     * Check whether the range's keys are set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isSet',
    get: function get$$1() {
      return this.anchorKey != null && this.focusKey != null;
    }

    /**
     * Check whether the range's keys are not set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isUnset',
    get: function get$$1() {
      return !this.isSet;
    }

    /**
     * Get the start key.
     *
     * @return {String}
     */

  }, {
    key: 'startKey',
    get: function get$$1() {
      return this.isBackward ? this.focusKey : this.anchorKey;
    }

    /**
     * Get the start offset.
     *
     * @return {String}
     */

  }, {
    key: 'startOffset',
    get: function get$$1() {
      return this.isBackward ? this.focusOffset : this.anchorOffset;
    }

    /**
     * Get the end key.
     *
     * @return {String}
     */

  }, {
    key: 'endKey',
    get: function get$$1() {
      return this.isBackward ? this.anchorKey : this.focusKey;
    }

    /**
     * Get the end offset.
     *
     * @return {String}
     */

  }, {
    key: 'endOffset',
    get: function get$$1() {
      return this.isBackward ? this.anchorOffset : this.focusOffset;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Range` with `attrs`.
     *
     * @param {Object|Range} attrs
     * @return {Range}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Range.fromJSON(attrs);
      }

      throw new Error('`Range.create` only accepts objects or ranges, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Ranges` from `elements`.
     *
     * @param {Array<Range|Object>|List<Range|Object>} elements
     * @return {List<Range>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Range.create));
        return list;
      }

      throw new Error('`Range.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable range properties from `attrs`.
     *
     * @param {Object|String|Range} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(attrs)) {
        return {
          anchorKey: attrs.anchorKey,
          anchorOffset: attrs.anchorOffset,
          focusKey: attrs.focusKey,
          focusOffset: attrs.focusOffset,
          isBackward: attrs.isBackward,
          isFocused: attrs.isFocused,
          marks: attrs.marks
        };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        var props = {};
        if ('anchorKey' in attrs) props.anchorKey = attrs.anchorKey;
        if ('anchorOffset' in attrs) props.anchorOffset = attrs.anchorOffset;
        if ('anchorPath' in attrs) props.anchorPath = attrs.anchorPath;
        if ('focusKey' in attrs) props.focusKey = attrs.focusKey;
        if ('focusOffset' in attrs) props.focusOffset = attrs.focusOffset;
        if ('focusPath' in attrs) props.focusPath = attrs.focusPath;
        if ('isBackward' in attrs) props.isBackward = attrs.isBackward;
        if ('isFocused' in attrs) props.isFocused = attrs.isFocused;
        if ('marks' in attrs) props.marks = attrs.marks == null ? null : Mark.createSet(attrs.marks);
        return props;
      }

      throw new Error('`Range.createProperties` only accepts objects or ranges, but you passed it: ' + attrs);
    }

    /**
     * Create a `Range` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Range}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$anchorKey = object.anchorKey,
          anchorKey = _object$anchorKey === undefined ? null : _object$anchorKey,
          _object$anchorOffset = object.anchorOffset,
          anchorOffset = _object$anchorOffset === undefined ? 0 : _object$anchorOffset,
          _object$focusKey = object.focusKey,
          focusKey = _object$focusKey === undefined ? null : _object$focusKey,
          _object$focusOffset = object.focusOffset,
          focusOffset = _object$focusOffset === undefined ? 0 : _object$focusOffset,
          _object$isBackward = object.isBackward,
          isBackward = _object$isBackward === undefined ? null : _object$isBackward,
          _object$isFocused = object.isFocused,
          isFocused = _object$isFocused === undefined ? false : _object$isFocused,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? null : _object$marks;


      var range = new Range({
        anchorKey: anchorKey,
        anchorOffset: anchorOffset,
        focusKey: focusKey,
        focusOffset: focusOffset,
        isBackward: isBackward,
        isFocused: isFocused,
        marks: marks == null ? null : new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](marks.map(Mark.fromJSON))
      });

      return range;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isRange',


    /**
     * Check if an `obj` is a `Range`.
     *
     * @param {Any} obj
     * @return {Boolean}
     */

    value: function isRange(obj) {
      return !!(obj && obj[MODEL_TYPES.RANGE]);
    }
  }]);
  return Range;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$1));

/**
 * Attach a pseudo-symbol for type checking.
 */

Range.fromJS = Range.fromJSON;
Range.prototype[MODEL_TYPES.RANGE] = true;

/**
 * Mix in some "move" convenience methods.
 */

var MOVE_METHODS = [['move', ''], ['move', 'To'], ['move', 'ToStartOf'], ['move', 'ToEndOf']];

MOVE_METHODS.forEach(function (_ref) {
  var _ref2 = slicedToArray(_ref, 2),
      p = _ref2[0],
      s = _ref2[1];

  Range.prototype['' + p + s] = function () {
    var _ref3;

    return (_ref3 = this[p + 'Anchor' + s].apply(this, arguments))[p + 'Focus' + s].apply(_ref3, arguments);
  };
});

/**
 * Mix in the "start", "end" and "edge" convenience methods.
 */

var EDGE_METHODS = [['has', 'AtStartOf', true], ['has', 'AtEndOf', true], ['has', 'Between', true], ['has', 'In', true], ['collapseTo', ''], ['move', ''], ['moveTo', ''], ['move', 'To'], ['move', 'OffsetTo']];

EDGE_METHODS.forEach(function (_ref4) {
  var _ref5 = slicedToArray(_ref4, 3),
      p = _ref5[0],
      s = _ref5[1],
      hasEdge = _ref5[2];

  var anchor = p + 'Anchor' + s;
  var focus = p + 'Focus' + s;

  Range.prototype[p + 'Start' + s] = function () {
    return this.isBackward ? this[focus].apply(this, arguments) : this[anchor].apply(this, arguments);
  };

  Range.prototype[p + 'End' + s] = function () {
    return this.isBackward ? this[anchor].apply(this, arguments) : this[focus].apply(this, arguments);
  };

  if (hasEdge) {
    Range.prototype[p + 'Edge' + s] = function () {
      return this[anchor].apply(this, arguments) || this[focus].apply(this, arguments);
    };
  }
});

/**
 * Mix in some aliases for convenience / parallelism with the browser APIs.
 */

var ALIAS_METHODS = [['collapseTo', 'moveTo'], ['collapseToAnchor', 'moveToAnchor'], ['collapseToFocus', 'moveToFocus'], ['collapseToStart', 'moveToStart'], ['collapseToEnd', 'moveToEnd'], ['collapseToStartOf', 'moveToStartOf'], ['collapseToEndOf', 'moveToEndOf'], ['extend', 'moveFocus'], ['extendTo', 'moveFocusTo'], ['extendToStartOf', 'moveFocusToStartOf'], ['extendToEndOf', 'moveFocusToEndOf']];

ALIAS_METHODS.forEach(function (_ref6) {
  var _ref7 = slicedToArray(_ref6, 2),
      alias = _ref7[0],
      method = _ref7[1];

  Range.prototype[alias] = function () {
    return this[method].apply(this, arguments);
  };
});

/**
 * Get the first text of a `node`.
 *
 * @param {Node} node
 * @return {Text}
 */

function getFirst(node) {
  return node.object == 'text' ? node : node.getFirstText();
}

/**
 * Get the last text of a `node`.
 *
 * @param {Node} node
 * @return {Text}
 */

function getLast(node) {
  return node.object == 'text' ? node : node.getLastText();
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$2 = {
  marks: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](),
  text: ''

  /**
   * Character.
   *
   * @type {Character}
   */

};
var Character = function (_Record) {
  inherits(Character, _Record);

  function Character() {
    classCallCheck(this, Character);
    return possibleConstructorReturn(this, (Character.__proto__ || Object.getPrototypeOf(Character)).apply(this, arguments));
  }

  createClass(Character, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the character.
     *
     * @return {Object}
     */

    value: function toJSON() {
      var object = {
        object: this.object,
        text: this.text,
        marks: this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'character';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a `Character` with `attrs`.
     *
     * @param {Object|String|Character} attrs
     * @return {Character}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Character.isCharacter(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { text: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Character.fromJSON(attrs);
      }

      throw new Error('`Character.create` only accepts objects, strings or characters, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Characters` from `elements`.
     *
     * @param {String|Array<Object|Character|String>|List<Object|Character|String>} elements
     * @return {List<Character>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (typeof elements == 'string') {
        elements = elements.split('');
      }

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Character.create));
        return list;
      }

      throw new Error('`Block.createList` only accepts strings, arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Character` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Character}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var text = object.text,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? [] : _object$marks;


      if (typeof text != 'string') {
        throw new Error('`Character.fromJSON` requires a block `text` string.');
      }

      var character = new Character({
        text: text,
        marks: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](marks)
      });

      return character;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isCharacter',


    /**
     * Check if `any` is a `Character`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isCharacter(any) {
      return !!(any && any[MODEL_TYPES.CHARACTER]);
    }

    /**
     * Check if `any` is a character list.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isCharacterList',
    value: function isCharacterList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Character.isCharacter(item);
      });
    }
  }]);
  return Character;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$2));

/**
 * Attach a pseudo-symbol for type checking.
 */

Character.fromJS = Character.fromJSON;
Character.prototype[MODEL_TYPES.CHARACTER] = true;

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$3 = {
  marks: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](),
  text: ''

  /**
   * Leaf.
   *
   * @type {Leaf}
   */

};
var Leaf = function (_Record) {
  inherits(Leaf, _Record);

  function Leaf() {
    classCallCheck(this, Leaf);
    return possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).apply(this, arguments));
  }

  createClass(Leaf, [{
    key: 'getCharacters',


    /**
     * Return leaf as a list of characters
     *
     * @return {List<Character>}
     */

    value: function getCharacters() {
      var marks = this.marks;

      var characters = Character.createList(this.text.split('').map(function (char) {
        return Character.create({
          text: char,
          marks: marks
        });
      }));

      return characters;
    }

    /**
     * Return a JSON representation of the leaf.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        text: this.text,
        marks: this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'leaf';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Leaf` with `attrs`.
     *
     * @param {Object|Leaf} attrs
     * @return {Leaf}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Leaf.isLeaf(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { text: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Leaf.fromJSON(attrs);
      }

      throw new Error('`Leaf.create` only accepts objects, strings or leaves, but you passed it: ' + attrs);
    }

    /**
     * Create a `Leaf` list from `attrs`.
     *
     * @param {Array<Leaf|Object>|List<Leaf|Object>} attrs
     * @return {List<Leaf>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(attrs) || Array.isArray(attrs)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](attrs.map(Leaf.create));
        return list;
      }

      throw new Error('`Leaf.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Leaf` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Leaf}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$text = object.text,
          text = _object$text === undefined ? '' : _object$text,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? [] : _object$marks;


      var leaf = new Leaf({
        text: text,
        marks: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](marks.map(Mark.fromJSON))
      });

      return leaf;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isLeaf',


    /**
     * Check if `any` is a `Leaf`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isLeaf(any) {
      return !!(any && any[MODEL_TYPES.LEAF]);
    }

    /**
     * Check if `any` is a list of leaves.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isLeafList',
    value: function isLeafList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Leaf.isLeaf(item);
      });
    }
  }]);
  return Leaf;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$3));

/**
 * Attach a pseudo-symbol for type checking.
 */

Leaf.fromJS = Leaf.fromJSON;
Leaf.prototype[MODEL_TYPES.LEAF] = true;

/**
 * An auto-incrementing index for generating keys.
 *
 * @type {Number}
 */

var n = void 0;

/**
 * The global key generating function.
 *
 * @type {Function}
 */

var generate = void 0;

/**
 * Generate a key.
 *
 * @return {String}
 */

function generateKey() {
  return generate();
}

/**
 * Set a different unique ID generating `function`.
 *
 * @param {Function} func
 */

function setKeyGenerator(func) {
  generate = func;
}

/**
 * Reset the key generating function to its initial state.
 */

function resetKeyGenerator() {
  n = 0;
  generate = function generate() {
    return "" + n++;
  };
}

/**
 * Set the initial state.
 */

resetKeyGenerator();

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$4 = {
  characters: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
  key: undefined

  /**
   * Text.
   *
   * @type {Text}
   */

};
var Text = function (_Record) {
  inherits(Text, _Record);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'addMark',


    /**
     * Add a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

    value: function addMark(index, length, mark) {
      var marks = new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"]([mark]);
      return this.addMarks(index, length, marks);
    }

    /**
     * Add a `set` of marks at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Set<Mark>} set
     * @return {Text}
     */

  }, {
    key: 'addMarks',
    value: function addMarks(index, length, set$$1) {
      var characters = this.characters.map(function (char, i) {
        if (i < index) return char;
        if (i >= index + length) return char;
        var _char = char,
            marks = _char.marks;

        marks = marks.union(set$$1);
        char = char.set('marks', marks);
        return char;
      });

      return this.set('characters', characters);
    }

    /**
     * Derive a set of decorated characters with `decorations`.
     *
     * @param {List<Decoration>} decorations
     * @return {List<Character>}
     */

  }, {
    key: 'getDecoratedCharacters',
    value: function getDecoratedCharacters(decorations) {
      var node = this;
      var _node = node,
          key = _node.key,
          characters = _node.characters;

      // PERF: Exit early if there are no characters to be decorated.

      if (characters.size == 0) return characters;

      decorations.forEach(function (range) {
        var startKey = range.startKey,
            endKey = range.endKey,
            startOffset = range.startOffset,
            endOffset = range.endOffset,
            marks = range.marks;

        var hasStart = startKey == key;
        var hasEnd = endKey == key;
        var index = hasStart ? startOffset : 0;
        var length = hasEnd ? endOffset - index : characters.size;
        node = node.addMarks(index, length, marks);
      });

      return node.characters;
    }

    /**
     * Get the decorations for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Array}
     */

  }, {
    key: 'getDecorations',
    value: function getDecorations(schema) {
      return schema.__getDecorations(this);
    }

    /**
     * Derive the leaves for a list of `characters`.
     *
     * @param {Array|Void} decorations (optional)
     * @return {List<Leaf>}
     */

  }, {
    key: 'getLeaves',
    value: function getLeaves() {
      var decorations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var characters = this.getDecoratedCharacters(decorations);
      var leaves = [];

      // PERF: cache previous values for faster lookup.
      var prevChar = void 0;
      var prevLeaf = void 0;

      // If there are no characters, return one empty range.
      if (characters.size == 0) {
        leaves.push({});
      } else {
        // Otherwise, loop the characters and build the leaves...
        characters.forEach(function (char, i) {
          var marks = char.marks,
              text = char.text;

          // The first one can always just be created.

          if (i == 0) {
            prevChar = char;
            prevLeaf = { text: text, marks: marks };
            leaves.push(prevLeaf);
            return;
          }

          // Otherwise, compare the current and previous marks.
          var prevMarks = prevChar.marks;
          var isSame = Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["is"])(marks, prevMarks);

          // If the marks are the same, add the text to the previous range.
          if (isSame) {
            prevChar = char;
            prevLeaf.text += text;
            return;
          }

          // Otherwise, create a new range.
          prevChar = char;
          prevLeaf = { text: text, marks: marks };
          leaves.push(prevLeaf);
        }, []);
      }

      // PERF: convert the leaves to immutable objects after iterating.
      leaves = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](leaves.map(function (object) {
        return new Leaf(object);
      }));

      // Return the leaves.
      return leaves;
    }

    /**
     * Get all of the marks on the text.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array);
    }

    /**
     * Get all of the marks on the text as an array
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      return this.characters.reduce(function (array, char) {
        return array.concat(char.marks.toArray());
      }, []);
    }

    /**
     * Get the marks on the text at `index`.
     *
     * @param {Number} index
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtIndex',
    value: function getMarksAtIndex(index) {
      if (index == 0) return Mark.createSet();
      var characters = this.characters;

      var char = characters.get(index - 1);
      if (!char) return Mark.createSet();
      return char.marks;
    }

    /**
     * Get a node by `key`, to parallel other nodes.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNode',
    value: function getNode(key) {
      return this.key == key ? this : null;
    }

    /**
     * Check if the node has a node by `key`, to parallel other nodes.
     *
     * @param {String} key
     * @return {Boolean}
     */

  }, {
    key: 'hasNode',
    value: function hasNode(key) {
      return !!this.getNode(key);
    }

    /**
     * Insert `text` at `index`.
     *
     * @param {Numbder} index
     * @param {String} text
     * @param {String} marks (optional)
     * @return {Text}
     */

  }, {
    key: 'insertText',
    value: function insertText(index, text, marks) {
      var characters = this.characters;

      var chars = Character.createList(text.split('').map(function (char) {
        return { text: char, marks: marks };
      }));

      characters = characters.slice(0, index).concat(chars).concat(characters.slice(index));

      return this.set('characters', characters);
    }

    /**
     * Regenerate the node's key.
     *
     * @return {Text}
     */

  }, {
    key: 'regenerateKey',
    value: function regenerateKey() {
      var key = generateKey();
      return this.set('key', key);
    }

    /**
     * Remove a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(index, length, mark) {
      var characters = this.characters.map(function (char, i) {
        if (i < index) return char;
        if (i >= index + length) return char;
        var _char2 = char,
            marks = _char2.marks;

        marks = marks.remove(mark);
        char = char.set('marks', marks);
        return char;
      });

      return this.set('characters', characters);
    }

    /**
     * Remove text from the text node at `index` for `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @return {Text}
     */

  }, {
    key: 'removeText',
    value: function removeText(index, length) {
      var characters = this.characters;

      var start = index;
      var end = index + length;
      characters = characters.filterNot(function (char, i) {
        return start <= i && i < end;
      });
      return this.set('characters', characters);
    }

    /**
     * Return a JSON representation of the text.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        leaves: this.getLeaves().toArray().map(function (r) {
          return r.toJSON();
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }

    /**
     * Update a `mark` at `index` and `length` with `properties`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Text}
     */

  }, {
    key: 'updateMark',
    value: function updateMark(index, length, mark, properties) {
      var newMark = mark.merge(properties);

      var characters = this.characters.map(function (char, i) {
        if (i < index) return char;
        if (i >= index + length) return char;
        var _char3 = char,
            marks = _char3.marks;

        if (!marks.has(mark)) return char;
        marks = marks.remove(mark);
        marks = marks.add(newMark);
        char = char.set('marks', marks);
        return char;
      });

      return this.set('characters', characters);
    }

    /**
     * Validate the text node against a `schema`.
     *
     * @param {Schema} schema
     * @return {Object|Void}
     */

  }, {
    key: 'validate',
    value: function validate(schema) {
      return schema.validateNode(this);
    }

    /**
     * Get the first invalid descendant
     * PREF: Do not cache this method; because it can cause cycle reference
     *
     * @param {Schema} schema
     * @returns {Text|Null}
     */

  }, {
    key: 'getFirstInvalidDescendant',
    value: function getFirstInvalidDescendant(schema) {
      return this.validate(schema) ? this : null;
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'text';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Is the node empty?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get$$1() {
      return this.text == '';
    }

    /**
     * Get the concatenated text of the node.
     *
     * @return {String}
     */

  }, {
    key: 'text',
    get: function get$$1() {
      return this.characters.reduce(function (string, char) {
        return string + char.text;
      }, '');
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Text` with `attrs`.
     *
     * @param {Object|Array|List|String|Text} attrs
     * @return {Text}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (Text.isText(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { leaves: [{ text: attrs }] };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        if (attrs.text) {
          var _attrs = attrs,
              text = _attrs.text,
              marks = _attrs.marks,
              key = _attrs.key;

          attrs = { key: key, leaves: [{ text: text, marks: marks }] };
        }

        return Text.fromJSON(attrs);
      }

      throw new Error('`Text.create` only accepts objects, arrays, strings or texts, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Texts` from `elements`.
     *
     * @param {Array<Text|Object>|List<Text|Object>} elements
     * @return {List<Text>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Text.create));
        return list;
      }

      throw new Error('`Text.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Text` from a JSON `object`.
     *
     * @param {Object|Text} object
     * @return {Text}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Text.isText(object)) {
        return object;
      }

      var _object$leaves = object.leaves,
          leaves = _object$leaves === undefined ? [] : _object$leaves,
          _object$key = object.key,
          key = _object$key === undefined ? generateKey() : _object$key;


      var characters = leaves.map(Leaf.fromJSON).reduce(function (l, r) {
        return l.concat(r.getCharacters());
      }, new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]());

      var node = new Text({
        characters: characters,
        key: key
      });

      return node;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isText',


    /**
     * Check if `any` is a `Text`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isText(any) {
      return !!(any && any[MODEL_TYPES.TEXT]);
    }

    /**
     * Check if `any` is a list of texts.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isTextList',
    value: function isTextList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Text.isText(item);
      });
    }
  }]);
  return Text;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$4));

/**
 * Attach a pseudo-symbol for type checking.
 */

Text.fromJS = Text.fromJSON;
Text.prototype[MODEL_TYPES.TEXT] = true;

/**
 * Memoize read methods.
 */

memoize(Text.prototype, ['getMarks', 'getMarksAsArray'], {
  takesArguments: false
});

memoize(Text.prototype, ['getDecoratedCharacters', 'getDecorations', 'getLeaves', 'getMarksAtIndex', 'validate']);

/**
 * Check if an `index` of a `text` node is in a `range`.
 *
 * @param {Number} index
 * @param {Text} text
 * @param {Range} range
 * @return {Boolean}
 */

function isIndexInRange(index, text, range) {
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;


  if (text.key == startKey && text.key == endKey) {
    return startOffset <= index && index < endOffset;
  } else if (text.key == startKey) {
    return startOffset <= index;
  } else if (text.key == endKey) {
    return index < endOffset;
  } else {
    return true;
  }
}

/**
 * Node.
 *
 * And interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Node}
 */

var Node = function () {
  function Node() {
    classCallCheck(this, Node);
  }

  createClass(Node, [{
    key: 'areDescendantsSorted',


    /**
     * True if the node has both descendants in that order, false otherwise. The
     * order is depth-first, post-order.
     *
     * @param {String} first
     * @param {String} second
     * @return {Boolean}
     */

    value: function areDescendantsSorted(first, second) {
      first = assertKey(first);
      second = assertKey(second);

      var keys = this.getKeysAsArray();
      var firstIndex = keys.indexOf(first);
      var secondIndex = keys.indexOf(second);
      if (firstIndex == -1 || secondIndex == -1) return null;

      return firstIndex < secondIndex;
    }

    /**
     * Assert that a node has a child by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */

  }, {
    key: 'assertChild',
    value: function assertChild(key) {
      var child = this.getChild(key);

      if (!child) {
        key = assertKey(key);
        throw new Error('Could not find a child node with key "' + key + '".');
      }

      return child;
    }

    /**
     * Assert that a node has a descendant by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */

  }, {
    key: 'assertDescendant',
    value: function assertDescendant(key) {
      var descendant = this.getDescendant(key);

      if (!descendant) {
        key = assertKey(key);
        throw new Error('Could not find a descendant node with key "' + key + '".');
      }

      return descendant;
    }

    /**
     * Assert that a node's tree has a node by `key` and return it.
     *
     * @param {String} key
     * @return {Node}
     */

  }, {
    key: 'assertNode',
    value: function assertNode(key) {
      var node = this.getNode(key);

      if (!node) {
        key = assertKey(key);
        throw new Error('Could not find a node with key "' + key + '".');
      }

      return node;
    }

    /**
     * Assert that a node exists at `path` and return it.
     *
     * @param {Array} path
     * @return {Node}
     */

  }, {
    key: 'assertPath',
    value: function assertPath(path) {
      var descendant = this.getDescendantAtPath(path);

      if (!descendant) {
        throw new Error('Could not find a descendant at path "' + path + '".');
      }

      return descendant;
    }

    /**
     * Recursively filter all descendant nodes with `iterator`.
     *
     * @param {Function} iterator
     * @return {List<Node>}
     */

  }, {
    key: 'filterDescendants',
    value: function filterDescendants(iterator) {
      var matches = [];

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) matches.push(node);
      });

      return Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])(matches);
    }

    /**
     * Recursively find all descendant nodes by `iterator`.
     *
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'findDescendant',
    value: function findDescendant(iterator) {
      var found = null;

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) {
          found = node;
          return false;
        }
      });

      return found;
    }

    /**
     * Recursively iterate over all descendant nodes with `iterator`. If the
     * iterator returns false it will break the loop.
     *
     * @param {Function} iterator
     */

  }, {
    key: 'forEachDescendant',
    value: function forEachDescendant(iterator) {
      var ret = void 0;

      this.nodes.forEach(function (child, i, nodes) {
        if (iterator(child, i, nodes) === false) {
          ret = false;
          return false;
        }

        if (child.object != 'text') {
          ret = child.forEachDescendant(iterator);
          return ret;
        }
      });

      return ret;
    }

    /**
     * Get the path of ancestors of a descendant node by `key`.
     *
     * @param {String|Node} key
     * @return {List<Node>|Null}
     */

  }, {
    key: 'getAncestors',
    value: function getAncestors(key) {
      key = assertKey(key);

      if (key == this.key) return Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
      if (this.hasChild(key)) return Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])([this]);

      var ancestors = void 0;
      this.nodes.find(function (node) {
        if (node.object == 'text') return false;
        ancestors = node.getAncestors(key);
        return ancestors;
      });

      if (ancestors) {
        return ancestors.unshift(this);
      } else {
        return null;
      }
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocks',
    value: function getBlocks() {
      var array = this.getBlocksAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAsArray',
    value: function getBlocksAsArray() {
      return this.nodes.reduce(function (array, child) {
        if (child.object != 'block') return array;
        if (!child.isLeafBlock()) return array.concat(child.getBlocksAsArray());
        array.push(child);
        return array;
      }, []);
    }

    /**
     * Get the leaf block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAtRange',
    value: function getBlocksAtRange(range) {
      var array = this.getBlocksAtRangeAsArray(range);
      // Eliminate duplicates by converting to an `OrderedSet` first.
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array));
    }

    /**
     * Get the leaf block descendants in a `range` as an array
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getBlocksAtRangeAsArray',
    value: function getBlocksAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];

      var _range = range,
          startKey = _range.startKey,
          endKey = _range.endKey;

      var startBlock = this.getClosestBlock(startKey);

      // PERF: the most common case is when the range is in a single block node,
      // where we can avoid a lot of iterating of the tree.
      if (startKey == endKey) return [startBlock];

      var endBlock = this.getClosestBlock(endKey);
      var blocks = this.getBlocksAsArray();
      var start = blocks.indexOf(startBlock);
      var end = blocks.indexOf(endBlock);
      return blocks.slice(start, end + 1);
    }

    /**
     * Get all of the leaf blocks that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksByType',
    value: function getBlocksByType(type) {
      var array = this.getBlocksByTypeAsArray(type);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get all of the leaf blocks that match a `type` as an array
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getBlocksByTypeAsArray',
    value: function getBlocksByTypeAsArray(type) {
      return this.nodes.reduce(function (array, node) {
        if (node.object != 'block') {
          return array;
        } else if (node.isLeafBlock() && node.type == type) {
          array.push(node);
          return array;
        } else {
          return array.concat(node.getBlocksByTypeAsArray(type));
        }
      }, []);
    }

    /**
     * Get all of the characters for every text node.
     *
     * @return {List<Character>}
     */

  }, {
    key: 'getCharacters',
    value: function getCharacters() {
      var array = this.getCharactersAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get all of the characters for every text node as an array
     *
     * @return {Array}
     */

  }, {
    key: 'getCharactersAsArray',
    value: function getCharactersAsArray() {
      return this.nodes.reduce(function (arr, node) {
        return node.object == 'text' ? arr.concat(node.characters.toArray()) : arr.concat(node.getCharactersAsArray());
      }, []);
    }

    /**
     * Get a list of the characters in a `range`.
     *
     * @param {Range} range
     * @return {List<Character>}
     */

  }, {
    key: 'getCharactersAtRange',
    value: function getCharactersAtRange(range) {
      var array = this.getCharactersAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get a list of the characters in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getCharactersAtRangeAsArray',
    value: function getCharactersAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];

      return this.getTextsAtRange(range).reduce(function (arr, text) {
        var chars = text.characters.filter(function (char, i) {
          return isIndexInRange(i, text, range);
        }).toArray();

        return arr.concat(chars);
      }, []);
    }

    /**
     * Get a child node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getChild',
    value: function getChild(key) {
      key = assertKey(key);
      return this.nodes.find(function (node) {
        return node.key == key;
      });
    }

    /**
     * Get closest parent of node by `key` that matches `iterator`.
     *
     * @param {String} key
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getClosest',
    value: function getClosest(key, iterator) {
      key = assertKey(key);
      var ancestors = this.getAncestors(key);
      if (!ancestors) {
        throw new Error('Could not find a descendant node with key "' + key + '".');
      }

      // Exclude this node itself.
      return ancestors.rest().findLast(iterator);
    }

    /**
     * Get the closest block parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestBlock',
    value: function getClosestBlock(key) {
      return this.getClosest(key, function (parent) {
        return parent.object == 'block';
      });
    }

    /**
     * Get the closest inline parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestInline',
    value: function getClosestInline(key) {
      return this.getClosest(key, function (parent) {
        return parent.object == 'inline';
      });
    }

    /**
     * Get the closest void parent of a `node`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestVoid',
    value: function getClosestVoid(key) {
      return this.getClosest(key, function (parent) {
        return parent.isVoid;
      });
    }

    /**
     * Get the common ancestor of nodes `one` and `two` by keys.
     *
     * @param {String} one
     * @param {String} two
     * @return {Node}
     */

  }, {
    key: 'getCommonAncestor',
    value: function getCommonAncestor(one, two) {
      one = assertKey(one);
      two = assertKey(two);

      if (one == this.key) return this;
      if (two == this.key) return this;

      this.assertDescendant(one);
      this.assertDescendant(two);
      var ancestors = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]();
      var oneParent = this.getParent(one);
      var twoParent = this.getParent(two);

      while (oneParent) {
        ancestors = ancestors.push(oneParent);
        oneParent = this.getParent(oneParent.key);
      }

      while (twoParent) {
        if (ancestors.includes(twoParent)) return twoParent;
        twoParent = this.getParent(twoParent.key);
      }
    }

    /**
     * Get the decorations for the node from a `stack`.
     *
     * @param {Stack} stack
     * @return {List}
     */

  }, {
    key: 'getDecorations',
    value: function getDecorations(stack) {
      var decorations = stack.find('decorateNode', this);
      var list = Range.createList(decorations || []);
      return list;
    }

    /**
     * Get the depth of a child node by `key`, with optional `startAt`.
     *
     * @param {String} key
     * @param {Number} startAt (optional)
     * @return {Number} depth
     */

  }, {
    key: 'getDepth',
    value: function getDepth(key) {
      var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.assertDescendant(key);
      if (this.hasChild(key)) return startAt;
      return this.getFurthestAncestor(key).getDepth(key, startAt + 1);
    }

    /**
     * Get a descendant node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getDescendant',
    value: function getDescendant(key) {
      key = assertKey(key);
      var descendantFound = null;

      var found = this.nodes.find(function (node) {
        if (node.key === key) {
          return node;
        } else if (node.object !== 'text') {
          descendantFound = node.getDescendant(key);
          return descendantFound;
        } else {
          return false;
        }
      });

      return descendantFound || found;
    }

    /**
     * Get a descendant by `path`.
     *
     * @param {Array} path
     * @return {Node|Null}
     */

  }, {
    key: 'getDescendantAtPath',
    value: function getDescendantAtPath(path) {
      var descendant = this;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var index = _step.value;

          if (!descendant) return;
          if (!descendant.nodes) return;
          descendant = descendant.nodes.get(index);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return descendant;
    }

    /**
     * Get the first child text node.
     *
     * @return {Node|Null}
     */

  }, {
    key: 'getFirstText',
    value: function getFirstText() {
      var descendantFound = null;

      var found = this.nodes.find(function (node) {
        if (node.object == 'text') return true;
        descendantFound = node.getFirstText();
        return descendantFound;
      });

      return descendantFound || found;
    }

    /**
     * Get a fragment of the node at a `range`.
     *
     * @param {Range} range
     * @return {Document}
     */

  }, {
    key: 'getFragmentAtRange',
    value: function getFragmentAtRange(range) {
      range = range.normalize(this);
      if (range.isUnset) return Document.create();

      var node = this;

      // Make sure the children exist.
      var _range2 = range,
          startKey = _range2.startKey,
          startOffset = _range2.startOffset,
          endKey = _range2.endKey,
          endOffset = _range2.endOffset;

      var startText = node.assertDescendant(startKey);
      var endText = node.assertDescendant(endKey);

      // Split at the start and end.
      var child = startText;
      var previous = void 0;
      var parent = void 0;

      while (parent = node.getParent(child.key)) {
        var index = parent.nodes.indexOf(child);
        var position = child.object == 'text' ? startOffset : child.nodes.indexOf(previous);

        parent = parent.splitNode(index, position);
        node = node.updateNode(parent);
        previous = parent.nodes.get(index + 1);
        child = parent;
      }

      child = startKey == endKey ? node.getNextText(startKey) : endText;

      while (parent = node.getParent(child.key)) {
        var _index = parent.nodes.indexOf(child);
        var _position = child.object == 'text' ? startKey == endKey ? endOffset - startOffset : endOffset : child.nodes.indexOf(previous);

        parent = parent.splitNode(_index, _position);
        node = node.updateNode(parent);
        previous = parent.nodes.get(_index + 1);
        child = parent;
      }

      // Get the start and end nodes.
      var startNode = node.getNextSibling(node.getFurthestAncestor(startKey).key);
      var endNode = startKey == endKey ? node.getNextSibling(node.getNextSibling(node.getFurthestAncestor(endKey).key).key) : node.getNextSibling(node.getFurthestAncestor(endKey).key);

      // Get children range of nodes from start to end nodes
      var startIndex = node.nodes.indexOf(startNode);
      var endIndex = node.nodes.indexOf(endNode);
      var nodes = node.nodes.slice(startIndex, endIndex);

      // Return a new document fragment.
      return Document.create({ nodes: nodes });
    }

    /**
     * Get the furthest parent of a node by `key` that matches an `iterator`.
     *
     * @param {String} key
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthest',
    value: function getFurthest(key, iterator) {
      var ancestors = this.getAncestors(key);
      if (!ancestors) {
        key = assertKey(key);
        throw new Error('Could not find a descendant node with key "' + key + '".');
      }

      // Exclude this node itself
      return ancestors.rest().find(iterator);
    }

    /**
     * Get the furthest block parent of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestBlock',
    value: function getFurthestBlock(key) {
      return this.getFurthest(key, function (node) {
        return node.object == 'block';
      });
    }

    /**
     * Get the furthest inline parent of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestInline',
    value: function getFurthestInline(key) {
      return this.getFurthest(key, function (node) {
        return node.object == 'inline';
      });
    }

    /**
     * Get the furthest ancestor of a node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestAncestor',
    value: function getFurthestAncestor(key) {
      key = assertKey(key);
      return this.nodes.find(function (node) {
        if (node.key == key) return true;
        if (node.object == 'text') return false;
        return node.hasDescendant(key);
      });
    }

    /**
     * Get the furthest ancestor of a node by `key` that has only one child.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestOnlyChildAncestor',
    value: function getFurthestOnlyChildAncestor(key) {
      var ancestors = this.getAncestors(key);

      if (!ancestors) {
        key = assertKey(key);
        throw new Error('Could not find a descendant node with key "' + key + '".');
      }

      var result = ancestors
      // Skip this node...
      .shift()
      // Take parents until there are more than one child...
      .reverse().takeUntil(function (p) {
        return p.nodes.size > 1;
      })
      // And pick the highest.
      .last();
      if (!result) return null;
      return result;
    }

    /**
     * Get the closest inline nodes for each text node in the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getInlines',
    value: function getInlines() {
      var array = this.getInlinesAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get the closest inline nodes for each text node in the node, as an array.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesAsArray',
    value: function getInlinesAsArray() {
      var array = [];

      this.nodes.forEach(function (child) {
        if (child.object == 'text') return;
        if (child.isLeafInline()) {
          array.push(child);
        } else {
          array = array.concat(child.getInlinesAsArray());
        }
      });

      return array;
    }

    /**
     * Get the closest inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesAtRange',
    value: function getInlinesAtRange(range) {
      var array = this.getInlinesAtRangeAsArray(range);
      // Remove duplicates by converting it to an `OrderedSet` first.
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array));
    }

    /**
     * Get the closest inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getInlinesAtRangeAsArray',
    value: function getInlinesAtRangeAsArray(range) {
      var _this = this;

      range = range.normalize(this);
      if (range.isUnset) return [];

      return this.getTextsAtRangeAsArray(range).map(function (text) {
        return _this.getClosestInline(text.key);
      }).filter(function (exists) {
        return exists;
      });
    }

    /**
     * Get all of the leaf inline nodes that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesByType',
    value: function getInlinesByType(type) {
      var array = this.getInlinesByTypeAsArray(type);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get all of the leaf inline nodes that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getInlinesByTypeAsArray',
    value: function getInlinesByTypeAsArray(type) {
      return this.nodes.reduce(function (inlines, node) {
        if (node.object == 'text') {
          return inlines;
        } else if (node.isLeafInline() && node.type == type) {
          inlines.push(node);
          return inlines;
        } else {
          return inlines.concat(node.getInlinesByTypeAsArray(type));
        }
      }, []);
    }

    /**
     * Return a set of all keys in the node as an array.
     *
     * @return {Array<String>}
     */

  }, {
    key: 'getKeysAsArray',
    value: function getKeysAsArray() {
      var keys = [];

      this.forEachDescendant(function (desc) {
        keys.push(desc.key);
      });

      return keys;
    }

    /**
     * Return a set of all keys in the node.
     *
     * @return {Set<String>}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      var keys = this.getKeysAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](keys);
    }

    /**
     * Get the last child text node.
     *
     * @return {Node|Null}
     */

  }, {
    key: 'getLastText',
    value: function getLastText() {
      var descendantFound = null;

      var found = this.nodes.findLast(function (node) {
        if (node.object == 'text') return true;
        descendantFound = node.getLastText();
        return descendantFound;
      });

      return descendantFound || found;
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](array);
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarks',
    value: function getOrderedMarks() {
      var array = this.getMarksAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array);
    }

    /**
     * Get all of the marks as an array.
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      return this.nodes.reduce(function (marks, node) {
        return marks.concat(node.getMarksAsArray());
      }, []);
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtRange',
    value: function getMarksAtRange(range) {
      var array = this.getMarksAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](array);
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getInsertMarksAtRange',
    value: function getInsertMarksAtRange(range) {
      var array = this.getInsertMarksAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](array);
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksAtRange',
    value: function getOrderedMarksAtRange(range) {
      var array = this.getMarksAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array);
    }

    /**
     * Get a set of the active marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarksAtRange',
    value: function getActiveMarksAtRange(range) {
      var array = this.getActiveMarksAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](array);
    }

    /**
     * Get a set of the marks in a `range`, by unioning.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getMarksAtRangeAsArray',
    value: function getMarksAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];
      if (range.isCollapsed) return this.getMarksAtCollapsedRangeAsArray(range);

      return this.getCharactersAtRange(range).reduce(function (memo, char) {
        if (char) {
          char.marks.toArray().forEach(function (c) {
            return memo.push(c);
          });
        }
        return memo;
      }, []);
    }

    /**
     * Get a set of the marks in a `range` for insertion behavior.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getInsertMarksAtRangeAsArray',
    value: function getInsertMarksAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];
      if (range.isCollapsed) return this.getMarksAtCollapsedRangeAsArray(range);

      var text = this.getDescendant(range.startKey);
      var char = text.characters.get(range.startOffset);
      if (!char) return [];

      return char.marks.toArray();
    }

    /**
     * Get a set of marks in a `range`, by treating it as collapsed.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getMarksAtCollapsedRangeAsArray',
    value: function getMarksAtCollapsedRangeAsArray(range) {
      if (range.isUnset) return [];

      var startKey = range.startKey,
          startOffset = range.startOffset;


      if (startOffset == 0) {
        var previous = this.getPreviousText(startKey);
        if (!previous || previous.text.length == 0) return [];
        if (this.getClosestBlock(startKey) !== this.getClosestBlock(previous.key)) {
          return [];
        }
        var _char = previous.characters.get(previous.text.length - 1);
        if (!_char) return [];

        return _char.marks.toArray();
      }

      var text = this.getDescendant(startKey);
      var char = text.characters.get(startOffset - 1);
      if (!char) return [];

      return char.marks.toArray();
    }

    /**
     * Get a set of marks in a `range`, by intersecting.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getActiveMarksAtRangeAsArray',
    value: function getActiveMarksAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];
      if (range.isCollapsed) return this.getMarksAtCollapsedRangeAsArray(range);

      // Otherwise, get a set of the marks for each character in the range.
      var chars = this.getCharactersAtRange(range);
      var first = chars.first();
      if (!first) return [];

      var memo = first.marks;

      chars.slice(1).forEach(function (char) {
        var marks = char ? char.marks : [];
        memo = memo.intersect(marks);
        return memo.size != 0;
      });

      return memo.toArray();
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksByType',
    value: function getMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"](array);
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksByType',
    value: function getOrderedMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["OrderedSet"](array);
    }

    /**
     * Get all of the marks that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getMarksByTypeAsArray',
    value: function getMarksByTypeAsArray(type) {
      return this.nodes.reduce(function (array, node) {
        return node.object == 'text' ? array.concat(node.getMarksAsArray().filter(function (m) {
          return m.type == type;
        })) : array.concat(node.getMarksByTypeAsArray(type));
      }, []);
    }

    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNextBlock',
    value: function getNextBlock(key) {
      var child = this.assertDescendant(key);
      var last = void 0;

      if (child.object == 'block') {
        last = child.getLastText();
      } else {
        var block = this.getClosestBlock(key);
        last = block.getLastText();
      }

      var next = this.getNextText(last.key);
      if (!next) return null;

      return this.getClosestBlock(next.key);
    }

    /**
     * Get the node after a descendant by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNextSibling',
    value: function getNextSibling(key) {
      key = assertKey(key);

      var parent = this.getParent(key);
      var after = parent.nodes.skipUntil(function (child) {
        return child.key == key;
      });

      if (after.size == 0) {
        throw new Error('Could not find a child node with key "' + key + '".');
      }
      return after.get(1);
    }

    /**
     * Get the text node after a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNextText',
    value: function getNextText(key) {
      key = assertKey(key);
      return this.getTexts().skipUntil(function (text) {
        return text.key == key;
      }).get(1);
    }

    /**
     * Get a node in the tree by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNode',
    value: function getNode(key) {
      key = assertKey(key);
      return this.key == key ? this : this.getDescendant(key);
    }

    /**
     * Get a node in the tree by `path`.
     *
     * @param {Array} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNodeAtPath',
    value: function getNodeAtPath(path) {
      return path.length ? this.getDescendantAtPath(path) : this;
    }

    /**
     * Get the offset for a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Number}
     */

  }, {
    key: 'getOffset',
    value: function getOffset(key) {
      this.assertDescendant(key);

      // Calculate the offset of the nodes before the highest child.
      var child = this.getFurthestAncestor(key);
      var offset = this.nodes.takeUntil(function (n) {
        return n == child;
      }).reduce(function (memo, n) {
        return memo + n.text.length;
      }, 0);

      // Recurse if need be.
      return this.hasChild(key) ? offset : offset + child.getOffset(key);
    }

    /**
     * Get the offset from a `range`.
     *
     * @param {Range} range
     * @return {Number}
     */

  }, {
    key: 'getOffsetAtRange',
    value: function getOffsetAtRange(range) {
      range = range.normalize(this);

      if (range.isUnset) {
        throw new Error('The range cannot be unset to calculcate its offset.');
      }

      if (range.isExpanded) {
        throw new Error('The range must be collapsed to calculcate its offset.');
      }

      var _range3 = range,
          startKey = _range3.startKey,
          startOffset = _range3.startOffset;

      return this.getOffset(startKey) + startOffset;
    }

    /**
     * Get the parent of a child node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getParent',
    value: function getParent(key) {
      if (this.hasChild(key)) return this;

      var node = null;

      this.nodes.find(function (child) {
        if (child.object == 'text') {
          return false;
        } else {
          node = child.getParent(key);
          return node;
        }
      });

      return node;
    }

    /**
     * Get the path of a descendant node by `key`.
     *
     * @param {String|Node} key
     * @return {Array}
     */

  }, {
    key: 'getPath',
    value: function getPath(key) {
      var child = this.assertNode(key);
      var ancestors = this.getAncestors(key);
      var path = [];

      ancestors.reverse().forEach(function (ancestor) {
        var index = ancestor.nodes.indexOf(child);
        path.unshift(index);
        child = ancestor;
      });

      return path;
    }

    /**
     * Refind the path of node if path is changed.
     *
     * @param {Array} path
     * @param {String} key
     * @return {Array}
     */

  }, {
    key: 'refindPath',
    value: function refindPath(path, key) {
      var node = this.getDescendantAtPath(path);
      if (node && node.key === key) {
        return path;
      }

      return this.getPath(key);
    }

    /**
     *
     * Refind the node with the same node.key after change.
     *
     * @param {Array} path
     * @param {String} key
     * @return {Node|Void}
     */

  }, {
    key: 'refindNode',
    value: function refindNode(path, key) {
      var node = this.getDescendantAtPath(path);
      if (node && node.key === key) {
        return node;
      }

      return this.getDescendant(key);
    }

    /**
     * Get the placeholder for the node from a `schema`.
     *
     * @param {Schema} schema
     * @return {Component|Void}
     */

  }, {
    key: 'getPlaceholder',
    value: function getPlaceholder(schema) {
      return schema.__getPlaceholder(this);
    }

    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousBlock',
    value: function getPreviousBlock(key) {
      var child = this.assertDescendant(key);
      var first = void 0;

      if (child.object == 'block') {
        first = child.getFirstText();
      } else {
        var block = this.getClosestBlock(key);
        first = block.getFirstText();
      }

      var previous = this.getPreviousText(first.key);
      if (!previous) return null;

      return this.getClosestBlock(previous.key);
    }

    /**
     * Get the node before a descendant node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousSibling',
    value: function getPreviousSibling(key) {
      key = assertKey(key);
      var parent = this.getParent(key);
      var before = parent.nodes.takeUntil(function (child) {
        return child.key == key;
      });

      if (before.size == parent.nodes.size) {
        throw new Error('Could not find a child node with key "' + key + '".');
      }

      return before.last();
    }

    /**
     * Get the text node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousText',
    value: function getPreviousText(key) {
      key = assertKey(key);
      return this.getTexts().takeUntil(function (text) {
        return text.key == key;
      }).last();
    }

    /**
     * Get the indexes of the selection for a `range`, given an extra flag for
     * whether the node `isSelected`, to determine whether not finding matches
     * means everything is selected or nothing is.
     *
     * @param {Range} range
     * @param {Boolean} isSelected
     * @return {Object|Null}
     */

  }, {
    key: 'getSelectionIndexes',
    value: function getSelectionIndexes(range) {
      var isSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var startKey = range.startKey,
          endKey = range.endKey;

      // PERF: if we're not selected, or the range is blurred, we can exit early.

      if (!isSelected || range.isBlurred) {
        return null;
      }

      // if we've been given an invalid selection we can exit early.
      if (range.isUnset) {
        return null;
      }

      // PERF: if the start and end keys are the same, just check for the child
      // that contains that single key.
      if (startKey == endKey) {
        var child = this.getFurthestAncestor(startKey);
        var index = child ? this.nodes.indexOf(child) : null;
        return { start: index, end: index + 1 };
      }

      // Otherwise, check all of the children...
      var start = null;
      var end = null;

      this.nodes.forEach(function (child, i) {
        if (child.object == 'text') {
          if (start == null && child.key == startKey) start = i;
          if (end == null && child.key == endKey) end = i + 1;
        } else {
          if (start == null && child.hasDescendant(startKey)) start = i;
          if (end == null && child.hasDescendant(endKey)) end = i + 1;
        }

        // PERF: exit early if both start and end have been found.
        return start == null || end == null;
      });

      if (isSelected && start == null) start = 0;
      if (isSelected && end == null) end = this.nodes.size;
      return start == null ? null : { start: start, end: end };
    }

    /**
     * Get the concatenated text string of all child nodes.
     *
     * @return {String}
     */

  }, {
    key: 'getText',
    value: function getText() {
      return this.nodes.reduce(function (string, node) {
        return string + node.text;
      }, '');
    }

    /**
     * Get the descendent text node at an `offset`.
     *
     * @param {String} offset
     * @return {Node|Null}
     */

  }, {
    key: 'getTextAtOffset',
    value: function getTextAtOffset(offset) {
      // PERF: Add a few shortcuts for the obvious cases.
      if (offset == 0) return this.getFirstText();
      if (offset == this.text.length) return this.getLastText();
      if (offset < 0 || offset > this.text.length) return null;

      var length = 0;

      return this.getTexts().find(function (node, i, nodes) {
        length += node.text.length;
        return length > offset;
      });
    }

    /**
     * Get the direction of the node's text.
     *
     * @return {String}
     */

  }, {
    key: 'getTextDirection',
    value: function getTextDirection() {
      var dir = __WEBPACK_IMPORTED_MODULE_3_direction___default()(this.text);
      return dir == 'neutral' ? undefined : dir;
    }

    /**
     * Recursively get all of the child text nodes in order of appearance.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTexts',
    value: function getTexts() {
      var array = this.getTextsAsArray();
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Recursively get all the leaf text nodes in order of appearance, as array.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAsArray',
    value: function getTextsAsArray() {
      var array = [];

      this.nodes.forEach(function (node) {
        if (node.object == 'text') {
          array.push(node);
        } else {
          array = array.concat(node.getTextsAsArray());
        }
      });

      return array;
    }

    /**
     * Get all of the text nodes in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAtRange',
    value: function getTextsAtRange(range) {
      var array = this.getTextsAtRangeAsArray(range);
      return new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](array);
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getTextsAtRangeAsArray',
    value: function getTextsAtRangeAsArray(range) {
      range = range.normalize(this);
      if (range.isUnset) return [];

      var _range4 = range,
          startKey = _range4.startKey,
          endKey = _range4.endKey;

      var startText = this.getDescendant(startKey);

      // PERF: the most common case is when the range is in a single text node,
      // where we can avoid a lot of iterating of the tree.
      if (startKey == endKey) return [startText];

      var endText = this.getDescendant(endKey);
      var texts = this.getTextsAsArray();
      var start = texts.indexOf(startText);
      var end = texts.indexOf(endText);
      return texts.slice(start, end + 1);
    }

    /**
     * Check if a child node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */

  }, {
    key: 'hasChild',
    value: function hasChild(key) {
      return !!this.getChild(key);
    }

    /**
     * Recursively check if a child node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */

  }, {
    key: 'hasDescendant',
    value: function hasDescendant(key) {
      return !!this.getDescendant(key);
    }

    /**
     * Recursively check if a node exists by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */

  }, {
    key: 'hasNode',
    value: function hasNode(key) {
      return !!this.getNode(key);
    }

    /**
     * Check if a node has a void parent by `key`.
     *
     * @param {String} key
     * @return {Boolean}
     */

  }, {
    key: 'hasVoidParent',
    value: function hasVoidParent(key) {
      return !!this.getClosestVoid(key);
    }

    /**
     * Insert a `node` at `index`.
     *
     * @param {Number} index
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'insertNode',
    value: function insertNode(index, node) {
      var keys = this.getKeysAsArray();

      if (keys.includes(node.key)) {
        node = node.regenerateKey();
      }

      if (node.object != 'text') {
        node = node.mapDescendants(function (desc) {
          return keys.includes(desc.key) ? desc.regenerateKey() : desc;
        });
      }

      var nodes = this.nodes.insert(index, node);
      return this.set('nodes', nodes);
    }

    /**
     * Check whether the node is in a `range`.
     *
     * @param {Range} range
     * @return {Boolean}
     */

  }, {
    key: 'isInRange',
    value: function isInRange(range) {
      range = range.normalize(this);

      var node = this;
      var _range5 = range,
          startKey = _range5.startKey,
          endKey = _range5.endKey,
          isCollapsed = _range5.isCollapsed;

      // PERF: solve the most common cast where the start or end key are inside
      // the node, for collapsed selections.

      if (node.key == startKey || node.key == endKey || node.hasDescendant(startKey) || node.hasDescendant(endKey)) {
        return true;
      }

      // PERF: if the selection is collapsed and the previous check didn't return
      // true, then it must be false.
      if (isCollapsed) {
        return false;
      }

      // Otherwise, look through all of the leaf text nodes in the range, to see
      // if any of them are inside the node.
      var texts = node.getTextsAtRange(range);
      var memo = false;

      texts.forEach(function (text) {
        if (node.hasDescendant(text.key)) memo = true;
        return memo;
      });

      return memo;
    }

    /**
     * Check whether the node is a leaf block.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafBlock',
    value: function isLeafBlock() {
      return this.object == 'block' && this.nodes.every(function (n) {
        return n.object != 'block';
      });
    }

    /**
     * Check whether the node is a leaf inline.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafInline',
    value: function isLeafInline() {
      return this.object == 'inline' && this.nodes.every(function (n) {
        return n.object != 'inline';
      });
    }

    /**
     * Merge a children node `first` with another children node `second`.
     * `first` and `second` will be concatenated in that order.
     * `first` and `second` must be two Nodes or two Text.
     *
     * @param {Node} first
     * @param {Node} second
     * @return {Node}
     */

  }, {
    key: 'mergeNode',
    value: function mergeNode(withIndex, index) {
      var node = this;
      var one = node.nodes.get(withIndex);
      var two = node.nodes.get(index);

      if (one.object != two.object) {
        throw new Error('Tried to merge two nodes of different objects: "' + one.object + '" and "' + two.object + '".');
      }

      // If the nodes are text nodes, concatenate their characters together.
      if (one.object == 'text') {
        var characters = one.characters.concat(two.characters);
        one = one.set('characters', characters);
      } else {
        // Otherwise, concatenate their child nodes together.
        var nodes = one.nodes.concat(two.nodes);
        one = one.set('nodes', nodes);
      }

      node = node.removeNode(index);
      node = node.removeNode(withIndex);
      node = node.insertNode(withIndex, one);
      return node;
    }

    /**
     * Map all child nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapChildren',
    value: function mapChildren(iterator) {
      var _this2 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, i) {
        var ret = iterator(node, i, _this2.nodes);
        if (ret != node) nodes = nodes.set(ret.key, ret);
      });

      return this.set('nodes', nodes);
    }

    /**
     * Map all descendant nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapDescendants',
    value: function mapDescendants(iterator) {
      var _this3 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, i) {
        var ret = node;
        if (ret.object != 'text') ret = ret.mapDescendants(iterator);
        ret = iterator(ret, i, _this3.nodes);
        if (ret == node) return;

        var index = nodes.indexOf(node);
        nodes = nodes.set(index, ret);
      });

      return this.set('nodes', nodes);
    }

    /**
     * Regenerate the node's key.
     *
     * @return {Node}
     */

  }, {
    key: 'regenerateKey',
    value: function regenerateKey() {
      var key = generateKey();
      return this.set('key', key);
    }

    /**
     * Remove a `node` from the children node map.
     *
     * @param {String} key
     * @return {Node}
     */

  }, {
    key: 'removeDescendant',
    value: function removeDescendant(key) {
      key = assertKey(key);

      var node = this;
      var parent = node.getParent(key);
      if (!parent) throw new Error('Could not find a descendant node with key "' + key + '".');

      var index = parent.nodes.findIndex(function (n) {
        return n.key === key;
      });
      var nodes = parent.nodes.splice(index, 1);

      parent = parent.set('nodes', nodes);
      node = node.updateNode(parent);
      return node;
    }

    /**
     * Remove a node at `index`.
     *
     * @param {Number} index
     * @return {Node}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(index) {
      var nodes = this.nodes.splice(index, 1);
      return this.set('nodes', nodes);
    }

    /**
     * Split a child node by `index` at `position`.
     *
     * @param {Number} index
     * @param {Number} position
     * @return {Node}
     */

  }, {
    key: 'splitNode',
    value: function splitNode(index, position) {
      var node = this;
      var child = node.nodes.get(index);
      var one = void 0;
      var two = void 0;

      // If the child is a text node, the `position` refers to the text offset at
      // which to split it.
      if (child.object == 'text') {
        var befores = child.characters.take(position);
        var afters = child.characters.skip(position);
        one = child.set('characters', befores);
        two = child.set('characters', afters).regenerateKey();
      } else {
        // Otherwise, if the child is not a text node, the `position` refers to the
        // index at which to split its children.
        var _befores = child.nodes.take(position);
        var _afters = child.nodes.skip(position);
        one = child.set('nodes', _befores);
        two = child.set('nodes', _afters).regenerateKey();
      }

      // Remove the old node and insert the newly split children.
      node = node.removeNode(index);
      node = node.insertNode(index, two);
      node = node.insertNode(index, one);
      return node;
    }

    /**
     * Set a new value for a child node by `key`.
     *
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'updateNode',
    value: function updateNode(node) {
      if (node.key == this.key) {
        return node;
      }

      var child = this.assertDescendant(node.key);
      var ancestors = this.getAncestors(node.key);

      ancestors.reverse().forEach(function (parent) {
        var _parent = parent,
            nodes = _parent.nodes;

        var index = nodes.indexOf(child);
        child = parent;
        nodes = nodes.set(index, node);
        parent = parent.set('nodes', nodes);
        node = parent;
      });

      return node;
    }

    /**
     * Validate the node against a `schema`.
     *
     * @param {Schema} schema
     * @return {Function|Null}
     */

  }, {
    key: 'validate',
    value: function validate(schema) {
      return schema.validateNode(this);
    }

    /**
     * Get the first invalid descendant
     *
     * @param {Schema} schema
     * @return {Node|Text|Null}
     */

  }, {
    key: 'getFirstInvalidDescendant',
    value: function getFirstInvalidDescendant(schema) {
      var result = null;
      this.nodes.find(function (n) {
        result = n.validate(schema) ? n : n.getFirstInvalidDescendant(schema);
        return result;
      });
      return result;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Node` with `attrs`.
     *
     * @param {Object|Node} attrs
     * @return {Node}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Node.isNode(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        var object = attrs.object;


        if (!object && attrs.kind) {
          __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
          object = attrs.kind;
        }

        switch (object) {
          case 'block':
            return Block.create(attrs);
          case 'document':
            return Document.create(attrs);
          case 'inline':
            return Inline.create(attrs);
          case 'text':
            return Text.create(attrs);
          default:
            {
              throw new Error('`Node.create` requires a `object` string.');
            }
        }
      }

      throw new Error('`Node.create` only accepts objects or nodes but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Nodes` from an array.
     *
     * @param {Array<Object|Node>} elements
     * @return {List<Node>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Node.create));
        return list;
      }

      throw new Error('`Node.createList` only accepts lists or arrays, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable node properties from `attrs`.
     *
     * @param {Object|String|Node} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs) || Inline.isInline(attrs)) {
        return {
          data: attrs.data,
          isVoid: attrs.isVoid,
          type: attrs.type
        };
      }

      if (typeof attrs == 'string') {
        return { type: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        if ('isVoid' in attrs) props.isVoid = attrs.isVoid;
        return props;
      }

      throw new Error('`Node.createProperties` only accepts objects, strings, blocks or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a `Node` from a JSON `value`.
     *
     * @param {Object} value
     * @return {Node}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(value) {
      var object = value.object;


      if (!object && value.kind) {
        __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
        object = value.kind;
      }

      switch (object) {
        case 'block':
          return Block.fromJSON(value);
        case 'document':
          return Document.fromJSON(value);
        case 'inline':
          return Inline.fromJSON(value);
        case 'text':
          return Text.fromJSON(value);
        default:
          {
            throw new Error('`Node.fromJSON` requires an `object` of either \'block\', \'document\', \'inline\' or \'text\', but you passed: ' + value);
          }
      }
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isNode',


    /**
     * Check if `any` is a `Node`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isNode(any) {
      return Block.isBlock(any) || Document.isDocument(any) || Inline.isInline(any) || Text.isText(any);
    }

    /**
     * Check if `any` is a list of nodes.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isNodeList',
    value: function isNodeList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Node.isNode(item);
      });
    }
  }]);
  return Node;
}();

/**
 * Assert a key `arg`.
 *
 * @param {String} arg
 * @return {String}
 */

Node.fromJS = Node.fromJSON;
function assertKey(arg) {
  if (typeof arg == 'string') return arg;
  throw new Error('Invalid `key` argument! It must be a key string, but you passed: ' + arg);
}

/**
 * Memoize read methods.
 */

memoize(Node.prototype, ['areDescendantsSorted', 'getActiveMarksAtRangeAsArray', 'getAncestors', 'getBlocksAsArray', 'getBlocksAtRangeAsArray', 'getBlocksByTypeAsArray', 'getCharactersAtRangeAsArray', 'getCharactersAsArray', 'getChild', 'getClosestBlock', 'getClosestInline', 'getClosestVoid', 'getCommonAncestor', 'getDecorations', 'getDepth', 'getDescendant', 'getDescendantAtPath', 'getFirstText', 'getFragmentAtRange', 'getFurthestBlock', 'getFurthestInline', 'getFurthestAncestor', 'getFurthestOnlyChildAncestor', 'getInlinesAsArray', 'getInlinesAtRangeAsArray', 'getInlinesByTypeAsArray', 'getMarksAsArray', 'getMarksAtRangeAsArray', 'getInsertMarksAtRangeAsArray', 'getKeysAsArray', 'getLastText', 'getMarksByTypeAsArray', 'getNextBlock', 'getNextSibling', 'getNextText', 'getNode', 'getNodeAtPath', 'getOffset', 'getOffsetAtRange', 'getParent', 'getPath', 'getPlaceholder', 'getPreviousBlock', 'getPreviousSibling', 'getPreviousText', 'getText', 'getTextAtOffset', 'getTextDirection', 'getTextsAsArray', 'getTextsAtRangeAsArray', 'isLeafBlock', 'isLeafInline', 'validate', 'getFirstInvalidDescendant']);

/**
 * Prevent circular dependencies.
 */

/**
 * Dependencies.
 */

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$5 = {
  data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
  isVoid: false,
  key: undefined,
  nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
  type: undefined

  /**
   * Inline.
   *
   * @type {Inline}
   */

};
var Inline = function (_Record) {
  inherits(Inline, _Record);

  function Inline() {
    classCallCheck(this, Inline);
    return possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  createClass(Inline, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the inline.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        isVoid: this.isVoid,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'inline';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Check if the inline is empty.
     * Returns true if inline is not void and all it's children nodes are empty.
     * Void node is never empty, regardless of it's content.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get$$1() {
      return !this.isVoid && !this.nodes.some(function (child) {
        return !child.isEmpty;
      });
    }

    /**
     * Get the concatenated text of all the inline's children.
     *
     * @return {String}
     */

  }, {
    key: 'text',
    get: function get$$1() {
      return this.getText();
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Inline` with `attrs`.
     *
     * @param {Object|String|Inline} attrs
     * @return {Inline}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Inline.isInline(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Inline.fromJSON(attrs);
      }

      throw new Error('`Inline.create` only accepts objects, strings or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Inlines` from an array.
     *
     * @param {Array<Inline|Object>|List<Inline|Object>} elements
     * @return {List<Inline>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Inline.create));
        return list;
      }

      throw new Error('`Inline.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Inline` from a JSON `object`.
     *
     * @param {Object|Inline} object
     * @return {Inline}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Inline.isInline(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$isVoid = object.isVoid,
          isVoid = _object$isVoid === undefined ? false : _object$isVoid,
          _object$key = object.key,
          key = _object$key === undefined ? generateKey() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Inline.fromJS` requires a `type` string.');
      }

      var inline = new Inline({
        key: key,
        type: type,
        isVoid: !!isVoid,
        data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](data),
        nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](nodes.map(Node.fromJSON))
      });

      return inline;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isInline',


    /**
     * Check if `any` is a `Inline`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isInline(any) {
      return !!(any && any[MODEL_TYPES.INLINE]);
    }

    /**
     * Check if `any` is a list of inlines.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isInlineList',
    value: function isInlineList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Inline.isInline(item);
      });
    }
  }]);
  return Inline;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$5));

/**
 * Attach a pseudo-symbol for type checking.
 */

Inline.fromJS = Inline.fromJSON;
Inline.prototype[MODEL_TYPES.INLINE] = true;

/**
 * Mix in `Node` methods.
 */

Object.getOwnPropertyNames(Node.prototype).forEach(function (method) {
  if (method == 'constructor') return;
  Inline.prototype[method] = Node.prototype[method];
});

/**
 * Prevent circular dependencies.
 */

/**
 * Dependencies.
 */

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$6 = {
  data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
  key: undefined,
  nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]()

  /**
   * Document.
   *
   * @type {Document}
   */

};
var Document = function (_Record) {
  inherits(Document, _Record);

  function Document() {
    classCallCheck(this, Document);
    return possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  createClass(Document, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the document.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'document';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Check if the document is empty.
     * Returns true if all it's children nodes are empty.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get$$1() {
      return !this.nodes.some(function (child) {
        return !child.isEmpty;
      });
    }

    /**
     * Get the concatenated text of all the document's children.
     *
     * @return {String}
     */

  }, {
    key: 'text',
    get: function get$$1() {
      return this.getText();
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Document` with `attrs`.
     *
     * @param {Object|Array|List|Text} attrs
     * @return {Document}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Document.isDocument(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(attrs) || Array.isArray(attrs)) {
        attrs = { nodes: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Document.fromJSON(attrs);
      }

      throw new Error('`Document.create` only accepts objects, arrays, lists or documents, but you passed it: ' + attrs);
    }

    /**
     * Create a `Document` from a JSON `object`.
     *
     * @param {Object|Document} object
     * @return {Document}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Document.isDocument(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? generateKey() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes;


      var document = new Document({
        key: key,
        data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](data),
        nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](nodes.map(Node.fromJSON))
      });

      return document;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isDocument',


    /**
     * Check if `any` is a `Document`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isDocument(any) {
      return !!(any && any[MODEL_TYPES.DOCUMENT]);
    }
  }]);
  return Document;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$6));

/**
 * Attach a pseudo-symbol for type checking.
 */

Document.fromJS = Document.fromJSON;
Document.prototype[MODEL_TYPES.DOCUMENT] = true;

/**
 * Mix in `Node` methods.
 */

Object.getOwnPropertyNames(Node.prototype).forEach(function (method) {
  if (method == 'constructor') return;
  Document.prototype[method] = Node.prototype[method];
});

/**
 * Prevent circular dependencies.
 */

/**
 * Dependencies.
 */

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$7 = {
  data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
  isVoid: false,
  key: undefined,
  nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](),
  type: undefined

  /**
   * Block.
   *
   * @type {Block}
   */

};
var Block = function (_Record) {
  inherits(Block, _Record);

  function Block() {
    classCallCheck(this, Block);
    return possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  createClass(Block, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the block.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        isVoid: this.isVoid,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'block';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Check if the block is empty.
     * Returns true if block is not void and all it's children nodes are empty.
     * Void node is never empty, regardless of it's content.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get$$1() {
      return !this.isVoid && !this.nodes.some(function (child) {
        return !child.isEmpty;
      });
    }

    /**
     * Get the concatenated text of all the block's children.
     *
     * @return {String}
     */

  }, {
    key: 'text',
    get: function get$$1() {
      return this.getText();
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Block` from `attrs`.
     *
     * @param {Object|String|Block} attrs
     * @return {Block}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Block.fromJSON(attrs);
      }

      throw new Error('`Block.create` only accepts objects, strings or blocks, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Blocks` from `attrs`.
     *
     * @param {Array<Block|Object>|List<Block|Object>} attrs
     * @return {List<Block>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(attrs) || Array.isArray(attrs)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](attrs.map(Block.create));
        return list;
      }

      throw new Error('`Block.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Block` from a JSON `object`.
     *
     * @param {Object|Block} object
     * @return {Block}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Block.isBlock(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$isVoid = object.isVoid,
          isVoid = _object$isVoid === undefined ? false : _object$isVoid,
          _object$key = object.key,
          key = _object$key === undefined ? generateKey() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Block.fromJSON` requires a `type` string.');
      }

      var block = new Block({
        key: key,
        type: type,
        isVoid: !!isVoid,
        data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](data),
        nodes: new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](nodes.map(Node.fromJSON))
      });

      return block;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isBlock',


    /**
     * Check if `any` is a `Block`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isBlock(any) {
      return !!(any && any[MODEL_TYPES.BLOCK]);
    }

    /**
     * Check if `any` is a block list.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isBlockList',
    value: function isBlockList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Block.isBlock(item);
      });
    }
  }]);
  return Block;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$7));

/**
 * Attach a pseudo-symbol for type checking.
 */

Block.fromJS = Block.fromJSON;
Block.prototype[MODEL_TYPES.BLOCK] = true;

/**
 * Mix in `Node` methods.
 */

Object.getOwnPropertyNames(Node.prototype).forEach(function (method) {
  if (method == 'constructor') return;
  Block.prototype[method] = Node.prototype[method];
});

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes = {};

/**
 * Mix in the changes that pass through to their at-range equivalents because
 * they don't have any effect on the selection.
 */

var PROXY_TRANSFORMS = ['deleteBackward', 'deleteCharBackward', 'deleteLineBackward', 'deleteWordBackward', 'deleteForward', 'deleteCharForward', 'deleteWordForward', 'deleteLineForward', 'setBlocks', 'setInlines', 'splitInline', 'unwrapBlock', 'unwrapInline', 'wrapBlock', 'wrapInline'];

PROXY_TRANSFORMS.forEach(function (method) {
  Changes[method] = function (change) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var value = change.value;
    var selection = value.selection;

    var methodAtRange = method + 'AtRange';
    change[methodAtRange].apply(change, [selection].concat(args));
  };
});

Changes.setBlock = function () {
  __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.33.0', 'The `setBlock` method of Slate changes has been renamed to `setBlocks`.');
  Changes.setBlocks.apply(Changes, arguments);
};

Changes.setInline = function () {
  __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.33.0', 'The `setInline` method of Slate changes has been renamed to `setInlines`.');
  Changes.setInlines.apply(Changes, arguments);
};

/**
 * Add a `mark` to the characters in the current selection.
 *
 * @param {Change} change
 * @param {Mark} mark
 */

Changes.addMark = function (change, mark) {
  mark = Mark.create(mark);
  var value = change.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    change.addMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.add(mark);
    var sel = selection.set('marks', marks);
    change.select(sel);
  } else {
    var _marks = document.getActiveMarksAtRange(selection).add(mark);
    var _sel = selection.set('marks', _marks);
    change.select(_sel);
  }
};

/**
 * Add a list of `marks` to the characters in the current selection.
 *
 * @param {Change} change
 * @param {Mark} mark
 */

Changes.addMarks = function (change, marks) {
  marks.forEach(function (mark) {
    return change.addMark(mark);
  });
};

/**
 * Delete at the current selection.
 *
 * @param {Change} change
 */

Changes.delete = function (change) {
  var value = change.value;
  var selection = value.selection;

  change.deleteAtRange(selection);

  // Ensure that the selection is collapsed to the start, because in certain
  // cases when deleting across inline nodes, when splitting the inline node the
  // end point of the selection will end up after the split point.
  change.collapseToStart();
};

/**
 * Insert a `block` at the current selection.
 *
 * @param {Change} change
 * @param {String|Object|Block} block
 */

Changes.insertBlock = function (change, block) {
  block = Block.create(block);
  var value = change.value;
  var selection = value.selection;

  change.insertBlockAtRange(selection, block);

  // If the node was successfully inserted, update the selection.
  var node = change.value.document.getNode(block.key);
  if (node) change.collapseToEndOf(node);
};

/**
 * Insert a `fragment` at the current selection.
 *
 * @param {Change} change
 * @param {Document} fragment
 */

Changes.insertFragment = function (change, fragment) {
  if (!fragment.nodes.size) return;

  var value = change.value;
  var _value = value,
      document = _value.document,
      selection = _value.selection;
  var _value2 = value,
      startText = _value2.startText,
      endText = _value2.endText,
      startInline = _value2.startInline;

  var lastText = fragment.getLastText();
  var lastInline = fragment.getClosestInline(lastText.key);
  var keys = document.getTexts().map(function (text) {
    return text.key;
  });
  var isAppending = !startInline || selection.hasEdgeAtStartOf(startText) || selection.hasEdgeAtEndOf(endText);

  change.insertFragmentAtRange(selection, fragment);
  value = change.value;
  document = value.document;

  var newTexts = document.getTexts().filter(function (n) {
    return !keys.includes(n.key);
  });
  var newText = isAppending ? newTexts.last() : newTexts.takeLast(2).first();

  if (newText && lastInline) {
    change.select(selection.collapseToEndOf(newText));
  } else if (newText) {
    change.select(selection.collapseToStartOf(newText).move(lastText.text.length));
  } else {
    change.select(selection.collapseToStart().move(lastText.text.length));
  }
};

/**
 * Insert an `inline` at the current selection.
 *
 * @param {Change} change
 * @param {String|Object|Inline} inline
 */

Changes.insertInline = function (change, inline) {
  inline = Inline.create(inline);
  var value = change.value;
  var selection = value.selection;

  change.insertInlineAtRange(selection, inline);

  // If the node was successfully inserted, update the selection.
  var node = change.value.document.getNode(inline.key);
  if (node) change.collapseToEndOf(node);
};

/**
 * Insert a string of `text` with optional `marks` at the current selection.
 *
 * @param {Change} change
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Changes.insertText = function (change, text, marks) {
  var value = change.value;
  var document = value.document,
      selection = value.selection;

  marks = marks || selection.marks || document.getInsertMarksAtRange(selection);
  change.insertTextAtRange(selection, text, marks);

  // If the text was successfully inserted, and the selection had marks on it,
  // unset the selection's marks.
  if (selection.marks && document != change.value.document) {
    change.select({ marks: null });
  }
};

/**
 * Split the block node at the current selection, to optional `depth`.
 *
 * @param {Change} change
 * @param {Number} depth (optional)
 */

Changes.splitBlock = function (change) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = change.value;
  var selection = value.selection;

  change.splitBlockAtRange(selection, depth).collapseToEnd();
};

/**
 * Remove a `mark` from the characters in the current selection.
 *
 * @param {Change} change
 * @param {Mark} mark
 */

Changes.removeMark = function (change, mark) {
  mark = Mark.create(mark);
  var value = change.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    change.removeMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.remove(mark);
    var sel = selection.set('marks', marks);
    change.select(sel);
  } else {
    var _marks2 = document.getActiveMarksAtRange(selection).remove(mark);
    var _sel2 = selection.set('marks', _marks2);
    change.select(_sel2);
  }
};

/**
 * Add or remove a `mark` from the characters in the current selection,
 * depending on whether it's already there.
 *
 * @param {Change} change
 * @param {Mark} mark
 */

Changes.toggleMark = function (change, mark) {
  mark = Mark.create(mark);
  var value = change.value;

  var exists = value.activeMarks.has(mark);

  if (exists) {
    change.removeMark(mark);
  } else {
    change.addMark(mark);
  }
};

/**
 * Wrap the current selection with prefix/suffix.
 *
 * @param {Change} change
 * @param {String} prefix
 * @param {String} suffix
 */

Changes.wrapText = function (change, prefix) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : prefix;
  var value = change.value;
  var selection = value.selection;

  change.wrapTextAtRange(selection, prefix, suffix);

  // If the selection was collapsed, it will have moved the start offset too.
  if (selection.isCollapsed) {
    change.moveStart(0 - prefix.length);
  }

  // Adding the suffix will have pushed the end of the selection further on, so
  // we need to move it back to account for this.
  change.moveEnd(0 - suffix.length);

  // There's a chance that the selection points moved "through" each other,
  // resulting in a now-incorrect selection direction.
  if (selection.isForward != change.value.selection.isForward) {
    change.flip();
  }
};

/**
 * Surrogate pair start and end points.
 *
 * @type {Number}
 */

var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;

/**
 * A regex to match space characters.
 *
 * @type {RegExp}
 */

var SPACE = /\s/;

/**
 * A regex to match chameleon characters, that count as word characters as long
 * as they are inside of a word.
 *
 * @type {RegExp}
 */

var CHAMELEON = /['\u2018\u2019]/;

/**
 * A regex that matches punctuation.
 *
 * @type {RegExp}
 */

var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * Is a character `code` in a surrogate character.
 *
 * @param {Number} code
 * @return {Boolean}
 */

function isSurrogate(code) {
  return SURROGATE_START <= code && code <= SURROGATE_END;
}

/**
 * Is a character a word character? Needs the `remaining` characters too.
 *
 * @param {String} char
 * @param {String|Void} remaining
 * @return {Boolean}
 */

function isWord(char, remaining) {
  if (SPACE.test(char)) return false;

  // If it's a chameleon character, recurse to see if the next one is or not.
  if (CHAMELEON.test(char)) {
    var next = remaining.charAt(0);
    var length = getCharLength(next);
    next = remaining.slice(0, length);
    var rest = remaining.slice(length);
    if (isWord(next, rest)) return true;
  }

  if (PUNCTUATION.test(char)) return false;
  return true;
}

/**
 * Get the length of a `character`.
 *
 * @param {String} char
 * @return {Number}
 */

function getCharLength(char) {
  return isSurrogate(char.charCodeAt(0)) ? 2 : 1;
}

/**
 * Get the offset to the end of the first character in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getCharOffset(text) {
  var char = text.charAt(0);
  return getCharLength(char);
}

/**
 * Get the offset to the end of the character before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = Object(__WEBPACK_IMPORTED_MODULE_4_esrever__["reverse"])(text);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the character after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetForward(text, offset) {
  text = text.slice(offset);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the first word in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getWordOffset(text) {
  var length = 0;
  var i = 0;
  var started = false;
  var char = void 0;

  while (char = text.charAt(i)) {
    var l = getCharLength(char);
    char = text.slice(i, i + l);
    var rest = text.slice(i + l);

    if (isWord(char, rest)) {
      started = true;
      length += l;
    } else if (!started) {
      length += l;
    } else {
      break;
    }

    i += l;
  }

  return length;
}

/**
 * Get the offset to the end of the word before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = Object(__WEBPACK_IMPORTED_MODULE_4_esrever__["reverse"])(text);
  var o = getWordOffset(text);
  return o;
}

/**
 * Get the offset to the end of the word after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetForward(text, offset) {
  text = text.slice(offset);
  var o = getWordOffset(text);
  return o;
}

/**
 * Export.
 *
 * @type {Object}
 */

var String = {
  getCharOffsetForward: getCharOffsetForward,
  getCharOffsetBackward: getCharOffsetBackward,
  getWordOffsetBackward: getWordOffsetBackward,
  getWordOffsetForward: getWordOffsetForward
};

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$1 = {};

/**
 * Add a new `mark` to the characters at `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Mixed} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.addMarkAtRange = function (change, range, mark) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (range.isCollapsed) return;

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;

  var texts = document.getTextsAtRange(range);

  texts.forEach(function (node) {
    var key = node.key;

    var index = 0;
    var length = node.text.length;

    if (key == startKey) index = startOffset;
    if (key == endKey) length = endOffset;
    if (key == startKey && key == endKey) length = endOffset - startOffset;

    change.addMarkByKey(key, index, length, mark, { normalize: normalize });
  });
};

/**
 * Add a list of `marks` to the characters at `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Array<Mixed>} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.addMarksAtRange = function (change, range, marks) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  marks.forEach(function (mark) {
    return change.addMarkAtRange(range, mark, options);
  });
};

/**
 * Delete everything in a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteAtRange = function (change, range) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (range.isCollapsed) return;

  // Snapshot the selection, which creates an extra undo save point, so that
  // when you undo a delete, the expanded selection will be retained.
  change.snapshotSelection();

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;
  var document = value.document;

  var isStartVoid = document.hasVoidParent(startKey);
  var isEndVoid = document.hasVoidParent(endKey);
  var startBlock = document.getClosestBlock(startKey);
  var endBlock = document.getClosestBlock(endKey);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = startOffset == 0 && endOffset == 0 && isStartVoid == false && startKey == startBlock.getFirstText().key && endKey == endBlock.getFirstText().key;

  // If it's a hanging selection, nudge it back to end in the previous text.
  if (isHanging && isEndVoid) {
    var prevText = document.getPreviousText(endKey);
    endKey = prevText.key;
    endOffset = prevText.text.length;
    isEndVoid = document.hasVoidParent(endKey);
  }

  // If the start node is inside a void node, remove the void node and update
  // the starting point to be right after it, continuously until the start point
  // is not a void, or until the entire range is handled.
  while (isStartVoid) {
    var startVoid = document.getClosestVoid(startKey);
    var nextText = document.getNextText(startKey);
    change.removeNodeByKey(startVoid.key, { normalize: false });

    // If the start and end keys are the same, we're done.
    if (startKey == endKey) return;

    // If there is no next text node, we're done.
    if (!nextText) return;

    // Continue...
    document = change.value.document;
    startKey = nextText.key;
    startOffset = 0;
    isStartVoid = document.hasVoidParent(startKey);
  }

  // If the end node is inside a void node, do the same thing but backwards. But
  // we don't need any aborting checks because if we've gotten this far there
  // must be a non-void node that will exit the loop.
  while (isEndVoid) {
    var endVoid = document.getClosestVoid(endKey);
    var _prevText = document.getPreviousText(endKey);
    change.removeNodeByKey(endVoid.key, { normalize: false });

    // Continue...
    document = change.value.document;
    endKey = _prevText.key;
    endOffset = _prevText.text.length;
    isEndVoid = document.hasVoidParent(endKey);
  }

  // If the start and end key are the same, and it was a hanging selection, we
  // can just remove the entire block.
  if (startKey == endKey && isHanging) {
    change.removeNodeByKey(startBlock.key, { normalize: normalize });
    return;
  } else if (startKey == endKey) {
    // Otherwise, if it wasn't hanging, we're inside a single text node, so we can
    // simply remove the text in the range.
    var index = startOffset;
    var length = endOffset - startOffset;
    change.removeTextByKey(startKey, index, length, { normalize: normalize });
    return;
  } else {
    // Otherwise, we need to recursively remove text and nodes inside the start
    // block after the start offset and inside the end block before the end
    // offset. Then remove any blocks that are in between the start and end
    // blocks. Then finally merge the start and end nodes.
    startBlock = document.getClosestBlock(startKey);
    endBlock = document.getClosestBlock(endKey);
    var startText = document.getNode(startKey);
    var endText = document.getNode(endKey);
    var startLength = startText.text.length - startOffset;
    var endLength = endOffset;

    var ancestor = document.getCommonAncestor(startKey, endKey);
    var startChild = ancestor.getFurthestAncestor(startKey);
    var endChild = ancestor.getFurthestAncestor(endKey);

    var startParent = document.getParent(startBlock.key);
    var startParentIndex = startParent.nodes.indexOf(startBlock);
    var endParentIndex = startParent.nodes.indexOf(endBlock);

    var child = void 0;

    // Iterate through all of the nodes in the tree after the start text node
    // but inside the end child, and remove them.
    child = startText;

    while (child.key != startChild.key) {
      var parent = document.getParent(child.key);
      var _index = parent.nodes.indexOf(child);
      var afters = parent.nodes.slice(_index + 1);

      afters.reverse().forEach(function (node) {
        change.removeNodeByKey(node.key, { normalize: false });
      });

      child = parent;
    }

    // Remove all of the middle children.
    var startChildIndex = ancestor.nodes.indexOf(startChild);
    var endChildIndex = ancestor.nodes.indexOf(endChild);
    var middles = ancestor.nodes.slice(startChildIndex + 1, endChildIndex);

    middles.reverse().forEach(function (node) {
      change.removeNodeByKey(node.key, { normalize: false });
    });

    // Remove the nodes before the end text node in the tree.
    child = endText;

    while (child.key != endChild.key) {
      var _parent = document.getParent(child.key);
      var _index2 = _parent.nodes.indexOf(child);
      var befores = _parent.nodes.slice(0, _index2);

      befores.reverse().forEach(function (node) {
        change.removeNodeByKey(node.key, { normalize: false });
      });

      child = _parent;
    }

    // Remove any overlapping text content from the leaf text nodes.
    if (startLength != 0) {
      change.removeTextByKey(startKey, startOffset, startLength, {
        normalize: false
      });
    }

    if (endLength != 0) {
      change.removeTextByKey(endKey, 0, endOffset, { normalize: false });
    }

    // If the start and end blocks aren't the same, move and merge the end block
    // into the start block.
    if (startBlock.key != endBlock.key) {
      document = change.value.document;
      var lonely = document.getFurthestOnlyChildAncestor(endBlock.key);

      // Move the end block to be right after the start block.
      if (endParentIndex != startParentIndex + 1) {
        change.moveNodeByKey(endBlock.key, startParent.key, startParentIndex + 1, { normalize: false });
      }

      // If the selection is hanging, just remove the start block, otherwise
      // merge the end block into it.
      if (isHanging) {
        change.removeNodeByKey(startBlock.key, { normalize: false });
      } else {
        change.mergeNodeByKey(endBlock.key, { normalize: false });
      }

      // If nested empty blocks are left over above the end block, remove them.
      if (lonely) {
        change.removeNodeByKey(lonely.key, { normalize: false });
      }
    }

    // If we should normalize, do it now after everything.
    if (normalize) {
      change.normalizeNodeByKey(ancestor.key);
    }
  }
};

/**
 * Delete backward until the character boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteCharBackwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  var text = startBlock.text;

  var n = String.getCharOffsetBackward(text, o);
  change.deleteBackwardAtRange(range, n, options);
};

/**
 * Delete backward until the line boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteLineBackwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  change.deleteBackwardAtRange(range, o, options);
};

/**
 * Delete backward until the word boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteWordBackwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  var text = startBlock.text;

  var n = String.getWordOffsetBackward(text, o);
  change.deleteBackwardAtRange(range, n, options);
};

/**
 * Delete backward `n` characters at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Number} n (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteBackwardAtRange = function (change, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;
  var _range = range,
      startKey = _range.startKey,
      focusOffset = _range.focusOffset;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: normalize });
    return;
  }

  var voidParent = document.getClosestVoid(startKey);

  // If there is a void parent, delete it.
  if (voidParent) {
    change.removeNodeByKey(voidParent.key, { normalize: normalize });
    return;
  }

  var block = document.getClosestBlock(startKey);

  // If the closest is not void, but empty, remove it
  if (block && block.isEmpty && document.nodes.size !== 1) {
    change.removeNodeByKey(block.key, { normalize: normalize });
    return;
  }

  // If the range is at the start of the document, abort.
  if (range.isAtStartOf(document)) {
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(startKey);
  if (range.isAtStartOf(text)) {
    var prev = document.getPreviousText(text.key);
    var prevBlock = document.getClosestBlock(prev.key);
    var prevVoid = document.getClosestVoid(prev.key);

    // If the previous text node has a void parent, remove it.
    if (prevVoid) {
      change.removeNodeByKey(prevVoid.key, { normalize: normalize });
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n == 1 && prevBlock != block) {
      range = range.merge({
        anchorKey: prev.key,
        anchorOffset: prev.text.length
      });

      change.deleteAtRange(range, { normalize: normalize });
      return;
    }
  }

  // If the focus offset is farther than the number of characters to delete,
  // just remove the characters backwards inside the current node.
  if (n < focusOffset) {
    range = range.merge({
      focusOffset: focusOffset - n,
      isBackward: true
    });

    change.deleteAtRange(range, { normalize: normalize });
    return;
  }

  // Otherwise, we need to see how many nodes backwards to go.
  var node = text;
  var offset = 0;
  var traversed = focusOffset;

  while (n > traversed) {
    node = document.getPreviousText(node.key);
    var next = traversed + node.text.length;
    if (n <= next) {
      offset = next - n;
      break;
    } else {
      traversed = next;
    }
  }

  range = range.merge({
    focusKey: node.key,
    focusOffset: offset,
    isBackward: true
  });

  change.deleteAtRange(range, { normalize: normalize });
};

/**
 * Delete forward until the character boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteCharForwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  var text = startBlock.text;

  var n = String.getCharOffsetForward(text, o);
  change.deleteForwardAtRange(range, n, options);
};

/**
 * Delete forward until the line boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteLineForwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  change.deleteForwardAtRange(range, o, options);
};

/**
 * Delete forward until the word boundary at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteWordForwardAtRange = function (change, range, options) {
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var offset = startBlock.getOffset(startKey);
  var o = offset + startOffset;
  var text = startBlock.text;

  var n = String.getWordOffsetForward(text, o);
  change.deleteForwardAtRange(range, n, options);
};

/**
 * Delete forward `n` characters at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Number} n (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.deleteForwardAtRange = function (change, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;
  var _range2 = range,
      startKey = _range2.startKey,
      focusOffset = _range2.focusOffset;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: normalize });
    return;
  }

  var voidParent = document.getClosestVoid(startKey);

  // If the node has a void parent, delete it.
  if (voidParent) {
    change.removeNodeByKey(voidParent.key, { normalize: normalize });
    return;
  }

  var block = document.getClosestBlock(startKey);

  // If the closest is not void, but empty, remove it
  if (block && block.isEmpty && document.nodes.size !== 1) {
    var nextBlock = document.getNextBlock(block.key);
    change.removeNodeByKey(block.key, { normalize: normalize });
    if (nextBlock && nextBlock.key) {
      change.moveToStartOf(nextBlock);
    }
    return;
  }

  // If the range is at the start of the document, abort.
  if (range.isAtEndOf(document)) {
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(startKey);
  if (range.isAtEndOf(text)) {
    var next = document.getNextText(text.key);
    var _nextBlock = document.getClosestBlock(next.key);
    var nextVoid = document.getClosestVoid(next.key);

    // If the next text node has a void parent, remove it.
    if (nextVoid) {
      change.removeNodeByKey(nextVoid.key, { normalize: normalize });
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n == 1 && _nextBlock != block) {
      range = range.merge({
        focusKey: next.key,
        focusOffset: 0
      });

      change.deleteAtRange(range, { normalize: normalize });
      return;
    }
  }

  // If the remaining characters to the end of the node is greater than or equal
  // to the number of characters to delete, just remove the characters forwards
  // inside the current node.
  if (n <= text.text.length - focusOffset) {
    range = range.merge({
      focusOffset: focusOffset + n
    });

    change.deleteAtRange(range, { normalize: normalize });
    return;
  }

  // Otherwise, we need to see how many nodes forwards to go.
  var node = text;
  var offset = focusOffset;
  var traversed = text.text.length - focusOffset;

  while (n > traversed) {
    node = document.getNextText(node.key);
    var _next = traversed + node.text.length;
    if (n <= _next) {
      offset = n - traversed;
      break;
    } else {
      traversed = _next;
    }
  }

  // If the focus node is inside a void, go up until right before it.
  if (document.hasVoidParent(node.key)) {
    var parent = document.getClosestVoid(node.key);
    node = document.getPreviousText(parent.key);
    offset = node.text.length;
  }

  range = range.merge({
    focusKey: node.key,
    focusOffset: offset
  });

  change.deleteAtRange(range, { normalize: normalize });
};

/**
 * Insert a `block` node at `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Block|String|Object} block
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.insertBlockAtRange = function (change, range, block) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  block = Block.create(block);
  var normalize = change.getFlag('normalize', options);

  if (range.isExpanded) {
    change.deleteAtRange(range);
    range = range.collapseToStart();
  }

  var value = change.value;
  var document = value.document;
  var _range3 = range,
      startKey = _range3.startKey,
      startOffset = _range3.startOffset;

  var startBlock = document.getClosestBlock(startKey);
  var parent = document.getParent(startBlock.key);
  var index = parent.nodes.indexOf(startBlock);

  if (startBlock.isVoid) {
    var extra = range.isAtEndOf(startBlock) ? 1 : 0;
    change.insertNodeByKey(parent.key, index + extra, block, { normalize: normalize });
  } else if (startBlock.isEmpty) {
    change.insertNodeByKey(parent.key, index + 1, block, { normalize: normalize });
  } else if (range.isAtStartOf(startBlock)) {
    change.insertNodeByKey(parent.key, index, block, { normalize: normalize });
  } else if (range.isAtEndOf(startBlock)) {
    change.insertNodeByKey(parent.key, index + 1, block, { normalize: normalize });
  } else {
    change.splitDescendantsByKey(startBlock.key, startKey, startOffset, {
      normalize: false
    });
    change.insertNodeByKey(parent.key, index + 1, block, { normalize: normalize });
  }

  if (normalize) {
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Insert a `fragment` at a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Document} fragment
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.insertFragmentAtRange = function (change, range, fragment) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);

  // If the range is expanded, delete it first.
  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: false });
    range = range.collapseToStart();
  }

  // If the fragment is empty, there's nothing to do after deleting.
  if (!fragment.nodes.size) return;

  // Regenerate the keys for all of the fragments nodes, so that they're
  // guaranteed not to collide with the existing keys in the document. Otherwise
  // they will be rengerated automatically and we won't have an easy way to
  // reference them.
  fragment = fragment.mapDescendants(function (child) {
    return child.regenerateKey();
  });

  // Calculate a few things...
  var _range4 = range,
      startKey = _range4.startKey,
      startOffset = _range4.startOffset;
  var value = change.value;
  var document = value.document;

  var startText = document.getDescendant(startKey);
  var startBlock = document.getClosestBlock(startText.key);
  var startChild = startBlock.getFurthestAncestor(startText.key);
  var isAtStart = range.isAtStartOf(startBlock);
  var parent = document.getParent(startBlock.key);
  var index = parent.nodes.indexOf(startBlock);
  var blocks = fragment.getBlocks();
  var firstBlock = blocks.first();
  var lastBlock = blocks.last();

  // If the fragment only contains a void block, use `insertBlock` instead.
  if (firstBlock == lastBlock && firstBlock.isVoid) {
    change.insertBlockAtRange(range, firstBlock, options);
    return;
  }

  // If the first and last block aren't the same, we need to insert all of the
  // nodes after the fragment's first block at the index.
  if (firstBlock != lastBlock) {
    var lonelyParent = fragment.getFurthest(firstBlock.key, function (p) {
      return p.nodes.size == 1;
    });
    var lonelyChild = lonelyParent || firstBlock;
    var startIndex = parent.nodes.indexOf(startBlock);
    fragment = fragment.removeDescendant(lonelyChild.key);

    fragment.nodes.forEach(function (node, i) {
      var newIndex = startIndex + i + 1;
      change.insertNodeByKey(parent.key, newIndex, node, { normalize: false });
    });
  }

  // Check if we need to split the node.
  if (startOffset != 0) {
    change.splitDescendantsByKey(startChild.key, startKey, startOffset, {
      normalize: false
    });
  }

  // Update our variables with the new value.
  document = change.value.document;
  startText = document.getDescendant(startKey);
  startBlock = document.getClosestBlock(startKey);
  startChild = startBlock.getFurthestAncestor(startText.key);

  // If the first and last block aren't the same, we need to move any of the
  // starting block's children after the split into the last block of the
  // fragment, which has already been inserted.
  if (firstBlock != lastBlock) {
    var nextChild = isAtStart ? startChild : startBlock.getNextSibling(startChild.key);
    var nextNodes = nextChild ? startBlock.nodes.skipUntil(function (n) {
      return n.key == nextChild.key;
    }) : Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])();
    var lastIndex = lastBlock.nodes.size;

    nextNodes.forEach(function (node, i) {
      var newIndex = lastIndex + i;
      change.moveNodeByKey(node.key, lastBlock.key, newIndex, {
        normalize: false
      });
    });
  }

  // If the starting block is empty, we replace it entirely with the first block
  // of the fragment, since this leads to a more expected behavior for the user.
  if (startBlock.isEmpty) {
    change.removeNodeByKey(startBlock.key, { normalize: false });
    change.insertNodeByKey(parent.key, index, firstBlock, { normalize: false });
  } else {
    // Otherwise, we maintain the starting block, and insert all of the first
    // block's inline nodes into it at the split point.
    var inlineChild = startBlock.getFurthestAncestor(startText.key);
    var inlineIndex = startBlock.nodes.indexOf(inlineChild);

    firstBlock.nodes.forEach(function (inline, i) {
      var o = startOffset == 0 ? 0 : 1;
      var newIndex = inlineIndex + i + o;
      change.insertNodeByKey(startBlock.key, newIndex, inline, {
        normalize: false
      });
    });
  }

  // Normalize if requested.
  if (normalize) {
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Insert an `inline` node at `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Inline|String|Object} inline
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.insertInlineAtRange = function (change, range, inline) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);
  inline = Inline.create(inline);

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: false });
    range = range.collapseToStart();
  }

  var value = change.value;
  var document = value.document;
  var _range5 = range,
      startKey = _range5.startKey,
      startOffset = _range5.startOffset;

  var parent = document.getParent(startKey);
  var startText = document.assertDescendant(startKey);
  var index = parent.nodes.indexOf(startText);

  if (parent.isVoid) return;

  change.splitNodeByKey(startKey, startOffset, { normalize: false });
  change.insertNodeByKey(parent.key, index + 1, inline, { normalize: false });

  if (normalize) {
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Insert `text` at a `range`, with optional `marks`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.insertTextAtRange = function (change, range, text, marks) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var normalize = options.normalize;
  var value = change.value;
  var document = value.document;
  var startKey = range.startKey,
      startOffset = range.startOffset;

  var key = startKey;
  var offset = startOffset;
  var parent = document.getParent(startKey);

  if (parent.isVoid) return;

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: false });

    // Update range start after delete
    if (change.value.startKey !== key) {
      key = change.value.startKey;
      offset = change.value.startOffset;
    }
  }

  // PERF: Unless specified, don't normalize if only inserting text.
  if (normalize !== undefined) {
    normalize = range.isExpanded;
  }
  change.insertTextByKey(key, offset, text, marks, { normalize: false });

  if (normalize) {
    // normalize in the narrowest existing block that originally contains startKey and endKey
    var commonAncestor = document.getCommonAncestor(startKey, range.endKey);
    var ancestors = document.getAncestors(commonAncestor.key).push(commonAncestor);
    var normalizeAncestor = ancestors.findLast(function (n) {
      return change.value.document.getDescendant(n.key);
    });
    change.normalizeNodeByKey(normalizeAncestor.key);
  }
};

/**
 * Remove an existing `mark` to the characters at `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Mark|String} mark (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.removeMarkAtRange = function (change, range, mark) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (range.isCollapsed) return;

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;


  texts.forEach(function (node) {
    var key = node.key;

    var index = 0;
    var length = node.text.length;

    if (key == startKey) index = startOffset;
    if (key == endKey) length = endOffset;
    if (key == startKey && key == endKey) length = endOffset - startOffset;

    change.removeMarkByKey(key, index, length, mark, { normalize: normalize });
  });
};

/**
 * Set the `properties` of block nodes in a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object|String} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.setBlocksAtRange = function (change, range, properties) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var blocks = document.getBlocksAtRange(range);

  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset,
      isCollapsed = range.isCollapsed;

  var isStartVoid = document.hasVoidParent(startKey);
  var startBlock = document.getClosestBlock(startKey);
  var endBlock = document.getClosestBlock(endKey);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = isCollapsed == false && startOffset == 0 && endOffset == 0 && isStartVoid == false && startKey == startBlock.getFirstText().key && endKey == endBlock.getFirstText().key;

  // If it's a hanging selection, ignore the last block.
  var sets = isHanging ? blocks.slice(0, -1) : blocks;

  sets.forEach(function (block) {
    change.setNodeByKey(block.key, properties, { normalize: normalize });
  });
};

Changes$1.setBlockAtRange = function () {
  __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.33.0', 'The `setBlockAtRange` method of Slate changes has been renamed to `setBlocksAtRange`.');
  Changes$1.setBlocksAtRange.apply(Changes$1, arguments);
};

/**
 * Set the `properties` of inline nodes in a `range`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Object|String} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.setInlinesAtRange = function (change, range, properties) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var inlines = document.getInlinesAtRange(range);

  inlines.forEach(function (inline) {
    change.setNodeByKey(inline.key, properties, { normalize: normalize });
  });
};

Changes$1.setInlineAtRange = function () {
  __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.33.0', 'The `setInlineAtRange` method of Slate changes has been renamed to `setInlinesAtRange`.');
  Changes$1.setInlinesAtRange.apply(Changes$1, arguments);
};

/**
 * Split the block nodes at a `range`, to optional `height`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Number} height (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.splitBlockAtRange = function (change, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: normalize });
    range = range.collapseToStart();
  }

  var _range6 = range,
      startKey = _range6.startKey,
      startOffset = _range6.startOffset;
  var value = change.value;
  var document = value.document;

  var node = document.assertDescendant(startKey);
  var parent = document.getClosestBlock(node.key);
  var h = 0;

  while (parent && parent.object == 'block' && h < height) {
    node = parent;
    parent = document.getClosestBlock(parent.key);
    h++;
  }

  change.splitDescendantsByKey(node.key, startKey, startOffset, { normalize: normalize });
};

/**
 * Split the inline nodes at a `range`, to optional `height`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Number} height (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.splitInlineAtRange = function (change, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var normalize = change.getFlag('normalize', options);

  if (range.isExpanded) {
    change.deleteAtRange(range, { normalize: normalize });
    range = range.collapseToStart();
  }

  var _range7 = range,
      startKey = _range7.startKey,
      startOffset = _range7.startOffset;
  var value = change.value;
  var document = value.document;

  var node = document.assertDescendant(startKey);
  var parent = document.getClosestInline(node.key);
  var h = 0;

  while (parent && parent.object == 'inline' && h < height) {
    node = parent;
    parent = document.getClosestInline(parent.key);
    h++;
  }

  change.splitDescendantsByKey(node.key, startKey, startOffset, { normalize: normalize });
};

/**
 * Add or remove a `mark` from the characters at `range`, depending on whether
 * it's already there.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Mixed} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.toggleMarkAtRange = function (change, range, mark) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (range.isCollapsed) return;

  mark = Mark.create(mark);

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var marks = document.getActiveMarksAtRange(range);
  var exists = marks.some(function (m) {
    return m.equals(mark);
  });

  if (exists) {
    change.removeMarkAtRange(range, mark, { normalize: normalize });
  } else {
    change.addMarkAtRange(range, mark, { normalize: normalize });
  }
};

/**
 * Unwrap all of the block nodes in a `range` from a block with `properties`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {String|Object} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.unwrapBlockAtRange = function (change, range, properties) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  properties = Node.createProperties(properties);

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var blocks = document.getBlocksAtRange(range);
  var wrappers = blocks.map(function (block) {
    return document.getClosest(block.key, function (parent) {
      if (parent.object != 'block') return false;
      if (properties.type != null && parent.type != properties.type) return false;
      if (properties.isVoid != null && parent.isVoid != properties.isVoid) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  wrappers.forEach(function (block) {
    var first = block.nodes.first();
    var last = block.nodes.last();
    var parent = document.getParent(block.key);
    var index = parent.nodes.indexOf(block);

    var children = block.nodes.filter(function (child) {
      return blocks.some(function (b) {
        return child == b || child.hasDescendant(b.key);
      });
    });

    var firstMatch = children.first();
    var lastMatch = children.last();

    if (first == firstMatch && last == lastMatch) {
      block.nodes.forEach(function (child, i) {
        change.moveNodeByKey(child.key, parent.key, index + i, {
          normalize: false
        });
      });

      change.removeNodeByKey(block.key, { normalize: false });
    } else if (last == lastMatch) {
      block.nodes.skipUntil(function (n) {
        return n == firstMatch;
      }).forEach(function (child, i) {
        change.moveNodeByKey(child.key, parent.key, index + 1 + i, {
          normalize: false
        });
      });
    } else if (first == firstMatch) {
      block.nodes.takeUntil(function (n) {
        return n == lastMatch;
      }).push(lastMatch).forEach(function (child, i) {
        change.moveNodeByKey(child.key, parent.key, index + i, {
          normalize: false
        });
      });
    } else {
      var firstText = firstMatch.getFirstText();
      change.splitDescendantsByKey(block.key, firstText.key, 0, {
        normalize: false
      });
      document = change.value.document;

      children.forEach(function (child, i) {
        if (i == 0) {
          var extra = child;
          child = document.getNextBlock(child.key);
          change.removeNodeByKey(extra.key, { normalize: false });
        }

        change.moveNodeByKey(child.key, parent.key, index + 1 + i, {
          normalize: false
        });
      });
    }
  });

  // TODO: optmize to only normalize the right block
  if (normalize) {
    change.normalizeDocument();
  }
};

/**
 * Unwrap the inline nodes in a `range` from an inline with `properties`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {String|Object} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.unwrapInlineAtRange = function (change, range, properties) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  properties = Node.createProperties(properties);

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var inlines = texts.map(function (text) {
    return document.getClosest(text.key, function (parent) {
      if (parent.object != 'inline') return false;
      if (properties.type != null && parent.type != properties.type) return false;
      if (properties.isVoid != null && parent.isVoid != properties.isVoid) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  inlines.forEach(function (inline) {
    var parent = change.value.document.getParent(inline.key);
    var index = parent.nodes.indexOf(inline);

    inline.nodes.forEach(function (child, i) {
      change.moveNodeByKey(child.key, parent.key, index + i, {
        normalize: false
      });
    });
  });

  // TODO: optmize to only normalize the right block
  if (normalize) {
    change.normalizeDocument();
  }
};

/**
 * Wrap all of the blocks in a `range` in a new `block`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Block|Object|String} block
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.wrapBlockAtRange = function (change, range, block) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;


  var blocks = document.getBlocksAtRange(range);
  var firstblock = blocks.first();
  var lastblock = blocks.last();
  var parent = void 0,
      siblings = void 0,
      index = void 0;

  // If there is only one block in the selection then we know the parent and
  // siblings.
  if (blocks.length === 1) {
    parent = document.getParent(firstblock.key);
    siblings = blocks;
  } else {
    // Determine closest shared parent to all blocks in selection.
    parent = document.getClosest(firstblock.key, function (p1) {
      return !!document.getClosest(lastblock.key, function (p2) {
        return p1 == p2;
      });
    });
  }

  // If no shared parent could be found then the parent is the document.
  if (parent == null) parent = document;

  // Create a list of direct children siblings of parent that fall in the
  // selection.
  if (siblings == null) {
    var indexes = parent.nodes.reduce(function (ind, node, i) {
      if (node == firstblock || node.hasDescendant(firstblock.key)) ind[0] = i;
      if (node == lastblock || node.hasDescendant(lastblock.key)) ind[1] = i;
      return ind;
    }, []);

    index = indexes[0];
    siblings = parent.nodes.slice(indexes[0], indexes[1] + 1);
  }

  // Get the index to place the new wrapped node at.
  if (index == null) {
    index = parent.nodes.indexOf(siblings.first());
  }

  // Inject the new block node into the parent.
  change.insertNodeByKey(parent.key, index, block, { normalize: false });

  // Move the sibling nodes into the new block node.
  siblings.forEach(function (node, i) {
    change.moveNodeByKey(node.key, block.key, i, { normalize: false });
  });

  if (normalize) {
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Wrap the text and inlines in a `range` in a new `inline`.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {Inline|Object|String} inline
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.wrapInlineAtRange = function (change, range, inline) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var value = change.value;
  var document = value.document;

  var normalize = change.getFlag('normalize', options);
  var startKey = range.startKey,
      startOffset = range.startOffset,
      endKey = range.endKey,
      endOffset = range.endOffset;


  if (range.isCollapsed) {
    // Wrapping an inline void
    var inlineParent = document.getClosestInline(startKey);
    if (!inlineParent.isVoid) {
      return;
    }

    return change.wrapInlineByKey(inlineParent.key, inline, options);
  }

  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());

  var blocks = document.getBlocksAtRange(range);
  var startBlock = document.getClosestBlock(startKey);
  var endBlock = document.getClosestBlock(endKey);
  var startChild = startBlock.getFurthestAncestor(startKey);
  var endChild = endBlock.getFurthestAncestor(endKey);

  change.splitDescendantsByKey(endChild.key, endKey, endOffset, {
    normalize: false
  });
  change.splitDescendantsByKey(startChild.key, startKey, startOffset, {
    normalize: false
  });

  document = change.value.document;
  startBlock = document.getDescendant(startBlock.key);
  endBlock = document.getDescendant(endBlock.key);
  startChild = startBlock.getFurthestAncestor(startKey);
  endChild = endBlock.getFurthestAncestor(endKey);
  var startIndex = startBlock.nodes.indexOf(startChild);
  var endIndex = endBlock.nodes.indexOf(endChild);

  if (startBlock == endBlock) {
    document = change.value.document;
    startBlock = document.getClosestBlock(startKey);
    startChild = startBlock.getFurthestAncestor(startKey);

    var startInner = document.getNextSibling(startChild.key);
    var startInnerIndex = startBlock.nodes.indexOf(startInner);
    var endInner = startKey == endKey ? startInner : startBlock.getFurthestAncestor(endKey);
    var inlines = startBlock.nodes.skipUntil(function (n) {
      return n == startInner;
    }).takeUntil(function (n) {
      return n == endInner;
    }).push(endInner);

    var node = inline.regenerateKey();

    change.insertNodeByKey(startBlock.key, startInnerIndex, node, {
      normalize: false
    });

    inlines.forEach(function (child, i) {
      change.moveNodeByKey(child.key, node.key, i, { normalize: false });
    });

    if (normalize) {
      change.normalizeNodeByKey(startBlock.key);
    }
  } else {
    var startInlines = startBlock.nodes.slice(startIndex + 1);
    var endInlines = endBlock.nodes.slice(0, endIndex + 1);
    var startNode = inline.regenerateKey();
    var endNode = inline.regenerateKey();

    change.insertNodeByKey(startBlock.key, startIndex + 1, startNode, {
      normalize: false
    });
    change.insertNodeByKey(endBlock.key, endIndex, endNode, {
      normalize: false
    });

    startInlines.forEach(function (child, i) {
      change.moveNodeByKey(child.key, startNode.key, i, { normalize: false });
    });

    endInlines.forEach(function (child, i) {
      change.moveNodeByKey(child.key, endNode.key, i, { normalize: false });
    });

    if (normalize) {
      change.normalizeNodeByKey(startBlock.key).normalizeNodeByKey(endBlock.key);
    }

    blocks.slice(1, -1).forEach(function (block) {
      var node = inline.regenerateKey();
      change.insertNodeByKey(block.key, 0, node, { normalize: false });

      block.nodes.forEach(function (child, i) {
        change.moveNodeByKey(child.key, node.key, i, { normalize: false });
      });

      if (normalize) {
        change.normalizeNodeByKey(block.key);
      }
    });
  }
};

/**
 * Wrap the text in a `range` in a prefix/suffix.
 *
 * @param {Change} change
 * @param {Range} range
 * @param {String} prefix
 * @param {String} suffix (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$1.wrapTextAtRange = function (change, range, prefix) {
  var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : prefix;
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var normalize = change.getFlag('normalize', options);
  var startKey = range.startKey,
      endKey = range.endKey;

  var start = range.collapseToStart();
  var end = range.collapseToEnd();

  if (startKey == endKey) {
    end = end.move(prefix.length);
  }

  change.insertTextAtRange(start, prefix, [], { normalize: normalize });
  change.insertTextAtRange(end, suffix, [], { normalize: normalize });
};

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$2 = {};

/**
 * Add mark to text at `offset` and `length` in node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {Mixed} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.addMarkByKey = function (change, key, offset, length, mark) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  mark = Mark.create(mark);
  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'add_mark',
      value: value,
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  change.applyOperations(operations);

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Insert a `fragment` at `index` in a node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} index
 * @param {Fragment} fragment
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.insertFragmentByKey = function (change, key, index, fragment) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var normalize = change.getFlag('normalize', options);

  fragment.nodes.forEach(function (node, i) {
    change.insertNodeByKey(key, index + i, node);
  });

  if (normalize) {
    change.normalizeNodeByKey(key);
  }
};

/**
 * Insert a `node` at `index` in a node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} index
 * @param {Node} node
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.insertNodeByKey = function (change, key, index, node) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);

  change.applyOperation({
    type: 'insert_node',
    value: value,
    path: [].concat(toConsumableArray(path), [index]),
    node: node
  });

  if (normalize) {
    change.normalizeNodeByKey(key);
  }
};

/**
 * Insert `text` at `offset` in node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} offset
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.insertTextByKey = function (change, key, offset, text, marks) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  var normalize = change.getFlag('normalize', options);

  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);
  marks = marks || node.getMarksAtIndex(offset);

  change.applyOperation({
    type: 'insert_text',
    value: value,
    path: path,
    offset: offset,
    text: text,
    marks: marks
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Merge a node by `key` with the previous node.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.mergeNodeByKey = function (change, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var original = document.getDescendant(key);
  var previous = document.getPreviousSibling(key);

  if (!previous) {
    throw new Error('Unable to merge node with key "' + key + '", no previous key.');
  }

  var position = previous.object == 'text' ? previous.text.length : previous.nodes.size;

  change.applyOperation({
    type: 'merge_node',
    value: value,
    path: path,
    position: position,
    // for undos to succeed we only need the type and data because
    // these are the only properties that get changed in the merge operation
    properties: {
      type: original.type,
      data: original.data
    },
    target: null
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Move a node by `key` to a new parent by `newKey` and `index`.
 * `newKey` is the key of the container (it can be the document itself)
 *
 * @param {Change} change
 * @param {String} key
 * @param {String} newKey
 * @param {Number} index
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.moveNodeByKey = function (change, key, newKey, newIndex) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var newPath = document.getPath(newKey);

  change.applyOperation({
    type: 'move_node',
    value: value,
    path: path,
    newPath: [].concat(toConsumableArray(newPath), [newIndex])
  });

  if (normalize) {
    var parent = document.getCommonAncestor(key, newKey);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Remove mark from text at `offset` and `length` in node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.removeMarkByKey = function (change, key, offset, length, mark) {
  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

  mark = Mark.create(mark);
  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (!leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'remove_mark',
      value: value,
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  change.applyOperations(operations);

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Remove all `marks` from node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.removeAllMarksByKey = function (change, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var state = change.state;
  var document = state.document;

  var node = document.getNode(key);
  var texts = node.object === 'text' ? [node] : node.getTextsAsArray();

  texts.forEach(function (text) {
    text.getMarksAsArray().forEach(function (mark) {
      change.removeMarkByKey(text.key, 0, text.text.length, mark, options);
    });
  });
};

/**
 * Remove a node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.removeNodeByKey = function (change, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);

  change.applyOperation({
    type: 'remove_node',
    value: value,
    path: path,
    node: node
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Remove text at `offset` and `length` in node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.removeTextByKey = function (change, key, offset, length) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);
  var leaves = node.getLeaves();
  var text = node.text;


  var removals = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the removal, continue on.
    if (ay < bx || by < ax) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);
    var string = text.slice(start, end);

    removals.push({
      type: 'remove_text',
      value: value,
      path: path,
      offset: start,
      text: string,
      marks: leaf.marks
    });
  });

  // Apply in reverse order, so subsequent removals don't impact previous ones.
  change.applyOperations(removals.reverse());

  if (normalize) {
    var block = document.getClosestBlock(key);
    change.normalizeNodeByKey(block.key);
  }
};

/**
`* Replace a `node` with another `node`
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object|Node} node
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.replaceNodeByKey = function (change, key, newNode) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  newNode = Node.create(newNode);
  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var node = document.getNode(key);
  var parent = document.getParent(key);
  var index = parent.nodes.indexOf(node);
  change.removeNodeByKey(key, { normalize: false });
  change.insertNodeByKey(parent.key, index, newNode, options);
  if (normalize) {
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Set `properties` on mark on text at `offset` and `length` in node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.setMarkByKey = function (change, key, offset, length, mark, properties) {
  var options = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

  mark = Mark.create(mark);
  properties = Mark.createProperties(properties);
  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);

  change.applyOperation({
    type: 'set_mark',
    value: value,
    path: path,
    offset: offset,
    length: length,
    mark: mark,
    properties: properties
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Set `properties` on a node by `key`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object|String} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.setNodeByKey = function (change, key, properties) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  properties = Node.createProperties(properties);
  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getNode(key);

  change.applyOperation({
    type: 'set_node',
    value: value,
    path: path,
    node: node,
    properties: properties
  });

  if (normalize) {
    change.normalizeNodeByKey(node.key);
  }
};

/**
 * Split a node by `key` at `position`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} position
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.splitNodeByKey = function (change, key, position) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$normalize = options.normalize,
      normalize = _options$normalize === undefined ? true : _options$normalize,
      _options$target = options.target,
      target = _options$target === undefined ? null : _options$target;
  var value = change.value;
  var document = value.document;

  var path = document.getPath(key);
  var node = document.getDescendantAtPath(path);

  change.applyOperation({
    type: 'split_node',
    value: value,
    path: path,
    position: position,
    properties: {
      type: node.type,
      data: node.data
    },
    target: target
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Split a node deeply down the tree by `key`, `textKey` and `textOffset`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Number} position
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.splitDescendantsByKey = function (change, key, textKey, textOffset) {
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  if (key == textKey) {
    change.splitNodeByKey(textKey, textOffset, options);
    return;
  }

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;


  var text = document.getNode(textKey);
  var ancestors = document.getAncestors(textKey);
  var nodes = ancestors.skipUntil(function (a) {
    return a.key == key;
  }).reverse().unshift(text);
  var previous = void 0;
  var index = void 0;

  nodes.forEach(function (node) {
    var prevIndex = index == null ? null : index;
    index = previous ? node.nodes.indexOf(previous) + 1 : textOffset;
    previous = node;
    change.splitNodeByKey(node.key, index, {
      normalize: false,
      target: prevIndex
    });
  });

  if (normalize) {
    var parent = document.getParent(key);
    change.normalizeNodeByKey(parent.key);
  }
};

/**
 * Unwrap content from an inline parent with `properties`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object|String} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.unwrapInlineByKey = function (change, key, properties, options) {
  var value = change.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertDescendant(key);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOf(first, last);
  change.unwrapInlineAtRange(range, properties, options);
};

/**
 * Unwrap content from a block parent with `properties`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object|String} properties
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.unwrapBlockByKey = function (change, key, properties, options) {
  var value = change.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertDescendant(key);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOf(first, last);
  change.unwrapBlockAtRange(range, properties, options);
};

/**
 * Unwrap a single node from its parent.
 *
 * If the node is surrounded with siblings, its parent will be
 * split. If the node is the only child, the parent is removed, and
 * simply replaced by the node itself.  Cannot unwrap a root node.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.unwrapNodeByKey = function (change, key) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var normalize = change.getFlag('normalize', options);
  var value = change.value;
  var document = value.document;

  var parent = document.getParent(key);
  var node = parent.getChild(key);

  var index = parent.nodes.indexOf(node);
  var isFirst = index === 0;
  var isLast = index === parent.nodes.size - 1;

  var parentParent = document.getParent(parent.key);
  var parentIndex = parentParent.nodes.indexOf(parent);

  if (parent.nodes.size === 1) {
    change.moveNodeByKey(key, parentParent.key, parentIndex, {
      normalize: false
    });
    change.removeNodeByKey(parent.key, options);
  } else if (isFirst) {
    // Just move the node before its parent.
    change.moveNodeByKey(key, parentParent.key, parentIndex, options);
  } else if (isLast) {
    // Just move the node after its parent.
    change.moveNodeByKey(key, parentParent.key, parentIndex + 1, options);
  } else {
    // Split the parent.
    change.splitNodeByKey(parent.key, index, { normalize: false });

    // Extract the node in between the splitted parent.
    change.moveNodeByKey(key, parentParent.key, parentIndex + 1, {
      normalize: false
    });

    if (normalize) {
      change.normalizeNodeByKey(parentParent.key);
    }
  }
};

/**
 * Wrap a node in a block with `properties`.
 *
 * @param {Change} change
 * @param {String} key The node to wrap
 * @param {Block|Object|String} block The wrapping block (its children are discarded)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.wrapBlockByKey = function (change, key, block, options) {
  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());

  var document = change.value.document;

  var node = document.assertDescendant(key);
  var parent = document.getParent(node.key);
  var index = parent.nodes.indexOf(node);

  change.insertNodeByKey(parent.key, index, block, { normalize: false });
  change.moveNodeByKey(node.key, block.key, 0, options);
};

/**
 * Wrap a node in an inline with `properties`.
 *
 * @param {Change} change
 * @param {String} key The node to wrap
 * @param {Block|Object|String} inline The wrapping inline (its children are discarded)
 * @param {Object} options
 *   @property {Boolean} normalize
 */

Changes$2.wrapInlineByKey = function (change, key, inline, options) {
  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());

  var document = change.value.document;

  var node = document.assertDescendant(key);
  var parent = document.getParent(node.key);
  var index = parent.nodes.indexOf(node);

  change.insertNodeByKey(parent.key, index, inline, { normalize: false });
  change.moveNodeByKey(node.key, inline.key, 0, options);
};

/**
 * Wrap a node by `key` with `parent`.
 *
 * @param {Change} change
 * @param {String} key
 * @param {Node|Object} parent
 * @param {Object} options
 */

Changes$2.wrapNodeByKey = function (change, key, parent) {
  parent = Node.create(parent);
  parent = parent.set('nodes', parent.nodes.clear());

  if (parent.object == 'block') {
    change.wrapBlockByKey(key, parent);
    return;
  }

  if (parent.object == 'inline') {
    change.wrapInlineByKey(key, parent);
    return;
  }
};

/**
 * Slate operation attributes.
 *
 * @type {Array}
 */

var OPERATION_ATTRIBUTES = {
  add_mark: ['value', 'path', 'offset', 'length', 'mark'],
  insert_node: ['value', 'path', 'node'],
  insert_text: ['value', 'path', 'offset', 'text', 'marks'],
  merge_node: ['value', 'path', 'position', 'properties', 'target'],
  move_node: ['value', 'path', 'newPath'],
  remove_mark: ['value', 'path', 'offset', 'length', 'mark'],
  remove_node: ['value', 'path', 'node'],
  remove_text: ['value', 'path', 'offset', 'text', 'marks'],
  set_mark: ['value', 'path', 'offset', 'length', 'mark', 'properties'],
  set_node: ['value', 'path', 'node', 'properties'],
  set_selection: ['value', 'selection', 'properties'],
  set_value: ['value', 'properties'],
  split_node: ['value', 'path', 'position', 'properties', 'target']

  /**
   * Export.
   *
   * @type {Object}
   */

};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug = __WEBPACK_IMPORTED_MODULE_5_debug___default()('slate:history');

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$8 = {
  redos: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Stack"](),
  undos: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Stack"]()

  /**
   * History.
   *
   * @type {History}
   */

};
var History = function (_Record) {
  inherits(History, _Record);

  function History() {
    classCallCheck(this, History);
    return possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  createClass(History, [{
    key: 'save',


    /**
     * Save an `operation` into the history.
     *
     * @param {Object} operation
     * @param {Object} options
     * @return {History}
     */

    value: function save(operation) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var history = this;
      var _history = history,
          undos = _history.undos,
          redos = _history.redos;
      var merge = options.merge,
          skip = options.skip;

      var prevBatch = undos.peek();
      var prevOperation = prevBatch && prevBatch.last();

      if (skip == null) {
        skip = shouldSkip(operation, prevOperation);
      }

      if (skip) {
        return history;
      }

      if (merge == null) {
        merge = shouldMerge(operation, prevOperation);
      }

      debug('save', { operation: operation, merge: merge });

      // If the `merge` flag is true, add the operation to the previous batch.
      if (merge && prevBatch) {
        var batch = prevBatch.push(operation);
        undos = undos.pop();
        undos = undos.push(batch);
      } else {
        // Otherwise, create a new batch with the operation.
        var _batch = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]([operation]);
        undos = undos.push(_batch);
      }

      // Constrain the history to 100 entries for memory's sake.
      if (undos.size > 100) {
        undos = undos.take(100);
      }

      // Clear the redos and update the history.
      redos = redos.clear();
      history = history.set('undos', undos).set('redos', redos);
      return history;
    }

    /**
     * Return a JSON representation of the history.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        redos: this.redos.toJSON(),
        undos: this.undos.toJSON()
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'history';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `History` with `attrs`.
     *
     * @param {Object|History} attrs
     * @return {History}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (History.isHistory(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return History.fromJSON(attrs);
      }

      throw new Error('`History.create` only accepts objects or histories, but you passed it: ' + attrs);
    }

    /**
     * Create a `History` from a JSON `object`.
     *
     * @param {Object} object
     * @return {History}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$redos = object.redos,
          redos = _object$redos === undefined ? [] : _object$redos,
          _object$undos = object.undos,
          undos = _object$undos === undefined ? [] : _object$undos;


      var history = new History({
        redos: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Stack"](redos),
        undos: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Stack"](undos)
      });

      return history;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isHistory',


    /**
     * Check if `any` is a `History`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isHistory(any) {
      return !!(any && any[MODEL_TYPES.HISTORY]);
    }
  }]);
  return History;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$8));

/**
 * Attach a pseudo-symbol for type checking.
 */

History.fromJS = History.fromJSON;
History.prototype[MODEL_TYPES.HISTORY] = true;

/**
 * Check whether to merge a new operation `o` into the previous operation `p`.
 *
 * @param {Object} o
 * @param {Object} p
 * @return {Boolean}
 */

function shouldMerge(o, p) {
  if (!p) return false;

  var merge = o.type == 'set_selection' && p.type == 'set_selection' || o.type == 'insert_text' && p.type == 'insert_text' && o.offset == p.offset + p.text.length && __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(o.path, p.path) || o.type == 'remove_text' && p.type == 'remove_text' && o.offset + o.text.length == p.offset && __WEBPACK_IMPORTED_MODULE_6_lodash_isEqual___default()(o.path, p.path);

  return merge;
}

/**
 * Check whether to skip a new operation `o`, given previous operation `p`.
 *
 * @param {Object} o
 * @param {Object} p
 * @return {Boolean}
 */

function shouldSkip(o, p) {
  if (!p) return false;

  var skip = o.type == 'set_selection' && p.type == 'set_selection';

  return skip;
}

/**
 * Define the core schema rules, order-sensitive.
 *
 * @type {Array}
 */

var CORE_SCHEMA_RULES = [
/**
 * Only allow block nodes in documents.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'document') return;
    var invalids = node.nodes.filter(function (n) {
      return n.object != 'block';
    });
    if (!invalids.size) return;

    return function (change) {
      invalids.forEach(function (child) {
        change.removeNodeByKey(child.key, { normalize: false });
      });
    };
  }
},

/**
 * Only allow block nodes or inline and text nodes in blocks.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'block') return;
    var first = node.nodes.first();
    if (!first) return;
    var objects = first.object == 'block' ? ['block'] : ['inline', 'text'];
    var invalids = node.nodes.filter(function (n) {
      return !objects.includes(n.object);
    });
    if (!invalids.size) return;

    return function (change) {
      invalids.forEach(function (child) {
        change.removeNodeByKey(child.key, { normalize: false });
      });
    };
  }
},

/**
 * Only allow inline and text nodes in inlines.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'inline') return;
    var invalids = node.nodes.filter(function (n) {
      return n.object != 'inline' && n.object != 'text';
    });
    if (!invalids.size) return;

    return function (change) {
      invalids.forEach(function (child) {
        change.removeNodeByKey(child.key, { normalize: false });
      });
    };
  }
},

/**
 * Ensure that block and inline nodes have at least one text child.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'block' && node.object != 'inline') return;
    if (node.nodes.size > 0) return;

    return function (change) {
      var text = Text.create();
      change.insertNodeByKey(node.key, 0, text, { normalize: false });
    };
  }
},

/**
 * Ensure that inline non-void nodes are never empty.
 *
 * This rule is applied to all blocks and inlines, because when they contain an empty
 * inline, we need to remove the empty inline from that parent node. If `validate`
 * was to be memoized, it should be against the parent node, not the empty inline itself.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'inline' && node.object != 'block') return;

    var invalids = node.nodes.filter(function (child) {
      return child.object === 'inline' && child.isEmpty;
    });

    if (!invalids.size) return;

    return function (change) {
      // If all of the block's nodes are invalid, insert an empty text node so
      // that the selection will be preserved when they are all removed.
      if (node.nodes.size == invalids.size) {
        var text = Text.create();
        change.insertNodeByKey(node.key, 1, text, { normalize: false });
      }

      invalids.forEach(function (child) {
        change.removeNodeByKey(child.key, { normalize: false });
      });
    };
  }
},

/**
 * Ensure that inline void nodes are surrounded by text nodes, by adding extra
 * blank text nodes if necessary.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'block' && node.object != 'inline') return;

    var invalids = node.nodes.reduce(function (list, child, index) {
      if (child.object !== 'inline') return list;

      var prev = index > 0 ? node.nodes.get(index - 1) : null;
      var next = node.nodes.get(index + 1);

      // We don't test if "prev" is inline, since it has already been
      // processed in the loop
      var insertBefore = !prev;
      var insertAfter = !next || next.object == 'inline';

      if (insertAfter || insertBefore) {
        list = list.push({ insertAfter: insertAfter, insertBefore: insertBefore, index: index });
      }

      return list;
    }, new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]());

    if (!invalids.size) return;

    return function (change) {
      // Shift for every text node inserted previously.
      var shift = 0;

      invalids.forEach(function (_ref) {
        var index = _ref.index,
            insertAfter = _ref.insertAfter,
            insertBefore = _ref.insertBefore;

        if (insertBefore) {
          change.insertNodeByKey(node.key, shift + index, Text.create(), {
            normalize: false
          });
          shift++;
        }

        if (insertAfter) {
          change.insertNodeByKey(node.key, shift + index + 1, Text.create(), {
            normalize: false
          });
          shift++;
        }
      });
    };
  }
},

/**
 * Merge adjacent text nodes.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'block' && node.object != 'inline') return;

    var invalids = node.nodes.map(function (child, i) {
      var next = node.nodes.get(i + 1);
      if (child.object != 'text') return;
      if (!next || next.object != 'text') return;
      return next;
    }).filter(Boolean);

    if (!invalids.size) return;

    return function (change) {
      // Reverse the list to handle consecutive merges, since the earlier nodes
      // will always exist after each merge.
      invalids.reverse().forEach(function (n) {
        change.mergeNodeByKey(n.key, { normalize: false });
      });
    };
  }
},

/**
 * Prevent extra empty text nodes, except when adjacent to inline void nodes.
 *
 * @type {Object}
 */

{
  validateNode: function validateNode(node) {
    if (node.object != 'block' && node.object != 'inline') return;
    var nodes = node.nodes;

    if (nodes.size <= 1) return;

    var invalids = nodes.filter(function (desc, i) {
      if (desc.object != 'text') return;
      if (desc.text.length > 0) return;

      var prev = i > 0 ? nodes.get(i - 1) : null;
      var next = nodes.get(i + 1);

      // If it's the first node, and the next is a void, preserve it.
      if (!prev && next.object == 'inline') return;

      // It it's the last node, and the previous is an inline, preserve it.
      if (!next && prev.object == 'inline') return;

      // If it's surrounded by inlines, preserve it.
      if (next && prev && next.object == 'inline' && prev.object == 'inline') return;

      // Otherwise, remove it.
      return true;
    });

    if (!invalids.size) return;

    return function (change) {
      invalids.forEach(function (text) {
        change.removeNodeByKey(text.key, { normalize: false });
      });
    };
  }
}];

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$9 = {
  plugins: []

  /**
   * Stack.
   *
   * @type {Stack}
   */

};
var Stack$1 = function (_Record) {
  inherits(Stack$$1, _Record);

  function Stack$$1() {
    classCallCheck(this, Stack$$1);
    return possibleConstructorReturn(this, (Stack$$1.__proto__ || Object.getPrototypeOf(Stack$$1)).apply(this, arguments));
  }

  createClass(Stack$$1, [{
    key: 'getPluginsWith',


    /**
     * Get all plugins with `property`.
     *
     * @param {String} property
     * @return {Array}
     */

    value: function getPluginsWith(property) {
      return this.plugins.filter(function (plugin) {
        return plugin[property] != null;
      });
    }

    /**
     * Iterate the plugins with `property`, returning the first non-null value.
     *
     * @param {String} property
     * @param {Any} ...args
     */

  }, {
    key: 'find',
    value: function find(property) {
      var plugins = this.getPluginsWith(property);

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var plugin = _step.value;

          var ret = plugin[property].apply(plugin, args);
          if (ret != null) return ret;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }

    /**
     * Iterate the plugins with `property`, returning all the non-null values.
     *
     * @param {String} property
     * @param {Any} ...args
     * @return {Array}
     */

  }, {
    key: 'map',
    value: function map(property) {
      var plugins = this.getPluginsWith(property);
      var array = [];

      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = plugins[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var plugin = _step2.value;

          var ret = plugin[property].apply(plugin, args);
          if (ret != null) array.push(ret);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return array;
    }

    /**
     * Iterate the plugins with `property`, breaking on any a non-null values.
     *
     * @param {String} property
     * @param {Any} ...args
     */

  }, {
    key: 'run',
    value: function run(property) {
      var plugins = this.getPluginsWith(property);

      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = plugins[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var plugin = _step3.value;

          var ret = plugin[property].apply(plugin, args);
          if (ret != null) return;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }

    /**
     * Iterate the plugins with `property`, reducing to a set of React children.
     *
     * @param {String} property
     * @param {Object} props
     * @param {Any} ...args
     */

  }, {
    key: 'render',
    value: function render(property, props) {
      var plugins = this.getPluginsWith(property).slice().reverse();
      var _props$children = props.children,
          children = _props$children === undefined ? null : _props$children;

      for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {

        for (var _iterator4 = plugins[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var plugin = _step4.value;

          var ret = plugin[property].apply(plugin, [props].concat(args));
          if (ret == null) continue;
          props.children = children = ret;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return children;
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'stack';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Constructor.
     *
     * @param {Object} attrs
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _attrs$plugins = attrs.plugins,
          plugins = _attrs$plugins === undefined ? [] : _attrs$plugins;

      var stack = new Stack$$1({ plugins: plugins });
      return stack;
    }

    /**
     * Check if `any` is a `Stack`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isStack',
    value: function isStack(any) {
      return !!(any && any[MODEL_TYPES.STACK]);
    }
  }]);
  return Stack$$1;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$9));

/**
 * Attach a pseudo-symbol for type checking.
 */

Stack$1.prototype[MODEL_TYPES.STACK] = true;

/**
 * Memoize read methods.
 */

memoize(Stack$1.prototype, ['getPluginsWith']);

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$1 = __WEBPACK_IMPORTED_MODULE_5_debug___default()('slate:schema');

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$10 = {
  stack: Stack$1.create(),
  document: {},
  blocks: {},
  inlines: {}

  /**
   * Schema.
   *
   * @type {Schema}
   */

};
var Schema = function (_Record) {
  inherits(Schema, _Record);

  function Schema() {
    classCallCheck(this, Schema);
    return possibleConstructorReturn(this, (Schema.__proto__ || Object.getPrototypeOf(Schema)).apply(this, arguments));
  }

  createClass(Schema, [{
    key: 'getRule',


    /**
     * Get the rule for an `object`.
     *
     * @param {Mixed} object
     * @return {Object}
     */

    value: function getRule(object) {
      switch (object.object) {
        case 'document':
          return this.document;
        case 'block':
          return this.blocks[object.type];
        case 'inline':
          return this.inlines[object.type];
      }
    }

    /**
     * Get a dictionary of the parent rule validations by child type.
     *
     * @return {Object|Null}
     */

  }, {
    key: 'getParentRules',
    value: function getParentRules() {
      var blocks = this.blocks,
          inlines = this.inlines;

      var parents = {};

      for (var key in blocks) {
        var rule = blocks[key];
        if (rule.parent == null) continue;
        parents[key] = rule;
      }

      for (var _key in inlines) {
        var _rule = inlines[_key];
        if (_rule.parent == null) continue;
        parents[_key] = _rule;
      }

      return Object.keys(parents).length == 0 ? null : parents;
    }

    /**
     * Fail validation by returning a normalizing change function.
     *
     * @param {String} violation
     * @param {Object} context
     * @return {Function}
     */

  }, {
    key: 'fail',
    value: function fail(violation, context) {
      var _this2 = this;

      return function (change) {
        debug$1('normalizing', { violation: violation, context: context });
        var rule = context.rule;
        var size = change.operations.size;

        if (rule.normalize) rule.normalize(change, violation, context);
        if (change.operations.size > size) return;
        _this2.normalize(change, violation, context);
      };
    }

    /**
     * Normalize an invalid value with `violation` and `context`.
     *
     * @param {Change} change
     * @param {String} violation
     * @param {Mixed} context
     */

  }, {
    key: 'normalize',
    value: function normalize(change, violation, context) {
      switch (violation) {
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["a" /* CHILD_OBJECT_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["c" /* CHILD_TYPE_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["d" /* CHILD_UNKNOWN */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["e" /* FIRST_CHILD_OBJECT_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["f" /* FIRST_CHILD_TYPE_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["g" /* LAST_CHILD_OBJECT_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["h" /* LAST_CHILD_TYPE_INVALID */]:
          {
            var child = context.child,
                node = context.node;

            return child.object == 'text' && node.object == 'block' && node.nodes.size == 1 ? change.removeNodeByKey(node.key) : change.removeNodeByKey(child.key);
          }

        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["b" /* CHILD_REQUIRED */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["l" /* NODE_TEXT_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["m" /* PARENT_OBJECT_INVALID */]:
        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["n" /* PARENT_TYPE_INVALID */]:
          {
            var _node = context.node;

            return _node.object == 'document' ? _node.nodes.forEach(function (child) {
              return change.removeNodeByKey(child.key);
            }) : change.removeNodeByKey(_node.key);
          }

        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["i" /* NODE_DATA_INVALID */]:
          {
            var _node2 = context.node,
                key = context.key;

            return _node2.data.get(key) === undefined && _node2.object != 'document' ? change.removeNodeByKey(_node2.key) : change.setNodeByKey(_node2.key, { data: _node2.data.delete(key) });
          }

        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["j" /* NODE_IS_VOID_INVALID */]:
          {
            var _node3 = context.node;

            return change.setNodeByKey(_node3.key, { isVoid: !_node3.isVoid });
          }

        case __WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["k" /* NODE_MARK_INVALID */]:
          {
            var _node4 = context.node,
                mark = context.mark;

            return _node4.getTexts().forEach(function (t) {
              return change.removeMarkByKey(t.key, 0, t.text.length, mark);
            });
          }
      }
    }

    /**
     * Validate a `node` with the schema, returning a function that will fix the
     * invalid node, or void if the node is valid.
     *
     * @param {Node} node
     * @return {Function|Void}
     */

  }, {
    key: 'validateNode',
    value: function validateNode(node) {
      var _this3 = this;

      var ret = this.stack.find('validateNode', node);
      if (ret) return ret;

      if (node.object == 'text') return;

      var rule = this.getRule(node) || {};
      var parents = this.getParentRules();
      var ctx = { node: node, rule: rule };

      if (rule.isVoid != null) {
        if (node.isVoid != rule.isVoid) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["j" /* NODE_IS_VOID_INVALID */], ctx);
        }
      }

      if (rule.data != null) {
        for (var key in rule.data) {
          var fn = rule.data[key];
          var value = node.data.get(key);

          if (!fn(value)) {
            return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["i" /* NODE_DATA_INVALID */], _extends({}, ctx, { key: key, value: value }));
          }
        }
      }

      if (rule.marks != null) {
        var marks = node.getMarks().toArray();

        var _loop = function _loop(mark) {
          if (!rule.marks.some(function (def) {
            return def.type === mark.type;
          })) {
            return {
              v: _this3.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["k" /* NODE_MARK_INVALID */], _extends({}, ctx, { mark: mark }))
            };
          }
        };

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = marks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var mark = _step.value;

            var _ret = _loop(mark);

            if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (rule.text != null) {
        var text = node.text;


        if (!rule.text.test(text)) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["l" /* NODE_TEXT_INVALID */], _extends({}, ctx, { text: text }));
        }
      }

      if (rule.first != null) {
        var _rule$first = rule.first,
            objects = _rule$first.objects,
            types = _rule$first.types;

        var child = node.nodes.first();

        if (child && objects && !objects.includes(child.object)) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["e" /* FIRST_CHILD_OBJECT_INVALID */], _extends({}, ctx, { child: child }));
        }

        if (child && types && !types.includes(child.type)) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["f" /* FIRST_CHILD_TYPE_INVALID */], _extends({}, ctx, { child: child }));
        }
      }

      if (rule.last != null) {
        var _rule$last = rule.last,
            _objects = _rule$last.objects,
            _types = _rule$last.types;

        var _child = node.nodes.last();

        if (_child && _objects && !_objects.includes(_child.object)) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["g" /* LAST_CHILD_OBJECT_INVALID */], _extends({}, ctx, { child: _child }));
        }

        if (_child && _types && !_types.includes(_child.type)) {
          return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["h" /* LAST_CHILD_TYPE_INVALID */], _extends({}, ctx, { child: _child }));
        }
      }

      if (rule.nodes != null || parents != null) {
        var nextDef = function nextDef() {
          offset = offset == null ? null : 0;
          def = defs.shift();
          min = def && (def.min == null ? 0 : def.min);
          max = def && (def.max == null ? Infinity : def.max);
          return !!def;
        };

        var nextChild = function nextChild() {
          index = index == null ? 0 : index + 1;
          offset = offset == null ? 0 : offset + 1;
          _child2 = children[index];
          if (max != null && offset == max) nextDef();
          return !!_child2;
        };

        var rewind = function rewind() {
          offset -= 1;
          index -= 1;
        };

        var children = node.nodes.toArray();
        var defs = rule.nodes != null ? rule.nodes.slice() : [];

        var offset = void 0;
        var min = void 0;
        var index = void 0;
        var def = void 0;
        var max = void 0;
        var _child2 = void 0;

        if (rule.nodes != null) {
          nextDef();
        }

        while (nextChild()) {
          if (parents != null && _child2.object != 'text' && _child2.type in parents) {
            var r = parents[_child2.type];

            if (r.parent.objects != null && !r.parent.objects.includes(node.object)) {
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["m" /* PARENT_OBJECT_INVALID */], {
                node: _child2,
                parent: node,
                rule: r
              });
            }

            if (r.parent.types != null && !r.parent.types.includes(node.type)) {
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["n" /* PARENT_TYPE_INVALID */], {
                node: _child2,
                parent: node,
                rule: r
              });
            }
          }

          if (rule.nodes != null) {
            if (!def) {
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["d" /* CHILD_UNKNOWN */], _extends({}, ctx, { child: _child2, index: index }));
            }

            if (def.objects != null && !def.objects.includes(_child2.object)) {
              if (offset >= min && nextDef()) {
                rewind();
                continue;
              }
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["a" /* CHILD_OBJECT_INVALID */], _extends({}, ctx, { child: _child2, index: index }));
            }

            if (def.types != null && !def.types.includes(_child2.type)) {
              if (offset >= min && nextDef()) {
                rewind();
                continue;
              }
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["c" /* CHILD_TYPE_INVALID */], _extends({}, ctx, { child: _child2, index: index }));
            }
          }
        }

        if (rule.nodes != null) {
          while (min != null) {
            if (offset < min) {
              return this.fail(__WEBPACK_IMPORTED_MODULE_8_slate_schema_violations__["b" /* CHILD_REQUIRED */], _extends({}, ctx, { index: index }));
            }

            nextDef();
          }
        }
      }
    }

    /**
     * Return a JSON representation of the schema.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        document: this.document,
        blocks: this.blocks,
        inlines: this.inlines
      };

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS() {
      return this.toJSON();
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'schema';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Schema` with `attrs`.
     *
     * @param {Object|Schema} attrs
     * @return {Schema}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Schema.isSchema(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Schema.fromJSON(attrs);
      }

      throw new Error('`Schema.create` only accepts objects or schemas, but you passed it: ' + attrs);
    }

    /**
     * Create a `Schema` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Schema}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Schema.isSchema(object)) {
        return object;
      }

      var plugins = object.plugins;


      if (object.rules) {
        throw new Error('Schemas in Slate have changed! They are no longer accept a `rules` property.');
      }

      if (object.nodes) {
        throw new Error('Schemas in Slate have changed! They are no longer accept a `nodes` property.');
      }

      if (!plugins) {
        plugins = [{ schema: object }];
      }

      var schema = resolveSchema(plugins);
      var stack = Stack$1.create({ plugins: [].concat(toConsumableArray(CORE_SCHEMA_RULES), toConsumableArray(plugins)) });
      var ret = new Schema(_extends({}, schema, { stack: stack }));
      return ret;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isSchema',


    /**
     * Check if `any` is a `Schema`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isSchema(any) {
      return !!(any && any[MODEL_TYPES.SCHEMA]);
    }
  }]);
  return Schema;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$10));

/**
 * Resolve a set of schema rules from an array of `plugins`.
 *
 * @param {Array} plugins
 * @return {Object}
 */

Schema.fromJS = Schema.fromJSON;
function resolveSchema() {
  var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var schema = {
    document: {},
    blocks: {},
    inlines: {}
  };

  plugins.slice().reverse().forEach(function (plugin) {
    if (!plugin.schema) return;

    if (plugin.schema.rules) {
      throw new Error('Schemas in Slate have changed! They are no longer accept a `rules` property.');
    }

    if (plugin.schema.nodes) {
      throw new Error('Schemas in Slate have changed! They are no longer accept a `nodes` property.');
    }

    var _plugin$schema = plugin.schema,
        _plugin$schema$docume = _plugin$schema.document,
        document = _plugin$schema$docume === undefined ? {} : _plugin$schema$docume,
        _plugin$schema$blocks = _plugin$schema.blocks,
        blocks = _plugin$schema$blocks === undefined ? {} : _plugin$schema$blocks,
        _plugin$schema$inline = _plugin$schema.inlines,
        inlines = _plugin$schema$inline === undefined ? {} : _plugin$schema$inline;

    var d = resolveDocumentRule(document);
    var bs = {};
    var is$$1 = {};

    for (var key in blocks) {
      bs[key] = resolveNodeRule('block', key, blocks[key]);
    }

    for (var _key2 in inlines) {
      is$$1[_key2] = resolveNodeRule('inline', _key2, inlines[_key2]);
    }

    __WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith___default()(schema.document, d, customizer);
    __WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith___default()(schema.blocks, bs, customizer);
    __WEBPACK_IMPORTED_MODULE_7_lodash_mergeWith___default()(schema.inlines, is$$1, customizer);
  });

  return schema;
}

/**
 * Resolve a document rule `obj`.
 *
 * @param {Object} obj
 * @return {Object}
 */

function resolveDocumentRule(obj) {
  return _extends({
    data: {},
    nodes: null
  }, obj);
}

/**
 * Resolve a node rule with `type` from `obj`.
 *
 * @param {String} object
 * @param {String} type
 * @param {Object} obj
 * @return {Object}
 */

function resolveNodeRule(object, type, obj) {
  return _extends({
    data: {},
    isVoid: null,
    nodes: null,
    first: null,
    last: null,
    parent: null,
    text: null
  }, obj);
}

/**
 * A Lodash customizer for merging schema definitions. Special cases `objects`
 * and `types` arrays to be unioned, and ignores new `null` values.
 *
 * @param {Mixed} target
 * @param {Mixed} source
 * @return {Array|Void}
 */

function customizer(target, source, key) {
  if (key == 'objects' || key == 'types') {
    return target == null ? source : target.concat(source);
  } else {
    return source == null ? target : source;
  }
}

/**
 * Attach a pseudo-symbol for type checking.
 */

Schema.prototype[MODEL_TYPES.SCHEMA] = true;

/**
 * Memoize read methods.
 */

memoize(Schema.prototype, ['getParentRules']);

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$11 = {
  data: new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"](),
  decorations: null,
  document: Document.create(),
  history: History.create(),
  schema: Schema.create(),
  selection: Range.create()

  /**
   * Value.
   *
   * @type {Value}
   */

};
var Value = function (_Record) {
  inherits(Value, _Record);

  function Value() {
    classCallCheck(this, Value);
    return possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
  }

  createClass(Value, [{
    key: 'change',


    /**
     * Create a new `Change` with the current value as a starting point.
     *
     * @param {Object} attrs
     * @return {Change}
     */

    value: function change() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return new Change(_extends({}, attrs, { value: this }));
    }

    /**
     * Return a JSON representation of the value.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        document: this.document.toJSON(options)
      };

      if (options.preserveData) {
        object.data = this.data.toJSON();
      }

      if (options.preserveDecorations) {
        object.decorations = this.decorations ? this.decorations.toArray().map(function (d) {
          return d.toJSON();
        }) : null;
      }

      if (options.preserveHistory) {
        object.history = this.history.toJSON();
      }

      if (options.preserveSelection) {
        object.selection = this.selection.toJSON();
      }

      if (options.preserveSchema) {
        object.schema = this.schema.toJSON();
      }

      if (options.preserveSelection && !options.preserveKeys) {
        var document = this.document,
            selection = this.selection;

        object.selection.anchorPath = selection.isSet ? document.getPath(selection.anchorKey) : null;
        object.selection.focusPath = selection.isSet ? document.getPath(selection.focusKey) : null;
        delete object.selection.anchorKey;
        delete object.selection.focusKey;
      }

      return object;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'value';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }

    /**
     * Are there undoable events?
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasUndos',
    get: function get$$1() {
      return this.history.undos.size > 0;
    }

    /**
     * Are there redoable events?
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasRedos',
    get: function get$$1() {
      return this.history.redos.size > 0;
    }

    /**
     * Is the current selection blurred?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBlurred',
    get: function get$$1() {
      return this.selection.isBlurred;
    }

    /**
     * Is the current selection focused?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isFocused',
    get: function get$$1() {
      return this.selection.isFocused;
    }

    /**
     * Is the current selection collapsed?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isCollapsed',
    get: function get$$1() {
      return this.selection.isCollapsed;
    }

    /**
     * Is the current selection expanded?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isExpanded',
    get: function get$$1() {
      return this.selection.isExpanded;
    }

    /**
     * Is the current selection backward?
     *
     * @return {Boolean} isBackward
     */

  }, {
    key: 'isBackward',
    get: function get$$1() {
      return this.selection.isBackward;
    }

    /**
     * Is the current selection forward?
     *
     * @return {Boolean}
     */

  }, {
    key: 'isForward',
    get: function get$$1() {
      return this.selection.isForward;
    }

    /**
     * Get the current start key.
     *
     * @return {String}
     */

  }, {
    key: 'startKey',
    get: function get$$1() {
      return this.selection.startKey;
    }

    /**
     * Get the current end key.
     *
     * @return {String}
     */

  }, {
    key: 'endKey',
    get: function get$$1() {
      return this.selection.endKey;
    }

    /**
     * Get the current start offset.
     *
     * @return {String}
     */

  }, {
    key: 'startOffset',
    get: function get$$1() {
      return this.selection.startOffset;
    }

    /**
     * Get the current end offset.
     *
     * @return {String}
     */

  }, {
    key: 'endOffset',
    get: function get$$1() {
      return this.selection.endOffset;
    }

    /**
     * Get the current anchor key.
     *
     * @return {String}
     */

  }, {
    key: 'anchorKey',
    get: function get$$1() {
      return this.selection.anchorKey;
    }

    /**
     * Get the current focus key.
     *
     * @return {String}
     */

  }, {
    key: 'focusKey',
    get: function get$$1() {
      return this.selection.focusKey;
    }

    /**
     * Get the current anchor offset.
     *
     * @return {String}
     */

  }, {
    key: 'anchorOffset',
    get: function get$$1() {
      return this.selection.anchorOffset;
    }

    /**
     * Get the current focus offset.
     *
     * @return {String}
     */

  }, {
    key: 'focusOffset',
    get: function get$$1() {
      return this.selection.focusOffset;
    }

    /**
     * Get the current start text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'startBlock',
    get: function get$$1() {
      return this.startKey && this.document.getClosestBlock(this.startKey);
    }

    /**
     * Get the current end text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'endBlock',
    get: function get$$1() {
      return this.endKey && this.document.getClosestBlock(this.endKey);
    }

    /**
     * Get the current anchor text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'anchorBlock',
    get: function get$$1() {
      return this.anchorKey && this.document.getClosestBlock(this.anchorKey);
    }

    /**
     * Get the current focus text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'focusBlock',
    get: function get$$1() {
      return this.focusKey && this.document.getClosestBlock(this.focusKey);
    }

    /**
     * Get the current start text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'startInline',
    get: function get$$1() {
      return this.startKey && this.document.getClosestInline(this.startKey);
    }

    /**
     * Get the current end text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'endInline',
    get: function get$$1() {
      return this.endKey && this.document.getClosestInline(this.endKey);
    }

    /**
     * Get the current anchor text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'anchorInline',
    get: function get$$1() {
      return this.anchorKey && this.document.getClosestInline(this.anchorKey);
    }

    /**
     * Get the current focus text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'focusInline',
    get: function get$$1() {
      return this.focusKey && this.document.getClosestInline(this.focusKey);
    }

    /**
     * Get the current start text node.
     *
     * @return {Text}
     */

  }, {
    key: 'startText',
    get: function get$$1() {
      return this.startKey && this.document.getDescendant(this.startKey);
    }

    /**
     * Get the current end node.
     *
     * @return {Text}
     */

  }, {
    key: 'endText',
    get: function get$$1() {
      return this.endKey && this.document.getDescendant(this.endKey);
    }

    /**
     * Get the current anchor node.
     *
     * @return {Text}
     */

  }, {
    key: 'anchorText',
    get: function get$$1() {
      return this.anchorKey && this.document.getDescendant(this.anchorKey);
    }

    /**
     * Get the current focus node.
     *
     * @return {Text}
     */

  }, {
    key: 'focusText',
    get: function get$$1() {
      return this.focusKey && this.document.getDescendant(this.focusKey);
    }

    /**
     * Get the next block node.
     *
     * @return {Block}
     */

  }, {
    key: 'nextBlock',
    get: function get$$1() {
      return this.endKey && this.document.getNextBlock(this.endKey);
    }

    /**
     * Get the previous block node.
     *
     * @return {Block}
     */

  }, {
    key: 'previousBlock',
    get: function get$$1() {
      return this.startKey && this.document.getPreviousBlock(this.startKey);
    }

    /**
     * Get the next inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'nextInline',
    get: function get$$1() {
      return this.endKey && this.document.getNextInline(this.endKey);
    }

    /**
     * Get the previous inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'previousInline',
    get: function get$$1() {
      return this.startKey && this.document.getPreviousInline(this.startKey);
    }

    /**
     * Get the next text node.
     *
     * @return {Text}
     */

  }, {
    key: 'nextText',
    get: function get$$1() {
      return this.endKey && this.document.getNextText(this.endKey);
    }

    /**
     * Get the previous text node.
     *
     * @return {Text}
     */

  }, {
    key: 'previousText',
    get: function get$$1() {
      return this.startKey && this.document.getPreviousText(this.startKey);
    }

    /**
     * Get the characters in the current selection.
     *
     * @return {List<Character>}
     */

  }, {
    key: 'characters',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]() : this.document.getCharactersAtRange(this.selection);
    }

    /**
     * Get the marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'marks',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"]() : this.selection.marks || this.document.getMarksAtRange(this.selection);
    }

    /**
     * Get the active marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'activeMarks',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["Set"]() : this.selection.marks || this.document.getActiveMarksAtRange(this.selection);
    }

    /**
     * Get the block nodes in the current selection.
     *
     * @return {List<Block>}
     */

  }, {
    key: 'blocks',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]() : this.document.getBlocksAtRange(this.selection);
    }

    /**
     * Get the fragment of the current selection.
     *
     * @return {Document}
     */

  }, {
    key: 'fragment',
    get: function get$$1() {
      return this.selection.isUnset ? Document.create() : this.document.getFragmentAtRange(this.selection);
    }

    /**
     * Get the inline nodes in the current selection.
     *
     * @return {List<Inline>}
     */

  }, {
    key: 'inlines',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]() : this.document.getInlinesAtRange(this.selection);
    }

    /**
     * Get the text nodes in the current selection.
     *
     * @return {List<Text>}
     */

  }, {
    key: 'texts',
    get: function get$$1() {
      return this.selection.isUnset ? new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]() : this.document.getTextsAtRange(this.selection);
    }

    /**
     * Check whether the selection is empty.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isEmpty',
    get: function get$$1() {
      if (this.isCollapsed) return true;
      if (this.endOffset != 0 && this.startOffset != 0) return false;
      return this.fragment.isEmpty;
    }

    /**
     * Check whether the selection is collapsed in a void node.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isInVoid',
    get: function get$$1() {
      if (this.isExpanded) return false;
      return this.document.hasVoidParent(this.startKey);
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Value` with `attrs`.
     *
     * @param {Object|Value} attrs
     * @param {Object} options
     * @return {Value}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (Value.isValue(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Value.fromJSON(attrs);
      }

      throw new Error('`Value.create` only accepts objects or values, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable value properties from `attrs`.
     *
     * @param {Object|Value} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Value.isValue(attrs)) {
        return {
          data: attrs.data,
          decorations: attrs.decorations,
          schema: attrs.schema
        };
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        var props = {};
        if ('data' in attrs) props.data = Data.create(attrs.data);
        if ('decorations' in attrs) props.decorations = Range.createList(attrs.decorations);
        if ('schema' in attrs) props.schema = Schema.create(attrs.schema);
        return props;
      }

      throw new Error('`Value.createProperties` only accepts objects or values, but you passed it: ' + attrs);
    }

    /**
     * Create a `Value` from a JSON `object`.
     *
     * @param {Object} object
     * @param {Object} options
     *   @property {Boolean} normalize
     *   @property {Array} plugins
     * @return {Value}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _object$document = object.document,
          document = _object$document === undefined ? {} : _object$document,
          _object$selection = object.selection,
          selection = _object$selection === undefined ? {} : _object$selection,
          _object$schema = object.schema,
          schema = _object$schema === undefined ? {} : _object$schema;


      var data = new __WEBPACK_IMPORTED_MODULE_1_immutable__["Map"]();

      document = Document.fromJSON(document);
      selection = Range.fromJSON(selection);
      schema = Schema.fromJSON(schema);

      // Allow plugins to set a default value for `data`.
      if (options.plugins) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = options.plugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var plugin = _step.value;

            if (plugin.data) data = data.merge(plugin.data);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      // Then merge in the `data` provided.
      if ('data' in object) {
        data = data.merge(object.data);
      }

      if (selection.isUnset) {
        var text = document.getFirstText();
        if (text) selection = selection.collapseToStartOf(text);
      }

      var value = new Value({
        data: data,
        document: document,
        selection: selection,
        schema: schema
      });

      if (options.normalize !== false) {
        value = value.change({ save: false }).normalize().value;
      }

      return value;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isValue',


    /**
     * Check if a `value` is a `Value`.
     *
     * @param {Any} value
     * @return {Boolean}
     */

    value: function isValue(value) {
      return !!(value && value[MODEL_TYPES.VALUE]);
    }
  }]);
  return Value;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$11));

/**
 * Attach a pseudo-symbol for type checking.
 */

Value.fromJS = Value.fromJSON;
Value.prototype[MODEL_TYPES.VALUE] = true;

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$12 = {
  length: undefined,
  mark: undefined,
  marks: undefined,
  newPath: undefined,
  node: undefined,
  offset: undefined,
  path: undefined,
  position: undefined,
  properties: undefined,
  selection: undefined,
  target: undefined,
  text: undefined,
  type: undefined,
  value: undefined

  /**
   * Operation.
   *
   * @type {Operation}
   */

};
var Operation = function (_Record) {
  inherits(Operation, _Record);

  function Operation() {
    classCallCheck(this, Operation);
    return possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).apply(this, arguments));
  }

  createClass(Operation, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the operation.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var object = this.object,
          type = this.type;

      var json = { object: object, type: type };
      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ATTRIBUTES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var value = this[key];

          // Skip keys for objects that should not be serialized, and are only used
          // for providing the local-only invert behavior for the history stack.
          if (key == 'document') continue;
          if (key == 'selection') continue;
          if (key == 'value') continue;
          if (key == 'node' && type != 'insert_node') continue;

          if (key == 'mark' || key == 'marks' || key == 'node') {
            value = value.toJSON();
          }

          if (key == 'properties' && type == 'merge_node') {
            var v = {};
            if ('data' in value) v.data = value.data.toJS();
            if ('type' in value) v.type = value.type;
            value = v;
          }

          if (key == 'properties' && type == 'set_mark') {
            var _v = {};
            if ('data' in value) _v.data = value.data.toJS();
            if ('type' in value) _v.type = value.type;
            value = _v;
          }

          if (key == 'properties' && type == 'set_node') {
            var _v2 = {};
            if ('data' in value) _v2.data = value.data.toJS();
            if ('isVoid' in value) _v2.isVoid = value.isVoid;
            if ('type' in value) _v2.type = value.type;
            value = _v2;
          }

          if (key == 'properties' && type == 'set_selection') {
            var _v3 = {};
            if ('anchorOffset' in value) _v3.anchorOffset = value.anchorOffset;
            if ('anchorPath' in value) _v3.anchorPath = value.anchorPath;
            if ('focusOffset' in value) _v3.focusOffset = value.focusOffset;
            if ('focusPath' in value) _v3.focusPath = value.focusPath;
            if ('isBackward' in value) _v3.isBackward = value.isBackward;
            if ('isFocused' in value) _v3.isFocused = value.isFocused;
            if ('marks' in value) _v3.marks = value.marks == null ? null : value.marks.toJSON();
            value = _v3;
          }

          if (key == 'properties' && type == 'set_value') {
            var _v4 = {};
            if ('data' in value) _v4.data = value.data.toJS();
            if ('decorations' in value) _v4.decorations = value.decorations.toJS();
            if ('schema' in value) _v4.schema = value.schema.toJS();
            value = _v4;
          }

          if (key == 'properties' && type == 'split_node') {
            var _v5 = {};
            if ('data' in value) _v5.data = value.data.toJS();
            if ('type' in value) _v5.type = value.type;
            value = _v5;
          }

          json[key] = value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return json;
    }

    /**
     * Alias `toJS`.
     */

  }, {
    key: 'toJS',
    value: function toJS(options) {
      return this.toJSON(options);
    }
  }, {
    key: 'object',


    /**
     * Object.
     *
     * @return {String}
     */

    get: function get$$1() {
      return 'operation';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Operation` with `attrs`.
     *
     * @param {Object|Array|List|String|Operation} attrs
     * @return {Operation}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Operation.isOperation(attrs)) {
        return attrs;
      }

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(attrs)) {
        return Operation.fromJSON(attrs);
      }

      throw new Error('`Operation.create` only accepts objects or operations, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Operations` from `elements`.
     *
     * @param {Array<Operation|Object>|List<Operation|Object>} elements
     * @return {List<Operation>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (__WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"](elements.map(Operation.create));
        return list;
      }

      throw new Error('`Operation.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Operation` from a JSON `object`.
     *
     * @param {Object|Operation} object
     * @return {Operation}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Operation.isOperation(object)) {
        return object;
      }

      var type = object.type,
          value = object.value;

      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];
      var attrs = { type: type };

      if (!ATTRIBUTES) {
        throw new Error('`Operation.fromJSON` was passed an unrecognized operation type: "' + type + '"');
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = ATTRIBUTES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          var v = object[key];

          if (v === undefined) {
            // Skip keys for objects that should not be serialized, and are only used
            // for providing the local-only invert behavior for the history stack.
            if (key == 'document') continue;
            if (key == 'selection') continue;
            if (key == 'value') continue;
            if (key == 'node' && type != 'insert_node') continue;

            throw new Error('`Operation.fromJSON` was passed a "' + type + '" operation without the required "' + key + '" attribute.');
          }

          if (key == 'mark') {
            v = Mark.create(v);
          }

          if (key == 'marks' && v != null) {
            v = Mark.createSet(v);
          }

          if (key == 'node') {
            v = Node.create(v);
          }

          if (key == 'selection') {
            v = Range.create(v);
          }

          if (key == 'value') {
            v = Value.create(v);
          }

          if (key == 'properties' && type == 'merge_node') {
            v = Node.createProperties(v);
          }

          if (key == 'properties' && type == 'set_mark') {
            v = Mark.createProperties(v);
          }

          if (key == 'properties' && type == 'set_node') {
            v = Node.createProperties(v);
          }

          if (key == 'properties' && type == 'set_selection') {
            var _v6 = v,
                anchorKey = _v6.anchorKey,
                focusKey = _v6.focusKey,
                rest = objectWithoutProperties(_v6, ['anchorKey', 'focusKey']);

            v = Range.createProperties(rest);

            if (anchorKey !== undefined) {
              v.anchorPath = anchorKey === null ? null : value.document.getPath(anchorKey);
            }

            if (focusKey !== undefined) {
              v.focusPath = focusKey === null ? null : value.document.getPath(focusKey);
            }
          }

          if (key == 'properties' && type == 'set_value') {
            v = Value.createProperties(v);
          }

          if (key == 'properties' && type == 'split_node') {
            v = Node.createProperties(v);
          }

          attrs[key] = v;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var node = new Operation(attrs);
      return node;
    }

    /**
     * Alias `fromJS`.
     */

  }, {
    key: 'isOperation',


    /**
     * Check if `any` is a `Operation`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isOperation(any) {
      return !!(any && any[MODEL_TYPES.OPERATION]);
    }

    /**
     * Check if `any` is a list of operations.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isOperationList',
    value: function isOperationList(any) {
      return __WEBPACK_IMPORTED_MODULE_1_immutable__["List"].isList(any) && any.every(function (item) {
        return Operation.isOperation(item);
      });
    }
  }]);
  return Operation;
}(Object(__WEBPACK_IMPORTED_MODULE_1_immutable__["Record"])(DEFAULTS$12));

/**
 * Attach a pseudo-symbol for type checking.
 */

Operation.fromJS = Operation.fromJSON;
Operation.prototype[MODEL_TYPES.OPERATION] = true;

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$2 = __WEBPACK_IMPORTED_MODULE_5_debug___default()('slate:operation:invert');

/**
 * Invert an `op`.
 *
 * @param {Object} op
 * @return {Object}
 */

function invertOperation(op) {
  op = Operation.create(op);
  var _op = op,
      type = _op.type;

  debug$2(type, op);

  /**
   * Insert node.
   */

  if (type == 'insert_node') {
    var inverse = op.set('type', 'remove_node');
    return inverse;
  }

  /**
   * Remove node.
   */

  if (type == 'remove_node') {
    var _inverse = op.set('type', 'insert_node');
    return _inverse;
  }

  /**
   * Move node.
   */

  if (type == 'move_node') {
    var _op2 = op,
        newPath = _op2.newPath,
        path = _op2.path;

    var inversePath = newPath;
    var inverseNewPath = path;

    var pathLast = path.length - 1;
    var newPathLast = newPath.length - 1;

    // If the node's old position was a left sibling of an ancestor of
    // its new position, we need to adjust part of the path by -1.
    if (path.length < inversePath.length && path.slice(0, pathLast).every(function (e, i) {
      return e == inversePath[i];
    }) && path[pathLast] < inversePath[pathLast]) {
      inversePath = inversePath.slice(0, pathLast).concat([inversePath[pathLast] - 1]).concat(inversePath.slice(pathLast + 1, inversePath.length));
    }

    // If the node's new position is an ancestor of the old position,
    // or a left sibling of an ancestor of its old position, we need
    // to adjust part of the path by 1.
    if (newPath.length < inverseNewPath.length && newPath.slice(0, newPathLast).every(function (e, i) {
      return e == inverseNewPath[i];
    }) && newPath[newPathLast] <= inverseNewPath[newPathLast]) {
      inverseNewPath = inverseNewPath.slice(0, newPathLast).concat([inverseNewPath[newPathLast] + 1]).concat(inverseNewPath.slice(newPathLast + 1, inverseNewPath.length));
    }

    var _inverse2 = op.set('path', inversePath).set('newPath', inverseNewPath);
    return _inverse2;
  }

  /**
   * Merge node.
   */

  if (type == 'merge_node') {
    var _op3 = op,
        _path = _op3.path;
    var length = _path.length;

    var last = length - 1;
    var _inversePath = _path.slice(0, last).concat([_path[last] - 1]);
    var _inverse3 = op.set('type', 'split_node').set('path', _inversePath);
    return _inverse3;
  }

  /**
   * Split node.
   */

  if (type == 'split_node') {
    var _op4 = op,
        _path2 = _op4.path;
    var _length = _path2.length;

    var _last = _length - 1;
    var _inversePath2 = _path2.slice(0, _last).concat([_path2[_last] + 1]);
    var _inverse4 = op.set('type', 'merge_node').set('path', _inversePath2);
    return _inverse4;
  }

  /**
   * Set node.
   */

  if (type == 'set_node') {
    var _op5 = op,
        properties = _op5.properties,
        node = _op5.node;

    var inverseNode = node.merge(properties);
    var inverseProperties = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(node, Object.keys(properties));
    var _inverse5 = op.set('node', inverseNode).set('properties', inverseProperties);
    return _inverse5;
  }

  /**
   * Insert text.
   */

  if (type == 'insert_text') {
    var _inverse6 = op.set('type', 'remove_text');
    return _inverse6;
  }

  /**
   * Remove text.
   */

  if (type == 'remove_text') {
    var _inverse7 = op.set('type', 'insert_text');
    return _inverse7;
  }

  /**
   * Add mark.
   */

  if (type == 'add_mark') {
    var _inverse8 = op.set('type', 'remove_mark');
    return _inverse8;
  }

  /**
   * Remove mark.
   */

  if (type == 'remove_mark') {
    var _inverse9 = op.set('type', 'add_mark');
    return _inverse9;
  }

  /**
   * Set mark.
   */

  if (type == 'set_mark') {
    var _op6 = op,
        _properties = _op6.properties,
        mark = _op6.mark;

    var inverseMark = mark.merge(_properties);
    var _inverseProperties = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(mark, Object.keys(_properties));
    var _inverse10 = op.set('mark', inverseMark).set('properties', _inverseProperties);
    return _inverse10;
  }

  /**
   * Set selection.
   */

  if (type == 'set_selection') {
    var _op7 = op,
        _properties2 = _op7.properties,
        selection = _op7.selection,
        value = _op7.value;
    var anchorPath = _properties2.anchorPath,
        focusPath = _properties2.focusPath,
        props = objectWithoutProperties(_properties2, ['anchorPath', 'focusPath']);
    var document = value.document;


    if (anchorPath !== undefined) {
      props.anchorKey = anchorPath === null ? null : document.assertPath(anchorPath).key;
    }

    if (focusPath !== undefined) {
      props.focusKey = focusPath === null ? null : document.assertPath(focusPath).key;
    }

    var inverseSelection = selection.merge(props);
    var inverseProps = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(selection, Object.keys(props));

    if (anchorPath !== undefined) {
      inverseProps.anchorPath = inverseProps.anchorKey === null ? null : document.getPath(inverseProps.anchorKey);
      delete inverseProps.anchorKey;
    }

    if (focusPath !== undefined) {
      inverseProps.focusPath = inverseProps.focusKey === null ? null : document.getPath(inverseProps.focusKey);
      delete inverseProps.focusKey;
    }

    var _inverse11 = op.set('selection', inverseSelection).set('properties', inverseProps);
    return _inverse11;
  }

  /**
   * Set value.
   */

  if (type == 'set_value') {
    var _op8 = op,
        _properties3 = _op8.properties,
        _value = _op8.value;

    var inverseValue = _value.merge(_properties3);
    var _inverseProperties2 = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(_value, Object.keys(_properties3));
    var _inverse12 = op.set('value', inverseValue).set('properties', _inverseProperties2);
    return _inverse12;
  }
}

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$3 = {};

/**
 * Redo to the next value in the history.
 *
 * @param {Change} change
 */

Changes$3.redo = function (change) {
  var value = change.value;
  var _value = value,
      history = _value.history;

  if (!history) return;

  var _history = history,
      undos = _history.undos,
      redos = _history.redos;

  var next = redos.peek();
  if (!next) return;

  // Shift the next value into the undo stack.
  redos = redos.pop();
  undos = undos.push(next);

  // Replay the next operations.
  next.forEach(function (op) {
    var _op = op,
        type = _op.type,
        properties = _op.properties;

    // When the operation mutates the selection, omit its `isFocused` value to
    // prevent the editor focus from changing during redoing.

    if (type == 'set_selection') {
      op = op.set('properties', __WEBPACK_IMPORTED_MODULE_10_lodash_omit___default()(properties, 'isFocused'));
    }

    change.applyOperation(op, { save: false });
  });

  // Update the history.
  value = change.value;
  history = history.set('undos', undos).set('redos', redos);
  value = value.set('history', history);
  change.value = value;
};

/**
 * Undo the previous operations in the history.
 *
 * @param {Change} change
 */

Changes$3.undo = function (change) {
  var value = change.value;
  var _value2 = value,
      history = _value2.history;

  if (!history) return;

  var _history2 = history,
      undos = _history2.undos,
      redos = _history2.redos;

  var previous = undos.peek();
  if (!previous) return;

  // Shift the previous operations into the redo stack.
  undos = undos.pop();
  redos = redos.push(previous);

  // Replay the inverse of the previous operations.
  previous.slice().reverse().map(invertOperation).forEach(function (inverse) {
    var _inverse = inverse,
        type = _inverse.type,
        properties = _inverse.properties;

    // When the operation mutates the selection, omit its `isFocused` value to
    // prevent the editor focus from changing during undoing.

    if (type == 'set_selection') {
      inverse = inverse.set('properties', __WEBPACK_IMPORTED_MODULE_10_lodash_omit___default()(properties, 'isFocused'));
    }

    change.applyOperation(inverse, { save: false });
  });

  // Update the history.
  value = change.value;
  history = history.set('undos', undos).set('redos', redos);
  value = value.set('history', history);
  change.value = value;
};

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$4 = {};

/**
 * Set `properties` on the selection.
 *
 * @param {Change} change
 * @param {Object} properties
 */

Changes$4.select = function (change, properties) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  properties = Range.createProperties(properties);

  var _options$snapshot = options.snapshot,
      snapshot = _options$snapshot === undefined ? false : _options$snapshot;
  var value = change.value;
  var document = value.document,
      selection = value.selection;

  var props = {};
  var sel = selection.toJSON();
  var next = selection.merge(properties).normalize(document);
  properties = __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(next, Object.keys(properties));

  // Remove any properties that are already equal to the current selection. And
  // create a dictionary of the previous values for all of the properties that
  // are being changed, for the inverse operation.
  for (var k in properties) {
    if (snapshot == false && properties[k] == sel[k]) continue;
    props[k] = properties[k];
  }

  // If the selection moves, clear any marks, unless the new selection
  // properties change the marks in some way.
  var moved = ['anchorKey', 'anchorOffset', 'focusKey', 'focusOffset'].some(function (p) {
    return props.hasOwnProperty(p);
  });

  if (sel.marks && properties.marks == sel.marks && moved) {
    props.marks = null;
  }

  // If there are no new properties to set, abort.
  if (__WEBPACK_IMPORTED_MODULE_11_is_empty___default()(props)) {
    return;
  }

  // Apply the operation.
  change.applyOperation({
    type: 'set_selection',
    value: value,
    properties: props,
    selection: sel
  }, snapshot ? { skip: false, merge: false } : {});
};

/**
 * Select the whole document.
 *
 * @param {Change} change
 */

Changes$4.selectAll = function (change) {
  var value = change.value;
  var document = value.document,
      selection = value.selection;

  var next = selection.moveToRangeOf(document);
  change.select(next);
};

/**
 * Snapshot the current selection.
 *
 * @param {Change} change
 */

Changes$4.snapshotSelection = function (change) {
  var value = change.value;
  var selection = value.selection;

  change.select(selection, { snapshot: true });
};

/**
 * Move the anchor point backward, accounting for being at the start of a block.
 *
 * @param {Change} change
 */

Changes$4.moveAnchorCharBackward = function (change) {
  var value = change.value;
  var document = value.document,
      selection = value.selection,
      anchorText = value.anchorText,
      anchorBlock = value.anchorBlock;
  var anchorOffset = selection.anchorOffset;

  var previousText = document.getPreviousText(anchorText.key);
  var isInVoid = document.hasVoidParent(anchorText.key);
  var isPreviousInVoid = previousText && document.hasVoidParent(previousText.key);

  if (!isInVoid && anchorOffset > 0) {
    change.moveAnchor(-1);
    return;
  }

  if (!previousText) {
    return;
  }

  change.moveAnchorToEndOf(previousText);

  if (!isInVoid && !isPreviousInVoid && anchorBlock.hasNode(previousText.key)) {
    change.moveAnchor(-1);
  }
};

/**
 * Move the anchor point forward, accounting for being at the end of a block.
 *
 * @param {Change} change
 */

Changes$4.moveAnchorCharForward = function (change) {
  var value = change.value;
  var document = value.document,
      selection = value.selection,
      anchorText = value.anchorText,
      anchorBlock = value.anchorBlock;
  var anchorOffset = selection.anchorOffset;

  var nextText = document.getNextText(anchorText.key);
  var isInVoid = document.hasVoidParent(anchorText.key);
  var isNextInVoid = nextText && document.hasVoidParent(nextText.key);

  if (!isInVoid && anchorOffset < anchorText.text.length) {
    change.moveAnchor(1);
    return;
  }

  if (!nextText) {
    return;
  }

  change.moveAnchorToStartOf(nextText);

  if (!isInVoid && !isNextInVoid && anchorBlock.hasNode(nextText.key)) {
    change.moveAnchor(1);
  }
};

/**
 * Move the focus point backward, accounting for being at the start of a block.
 *
 * @param {Change} change
 */

Changes$4.moveFocusCharBackward = function (change) {
  var value = change.value;
  var document = value.document,
      selection = value.selection,
      focusText = value.focusText,
      focusBlock = value.focusBlock;
  var focusOffset = selection.focusOffset;

  var previousText = document.getPreviousText(focusText.key);
  var isInVoid = document.hasVoidParent(focusText.key);
  var isPreviousInVoid = previousText && document.hasVoidParent(previousText.key);

  if (!isInVoid && focusOffset > 0) {
    change.moveFocus(-1);
    return;
  }

  if (!previousText) {
    return;
  }

  change.moveFocusToEndOf(previousText);

  if (!isInVoid && !isPreviousInVoid && focusBlock.hasNode(previousText.key)) {
    change.moveFocus(-1);
  }
};

/**
 * Move the focus point forward, accounting for being at the end of a block.
 *
 * @param {Change} change
 */

Changes$4.moveFocusCharForward = function (change) {
  var value = change.value;
  var document = value.document,
      selection = value.selection,
      focusText = value.focusText,
      focusBlock = value.focusBlock;
  var focusOffset = selection.focusOffset;

  var nextText = document.getNextText(focusText.key);
  var isInVoid = document.hasVoidParent(focusText.key);
  var isNextInVoid = nextText && document.hasVoidParent(nextText.key);

  if (!isInVoid && focusOffset < focusText.text.length) {
    change.moveFocus(1);
    return;
  }

  if (!nextText) {
    return;
  }

  change.moveFocusToStartOf(nextText);

  if (!isInVoid && !isNextInVoid && focusBlock.hasNode(nextText.key)) {
    change.moveFocus(1);
  }
};

/**
 * Mix in move methods.
 */

var MOVE_DIRECTIONS = ['Forward', 'Backward'];

MOVE_DIRECTIONS.forEach(function (direction$$1) {
  var anchor = 'moveAnchorChar' + direction$$1;
  var focus = 'moveFocusChar' + direction$$1;

  Changes$4['moveChar' + direction$$1] = function (change) {
    change[anchor]()[focus]();
  };

  Changes$4['moveStartChar' + direction$$1] = function (change) {
    if (change.value.isBackward) {
      change[focus]();
    } else {
      change[anchor]();
    }
  };

  Changes$4['moveEndChar' + direction$$1] = function (change) {
    if (change.value.isBackward) {
      change[anchor]();
    } else {
      change[focus]();
    }
  };

  Changes$4['extendChar' + direction$$1] = function (change) {
    change['moveFocusChar' + direction$$1]();
  };

  Changes$4['collapseChar' + direction$$1] = function (change) {
    var collapse = direction$$1 == 'Forward' ? 'collapseToEnd' : 'collapseToStart';
    change[collapse]()['moveChar' + direction$$1]();
  };
});

/**
 * Mix in alias methods.
 */

var ALIAS_METHODS$1 = [['collapseLineBackward', 'collapseToStartOfBlock'], ['collapseLineForward', 'collapseToEndOfBlock'], ['extendLineBackward', 'extendToStartOfBlock'], ['extendLineForward', 'extendToEndOfBlock']];

ALIAS_METHODS$1.forEach(function (_ref) {
  var _ref2 = slicedToArray(_ref, 2),
      alias = _ref2[0],
      method = _ref2[1];

  Changes$4[alias] = function (change) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    change[method].apply(change, [change].concat(args));
  };
});

/**
 * Mix in selection changes that are just a proxy for the selection method.
 */

var PROXY_TRANSFORMS$1 = ['blur', 'collapseTo', 'collapseToAnchor', 'collapseToEnd', 'collapseToEndOf', 'collapseToFocus', 'collapseToStart', 'collapseToStartOf', 'extend', 'extendTo', 'extendToEndOf', 'extendToStartOf', 'flip', 'focus', 'move', 'moveAnchor', 'moveAnchorOffsetTo', 'moveAnchorTo', 'moveAnchorToEndOf', 'moveAnchorToStartOf', 'moveEnd', 'moveEndOffsetTo', 'moveEndTo', 'moveFocus', 'moveFocusOffsetTo', 'moveFocusTo', 'moveFocusToEndOf', 'moveFocusToStartOf', 'moveOffsetsTo', 'moveStart', 'moveStartOffsetTo', 'moveStartTo', 'moveTo', 'moveToEnd', 'moveToEndOf', 'moveToRangeOf', 'moveToStart', 'moveToStartOf', 'deselect'];

PROXY_TRANSFORMS$1.forEach(function (method) {
  Changes$4[method] = function (change) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var normalize = method != 'deselect';
    var value = change.value;
    var document = value.document,
        selection = value.selection;

    var next = selection[method].apply(selection, args);
    if (normalize) next = next.normalize(document);
    change.select(next);
  };
});

/**
 * Mix in node-related changes.
 */

var PREFIXES = ['moveTo', 'moveAnchorTo', 'moveFocusTo', 'moveStartTo', 'moveEndTo', 'collapseTo', 'extendTo'];

var DIRECTIONS = ['Next', 'Previous'];

var OBJECTS = ['Block', 'Inline', 'Text'];

PREFIXES.forEach(function (prefix) {
  var edges = ['Start', 'End'];

  if (prefix == 'moveTo') {
    edges.push('Range');
  }

  edges.forEach(function (edge) {
    var method = '' + prefix + edge + 'Of';

    OBJECTS.forEach(function (object) {
      var getNode = object == 'Text' ? 'getNode' : 'getClosest' + object;

      Changes$4['' + method + object] = function (change) {
        var value = change.value;
        var document = value.document,
            selection = value.selection;

        var node = document[getNode](selection.startKey);
        if (!node) return;
        change[method](node);
      };

      DIRECTIONS.forEach(function (direction$$1) {
        var getDirectionNode = 'get' + direction$$1 + object;
        var directionKey = direction$$1 == 'Next' ? 'startKey' : 'endKey';

        Changes$4['' + method + direction$$1 + object] = function (change) {
          var value = change.value;
          var document = value.document,
              selection = value.selection;

          var node = document[getNode](selection[directionKey]);
          if (!node) return;
          var target = document[getDirectionNode](node.key);
          if (!target) return;
          change[method](target);
        };
      });
    });
  });
});

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$5 = {};

/**
 * Set `properties` on the value.
 *
 * @param {Change} change
 * @param {Object|Value} properties
 * @param {Object} options
 */

Changes$5.setValue = function (change, properties) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  properties = Value.createProperties(properties);
  var value = change.value;


  change.applyOperation({
    type: 'set_value',
    properties: properties,
    value: value
  }, options);
};

/**
 * Changes.
 *
 * @type {Object}
 */

var Changes$6 = {};

/**
 * Normalize the value with its schema.
 *
 * @param {Change} change
 */

Changes$6.normalize = function (change) {
  change.normalizeDocument();
};

/**
 * Normalize the document with the value's schema.
 *
 * @param {Change} change
 */

Changes$6.normalizeDocument = function (change) {
  var value = change.value;
  var document = value.document;

  change.normalizeNodeByKey(document.key);
};

/**
 * Normalize a `node` and its children with the value's schema.
 *
 * @param {Change} change
 * @param {Node|String} key
 */

Changes$6.normalizeNodeByKey = function (change, key) {
  var value = change.value;
  var document = value.document,
      schema = value.schema;

  var node = document.assertNode(key);

  normalizeNodeAndChildren(change, node, schema);

  document = change.value.document;
  var ancestors = document.getAncestors(key);
  if (!ancestors) return;

  ancestors.forEach(function (ancestor) {
    normalizeNode(change, ancestor, schema);
  });
};

/**
 * Normalize a `node` and its children with a `schema`.
 *
 * @param {Change} change
 * @param {Node} node
 * @param {Schema} schema
 */

function normalizeNodeAndChildren(change, node, schema) {
  if (node.object == 'text') {
    normalizeNode(change, node, schema);
    return;
  }

  var child = node.getFirstInvalidDescendant(schema);
  var path = change.value.document.getPath(node.key);
  while (node && child) {
    normalizeNodeAndChildren(change, child, schema);
    node = change.value.document.refindNode(path, node.key);
    if (!node) {
      path = [];
      child = null;
    } else {
      path = change.value.document.refindPath(path, node.key);
      child = node.getFirstInvalidDescendant(schema);
    }
  }

  // Normalize the node itself if it still exists.
  if (node) {
    normalizeNode(change, node, schema);
  }
}

/**
 * Normalize a `node` with a `schema`, but not its children.
 *
 * @param {Change} change
 * @param {Node} node
 * @param {Schema} schema
 */

function normalizeNode(change, node, schema) {
  var max = schema.stack.plugins.length + 1;
  var iterations = 0;

  function iterate(c, n) {
    var normalize = n.validate(schema);
    if (!normalize) return;

    // Run the `normalize` function to fix the node.
    var path = c.value.document.getPath(n.key);
    normalize(c);

    // Re-find the node reference, in case it was updated. If the node no longer
    // exists, we're done for this branch.
    n = c.value.document.refindNode(path, n.key);
    if (!n) return;

    path = c.value.document.refindPath(path, n.key);

    // Increment the iterations counter, and check to make sure that we haven't
    // exceeded the max. Without this check, it's easy for the `validate` or
    // `normalize` function of a schema rule to be written incorrectly and for
    // an infinite invalid loop to occur.
    iterations++;

    if (iterations > max) {
      throw new Error('A schema rule could not be validated after sufficient iterations. This is usually due to a `rule.validate` or `rule.normalize` function of a schema being incorrectly written, causing an infinite loop.');
    }

    // Otherwise, iterate again.
    iterate(c, n);
  }

  iterate(change, node);
}

/**
 * Export.
 *
 * @type {Object}
 */

var Changes$7 = _extends({}, Changes, Changes$1, Changes$2, Changes$3, Changes$4, Changes$5, Changes$6);

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$3 = __WEBPACK_IMPORTED_MODULE_5_debug___default()('slate:operation:apply');

/**
 * Applying functions.
 *
 * @type {Object}
 */

var APPLIERS = {
  /**
   * Add mark to text at `offset` and `length` in node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  add_mark: function add_mark(value, operation) {
    var path = operation.path,
        offset = operation.offset,
        length = operation.length,
        mark = operation.mark;
    var _value = value,
        document = _value.document;

    var node = document.assertPath(path);
    node = node.addMark(offset, length, mark);
    document = document.updateNode(node);
    value = value.set('document', document);
    return value;
  },


  /**
   * Insert a `node` at `index` in a node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  insert_node: function insert_node(value, operation) {
    var path = operation.path,
        node = operation.node;

    var index = path[path.length - 1];
    var rest = path.slice(0, -1);
    var _value2 = value,
        document = _value2.document;

    var parent = document.assertPath(rest);
    parent = parent.insertNode(index, node);
    document = document.updateNode(parent);
    value = value.set('document', document);
    return value;
  },


  /**
   * Insert `text` at `offset` in node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  insert_text: function insert_text(value, operation) {
    var path = operation.path,
        offset = operation.offset,
        text = operation.text,
        marks = operation.marks;
    var _value3 = value,
        document = _value3.document,
        selection = _value3.selection;
    var _selection = selection,
        anchorKey = _selection.anchorKey,
        focusKey = _selection.focusKey,
        anchorOffset = _selection.anchorOffset,
        focusOffset = _selection.focusOffset;

    var node = document.assertPath(path);

    // Update the document
    node = node.insertText(offset, text, marks);
    document = document.updateNode(node);

    // Update the selection
    if (anchorKey == node.key && anchorOffset >= offset) {
      selection = selection.moveAnchor(text.length);
    }
    if (focusKey == node.key && focusOffset >= offset) {
      selection = selection.moveFocus(text.length);
    }

    value = value.set('document', document).set('selection', selection);
    return value;
  },


  /**
   * Merge a node at `path` with the previous node.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  merge_node: function merge_node(value, operation) {
    var path = operation.path;

    var withPath = path.slice(0, path.length - 1).concat([path[path.length - 1] - 1]);
    var _value4 = value,
        document = _value4.document,
        selection = _value4.selection;

    var one = document.assertPath(withPath);
    var two = document.assertPath(path);
    var parent = document.getParent(one.key);
    var oneIndex = parent.nodes.indexOf(one);
    var twoIndex = parent.nodes.indexOf(two);

    // Perform the merge in the document.
    parent = parent.mergeNode(oneIndex, twoIndex);
    document = document.updateNode(parent);

    // If the nodes are text nodes and the selection is inside the second node
    // update it to refer to the first node instead.
    if (one.object == 'text') {
      var _selection2 = selection,
          anchorKey = _selection2.anchorKey,
          anchorOffset = _selection2.anchorOffset,
          focusKey = _selection2.focusKey,
          focusOffset = _selection2.focusOffset;

      var normalize = false;

      if (anchorKey == two.key) {
        selection = selection.moveAnchorTo(one.key, one.text.length + anchorOffset);
        normalize = true;
      }

      if (focusKey == two.key) {
        selection = selection.moveFocusTo(one.key, one.text.length + focusOffset);
        normalize = true;
      }

      if (normalize) {
        selection = selection.normalize(document);
      }
    }

    // Update the document and selection.
    value = value.set('document', document).set('selection', selection);
    return value;
  },


  /**
   * Move a node by `path` to `newPath`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  move_node: function move_node(value, operation) {
    var path = operation.path,
        newPath = operation.newPath;

    var newIndex = newPath[newPath.length - 1];
    var newParentPath = newPath.slice(0, -1);
    var oldParentPath = path.slice(0, -1);
    var oldIndex = path[path.length - 1];
    var _value5 = value,
        document = _value5.document;

    var node = document.assertPath(path);

    // Remove the node from its current parent.
    var parent = document.getParent(node.key);
    parent = parent.removeNode(oldIndex);
    document = document.updateNode(parent);

    // Find the new target...
    var target = void 0;

    // If the old path and the rest of the new path are the same, then the new
    // target is the old parent.
    if (oldParentPath.every(function (x, i) {
      return x === newParentPath[i];
    }) && oldParentPath.length === newParentPath.length) {
      target = parent;
    } else if (oldParentPath.every(function (x, i) {
      return x === newParentPath[i];
    }) && oldIndex < newParentPath[oldParentPath.length]) {
      // Otherwise, if the old path removal resulted in the new path being no longer
      // correct, we need to decrement the new path at the old path's last index.
      newParentPath[oldParentPath.length]--;
      target = document.assertPath(newParentPath);
    } else {
      // Otherwise, we can just grab the target normally...
      target = document.assertPath(newParentPath);
    }

    // Insert the new node to its new parent.
    target = target.insertNode(newIndex, node);
    document = document.updateNode(target);
    value = value.set('document', document);
    return value;
  },


  /**
   * Remove mark from text at `offset` and `length` in node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  remove_mark: function remove_mark(value, operation) {
    var path = operation.path,
        offset = operation.offset,
        length = operation.length,
        mark = operation.mark;
    var _value6 = value,
        document = _value6.document;

    var node = document.assertPath(path);
    node = node.removeMark(offset, length, mark);
    document = document.updateNode(node);
    value = value.set('document', document);
    return value;
  },


  /**
   * Remove a node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  remove_node: function remove_node(value, operation) {
    var path = operation.path;
    var _value7 = value,
        document = _value7.document,
        selection = _value7.selection;
    var _selection3 = selection,
        startKey = _selection3.startKey,
        endKey = _selection3.endKey;

    var node = document.assertPath(path);

    // If the selection is set, check to see if it needs to be updated.
    if (selection.isSet) {
      var hasStartNode = node.hasNode(startKey);
      var hasEndNode = node.hasNode(endKey);
      var first = node.object == 'text' ? node : node.getFirstText() || node;
      var last = node.object == 'text' ? node : node.getLastText() || node;
      var prev = document.getPreviousText(first.key);
      var next = document.getNextText(last.key);

      // If the start point was in this node, update it to be just before/after.
      if (hasStartNode) {
        if (prev) {
          selection = selection.moveStartTo(prev.key, prev.text.length);
        } else if (next) {
          selection = selection.moveStartTo(next.key, 0);
        } else {
          selection = selection.deselect();
        }
      }

      // If the end point was in this node, update it to be just before/after.
      if (selection.isSet && hasEndNode) {
        if (prev) {
          selection = selection.moveEndTo(prev.key, prev.text.length);
        } else if (next) {
          selection = selection.moveEndTo(next.key, 0);
        } else {
          selection = selection.deselect();
        }
      }

      // If the selection wasn't deselected, normalize it.
      if (selection.isSet) {
        selection = selection.normalize(document);
      }
    }

    // Remove the node from the document.
    var parent = document.getParent(node.key);
    var index = parent.nodes.indexOf(node);
    parent = parent.removeNode(index);
    document = document.updateNode(parent);

    // Update the document and selection.
    value = value.set('document', document).set('selection', selection);
    return value;
  },


  /**
   * Remove `text` at `offset` in node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  remove_text: function remove_text(value, operation) {
    var path = operation.path,
        offset = operation.offset,
        text = operation.text;
    var length = text.length;

    var rangeOffset = offset + length;
    var _value8 = value,
        document = _value8.document,
        selection = _value8.selection;
    var _selection4 = selection,
        anchorKey = _selection4.anchorKey,
        focusKey = _selection4.focusKey,
        anchorOffset = _selection4.anchorOffset,
        focusOffset = _selection4.focusOffset;

    var node = document.assertPath(path);

    if (anchorKey == node.key) {
      if (anchorOffset >= rangeOffset) {
        selection = selection.moveAnchor(-length);
      } else if (anchorOffset > offset) {
        selection = selection.moveAnchorTo(anchorKey, offset);
      }
    }

    if (focusKey == node.key) {
      if (focusOffset >= rangeOffset) {
        selection = selection.moveFocus(-length);
      } else if (focusOffset > offset) {
        selection = selection.moveFocusTo(focusKey, offset);
      }
    }

    node = node.removeText(offset, length);
    document = document.updateNode(node);
    value = value.set('document', document).set('selection', selection);
    return value;
  },


  /**
   * Set `properties` on mark on text at `offset` and `length` in node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  set_mark: function set_mark(value, operation) {
    var path = operation.path,
        offset = operation.offset,
        length = operation.length,
        mark = operation.mark,
        properties = operation.properties;
    var _value9 = value,
        document = _value9.document;

    var node = document.assertPath(path);
    node = node.updateMark(offset, length, mark, properties);
    document = document.updateNode(node);
    value = value.set('document', document);
    return value;
  },


  /**
   * Set `properties` on a node by `path`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  set_node: function set_node(value, operation) {
    var path = operation.path,
        properties = operation.properties;
    var _value10 = value,
        document = _value10.document;

    var node = document.assertPath(path);
    node = node.merge(properties);
    document = document.updateNode(node);
    value = value.set('document', document);
    return value;
  },


  /**
   * Set `properties` on the selection.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  set_selection: function set_selection(value, operation) {
    var properties = operation.properties;
    var anchorPath = properties.anchorPath,
        focusPath = properties.focusPath,
        props = objectWithoutProperties(properties, ['anchorPath', 'focusPath']);
    var _value11 = value,
        document = _value11.document,
        selection = _value11.selection;


    if (anchorPath !== undefined) {
      props.anchorKey = anchorPath === null ? null : document.assertPath(anchorPath).key;
    }

    if (focusPath !== undefined) {
      props.focusKey = focusPath === null ? null : document.assertPath(focusPath).key;
    }

    selection = selection.merge(props);
    selection = selection.normalize(document);
    value = value.set('selection', selection);
    return value;
  },


  /**
   * Set `properties` on `value`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  set_value: function set_value(value, operation) {
    var properties = operation.properties;

    value = value.merge(properties);
    return value;
  },


  /**
   * Split a node by `path` at `offset`.
   *
   * @param {Value} value
   * @param {Operation} operation
   * @return {Value}
   */

  split_node: function split_node(value, operation) {
    var path = operation.path,
        position = operation.position,
        properties = operation.properties;
    var _value12 = value,
        document = _value12.document,
        selection = _value12.selection;

    // Calculate a few things...

    var node = document.assertPath(path);
    var parent = document.getParent(node.key);
    var index = parent.nodes.indexOf(node);

    // Split the node by its parent.
    parent = parent.splitNode(index, position);
    if (properties) {
      var splitNode = parent.nodes.get(index + 1);
      if (splitNode.object !== 'text') {
        parent = parent.updateNode(splitNode.merge(properties));
      }
    }
    document = document.updateNode(parent);

    // Determine whether we need to update the selection...
    var _selection5 = selection,
        startKey = _selection5.startKey,
        endKey = _selection5.endKey,
        startOffset = _selection5.startOffset,
        endOffset = _selection5.endOffset;

    var next = document.getNextText(node.key);
    var normalize = false;

    // If the start point is after or equal to the split, update it.
    if (node.key == startKey && position <= startOffset) {
      selection = selection.moveStartTo(next.key, startOffset - position);
      normalize = true;
    }

    // If the end point is after or equal to the split, update it.
    if (node.key == endKey && position <= endOffset) {
      selection = selection.moveEndTo(next.key, endOffset - position);
      normalize = true;
    }

    // Normalize the selection if we changed it, since the methods we use might
    // leave it in a non-normalized value.
    if (normalize) {
      selection = selection.normalize(document);
    }

    // Return the updated value.
    value = value.set('document', document).set('selection', selection);
    return value;
  }
};

/**
 * Apply an `operation` to a `value`.
 *
 * @param {Value} value
 * @param {Object|Operation} operation
 * @return {Value} value
 */

function applyOperation(value, operation) {
  operation = Operation.create(operation);
  var _operation = operation,
      type = _operation.type;

  var apply = APPLIERS[type];

  if (!apply) {
    throw new Error('Unknown operation type: "' + type + '".');
  }

  debug$3(type, operation);
  value = apply(value, operation);
  return value;
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$4 = __WEBPACK_IMPORTED_MODULE_5_debug___default()('slate:change');

/**
 * Change.
 *
 * @type {Change}
 */

var Change = function () {
  createClass(Change, null, [{
    key: 'isChange',

    /**
     * Check if `any` is a `Change`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

    value: function isChange(any) {
      return !!(any && any[MODEL_TYPES.CHANGE]);
    }

    /**
     * Create a new `Change` with `attrs`.
     *
     * @param {Object} attrs
     *   @property {Value} value
     */

  }]);

  function Change(attrs) {
    classCallCheck(this, Change);
    var value = attrs.value;

    this.value = value;
    this.operations = new __WEBPACK_IMPORTED_MODULE_1_immutable__["List"]();
    this.flags = _extends({
      normalize: true
    }, __WEBPACK_IMPORTED_MODULE_9_lodash_pick___default()(attrs, ['merge', 'save', 'normalize']));
  }

  /**
   * Object.
   *
   * @return {String}
   */

  createClass(Change, [{
    key: 'applyOperation',


    /**
     * Apply an `operation` to the current value, saving the operation to the
     * history if needed.
     *
     * @param {Operation|Object} operation
     * @param {Object} options
     * @return {Change}
     */

    value: function applyOperation$$1(operation) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var operations = this.operations,
          flags = this.flags;
      var value = this.value;
      var _value = value,
          history = _value.history;

      // Add in the current `value` in case the operation was serialized.

      if (__WEBPACK_IMPORTED_MODULE_0_is_plain_object___default()(operation)) {
        operation = _extends({}, operation, { value: value });
      }

      operation = Operation.create(operation);

      // Default options to the change-level flags, this allows for setting
      // specific options for all of the operations of a given change.
      options = _extends({}, flags, options);

      // Derive the default option values.
      var _options = options,
          _options$merge = _options.merge,
          merge = _options$merge === undefined ? operations.size == 0 ? null : true : _options$merge,
          _options$save = _options.save,
          save = _options$save === undefined ? true : _options$save,
          _options$skip = _options.skip,
          skip = _options$skip === undefined ? null : _options$skip;

      // Apply the operation to the value.

      debug$4('apply', { operation: operation, save: save, merge: merge });
      value = applyOperation(value, operation);

      // If needed, save the operation to the history.
      if (history && save) {
        history = history.save(operation, { merge: merge, skip: skip });
        value = value.set('history', history);
      }

      // Update the mutable change object.
      this.value = value;
      this.operations = operations.push(operation);
      return this;
    }

    /**
     * Apply a series of `operations` to the current value.
     *
     * @param {Array|List} operations
     * @param {Object} options
     * @return {Change}
     */

  }, {
    key: 'applyOperations',
    value: function applyOperations(operations, options) {
      var _this = this;

      operations.forEach(function (op) {
        return _this.applyOperation(op, options);
      });
      return this;
    }

    /**
     * Call a change `fn` with arguments.
     *
     * @param {Function} fn
     * @param {Mixed} ...args
     * @return {Change}
     */

  }, {
    key: 'call',
    value: function call(fn) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      fn.apply(undefined, [this].concat(args));
      return this;
    }

    /**
     * Applies a series of change mutations and defers normalization until the end.
     *
     * @param {Function} customChange - function that accepts a change object and executes change operations
     * @return {Change}
     */

  }, {
    key: 'withoutNormalization',
    value: function withoutNormalization(customChange) {
      var original = this.flags.normalize;
      this.setOperationFlag('normalize', false);
      try {
        customChange(this);
        // if the change function worked then run normalization
        this.normalizeDocument();
      } finally {
        // restore the flag to whatever it was
        this.setOperationFlag('normalize', original);
      }
      return this;
    }

    /**
     * Set an operation flag by `key` to `value`.
     *
     * @param {String} key
     * @param {Any} value
     * @return {Change}
     */

  }, {
    key: 'setOperationFlag',
    value: function setOperationFlag(key, value) {
      this.flags[key] = value;
      return this;
    }

    /**
     * Get the `value` of the specified flag by its `key`. Optionally accepts an `options`
     * object with override flags.
     *
     * @param {String} key
     * @param {Object} options
     * @return {Change}
     */

  }, {
    key: 'getFlag',
    value: function getFlag(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return options[key] !== undefined ? options[key] : this.flags[key];
    }

    /**
     * Unset an operation flag by `key`.
     *
     * @param {String} key
     * @return {Change}
     */

  }, {
    key: 'unsetOperationFlag',
    value: function unsetOperationFlag(key) {
      delete this.flags[key];
      return this;
    }
  }, {
    key: 'object',
    get: function get$$1() {
      return 'change';
    }
  }, {
    key: 'kind',
    get: function get$$1() {
      __WEBPACK_IMPORTED_MODULE_2_slate_dev_logger__["a" /* default */].deprecate('slate@0.32.0', 'The `kind` property of Slate objects has been renamed to `object`.');
      return this.object;
    }
  }]);
  return Change;
}();

/**
 * Attach a pseudo-symbol for type checking.
 */

Change.prototype[MODEL_TYPES.CHANGE] = true;

/**
 * Add a change method for each of the changes.
 */

Object.keys(Changes$7).forEach(function (type) {
  Change.prototype[type] = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    debug$4(type, { args: args });
    this.call.apply(this, [Changes$7[type]].concat(args));
    return this;
  };
});

/**
 * Export.
 *
 * @type {Object}
 */

var Operations = {
  apply: applyOperation,
  invert: invertOperation
};

var index = {
  Block: Block,
  Changes: Changes$7,
  Character: Character,
  Data: Data,
  Document: Document,
  History: History,
  Inline: Inline,
  Leaf: Leaf,
  Mark: Mark,
  Node: Node,
  Operation: Operation,
  Operations: Operations,
  Range: Range,
  Schema: Schema,
  Stack: Stack$1,
  Text: Text,
  Value: Value,
  resetKeyGenerator: resetKeyGenerator,
  setKeyGenerator: setKeyGenerator,
  resetMemoization: resetMemoization,
  useMemoization: useMemoization
};

/* unused harmony default export */ var _unused_webpack_default_export = (index);

//# sourceMappingURL=slate.es.js.map


/***/ }),

/***/ 1574:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(2679);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var global$1 = typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {}

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}
function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

/* eslint-disable no-console */

/**
 * Is in development?
 *
 * @type {Boolean}
 */

var IS_DEV = typeof process !== 'undefined' && process.env && "development" !== 'production';

/**
 * Has console?
 *
 * @type {Boolean}
 */

var HAS_CONSOLE = typeof console != 'undefined' && typeof console.log == 'function' && typeof console.warn == 'function' && typeof console.error == 'function';

/**
 * Log a `message` at `level`.
 *
 * @param {String} level
 * @param {String} message
 * @param {Any} ...args
 */

function log(level, message) {
  if (!IS_DEV) {
    return;
  }

  if (HAS_CONSOLE) {
    var _console;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    (_console = console)[level].apply(_console, [message].concat(args));
  }
}

/**
 * Log an error `message`.
 *
 * @param {String} message
 * @param {Any} ...args
 */

function error(message) {
  if (HAS_CONSOLE) {
    var _console2;

    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).error.apply(_console2, [message].concat(args));
  }
}

/**
 * Log a warning `message` in development only.
 *
 * @param {String} message
 * @param {Any} ...args
 */

function warn(message) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  log.apply(undefined, ['warn', 'Warning: ' + message].concat(args));
}

/**
 * Log a deprecation warning `message`, with helpful `version` number in
 * development only.
 *
 * @param {String} version
 * @param {String} message
 * @param {Any} ...args
 */

function deprecate(version$$1, message) {
  for (var _len4 = arguments.length, args = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
    args[_key4 - 2] = arguments[_key4];
  }

  log.apply(undefined, ['warn', 'Deprecation (' + version$$1 + '): ' + message].concat(args));
}

/**
 * Export.
 *
 * @type {Function}
 */

var index = {
  deprecate: deprecate,
  error: error,
  warn: warn
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=slate-dev-logger.es.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(19)))

/***/ }),

/***/ 1576:
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(2691),
    overRest = __webpack_require__(641),
    setToString = __webpack_require__(271);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 1577:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(631),
    getPrototype = __webpack_require__(269),
    getSymbols = __webpack_require__(632),
    stubArray = __webpack_require__(644);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 1578:
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(643),
    getSymbolsIn = __webpack_require__(1577),
    keysIn = __webpack_require__(267);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 2676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneFragment", function() { return cloneFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMRange", function() { return findDOMRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNode", function() { return findNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRange", function() { return findRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventRange", function() { return getEventRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTransfer", function() { return getEventTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEventTransfer", function() { return setEventTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterPlugin", function() { return AfterPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforePlugin", function() { return BeforePlugin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_is_in_browser__ = __webpack_require__(2677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_hotkey__ = __webpack_require__(2678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_is_hotkey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_debug__ = __webpack_require__(1574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_debug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__ = __webpack_require__(2681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_immutable_proptypes__ = __webpack_require__(2715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_immutable_proptypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_immutable_proptypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slate_dev_logger__ = __webpack_require__(1575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slate__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_window__ = __webpack_require__(2716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_get_window___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_get_window__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_selection_is_backward__ = __webpack_require__(2719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_selection_is_backward___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_selection_is_backward__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_throttle__ = __webpack_require__(2720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_throttle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__ = __webpack_require__(2721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_slate_plain_serializer__ = __webpack_require__(2723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_dom__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_portal__ = __webpack_require__(2724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_react_portal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_react_portal__);

















/**
 * Event handlers used by Slate plugins.
 *
 * @type {Array}
 */

var EVENT_HANDLERS = ['onBeforeInput', 'onBlur', 'onClick', 'onCompositionEnd', 'onCompositionStart', 'onCopy', 'onCut', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onInput', 'onFocus', 'onKeyDown', 'onKeyUp', 'onPaste', 'onSelect'];

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Props that can be defined by plugins.
 *
 * @type {Array}
 */

var PLUGIN_PROPS = [].concat(toConsumableArray(EVENT_HANDLERS), ['decorateNode', 'onChange', 'renderMark', 'renderNode', 'renderPlaceholder', 'renderPortal', 'schema', 'validateNode']);

/**
 * Browser matching rules.
 *
 * @type {Array}
 */

var BROWSER_RULES = [['edge', /Edge\/([0-9\._]+)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['android', /Android\s([0-9\.]+)/], ['safari', /Version\/([0-9\._]+).*Safari/]];

/**
 * DOM event matching rules.
 *
 * @type {Array}
 */

var EVENT_RULES = [['beforeinput', function (el) {
  return 'onbeforeinput' in el;
}]];

/**
 * Operating system matching rules.
 *
 * @type {Array}
 */

var OS_RULES = [['ios', /os ([\.\_\d]+) like mac os/i], // must be before the macos rule
['macos', /mac os x/i], ['android', /android/i], ['firefoxos', /mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/i], ['windows', /windows\s*(?:nt)?\s*([\.\_\d]+)/i]];

/**
 * Define variables to store the result.
 */

var BROWSER = void 0;
var EVENTS = {};
var OS = void 0;

/**
 * Run the matchers when in browser.
 */

if (__WEBPACK_IMPORTED_MODULE_0_is_in_browser__["a" /* default */]) {
  var userAgent = window.navigator.userAgent;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {

    for (var _iterator = BROWSER_RULES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 2);

      var name = _ref2[0];
      var regexp = _ref2[1];

      if (regexp.test(userAgent)) {
        BROWSER = name;
        break;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = OS_RULES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ref3 = _step2.value;

      var _ref4 = slicedToArray(_ref3, 2);

      var _name = _ref4[0];
      var _regexp = _ref4[1];

      if (_regexp.test(userAgent)) {
        OS = _name;
        break;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var testEl = window.document.createElement('div');
  testEl.contentEditable = true;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = EVENT_RULES[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref5 = _step3.value;

      var _ref6 = slicedToArray(_ref5, 2);

      var _name2 = _ref6[0];
      var testFn = _ref6[1];

      EVENTS[_name2] = testFn(testEl);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

/**
 * Export.
 *
 * @type {Object}
 */

var IS_CHROME = BROWSER === 'chrome';
var IS_FIREFOX = BROWSER === 'firefox';
var IS_SAFARI = BROWSER === 'safari';
var IS_IE = BROWSER === 'ie';
var IS_EDGE = BROWSER === 'edge';

var IS_ANDROID = OS === 'android';
var IS_IOS = OS === 'ios';
var IS_MAC = OS === 'macos';


var SUPPORTED_EVENTS = EVENTS;

/**
 * Is Apple?
 *
 * @type {Boolean}
 */

var IS_APPLE = IS_IOS || IS_MAC;

/**
 * Hotkeys.
 *
 * @type {Function}
 */

var BOLD = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('mod+b');
var ITALIC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('mod+i');

var ENTER = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('enter');
var SHIFT_ENTER = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+enter');
var SPLIT_BLOCK = function SPLIT_BLOCK(e) {
  return ENTER(e) || SHIFT_ENTER(e);
};

var BACKSPACE = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('backspace');
var SHIFT_BACKSPACE = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+backspace');
var DELETE = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('delete');
var SHIFT_DELETE = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+delete');
var DELETE_BACKWARD = function DELETE_BACKWARD(e) {
  return BACKSPACE(e) || SHIFT_BACKSPACE(e);
};
var DELETE_FORWARD = function DELETE_FORWARD(e) {
  return DELETE(e) || SHIFT_DELETE(e);
};

var DELETE_CHAR_BACKWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+h');
var DELETE_CHAR_FORWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+d');
var DELETE_CHAR_BACKWARD = function DELETE_CHAR_BACKWARD(e) {
  return DELETE_BACKWARD(e) || IS_APPLE && DELETE_CHAR_BACKWARD_MAC(e);
};
var DELETE_CHAR_FORWARD = function DELETE_CHAR_FORWARD(e) {
  return DELETE_FORWARD(e) || IS_APPLE && DELETE_CHAR_FORWARD_MAC(e);
};

var DELETE_LINE_BACKWARD_MAC = function DELETE_LINE_BACKWARD_MAC(e) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('cmd+shift+backspace', e) || Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('cmd+backspace', e);
};
var DELETE_LINE_FORWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+k');
var DELETE_LINE_BACKWARD = function DELETE_LINE_BACKWARD(e) {
  return IS_APPLE && DELETE_LINE_BACKWARD_MAC(e);
};
var DELETE_LINE_FORWARD = function DELETE_LINE_FORWARD(e) {
  return IS_APPLE && DELETE_LINE_FORWARD_MAC(e);
};

var DELETE_WORD_BACKWARD_MAC = function DELETE_WORD_BACKWARD_MAC(e) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+option+backspace', e) || Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+backspace', e);
};
var DELETE_WORD_BACKWARD_PC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+backspace');
var DELETE_WORD_FORWARD_MAC = function DELETE_WORD_FORWARD_MAC(e) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+option+delete', e) || Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+delete', e);
};
var DELETE_WORD_FORWARD_PC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+delete');
var DELETE_WORD_BACKWARD = function DELETE_WORD_BACKWARD(e) {
  return IS_APPLE ? DELETE_WORD_BACKWARD_MAC(e) : DELETE_WORD_BACKWARD_PC(e);
};
var DELETE_WORD_FORWARD = function DELETE_WORD_FORWARD(e) {
  return IS_APPLE ? DELETE_WORD_FORWARD_MAC(e) : DELETE_WORD_FORWARD_PC(e);
};

var RIGHT_ARROW = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('right');
var LEFT_ARROW = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('left');
var COLLAPSE_CHAR_FORWARD = function COLLAPSE_CHAR_FORWARD(e) {
  return RIGHT_ARROW(e) && !EXTEND_CHAR_FORWARD(e);
};
var COLLAPSE_CHAR_BACKWARD = function COLLAPSE_CHAR_BACKWARD(e) {
  return LEFT_ARROW(e) && !EXTEND_CHAR_BACKWARD(e);
};

var COLLAPSE_LINE_BACKWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+up');
var COLLAPSE_LINE_FORWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+down');
var COLLAPSE_LINE_BACKWARD = function COLLAPSE_LINE_BACKWARD(e) {
  return IS_APPLE && COLLAPSE_LINE_BACKWARD_MAC(e);
};
var COLLAPSE_LINE_FORWARD = function COLLAPSE_LINE_FORWARD(e) {
  return IS_APPLE && COLLAPSE_LINE_FORWARD_MAC(e);
};

var EXTEND_CHAR_FORWARD = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+right');
var EXTEND_CHAR_BACKWARD = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('shift+left');

var EXTEND_LINE_BACKWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+shift+up');
var EXTEND_LINE_FORWARD_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('option+shift+down');
var EXTEND_LINE_BACKWARD = function EXTEND_LINE_BACKWARD(e) {
  return IS_APPLE && EXTEND_LINE_BACKWARD_MAC(e);
};
var EXTEND_LINE_FORWARD = function EXTEND_LINE_FORWARD(e) {
  return IS_APPLE && EXTEND_LINE_FORWARD_MAC(e);
};

var UNDO = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('mod+z');
var REDO_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('mod+shift+z');
var REDO_PC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('mod+y');
var REDO = function REDO(e) {
  return IS_APPLE ? REDO_MAC(e) : REDO_PC(e);
};

var TRANSPOSE_CHARACTER_MAC = Object(__WEBPACK_IMPORTED_MODULE_1_is_hotkey__["isKeyHotkey"])('ctrl+t');
var TRANSPOSE_CHARACTER = function TRANSPOSE_CHARACTER(e) {
  return IS_APPLE && TRANSPOSE_CHARACTER_MAC(e);
};

var CONTENTEDITABLE = function CONTENTEDITABLE(e) {
  return BOLD(e) || DELETE_CHAR_BACKWARD(e) || DELETE_CHAR_FORWARD(e) || DELETE_LINE_BACKWARD(e) || DELETE_LINE_FORWARD(e) || DELETE_WORD_BACKWARD(e) || DELETE_WORD_FORWARD(e) || ITALIC(e) || REDO(e) || SPLIT_BLOCK(e) || TRANSPOSE_CHARACTER(e) || UNDO(e);
};

var COMPOSING = function COMPOSING(e) {
  return e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == 'ArrowUp' || e.key == 'Backspace' || e.key == 'Enter';
};

/**
 * Export.
 *
 * @type {Object}
 */

var HOTKEYS = {
  BOLD: BOLD,
  COLLAPSE_LINE_BACKWARD: COLLAPSE_LINE_BACKWARD,
  COLLAPSE_LINE_FORWARD: COLLAPSE_LINE_FORWARD,
  COLLAPSE_CHAR_FORWARD: COLLAPSE_CHAR_FORWARD,
  COLLAPSE_CHAR_BACKWARD: COLLAPSE_CHAR_BACKWARD,
  COMPOSING: COMPOSING,
  CONTENTEDITABLE: CONTENTEDITABLE,
  DELETE_CHAR_BACKWARD: DELETE_CHAR_BACKWARD,
  DELETE_CHAR_FORWARD: DELETE_CHAR_FORWARD,
  DELETE_LINE_BACKWARD: DELETE_LINE_BACKWARD,
  DELETE_LINE_FORWARD: DELETE_LINE_FORWARD,
  DELETE_WORD_BACKWARD: DELETE_WORD_BACKWARD,
  DELETE_WORD_FORWARD: DELETE_WORD_FORWARD,
  EXTEND_LINE_BACKWARD: EXTEND_LINE_BACKWARD,
  EXTEND_LINE_FORWARD: EXTEND_LINE_FORWARD,
  EXTEND_CHAR_FORWARD: EXTEND_CHAR_FORWARD,
  EXTEND_CHAR_BACKWARD: EXTEND_CHAR_BACKWARD,
  ITALIC: ITALIC,
  REDO: REDO,
  SPLIT_BLOCK: SPLIT_BLOCK,
  UNDO: UNDO
};

/**
 * Offset key parser regex.
 *
 * @type {RegExp}
 */

var PARSER = /^([\w-]+)(?::(\d+))?$/;

/**
 * Parse an offset key `string`.
 *
 * @param {String} string
 * @return {Object}
 */

function parse(string) {
  var matches = PARSER.exec(string);

  if (!matches) {
    throw new Error("Invalid offset key string \"" + string + "\".");
  }

  var _matches = slicedToArray(matches, 3),
      original = _matches[0],
      key = _matches[1],
      index = _matches[2]; // eslint-disable-line no-unused-vars


  return {
    key: key,
    index: parseInt(index, 10)
  };
}

/**
 * Stringify an offset key `object`.
 *
 * @param {Object} object
 *   @property {String} key
 *   @property {Number} index
 * @return {String}
 */

function stringify(object) {
  return object.key + ":" + object.index;
}

/**
 * Export.
 *
 * @type {Object}
 */

var OffsetKey = {
  parse: parse,
  stringify: stringify
};

/**
 * Debugger.
 *
 * @type {Function}
 */

var debug = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:leaves');

/**
 * Leaf.
 *
 * @type {Component}
 */

var Leaf = function (_React$Component) {
  inherits(Leaf, _React$Component);

  function Leaf() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Leaf);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Leaf.__proto__ || Object.getPrototypeOf(Leaf)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  createClass(Leaf, [{
    key: 'shouldComponentUpdate',


    /**
     * Should component update?
     *
     * @param {Object} props
     * @return {Boolean}
     */

    value: function shouldComponentUpdate(props) {
      // If any of the regular properties have changed, re-render.
      if (props.index != this.props.index || props.marks != this.props.marks || props.text != this.props.text || props.parent != this.props.parent) {
        return true;
      }

      // Otherwise, don't update.
      return false;
    }

    /**
     * Render the leaf.
     *
     * @return {Element}
     */

  }, {
    key: 'render',
    value: function render() {
      this.debug('render', this);

      var _props = this.props,
          node = _props.node,
          index = _props.index;

      var offsetKey = OffsetKey.stringify({
        key: node.key,
        index: index
      });

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'span',
        { 'data-offset-key': offsetKey },
        this.renderMarks()
      );
    }

    /**
     * Render all of the leaf's mark components.
     *
     * @return {Element}
     */

  }, {
    key: 'renderMarks',
    value: function renderMarks() {
      var _props2 = this.props,
          marks = _props2.marks,
          node = _props2.node,
          offset = _props2.offset,
          text = _props2.text,
          editor = _props2.editor;
      var stack = editor.stack;

      var leaf = this.renderText();

      return marks.reduce(function (children, mark) {
        var props = { editor: editor, mark: mark, marks: marks, node: node, offset: offset, text: text, children: children };
        var element = stack.find('renderMark', props);
        return element || children;
      }, leaf);
    }

    /**
     * Render the text content of the leaf, accounting for browsers.
     *
     * @return {Element}
     */

  }, {
    key: 'renderText',
    value: function renderText() {
      var _props3 = this.props,
          block = _props3.block,
          node = _props3.node,
          parent = _props3.parent,
          text = _props3.text,
          index = _props3.index,
          leaves = _props3.leaves;

      // COMPAT: Render text inside void nodes with a zero-width space.
      // So the node can contain selection but the text is not visible.

      if (parent.isVoid) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'z' },
          '\u200B'
        );
      }

      // COMPAT: If this is the last text node in an empty block, render a zero-
      // width space that will convert into a line break when copying and pasting
      // to support expected plain text.
      if (text === '' && parent.object === 'block' && parent.text === '' && parent.nodes.size === 1) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'n' },
          '\u200B'
        );
      }

      // COMPAT: If the text is empty, it's because it's on the edge of an inline
      // void node, so we render a zero-width space so that the selection can be
      // inserted next to it still.
      if (text === '') {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'z' },
          '\u200B'
        );
      }

      // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
      // so we need to add an extra trailing new lines to prevent that.
      var lastText = block.getLastText();
      var lastChar = text.charAt(text.length - 1);
      var isLastText = node === lastText;
      var isLastLeaf = index === leaves.size - 1;
      if (isLastText && isLastLeaf && lastChar === '\n') return text + '\n';

      // Otherwise, just return the text.
      return text;
    }
  }]);
  return Leaf;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Leaf.propTypes = {
  block: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].block.isRequired,
  editor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  index: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number.isRequired,
  leaves: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].leaves.isRequired,
  marks: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].marks.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  offset: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number.isRequired,
  parent: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  text: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string.isRequired };

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    debug.apply(undefined, [message, _this2.props.node.key + '-' + _this2.props.index].concat(args));
  };
};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$1 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:node');

/**
 * Text.
 *
 * @type {Component}
 */

var Text$1 = function (_React$Component) {
  inherits(Text$$1, _React$Component);

  function Text$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Text$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Text$$1.__proto__ || Object.getPrototypeOf(Text$$1)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$1.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Default prop types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  /**
   * Should the node update?
   *
   * @param {Object} nextProps
   * @param {Object} value
   * @return {Boolean}
   */

  createClass(Text$$1, [{
    key: 'render',


    /**
     * Render.
     *
     * @return {Element}
     */

    value: function render() {
      var _this2 = this;

      this.debug('render', this);

      var _props = this.props,
          decorations = _props.decorations,
          editor = _props.editor,
          node = _props.node,
          style = _props.style;
      var value = editor.value;
      var document = value.document;
      var key = node.key;


      var decs = decorations.filter(function (d) {
        var startKey = d.startKey,
            endKey = d.endKey;

        if (startKey == key || endKey == key) return true;
        var startsBefore = document.areDescendantsSorted(startKey, key);
        var endsAfter = document.areDescendantsSorted(key, endKey);
        return startsBefore && endsAfter;
      });

      var leaves = node.getLeaves(decs);
      var offset = 0;

      var children = leaves.map(function (leaf, i) {
        var child = _this2.renderLeaf(leaves, leaf, i, offset);
        offset += leaf.text.length;
        return child;
      });

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'span',
        { 'data-key': key, style: style },
        children
      );
    }

    /**
     * Render a single leaf given a `leaf` and `offset`.
     *
     * @param {List<Leaf>} leaves
     * @param {Leaf} leaf
     * @param {Number} index
     * @param {Number} offset
     * @return {Element} leaf
     */

  }]);
  return Text$$1;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Text$1.propTypes = {
  block: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].block,
  decorations: __WEBPACK_IMPORTED_MODULE_6_react_immutable_proptypes___default.a.list.isRequired,
  editor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  parent: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object };
Text$1.defaultProps = {
  style: null };

var _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this3.props.node;
    var key = node.key;

    debug$1.apply(undefined, [message, key + ' (text)'].concat(args));
  };

  this.shouldComponentUpdate = function (nextProps) {
    var props = _this3.props;

    var n = nextProps;
    var p = props;

    // If the node has changed, update. PERF: There are cases where it will have
    // changed, but it's properties will be exactly the same (eg. copy-paste)
    // which this won't catch. But that's rare and not a drag on performance, so
    // for simplicity we just let them through.
    if (n.node != p.node) return true;

    // If the node parent is a block node, and it was the last child of the
    // block, re-render to cleanup extra `\n`.
    if (n.parent.object == 'block') {
      var pLast = p.parent.nodes.last();
      var nLast = n.parent.nodes.last();
      if (p.node == pLast && n.node != nLast) return true;
    }

    // Re-render if the current decorations have changed.
    if (!n.decorations.equals(p.decorations)) return true;

    // Otherwise, don't update.
    return false;
  };

  this.renderLeaf = function (leaves, leaf, index, offset) {
    var _props2 = _this3.props,
        block = _props2.block,
        node = _props2.node,
        parent = _props2.parent,
        editor = _props2.editor;
    var text = leaf.text,
        marks = leaf.marks;


    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Leaf, {
      key: node.key + '-' + index,
      block: block,
      editor: editor,
      index: index,
      marks: marks,
      node: node,
      offset: offset,
      parent: parent,
      leaves: leaves,
      text: text
    });
  };
};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$2 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:void');

/**
 * Void.
 *
 * @type {Component}
 */

var Void = function (_React$Component) {
  inherits(Void, _React$Component);

  function Void() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Void);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Void.__proto__ || Object.getPrototypeOf(Void)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$2.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  createClass(Void, [{
    key: 'render',


    /**
     * Render.
     *
     * @return {Element}
     */

    value: function render() {
      var props = this.props;
      var children = props.children,
          node = props.node,
          readOnly = props.readOnly;

      var Tag = node.object == 'block' ? 'div' : 'span';
      var style = {
        height: '0',
        color: 'transparent',
        outline: 'none'
      };

      var spacer = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        Tag,
        {
          contentEditable: true,
          'data-slate-spacer': true,
          suppressContentEditableWarning: true,
          style: style
        },
        this.renderText()
      );

      var content = __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        Tag,
        { draggable: readOnly ? null : true },
        children
      );

      this.debug('render', { props: props });

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        Tag,
        {
          'data-slate-void': true,
          'data-key': node.key,
          contentEditable: readOnly ? null : false
        },
        readOnly ? null : spacer,
        content
      );
    }

    /**
     * Render the void node's text node, which will catch the cursor when it the
     * void node is navigated to with the arrow keys.
     *
     * Having this text node there means the browser continues to manage the
     * selection natively, so it keeps track of the right offset when moving
     * across the block.
     *
     * @return {Element}
     */

  }]);
  return Void;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Void.propTypes = {
  block: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].block,
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any.isRequired,
  editor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  parent: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  readOnly: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired };

var _initialiseProps$2 = function _initialiseProps() {
  var _this2 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this2.props.node;
    var key = node.key,
        type = node.type;

    var id = key + ' (' + type + ')';
    debug$2.apply(undefined, [message, '' + id].concat(args));
  };

  this.renderText = function () {
    var _props = _this2.props,
        block = _props.block,
        decorations = _props.decorations,
        isSelected = _props.isSelected,
        node = _props.node,
        readOnly = _props.readOnly,
        editor = _props.editor;

    var child = node.getFirstText();
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Text$1, {
      block: node.object == 'block' ? node : block,
      decorations: decorations,
      editor: editor,
      isSelected: isSelected,
      key: child.key,
      node: child,
      parent: node,
      readOnly: readOnly
    });
  };
};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$3 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:node');

/**
 * Node.
 *
 * @type {Component}
 */

var Node$1 = function (_React$Component) {
  inherits(Node$$1, _React$Component);

  function Node$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Node$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Node$$1.__proto__ || Object.getPrototypeOf(Node$$1)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$3.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  /**
   * Should the node update?
   *
   * @param {Object} nextProps
   * @param {Object} value
   * @return {Boolean}
   */

  createClass(Node$$1, [{
    key: 'render',


    /**
     * Render.
     *
     * @return {Element}
     */

    value: function render() {
      var _this2 = this;

      this.debug('render', this);

      var _props = this.props,
          editor = _props.editor,
          isSelected = _props.isSelected,
          node = _props.node,
          parent = _props.parent,
          readOnly = _props.readOnly;
      var value = editor.value;
      var selection = value.selection;
      var stack = editor.stack;

      var indexes = node.getSelectionIndexes(selection, isSelected);
      var children = node.nodes.toArray().map(function (child, i) {
        var isChildSelected = !!indexes && indexes.start <= i && i < indexes.end;
        return _this2.renderNode(child, isChildSelected);
      });

      // Attributes that the developer must to mix into the element in their
      // custom node renderer component.
      var attributes = { 'data-key': node.key

        // If it's a block node with inline children, add the proper `dir` attribute
        // for text direction.
      };if (node.object == 'block' && node.nodes.first().object != 'block') {
        var direction = node.getTextDirection();
        if (direction == 'rtl') attributes.dir = 'rtl';
      }

      var props = {
        key: node.key,
        editor: editor,
        isSelected: isSelected,
        node: node,
        parent: parent,
        readOnly: readOnly
      };

      var placeholder = stack.find('renderPlaceholder', props);

      if (placeholder) {
        placeholder = __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(placeholder, {
          key: node.key + '-placeholder'
        });
        children = [placeholder].concat(toConsumableArray(children));
      }

      var element = stack.find('renderNode', _extends({}, props, {
        attributes: attributes,
        children: children
      }));

      return node.isVoid ? __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        Void,
        this.props,
        element
      ) : element;
    }

    /**
     * Render a `child` node.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @return {Element}
     */

  }]);
  return Node$$1;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Node$1.propTypes = {
  block: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].block,
  decorations: __WEBPACK_IMPORTED_MODULE_6_react_immutable_proptypes___default.a.list.isRequired,
  editor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  isSelected: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  node: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  parent: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].node.isRequired,
  readOnly: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired };

var _initialiseProps$3 = function _initialiseProps() {
  var _this3 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this3.props.node;
    var key = node.key,
        type = node.type;

    debug$3.apply(undefined, [message, key + ' (' + type + ')'].concat(args));
  };

  this.shouldComponentUpdate = function (nextProps) {
    var props = _this3.props;
    var stack = props.editor.stack;

    var shouldUpdate = stack.find('shouldNodeComponentUpdate', props, nextProps);
    var n = nextProps;
    var p = props;

    // If the `Component` has a custom logic to determine whether the component
    // needs to be updated or not, return true if it returns true. If it returns
    // false, we need to ignore it, because it shouldn't be allowed it.
    if (shouldUpdate != null) {
      if (shouldUpdate) {
        return true;
      }

      if (shouldUpdate === false) {
        __WEBPACK_IMPORTED_MODULE_7_slate_dev_logger__["a" /* default */].warn("Returning false in `shouldNodeComponentUpdate` does not disable Slate's internal `shouldComponentUpdate` logic. If you want to prevent updates, use React's `shouldComponentUpdate` instead.");
      }
    }

    // If the `readOnly` status has changed, re-render in case there is any
    // user-land logic that depends on it, like nested editable contents.
    if (n.readOnly != p.readOnly) return true;

    // If the node has changed, update. PERF: There are cases where it will have
    // changed, but it's properties will be exactly the same (eg. copy-paste)
    // which this won't catch. But that's rare and not a drag on performance, so
    // for simplicity we just let them through.
    if (n.node != p.node) return true;

    // If the selection value of the node or of some of its children has changed,
    // re-render in case there is any user-land logic depends on it to render.
    // if the node is selected update it, even if it was already selected: the
    // selection value of some of its children could have been changed and they
    // need to be rendered again.
    if (n.isSelected || p.isSelected) return true;

    // If the decorations have changed, update.
    if (!n.decorations.equals(p.decorations)) return true;

    // Otherwise, don't update.
    return false;
  };

  this.renderNode = function (child, isSelected) {
    var _props2 = _this3.props,
        block = _props2.block,
        decorations = _props2.decorations,
        editor = _props2.editor,
        node = _props2.node,
        readOnly = _props2.readOnly;
    var stack = editor.stack;

    var Component = child.object == 'text' ? Text$1 : Node$1;
    var decs = decorations.concat(node.getDecorations(stack));
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, {
      block: node.object == 'block' ? node : block,
      decorations: decs,
      editor: editor,
      isSelected: isSelected,
      key: child.key,
      node: child,
      parent: node,
      readOnly: readOnly
    });
  };
};

/**
 * Find the DOM node for a `key`.
 *
 * @param {String|Node} key
 * @param {Window} win (optional)
 * @return {Element}
 */

function findDOMNode$1(key) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (__WEBPACK_IMPORTED_MODULE_8_slate__["j" /* Node */].isNode(key)) {
    key = key.key;
  }

  var el = win.document.querySelector('[data-key="' + key + '"]');

  if (!el) {
    throw new Error('Unable to find a DOM node for "' + key + '". This is often because of forgetting to add `props.attributes` to a custom component.');
  }

  return el;
}

/**
 * Find a native DOM selection point from a Slate `key` and `offset`.
 *
 * @param {String} key
 * @param {Number} offset
 * @param {Window} win (optional)
 * @return {Object|Null}
 */

function findDOMPoint(key, offset) {
  var win = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  var el = findDOMNode$1(key, win);
  var start = 0;
  var n = void 0;

  // COMPAT: In IE, this method's arguments are not optional, so we have to
  // pass in all four even though the last two are defaults. (2017/10/25)
  var iterator = win.document.createNodeIterator(el, NodeFilter.SHOW_TEXT, function () {
    return NodeFilter.FILTER_ACCEPT;
  }, false);

  while (n = iterator.nextNode()) {
    var length = n.textContent.length;

    var end = start + length;

    if (offset <= end) {
      var o = offset - start;
      return { node: n, offset: o >= 0 ? o : 0 };
    }

    start = end;
  }

  return null;
}

/**
 * Find a native DOM range Slate `range`.
 *
 * @param {Range} range
 * @param {Window} win (optional)
 * @return {Object|Null}
 */

function findDOMRange(range) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var anchorKey = range.anchorKey,
      anchorOffset = range.anchorOffset,
      focusKey = range.focusKey,
      focusOffset = range.focusOffset,
      isBackward$$1 = range.isBackward,
      isCollapsed = range.isCollapsed;

  var anchor = findDOMPoint(anchorKey, anchorOffset, win);
  var focus = isCollapsed ? anchor : findDOMPoint(focusKey, focusOffset, win);
  if (!anchor || !focus) return null;

  var r = win.document.createRange();
  var start = isBackward$$1 ? focus : anchor;
  var end = isBackward$$1 ? anchor : focus;
  r.setStart(start.node, start.offset);
  r.setEnd(end.node, end.offset);
  return r;
}

/**
 * Constants.
 *
 * @type {String}
 */

var ZERO_WIDTH_ATTRIBUTE = 'data-slate-zero-width';
var ZERO_WIDTH_SELECTOR = '[' + ZERO_WIDTH_ATTRIBUTE + ']';
var OFFSET_KEY_ATTRIBUTE = 'data-offset-key';
var RANGE_SELECTOR = '[' + OFFSET_KEY_ATTRIBUTE + ']';
var TEXT_SELECTOR = '[data-key]';
var VOID_SELECTOR = '[data-slate-void]';

/**
 * Find a Slate point from a DOM selection's `nativeNode` and `nativeOffset`.
 *
 * @param {Element} nativeNode
 * @param {Number} nativeOffset
 * @param {Value} value
 * @return {Object}
 */

function findPoint(nativeNode, nativeOffset, value) {
  var _normalizeNodeAndOffs = normalizeNodeAndOffset(nativeNode, nativeOffset),
      nearestNode = _normalizeNodeAndOffs.node,
      nearestOffset = _normalizeNodeAndOffs.offset;

  var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(nativeNode);
  var parentNode = nearestNode.parentNode;

  var rangeNode = parentNode.closest(RANGE_SELECTOR);
  var offset = void 0;
  var node = void 0;

  // Calculate how far into the text node the `nearestNode` is, so that we can
  // determine what the offset relative to the text node is.
  if (rangeNode) {
    var range = window.document.createRange();
    var textNode = rangeNode.closest(TEXT_SELECTOR);
    range.setStart(textNode, 0);
    range.setEnd(nearestNode, nearestOffset);
    node = textNode;
    offset = range.toString().length;
  } else {
    // For void nodes, the element with the offset key will be a cousin, not an
    // ancestor, so find it by going down from the nearest void parent.
    var voidNode = parentNode.closest(VOID_SELECTOR);
    if (!voidNode) return null;
    rangeNode = voidNode.querySelector(RANGE_SELECTOR);
    if (!rangeNode) return null;
    node = rangeNode;
    offset = node.textContent.length;
  }

  // COMPAT: If the parent node is a Slate zero-width space, this is because the
  // text node should have no characters. However, during IME composition the
  // ASCII characters will be prepended to the zero-width space, so subtract 1
  // from the offset to account for the zero-width space character.
  if (offset == node.textContent.length && parentNode.hasAttribute(ZERO_WIDTH_ATTRIBUTE)) {
    offset--;
  }

  // Get the string value of the offset key attribute.
  var offsetKey = rangeNode.getAttribute(OFFSET_KEY_ATTRIBUTE);
  if (!offsetKey) return null;

  var _OffsetKey$parse = OffsetKey.parse(offsetKey),
      key = _OffsetKey$parse.key;

  // COMPAT: If someone is clicking from one Slate editor into another, the
  // select event fires twice, once for the old editor's `element` first, and
  // then afterwards for the correct `element`. (2017/03/03)


  if (!value.document.hasDescendant(key)) return null;

  return {
    key: key,
    offset: offset
  };
}

/**
 * From a DOM selection's `node` and `offset`, normalize so that it always
 * refers to a text node.
 *
 * @param {Element} node
 * @param {Number} offset
 * @return {Object}
 */

function normalizeNodeAndOffset(node, offset) {
  // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.
  if (node.nodeType == 1 && node.childNodes.length) {
    var isLast = offset == node.childNodes.length;
    var direction = isLast ? 'backward' : 'forward';
    var index = isLast ? offset - 1 : offset;
    node = getEditableChild(node, index, direction);

    // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.
    while (node.nodeType == 1 && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, direction);
    }

    // Determine the new offset inside the text node.
    offset = isLast ? node.textContent.length : 0;
  }

  // Return the node and offset.
  return { node: node, offset: offset };
}

/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 *
 * @param {Element} parent
 * @param {Number} index
 * @param {String} direction ('forward' or 'backward')
 * @return {Element|Null}
 */

function getEditableChild(parent, index, direction) {
  var childNodes = parent.childNodes;

  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false;

  // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.
  while (child.nodeType == 8 || child.nodeType == 1 && child.childNodes.length == 0 || child.nodeType == 1 && child.getAttribute('contenteditable') == 'false') {
    if (triedForward && triedBackward) break;

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    if (direction == 'forward') i++;
    if (direction == 'backward') i--;
  }

  return child || null;
}

/**
 * Find a Slate range from a DOM `native` selection.
 *
 * @param {Selection} native
 * @param {Value} value
 * @return {Range}
 */

function findRange(native, value) {
  var el = native.anchorNode || native.startContainer;
  if (!el) return null;

  var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(el);

  // If the `native` object is a DOM `Range` or `StaticRange` object, change it
  // into something that looks like a DOM `Selection` instead.
  if (native instanceof window.Range || window.StaticRange && native instanceof window.StaticRange) {
    native = {
      anchorNode: native.startContainer,
      anchorOffset: native.startOffset,
      focusNode: native.endContainer,
      focusOffset: native.endOffset
    };
  }

  var _native = native,
      anchorNode = _native.anchorNode,
      anchorOffset = _native.anchorOffset,
      focusNode = _native.focusNode,
      focusOffset = _native.focusOffset,
      isCollapsed = _native.isCollapsed;

  var anchor = findPoint(anchorNode, anchorOffset, value);
  var focus = isCollapsed ? anchor : findPoint(focusNode, focusOffset, value);
  if (!anchor || !focus) return null;

  // COMPAT: ??? The Edge browser seems to have a case where if you select the
  // last word of a span, it sets the endContainer to the containing span.
  // `selection-is-backward` doesn't handle this case.
  if (IS_IE || IS_EDGE) {
    var domAnchor = findDOMPoint(anchor.key, anchor.offset);
    var domFocus = findDOMPoint(focus.key, focus.offset);

    native = {
      anchorNode: domAnchor.node,
      anchorOffset: domAnchor.offset,
      focusNode: domFocus.node,
      focusOffset: domFocus.offset
    };
  }

  var range = __WEBPACK_IMPORTED_MODULE_8_slate__["k" /* Range */].create({
    anchorKey: anchor.key,
    anchorOffset: anchor.offset,
    focusKey: focus.key,
    focusOffset: focus.offset,
    isBackward: isCollapsed ? false : __WEBPACK_IMPORTED_MODULE_10_selection_is_backward___default()(native),
    isFocused: true
  });

  return range;
}

/**
 * CSS overflow values that would cause scrolling.
 *
 * @type {Array}
 */

var OVERFLOWS = ['auto', 'overlay', 'scroll'];

/**
 * Detect whether we are running IOS version 11
 */

var IS_IOS_11 = IS_IOS && !!window.navigator.userAgent.match(/os 11_/i);

/**
 * Find the nearest parent with scrolling, or window.
 *
 * @param {el} Element
 */

function findScrollContainer(el, window) {
  var parent = el.parentNode;
  var scroller = void 0;

  while (!scroller) {
    if (!parent.parentNode) break;

    var style = window.getComputedStyle(parent);
    var overflowY = style.overflowY;


    if (OVERFLOWS.includes(overflowY)) {
      scroller = parent;
      break;
    }

    parent = parent.parentNode;
  }

  // COMPAT: Because Chrome does not allow doucment.body.scrollTop, we're
  // assuming that window.scrollTo() should be used if the scrollable element
  // turns out to be document.body or document.documentElement. This will work
  // unless body is intentionally set to scrollable by restricting its height
  // (e.g. height: 100vh).
  if (!scroller) {
    return window.document.body;
  }

  return scroller;
}

/**
 * Scroll the current selection's focus point into view if needed.
 *
 * @param {Selection} selection
 */

function scrollToSelection(selection) {
  if (IS_IOS_11) return;
  if (!selection.anchorNode) return;

  var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(selection.anchorNode);
  var scroller = findScrollContainer(selection.anchorNode, window);
  var isWindow = scroller == window.document.body || scroller == window.document.documentElement;
  var backward = __WEBPACK_IMPORTED_MODULE_10_selection_is_backward___default()(selection);

  var range = selection.getRangeAt(0).cloneRange();
  range.collapse(backward);
  var cursorRect = range.getBoundingClientRect();

  // COMPAT: range.getBoundingClientRect() returns 0s in Safari when range is
  // collapsed. Expanding the range by 1 is a relatively effective workaround
  // for vertical scroll, although horizontal may be off by 1 character.
  // https://bugs.webkit.org/show_bug.cgi?id=138949
  // https://bugs.chromium.org/p/chromium/issues/detail?id=435438
  if (IS_SAFARI) {
    if (range.collapsed && cursorRect.top == 0 && cursorRect.height == 0) {
      if (range.startOffset == 0) {
        range.setEnd(range.endContainer, 1);
      } else {
        range.setStart(range.startContainer, range.startOffset - 1);
      }

      cursorRect = range.getBoundingClientRect();

      if (cursorRect.top == 0 && cursorRect.height == 0) {
        if (range.getClientRects().length) {
          cursorRect = range.getClientRects()[0];
        }
      }
    }
  }

  var width = void 0;
  var height = void 0;
  var yOffset = void 0;
  var xOffset = void 0;
  var scrollerTop = 0;
  var scrollerLeft = 0;
  var scrollerBordersY = 0;
  var scrollerBordersX = 0;
  var scrollerPaddingTop = 0;
  var scrollerPaddingBottom = 0;
  var scrollerPaddingLeft = 0;
  var scrollerPaddingRight = 0;

  if (isWindow) {
    var innerWidth = window.innerWidth,
        innerHeight = window.innerHeight,
        pageYOffset = window.pageYOffset,
        pageXOffset = window.pageXOffset;

    width = innerWidth;
    height = innerHeight;
    yOffset = pageYOffset;
    xOffset = pageXOffset;
  } else {
    var offsetWidth = scroller.offsetWidth,
        offsetHeight = scroller.offsetHeight,
        scrollTop = scroller.scrollTop,
        scrollLeft = scroller.scrollLeft;

    var _window$getComputedSt = window.getComputedStyle(scroller),
        borderTopWidth = _window$getComputedSt.borderTopWidth,
        borderBottomWidth = _window$getComputedSt.borderBottomWidth,
        borderLeftWidth = _window$getComputedSt.borderLeftWidth,
        borderRightWidth = _window$getComputedSt.borderRightWidth,
        paddingTop = _window$getComputedSt.paddingTop,
        paddingBottom = _window$getComputedSt.paddingBottom,
        paddingLeft = _window$getComputedSt.paddingLeft,
        paddingRight = _window$getComputedSt.paddingRight;

    var scrollerRect = scroller.getBoundingClientRect();
    width = offsetWidth;
    height = offsetHeight;
    scrollerTop = scrollerRect.top + parseInt(borderTopWidth, 10);
    scrollerLeft = scrollerRect.left + parseInt(borderLeftWidth, 10);
    scrollerBordersY = parseInt(borderTopWidth, 10) + parseInt(borderBottomWidth, 10);
    scrollerBordersX = parseInt(borderLeftWidth, 10) + parseInt(borderRightWidth, 10);
    scrollerPaddingTop = parseInt(paddingTop, 10);
    scrollerPaddingBottom = parseInt(paddingBottom, 10);
    scrollerPaddingLeft = parseInt(paddingLeft, 10);
    scrollerPaddingRight = parseInt(paddingRight, 10);
    yOffset = scrollTop;
    xOffset = scrollLeft;
  }

  var cursorTop = cursorRect.top + yOffset - scrollerTop;
  var cursorLeft = cursorRect.left + xOffset - scrollerLeft;

  var x = xOffset;
  var y = yOffset;

  if (cursorLeft < xOffset) {
    // selection to the left of viewport
    x = cursorLeft - scrollerPaddingLeft;
  } else if (cursorLeft + cursorRect.width + scrollerBordersX > xOffset + width) {
    // selection to the right of viewport
    x = cursorLeft + scrollerBordersX + scrollerPaddingRight - width;
  }

  if (cursorTop < yOffset) {
    // selection above viewport
    y = cursorTop - scrollerPaddingTop;
  } else if (cursorTop + cursorRect.height + scrollerBordersY > yOffset + height) {
    // selection below viewport
    y = cursorTop + scrollerBordersY + scrollerPaddingBottom + cursorRect.height - height;
  }

  if (isWindow) {
    window.scrollTo(x, y);
  } else {
    scroller.scrollTop = y;
    scroller.scrollLeft = x;
  }
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$4 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:content');

/**
 * Content.
 *
 * @type {Component}
 */

var Content = function (_React$Component) {
  inherits(Content, _React$Component);

  /**
   * Constructor.
   *
   * @param {Object} props
   */

  /**
   * Property types.
   *
   * @type {Object}
   */

  function Content(props) {
    classCallCheck(this, Content);

    var _this = possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this.componentDidMount = function () {
      var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(_this.element);

      window.document.addEventListener('selectionchange', _this.onNativeSelectionChange);

      // COMPAT: Restrict scope of `beforeinput` to mobile.
      if ((IS_IOS || IS_ANDROID) && SUPPORTED_EVENTS.beforeinput) {
        _this.element.addEventListener('beforeinput', _this.onNativeBeforeInput);
      }

      _this.updateSelection();
    };

    _this.componentDidUpdate = function () {
      _this.updateSelection();
    };

    _this.updateSelection = function () {
      var editor = _this.props.editor;
      var value = editor.value;
      var selection = value.selection;
      var isBackward$$1 = selection.isBackward;

      var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(_this.element);
      var native = window.getSelection();
      var rangeCount = native.rangeCount,
          anchorNode = native.anchorNode;

      // If both selections are blurred, do nothing.

      if (!rangeCount && selection.isBlurred) return;

      // If the selection has been blurred, but is still inside the editor in the
      // DOM, blur it manually.
      if (selection.isBlurred) {
        if (!_this.isInEditor(anchorNode)) return;
        native.removeAllRanges();
        _this.element.blur();
        debug$4('updateSelection', { selection: selection, native: native });
        return;
      }

      // If the selection isn't set, do nothing.
      if (selection.isUnset) return;

      // Otherwise, figure out which DOM nodes should be selected...
      var current = !!rangeCount && native.getRangeAt(0);
      var range = findDOMRange(selection, window);

      if (!range) {
        __WEBPACK_IMPORTED_MODULE_7_slate_dev_logger__["a" /* default */].error('Unable to find a native DOM range from the current selection.', { selection: selection });
        return;
      }

      var startContainer = range.startContainer,
          startOffset = range.startOffset,
          endContainer = range.endContainer,
          endOffset = range.endOffset;

      // If the new range matches the current selection, there is nothing to fix.
      // COMPAT: The native `Range` object always has it's "start" first and "end"
      // last in the DOM. It has no concept of "backwards/forwards", so we have
      // to check both orientations here. (2017/10/31)

      if (current) {
        if (startContainer == current.startContainer && startOffset == current.startOffset && endContainer == current.endContainer && endOffset == current.endOffset || startContainer == current.endContainer && startOffset == current.endOffset && endContainer == current.startContainer && endOffset == current.startOffset) {
          return;
        }
      }

      // Otherwise, set the `isUpdatingSelection` flag and update the selection.
      _this.tmp.isUpdatingSelection = true;
      native.removeAllRanges();

      // COMPAT: IE 11 does not support Selection.setBaseAndExtent
      if (native.setBaseAndExtent) {
        // COMPAT: Since the DOM range has no concept of backwards/forwards
        // we need to check and do the right thing here.
        if (isBackward$$1) {
          native.setBaseAndExtent(range.endContainer, range.endOffset, range.startContainer, range.startOffset);
        } else {
          native.setBaseAndExtent(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
        }
      } else {
        // COMPAT: IE 11 does not support Selection.extend, fallback to addRange
        native.addRange(range);
      }

      // Scroll to the selection, in case it's out of view.
      scrollToSelection(native);

      // Then unset the `isUpdatingSelection` flag after a delay.
      setTimeout(function () {
        // COMPAT: In Firefox, it's not enough to create a range, you also need to
        // focus the contenteditable element too. (2016/11/16)
        if (IS_FIREFOX && _this.element) _this.element.focus();
        _this.tmp.isUpdatingSelection = false;
      });

      debug$4('updateSelection', { selection: selection, native: native });
    };

    _this.ref = function (element) {
      _this.element = element;
    };

    _this.isInEditor = function (target) {
      var element = _this.element;
      // COMPAT: Text nodes don't have `isContentEditable` property. So, when
      // `target` is a text node use its parent node for check.

      var el = target.nodeType === 3 ? target.parentNode : target;
      return el.isContentEditable && (el === element || el.closest('[data-slate-editor]') === element);
    };

    _this.onNativeBeforeInput = function (event) {
      if (_this.props.readOnly) return;
      if (!_this.isInEditor(event.target)) return;

      var _event$getTargetRange = event.getTargetRanges(),
          _event$getTargetRange2 = slicedToArray(_event$getTargetRange, 1),
          targetRange = _event$getTargetRange2[0];

      if (!targetRange) return;

      var editor = _this.props.editor;


      switch (event.inputType) {
        case 'deleteContentBackward':
          {
            event.preventDefault();

            var range = findRange(targetRange, editor.value);
            editor.change(function (change) {
              return change.deleteAtRange(range);
            });
            break;
          }

        case 'insertLineBreak': // intentional fallthru
        case 'insertParagraph':
          {
            event.preventDefault();
            var _range = findRange(targetRange, editor.value);

            editor.change(function (change) {
              if (change.value.isInVoid) {
                change.collapseToStartOfNextText();
              } else {
                change.splitBlockAtRange(_range);
              }
            });
            break;
          }

        case 'insertReplacementText': // intentional fallthru
        case 'insertText':
          {
            // `data` should have the text for the `insertText` input type and
            // `dataTransfer` should have the text for the `insertReplacementText`
            // input type, but Safari uses `insertText` for spell check replacements
            // and sets `data` to `null`.
            var text = event.data == null ? event.dataTransfer.getData('text/plain') : event.data;

            if (text == null) return;

            event.preventDefault();

            var value = editor.value;
            var selection = value.selection;

            var _range2 = findRange(targetRange, value);

            editor.change(function (change) {
              change.insertTextAtRange(_range2, text, selection.marks);

              // If the text was successfully inserted, and the selection had marks
              // on it, unset the selection's marks.
              if (selection.marks && value.document != change.value.document) {
                change.select({ marks: null });
              }
            });

            break;
          }
      }
    };

    _this.onNativeSelectionChange = __WEBPACK_IMPORTED_MODULE_11_lodash_throttle___default()(function (event) {
      if (_this.props.readOnly) return;

      var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
      var activeElement = window.document.activeElement;

      if (activeElement !== _this.element) return;

      _this.props.onSelect(event);
    }, 100);

    _this.renderNode = function (child, isSelected) {
      var _this$props = _this.props,
          editor = _this$props.editor,
          readOnly = _this$props.readOnly;
      var value = editor.value;
      var document = value.document,
          decorations = value.decorations;
      var stack = editor.stack;

      var decs = document.getDecorations(stack);
      if (decorations) decs = decorations.concat(decs);
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Node$1, {
        block: null,
        editor: editor,
        decorations: decs,
        isSelected: isSelected,
        key: child.key,
        node: child,
        parent: document,
        readOnly: readOnly
      });
    };

    _this.tmp = {};
    _this.tmp.key = 0;
    _this.tmp.isUpdatingSelection = false;

    EVENT_HANDLERS.forEach(function (handler) {
      _this[handler] = function (event) {
        _this.onEvent(handler, event);
      };
    });
    return _this;
  }

  /**
   * When the editor first mounts in the DOM we need to:
   *
   *   - Add native DOM event listeners.
   *   - Update the selection, in case it starts focused.
   */

  /**
   * Default properties.
   *
   * @type {Object}
   */

  createClass(Content, [{
    key: 'componentWillUnmount',


    /**
     * When unmounting, remove DOM event listeners.
     */

    value: function componentWillUnmount() {
      var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(this.element);

      if (window) {
        window.document.removeEventListener('selectionchange', this.onNativeSelectionChange);
      }

      // COMPAT: Restrict scope of `beforeinput` to mobile.
      if ((IS_IOS || IS_ANDROID) && SUPPORTED_EVENTS.beforeinput) {
        this.element.removeEventListener('beforeinput', this.onNativeBeforeInput);
      }
    }

    /**
     * On update, update the selection.
     */

    /**
     * Update the native DOM selection to reflect the internal model.
     */

    /**
     * The React ref method to set the root content element locally.
     *
     * @param {Element} element
     */

    /**
     * Check if an event `target` is fired from within the contenteditable
     * element. This should be false for edits happening in non-contenteditable
     * children, such as void nodes and other nested Slate editors.
     *
     * @param {Element} target
     * @return {Boolean}
     */

  }, {
    key: 'onEvent',


    /**
     * On `event` with `handler`.
     *
     * @param {String} handler
     * @param {Event} event
     */

    value: function onEvent(handler, event) {
      debug$4('onEvent', handler);

      // COMPAT: Composition events can change the DOM out of under React, so we
      // increment this key to ensure that a full re-render happens. (2017/10/16)
      if (handler == 'onCompositionEnd') {
        this.tmp.key++;
      }

      // Ignore `onBlur`, `onFocus` and `onSelect` events generated
      // programmatically while updating selection.
      if (this.tmp.isUpdatingSelection && (handler == 'onSelect' || handler == 'onBlur' || handler == 'onFocus')) {
        return;
      }

      // COMPAT: There are situations where a select event will fire with a new
      // native selection that resolves to the same internal position. In those
      // cases we don't need to trigger any changes, since our internal model is
      // already up to date, but we do want to update the native selection again
      // to make sure it is in sync. (2017/10/16)
      if (handler == 'onSelect') {
        var editor = this.props.editor;
        var value = editor.value;
        var selection = value.selection;

        var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
        var native = window.getSelection();
        var range = findRange(native, value);

        if (range && range.equals(selection)) {
          this.updateSelection();
          return;
        }
      }

      // Don't handle drag and drop events coming from embedded editors.
      if (handler == 'onDragEnd' || handler == 'onDragEnter' || handler == 'onDragExit' || handler == 'onDragLeave' || handler == 'onDragOver' || handler == 'onDragStart' || handler == 'onDrop') {
        var target = event.target;

        var targetEditorNode = target.closest('[data-slate-editor]');
        if (targetEditorNode !== this.element) return;
      }

      // Some events require being in editable in the editor, so if the event
      // target isn't, ignore them.
      if (handler == 'onBeforeInput' || handler == 'onBlur' || handler == 'onCompositionEnd' || handler == 'onCompositionStart' || handler == 'onCopy' || handler == 'onCut' || handler == 'onFocus' || handler == 'onInput' || handler == 'onKeyDown' || handler == 'onKeyUp' || handler == 'onPaste' || handler == 'onSelect') {
        if (!this.isInEditor(event.target)) return;
      }

      this.props[handler](event);
    }

    /**
     * On a native `beforeinput` event, use the additional range information
     * provided by the event to manipulate text exactly as the browser would.
     *
     * This is currently only used on iOS and Android.
     *
     * @param {InputEvent} event
     */

    /**
     * On native `selectionchange` event, trigger the `onSelect` handler. This is
     * needed to account for React's `onSelect` being non-standard and not firing
     * until after a selection has been released. This causes issues in situations
     * where another change happens while a selection is being made.
     *
     * @param {Event} event
     */

  }, {
    key: 'render',


    /**
     * Render the editor content.
     *
     * @return {Element}
     */

    value: function render() {
      var _this2 = this;

      var props = this.props;
      var className = props.className,
          readOnly = props.readOnly,
          editor = props.editor,
          tabIndex = props.tabIndex,
          role = props.role,
          tagName = props.tagName;
      var value = editor.value;

      var Container = tagName;
      var document = value.document,
          selection = value.selection;

      var indexes = document.getSelectionIndexes(selection, selection.isFocused);
      var children = document.nodes.toArray().map(function (child, i) {
        var isSelected = !!indexes && indexes.start <= i && i < indexes.end;
        return _this2.renderNode(child, isSelected);
      });

      var handlers = EVENT_HANDLERS.reduce(function (obj, handler) {
        obj[handler] = _this2[handler];
        return obj;
      }, {});

      var style = _extends({
        // Prevent the default outline styles.
        outline: 'none',
        // Preserve adjacent whitespace and new lines.
        whiteSpace: 'pre-wrap',
        // Allow words to break if they are too long.
        wordWrap: 'break-word'
      }, readOnly ? {} : { WebkitUserModify: 'read-write-plaintext-only' }, props.style);

      // COMPAT: In Firefox, spellchecking can remove entire wrapping elements
      // including inline ones like `<a>`, which is jarring for the user but also
      // causes the DOM to get into an irreconcilable value. (2016/09/01)
      var spellCheck = IS_FIREFOX ? false : props.spellCheck;

      debug$4('render', { props: props });

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        Container,
        _extends({}, handlers, {
          'data-slate-editor': true,
          key: this.tmp.key,
          ref: this.ref,
          'data-key': document.key,
          contentEditable: readOnly ? null : true,
          suppressContentEditableWarning: true,
          className: className,
          onBlur: this.onBlur,
          onFocus: this.onFocus,
          onCompositionEnd: this.onCompositionEnd,
          onCompositionStart: this.onCompositionStart,
          onCopy: this.onCopy,
          onCut: this.onCut,
          onDragEnd: this.onDragEnd,
          onDragOver: this.onDragOver,
          onDragStart: this.onDragStart,
          onDrop: this.onDrop,
          onInput: this.onInput,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
          onPaste: this.onPaste,
          onSelect: this.onSelect,
          autoCorrect: props.autoCorrect ? 'on' : 'off',
          spellCheck: spellCheck,
          style: style,
          role: readOnly ? null : role || 'textbox',
          tabIndex: tabIndex
          // COMPAT: The Grammarly Chrome extension works by changing the DOM out
          // from under `contenteditable` elements, which leads to weird behaviors
          // so we have to disable it like this. (2017/04/24)
          , 'data-gramm': false
        }),
        children,
        this.props.children
      );
    }

    /**
     * Render a `child` node of the document.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @return {Element}
     */

  }]);
  return Content;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Mix in handler prop types.
 */

Content.propTypes = {
  autoCorrect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any.isRequired,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  editor: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object.isRequired,
  readOnly: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  role: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  spellCheck: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool.isRequired,
  style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  tabIndex: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  tagName: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string };
Content.defaultProps = {
  style: {},
  tagName: 'div' };
EVENT_HANDLERS.forEach(function (handler) {
  Content.propTypes[handler] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func.isRequired;
});

/**
 * Prepares a Slate document fragment to be copied to the clipboard.
 *
 * @param {Event} event
 * @param {Value} value
 * @param {Document} [fragment]
 */

function cloneFragment(event, value) {
  var fragment = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : value.fragment;

  var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
  var native = window.getSelection();
  var startKey = value.startKey,
      endKey = value.endKey,
      startText = value.startText,
      endBlock = value.endBlock,
      endInline = value.endInline;

  var isVoidBlock = endBlock && endBlock.isVoid;
  var isVoidInline = endInline && endInline.isVoid;
  var isVoid = isVoidBlock || isVoidInline;

  // If the selection is collapsed, and it isn't inside a void node, abort.
  if (native.isCollapsed && !isVoid) return;

  // Create a fake selection so that we can add a Base64-encoded copy of the
  // fragment to the HTML, to decode on future pastes.
  var encoded = __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__["a" /* default */].serializeNode(fragment);
  var range = native.getRangeAt(0);
  var contents = range.cloneContents();
  var attach = contents.childNodes[0];

  // If the end node is a void node, we need to move the end of the range from
  // the void node's spacer span, to the end of the void node's content.
  if (isVoid) {
    var _r = range.cloneRange();
    var n = isVoidBlock ? endBlock : endInline;
    var node = findDOMNode$1(n, window);
    _r.setEndAfter(node);
    contents = _r.cloneContents();
    attach = contents.childNodes[contents.childNodes.length - 1].firstChild;
  }

  // COMPAT: in Safari and Chrome when selecting a single marked word,
  // marks are not preserved when copying.
  // If the attatched is not void, and the startKey and endKey is the same,
  // check if there is marks involved. If so, set the range start just before the
  // startText node
  if ((IS_CHROME || IS_SAFARI) && !isVoid && startKey === endKey) {
    var hasMarks = startText.characters.slice(value.selection.anchorOffset, value.selection.focusOffset).filter(function (char) {
      return char.marks.size !== 0;
    }).size !== 0;
    if (hasMarks) {
      var _r2 = range.cloneRange();
      var _node = findDOMNode$1(startText, window);
      _r2.setStartBefore(_node);
      contents = _r2.cloneContents();
      attach = contents.childNodes[contents.childNodes.length - 1].firstChild;
    }
  }

  // Remove any zero-width space spans from the cloned DOM so that they don't
  // show up elsewhere when pasted.
  [].slice.call(contents.querySelectorAll(ZERO_WIDTH_SELECTOR)).forEach(function (zw) {
    var isNewline = zw.getAttribute(ZERO_WIDTH_ATTRIBUTE) === 'n';
    zw.textContent = isNewline ? '\n' : '';
  });

  // COMPAT: In Chrome and Safari, if the last element in the selection to
  // copy has `contenteditable="false"` the copy will fail, and nothing will
  // be put in the clipboard. So we remove them all. (2017/05/04)
  if (IS_CHROME || IS_SAFARI) {
    var els = [].slice.call(contents.querySelectorAll('[contenteditable="false"]'));
    els.forEach(function (el) {
      return el.removeAttribute('contenteditable');
    });
  }

  // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
  // in the HTML, and can be used for intra-Slate pasting. If it's a text
  // node, wrap it in a `<span>` so we have something to set an attribute on.
  if (attach.nodeType == 3) {
    var span = window.document.createElement('span');

    // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
    // then leading and trailing spaces will be ignored. (2017/09/21)
    span.style.whiteSpace = 'pre';

    span.appendChild(attach);
    contents.appendChild(span);
    attach = span;
  }

  attach.setAttribute('data-slate-fragment', encoded);

  // Add the phony content to the DOM, and select it, so it will be copied.
  var editor = event.target.closest('[data-slate-editor]');
  var div = window.document.createElement('div');
  div.setAttribute('contenteditable', true);
  div.style.position = 'absolute';
  div.style.left = '-9999px';

  // COMPAT: In Firefox, the viewport jumps to find the phony div, so it
  // should be created at the current scroll offset with `style.top`.
  // The box model attributes which can interact with 'top' are also reset.
  div.style.border = '0px';
  div.style.padding = '0px';
  div.style.margin = '0px';
  div.style.top = (window.pageYOffset || window.document.documentElement.scrollTop) + 'px';

  div.appendChild(contents);
  editor.appendChild(div);

  // COMPAT: In Firefox, trying to use the terser `native.selectAllChildren`
  // throws an error, so we use the older `range` equivalent. (2016/06/21)
  var r = window.document.createRange();
  r.selectNodeContents(div);
  native.removeAllRanges();
  native.addRange(r);

  // Revert to the previous selection right after copying.
  window.requestAnimationFrame(function () {
    editor.removeChild(div);
    native.removeAllRanges();
    native.addRange(range);
  });
}

/**
 * Find a Slate node from a DOM `element`.
 *
 * @param {Element} element
 * @param {Value} value
 * @return {Node|Null}
 */

function findNode(element, value) {
  var closest = element.closest('[data-key]');
  if (!closest) return null;

  var key = closest.getAttribute('data-key');
  if (!key) return null;

  var node = value.document.getNode(key);
  return node || null;
}

/**
 * Get the target range from a DOM `event`.
 *
 * @param {Event} event
 * @param {Value} value
 * @return {Range}
 */

function getEventRange(event, value) {
  if (event.nativeEvent) {
    event = event.nativeEvent;
  }

  var _event = event,
      x = _event.x,
      y = _event.y,
      target = _event.target;

  if (x == null || y == null) return null;

  var document = value.document;

  var node = findNode(target, value);
  if (!node) return null;

  // If the drop target is inside a void node, move it into either the next or
  // previous node, depending on which side the `x` and `y` coordinates are
  // closest to.
  if (node.isVoid) {
    var rect = target.getBoundingClientRect();
    var isPrevious = node.object == 'inline' ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;

    var text = node.getFirstText();
    var _range = __WEBPACK_IMPORTED_MODULE_8_slate__["k" /* Range */].create();
    return isPrevious ? _range.moveToEndOf(document.getPreviousText(text.key)) : _range.moveToStartOf(document.getNextText(text.key));
  }

  // Else resolve a range from the caret position where the drop occured.
  var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(target);
  var native = void 0;

  // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
  if (window.document.caretRangeFromPoint) {
    native = window.document.caretRangeFromPoint(x, y);
  } else {
    var position = window.document.caretPositionFromPoint(x, y);
    native = window.document.createRange();
    native.setStart(position.offsetNode, position.offset);
    native.setEnd(position.offsetNode, position.offset);
  }

  // Resolve a Slate range from the DOM range.
  var range = findRange(native, value);
  if (!range) return null;

  return range;
}

/**
 * The transfer types that Slate recognizes.
 *
 * @type {Object}
 */

var TRANSFER_TYPES = {
  FRAGMENT: 'application/x-slate-fragment',
  HTML: 'text/html',
  NODE: 'application/x-slate-node',
  RICH: 'text/rtf',
  TEXT: 'text/plain'

  /**
   * Export.
   *
   * @type {Object}
   */

};

/**
 * Transfer types.
 *
 * @type {String}
 */

var FRAGMENT = TRANSFER_TYPES.FRAGMENT;
var HTML = TRANSFER_TYPES.HTML;
var NODE = TRANSFER_TYPES.NODE;
var RICH = TRANSFER_TYPES.RICH;
var TEXT = TRANSFER_TYPES.TEXT;

/**
 * Fragment matching regexp for HTML nodes.
 *
 * @type {RegExp}
 */

var FRAGMENT_MATCHER = / data-slate-fragment="([^\s"]+)"/;

/**
 * Get the transfer data from an `event`.
 *
 * @param {Event} event
 * @return {Object}
 */

function getEventTransfer(event) {
  if (event.nativeEvent) {
    event = event.nativeEvent;
  }

  var transfer = event.dataTransfer || event.clipboardData;
  var fragment = getType(transfer, FRAGMENT);
  var node = getType(transfer, NODE);
  var html = getType(transfer, HTML);
  var rich = getType(transfer, RICH);
  var text = getType(transfer, TEXT);
  var files = void 0;

  // If there isn't a fragment, but there is HTML, check to see if the HTML is
  // actually an encoded fragment.
  if (!fragment && html && ~html.indexOf(' data-slate-fragment="')) {
    var matches = FRAGMENT_MATCHER.exec(html);

    var _matches = slicedToArray(matches, 2),
        full = _matches[0],
        encoded = _matches[1]; // eslint-disable-line no-unused-vars


    if (encoded) fragment = encoded;
  }

  // COMPAT: Edge doesn't handle custom data types
  // These will be embedded in text/plain in this case (2017/7/12)
  if (text) {
    var embeddedTypes = getEmbeddedTypes(text);

    if (embeddedTypes[FRAGMENT]) fragment = embeddedTypes[FRAGMENT];
    if (embeddedTypes[NODE]) node = embeddedTypes[NODE];
    if (embeddedTypes[TEXT]) text = embeddedTypes[TEXT];
  }

  // Decode a fragment or node if they exist.
  if (fragment) fragment = __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__["a" /* default */].deserializeNode(fragment);
  if (node) node = __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__["a" /* default */].deserializeNode(node);

  // COMPAT: Edge sometimes throws 'NotSupportedError'
  // when accessing `transfer.items` (2017/7/12)
  try {
    // Get and normalize files if they exist.
    if (transfer.items && transfer.items.length) {
      files = Array.from(transfer.items).map(function (item) {
        return item.kind == 'file' ? item.getAsFile() : null;
      }).filter(function (exists) {
        return exists;
      });
    } else if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  } catch (err) {
    if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  }

  // Determine the type of the data.
  var data = { files: files, fragment: fragment, html: html, node: node, rich: rich, text: text };
  data.type = getTransferType(data);
  return data;
}

/**
 * Takes text input, checks whether contains embedded data
 * and returns object with original text +/- additional data
 *
 * @param {String} text
 * @return {Object}
 */

function getEmbeddedTypes(text) {
  var prefix = 'SLATE-DATA-EMBED::';

  if (text.substring(0, prefix.length) != prefix) {
    return { TEXT: text };
  }

  // Attempt to parse, if fails then just standard text/plain
  // Otherwise, already had data embedded
  try {
    return JSON.parse(text.substring(prefix.length));
  } catch (err) {
    throw new Error('Unable to parse custom Slate drag event data.');
  }
}

/**
 * Get the type of a transfer from its `data`.
 *
 * @param {Object} data
 * @return {String}
 */

function getTransferType(data) {
  if (data.fragment) return 'fragment';
  if (data.node) return 'node';

  // COMPAT: Microsoft Word adds an image of the selected text to the data.
  // Since files are preferred over HTML or text, this would cause the type to
  // be considered `files`. But it also adds rich text data so we can check
  // for that and properly set the type to `html` or `text`. (2016/11/21)
  if (data.rich && data.html) return 'html';
  if (data.rich && data.text) return 'text';

  if (data.files && data.files.length) return 'files';
  if (data.html) return 'html';
  if (data.text) return 'text';
  return 'unknown';
}

/**
 * Get one of types `TYPES.FRAGMENT`, `TYPES.NODE`, `text/html`, `text/rtf` or
 * `text/plain` from transfers's `data` if possible, otherwise return null.
 *
 * @param {Object} transfer
 * @param {String} type
 * @return {String}
 */

function getType(transfer, type) {
  if (!transfer.types || !transfer.types.length) {
    // COMPAT: In IE 11, there is no `types` field but `getData('Text')`
    // is supported`. (2017/06/23)
    return type == TEXT ? transfer.getData('Text') || null : null;
  }

  // COMPAT: In Edge, transfer.types doesn't respond to `indexOf`. (2017/10/25)
  var types = Array.from(transfer.types);

  return types.indexOf(type) !== -1 ? transfer.getData(type) || null : null;
}

/**
 * The default plain text transfer type.
 *
 * @type {String}
 */

var TEXT$1 = TRANSFER_TYPES.TEXT;

/**
 * Set data with `type` and `content` on an `event`.
 *
 * COMPAT: In Edge, custom types throw errors, so embed all non-standard
 * types in text/plain compound object. (2017/7/12)
 *
 * @param {Event} event
 * @param {String} type
 * @param {String} content
 */

function setEventTransfer(event, type, content) {
  var mime = TRANSFER_TYPES[type.toUpperCase()];

  if (!mime) {
    throw new Error('Cannot set unknown transfer type "' + mime + '".');
  }

  if (event.nativeEvent) {
    event = event.nativeEvent;
  }

  var transfer = event.dataTransfer || event.clipboardData;

  try {
    transfer.setData(mime, content);
  } catch (err) {
    var prefix = 'SLATE-DATA-EMBED::';
    var text = transfer.getData(TEXT$1);
    var obj = {};

    // If the existing plain text data is prefixed, it's Slate JSON data.
    if (text.substring(0, prefix.length) === prefix) {
      try {
        obj = JSON.parse(text.substring(prefix.length));
      } catch (e) {
        throw new Error('Failed to parse Slate data from `DataTransfer` object.');
      }
    } else {
      // Otherwise, it's just set it as is.
      obj[TEXT$1] = text;
    }

    obj[mime] = content;
    var string = '' + prefix + JSON.stringify(obj);
    transfer.setData(TEXT$1, string);
  }
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$5 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:after');

/**
 * The after plugin.
 *
 * @return {Object}
 */

function AfterPlugin() {
  var isDraggingInternally = null;

  /**
   * On before input, correct any browser inconsistencies.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onBeforeInput(event, change, editor) {
    debug$5('onBeforeInput', { event: event });

    event.preventDefault();
    change.insertText(event.data);
  }

  /**
   * On blur.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onBlur(event, change, editor) {
    debug$5('onBlur', { event: event });

    change.blur();
  }

  /**
   * On click.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onClick(event, change, editor) {
    if (editor.props.readOnly) return true;

    var value = change.value;
    var document = value.document;

    var node = findNode(event.target, value);
    var isVoid = node && (node.isVoid || document.hasVoidParent(node.key));

    if (isVoid) {
      // COMPAT: In Chrome & Safari, selections that are at the zero offset of
      // an inline node will be automatically replaced to be at the last offset
      // of a previous inline node, which screws us up, so we always want to set
      // it to the end of the node. (2016/11/29)
      change.focus().collapseToEndOf(node);
    }

    debug$5('onClick', { event: event });
  }

  /**
   * On copy.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCopy(event, change, editor) {
    debug$5('onCopy', { event: event });

    cloneFragment(event, change.value);
  }

  /**
   * On cut.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCut(event, change, editor) {
    debug$5('onCut', { event: event });

    cloneFragment(event, change.value);
    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);

    // Once the fake cut content has successfully been added to the clipboard,
    // delete the content in the current selection.
    window.requestAnimationFrame(function () {
      // If user cuts a void block node or a void inline node,
      // manually removes it since selection is collapsed in this case.
      var value = change.value;
      var endBlock = value.endBlock,
          endInline = value.endInline,
          isCollapsed = value.isCollapsed;

      var isVoidBlock = endBlock && endBlock.isVoid && isCollapsed;
      var isVoidInline = endInline && endInline.isVoid && isCollapsed;

      if (isVoidBlock) {
        editor.change(function (c) {
          return c.removeNodeByKey(endBlock.key);
        });
      } else if (isVoidInline) {
        editor.change(function (c) {
          return c.removeNodeByKey(endInline.key);
        });
      } else {
        editor.change(function (c) {
          return c.delete();
        });
      }
    });
  }

  /**
   * On drag end.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragEnd(event, change, editor) {
    debug$5('onDragEnd', { event: event });

    isDraggingInternally = null;
  }

  /**
   * On drag over.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragOver(event, change, editor) {
    debug$5('onDragOver', { event: event });

    isDraggingInternally = false;
  }

  /**
   * On drag start.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragStart(event, change, editor) {
    debug$5('onDragStart', { event: event });

    isDraggingInternally = true;

    var value = change.value;
    var document = value.document;

    var node = findNode(event.target, value);
    var isVoid = node && (node.isVoid || document.hasVoidParent(node.key));

    if (isVoid) {
      var encoded = __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__["a" /* default */].serializeNode(node, { preserveKeys: true });
      setEventTransfer(event, 'node', encoded);
    } else {
      var fragment = value.fragment;

      var _encoded = __WEBPACK_IMPORTED_MODULE_12_slate_base64_serializer__["a" /* default */].serializeNode(fragment);
      setEventTransfer(event, 'fragment', _encoded);
    }
  }

  /**
   * On drop.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDrop(event, change, editor) {
    debug$5('onDrop', { event: event });

    var value = change.value;
    var document = value.document,
        selection = value.selection;

    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    var target = getEventRange(event, value);
    if (!target) return;

    var transfer = getEventTransfer(event);
    var type = transfer.type,
        fragment = transfer.fragment,
        node = transfer.node,
        text = transfer.text;


    change.focus();

    // If the drag is internal and the target is after the selection, it
    // needs to account for the selection's content being deleted.
    if (isDraggingInternally && selection.endKey == target.endKey && selection.endOffset < target.endOffset) {
      target = target.move(selection.startKey == selection.endKey ? 0 - selection.endOffset + selection.startOffset : 0 - selection.endOffset);
    }

    if (isDraggingInternally) {
      change.delete();
    }

    change.select(target);

    if (type == 'text' || type == 'html') {
      var _target = target,
          anchorKey = _target.anchorKey;

      var hasVoidParent = document.hasVoidParent(anchorKey);

      if (hasVoidParent) {
        var n = document.getNode(anchorKey);

        while (hasVoidParent) {
          n = document.getNextText(n.key);
          if (!n) break;
          hasVoidParent = document.hasVoidParent(n.key);
        }

        if (n) change.collapseToStartOf(n);
      }

      if (text) {
        text.split('\n').forEach(function (line, i) {
          if (i > 0) change.splitBlock();
          change.insertText(line);
        });
      }
    }

    if (type == 'fragment') {
      change.insertFragment(fragment);
    }

    if (type == 'node' && __WEBPACK_IMPORTED_MODULE_8_slate__["a" /* Block */].isBlock(node)) {
      change.insertBlock(node.regenerateKey()).removeNodeByKey(node.key);
    }

    if (type == 'node' && __WEBPACK_IMPORTED_MODULE_8_slate__["g" /* Inline */].isInline(node)) {
      change.insertInline(node.regenerateKey()).removeNodeByKey(node.key);
    }

    // COMPAT: React's onSelect event breaks after an onDrop event
    // has fired in a node: https://github.com/facebook/react/issues/11379.
    // Until this is fixed in React, we dispatch a mouseup event on that
    // DOM node, since that will make it go back to normal.
    var focusNode = document.getNode(target.focusKey);
    var el = findDOMNode$1(focusNode, window);
    if (!el) return;

    el.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
  }

  /**
   * On input.
   *
   * @param {Event} eventvent
   * @param {Change} change
   */

  function onInput(event, change, editor) {
    debug$5('onInput', { event: event });

    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    var value = change.value;

    // Get the selection point.

    var native = window.getSelection();
    var anchorNode = native.anchorNode,
        anchorOffset = native.anchorOffset;

    var point = findPoint(anchorNode, anchorOffset, value);
    if (!point) return;

    // Get the text node and leaf in question.
    var document = value.document,
        selection = value.selection;

    var node = document.getDescendant(point.key);
    var block = document.getClosestBlock(node.key);
    var leaves = node.getLeaves();
    var lastText = block.getLastText();
    var lastLeaf = leaves.last();
    var start = 0;
    var end = 0;

    var leaf = leaves.find(function (r) {
      start = end;
      end += r.text.length;
      if (end >= point.offset) return true;
    }) || lastLeaf;

    // Get the text information.
    var text = leaf.text;
    var textContent = anchorNode.textContent;

    var isLastText = node == lastText;
    var isLastLeaf = leaf == lastLeaf;
    var lastChar = textContent.charAt(textContent.length - 1);

    // COMPAT: If this is the last leaf, and the DOM text ends in a new line,
    // we will have added another new line in <Leaf>'s render method to account
    // for browsers collapsing a single trailing new lines, so remove it.
    if (isLastText && isLastLeaf && lastChar == '\n') {
      textContent = textContent.slice(0, -1);
    }

    // If the text is no different, abort.
    if (textContent == text) return;

    // Determine what the selection should be after changing the text.
    var delta = textContent.length - text.length;
    var corrected = selection.collapseToEnd().move(delta);
    var entire = selection.moveAnchorTo(point.key, start).moveFocusTo(point.key, end);

    // Change the current value to have the leaf's text replaced.
    change.insertTextAtRange(entire, textContent, leaf.marks).select(corrected);
  }

  /**
   * On key down.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onKeyDown(event, change, editor) {
    debug$5('onKeyDown', { event: event });

    var value = change.value;

    // COMPAT: In iOS, some of these hotkeys are handled in the
    // `onNativeBeforeInput` handler of the `<Content>` component in order to
    // preserve native autocorrect behavior, so they shouldn't be handled here.

    if (HOTKEYS.SPLIT_BLOCK(event) && !IS_IOS) {
      return value.isInVoid ? change.collapseToStartOfNextText() : change.splitBlock();
    }

    if (HOTKEYS.DELETE_CHAR_BACKWARD(event) && !IS_IOS) {
      return change.deleteCharBackward();
    }

    if (HOTKEYS.DELETE_CHAR_FORWARD(event) && !IS_IOS) {
      return change.deleteCharForward();
    }

    if (HOTKEYS.DELETE_LINE_BACKWARD(event)) {
      return change.deleteLineBackward();
    }

    if (HOTKEYS.DELETE_LINE_FORWARD(event)) {
      return change.deleteLineForward();
    }

    if (HOTKEYS.DELETE_WORD_BACKWARD(event)) {
      return change.deleteWordBackward();
    }

    if (HOTKEYS.DELETE_WORD_FORWARD(event)) {
      return change.deleteWordForward();
    }

    if (HOTKEYS.REDO(event)) {
      return change.redo();
    }

    if (HOTKEYS.UNDO(event)) {
      return change.undo();
    }

    // COMPAT: Certain browsers don't handle the selection updates properly. In
    // Chrome, the selection isn't properly extended. And in Firefox, the
    // selection isn't properly collapsed. (2017/10/17)
    if (HOTKEYS.COLLAPSE_LINE_BACKWARD(event)) {
      event.preventDefault();
      return change.collapseLineBackward();
    }

    if (HOTKEYS.COLLAPSE_LINE_FORWARD(event)) {
      event.preventDefault();
      return change.collapseLineForward();
    }

    if (HOTKEYS.EXTEND_LINE_BACKWARD(event)) {
      event.preventDefault();
      return change.extendLineBackward();
    }

    if (HOTKEYS.EXTEND_LINE_FORWARD(event)) {
      event.preventDefault();
      return change.extendLineForward();
    }

    // COMPAT: If a void node is selected, or a zero-width text node adjacent to
    // an inline is selected, we need to handle these hotkeys manually because
    // browsers won't know what to do.
    if (HOTKEYS.COLLAPSE_CHAR_BACKWARD(event)) {
      var document = value.document,
          isInVoid = value.isInVoid,
          previousText = value.previousText,
          startText = value.startText;

      var isPreviousInVoid = previousText && document.hasVoidParent(previousText.key);
      if (isInVoid || isPreviousInVoid || startText.text == '') {
        event.preventDefault();
        return change.collapseCharBackward();
      }
    }

    if (HOTKEYS.COLLAPSE_CHAR_FORWARD(event)) {
      var _document = value.document,
          _isInVoid = value.isInVoid,
          nextText = value.nextText,
          _startText = value.startText;

      var isNextInVoid = nextText && _document.hasVoidParent(nextText.key);
      if (_isInVoid || isNextInVoid || _startText.text == '') {
        event.preventDefault();
        return change.collapseCharForward();
      }
    }

    if (HOTKEYS.EXTEND_CHAR_BACKWARD(event)) {
      var _document2 = value.document,
          _isInVoid2 = value.isInVoid,
          _previousText = value.previousText,
          _startText2 = value.startText;

      var _isPreviousInVoid = _previousText && _document2.hasVoidParent(_previousText.key);
      if (_isInVoid2 || _isPreviousInVoid || _startText2.text == '') {
        event.preventDefault();
        return change.extendCharBackward();
      }
    }

    if (HOTKEYS.EXTEND_CHAR_FORWARD(event)) {
      var _document3 = value.document,
          _isInVoid3 = value.isInVoid,
          _nextText = value.nextText,
          _startText3 = value.startText;

      var _isNextInVoid = _nextText && _document3.hasVoidParent(_nextText.key);
      if (_isInVoid3 || _isNextInVoid || _startText3.text == '') {
        event.preventDefault();
        return change.extendCharForward();
      }
    }
  }

  /**
   * On paste.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onPaste(event, change, editor) {
    debug$5('onPaste', { event: event });

    var transfer = getEventTransfer(event);
    var type = transfer.type,
        fragment = transfer.fragment,
        text = transfer.text;


    if (type == 'fragment') {
      change.insertFragment(fragment);
    }

    if (type == 'text' || type == 'html') {
      if (!text) return;
      var value = change.value;
      var document = value.document,
          selection = value.selection,
          startBlock = value.startBlock;

      if (startBlock.isVoid) return;

      var defaultBlock = startBlock;
      var defaultMarks = document.getInsertMarksAtRange(selection);
      var frag = __WEBPACK_IMPORTED_MODULE_13_slate_plain_serializer__["a" /* default */].deserialize(text, { defaultBlock: defaultBlock, defaultMarks: defaultMarks }).document;
      change.insertFragment(frag);
    }
  }

  /**
   * On select.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onSelect(event, change, editor) {
    debug$5('onSelect', { event: event });

    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    var value = change.value;
    var document = value.document;

    var native = window.getSelection();

    // If there are no ranges, the editor was blurred natively.
    if (!native.rangeCount) {
      change.blur();
      return;
    }

    // Otherwise, determine the Slate selection from the native one.
    var range = findRange(native, value);
    if (!range) return;

    var _range = range,
        anchorKey = _range.anchorKey,
        anchorOffset = _range.anchorOffset,
        focusKey = _range.focusKey,
        focusOffset = _range.focusOffset;

    var anchorText = document.getNode(anchorKey);
    var focusText = document.getNode(focusKey);
    var anchorInline = document.getClosestInline(anchorKey);
    var focusInline = document.getClosestInline(focusKey);
    var focusBlock = document.getClosestBlock(focusKey);
    var anchorBlock = document.getClosestBlock(anchorKey);

    // COMPAT: If the anchor point is at the start of a non-void, and the
    // focus point is inside a void node with an offset that isn't `0`, set
    // the focus offset to `0`. This is due to void nodes <span>'s being
    // positioned off screen, resulting in the offset always being greater
    // than `0`. Since we can't know what it really should be, and since an
    // offset of `0` is less destructive because it creates a hanging
    // selection, go with `0`. (2017/09/07)
    if (anchorBlock && !anchorBlock.isVoid && anchorOffset == 0 && focusBlock && focusBlock.isVoid && focusOffset != 0) {
      range = range.set('focusOffset', 0);
    }

    // COMPAT: If the selection is at the end of a non-void inline node, and
    // there is a node after it, put it in the node after instead. This
    // standardizes the behavior, since it's indistinguishable to the user.
    if (anchorInline && !anchorInline.isVoid && anchorOffset == anchorText.text.length) {
      var block = document.getClosestBlock(anchorKey);
      var next = block.getNextText(anchorKey);
      if (next) range = range.moveAnchorTo(next.key, 0);
    }

    if (focusInline && !focusInline.isVoid && focusOffset == focusText.text.length) {
      var _block = document.getClosestBlock(focusKey);
      var _next = _block.getNextText(focusKey);
      if (_next) range = range.moveFocusTo(_next.key, 0);
    }

    range = range.normalize(document);
    change.select(range);
  }

  /**
   * Render editor.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @return {Object}
   */

  function renderEditor(props, editor) {
    var handlers = EVENT_HANDLERS.reduce(function (obj, handler) {
      obj[handler] = editor[handler];
      return obj;
    }, {});

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Content, _extends({}, handlers, {
      autoCorrect: props.autoCorrect,
      className: props.className,
      children: props.children,
      editor: editor,
      readOnly: props.readOnly,
      role: props.role,
      spellCheck: props.spellCheck,
      style: props.style,
      tabIndex: props.tabIndex,
      tagName: props.tagName
    }));
  }

  /**
   * Render node.
   *
   * @param {Object} props
   * @return {Element}
   */

  function renderNode(props) {
    var attributes = props.attributes,
        children = props.children,
        node = props.node;

    if (node.object != 'block' && node.object != 'inline') return;
    var Tag = node.object == 'block' ? 'div' : 'span';
    var style = { position: 'relative' };
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      Tag,
      _extends({}, attributes, { style: style }),
      children
    );
  }

  /**
   * Render placeholder.
   *
   * @param {Object} props
   * @return {Element}
   */

  function renderPlaceholder(props) {
    var editor = props.editor,
        node = props.node;

    if (!editor.props.placeholder) return;
    if (editor.state.isComposing) return;
    if (node.object != 'block') return;
    if (!__WEBPACK_IMPORTED_MODULE_8_slate__["n" /* Text */].isTextList(node.nodes)) return;
    if (node.text != '') return;
    if (editor.value.document.getBlocks().size > 1) return;

    var style = {
      pointerEvents: 'none',
      display: 'inline-block',
      width: '0',
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      opacity: '0.333'
    };

    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'span',
      { contentEditable: false, style: style },
      editor.props.placeholder
    );
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onBeforeInput: onBeforeInput,
    onBlur: onBlur,
    onClick: onClick,
    onCopy: onCopy,
    onCut: onCut,
    onDragEnd: onDragEnd,
    onDragOver: onDragOver,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    onSelect: onSelect,
    renderEditor: renderEditor,
    renderNode: renderNode,
    renderPlaceholder: renderPlaceholder
  };
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$6 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:before');

/**
 * The core before plugin.
 *
 * @return {Object}
 */

function BeforePlugin() {
  var activeElement = null;
  var compositionCount = 0;
  var isComposing = false;
  var isCopying = false;
  var isDragging = false;

  /**
   * On before input.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onBeforeInput(event, change, editor) {
    if (editor.props.readOnly) return true;

    // COMPAT: React's `onBeforeInput` synthetic event is based on the native
    // `keypress` and `textInput` events. In browsers that support the native
    // `beforeinput` event, we instead use that event to trigger text insertion,
    // since it provides more useful information about the range being affected
    // and also preserves compatibility with iOS autocorrect, which would be
    // broken if we called `preventDefault()` on React's synthetic event here.
    // Since native `onbeforeinput` mainly benefits autocorrect and spellcheck
    // for mobile, on desktop it brings IME issue, limit its scope for now.
    if ((IS_IOS || IS_ANDROID) && SUPPORTED_EVENTS.beforeinput) return true;

    debug$6('onBeforeInput', { event: event });
  }

  /**
   * On blur.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onBlur(event, change, editor) {
    if (isCopying) return true;
    if (editor.props.readOnly) return true;

    var value = change.value;
    var relatedTarget = event.relatedTarget,
        target = event.target;

    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(target);

    // COMPAT: If the current `activeElement` is still the previous one, this is
    // due to the window being blurred when the tab itself becomes unfocused, so
    // we want to abort early to allow to editor to stay focused when the tab
    // becomes focused again.
    if (activeElement == window.document.activeElement) return true;

    // COMPAT: The `relatedTarget` can be null when the new focus target is not
    // a "focusable" element (eg. a `<div>` without `tabindex` set).
    if (relatedTarget) {
      var el = Object(__WEBPACK_IMPORTED_MODULE_14_react_dom__["findDOMNode"])(editor);

      // COMPAT: The event should be ignored if the focus is returning to the
      // editor from an embedded editable element (eg. an <input> element inside
      // a void node).
      if (relatedTarget == el) return true;

      // COMPAT: The event should be ignored if the focus is moving from the
      // editor to inside a void node's spacer element.
      if (relatedTarget.hasAttribute('data-slate-spacer')) return true;

      // COMPAT: The event should be ignored if the focus is moving to a non-
      // editable section of an element that isn't a void node (eg. a list item
      // of the check list example).
      var node = findNode(relatedTarget, value);
      if (el.contains(relatedTarget) && node && !node.isVoid) return true;
    }

    debug$6('onBlur', { event: event });
  }

  /**
   * On change.
   *
   * @param {Change} change
   * @param {Editor} editor
   */

  function onChange(change, editor) {
    var value = change.value;

    // If the value's schema isn't the editor's schema, update it. This can
    // happen on the initialization of the editor, or if the schema changes.
    // This change isn't save into history since only schema is updated.

    if (value.schema != editor.schema) {
      change.setValue({ schema: editor.schema }, { save: false }).normalize();
    }

    debug$6('onChange');
  }

  /**
   * On composition end.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCompositionEnd(event, change, editor) {
    var n = compositionCount;

    // The `count` check here ensures that if another composition starts
    // before the timeout has closed out this one, we will abort unsetting the
    // `isComposing` flag, since a composition is still in affect.
    window.requestAnimationFrame(function () {
      if (compositionCount > n) return;
      isComposing = false;

      // HACK: we need to re-render the editor here so that it will update its
      // placeholder in case one is currently rendered. This should be handled
      // differently ideally, in a less invasive way?
      editor.setState({ isComposing: false });
    });

    debug$6('onCompositionEnd', { event: event });
  }

  /**
   * On composition start.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCompositionStart(event, change, editor) {
    isComposing = true;
    compositionCount++;

    // HACK: we need to re-render the editor here so that it will update its
    // placeholder in case one is currently rendered. This should be handled
    // differently ideally, in a less invasive way?
    editor.setState({ isComposing: true });

    debug$6('onCompositionStart', { event: event });
  }

  /**
   * On copy.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCopy(event, change, editor) {
    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    isCopying = true;
    window.requestAnimationFrame(function () {
      return isCopying = false;
    });

    debug$6('onCopy', { event: event });
  }

  /**
   * On cut.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onCut(event, change, editor) {
    if (editor.props.readOnly) return true;

    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    isCopying = true;
    window.requestAnimationFrame(function () {
      return isCopying = false;
    });

    debug$6('onCut', { event: event });
  }

  /**
   * On drag end.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragEnd(event, change, editor) {
    isDragging = false;

    debug$6('onDragEnd', { event: event });
  }

  /**
   * On drag enter.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragEnter(event, change, editor) {
    debug$6('onDragEnter', { event: event });
  }

  /**
   * On drag exit.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragExit(event, change, editor) {
    debug$6('onDragExit', { event: event });
  }

  /**
   * On drag leave.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragLeave(event, change, editor) {
    debug$6('onDragLeave', { event: event });
  }

  /**
   * On drag over.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragOver(event, change, editor) {
    // If the target is inside a void node, and only in this case,
    // call `preventDefault` to signal that drops are allowed.
    // When the target is editable, dropping is already allowed by
    // default, and calling `preventDefault` hides the cursor.
    var node = findNode(event.target, editor.value);
    if (node.isVoid) event.preventDefault();

    // If a drag is already in progress, don't do this again.
    if (isDragging) return true;

    isDragging = true;
    event.nativeEvent.dataTransfer.dropEffect = 'move';

    debug$6('onDragOver', { event: event });
  }

  /**
   * On drag start.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDragStart(event, change, editor) {
    isDragging = true;

    debug$6('onDragStart', { event: event });
  }

  /**
   * On drop.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onDrop(event, change, editor) {
    // Nothing happens in read-only mode.
    if (editor.props.readOnly) return true;

    // Prevent default so the DOM's value isn't corrupted.
    event.preventDefault();

    debug$6('onDrop', { event: event });
  }

  /**
   * On focus.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onFocus(event, change, editor) {
    if (isCopying) return true;
    if (editor.props.readOnly) return true;

    var el = Object(__WEBPACK_IMPORTED_MODULE_14_react_dom__["findDOMNode"])(editor);

    // Save the new `activeElement`.
    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    activeElement = window.document.activeElement;

    // COMPAT: If the editor has nested editable elements, the focus can go to
    // those elements. In Firefox, this must be prevented because it results in
    // issues with keyboard navigation. (2017/03/30)
    if (IS_FIREFOX && event.target != el) {
      el.focus();
      return true;
    }

    debug$6('onFocus', { event: event });
  }

  /**
   * On input.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onInput(event, change, editor) {
    if (isComposing) return true;
    if (change.value.isBlurred) return true;

    debug$6('onInput', { event: event });
  }

  /**
   * On key down.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onKeyDown(event, change, editor) {
    if (editor.props.readOnly) return true;

    // When composing, we need to prevent all hotkeys from executing while
    // typing. However, certain characters also move the selection before
    // we're able to handle it, so prevent their default behavior.
    if (isComposing) {
      if (HOTKEYS.COMPOSING(event)) event.preventDefault();
      return true;
    }

    // Certain hotkeys have native behavior in contenteditable elements which
    // will cause our value to be out of sync, so prevent them.
    if (HOTKEYS.CONTENTEDITABLE(event) && !IS_IOS) {
      event.preventDefault();
    }

    debug$6('onKeyDown', { event: event });
  }

  /**
   * On paste.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onPaste(event, change, editor) {
    if (editor.props.readOnly) return true;

    // Prevent defaults so the DOM state isn't corrupted.
    event.preventDefault();

    debug$6('onPaste', { event: event });
  }

  /**
   * On select.
   *
   * @param {Event} event
   * @param {Change} change
   * @param {Editor} editor
   */

  function onSelect(event, change, editor) {
    if (isCopying) return true;
    if (isComposing) return true;
    if (editor.props.readOnly) return true;

    // Save the new `activeElement`.
    var window = __WEBPACK_IMPORTED_MODULE_9_get_window___default()(event.target);
    activeElement = window.document.activeElement;

    debug$6('onSelect', { event: event });
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onBeforeInput: onBeforeInput,
    onBlur: onBlur,
    onChange: onChange,
    onCompositionEnd: onCompositionEnd,
    onCompositionStart: onCompositionStart,
    onCopy: onCopy,
    onCut: onCut,
    onDragEnd: onDragEnd,
    onDragEnter: onDragEnter,
    onDragExit: onDragExit,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onFocus: onFocus,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    onSelect: onSelect
  };
}

/**
 * Noop.
 *
 * @return {Void}
 */

function noop() {}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$7 = __WEBPACK_IMPORTED_MODULE_2_debug___default()('slate:editor');

/**
 * Editor.
 *
 * @type {Component}
 */

var Editor = function (_React$Component) {
  inherits(Editor, _React$Component);

  /**
   * Constructor.
   *
   * @param {Object} props
   */

  /**
   * Property types.
   *
   * @type {Object}
   */

  function Editor(props) {
    classCallCheck(this, Editor);

    var _this = possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _initialiseProps$4.call(_this);

    _this.state = {};
    _this.tmp = {};
    _this.tmp.updates = 0;
    _this.tmp.resolves = 0;

    // Resolve the plugins and create a stack and schema from them.
    var plugins = _this.resolvePlugins(props.plugins, props.schema);
    var stack = __WEBPACK_IMPORTED_MODULE_8_slate__["m" /* Stack */].create({ plugins: plugins });
    var schema = __WEBPACK_IMPORTED_MODULE_8_slate__["l" /* Schema */].create({ plugins: plugins });
    _this.state.schema = schema;
    _this.state.stack = stack;

    // Run `onChange` on the passed-in value because we need to ensure that it
    // is normalized, and queue the resulting change.
    var change = props.value.change();
    stack.run('onChange', change, _this);
    _this.queueChange(change);
    _this.state.value = change.value;

    // Create a bound event handler for each event.
    EVENT_HANDLERS.forEach(function (handler) {
      _this[handler] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this.onEvent.apply(_this, [handler].concat(args));
      };
    });
    return _this;
  }

  /**
   * When the `props` are updated, create a new `Stack` if necessary and run
   * `onChange` to ensure the value is normalized.
   *
   * @param {Object} props
   */

  /**
   * Default properties.
   *
   * @type {Object}
   */

  /**
   * When the component first mounts, flush any temporary changes,
   * and then, focus the editor if `autoFocus` is set.
   */

  /**
   * When the component updates, flush any temporary change.
   */

  /**
   * Queue a `change` object, to be able to flush it later. This is required for
   * when a change needs to be applied to the value, but because of the React
   * lifecycle we can't apply that change immediately. So we cache it here and
   * later can call `this.flushChange()` to flush it.
   *
   * @param {Change} change
   */

  /**
   * Flush a temporarily stored `change` object, for when a change needed to be
   * made but couldn't because of React's lifecycle.
   */

  /**
   * Perform a change on the editor, passing `...args` to `change.call`.
   *
   * @param {Mixed} ...args
   */

  /**
   * Programmatically blur the editor.
   */

  /**
   * Programmatically focus the editor.
   */

  createClass(Editor, [{
    key: 'render',


    /**
     * Render the editor.
     *
     * @return {Element}
     */

    value: function render() {
      debug$7('render', this);

      var children = this.stack.map('renderPortal', this.value, this).map(function (child, i) {
        return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_15_react_portal___default.a,
          { key: i, isOpened: true },
          child
        );
      });

      var props = _extends({}, this.props, { children: children });
      var tree = this.stack.render('renderEditor', props, this);
      return tree;
    }

    /**
     * Resolve an array of plugins from `plugins` and `schema` props.
     *
     * In addition to the plugins provided in props, this will initialize three
     * other plugins:
     *
     * - The top-level editor plugin, which allows for top-level handlers, etc.
     * - The two "core" plugins, one before all the other and one after.
     *
     * @param {Array|Void} plugins
     * @param {Schema|Object|Void} schema
     * @return {Array}
     */

  }, {
    key: 'schema',


    /**
     * Getters for exposing public properties of the editor's state.
     */

    get: function get$$1() {
      return this.state.schema;
    }
  }, {
    key: 'stack',
    get: function get$$1() {
      return this.state.stack;
    }
  }, {
    key: 'value',
    get: function get$$1() {
      return this.state.value;
    }

    /**
     * On event.
     *
     * @param {String} handler
     * @param {Event} event
     */

    /**
     * On change.
     *
     * @param {Change} change
     */

  }]);
  return Editor;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

/**
 * Mix in the property types for the event handlers.
 */

Editor.propTypes = {
  autoCorrect: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  autoFocus: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  onChange: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func,
  placeholder: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.any,
  plugins: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.array,
  readOnly: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  role: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,
  schema: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  spellCheck: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  style: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.object,
  tabIndex: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.number,
  value: __WEBPACK_IMPORTED_MODULE_5_slate_prop_types__["a" /* default */].value.isRequired };
Editor.defaultProps = {
  autoFocus: false,
  autoCorrect: true,
  onChange: noop,
  plugins: [],
  readOnly: false,
  schema: {},
  spellCheck: true };

var _initialiseProps$4 = function _initialiseProps() {
  var _this2 = this;

  this.componentWillReceiveProps = function (props) {
    var schema = _this2.schema,
        stack = _this2.stack;

    // Increment the updates counter as a baseline.

    _this2.tmp.updates++;

    // If the plugins or the schema have changed, we need to re-resolve the
    // plugins, since it will result in a new stack and new validations.
    if (props.plugins != _this2.props.plugins || props.schema != _this2.props.schema) {
      var plugins = _this2.resolvePlugins(props.plugins, props.schema);
      stack = __WEBPACK_IMPORTED_MODULE_8_slate__["m" /* Stack */].create({ plugins: plugins });
      schema = __WEBPACK_IMPORTED_MODULE_8_slate__["l" /* Schema */].create({ plugins: plugins });
      _this2.setState({ schema: schema, stack: stack });

      // Increment the resolves counter.
      _this2.tmp.resolves++;

      // If we've resolved a few times already, and it's exactly in line with
      // the updates, then warn the user that they may be doing something wrong.
      if (_this2.tmp.resolves > 5 && _this2.tmp.resolves == _this2.tmp.updates) {
        __WEBPACK_IMPORTED_MODULE_7_slate_dev_logger__["a" /* default */].warn('A Slate <Editor> is re-resolving `props.plugins` or `props.schema` on each update, which leads to poor performance. This is often due to passing in a new `schema` or `plugins` prop with each render by declaring them inline in your render function. Do not do this!');
      }
    }

    // Run `onChange` on the passed-in value because we need to ensure that it
    // is normalized, and queue the resulting change.
    var change = props.value.change();
    stack.run('onChange', change, _this2);
    _this2.queueChange(change);
    _this2.setState({ value: change.value });
  };

  this.componentDidMount = function () {
    _this2.flushChange();

    if (_this2.props.autoFocus) {
      _this2.focus();
    }
  };

  this.componentDidUpdate = function () {
    _this2.flushChange();
  };

  this.queueChange = function (change) {
    if (change.operations.size) {
      debug$7('queueChange', { change: change });
      _this2.tmp.change = change;
    }
  };

  this.flushChange = function () {
    var change = _this2.tmp.change;


    if (change) {
      debug$7('flushChange', { change: change });
      delete _this2.tmp.change;
      _this2.props.onChange(change);
    }
  };

  this.change = function () {
    var _value$change;

    var change = (_value$change = _this2.value.change()).call.apply(_value$change, arguments);
    _this2.onChange(change);
  };

  this.blur = function () {
    _this2.change(function (c) {
      return c.blur();
    });
  };

  this.focus = function () {
    _this2.change(function (c) {
      return c.focus();
    });
  };

  this.onEvent = function (handler, event) {
    _this2.change(function (change) {
      _this2.stack.run(handler, event, change, _this2);
    });
  };

  this.onChange = function (change) {
    debug$7('onChange', { change: change });

    _this2.stack.run('onChange', change, _this2);
    var value = change.value;
    var onChange = _this2.props.onChange;

    if (value == _this2.value) return;
    onChange(change);
  };

  this.resolvePlugins = function (plugins, schema) {
    var beforePlugin = BeforePlugin();
    var afterPlugin = AfterPlugin();
    var editorPlugin = {
      schema: schema || {}
    };

    var _loop = function _loop(_prop) {
      // Skip `onChange` because the editor's `onChange` is special.
      if (_prop == 'onChange') return 'continue';

      // Skip `schema` because it can't be proxied easily, so it must be
      // passed in as an argument to this function instead.
      if (_prop == 'schema') return 'continue';

      // Define a function that will just proxies into `props`.
      editorPlugin[_prop] = function () {
        var _props;

        return _this2.props[_prop] && (_props = _this2.props)[_prop].apply(_props, arguments);
      };
    };

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = PLUGIN_PROPS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _prop = _step2.value;

        var _ret = _loop(_prop);

        if (_ret === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return [beforePlugin, editorPlugin].concat(toConsumableArray(plugins || []), [afterPlugin]);
  };
};

var _iteratorNormalCompletion$1 = true;
var _didIteratorError$1 = false;
var _iteratorError$1 = undefined;

try {
  for (var _iterator$1 = EVENT_HANDLERS[Symbol.iterator](), _step$1; !(_iteratorNormalCompletion$1 = (_step$1 = _iterator$1.next()).done); _iteratorNormalCompletion$1 = true) {
    var prop = _step$1.value;

    Editor.propTypes[prop] = __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func;
  }

  /**
   * Export.
   *
   * @type {Component}
   */
} catch (err) {
  _didIteratorError$1 = true;
  _iteratorError$1 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion$1 && _iterator$1.return) {
      _iterator$1.return();
    }
  } finally {
    if (_didIteratorError$1) {
      throw _iteratorError$1;
    }
  }
}

var index = {
  Editor: Editor,
  cloneFragment: cloneFragment,
  findDOMNode: findDOMNode$1,
  findDOMRange: findDOMRange,
  findNode: findNode,
  findRange: findRange,
  getEventRange: getEventRange,
  getEventTransfer: getEventTransfer,
  setEventTransfer: setEventTransfer,
  AfterPlugin: AfterPlugin,
  BeforePlugin: BeforePlugin
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=slate-react.es.js.map


/***/ }),

/***/ 2677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isBrowser */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["a"] = (isBrowser);


/***/ }),

/***/ 2678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  var object = parseHotkey(hotkey, options);
  var ret = event == null ? function (e) {
    return compareHotkey(object, e);
  } : compareHotkey(object, event);

  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length == 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = true;
      }

      // If there's only one key, and it's not a modifier, ignore the shift key
      // because it will already be taken into accout by the `event.key` value.
      if (length == 1 && !modifier && byKey) {
        ret.shiftKey = null;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) continue;

    if (key == 'key') {
      actual = event.key.toLowerCase();
    } else if (key == 'which') {
      actual = expected == 91 && event.which == 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected == false) continue;
    if (actual != expected) return false;
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ 2679:
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(2680);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 2680:
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 2681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slate__ = __webpack_require__(1551);


/**
 * Create a prop type checker for Slate objects with `name` and `validate`.
 *
 * @param {String} name
 * @param {Function} validate
 * @return {Function}
 */

function create(name, validate) {
  function check(isRequired, props, propName, componentName, location) {
    var value = props[propName];
    if (value == null && !isRequired) return null;
    if (value == null && isRequired) return new Error('The ' + location + ' `' + propName + '` is marked as required in `' + componentName + '`, but it was not supplied.');
    if (validate(value)) return null;
    return new Error('Invalid ' + location + ' `' + propName + '` supplied to `' + componentName + '`, expected a Slate `' + name + '` but received: ' + value);
  }

  function propType() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return check.apply(undefined, [false].concat(args));
  }

  propType.isRequired = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return check.apply(undefined, [true].concat(args));
  };

  return propType;
}

/**
 * Prop type checkers.
 *
 * @type {Object}
 */

var Types = {
  block: create('Block', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["a" /* Block */].isBlock(v);
  }),
  blocks: create('List<Block>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["a" /* Block */].isBlockList(v);
  }),
  change: create('Change', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["b" /* Change */].isChange(v);
  }),
  character: create('Character', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["c" /* Character */].isCharacter(v);
  }),
  characters: create('List<Character>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["c" /* Character */].isCharacterList(v);
  }),
  data: create('Data', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["d" /* Data */].isData(v);
  }),
  document: create('Document', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["e" /* Document */].isDocument(v);
  }),
  history: create('History', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["f" /* History */].isHistory(v);
  }),
  inline: create('Inline', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["g" /* Inline */].isInline(v);
  }),
  inlines: create('Inline', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["g" /* Inline */].isInlineList(v);
  }),
  leaf: create('Leaf', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["h" /* Leaf */].isLeaf(v);
  }),
  leaves: create('List<Leaf>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["h" /* Leaf */].isLeafList(v);
  }),
  mark: create('Mark', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["i" /* Mark */].isMark(v);
  }),
  marks: create('Set<Mark>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["i" /* Mark */].isMarkSet(v);
  }),
  node: create('Node', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["j" /* Node */].isNode(v);
  }),
  nodes: create('List<Node>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["j" /* Node */].isNodeList(v);
  }),
  range: create('Range', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["k" /* Range */].isRange(v);
  }),
  ranges: create('List<Range>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["k" /* Range */].isRangeList(v);
  }),
  schema: create('Schema', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["l" /* Schema */].isSchema(v);
  }),
  stack: create('Stack', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["m" /* Stack */].isStack(v);
  }),
  value: create('Value', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["o" /* Value */].isValue(v);
  }),
  text: create('Text', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["n" /* Text */].isText(v);
  }),
  texts: create('List<Text>', function (v) {
    return __WEBPACK_IMPORTED_MODULE_0_slate__["n" /* Text */].isTextList(v);
  })

  /**
   * Export.
   *
   * @type {Object}
   */

};

/* harmony default export */ __webpack_exports__["a"] = (Types);
//# sourceMappingURL=slate-prop-types.es.js.map


/***/ }),

/***/ 2682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(2683);

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ 2683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ 2684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GROUP_LEFT_TO_RIGHT,
    GROUP_RIGHT_TO_LEFT,
    EXPRESSION_LEFT_TO_RIGHT,
    EXPRESSION_RIGHT_TO_LEFT;

/*
 * Character ranges of left-to-right characters.
 */

GROUP_LEFT_TO_RIGHT = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
    '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
    '\uFE00-\uFE6F\uFEFD-\uFFFF';

/*
 * Character ranges of right-to-left characters.
 */

GROUP_RIGHT_TO_LEFT = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';

/*
 * Expression to match a left-to-right string.
 *
 * Matches the start of a string, followed by zero or
 * more non-right-to-left characters, followed by a
 * left-to-right character.
 */

EXPRESSION_LEFT_TO_RIGHT = new RegExp(
    '^[^' + GROUP_RIGHT_TO_LEFT + ']*[' + GROUP_LEFT_TO_RIGHT + ']'
);

/*
 * Expression to match a right-to-left string.
 *
 * Matches the start of a string, followed by zero or
 * more non-left-to-right characters, followed by a
 * right-to-left character.
 */

EXPRESSION_RIGHT_TO_LEFT = new RegExp(
    '^[^' + GROUP_LEFT_TO_RIGHT + ']*[' + GROUP_RIGHT_TO_LEFT + ']'
);

/**
 * Detect the direction of text.
 *
 * @param {string} value - value to stringify and check.
 * @return {string} - One of `"rtl"`, `"ltr"`, or
 *   `"neutral"`.
 */
function direction(value) {
    value = value.toString();

    if (EXPRESSION_RIGHT_TO_LEFT.test(value)) {
        return 'rtl';
    }

    if (EXPRESSION_LEFT_TO_RIGHT.test(value)) {
        return 'ltr';
    }

    return 'neutral';
}

/*
 * Expose `direction`.
 */

module.exports = direction;


/***/ }),

/***/ 2685:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/esrever v0.2.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
	var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

	var reverse = function(string) {
		// Step 1: deal with combining marks and astral symbols (surrogate pairs)
		string = string
			// Swap symbols with their combining marks so the combining marks go first
			.replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
				// Reverse the combining marks so they will end up in the same order
				// later on (after another round of reversing)
				return reverse($2) + $1;
			})
			// Swap high and low surrogates so the low surrogates go first
			.replace(regexSurrogatePair, '$2$1');
		// Step 2: reverse the code units in the string
		var result = '';
		var index = string.length;
		while (index--) {
			result += string.charAt(index);
		}
		return result;
	};

	/*--------------------------------------------------------------------------*/

	var esrever = {
		'version': '0.2.0',
		'reverse': reverse
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return esrever;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = esrever;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in esrever) {
				esrever.hasOwnProperty(key) && (freeExports[key] = esrever[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.esrever = esrever;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(61)(module), __webpack_require__(19)))

/***/ }),

/***/ 2686:
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(636),
    createAssigner = __webpack_require__(640);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),

/***/ 2687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHILD_OBJECT_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHILD_REQUIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHILD_TYPE_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHILD_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FIRST_CHILD_OBJECT_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FIRST_CHILD_TYPE_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LAST_CHILD_OBJECT_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LAST_CHILD_TYPE_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return NODE_DATA_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return NODE_IS_VOID_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return NODE_MARK_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return NODE_TEXT_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PARENT_OBJECT_INVALID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return PARENT_TYPE_INVALID; });
/**
 * Schema violations.
 *
 * @type {String}
 */

var CHILD_OBJECT_INVALID = 'child_object_invalid';
var CHILD_REQUIRED = 'child_required';
var CHILD_TYPE_INVALID = 'child_type_invalid';
var CHILD_UNKNOWN = 'child_unknown';
var FIRST_CHILD_OBJECT_INVALID = 'first_child_object_invalid';
var FIRST_CHILD_TYPE_INVALID = 'first_child_type_invalid';
var LAST_CHILD_OBJECT_INVALID = 'last_child_object_invalid';
var LAST_CHILD_TYPE_INVALID = 'last_child_type_invalid';
var NODE_DATA_INVALID = 'node_data_invalid';
var NODE_IS_VOID_INVALID = 'node_is_void_invalid';
var NODE_MARK_INVALID = 'node_mark_invalid';
var NODE_TEXT_INVALID = 'node_text_invalid';
var PARENT_OBJECT_INVALID = 'parent_object_invalid';
var PARENT_TYPE_INVALID = 'parent_type_invalid';


//# sourceMappingURL=slate-schema-violations.es.js.map


/***/ }),

/***/ 2688:
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(2689),
    flatRest = __webpack_require__(1576);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 2689:
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(2690),
    hasIn = __webpack_require__(645);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 2690:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(265),
    baseSet = __webpack_require__(635),
    castPath = __webpack_require__(162);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 2691:
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(2692);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 2692:
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(631),
    isFlattenable = __webpack_require__(2693);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 2693:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(94),
    isArguments = __webpack_require__(164),
    isArray = __webpack_require__(34);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 2694:
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(163),
    baseClone = __webpack_require__(2695),
    baseUnset = __webpack_require__(2709),
    castPath = __webpack_require__(162),
    copyObject = __webpack_require__(628),
    customOmitClone = __webpack_require__(2713),
    flatRest = __webpack_require__(1576),
    getAllKeysIn = __webpack_require__(1578);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 2695:
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(165),
    arrayEach = __webpack_require__(650),
    assignValue = __webpack_require__(268),
    baseAssign = __webpack_require__(2696),
    baseAssignIn = __webpack_require__(2697),
    cloneBuffer = __webpack_require__(637),
    copyArray = __webpack_require__(116),
    copySymbols = __webpack_require__(2698),
    copySymbolsIn = __webpack_require__(2699),
    getAllKeys = __webpack_require__(642),
    getAllKeysIn = __webpack_require__(1578),
    getTag = __webpack_require__(264),
    initCloneArray = __webpack_require__(2700),
    initCloneByTag = __webpack_require__(2701),
    initCloneObject = __webpack_require__(639),
    isArray = __webpack_require__(34),
    isBuffer = __webpack_require__(166),
    isMap = __webpack_require__(2705),
    isObject = __webpack_require__(25),
    isSet = __webpack_require__(2707),
    keys = __webpack_require__(115);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 2696:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(628),
    keys = __webpack_require__(115);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 2697:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(628),
    keysIn = __webpack_require__(267);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 2698:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(628),
    getSymbols = __webpack_require__(632);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 2699:
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(628),
    getSymbolsIn = __webpack_require__(1577);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 2700:
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 2701:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(629),
    cloneDataView = __webpack_require__(2702),
    cloneRegExp = __webpack_require__(2703),
    cloneSymbol = __webpack_require__(2704),
    cloneTypedArray = __webpack_require__(638);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 2702:
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(629);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 2703:
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 2704:
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(94);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 2705:
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(2706),
    baseUnary = __webpack_require__(266),
    nodeUtil = __webpack_require__(630);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 2706:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(264),
    isObjectLike = __webpack_require__(45);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 2707:
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(2708),
    baseUnary = __webpack_require__(266),
    nodeUtil = __webpack_require__(630);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 2708:
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(264),
    isObjectLike = __webpack_require__(45);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 2709:
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(162),
    last = __webpack_require__(2710),
    parent = __webpack_require__(2711),
    toKey = __webpack_require__(96);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 2710:
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 2711:
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(265),
    baseSlice = __webpack_require__(2712);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 2712:
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 2713:
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(270);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 2714:
/***/ (function(module, exports) {


/**
 * Has own property.
 *
 * @type {Function}
 */

var has = Object.prototype.hasOwnProperty

/**
 * To string.
 *
 * @type {Function}
 */

var toString = Object.prototype.toString

/**
 * Test whether a value is "empty".
 *
 * @param {Mixed} val
 * @return {Boolean}
 */

function isEmpty(val) {
  // Null and Undefined...
  if (val == null) return true

  // Booleans...
  if ('boolean' == typeof val) return false

  // Numbers...
  if ('number' == typeof val) return val === 0

  // Strings...
  if ('string' == typeof val) return val.length === 0

  // Functions...
  if ('function' == typeof val) return val.length === 0

  // Arrays...
  if (Array.isArray(val)) return val.length === 0

  // Errors...
  if (val instanceof Error) return val.message === ''

  // Objects...
  if (val.toString == toString) {
    switch (val.toString()) {

      // Maps, Sets, Files and Errors...
      case '[object File]':
      case '[object Map]':
      case '[object Set]': {
        return val.size === 0
      }

      // Plain objects...
      case '[object Object]': {
        for (var key in val) {
          if (has.call(val, key)) return false
        }

        return true
      }
    }
  }

  // Anything else...
  return false
}

/**
 * Export `isEmpty`.
 *
 * @type {Function}
 */

module.exports = isEmpty


/***/ }),

/***/ 2715:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This is a straight rip-off of the React.js ReactPropTypes.js proptype validators,
 * modified to make it possible to validate Immutable.js data.
 *     ImmutableTypes.listOf is patterned after React.PropTypes.arrayOf, but for Immutable.List
 *     ImmutableTypes.shape  is based on React.PropTypes.shape, but for any Immutable.Iterable
 */


var Immutable = __webpack_require__(73);

var ANONYMOUS = "<<anonymous>>";

var ImmutablePropTypes = {
  listOf: createListOfTypeChecker,
  mapOf: createMapOfTypeChecker,
  orderedMapOf: createOrderedMapOfTypeChecker,
  setOf: createSetOfTypeChecker,
  orderedSetOf: createOrderedSetOfTypeChecker,
  stackOf: createStackOfTypeChecker,
  iterableOf: createIterableOfTypeChecker,
  recordOf: createRecordOfTypeChecker,
  shape: createShapeChecker,
  contains: createShapeChecker,
  mapContains: createMapContainsChecker,
  // Primitive Types
  list: createImmutableTypeChecker("List", Immutable.List.isList),
  map: createImmutableTypeChecker("Map", Immutable.Map.isMap),
  orderedMap: createImmutableTypeChecker("OrderedMap", Immutable.OrderedMap.isOrderedMap),
  set: createImmutableTypeChecker("Set", Immutable.Set.isSet),
  orderedSet: createImmutableTypeChecker("OrderedSet", Immutable.OrderedSet.isOrderedSet),
  stack: createImmutableTypeChecker("Stack", Immutable.Stack.isStack),
  seq: createImmutableTypeChecker("Seq", Immutable.Seq.isSeq),
  record: createImmutableTypeChecker("Record", function (isRecord) {
    return isRecord instanceof Immutable.Record;
  }),
  iterable: createImmutableTypeChecker("Iterable", Immutable.Iterable.isIterable)
};

function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }
  if (propValue instanceof Immutable.Iterable) {
    return "Immutable." + propValue.toSource().split(" ")[0];
  }
  return propType;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    propFullName = propFullName || propName;
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = location;
      if (isRequired) {
        return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
      }
    } else {
      return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var locationName = location;
      var propType = getPropType(propValue);
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    if (typeof typeChecker !== "function") {
      return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var propValues = propValue.toArray();
    for (var i = 0, len = propValues.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createKeysTypeChecker(typeChecker) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (typeof typeChecker !== "function") {
      return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var keys = propValue.keySeq().toArray();
    for (var i = 0, len = keys.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createListOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
}

function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(undefined, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(undefined, args);
  }

  return createChainableTypeChecker(validate);
}

function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
}

function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

function createSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
}

function createOrderedSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
}

function createStackOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
}

function createIterableOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
}

function createRecordOfTypeChecker(recordKeys) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!(propValue instanceof Immutable.Record)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
    }
    for (var key in recordKeys) {
      var checker = recordKeys[key];
      if (!checker) {
        continue;
      }
      var mutablePropValue = propValue.toObject();
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

// there is some irony in the fact that shapeTypes is a standard hash and not an immutable collection
function createShapeTypeChecker(shapeTypes) {
  var immutableClassName = arguments[1] === undefined ? "Iterable" : arguments[1];
  var immutableClassTypeValidator = arguments[2] === undefined ? Immutable.Iterable.isIterable : arguments[2];

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }
    var mutablePropValue = propValue.toObject();
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes);
}

function createMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
}

module.exports = ImmutablePropTypes;

/***/ }),

/***/ 2716:
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var getDocument = __webpack_require__(2717);

/**
 * Module exports.
 */

module.exports = getWindow;

var needsIEFallback = __webpack_require__(2718);

/**
 * Returns `true` if `w` is a Window object, or `false` otherwise.
 *
 * @param {Mixed} w - Window object, maybe
 * @return {Boolean}
 * @private
 */

function isWindow (w) {
  return w && w.window === w;
}

/**
 * Returns the `window` object associated with the given `node`, which may be
 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
 * object that references the Window in some way, this function will find it.
 *
 * @param {Mixed} node - DOM node, selection, or range in which to find the `window` object
 * @return {Window} the `window` object associated with `node`
 * @public
 */

function getWindow(node) {
  if (isWindow(node)) {
    return node;
  }

  var doc = getDocument(node);

  if (needsIEFallback) {
    // In IE 6-8, only the variable 'window' can be used to connect events (others
    // may be only copies).
    doc.parentWindow.execScript('document._parentWindow = window;', 'Javascript');
    var win = doc._parentWindow;
    // to prevent memory leak, unset it after use
    // another possibility is to add an onUnload handler,
    // (which seems overkill to @liucougar)
    doc._parentWindow = null;
    return win;
  } else {
    // standards-compliant and newer IE
    return doc.defaultView || doc.parentWindow;
  }
}


/***/ }),

/***/ 2717:
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = getDocument;

// defined by w3c
var DOCUMENT_NODE = 9;

/**
 * Returns `true` if `w` is a Document object, or `false` otherwise.
 *
 * @param {?} d - Document object, maybe
 * @return {Boolean}
 * @private
 */

function isDocument (d) {
  return d && d.nodeType === DOCUMENT_NODE;
}

/**
 * Returns the `document` object associated with the given `node`, which may be
 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
 * object that references the Document in some way, this function will find it.
 *
 * @param {Mixed} node - DOM node, selection, or range in which to find the `document` object
 * @return {Document} the `document` object associated with `node`
 * @public
 */

function getDocument(node) {
  if (isDocument(node)) {
    return node;

  } else if (isDocument(node.ownerDocument)) {
    return node.ownerDocument;

  } else if (isDocument(node.document)) {
    return node.document;

  } else if (node.parentNode) {
    return getDocument(node.parentNode);

  // Range support
  } else if (node.commonAncestorContainer) {
    return getDocument(node.commonAncestorContainer);

  } else if (node.startContainer) {
    return getDocument(node.startContainer);

  // Selection support
  } else if (node.anchorNode) {
    return getDocument(node.anchorNode);
  }
}


/***/ }),

/***/ 2718:
/***/ (function(module, exports) {

// this is a browser-only module. There is a non-browser equivalent in the same
// directory. This is done using a `package.json` browser field.
// old-IE fallback logic: http://stackoverflow.com/a/10260692
module.exports =  !!document.attachEvent && window !== document.parentWindow;


/***/ }),

/***/ 2719:
/***/ (function(module, exports) {

function isBackward(selection) {
    var startNode = selection.anchorNode;
    var startOffset = selection.anchorOffset;
    var endNode = selection.focusNode;
    var endOffset = selection.focusOffset;

    var position = startNode.compareDocumentPosition(endNode);

    return !(position === 4 || (position === 0 && startOffset < endOffset));
}

module.exports = isBackward;


/***/ }),

/***/ 2720:
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(95),
    isObject = __webpack_require__(25);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 2721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slate__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_base64__ = __webpack_require__(2722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_base64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_base64__);



/**
 * Encode a JSON `object` as base-64 `string`.
 *
 * @param {Object} object
 * @return {String}
 */

function encode(object) {
  var string = JSON.stringify(object);
  var encoded = Object(__WEBPACK_IMPORTED_MODULE_1_isomorphic_base64__["btoa"])(encodeURIComponent(string));
  return encoded;
}

/**
 * Decode a base-64 `string` to a JSON `object`.
 *
 * @param {String} string
 * @return {Object}
 */

function decode(string) {
  var decoded = decodeURIComponent(Object(__WEBPACK_IMPORTED_MODULE_1_isomorphic_base64__["atob"])(string));
  var object = JSON.parse(decoded);
  return object;
}

/**
 * Deserialize a Value `string`.
 *
 * @param {String} string
 * @return {Value}
 */

function deserialize(string, options) {
  var raw = decode(string);
  var value = __WEBPACK_IMPORTED_MODULE_0_slate__["o" /* Value */].fromJSON(raw, options);
  return value;
}

/**
 * Deserialize a Node `string`.
 *
 * @param {String} string
 * @return {Node}
 */

function deserializeNode(string, options) {
  var raw = decode(string);
  var node = __WEBPACK_IMPORTED_MODULE_0_slate__["j" /* Node */].fromJSON(raw, options);
  return node;
}

/**
 * Serialize a `value`.
 *
 * @param {Value} value
 * @return {String}
 */

function serialize(value, options) {
  var raw = value.toJSON(options);
  var encoded = encode(raw);
  return encoded;
}

/**
 * Serialize a `node`.
 *
 * @param {Node} node
 * @return {String}
 */

function serializeNode(node, options) {
  var raw = node.toJSON(options);
  var encoded = encode(raw);
  return encoded;
}

/**
 * Export.
 *
 * @type {Object}
 */

var index = {
  deserialize: deserialize,
  deserializeNode: deserializeNode,
  serialize: serialize,
  serializeNode: serializeNode
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=slate-base64-serializer.es.js.map


/***/ }),

/***/ 2722:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.atob = self.atob.bind(self);
exports.btoa = self.btoa.bind(self);


/***/ }),

/***/ 2723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_slate__ = __webpack_require__(1551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Deserialize a plain text `string` to a Slate value.
 *
 * @param {String} string
 * @param {Object} options
 *   @property {Boolean} toJSON
 *   @property {String|Object|Block} defaultBlock
 *   @property {Array|Set} defaultMarks
 * @return {Value}
 */

function deserialize(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$defaultBlock = options.defaultBlock,
      defaultBlock = _options$defaultBlock === undefined ? 'line' : _options$defaultBlock,
      _options$defaultMarks = options.defaultMarks,
      defaultMarks = _options$defaultMarks === undefined ? [] : _options$defaultMarks,
      _options$toJSON = options.toJSON,
      toJSON = _options$toJSON === undefined ? false : _options$toJSON;


  if (__WEBPACK_IMPORTED_MODULE_1_immutable__["Set"].isSet(defaultMarks)) {
    defaultMarks = defaultMarks.toArray();
  }

  defaultBlock = __WEBPACK_IMPORTED_MODULE_0_slate__["j" /* Node */].createProperties(defaultBlock);
  defaultMarks = defaultMarks.map(__WEBPACK_IMPORTED_MODULE_0_slate__["i" /* Mark */].createProperties);

  var json = {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: string.split('\n').map(function (line) {
        return _extends({}, defaultBlock, {
          object: 'block',
          isVoid: false,
          data: {},
          nodes: [{
            object: 'text',
            leaves: [{
              object: 'leaf',
              text: line,
              marks: defaultMarks
            }]
          }]
        });
      })
    }
  };

  var ret = toJSON ? json : __WEBPACK_IMPORTED_MODULE_0_slate__["o" /* Value */].fromJSON(json);
  return ret;
}

/**
 * Serialize a Slate `value` to a plain text string.
 *
 * @param {Value} value
 * @return {String}
 */

function serialize(value) {
  return serializeNode(value.document);
}

/**
 * Serialize a `node` to plain text.
 *
 * @param {Node} node
 * @return {String}
 */

function serializeNode(node) {
  if (node.object == 'document' || node.object == 'block' && __WEBPACK_IMPORTED_MODULE_0_slate__["a" /* Block */].isBlockList(node.nodes)) {
    return node.nodes.map(serializeNode).join('\n');
  } else {
    return node.text;
  }
}

/**
 * Export.
 *
 * @type {Object}
 */

var index = {
  deserialize: deserialize,
  serialize: serialize
};

/* harmony default export */ __webpack_exports__["a"] = (index);
//# sourceMappingURL=slate-plain-serializer.es.js.map


/***/ }),

/***/ 2724:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODES = {
  ESCAPE: 27
};

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

    _this.state = { active: false };
    _this.handleWrapperClick = _this.handleWrapperClick.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    _this.portal = null;
    _this.node = null;
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }

      if (this.props.closeOnOutsideClick) {
        document.addEventListener('mouseup', this.handleOutsideMouseClick);
        document.addEventListener('touchstart', this.handleOutsideMouseClick);
      }

      if (this.props.isOpened) {
        this.openPortal();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      // portal's 'is open' state is handled through the prop isOpened
      if (typeof newProps.isOpened !== 'undefined') {
        if (newProps.isOpened) {
          if (this.state.active) {
            this.renderPortal(newProps);
          } else {
            this.openPortal(newProps);
          }
        }
        if (!newProps.isOpened && this.state.active) {
          this.closePortal();
        }
      }

      // portal handles its own 'is open' state
      if (typeof newProps.isOpened === 'undefined' && this.state.active) {
        this.renderPortal(newProps);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }

      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('mouseup', this.handleOutsideMouseClick);
        document.removeEventListener('touchstart', this.handleOutsideMouseClick);
      }

      this.closePortal(true);
    }
  }, {
    key: 'handleWrapperClick',
    value: function handleWrapperClick(e) {
      e.preventDefault();
      e.stopPropagation();
      if (this.state.active) {
        return;
      }
      this.openPortal();
    }
  }, {
    key: 'openPortal',
    value: function openPortal() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      this.setState({ active: true });
      this.renderPortal(props);
      this.props.onOpen(this.node);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      var _this2 = this;

      var isUnmounted = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var resetPortalState = function resetPortalState(overrideIsUnmounted) {
        if (_this2.node) {
          _reactDom2.default.unmountComponentAtNode(_this2.node);
          document.body.removeChild(_this2.node);
        }
        _this2.portal = null;
        _this2.node = null;

        var finalIsUnmounted = overrideIsUnmounted === undefined ? isUnmounted : overrideIsUnmounted;

        if (finalIsUnmounted !== true) {
          _this2.setState({ active: false });
        }
      };

      if (this.state.active) {
        if (this.props.beforeClose) {
          this.props.beforeClose(this.node, resetPortalState);
        } else {
          resetPortalState();
        }

        this.props.onClose();
      }
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }

      var root = (0, _reactDom.findDOMNode)(this.portal);
      if (root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }

      e.stopPropagation();
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.node) {
        this.node = document.createElement('div');
        document.body.appendChild(this.node);
      }

      var children = props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof props.children.type === 'function') {
        children = _react2.default.cloneElement(props.children, { closePortal: this.closePortal });
      }

      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, children, this.node, this.props.onUpdate);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.openByClickOn) {
        return _react2.default.cloneElement(this.props.openByClickOn, { onClick: this.handleWrapperClick });
      }
      return null;
    }
  }]);

  return Portal;
}(_react2.default.Component);

exports.default = Portal;


Portal.propTypes = {
  children: _propTypes2.default.element.isRequired,
  openByClickOn: _propTypes2.default.element,
  closeOnEsc: _propTypes2.default.bool,
  closeOnOutsideClick: _propTypes2.default.bool,
  isOpened: _propTypes2.default.bool,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  beforeClose: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};

Portal.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onUpdate: function onUpdate() {}
};
module.exports = exports['default'];


/***/ })

});