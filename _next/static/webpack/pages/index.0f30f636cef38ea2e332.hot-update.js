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

function getCanvasElementById(id) {
  var canvas = document.getElementById(id);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("The element of id \"".concat(id, "\" is not a HTMLCanvasElement. Make sure a <canvas id=\"").concat(id, "\"\"> element is present in the document."));
  }

  return canvas;
}

var getCanvasRenderingContext2D = function getCanvasRenderingContext2D(canvas) {
  var context = canvas.getContext('2d');

  if (context === null) {
    throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
  }

  return context;
};

var updateInterval = null;
var newLineInterval = null;
function initialize(canvasElementId) {
  var canvas = getCanvasElementById(canvasElementId);
  var ctx = getCanvasRenderingContext2D(canvas); // update 60 times per second

  updateInterval = window.setInterval(function () {
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

  newLineInterval = window.setInterval(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiTGluZSIsImNhbnZhcyIsImN0eCIsInZlbG9jaXR5IiwicmFuZG9tQW5nbGUiLCJheCIsImF5Iiwibm9ybSIsIngiLCJkeCIsIndpZHRoIiwiZHkiLCJ2ZXJ0aWNhbENsZWFyYW5jZSIsInkiLCJoZWlnaHQiLCJob3Jpem9udGFsQ2xlYXJhbmNlIiwibGVuZ3RoIiwidGhpY2tuZXNzIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG91ciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRfeCIsImVuZF94Iiwic3RhcnRfeSIsImVuZF95IiwibGluZXNQZXJTZWNvbmQiLCJsaW5lcyIsImdldENhbnZhc0VsZW1lbnRCeUlkIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJFcnJvciIsImdldENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlSW50ZXJ2YWwiLCJuZXdMaW5lSW50ZXJ2YWwiLCJpbml0aWFsaXplIiwiY2FudmFzRWxlbWVudElkIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJmaWx0ZXIiLCJvIiwib3V0T2ZWaWV3IiwibGluZSIsInVwZGF0ZSIsImFuaW1hdGUiLCJwdXNoIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiY2xlYXJSZWN0IiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQWdDQyxHQUFoQyxFQUFxRDtBQUNqRCxTQUFPQyxJQUFJLENBQUNDLE1BQUws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ZjMwZjYzNmNlZjM4ZWEyZTMzMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmFuZFJhbmdlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pblxufVxuXG4vLyBDYW52YXNcbmNsYXNzIExpbmUge1xuICAgIHZlbG9jaXR5OiBudW1iZXJcbiAgICBheDogbnVtYmVyXG4gICAgYXk6IG51bWJlclxuICAgIHg6IG51bWJlclxuICAgIHk6IG51bWJlclxuICAgIGR4OiBudW1iZXJcbiAgICBkeTogbnVtYmVyXG4gICAgbGVuZ3RoOiBudW1iZXJcbiAgICB0aGlja25lc3M6IG51bWJlclxuICAgIGh1ZTogbnVtYmVyXG4gICAgc2F0dXJhdGlvbjogbnVtYmVyXG4gICAgbGlnaHRuZXNzOiBudW1iZXJcbiAgICBjb2xvdXI6IHN0cmluZ1xuICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXNcbiAgICAgICAgdGhpcy5jdHggPSBjdHhcblxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gNFxuXG4gICAgICAgIC8vIEFuZ2xlIHZlY3RvclxuICAgICAgICBpZiAocmFuZG9tQW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgICAgIHRoaXMuYXkgPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSBheFxuICAgICAgICAgICAgdGhpcy5heSA9IGF5XG4gICAgICAgICAgICAvL2lmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXg7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vZWxzZSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXk7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXg7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZVxuICAgICAgICBjb25zdCBub3JtID0gKHRoaXMuYXggKiogMiArIHRoaXMuYXkgKiogMikgKiogMC41XG4gICAgICAgIHRoaXMuYXggLz0gbm9ybVxuICAgICAgICB0aGlzLmF5IC89IG5vcm1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgc3RhcnRpbmcgcG9zaXRpb24gYW5kIGRpcmVjdGlvblxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyBsZWZ0IHRvIHJpZ2h0IG9yIHJpZ2h0IHRvIGxlZnRcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmR4ID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSaWdodFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aFxuICAgICAgICAgICAgICAgIHRoaXMuZHggPSAtMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSB3aWxsIG1vdmUgdXAgb3IgZG93blxuICAgICAgICAgICAgdGhpcy5keSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDFcblxuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDbGVhcmFuY2UgPSBjYW52YXMud2lkdGggKiAodGhpcy5heSAvIHRoaXMuYXgpXG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCAtIHZlcnRpY2FsQ2xlYXJhbmNlLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCwgY2FudmFzLmhlaWdodCArIHZlcnRpY2FsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyB0b3AgdG8gYm90dG9tIG9yIGJvdHRvbSB0byB0b3BcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gVG9wXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJvdHRvbVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmR5ID0gLTFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgd2lsbCBtb3ZlIGxlZnQgb3IgcmlnaHRcbiAgICAgICAgICAgIHRoaXMuZHggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxXG5cbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxDbGVhcmFuY2UgPSBjYW52YXMuaGVpZ2h0ICogKHRoaXMuYXggLyB0aGlzLmF5KVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBzdGFydGluZyBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gcmFuZFJhbmdlKDAgLSBob3Jpem9udGFsQ2xlYXJhbmNlLCBjYW52YXMud2lkdGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHJhbmRSYW5nZSgwLCBjYW52YXMud2lkdGggKyBob3Jpem9udGFsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoID0gcmFuZFJhbmdlKDMwMCwgMTEwMClcbiAgICAgICAgLy8gdGhpcy5sZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOCkgKyAzKSAqIDEwMDtcblxuICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDhcblxuICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgY29sb3VyIChIU0wpXG4gICAgICAgIHRoaXMuaHVlID0gcmFuZFJhbmdlKDAsIDM2MClcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gMTAwXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gNTBcbiAgICAgICAgLy8gdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5mbG9vcihyYW5kUmFuZ2UoNzUsIDEwMCkpO1xuICAgICAgICAvLyB0aGlzLmxpZ2h0bmVzcyA9IE1hdGguZmxvb3IocmFuZFJhbmdlKDM1LCA2NSkpO1xuXG4gICAgICAgIHRoaXMuY29sb3VyID0gYGhzbCgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSlgXG4gICAgfVxuXG4gICAgZHJhdygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdHgubGluZVdpZHRoID0gdGhpcy50aGlja25lc3NcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG91clxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG91clxuXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnggLSB0aGlzLmR4ICogdGhpcy5heCAqIHRoaXMubGVuZ3RoLCB0aGlzLnkgLSB0aGlzLmR5ICogdGhpcy5heSAqIHRoaXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpXG4gICAgfVxuXG4gICAgdXBkYXRlKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLnZlbG9jaXR5XG4gICAgICAgIHRoaXMueSArPSB0aGlzLmR5ICogdGhpcy5heSAqIHRoaXMudmVsb2NpdHlcblxuICAgICAgICAvLyBCb3VuY2Ugb2ZmIHdhbGxzXG4gICAgICAgIC8vIGlmICh0aGlzLnggPCAwIHx8IHRoaXMueCA+IGNhbnZhcy53aWR0aCkge1xuICAgICAgICAvLyAgICAgdGhpcy5keCAqPSAtMTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy55IDwgMCB8fCB0aGlzLnkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgIC8vICAgICB0aGlzLmR5ICo9IC0xO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgb3V0T2ZWaWV3KCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCBzdGFydF94ID0gdGhpcy54IC0gdGhpcy5keCAqIHRoaXMuYXggKiB0aGlzLmxlbmd0aFxuICAgICAgICBjb25zdCBlbmRfeCA9IHRoaXMueFxuXG4gICAgICAgIGNvbnN0IHN0YXJ0X3kgPSB0aGlzLnkgLSB0aGlzLmR5ICogdGhpcy5heSAqIHRoaXMubGVuZ3RoXG4gICAgICAgIGNvbnN0IGVuZF95ID0gdGhpcy55XG5cbiAgICAgICAgaWYgKHN0YXJ0X3ggPCAwICYmIGVuZF94IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeCA+IHRoaXMuY2FudmFzLndpZHRoICYmIGVuZF94ID4gdGhpcy5jYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3kgPCAwICYmIGVuZF95IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeSA+IHRoaXMuY2FudmFzLmhlaWdodCAmJiBlbmRfeSA+IHRoaXMuY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG59XG5cbmNvbnN0IGF4ID0gcmFuZFJhbmdlKDAuNSwgMSlcbmNvbnN0IGF5ID0gcmFuZFJhbmdlKDAuNSwgMSlcblxuY29uc3QgcmFuZG9tQW5nbGUgPSBmYWxzZVxuY29uc3QgbGluZXNQZXJTZWNvbmQgPSAzMFxuXG5sZXQgbGluZXM6IEFycmF5PExpbmU+ID0gW11cblxuZnVuY3Rpb24gZ2V0Q2FudmFzRWxlbWVudEJ5SWQoaWQ6IHN0cmluZyk6IEhUTUxDYW52YXNFbGVtZW50IHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZClcbiAgICBpZiAoIShjYW52YXMgaW5zdGFuY2VvZiBIVE1MQ2FudmFzRWxlbWVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBlbGVtZW50IG9mIGlkIFwiJHtpZH1cIiBpcyBub3QgYSBIVE1MQ2FudmFzRWxlbWVudC4gTWFrZSBzdXJlIGEgPGNhbnZhcyBpZD1cIiR7aWR9XCJcIj4gZWxlbWVudCBpcyBwcmVzZW50IGluIHRoZSBkb2N1bWVudC5gXG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGNhbnZhc1xufVxuXG5jb25zdCBnZXRDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCAyLWRpbWVuc2lvbmFsIGNhbnZhcyByZW5kZXJpbmcgY29udGV4dHMuJylcbiAgICB9XG4gICAgcmV0dXJuIGNvbnRleHRcbn1cblxubGV0IHVwZGF0ZUludGVydmFsID0gbnVsbFxubGV0IG5ld0xpbmVJbnRlcnZhbCA9IG51bGxcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoY2FudmFzRWxlbWVudElkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBjYW52YXMgPSBnZXRDYW52YXNFbGVtZW50QnlJZChjYW52YXNFbGVtZW50SWQpXG4gICAgY29uc3QgY3R4ID0gZ2V0Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKGNhbnZhcylcblxuICAgIC8vIHVwZGF0ZSA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gICAgdXBkYXRlSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyByZW1vdmUgb2JqZWN0cyBvdXQgb2Ygdmlld1xuICAgICAgICBsaW5lcyA9IGxpbmVzLmZpbHRlcigobykgPT4gIW8ub3V0T2ZWaWV3KCkpXG5cbiAgICAgICAgLy8gdXBkYXRlIG9iamVjdHNcbiAgICAgICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgICAgICBsaW5lLnVwZGF0ZSgpXG4gICAgICAgIH1cblxuICAgICAgICBhbmltYXRlKGNhbnZhcywgY3R4KVxuICAgIH0sIDEwMDAgLyA2MClcblxuICAgIC8vIGFkZCBuZXcgbGluZXNcbiAgICBuZXdMaW5lSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsaW5lcy5wdXNoKG5ldyBMaW5lKGNhbnZhcywgY3R4KSlcbiAgICB9LCAxMDAwIC8gbGluZXNQZXJTZWNvbmQpXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGUoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcblxuICAgIC8vIGNhbGwgYW5pbWF0ZSBpbiBhIGxvb3AgZm9yIGVhY2ggZnJhbWVcbiAgICAvLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICAvLyBjbGVhciB0aGUgY2FudmFzXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpXG5cbiAgICAvLyBkcmF3IG9iamVjdHNcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgbGluZS5kcmF3KClcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9