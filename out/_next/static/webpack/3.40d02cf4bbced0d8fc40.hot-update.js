webpackHotUpdate_N_E(3,{

/***/ "./client/components/FlybyBanner/FlybyBanner.jsx":
/*!*******************************************************!*\
  !*** ./client/components/FlybyBanner/FlybyBanner.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _flyby_rocket_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flyby-rocket-base64 */ \"./client/components/FlybyBanner/flyby-rocket-base64.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/FlybyBanner/FlybyBanner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    background-color: #000000cc;\\n    width: 100%;\\n    height: 100%;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    animation-name: spin;\\n    animation-duration: 15000ms;\\n    animation-iteration-count: infinite;\\n    animation-timing-function: linear;\\n    @keyframes spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(-360deg);\\n        }\\n    }\\n    @keyframes reverse-spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(360deg);\\n        }\\n    }\\n\\n    .point {\\n        background-color: white;\\n        position: absolute;\\n        width: 15px;\\n        height: 15px;\\n        border-radius: 50%;\\n        transform: translate(-50%, -50%);\\n    }\\n    .a {\\n        top: 2px;\\n        left: 50%;\\n    }\\n    .b {\\n        font-style: italic;\\n        font-size: 24px;\\n        position: absolute;\\n        top: 50%;\\n        left: calc(100% + 2px);\\n        animation-name: reverse-spin;\\n        animation-duration: 15000ms;\\n        animation-iteration-count: infinite;\\n        animation-timing-function: linear;\\n    }\\n    .c {\\n        top: calc(92% + 2px);\\n        left: 50%;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: relative;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 50vw;\\n    height: fit-content;\\n    max-width: 480px;\\n    display: flex;\\n    align-items: flex-start;\\n    position: relative;\\n    .box {\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-around;\\n    }\\n    .title {\\n        font-style: italic;\\n        font-size: 24px;\\n        margin-left: 3rem;\\n        white-space: nowrap;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        flex-direction: column;\\n    }\\n    .button {\\n        font-size: 20px;\\n        padding: 6px 22px;\\n        border: 2px solid white;\\n        border-radius: 14px;\\n        margin-top: 1rem;\\n        background-image: linear-gradient(\\n            38deg,\\n            rgb(0, 255, 54) -10%,\\n            rgb(0, 238, 87) 3%,\\n            rgb(0, 197, 173) 32%,\\n            rgb(0, 164, 241) 53%,\\n            rgb(11, 24, 252) 102%,\\n            rgb(13, 0, 255) 111%\\n        );\\n        overflow: hidden;\\n        background-size: 200%;\\n        background-position: 99% center;\\n    }\\n    .close-icon {\\n        width: 18px;\\n        position: absolute;\\n        top: -18px;\\n        right: 0px;\\n        cursor: pointer;\\n    }\\n    @keyframes text-run {\\n        from {\\n            background-position: 0 center;\\n        }\\n        to {\\n            background-position: -200% center;\\n        }\\n    }\\n    @media (max-width: 800px) {\\n        max-width: 280px;\\n        .box {\\n            flex-direction: column-reverse;\\n        }\\n        .title {\\n            font-size: 18px;\\n            margin-left: 0;\\n            margin-bottom: 2rem;\\n        }\\n        .close-icon {\\n            top: -25px;\\n            right: -25px;\\n        }\\n    }\\n    @media (max-width: 676px) {\\n        max-width: 220px;\\n        .title {\\n            font-size: 20px;\\n        }\\n        .button {\\n            font-size: 16px;\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 9999999999;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body{\\n        overflow: hidden;\\n    }\\n    .header--nav{\\n        z-index: 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar FlybyBanner = function FlybyBanner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return active ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/icons/close-icon.svg\",\n    alt: \"close icon\",\n    className: \"close-icon\",\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"https://flyby.forbitswap.com/#/live\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/ido-popup/ido-logo.png\",\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 25\n    }\n  }), __jsx(PointWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 25\n    }\n  }, __jsx(\"div\", {\n    className: \"point a\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 29\n    }\n  }), __jsx(\"div\", {\n    className: \"b\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 29\n    }\n  }, __jsx(\"span\", {\n    className: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 33\n    }\n  }, \"IDO\")), __jsx(\"div\", {\n    className: \"point c\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 29\n    }\n  }))))), __jsx(BlurDiv, {\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);\n};\n\n_s(FlybyBanner, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n\n_c = FlybyBanner;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"])(_templateObject());\n_c2 = GlobalStyle;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Content;\nvar WrapImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = WrapImage;\nvar PointWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = PointWrap;\nvar BlurDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n_c7 = BlurDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlybyBanner);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"FlybyBanner\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"WrapImage\");\n$RefreshReg$(_c6, \"PointWrap\");\n$RefreshReg$(_c7, \"BlurDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4Pzk1NzkiXSwibmFtZXMiOlsiRmx5YnlCYW5uZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudCIsIldyYXBJbWFnZSIsIlBvaW50V3JhcCIsIkJsdXJEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxJQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFHdEIsU0FBT0QsTUFBTSxHQUNULE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUMsZ0NBRFI7QUFFSSxPQUFHLEVBQUMsWUFGUjtBQUdJLGFBQVMsRUFBQyxZQUhkO0FBSUksV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBT0k7QUFDSSxRQUFJLEVBQUMscUNBRFQ7QUFFSSxVQUFNLEVBQUMsUUFGWDtBQUdJLE9BQUcsRUFBQyxZQUhSO0FBSUksYUFBUyxFQUFDLEtBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1JLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUMsa0NBRFI7QUFFSSxPQUFHLEVBQUMsaUJBRlI7QUFHSSxhQUFTLEVBQUMsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQU5KLENBTkosQ0FQSixDQUZKLEVBa0NJLE1BQUMsT0FBRDtBQUFTLFdBQU8sRUFBRTtBQUFBLGFBQU1BLFNBQVMsQ0FBQyxLQUFELENBQWY7QUFBQSxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENKLENBRFMsR0FzQ1Qsa0VBdENKO0FBd0NILENBM0NEOztHQUFNSCxXOztLQUFBQSxXO0FBNENOLElBQU1JLFdBQVcsR0FBR0MsMkVBQUgsbUJBQWpCO01BQU1ELFc7QUFTTixJQUFNRSxPQUFPLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUYsTztBQWNOLElBQU1HLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNQyxPO0FBa0ZOLElBQU1DLFNBQVMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBZjtNQUFNRSxTO0FBR04sSUFBTUMsU0FBUyxHQUFHSix5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1HLFM7QUF1RE4sSUFBTUMsT0FBTyxHQUFHTCx5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1JLE87QUFXU1osMEVBQWYiLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9GbHlieUJhbm5lci9GbHlieUJhbm5lci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IGZseWJ5X3JvY2tldCB9IGZyb20gXCIuL2ZseWJ5LXJvY2tldC1iYXNlNjRcIjtcblxuY29uc3QgRmx5YnlCYW5uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgcmV0dXJuIGFjdGl2ZSA/IChcbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL2ljb25zL2Nsb3NlLWljb24uc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiY2xvc2UgaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsb3NlLWljb25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmx5YnkuZm9yYml0c3dhcC5jb20vIy9saXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8V3JhcEltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9pZG8tcG9wdXAvaWRvLWxvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJqb2luIGJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpvaW4tYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQb2ludFdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludCBhXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+SURPPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9pbnQgY1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BvaW50V3JhcD5cbiAgICAgICAgICAgICAgICAgICAgPC9XcmFwSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgZmx5YnkgTGF1bmNocGFkIDxzcGFuIGNsYXNzTmFtZT1cImJ1dHRvblwiPkpvaW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgICA8Qmx1ckRpdiBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmUoZmFsc2UpfSAvPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICApO1xufTtcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgYm9keXtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLmhlYWRlci0tbmF2e1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA1MHZ3O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuYm94IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5idXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDZweCAyMnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgMzhkZWcsXG4gICAgICAgICAgICByZ2IoMCwgMjU1LCA1NCkgLTEwJSxcbiAgICAgICAgICAgIHJnYigwLCAyMzgsIDg3KSAzJSxcbiAgICAgICAgICAgIHJnYigwLCAxOTcsIDE3MykgMzIlLFxuICAgICAgICAgICAgcmdiKDAsIDE2NCwgMjQxKSA1MyUsXG4gICAgICAgICAgICByZ2IoMTEsIDI0LCAyNTIpIDEwMiUsXG4gICAgICAgICAgICByZ2IoMTMsIDAsIDI1NSkgMTExJVxuICAgICAgICApO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDk5JSBjZW50ZXI7XG4gICAgfVxuICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMThweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHRleHQtcnVuIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmNsb3NlLWljb24ge1xuICAgICAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5cbmNvbnN0IFdyYXBJbWFnZSA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbmNvbnN0IFBvaW50V3JhcCA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDE1MDAwbXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGtleWZyYW1lcyByZXZlcnNlLXNwaW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucG9pbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIH1cbiAgICAuYSB7XG4gICAgICAgIHRvcDogMnB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuICAgIC5iIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDJweCk7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiByZXZlcnNlLXNwaW47XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICB9XG4gICAgLmMge1xuICAgICAgICB0b3A6IGNhbGMoOTIlICsgMnB4KTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgIH1cbmA7XG5jb25zdCBCbHVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5gO1xuZXhwb3J0IGRlZmF1bHQgRmx5YnlCYW5uZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/FlybyBanner/FlybyBanner.jsx\n");

/***/ })

})