"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = void 0;

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("regenerator-runtime/runtime");

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(genFunc);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
} // for (let i = 0; i < 100; ++i) {
//     console.log(i);
// }


var A =
/*#__PURE__*/
function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "func",
    value: function func() {
      console.log('aaa');
    }
  }]);

  return A;
}();

exports.A = A;

function genFunc() {
  return regeneratorRuntime.wrap(function genFunc$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return [1, 2, 3];

        case 2:
          _context2.next = 4;
          return 4;

        case 4:
          return _context2.abrupt("return", 100);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked);
}

function getFunc1() {
  var _context = {};
  var idx = 0;
  var sum = 10;

  _context[Symbol.iterator] = function () {
    return {
      next: function next() {
        if (idx < sum) {
          return {
            value: idx++,
            done: false
          };
        } else {
          return {
            value: idx++,
            done: true
          };
        }
      }
    };
  };

  return _context;
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = genFunc()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var v = _step.value;
    console.log(v);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
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
  for (var _iterator2 = getFunc1()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _v = _step2.value;
    console.log(_v);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}