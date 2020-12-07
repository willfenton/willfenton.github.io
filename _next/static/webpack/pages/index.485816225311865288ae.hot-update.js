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

var ctx = canvas.getContext('2d');
var ax = randRange(0.5, 1);
var ay = randRange(0.5, 1);
var randomAngle = false;
var linesPerSecond = 30;
var lines = [];
function initialize(canvas) {
  // update 60 times per second
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

    animate();
  }, 1000 / 60); // add new lines

  window.setInterval(function () {
    lines.push(new Line());
  }, 1000 / linesPerSecond);
}

function animate() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiTGluZSIsInZlbG9jaXR5IiwicmFuZG9tQW5nbGUiLCJheCIsImF5Iiwibm9ybSIsIngiLCJkeCIsImNhbnZhcyIsIndpZHRoIiwiZHkiLCJ2ZXJ0aWNhbENsZWFyYW5jZSIsInkiLCJoZWlnaHQiLCJob3Jpem9udGFsQ2xlYXJhbmNlIiwibGVuZ3RoIiwidGhpY2tuZXNzIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG91ciIsImN0eCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRfeCIsImVuZF94Iiwic3RhcnRfeSIsImVuZF95IiwiZ2V0Q29udGV4dCIsImxpbmVzUGVyU2Vjb25kIiwibGluZXMiLCJpbml0aWFsaXplIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJmaWx0ZXIiLCJvIiwib3V0T2ZWaWV3IiwibGluZSIsInVwZGF0ZSIsImFuaW1hdGUiLCJwdXNoIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xlYXJSZWN0IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDQyxHQUFoQyxFQUFxRDtBQUNqRCxTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0gsQyxDQUVEOzs7SUFDTUksSTtBQWVGLGtCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsUUFBTCxHQUFnQixD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Q0ksTUFBTixDQUFhLFVBQUNDLENBQUQ7QUFBQSxhQUFPLENBQUNBLENBQUMsQ0FBQ0MsU0FBRixFQUFSO0FBQUEsS0FBYixDQUFSLENBRnFCLENBSXJCOztBQUpxQiwrQ0FLRk4sS0FMRTtBQUFBOztBQUFBO0FBS3JCLDBEQUEwQjtBQUFBLFlBQWZPLElBQWU7QUFDdEJBLFlBQUksQ0FBQ0MsTUFBTDtBQUNIO0FBUG9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBU3JCQyxXQUFPO0FBQ1YsR0FWRCxFQVVHLE9BQU8sRUFWVixFQUZ3RCxDQWN4RDs7QUFDQVAsUUFBTSxDQUFDQyxXQUFQLENBQW1CLFlBQU07QUFDckJILFNBQUssQ0FBQ1UsSUFBTixDQUFXLElBQUk3QyxJQUFKLEVBQVg7QUFDSCxHQUZELEVBRUcsT0FBT2tDLGNBRlY7QUFHSDs7QUFFRCxTQUFTVSxPQUFULEdBQXlCO0FBQ3JCcEMsUUFBTSxDQUFDQyxLQUFQLEdBQWU0QixNQUFNLENBQUNTLFVBQXRCO0FBQ0F0QyxRQUFNLENBQUNLLE1BQVAsR0FBZ0J3QixNQUFNLENBQUNVLFdBQXZCLENBRnFCLENBSXJCO0FBQ0E7QUFFQTs7QUFDQTFCLEtBQUcsQ0FBQzJCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CeEMsTUFBTSxDQUFDQyxLQUEzQixFQUFrQ0QsTUFBTSxDQUFDSyxNQUF6QyxFQVJxQixDQVVyQjs7QUFWcUIsOENBV0ZzQixLQVhFO0FBQUE7O0FBQUE7QUFXckIsMkRBQTBCO0FBQUEsVUFBZk8sSUFBZTtBQUN0QkEsVUFBSSxDQUFDTyxJQUFMO0FBQ0g7QUFib0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWN4QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ODU4MTYyMjUzMTE4NjUyODhhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmFuZFJhbmdlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxufVxuXG4vLyBDYW52YXNcbmNsYXNzIExpbmUge1xuICAgIHZlbG9jaXR5OiBudW1iZXJcbiAgICBheDogbnVtYmVyXG4gICAgYXk6IG51bWJlclxuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGR4OiBudW1iZXJcbiAgICBkeTogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICB0aGlja25lc3M6IG51bWJlclxuICAgIGh1ZTogbnVtYmVyXG4gICAgc2F0dXJhdGlvbjogbnVtYmVyXG4gICAgbGlnaHRuZXNzOiBudW1iZXJcbiAgICBjb2xvdXI6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSA0XG5cbiAgICAgICAgLy8gQW5nbGUgdmVjdG9yXG4gICAgICAgIGlmIChyYW5kb21BbmdsZSkge1xuICAgICAgICAgICAgdGhpcy5heCA9IHJhbmRSYW5nZSgwLCAxKVxuICAgICAgICAgICAgdGhpcy5heSA9IHJhbmRSYW5nZSgwLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5heCA9IGF4XG4gICAgICAgICAgICB0aGlzLmF5ID0gYXlcbiAgICAgICAgICAgIC8vaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXggPSBheDtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXkgPSBheTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgLy9lbHNlIHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXggPSBheTtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXkgPSBheDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplXG4gICAgICAgIGNvbnN0IG5vcm0gPSAodGhpcy5heCAqKiAyICsgdGhpcy5heSAqKiAyKSAqKiAwLjVcbiAgICAgICAgdGhpcy5heCAvPSBub3JtXG4gICAgICAgIHRoaXMuYXkgLz0gbm9ybVxuXG4gICAgICAgIC8vIERldGVybWluZSBzdGFydGluZyBwb3NpdGlvbiBhbmQgZGlyZWN0aW9uXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSBnb2VzIGxlZnQgdG8gcmlnaHQgb3IgcmlnaHQgdG8gbGVmdFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZHggPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoXG4gICAgICAgICAgICAgICAgdGhpcy5keCA9IC0xXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5lIHdpbGwgbW92ZSB1cCBvciBkb3duXG4gICAgICAgICAgICB0aGlzLmR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMVxuXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENsZWFyYW5jZSA9IGNhbnZhcy53aWR0aCAqICh0aGlzLmF5IC8gdGhpcy5heClcblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgc3RhcnRpbmcgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHJhbmRSYW5nZSgwIC0gdmVydGljYWxDbGVhcmFuY2UsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHJhbmRSYW5nZSgwLCBjYW52YXMuaGVpZ2h0ICsgdmVydGljYWxDbGVhcmFuY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSBnb2VzIHRvcCB0byBib3R0b20gb3IgYm90dG9tIHRvIHRvcFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAvLyBUb3BcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5keSA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQm90dG9tXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAtMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSB3aWxsIG1vdmUgbGVmdCBvciByaWdodFxuICAgICAgICAgICAgdGhpcy5keCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDFcblxuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbENsZWFyYW5jZSA9IGNhbnZhcy5oZWlnaHQgKiAodGhpcy5heCAvIHRoaXMuYXkpXG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5keCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSByYW5kUmFuZ2UoMCAtIGhvcml6b250YWxDbGVhcmFuY2UsIGNhbnZhcy53aWR0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gcmFuZFJhbmdlKDAsIGNhbnZhcy53aWR0aCArIGhvcml6b250YWxDbGVhcmFuY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBsZW5ndGhcbiAgICAgICAgdGhpcy5sZW5ndGggPSByYW5kUmFuZ2UoMzAwLCAxMTAwKVxuICAgICAgICAvLyB0aGlzLmxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiA4KSArIDMpICogMTAwO1xuXG4gICAgICAgIHRoaXMudGhpY2tuZXNzID0gOFxuXG4gICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBjb2xvdXIgKEhTTClcbiAgICAgICAgdGhpcy5odWUgPSByYW5kUmFuZ2UoMCwgMzYwKVxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSAxMDBcbiAgICAgICAgdGhpcy5saWdodG5lc3MgPSA1MFxuICAgICAgICAvLyB0aGlzLnNhdHVyYXRpb24gPSBNYXRoLmZsb29yKHJhbmRSYW5nZSg3NSwgMTAwKSk7XG4gICAgICAgIC8vIHRoaXMubGlnaHRuZXNzID0gTWF0aC5mbG9vcihyYW5kUmFuZ2UoMzUsIDY1KSk7XG5cbiAgICAgICAgdGhpcy5jb2xvdXIgPSBgaHNsKCR7dGhpcy5odWV9LCR7dGhpcy5zYXR1cmF0aW9ufSUsJHt0aGlzLmxpZ2h0bmVzc30lKWBcbiAgICB9XG5cbiAgICBkcmF3KCk6IHZvaWQge1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy50aGlja25lc3NcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvdXJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyXG5cbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy54IC0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLmxlbmd0aCwgdGhpcy55IC0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLmxlbmd0aClcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSlcbiAgICAgICAgY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLnZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5heSAqIHRoaXMudmVsb2NpdHlcblxuICAgICAgICAvLyBCb3VuY2Ugb2ZmIHdhbGxzXG4gICAgICAgIC8vIGlmICh0aGlzLnggPCAwIHx8IHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy5keCAqPSAtMTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLmR5ICo9IC0xO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb3V0T2ZWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzdGFydF94ID0gdGhpcy54IC0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLmxlbmd0aFxuICAgICAgICBjb25zdCBlbmRfeCA9IHRoaXMueFxuXG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB0aGlzLnkgLSB0aGlzLmR5ICogdGhpcy5heSAqIHRoaXMubGVuZ3RoXG4gICAgICAgIGNvbnN0IGVuZF95ID0gdGhpcy55XG5cbiAgICAgICAgaWYgKHN0YXJ0X3ggPCAwICYmIGVuZF94IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeCA+IGNhbnZhcy53aWR0aCAmJiBlbmRfeCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeSA8IDAgJiYgZW5kX3kgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydF95ID4gY2FudmFzLmhlaWdodCAmJiBlbmRfeSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG5jb25zdCBheCA9IHJhbmRSYW5nZSgwLjUsIDEpXG5jb25zdCBheSA9IHJhbmRSYW5nZSgwLjUsIDEpXG5cbmNvbnN0IHJhbmRvbUFuZ2xlID0gZmFsc2VcbmNvbnN0IGxpbmVzUGVyU2Vjb25kID0gMzBcblxubGV0IGxpbmVzOiBBcnJheTxMaW5lPiA9IFtdXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiB2b2lkIHtcbiAgICAvLyB1cGRhdGUgNjAgdGltZXMgcGVyIHNlY29uZFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSBvYmplY3RzIG91dCBvZiB2aWV3XG4gICAgICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKChvKSA9PiAhby5vdXRPZlZpZXcoKSlcblxuICAgICAgICAvLyB1cGRhdGUgb2JqZWN0c1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGxpbmUudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKVxuICAgIH0sIDEwMDAgLyA2MClcblxuICAgIC8vIGFkZCBuZXcgbGluZXNcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsaW5lcy5wdXNoKG5ldyBMaW5lKCkpXG4gICAgfSwgMTAwMCAvIGxpbmVzUGVyU2Vjb25kKVxufVxuXG5mdW5jdGlvbiBhbmltYXRlKCk6IHZvaWQge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgLy8gY2FsbCBhbmltYXRlIGluIGEgbG9vcCBmb3IgZWFjaCBmcmFtZVxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIC8vIGRyYXcgb2JqZWN0c1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsaW5lLmRyYXcoKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=