"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A = void 0;

require("core-js/modules/es6.object.define-property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// for (let i = 0; i < 100; ++i) {
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