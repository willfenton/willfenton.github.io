webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\wfenton\\Documents\\Projects\\willfenton.github.io\\willfenton.dev\\components\\layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faLinkedin"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFilePdf"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"]);
var name = 'Will Fenton';
var title = 'Software Developer';
var siteTitle = 'Will Fenton';
function Layout(_ref) {
  var children = _ref.children,
      home = _ref.home;
  return __jsx("div", {
    className: 'w-full h-screen bg-gray-100',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("meta", {
    name: "description",
    content: "My personal website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 19,
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
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, 'body { --tw-bg-opacity: 1; background-color: rgba(243, 244, 246, var(--tw-bg-opacity));; }')), __jsx("header", {
    className: 'flex flex-col my-16',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, home ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: 'mx-auto inline-flex flex-row flex-shrink-0 items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-52 h-52 flex-none rounded-full",
    src: "/images/profile.jpg",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: 'p-6 space-y-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: 'text-6xl font-semibold tracking-tight',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 33
    }
  }, name), __jsx("h2", {
    className: 'text-4xl text-gray-800',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, title))), __jsx("div", {
    className: 'mx-auto my-4 inline-flex flex-row flex-shrink-0 items-center space-x-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://github.com/willfenton",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'github'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/will-fenton-b155281a2/",
    target: "blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'linkedin'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 33
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/will-fenton-resume.pdf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'file-pdf'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  })), __jsx("a", {
    onClick: function onClick() {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', 'wfenton@ualberta.ca');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'envelope'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  })))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("img", {
    src: "/images/profile.jpg",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }))), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 33
    }
  }, name))))), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, children), !home && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, "\u2190 Back to home"))));
}
_c = Layout;

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYUdpdGh1YiIsImZhTGlua2VkaW4iLCJmYUZpbGVQZGYiLCJmYUVudmVsb3BlIiwibmFtZSIsInRpdGxlIiwic2l0ZVRpdGxlIiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJob21lIiwid2luZG93IiwicHJvbXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSx5RUFBTyxDQUFDQyxHQUFSLENBQVlDLDJFQUFaLEVBQXNCQyw2RUFBdEIsRUFBa0NDLDJFQUFsQyxFQUE2Q0MsNEVBQTdDO0FBRUEsSUFBTUMsSUFBSSxHQUFHLGFBQWI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsb0JBQWQ7QUFDTyxJQUFNQyxTQUFTLEdBQUcsYUFBbEI7QUFFUSxTQUFTQyxNQUFULE9BQStGO0FBQUEsTUFBN0VDLFFBQTZFLFFBQTdFQSxRQUE2RTtBQUFBLE1BQW5FQyxJQUFtRSxRQUFuRUEsSUFBbUU7QUFDMUcsU0FDSTtBQUFLLGFBQVMsRUFBRSw2QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFDLHFCQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxXQUF0QjtBQUFrQyxTQUFLLEVBQUMsT0FBeEM7QUFBZ0QsUUFBSSxFQUFDLDRCQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosRUFHSTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFB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QUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFBK0IsT0FBRyxFQUFFUCxJQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxJQUFKLENBREosQ0FESixDQU5KLENBOUJSLENBVkosRUFzREk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPSSxRQUFQLENBdERKLEVBdURLLENBQUNDLElBQUQsSUFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLENBREosQ0F4RFIsQ0FESjtBQWlFSDtLQWxFdUJGLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFjMjY5NjBiOTE3YzFkZTE0YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgeyBmYUdpdGh1YiwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5pbXBvcnQgeyBmYUZpbGVQZGYsIGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5cbmxpYnJhcnkuYWRkKGZhR2l0aHViLCBmYUxpbmtlZGluLCBmYUZpbGVQZGYsIGZhRW52ZWxvcGUpXG5cbmNvbnN0IG5hbWUgPSAnV2lsbCBGZW50b24nXG5jb25zdCB0aXRsZSA9ICdTb2Z0d2FyZSBEZXZlbG9wZXInXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ1dpbGwgRmVudG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaG9tZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IGhvbWU6IGJvb2xlYW4gfSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ctZnVsbCBoLXNjcmVlbiBiZy1ncmF5LTEwMCd9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk15IHBlcnNvbmFsIHdlYnNpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCI5Nng5NlwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgeydib2R5IHsgLS10dy1iZy1vcGFjaXR5OiAxOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTs7IH0nfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgbXktMTYnfT5cbiAgICAgICAgICAgICAgICB7aG9tZSA/IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbXgtYXV0byBpbmxpbmUtZmxleCBmbGV4LXJvdyBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBoLTUyIGZsZXgtbm9uZSByb3VuZGVkLWZ1bGxcIiBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCIgYWx0PXtuYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncC02IHNwYWNlLXktMid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXsndGV4dC02eGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCd9PntuYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9eyd0ZXh0LTR4bCB0ZXh0LWdyYXktODAwJ30+e3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbXgtYXV0byBteS00IGlubGluZS1mbGV4IGZsZXgtcm93IGZsZXgtc2hyaW5rLTAgaXRlbXMtY2VudGVyIHNwYWNlLXgtMid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vd2lsbGZlbnRvblwiIHRhcmdldD1cImJsYW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsndy04IGgtOCd9IGljb249e1snZmFiJywgJ2dpdGh1YiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGwtZmVudG9uLWIxNTUyODFhMi9cIiB0YXJnZXQ9XCJibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17J3ctOCBoLTgnfSBpY29uPXtbJ2ZhYicsICdsaW5rZWRpbiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3dpbGwtZmVudG9uLXJlc3VtZS5wZGZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9eyd3LTggaC04J30gaWNvbj17WydmYXMnLCAnZmlsZS1wZGYnXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb21wdCgnQ29weSB0byBjbGlwYm9hcmQ6IEN0cmwrQywgRW50ZXInLCAnd2ZlbnRvbkB1YWxiZXJ0YS5jYScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17J3ctOCBoLTgnfSBpY29uPXtbJ2ZhcycsICdlbnZlbG9wZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCIgYWx0PXtuYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57bmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPG1haW4+e2NoaWxkcmVufTwvbWFpbj5cbiAgICAgICAgICAgIHshaG9tZSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=