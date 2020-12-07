webpackHotUpdate_N_E("pages/index",{

/***/ "./lib/canvasAnimation.ts":
/*!********************************!*\
  !*** ./lib/canvasAnimation.ts ***!
  \********************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony import */ var C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function randRange(min, max) {
  return Math.random() * (max - min) + min;
} // Canvas


var Line = /*#__PURE__*/function () {
  function Line(canvas, ctx) {
    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Line);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "velocity", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ax", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ay", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dx", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "dy", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "length", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "thickness", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "hue", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "saturation", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "lightness", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "colour", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "canvas", void 0);

    Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "ctx", void 0);

    this.canvas = canvas;
    this.ctx = ctx;
    this.velocity = 4; // Angle vector

    if (randomAngle) {
      this.ax = randRange(0, 1);
      this.ay = randRange(0, 1);
    } else {
      this.ax = ax;
      this.ay = ay; //if (Math.random() > 0.5) {
      //    this.ax = ax;
      //    this.ay = ay;
      //}
      //else {
      //    this.ax = ay;
      //    this.ay = ax;
      //}
    } // Normalize


    var norm = Math.pow(Math.pow(this.ax, 2) + Math.pow(this.ay, 2), 0.5);
    this.ax /= norm;
    this.ay /= norm; // Determine starting position and direction

    if (Math.random() > 0.5) {
      // Randomly determine whether the line goes left to right or right to left
      if (Math.random() > 0.5) {
        // Left
        this.x = 0;
        this.dx = 1;
      } else {
        // Right
        this.x = canvas.width;
        this.dx = -1;
      } // Randomly determine whether the line will move up or down


      this.dy = Math.random() > 0.5 ? -1 : 1;
      var verticalClearance = canvas.width * (this.ay / this.ax); // Randomly determine line starting position

      if (this.dy > 0) {
        this.y = randRange(0 - verticalClearance, canvas.height);
      } else {
        this.y = randRange(0, canvas.height + verticalClearance);
      }
    } else {
      // Randomly determine whether the line goes top to bottom or bottom to top
      if (Math.random() > 0.5) {
        // Top
        this.y = 0;
        this.dy = 1;
      } else {
        // Bottom
        this.y = canvas.height;
        this.dy = -1;
      } // Randomly determine whether the line will move left or right


      this.dx = Math.random() > 0.5 ? -1 : 1;
      var horizontalClearance = canvas.height * (this.ax / this.ay); // Randomly determine line starting position

      if (this.dx > 0) {
        this.x = randRange(0 - horizontalClearance, canvas.width);
      } else {
        this.x = randRange(0, canvas.width + horizontalClearance);
      }
    } // Randomly determine line length


    this.length = randRange(300, 1100); // this.length = Math.round((Math.random() * 8) + 3) * 100;

    this.thickness = 8; // Randomly determine colour (HSL)

    this.hue = randRange(0, 360);
    this.saturation = 100;
    this.lightness = 50; // this.saturation = Math.floor(randRange(75, 100));
    // this.lightness = Math.floor(randRange(35, 65));

    this.colour = "hsl(".concat(this.hue, ",").concat(this.saturation, "%,").concat(this.lightness, "%)");
  }

  Object(C_Users_wfenton_Documents_Projects_willfenton_github_io_willfenton_dev_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Line, [{
    key: "draw",
    value: function draw() {
      this.ctx.lineWidth = this.thickness;
      this.ctx.strokeStyle = this.colour;
      this.ctx.fillStyle = this.colour;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x - this.dx * this.ax * this.length, this.y - this.dy * this.ay * this.length);
      this.ctx.lineTo(this.x, this.y);
      this.ctx.stroke();
    }
  }, {
    key: "update",
    value: function update() {
      this.x += this.dx * this.ax * this.velocity;
      this.y += this.dy * this.ay * this.velocity; // Bounce off walls
      // if (this.x < 0 || this.x > canvas.width) {
      //     this.dx *= -1;
      // }
      // if (this.y < 0 || this.y > canvas.height) {
      //     this.dy *= -1;
      // }
    }
  }, {
    key: "outOfView",
    value: function outOfView() {
      var start_x = this.x - this.dx * this.ax * this.length;
      var end_x = this.x;
      var start_y = this.y - this.dy * this.ay * this.length;
      var end_y = this.y;

      if (start_x < 0 && end_x < 0) {
        return true;
      }

      if (start_x > this.canvas.width && end_x > this.canvas.width) {
        return true;
      }

      if (start_y < 0 && end_y < 0) {
        return true;
      }

      if (start_y > this.canvas.height && end_y > this.canvas.height) {
        return true;
      }

      return false;
    }
  }]);

  return Line;
}();

var ax = randRange(0.5, 1);
var ay = randRange(0.5, 1);
var randomAngle = false;
var linesPerSecond = 30;
var lines = [];
function initialize(canvas) {
  var ctx = canvas.getContext('2d'); // update 60 times per second

  window.setInterval(function () {
    // remove objects out of view
    lines = lines.filter(function (o) {
      return !o.outOfView();
    }); // update objects

    var _iterator = _createForOfIteratorHelper(lines),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;
        line.update();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    animate(canvas, ctx);
  }, 1000 / 60); // add new lines

  window.setInterval(function () {
    lines.push(new Line(canvas, ctx));
  }, 1000 / linesPerSecond);
}

function animate(canvas, ctx) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight; // call animate in a loop for each frame
  // requestAnimationFrame(animate);
  // clear the canvas

  ctx.clearRect(0, 0, canvas.width, canvas.height); // draw objects

  var _iterator2 = _createForOfIteratorHelper(lines),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var line = _step2.value;
      line.draw();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiTGluZSIsImNhbnZhcyIsImN0eCIsInZlbG9jaXR5IiwicmFuZG9tQW5nbGUiLCJheCIsImF5Iiwibm9ybSIsIngiLCJkeCIsIndpZHRoIiwiZHkiLCJ2ZXJ0aWNhbENsZWFyYW5jZSIsInkiLCJoZWlnaHQiLCJob3Jpem9udGFsQ2xlYXJhbmNlIiwibGVuZ3RoIiwidGhpY2tuZXNzIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG91ciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRfeCIsImVuZF94Iiwic3RhcnRfeSIsImVuZF95IiwibGluZXNQZXJTZWNvbmQiLCJsaW5lcyIsImluaXRpYWxpemUiLCJnZXRDb250ZXh0Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJmaWx0ZXIiLCJvIiwib3V0T2ZWaWV3IiwibGluZSIsInVwZGF0ZSIsImFuaW1hdGUiLCJwdXNoIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xlYXJSZWN0IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDQyxHQUFoQyxFQUFxRDtBQUNqRCxTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0gsQyxDQUVEOzs7SUFDTUksSTtBQWlCRixnQkFBWUMsTUFBWixFQUF1Q0MsR0FBdkMsRUFBc0U7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFB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O0FBQUE7QUFXN0UsMkRBQTBCO0FBQUEsVUFBZlEsSUFBZTtBQUN0QkEsVUFBSSxDQUFDTyxJQUFMO0FBQ0g7QUFiNEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWNoRiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NWJiMzFjMjdiMDg0ZjRkZWI2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2EgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnXG5cbmZ1bmN0aW9uIHJhbmRSYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbn1cblxuLy8gQ2FudmFzXG5jbGFzcyBMaW5lIHtcbiAgICB2ZWxvY2l0eTogbnVtYmVyXG4gICAgYXg6IG51bWJlclxuICAgIGF5OiBudW1iZXJcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBkeDogbnVtYmVyXG4gICAgZHk6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgdGhpY2tuZXNzOiBudW1iZXJcbiAgICBodWU6IG51bWJlclxuICAgIHNhdHVyYXRpb246IG51bWJlclxuICAgIGxpZ2h0bmVzczogbnVtYmVyXG4gICAgY29sb3VyOiBzdHJpbmdcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50XG4gICAgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG5cbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDRcblxuICAgICAgICAvLyBBbmdsZSB2ZWN0b3JcbiAgICAgICAgaWYgKHJhbmRvbUFuZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLmF4ID0gcmFuZFJhbmdlKDAsIDEpXG4gICAgICAgICAgICB0aGlzLmF5ID0gcmFuZFJhbmdlKDAsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmF4ID0gYXhcbiAgICAgICAgICAgIHRoaXMuYXkgPSBheVxuICAgICAgICAgICAgLy9pZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgLy8gICAgdGhpcy5heCA9IGF4O1xuICAgICAgICAgICAgLy8gICAgdGhpcy5heSA9IGF5O1xuICAgICAgICAgICAgLy99XG4gICAgICAgICAgICAvL2Vsc2Uge1xuICAgICAgICAgICAgLy8gICAgdGhpcy5heCA9IGF5O1xuICAgICAgICAgICAgLy8gICAgdGhpcy5heSA9IGF4O1xuICAgICAgICAgICAgLy99XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb3JtYWxpemVcbiAgICAgICAgY29uc3Qgbm9ybSA9ICh0aGlzLmF4ICoqIDIgKyB0aGlzLmF5ICoqIDIpICoqIDAuNVxuICAgICAgICB0aGlzLmF4IC89IG5vcm1cbiAgICAgICAgdGhpcy5heSAvPSBub3JtXG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHN0YXJ0aW5nIHBvc2l0aW9uIGFuZCBkaXJlY3Rpb25cbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5lIGdvZXMgbGVmdCB0byByaWdodCBvciByaWdodCB0byBsZWZ0XG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgICAgIC8vIExlZnRcbiAgICAgICAgICAgICAgICB0aGlzLnggPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5keCA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gUmlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLnggPSBjYW52YXMud2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLmR4ID0gLTFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgd2lsbCBtb3ZlIHVwIG9yIGRvd25cbiAgICAgICAgICAgIHRoaXMuZHkgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxXG5cbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsQ2xlYXJhbmNlID0gY2FudmFzLndpZHRoICogKHRoaXMuYXkgLyB0aGlzLmF4KVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBzdGFydGluZyBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuZHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gcmFuZFJhbmdlKDAgLSB2ZXJ0aWNhbENsZWFyYW5jZSwgY2FudmFzLmhlaWdodClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy55ID0gcmFuZFJhbmdlKDAsIGNhbnZhcy5oZWlnaHQgKyB2ZXJ0aWNhbENsZWFyYW5jZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5lIGdvZXMgdG9wIHRvIGJvdHRvbSBvciBib3R0b20gdG8gdG9wXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgICAgIC8vIFRvcFxuICAgICAgICAgICAgICAgIHRoaXMueSA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmR5ID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBCb3R0b21cbiAgICAgICAgICAgICAgICB0aGlzLnkgPSBjYW52YXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5keSA9IC0xXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5lIHdpbGwgbW92ZSBsZWZ0IG9yIHJpZ2h0XG4gICAgICAgICAgICB0aGlzLmR4ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMVxuXG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsQ2xlYXJhbmNlID0gY2FudmFzLmhlaWdodCAqICh0aGlzLmF4IC8gdGhpcy5heSlcblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgc3RhcnRpbmcgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLmR4ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHJhbmRSYW5nZSgwIC0gaG9yaXpvbnRhbENsZWFyYW5jZSwgY2FudmFzLndpZHRoKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSByYW5kUmFuZ2UoMCwgY2FudmFzLndpZHRoICsgaG9yaXpvbnRhbENsZWFyYW5jZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIGxlbmd0aFxuICAgICAgICB0aGlzLmxlbmd0aCA9IHJhbmRSYW5nZSgzMDAsIDExMDApXG4gICAgICAgIC8vIHRoaXMubGVuZ3RoID0gTWF0aC5yb3VuZCgoTWF0aC5yYW5kb20oKSAqIDgpICsgMykgKiAxMDA7XG5cbiAgICAgICAgdGhpcy50aGlja25lc3MgPSA4XG5cbiAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGNvbG91ciAoSFNMKVxuICAgICAgICB0aGlzLmh1ZSA9IHJhbmRSYW5nZSgwLCAzNjApXG4gICAgICAgIHRoaXMuc2F0dXJhdGlvbiA9IDEwMFxuICAgICAgICB0aGlzLmxpZ2h0bmVzcyA9IDUwXG4gICAgICAgIC8vIHRoaXMuc2F0dXJhdGlvbiA9IE1hdGguZmxvb3IocmFuZFJhbmdlKDc1LCAxMDApKTtcbiAgICAgICAgLy8gdGhpcy5saWdodG5lc3MgPSBNYXRoLmZsb29yKHJhbmRSYW5nZSgzNSwgNjUpKTtcblxuICAgICAgICB0aGlzLmNvbG91ciA9IGBoc2woJHt0aGlzLmh1ZX0sJHt0aGlzLnNhdHVyYXRpb259JSwke3RoaXMubGlnaHRuZXNzfSUpYFxuICAgIH1cblxuICAgIGRyYXcoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvdXJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvdXJcblxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKVxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy54IC0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLmxlbmd0aCwgdGhpcy55IC0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLmxlbmd0aClcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMueCwgdGhpcy55KVxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy52ZWxvY2l0eVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLnZlbG9jaXR5XG5cbiAgICAgICAgLy8gQm91bmNlIG9mZiB3YWxsc1xuICAgICAgICAvLyBpZiAodGhpcy54IDwgMCB8fCB0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZHggKj0gLTE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHRoaXMueSA8IDAgfHwgdGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgdGhpcy5keSAqPSAtMTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG91dE9mVmlldygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGhcbiAgICAgICAgY29uc3QgZW5kX3ggPSB0aGlzLnhcblxuICAgICAgICBjb25zdCBzdGFydF95ID0gdGhpcy55IC0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLmxlbmd0aFxuICAgICAgICBjb25zdCBlbmRfeSA9IHRoaXMueVxuXG4gICAgICAgIGlmIChzdGFydF94IDwgMCAmJiBlbmRfeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3ggPiB0aGlzLmNhbnZhcy53aWR0aCAmJiBlbmRfeCA+IHRoaXMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydF95IDwgMCAmJiBlbmRfeSA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3kgPiB0aGlzLmNhbnZhcy5oZWlnaHQgJiYgZW5kX3kgPiB0aGlzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5jb25zdCBheCA9IHJhbmRSYW5nZSgwLjUsIDEpXG5jb25zdCBheSA9IHJhbmRSYW5nZSgwLjUsIDEpXG5cbmNvbnN0IHJhbmRvbUFuZ2xlID0gZmFsc2VcbmNvbnN0IGxpbmVzUGVyU2Vjb25kID0gMzBcblxubGV0IGxpbmVzOiBBcnJheTxMaW5lPiA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgLy8gdXBkYXRlIDYwIHRpbWVzIHBlciBzZWNvbmRcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyByZW1vdmUgb2JqZWN0cyBvdXQgb2Ygdmlld1xuICAgICAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcigobykgPT4gIW8ub3V0T2ZWaWV3KCkpXG5cbiAgICAgICAgLy8gdXBkYXRlIG9iamVjdHNcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsaW5lLnVwZGF0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKGNhbnZhcywgY3R4KVxuICAgIH0sIDEwMDAgLyA2MClcblxuICAgIC8vIGFkZCBuZXcgbGluZXNcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsaW5lcy5wdXNoKG5ldyBMaW5lKGNhbnZhcywgY3R4KSlcbiAgICB9LCAxMDAwIC8gbGluZXNQZXJTZWNvbmQpXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIC8vIGNhbGwgYW5pbWF0ZSBpbiBhIGxvb3AgZm9yIGVhY2ggZnJhbWVcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvLyBkcmF3IG9iamVjdHNcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGluZS5kcmF3KClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9