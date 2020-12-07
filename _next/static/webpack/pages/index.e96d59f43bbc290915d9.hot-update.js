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
  var ctx = getCanvasRenderingContext2D(canvas);

  if (updateInterval !== null || newLineInterval !== null) {
    window.clearInterval(updateInterval);
    window.clearInterval(updateInterval);
  } // update 60 times per second


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyJdLCJuYW1lcyI6WyJyYW5kUmFuZ2UiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiTGluZSIsImNhbnZhcyIsImN0eCIsInZlbG9jaXR5IiwicmFuZG9tQW5nbGUiLCJheCIsImF5Iiwibm9ybSIsIngiLCJkeCIsIndpZHRoIiwiZHkiLCJ2ZXJ0aWNhbENsZWFyYW5jZSIsInkiLCJoZWlnaHQiLCJob3Jpem9udGFsQ2xlYXJhbmNlIiwibGVuZ3RoIiwidGhpY2tuZXNzIiwiaHVlIiwic2F0dXJhdGlvbiIsImxpZ2h0bmVzcyIsImNvbG91ciIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwic3RhcnRfeCIsImVuZF94Iiwic3RhcnRfeSIsImVuZF95IiwibGluZXNQZXJTZWNvbmQiLCJsaW5lcyIsImdldENhbnZhc0VsZW1lbnRCeUlkIiwiaWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSFRNTENhbnZhc0VsZW1lbnQiLCJFcnJvciIsImdldENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwidXBkYXRlSW50ZXJ2YWwiLCJuZXdMaW5lSW50ZXJ2YWwiLCJpbml0aWFsaXplIiwiY2FudmFzRWxlbWVudElkIiwid2luZG93IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiZmlsdGVyIiwibyIsIm91dE9mVmlldyIsImxpbmUiLCJ1cGRhdGUiLCJhbmltYXRlIiwicHVzaCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNsZWFyUmVjdCIsImRyYXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxTQUFTQSxTQUFULENBQW1CQyxHQUFuQixFQUFnQ0MsR0FBaEMsRUFBcUQ7QUFDakQsU0FBT0Ms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Q0FXMURvQixLQVgwRDtBQUFBOztBQUFBO0FBVzdFLDJEQUEwQjtBQUFBLFVBQWZvQixJQUFlO0FBQ3RCQSxVQUFJLENBQUNPLElBQUw7QUFDSDtBQWI0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY2hGIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU5NmQ1OWY0M2JiYzI5MDkxNWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByYW5kUmFuZ2UobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG59XG5cbi8vIENhbnZhc1xuY2xhc3MgTGluZSB7XG4gICAgdmVsb2NpdHk6IG51bWJlclxuICAgIGF4OiBudW1iZXJcbiAgICBheTogbnVtYmVyXG4gICAgeDogbnVtYmVyXG4gICAgeTogbnVtYmVyXG4gICAgZHg6IG51bWJlclxuICAgIGR5OiBudW1iZXJcbiAgICBsZW5ndGg6IG51bWJlclxuICAgIHRoaWNrbmVzczogbnVtYmVyXG4gICAgaHVlOiBudW1iZXJcbiAgICBzYXR1cmF0aW9uOiBudW1iZXJcbiAgICBsaWdodG5lc3M6IG51bWJlclxuICAgIGNvbG91cjogc3RyaW5nXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEXG5cbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhc1xuICAgICAgICB0aGlzLmN0eCA9IGN0eFxuXG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSA0XG5cbiAgICAgICAgLy8gQW5nbGUgdmVjdG9yXG4gICAgICAgIGlmIChyYW5kb21BbmdsZSkge1xuICAgICAgICAgICAgdGhpcy5heCA9IHJhbmRSYW5nZSgwLCAxKVxuICAgICAgICAgICAgdGhpcy5heSA9IHJhbmRSYW5nZSgwLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5heCA9IGF4XG4gICAgICAgICAgICB0aGlzLmF5ID0gYXlcbiAgICAgICAgICAgIC8vaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXggPSBheDtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXkgPSBheTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgLy9lbHNlIHtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXggPSBheTtcbiAgICAgICAgICAgIC8vICAgIHRoaXMuYXkgPSBheDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplXG4gICAgICAgIGNvbnN0IG5vcm0gPSAodGhpcy5heCAqKiAyICsgdGhpcy5heSAqKiAyKSAqKiAwLjVcbiAgICAgICAgdGhpcy5heCAvPSBub3JtXG4gICAgICAgIHRoaXMuYXkgLz0gbm9ybVxuXG4gICAgICAgIC8vIERldGVybWluZSBzdGFydGluZyBwb3NpdGlvbiBhbmQgZGlyZWN0aW9uXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSBnb2VzIGxlZnQgdG8gcmlnaHQgb3IgcmlnaHQgdG8gbGVmdFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAvLyBMZWZ0XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZHggPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gY2FudmFzLndpZHRoXG4gICAgICAgICAgICAgICAgdGhpcy5keCA9IC0xXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSB3aGV0aGVyIHRoZSBsaW5lIHdpbGwgbW92ZSB1cCBvciBkb3duXG4gICAgICAgICAgICB0aGlzLmR5ID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IC0xIDogMVxuXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbENsZWFyYW5jZSA9IGNhbnZhcy53aWR0aCAqICh0aGlzLmF5IC8gdGhpcy5heClcblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgc3RhcnRpbmcgcG9zaXRpb25cbiAgICAgICAgICAgIGlmICh0aGlzLmR5ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHJhbmRSYW5nZSgwIC0gdmVydGljYWxDbGVhcmFuY2UsIGNhbnZhcy5oZWlnaHQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueSA9IHJhbmRSYW5nZSgwLCBjYW52YXMuaGVpZ2h0ICsgdmVydGljYWxDbGVhcmFuY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSBnb2VzIHRvcCB0byBib3R0b20gb3IgYm90dG9tIHRvIHRvcFxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAvLyBUb3BcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSAwXG4gICAgICAgICAgICAgICAgdGhpcy5keSA9IDFcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gQm90dG9tXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAtMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSB3aWxsIG1vdmUgbGVmdCBvciByaWdodFxuICAgICAgICAgICAgdGhpcy5keCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDFcblxuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbENsZWFyYW5jZSA9IGNhbnZhcy5oZWlnaHQgKiAodGhpcy5heCAvIHRoaXMuYXkpXG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5keCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnggPSByYW5kUmFuZ2UoMCAtIGhvcml6b250YWxDbGVhcmFuY2UsIGNhbnZhcy53aWR0aClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gcmFuZFJhbmdlKDAsIGNhbnZhcy53aWR0aCArIGhvcml6b250YWxDbGVhcmFuY2UpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBsZW5ndGhcbiAgICAgICAgdGhpcy5sZW5ndGggPSByYW5kUmFuZ2UoMzAwLCAxMTAwKVxuICAgICAgICAvLyB0aGlzLmxlbmd0aCA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgKiA4KSArIDMpICogMTAwO1xuXG4gICAgICAgIHRoaXMudGhpY2tuZXNzID0gOFxuXG4gICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBjb2xvdXIgKEhTTClcbiAgICAgICAgdGhpcy5odWUgPSByYW5kUmFuZ2UoMCwgMzYwKVxuICAgICAgICB0aGlzLnNhdHVyYXRpb24gPSAxMDBcbiAgICAgICAgdGhpcy5saWdodG5lc3MgPSA1MFxuICAgICAgICAvLyB0aGlzLnNhdHVyYXRpb24gPSBNYXRoLmZsb29yKHJhbmRSYW5nZSg3NSwgMTAwKSk7XG4gICAgICAgIC8vIHRoaXMubGlnaHRuZXNzID0gTWF0aC5mbG9vcihyYW5kUmFuZ2UoMzUsIDY1KSk7XG5cbiAgICAgICAgdGhpcy5jb2xvdXIgPSBgaHNsKCR7dGhpcy5odWV9LCR7dGhpcy5zYXR1cmF0aW9ufSUsJHt0aGlzLmxpZ2h0bmVzc30lKWBcbiAgICB9XG5cbiAgICBkcmF3KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSB0aGlzLnRoaWNrbmVzc1xuICAgICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3VyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3VyXG5cbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKClcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGgsIHRoaXMueSAtIHRoaXMuZHkgKiB0aGlzLmF5ICogdGhpcy5sZW5ndGgpXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLngsIHRoaXMueSlcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKClcbiAgICB9XG5cbiAgICB1cGRhdGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMueCArPSB0aGlzLmR4ICogdGhpcy5heCAqIHRoaXMudmVsb2NpdHlcbiAgICAgICAgdGhpcy55ICs9IHRoaXMuZHkgKiB0aGlzLmF5ICogdGhpcy52ZWxvY2l0eVxuXG4gICAgICAgIC8vIEJvdW5jZSBvZmYgd2FsbHNcbiAgICAgICAgLy8gaWYgKHRoaXMueCA8IDAgfHwgdGhpcy54ID4gY2FudmFzLndpZHRoKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmR4ICo9IC0xO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh0aGlzLnkgPCAwIHx8IHRoaXMueSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZHkgKj0gLTE7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBvdXRPZlZpZXcoKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3ggPSB0aGlzLnggLSB0aGlzLmR4ICogdGhpcy5heCAqIHRoaXMubGVuZ3RoXG4gICAgICAgIGNvbnN0IGVuZF94ID0gdGhpcy54XG5cbiAgICAgICAgY29uc3Qgc3RhcnRfeSA9IHRoaXMueSAtIHRoaXMuZHkgKiB0aGlzLmF5ICogdGhpcy5sZW5ndGhcbiAgICAgICAgY29uc3QgZW5kX3kgPSB0aGlzLnlcblxuICAgICAgICBpZiAoc3RhcnRfeCA8IDAgJiYgZW5kX3ggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydF94ID4gdGhpcy5jYW52YXMud2lkdGggJiYgZW5kX3ggPiB0aGlzLmNhbnZhcy53aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeSA8IDAgJiYgZW5kX3kgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydF95ID4gdGhpcy5jYW52YXMuaGVpZ2h0ICYmIGVuZF95ID4gdGhpcy5jYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgYXggPSByYW5kUmFuZ2UoMC41LCAxKVxuY29uc3QgYXkgPSByYW5kUmFuZ2UoMC41LCAxKVxuXG5jb25zdCByYW5kb21BbmdsZSA9IGZhbHNlXG5jb25zdCBsaW5lc1BlclNlY29uZCA9IDMwXG5cbmxldCBsaW5lczogQXJyYXk8TGluZT4gPSBbXVxuXG5mdW5jdGlvbiBnZXRDYW52YXNFbGVtZW50QnlJZChpZDogc3RyaW5nKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuICAgIGlmICghKGNhbnZhcyBpbnN0YW5jZW9mIEhUTUxDYW52YXNFbGVtZW50KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGVsZW1lbnQgb2YgaWQgXCIke2lkfVwiIGlzIG5vdCBhIEhUTUxDYW52YXNFbGVtZW50LiBNYWtlIHN1cmUgYSA8Y2FudmFzIGlkPVwiJHtpZH1cIlwiPiBlbGVtZW50IGlzIHByZXNlbnQgaW4gdGhlIGRvY3VtZW50LmBcbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gY2FudmFzXG59XG5cbmNvbnN0IGdldENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcbiAgICBpZiAoY29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IDItZGltZW5zaW9uYWwgY2FudmFzIHJlbmRlcmluZyBjb250ZXh0cy4nKVxuICAgIH1cbiAgICByZXR1cm4gY29udGV4dFxufVxuXG5sZXQgdXBkYXRlSW50ZXJ2YWwgPSBudWxsXG5sZXQgbmV3TGluZUludGVydmFsID0gbnVsbFxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZShjYW52YXNFbGVtZW50SWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGNhbnZhcyA9IGdldENhbnZhc0VsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJZClcbiAgICBjb25zdCBjdHggPSBnZXRDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQoY2FudmFzKVxuXG4gICAgaWYgKHVwZGF0ZUludGVydmFsICE9PSBudWxsIHx8IG5ld0xpbmVJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh1cGRhdGVJbnRlcnZhbClcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodXBkYXRlSW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIDYwIHRpbWVzIHBlciBzZWNvbmRcbiAgICB1cGRhdGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSBvYmplY3RzIG91dCBvZiB2aWV3XG4gICAgICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKChvKSA9PiAhby5vdXRPZlZpZXcoKSlcblxuICAgICAgICAvLyB1cGRhdGUgb2JqZWN0c1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGxpbmUudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoY2FudmFzLCBjdHgpXG4gICAgfSwgMTAwMCAvIDYwKVxuXG4gICAgLy8gYWRkIG5ldyBsaW5lc1xuICAgIG5ld0xpbmVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxpbmVzLnB1c2gobmV3IExpbmUoY2FudmFzLCBjdHgpKVxuICAgIH0sIDEwMDAgLyBsaW5lc1BlclNlY29uZClcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZShjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgLy8gY2FsbCBhbmltYXRlIGluIGEgbG9vcCBmb3IgZWFjaCBmcmFtZVxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIC8vIGRyYXcgb2JqZWN0c1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsaW5lLmRyYXcoKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=