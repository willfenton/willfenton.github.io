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

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');
var ax = randRange(0.5, 1);
var ay = randRange(0.5, 1);
var randomAngle = false;
var linesPerSecond = 30;
var lines = [];
function initialize() {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
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
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _lib_canvasAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/canvasAnimation */ "./lib/canvasAnimation.ts");
var _jsxFileName = "C:\\Users\\wfenton\\Documents\\Projects\\willfenton.github.io\\willfenton.dev\\pages\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEnvelope"]);
var name = 'Will Fenton';
var title = 'Software Developer';
var siteTitle = 'Will Fenton';
Object(_lib_canvasAnimation__WEBPACK_IMPORTED_MODULE_6__["initialize"])();
function Home() {
  return __jsx("div", {
    className: 'w-full h-screen bg-black',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("meta", {
    name: "description",
    content: "My personal website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/favicon/favicon-96x96.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, 'body { --tw-bg-opacity: 1; background-color: rgba(243, 244, 246, var(--tw-bg-opacity));; }')), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: 'flex flex-col',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: 'bg-gray-100 mx-auto p-6 my-32 rounded-2xl flex flex-col',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: 'mx-auto inline-flex flex-row flex-shrink-0 items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-52 h-52 flex-none rounded-full",
    src: "/images/profile.jpg",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: 'p-6 space-y-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: 'text-6xl font-semibold tracking-tight text-black',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, name), __jsx("h2", {
    className: 'text-4xl text-gray-900',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 33
    }
  }, title))), __jsx("div", {
    className: 'mx-auto mt=4 inline-flex flex-row flex-shrink-0 items-center space-x-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://github.com/willfenton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'github'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/will-fenton-b155281a2/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'linkedin'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "/will-fenton-resume.pdf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'file-pdf'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  })), __jsx("button", {
    onClick: function onClick() {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', 'willfenton14@gmail.com');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'envelope'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  })))))));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbnZhc0FuaW1hdGlvbi50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbInJhbmRSYW5nZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJMaW5lIiwidmVsb2NpdHkiLCJyYW5kb21BbmdsZSIsImF4IiwiYXkiLCJub3JtIiwieCIsImR4IiwiY2FudmFzIiwid2lkdGgiLCJkeSIsInZlcnRpY2FsQ2xlYXJhbmNlIiwieSIsImhlaWdodCIsImhvcml6b250YWxDbGVhcmFuY2UiLCJsZW5ndGgiLCJ0aGlja25lc3MiLCJodWUiLCJzYXR1cmF0aW9uIiwibGlnaHRuZXNzIiwiY29sb3VyIiwiY3R4IiwibGluZVdpZHRoIiwic3Ryb2tlU3R5bGUiLCJmaWxsU3R5bGUiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdGFydF94IiwiZW5kX3giLCJzdGFydF95IiwiZW5kX3kiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwibGluZXNQZXJTZWNvbmQiLCJsaW5lcyIsImluaXRpYWxpemUiLCJ3aW5kb3ciLCJzZXRJbnRlcnZhbCIsImZpbHRlciIsIm8iLCJvdXRPZlZpZXciLCJsaW5lIiwidXBkYXRlIiwiYW5pbWF0ZSIsInB1c2giLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJjbGVhclJlY3QiLCJkcmF3IiwibGlicmFyeSIsImFkZCIsImZhR2l0aHViIiwiZmFMaW5rZWRpbiIsImZhRmlsZVBkZiIsImZhRW52ZWxvcGUiLCJuYW1lIiwidGl0bGUiLCJzaXRlVGl0bGUiLCJIb21lIiwicHJvbXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxDQUFtQkMsR0FBbkIsRUFBZ0NDLEdBQWhDLEVBQXFEO0FBQ2pELFNBQU9DLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkYsR0FBRyxHQUFHRCxHQUF2QixJQUE4QkEsR0FBckM7QUFDSCxDLENBRUQ7OztJQUNNSSxJO0FBZUYsa0JBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDVixTQUFLQyxRQUFMLEdBQWdCLENBQWhCLENBRFUsQ0FHVjs7QUFDQSxRQUFJQyxXQUFKLEVBQWlCO0FBQ2IsV0FBS0MsRUFBTCxHQUFVUixTQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBbkI7QUFDQSxXQUFLUyxFQUFMLEdBQVVULFNBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFuQjtBQUNILEtBSEQsTUFHTztBQUNILFdBQUtRLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFdBQUtDLEVBQUwsR0FBVUEsRUFBVixDQUZHLENBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEtBbEJTLENBb0JWOzs7QUFDQSxRQUFNQyxJQUFJLFlBQUksY0FBS0YsRUFBTCxFQUFXLENBQVgsYUFBZSxLQUFLQyxFQUFwQixFQUEwQixDQUExQixDQUFKLEVBQW9DLEdBQXBDLENBQVY7QUFDQSxTQUFLRCxFQUFMLElBQVdFLElBQVg7QUFDQSxTQUFLRCxFQUFMLElBQVdDLElBQVgsQ0F2QlUsQ0F5QlY7O0FBQ0EsUUFBSVAsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXBCLEVBQXlCO0FBQ3JCO0FBQ0EsVUFBSUQsSUFB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RUFBRSxtQkFBTTtBQUNYcEIsWUFBTSxDQUFDdUIsTUFBUCxDQUFjLGtDQUFkLEVBQWtELHdCQUFsRDtBQUNILEtBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsOEVBQUQ7QUFBaUIsYUFBUyxFQUFFLFNBQTVCO0FBQXVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxVQUFSLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQVZKLENBUkosQ0FESixDQURKLENBVkosQ0FESjtBQTRDSDtLQTdDdUJELEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJiNjJmYjkyZTZlNDEyZDZmNTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJhbmRSYW5nZShtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW5cbn1cblxuLy8gQ2FudmFzXG5jbGFzcyBMaW5lIHtcbiAgICB2ZWxvY2l0eTogbnVtYmVyXG4gICAgYXg6IG51bWJlclxuICAgIGF5OiBudW1iZXJcbiAgICB4OiBudW1iZXJcbiAgICB5OiBudW1iZXJcbiAgICBkeDogbnVtYmVyXG4gICAgZHk6IG51bWJlclxuICAgIGxlbmd0aDogbnVtYmVyXG4gICAgdGhpY2tuZXNzOiBudW1iZXJcbiAgICBodWU6IG51bWJlclxuICAgIHNhdHVyYXRpb246IG51bWJlclxuICAgIGxpZ2h0bmVzczogbnVtYmVyXG4gICAgY29sb3VyOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gNFxuXG4gICAgICAgIC8vIEFuZ2xlIHZlY3RvclxuICAgICAgICBpZiAocmFuZG9tQW5nbGUpIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgICAgIHRoaXMuYXkgPSByYW5kUmFuZ2UoMCwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYXggPSBheFxuICAgICAgICAgICAgdGhpcy5heSA9IGF5XG4gICAgICAgICAgICAvL2lmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXg7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXk7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgICAgIC8vZWxzZSB7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF4ID0gYXk7XG4gICAgICAgICAgICAvLyAgICB0aGlzLmF5ID0gYXg7XG4gICAgICAgICAgICAvL31cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZVxuICAgICAgICBjb25zdCBub3JtID0gKHRoaXMuYXggKiogMiArIHRoaXMuYXkgKiogMikgKiogMC41XG4gICAgICAgIHRoaXMuYXggLz0gbm9ybVxuICAgICAgICB0aGlzLmF5IC89IG5vcm1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgc3RhcnRpbmcgcG9zaXRpb24gYW5kIGRpcmVjdGlvblxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyBsZWZ0IHRvIHJpZ2h0IG9yIHJpZ2h0IHRvIGxlZnRcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gTGVmdFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IDBcbiAgICAgICAgICAgICAgICB0aGlzLmR4ID0gMVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBSaWdodFxuICAgICAgICAgICAgICAgIHRoaXMueCA9IGNhbnZhcy53aWR0aFxuICAgICAgICAgICAgICAgIHRoaXMuZHggPSAtMVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgd2hldGhlciB0aGUgbGluZSB3aWxsIG1vdmUgdXAgb3IgZG93blxuICAgICAgICAgICAgdGhpcy5keSA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyAtMSA6IDFcblxuICAgICAgICAgICAgY29uc3QgdmVydGljYWxDbGVhcmFuY2UgPSBjYW52YXMud2lkdGggKiAodGhpcy5heSAvIHRoaXMuYXgpXG5cbiAgICAgICAgICAgIC8vIFJhbmRvbWx5IGRldGVybWluZSBsaW5lIHN0YXJ0aW5nIHBvc2l0aW9uXG4gICAgICAgICAgICBpZiAodGhpcy5keSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCAtIHZlcnRpY2FsQ2xlYXJhbmNlLCBjYW52YXMuaGVpZ2h0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSByYW5kUmFuZ2UoMCwgY2FudmFzLmhlaWdodCArIHZlcnRpY2FsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgZ29lcyB0b3AgdG8gYm90dG9tIG9yIGJvdHRvbSB0byB0b3BcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XG4gICAgICAgICAgICAgICAgLy8gVG9wXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuZHkgPSAxXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEJvdHRvbVxuICAgICAgICAgICAgICAgIHRoaXMueSA9IGNhbnZhcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLmR5ID0gLTFcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGxpbmUgd2lsbCBtb3ZlIGxlZnQgb3IgcmlnaHRcbiAgICAgICAgICAgIHRoaXMuZHggPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gLTEgOiAxXG5cbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxDbGVhcmFuY2UgPSBjYW52YXMuaGVpZ2h0ICogKHRoaXMuYXggLyB0aGlzLmF5KVxuXG4gICAgICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgbGluZSBzdGFydGluZyBwb3NpdGlvblxuICAgICAgICAgICAgaWYgKHRoaXMuZHggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54ID0gcmFuZFJhbmdlKDAgLSBob3Jpem9udGFsQ2xlYXJhbmNlLCBjYW52YXMud2lkdGgpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMueCA9IHJhbmRSYW5nZSgwLCBjYW52YXMud2lkdGggKyBob3Jpem9udGFsQ2xlYXJhbmNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmFuZG9tbHkgZGV0ZXJtaW5lIGxpbmUgbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoID0gcmFuZFJhbmdlKDMwMCwgMTEwMClcbiAgICAgICAgLy8gdGhpcy5sZW5ndGggPSBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpICogOCkgKyAzKSAqIDEwMDtcblxuICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IDhcblxuICAgICAgICAvLyBSYW5kb21seSBkZXRlcm1pbmUgY29sb3VyIChIU0wpXG4gICAgICAgIHRoaXMuaHVlID0gcmFuZFJhbmdlKDAsIDM2MClcbiAgICAgICAgdGhpcy5zYXR1cmF0aW9uID0gMTAwXG4gICAgICAgIHRoaXMubGlnaHRuZXNzID0gNTBcbiAgICAgICAgLy8gdGhpcy5zYXR1cmF0aW9uID0gTWF0aC5mbG9vcihyYW5kUmFuZ2UoNzUsIDEwMCkpO1xuICAgICAgICAvLyB0aGlzLmxpZ2h0bmVzcyA9IE1hdGguZmxvb3IocmFuZFJhbmdlKDM1LCA2NSkpO1xuXG4gICAgICAgIHRoaXMuY29sb3VyID0gYGhzbCgke3RoaXMuaHVlfSwke3RoaXMuc2F0dXJhdGlvbn0lLCR7dGhpcy5saWdodG5lc3N9JSlgXG4gICAgfVxuXG4gICAgZHJhdygpOiB2b2lkIHtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMudGhpY2tuZXNzXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3VyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG91clxuXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKVxuICAgICAgICBjdHgubW92ZVRvKHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGgsIHRoaXMueSAtIHRoaXMuZHkgKiB0aGlzLmF5ICogdGhpcy5sZW5ndGgpXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy54LCB0aGlzLnkpXG4gICAgICAgIGN0eC5zdHJva2UoKVxuICAgIH1cblxuICAgIHVwZGF0ZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy52ZWxvY2l0eVxuICAgICAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLnZlbG9jaXR5XG5cbiAgICAgICAgLy8gQm91bmNlIG9mZiB3YWxsc1xuICAgICAgICAvLyBpZiAodGhpcy54IDwgMCB8fCB0aGlzLnggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZHggKj0gLTE7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHRoaXMueSA8IDAgfHwgdGhpcy55ID4gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAvLyAgICAgdGhpcy5keSAqPSAtMTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIG91dE9mVmlldygpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3Qgc3RhcnRfeCA9IHRoaXMueCAtIHRoaXMuZHggKiB0aGlzLmF4ICogdGhpcy5sZW5ndGhcbiAgICAgICAgY29uc3QgZW5kX3ggPSB0aGlzLnhcblxuICAgICAgICBjb25zdCBzdGFydF95ID0gdGhpcy55IC0gdGhpcy5keSAqIHRoaXMuYXkgKiB0aGlzLmxlbmd0aFxuICAgICAgICBjb25zdCBlbmRfeSA9IHRoaXMueVxuXG4gICAgICAgIGlmIChzdGFydF94IDwgMCAmJiBlbmRfeCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3ggPiBjYW52YXMud2lkdGggJiYgZW5kX3ggPiBjYW52YXMud2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0X3kgPCAwICYmIGVuZF95IDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhcnRfeSA+IGNhbnZhcy5oZWlnaHQgJiYgZW5kX3kgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKVxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuY29uc3QgYXggPSByYW5kUmFuZ2UoMC41LCAxKVxuY29uc3QgYXkgPSByYW5kUmFuZ2UoMC41LCAxKVxuXG5jb25zdCByYW5kb21BbmdsZSA9IGZhbHNlXG5jb25zdCBsaW5lc1BlclNlY29uZCA9IDMwXG5cbmxldCBsaW5lczogQXJyYXk8TGluZT4gPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICAvLyB1cGRhdGUgNjAgdGltZXMgcGVyIHNlY29uZFxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIC8vIHJlbW92ZSBvYmplY3RzIG91dCBvZiB2aWV3XG4gICAgICAgIGxpbmVzID0gbGluZXMuZmlsdGVyKChvKSA9PiAhby5vdXRPZlZpZXcoKSlcblxuICAgICAgICAvLyB1cGRhdGUgb2JqZWN0c1xuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgICAgIGxpbmUudXBkYXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIGFuaW1hdGUoKVxuICAgIH0sIDEwMDAgLyA2MClcblxuICAgIC8vIGFkZCBuZXcgbGluZXNcbiAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBsaW5lcy5wdXNoKG5ldyBMaW5lKCkpXG4gICAgfSwgMTAwMCAvIGxpbmVzUGVyU2Vjb25kKVxufVxuXG5mdW5jdGlvbiBhbmltYXRlKCk6IHZvaWQge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgLy8gY2FsbCBhbmltYXRlIGluIGEgbG9vcCBmb3IgZWFjaCBmcmFtZVxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjYW52YXNcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIC8vIGRyYXcgb2JqZWN0c1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgICBsaW5lLmRyYXcoKVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5pbXBvcnQgeyBmYUZpbGVQZGYsIGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQge2luaXRpYWxpemV9ICBmcm9tICcuLi9saWIvY2FudmFzQW5pbWF0aW9uJ1xuXG5saWJyYXJ5LmFkZChmYUdpdGh1YiwgZmFMaW5rZWRpbiwgZmFGaWxlUGRmLCBmYUVudmVsb3BlKVxuXG5jb25zdCBuYW1lID0gJ1dpbGwgRmVudG9uJ1xuY29uc3QgdGl0bGUgPSAnU29mdHdhcmUgRGV2ZWxvcGVyJ1xuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdXaWxsIEZlbnRvbidcblxuaW5pdGlhbGl6ZSgpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndy1mdWxsIGgtc2NyZWVuIGJnLWJsYWNrJ30+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTXkgcGVyc29uYWwgd2Vic2l0ZVwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjk2eDk2XCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tOTZ4OTYucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCIxNngxNlwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICB7J2JvZHkgeyAtLXR3LWJnLW9wYWNpdHk6IDE7IGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDQsIDI0NiwgdmFyKC0tdHctYmctb3BhY2l0eSkpOzsgfSd9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sJ30+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnYmctZ3JheS0xMDAgbXgtYXV0byBwLTYgbXktMzIgcm91bmRlZC0yeGwgZmxleCBmbGV4LWNvbCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydteC1hdXRvIGlubGluZS1mbGV4IGZsZXgtcm93IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTUyIGgtNTIgZmxleC1ub25lIHJvdW5kZWQtZnVsbFwiIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIiBhbHQ9e25hbWV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydwLTYgc3BhY2UteS0yJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9eyd0ZXh0LTZ4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtYmxhY2snfT57bmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXsndGV4dC00eGwgdGV4dC1ncmF5LTkwMCd9Pnt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J214LWF1dG8gbXQ9NCBpbmxpbmUtZmxleCBmbGV4LXJvdyBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlciBzcGFjZS14LTInfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3dpbGxmZW50b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9eyd3LTggaC04J30gaWNvbj17WydmYWInLCAnZ2l0aHViJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsbC1mZW50b24tYjE1NTI4MWEyL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17J3ctOCBoLTgnfSBpY29uPXtbJ2ZhYicsICdsaW5rZWRpbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3dpbGwtZmVudG9uLXJlc3VtZS5wZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9eyd3LTggaC04J30gaWNvbj17WydmYXMnLCAnZmlsZS1wZGYnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cucHJvbXB0KCdDb3B5IHRvIGNsaXBib2FyZDogQ3RybCtDLCBFbnRlcicsICd3aWxsZmVudG9uMTRAZ21haWwuY29tJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsndy04IGgtOCd9IGljb249e1snZmFzJywgJ2VudmVsb3BlJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==