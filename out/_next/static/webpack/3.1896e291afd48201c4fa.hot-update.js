webpackHotUpdate_N_E(3,{

/***/ "./client/components/FlybyBanner/FlybyBanner.jsx":
/*!*******************************************************!*\
  !*** ./client/components/FlybyBanner/FlybyBanner.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/FlybyBanner/FlybyBanner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    background-color: #000000bb;\\n    width: 100%;\\n    height: 100%;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    animation-name: spin;\\n    animation-duration: 15000ms;\\n    animation-iteration-count: infinite;\\n    animation-timing-function: linear;\\n    @keyframes spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(-360deg);\\n        }\\n    }\\n    @keyframes reverse-spin {\\n        from {\\n            transform: rotate(0deg);\\n        }\\n        to {\\n            transform: rotate(360deg);\\n        }\\n    }\\n\\n    .point {\\n        background-color: white;\\n        position: absolute;\\n        width: 15px;\\n        height: 15px;\\n        border-radius: 50%;\\n        transform: translate(-50%, -50%);\\n    }\\n    .a {\\n        top: 2px;\\n        left: 50%;\\n    }\\n    .b {\\n        font-style: italic;\\n        font-size: 24px;\\n        position: absolute;\\n        top: 50%;\\n        left: calc(100% + 2px);\\n        animation-name: reverse-spin;\\n        animation-duration: 15000ms;\\n        animation-iteration-count: infinite;\\n        animation-timing-function: linear;\\n    }\\n    .c {\\n        top: calc(92% + 2px);\\n        left: 50%;\\n    }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 50vw;\\n    height: fit-content;\\n    max-width: 280px;\\n    /* padding: 1rem; */\\n    display: flex;\\n    align-items: flex-start;\\n    position: relative;\\n    .title {\\n        font-style: italic;\\n        font-size: 24px;\\n        position: absolute;\\n        left: 118%;\\n        top: 40%;\\n        white-space: nowrap;\\n    }\\n    .text-decor {\\n        font-weight: 500;\\n        background-image: linear-gradient(\\n            -225deg,\\n            rgb(124, 249, 91) 0%,\\n            rgb(124, 249, 91) 29%,\\n            rgb(225, 162, 236) 67%,\\n            rgb(248, 116, 255) 100%\\n        );\\n        background-size: 200% auto;\\n        background-clip: text;\\n        text-fill-color: transparent;\\n        -webkit-background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n        animation: text-run 5s infinite linear;\\n    }\\n    @keyframes text-run {\\n        from {\\n            /* right: -120%; */\\n            background-position: 0 center;\\n        }\\n        to {\\n            /* right: 120%; */\\n            background-position: -200% center;\\n        }\\n    }\\n    @media (max-width: 800px) {\\n        .title {\\n            font-size: 18px;\\n        }\\n    }\\n    @media (max-width: 676px) {\\n        .title {\\n            font-size: 24px;\\n            top: 120%;\\n            left: 50%;\\n            transform: translate(-50%, -50%);\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 9999999999;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    /* background-color: #00000080; */\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body{\\n        overflow: hidden;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar FlybyBanner = function FlybyBanner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return active ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: \"https://flyby.forbitswap.com/#/live\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 17\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/icons/flyby-rocket.png\",\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }), __jsx(PointWrap, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 21\n    }\n  }, __jsx(\"div\", {\n    className: \"point a\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 25\n    }\n  }), __jsx(\"div\", {\n    className: \"b\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 25\n    }\n  }, __jsx(\"span\", {\n    className: \"text-decor\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 29\n    }\n  }, \"IDO\")), __jsx(\"div\", {\n    className: \"point c\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 25\n    }\n  })), __jsx(\"div\", {\n    className: \"title text-decor\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 21\n    }\n  }, \"flyby Launchpad\"))), __jsx(BlurDiv, {\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);\n};\n\n_s(FlybyBanner, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n\n_c = FlybyBanner;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"])(_templateObject());\n_c2 = GlobalStyle;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Content;\nvar PointWrap = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = PointWrap;\nvar BlurDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = BlurDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlybyBanner);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"FlybyBanner\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"PointWrap\");\n$RefreshReg$(_c6, \"BlurDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4Pzk1NzkiXSwibmFtZXMiOlsiRmx5YnlCYW5uZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudCIsIlBvaW50V3JhcCIsIkJsdXJEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUd0QixTQUFPRCxNQUFNLEdBQ1QsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLFFBQUksRUFBQyxxQ0FEVDtBQUVJLFVBQU0sRUFBQyxRQUZYO0FBR0ksT0FBRyxFQUFDLFlBSFI7QUFJSSxhQUFTLEVBQUMsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUk7QUFDSSxPQUFHLEVBQUMsa0NBRFI7QUFFSSxPQUFHLEVBQUMsaUJBRlI7QUFHSSxhQUFTLEVBQUMsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFXSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBSyxhQUFTLEVBQUMsR0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLENBRkosRUFLSTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixDQVhKLEVBa0JJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJKLENBREosQ0FGSixFQXdCSSxNQUFDLE9BQUQ7QUFBUyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhCSixDQURTLEdBNEJULGtFQTVCSjtBQThCSCxDQWpDRDs7R0FBTUgsVzs7S0FBQUEsVztBQWtDTixJQUFNSSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtNQUFNRCxXO0FBTU4sSUFBTUUsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1GLE87QUFlTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUMsTztBQXdETixJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUUsUztBQXVETixJQUFNQyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUcsTztBQVdTWCwwRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0ZseWJ5QmFubmVyL0ZseWJ5QmFubmVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBGbHlieUJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gYWN0aXZlID8gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZmx5YnkuZm9yYml0c3dhcC5jb20vIy9saXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJveFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvaWNvbnMvZmx5Ynktcm9ja2V0LnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJqb2luIGJhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiam9pbi1iZ1wiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxQb2ludFdyYXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50IGFcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kZWNvclwiPklETzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludCBjXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb2ludFdyYXA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUgdGV4dC1kZWNvclwiPmZseWJ5IExhdW5jaHBhZDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgIDxCbHVyRGl2IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9IC8+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICk7XG59O1xuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5e1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cbmA7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiA5OTk5OTk5OTk5O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDgwOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgLyogcGFkZGluZzogMXJlbTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAxMTglO1xuICAgICAgICB0b3A6IDQwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgLnRleHQtZGVjb3Ige1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAtMjI1ZGVnLFxuICAgICAgICAgICAgcmdiKDEyNCwgMjQ5LCA5MSkgMCUsXG4gICAgICAgICAgICByZ2IoMTI0LCAyNDksIDkxKSAyOSUsXG4gICAgICAgICAgICByZ2IoMjI1LCAxNjIsIDIzNikgNjclLFxuICAgICAgICAgICAgcmdiKDI0OCwgMTE2LCAyNTUpIDEwMCVcbiAgICAgICAgKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYW5pbWF0aW9uOiB0ZXh0LXJ1biA1cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgdGV4dC1ydW4ge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgIC8qIHJpZ2h0OiAtMTIwJTsgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIC8qIHJpZ2h0OiAxMjAlOyAqL1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NzZweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgdG9wOiAxMjAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuY29uc3QgUG9pbnRXcmFwID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTUwMDBtcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAa2V5ZnJhbWVzIHJldmVyc2Utc3BpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wb2ludCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgfVxuICAgIC5hIHtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICB9XG4gICAgLmIge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogY2FsYygxMDAlICsgMnB4KTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJldmVyc2Utc3BpbjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNTAwMG1zO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIH1cbiAgICAuYyB7XG4gICAgICAgIHRvcDogY2FsYyg5MiUgKyAycHgpO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgfVxuYDtcbmNvbnN0IEJsdXJEaXYgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGJiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbmA7XG5leHBvcnQgZGVmYXVsdCBGbHlieUJhbm5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/FlybyBanner/FlybyBanner.jsx\n");

/***/ })

})