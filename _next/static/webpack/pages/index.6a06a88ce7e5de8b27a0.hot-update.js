webpackHotUpdate_N_E("pages/index",{

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

function getCanvasElementById(id) {
  var canvas = document.getElementById(id);

  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error("The element of id \"".concat(id, "\" is not a HTMLCanvasElement. Make sure a <canvas id=\"").concat(id, "\"\"> element is present in the document."));
  }

  return canvas;
}

if (true) {
  var canvas = getCanvasElementById('canvas');
  Object(_lib_canvasAnimation__WEBPACK_IMPORTED_MODULE_6__["initialize"])(canvas);
}

function Home() {
  return __jsx("div", {
    className: 'w-full h-screen bg-black',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("meta", {
    name: "description",
    content: "My personal website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
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
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 17
    }
  }), __jsx("style", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, 'body { --tw-bg-opacity: 1; background-color: rgba(243, 244, 246, var(--tw-bg-opacity));; }')), __jsx("header", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: 'flex flex-col',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: 'bg-gray-100 mx-auto p-6 my-32 rounded-2xl flex flex-col',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: 'mx-auto inline-flex flex-row flex-shrink-0 items-center',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, __jsx("img", {
    className: "w-52 h-52 flex-none rounded-full",
    src: "/images/profile.jpg",
    alt: name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: 'p-6 space-y-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, __jsx("h1", {
    className: 'text-6xl font-semibold tracking-tight text-black',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 33
    }
  }, name), __jsx("h2", {
    className: 'text-4xl text-gray-900',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }, title))), __jsx("div", {
    className: 'mx-auto mt=4 inline-flex flex-row flex-shrink-0 items-center space-x-2',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://github.com/willfenton",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'github'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/will-fenton-b155281a2/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fab', 'linkedin'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  })), __jsx("a", {
    href: "/will-fenton-resume.pdf",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'file-pdf'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  })), __jsx("button", {
    onClick: function onClick() {
      window.prompt('Copy to clipboard: Ctrl+C, Enter', 'willfenton14@gmail.com');
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    className: 'w-8 h-8',
    icon: ['fas', 'envelope'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  })))))), __jsx("canvas", {
    id: "canvas",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbImxpYnJhcnkiLCJhZGQiLCJmYUdpdGh1YiIsImZhTGlua2VkaW4iLCJmYUZpbGVQZGYiLCJmYUVudmVsb3BlIiwibmFtZSIsInRpdGxlIiwic2l0ZVRpdGxlIiwiZ2V0Q2FudmFzRWxlbWVudEJ5SWQiLCJpZCIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJIVE1MQ2FudmFzRWxlbWVudCIsIkVycm9yIiwiaW5pdGlhbGl6ZSIsIkhvbWUiLCJ3aW5kb3ciLCJwcm9tcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEseUVBQU8sQ0FBQ0MsR0FBUixDQUFZQywyRUFBWixFQUFzQkMsNkVBQXRCLEVBQWtDQywyRUFBbEMsRUFBNkNDLDRFQUE3QztBQUVBLElBQU1DLElBQUksR0FBRyxhQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHLG9CQUFkO0FBQ08sSUFBTUMsU0FBUyxHQUFHLGFBQWxCOztBQUVQLFNBQVNDLG9CQUFULENBQThCQyxFQUE5QixFQUE2RDtBQUN6RCxNQUFNQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsRUFBeEIsQ0FBZjs7QUFFQSxNQUFJLEVBQUVDLE1BQU0sWUFBWUcsaUJBQXBCLENBQUosRUFBNEM7QUFDeEMsVUFBTSxJQUFJQyxLQUFKLCtCQUNvQkwsRUFEcEIscUVBQytFQSxFQUQvRSwrQ0FBTjtBQUdIOztBQUNELFNBQU9DLE1BQVA7QUFDSDs7QUFFRCxVQUFtQztBQUMvQixNQUFNQSxNQUF5QixHQUFHRixvQkFBb0IsQ0FBQyxRQUFELENBQXREO0FBQ0FPLHlFQUFVLENBQUNMLE1BQUQsQ0FBVjtBQUNIOztBQUVjLFNBQVNNLElBQVQsR0FBNkI7QUFDeEMsU0FDSTtBQUFLLGFBQVMsRUFBRSwwQkFBaEI7QUFBQTtBQUFBO0FB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Q0FQSixFQVVJO0FBQ0ksV0FBTyxFQUFFLG1CQUFNO0FBQ1hXLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjLGtDQUFkLEVBQWtELHdCQUFsRDtBQUNILEtBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJLE1BQUMsOEVBQUQ7QUFBaUIsYUFBUyxFQUFFLFNBQTVCO0FBQXVDLFFBQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxVQUFSLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQVZKLENBUkosQ0FESixDQURKLENBVkosRUF5Q0k7QUFBUSxNQUFFLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekNKLENBREo7QUE2Q0g7S0E5Q3VCRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhMDZhODhjZTdlNWRlOGIyN2EwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xuaW1wb3J0IHsgZmFHaXRodWIsIGZhTGlua2VkaW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuaW1wb3J0IHsgZmFGaWxlUGRmLCBmYUVudmVsb3BlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4uL2xpYi9jYW52YXNBbmltYXRpb24nXG5cbmxpYnJhcnkuYWRkKGZhR2l0aHViLCBmYUxpbmtlZGluLCBmYUZpbGVQZGYsIGZhRW52ZWxvcGUpXG5cbmNvbnN0IG5hbWUgPSAnV2lsbCBGZW50b24nXG5jb25zdCB0aXRsZSA9ICdTb2Z0d2FyZSBEZXZlbG9wZXInXG5leHBvcnQgY29uc3Qgc2l0ZVRpdGxlID0gJ1dpbGwgRmVudG9uJ1xuXG5mdW5jdGlvbiBnZXRDYW52YXNFbGVtZW50QnlJZChpZDogc3RyaW5nKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKVxuXG4gICAgaWYgKCEoY2FudmFzIGluc3RhbmNlb2YgSFRNTENhbnZhc0VsZW1lbnQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZWxlbWVudCBvZiBpZCBcIiR7aWR9XCIgaXMgbm90IGEgSFRNTENhbnZhc0VsZW1lbnQuIE1ha2Ugc3VyZSBhIDxjYW52YXMgaWQ9XCIke2lkfVwiXCI+IGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQuYFxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiBjYW52YXNcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGdldENhbnZhc0VsZW1lbnRCeUlkKCdjYW52YXMnKVxuICAgIGluaXRpYWxpemUoY2FudmFzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3ctZnVsbCBoLXNjcmVlbiBiZy1ibGFjayd9PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk15IHBlcnNvbmFsIHdlYnNpdGVcIiAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgc2l6ZXM9XCI5Nng5NlwiIGhyZWY9XCIvZmF2aWNvbi9mYXZpY29uLTk2eDk2LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBzaXplcz1cIjMyeDMyXCIgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgeydib2R5IHsgLS10dy1iZy1vcGFjaXR5OiAxOyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MywgMjQ0LCAyNDYsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTs7IH0nfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCd9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2JnLWdyYXktMTAwIG14LWF1dG8gcC02IG15LTMyIHJvdW5kZWQtMnhsIGZsZXggZmxleC1jb2wnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbXgtYXV0byBpbmxpbmUtZmxleCBmbGV4LXJvdyBmbGV4LXNocmluay0wIGl0ZW1zLWNlbnRlcid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01MiBoLTUyIGZsZXgtbm9uZSByb3VuZGVkLWZ1bGxcIiBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGUuanBnXCIgYWx0PXtuYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsncC02IHNwYWNlLXktMid9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXsndGV4dC02eGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWJsYWNrJ30+e25hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17J3RleHQtNHhsIHRleHQtZ3JheS05MDAnfT57dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydteC1hdXRvIG10PTQgaW5saW5lLWZsZXggZmxleC1yb3cgZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93aWxsZmVudG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsndy04IGgtOCd9IGljb249e1snZmFiJywgJ2dpdGh1YiddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3dpbGwtZmVudG9uLWIxNTUyODFhMi9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9eyd3LTggaC04J30gaWNvbj17WydmYWInLCAnbGlua2VkaW4nXX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi93aWxsLWZlbnRvbi1yZXN1bWUucGRmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsndy04IGgtOCd9IGljb249e1snZmFzJywgJ2ZpbGUtcGRmJ119IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnByb21wdCgnQ29weSB0byBjbGlwYm9hcmQ6IEN0cmwrQywgRW50ZXInLCAnd2lsbGZlbnRvbjE0QGdtYWlsLmNvbScpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17J3ctOCBoLTgnfSBpY29uPXtbJ2ZhcycsICdlbnZlbG9wZSddfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8Y2FudmFzIGlkPVwiY2FudmFzXCI+PC9jYW52YXM+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=