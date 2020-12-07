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
  function Line() {
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
      ctx.lineWidth = this.thickness;
      ctx.strokeStyle = this.colour;
      ctx.fillStyle = this.colour;
      ctx.beginPath();
      ctx.moveTo(this.x - this.dx * this.ax * this.length, this.y - this.dy * this.ay * this.length);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
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

      if (start_x > canvas.width && end_x > canvas.width) {
        return true;
      }

      if (start_y < 0 && end_y < 0) {
        return true;
      }

      if (start_y > canvas.height && end_y > canvas.height) {
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
    lines.push(new Line());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiTGluZSIsInZlbG9jaXR5IiwicmFuZG9tQW5nbGUiLCJheCIsImF5Iiwibm9ybSIsIngiLCJkeCIsImNhbnZhcyIsIndpZHRoIiwiZHkiLCJ2ZXJ0aWNhbENsZWFyYW5jZSIsInkiLCJoZWlnaHQiLCJob3Jpem9udGFsQ2xlYXJhbmNlIiwibGVuZ3RoIiwidGhpY2tuZXNzIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG91ciIsImN0eCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRfeCIsImVuZF94Iiwic3RhcnRfeSIsImVuZF95IiwibGluZXNQZXJTZWNvbmQiLCJsaW5lcyIsImluaXRpYWxpemUiLCJnZXRDb250ZXh0Iiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJmaWx0ZXIiLCJvIiwib3V0T2ZWaWV3IiwibGluZSIsInVwZGF0ZSIsImFuaW1hdGUiLCJwdXNoIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xlYXJSZWN0IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDQyxHQUFoQyxFQUFxRDtBQUNqRCxTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0gsQyxDQUVEOzs7SUFDTUksSTtBQWVGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsUUFBTCxHQUFnQixD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QUssQ0FBQ0ssTUFBTixDQUFhLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNBLENBQUMsQ0FBQ0MsU0FBRixFQUFSO0FBQUEsS0FBYixDQUFSLENBRnFCLENBSXJCOztBQUpxQiwrQ0FLRlAsS0FMRTtBQUFBOztBQUFBO0FBS3JCLDBEQUEwQjtBQUFBLFlBQWZRLElBQWU7QUFDdEJBLFlBQUksQ0FBQ0MsTUFBTDtBQUNIO0FBUG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU3JCQyxXQUFPLENBQUNwQyxNQUFELEVBQVNhLEdBQVQsQ0FBUDtBQUNILEdBVkQsRUFVRyxPQUFPLEVBVlYsRUFKd0QsQ0FnQnhEOztBQUNBZ0IsUUFBTSxDQUFDQyxXQUFQLENBQW1CLFlBQU07QUFDckJKLFNBQUssQ0FBQ1csSUFBTixDQUFXLElBQUk3QyxJQUFKLEVBQVg7QUFDSCxHQUZELEVBRUcsT0FBT2lDLGNBRlY7QUFHSDs7QUFFRCxTQUFTVyxPQUFULENBQWlCcEMsTUFBakIsRUFBNENhLEdBQTVDLEVBQWlGO0FBQzdFYixRQUFNLENBQUNDLEtBQVAsR0FBZTRCLE1BQU0sQ0FBQ1MsVUFBdEI7QUFDQXRDLFFBQU0sQ0FBQ0ssTUFBUCxHQUFnQndCLE1BQU0sQ0FBQ1UsV0FBdkIsQ0FGNkUsQ0FJN0U7QUFDQTtBQUVBOztBQUNBMUIsS0FBRyxDQUFDMkIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0J4QyxNQUFNLENBQUNDLEtBQTNCLEVBQWtDRCxNQUFNLENBQUNLLE1BQXpDLEVBUjZFLENBVTdFOztBQVY2RSw4Q0FXMURxQixLQVgwRDtBQUFBOztBQUFBO0FBVzdFLDJEQUEwQjtBQUFBLFVBQWZRLElBQWU7QUFDdEJBLFVBQUksQ0FBQ08sSUFBTDtBQUNIO0FBYjRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjaEYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTg2YzNkOWJjYTNkYjQ5N2I1YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJhbmRSYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbn1cblxuLy8gQ2FudmFzXG5jbGFzcyBMaW5lIHtcbiAgICB2ZWxvY2l0eTogbnVtYmVyXG4gICAgYXg6IG51bWJlclxuICAgIGF5OiBudW1iZXJcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBkeDogbnVtYmVyXG4gICAgZHk6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgdGhpY2tuZXNzOiBudW1iZXJcbiAgICBodWU6IG51bWJlclxuICAgIHNhdHVyYXRpb246IG51bWJlclxuICAgIGxpZ2h0bmVzczogbnVtYmVyXG4gICAgY29sb3VyOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gNFxuXG4gICAgICAgIC8vIEFuZ2xlIHZlY3RvclxuICAgICAgICBpZiAocmFuZG9tQW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgICAgIHRoaXMuYXkgPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSBheFxuICAgICAgICAgICAgdGhpcy5heSA9IGF5XG4gICAgICAgICAgICAvL2lmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXg7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vZWxzZSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXk7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXg7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZVxuICAgICAgICBjb25zdCBub3JtID0gKHRoaXMuYXggKiogMiArIHRoaXMuYXkgKiogMikgKiogMC41XG4gICAgICAgIHRoaXMuYXggLz0gbm9ybVxuICAgICAgICB0aGlzLmF5IC89IG5vcm1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgc3RhcnRpbmcgcG9zaXRpb24gYW5kIGRpcmVjdGlvblxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyBsZWZ0IHRvIHJpZ2h0IG9yIHJpZ2h0IHRvIGxlZnRcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmR4ID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSaWdodFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aFxuICAgICAgICAgICAgICAgIHRoaXMuZHggPSAtMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSB3aWxsIG1vdmUgdXAgb3IgZG93blxuICAgICAgICAgICAgdGhpcy5keSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDFcblxuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDbGVhcmFuY2UgPSBjYW52YXMud2lkdGggKiAodGhpcy5heSAvIHRoaXMuYXgpXG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCAtIHZlcnRpY2FsQ2xlYXJhbmNlLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCwgY2FudmFzLmhlaWdodCArIHZlcnRpY2FsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyB0b3AgdG8gYm90dG9tIG9yIGJvdHRvbSB0byB0b3BcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gVG9wXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJvdHRvbVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmR5ID0gLTFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgd2lsbCBtb3ZlIGxlZnQgb3IgcmlnaHRcbiAgICAgICAgICAgIHRoaXMuZHggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxXG5cbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxDbGVhcmFuY2UgPSBjYW52YXMuaGVpZ2h0ICogKHRoaXMuYXggLyB0aGlzLmF5KVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBzdGFydGluZyBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gcmFuZFJhbmdlKDAgLSBob3Jpem9udGFsQ2xlYXJhbmNlLCBjYW52YXMud2lkdGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHJhbmRSYW5nZSgwLCBjYW52YXMud2lkdGggKyBob3Jpem9udGFsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoID0gcmFuZFJhbmdlKDMwMCwgMTEwMClcbiAgICAgICAgLy8gdGhpcy5sZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOCkgKyAzKSAqIDEwMDtcblxuICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDhcblxuICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgY29sb3VyIChIU0wpXG4gICAgICAgIHRoaXMuaHVlID0gcmFuZFJhbmdlKDAsIDM2MClcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gMTAwXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gNTBcbiAgICAgICAgLy8gdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5mbG9vcihyYW5kUmFuZ2UoNzUsIDEwMCkpO1xuICAgICAgICAvLyB0aGlzLmxpZ2h0bmVzcyA9IE1hdGguZmxvb3IocmFuZFJhbmdlKDM1LCA2NSkpO1xuXG4gICAgICAgIHRoaXMuY29sb3VyID0gYGhzbCgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSlgXG4gICAgfVxuXG4gICAgZHJhdygpOiB2b2lkIHtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3VyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG91clxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGgsIHRoaXMueSAtIHRoaXMuZHkgKiB0aGlzLmF5ICogdGhpcy5sZW5ndGgpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy52ZWxvY2l0eVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLnZlbG9jaXR5XG5cbiAgICAgICAgLy8gQm91bmNlIG9mZiB3YWxsc1xuICAgICAgICAvLyBpZiAodGhpcy54IDwgMCB8fCB0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZHggKj0gLTE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHRoaXMueSA8IDAgfHwgdGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgdGhpcy5keSAqPSAtMTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG91dE9mVmlldygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGhcbiAgICAgICAgY29uc3QgZW5kX3ggPSB0aGlzLnhcblxuICAgICAgICBjb25zdCBzdGFydF95ID0gdGhpcy55IC0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLmxlbmd0aFxuICAgICAgICBjb25zdCBlbmRfeSA9IHRoaXMueVxuXG4gICAgICAgIGlmIChzdGFydF94IDwgMCAmJiBlbmRfeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3ggPiBjYW52YXMud2lkdGggJiYgZW5kX3ggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3kgPCAwICYmIGVuZF95IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeSA+IGNhbnZhcy5oZWlnaHQgJiYgZW5kX3kgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgYXggPSByYW5kUmFuZ2UoMC41LCAxKVxuY29uc3QgYXkgPSByYW5kUmFuZ2UoMC41LCAxKVxuXG5jb25zdCByYW5kb21BbmdsZSA9IGZhbHNlXG5jb25zdCBsaW5lc1BlclNlY29uZCA9IDMwXG5cbmxldCBsaW5lczogQXJyYXk8TGluZT4gPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuICAgIC8vIHVwZGF0ZSA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgLy8gcmVtb3ZlIG9iamVjdHMgb3V0IG9mIHZpZXdcbiAgICAgICAgbGluZXMgPSBsaW5lcy5maWx0ZXIoKG8pID0+ICFvLm91dE9mVmlldygpKVxuXG4gICAgICAgIC8vIHVwZGF0ZSBvYmplY3RzXG4gICAgICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICAgICAgbGluZS51cGRhdGUoKVxuICAgICAgICB9XG5cbiAgICAgICAgYW5pbWF0ZShjYW52YXMsIGN0eClcbiAgICB9LCAxMDAwIC8gNjApXG5cbiAgICAvLyBhZGQgbmV3IGxpbmVzXG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGluZXMucHVzaChuZXcgTGluZSgpKVxuICAgIH0sIDEwMDAgLyBsaW5lc1BlclNlY29uZClcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgLy8gY2FsbCBhbmltYXRlIGluIGEgbG9vcCBmb3IgZWFjaCBmcmFtZVxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIC8vIGRyYXcgb2JqZWN0c1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsaW5lLmRyYXcoKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=