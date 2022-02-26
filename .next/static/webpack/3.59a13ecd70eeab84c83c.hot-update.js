webpackHotUpdate_N_E(3,{

/***/ "./client/components/FlybyBanner/FlybyBanner.jsx":
/*!*******************************************************!*\
  !*** ./client/components/FlybyBanner/FlybyBanner.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _flyby_rocket_base64__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flyby-rocket-base64 */ \"./client/components/FlybyBanner/flyby-rocket-base64.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/FlybyBanner/FlybyBanner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    background-color: #000000cc;\\n    width: 100%;\\n    height: 100%;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    bottom: 85%;\\n    left: 72%;\\n    width: 125px;\\n    height: auto;\\n    z-index: 999;\\n    &:hover {\\n        cursor: pointer;\\n    }\\n\\n    img {\\n        width: 100%;\\n        height: auto;\\n    }\\n    @keyframes popup-scale {\\n        0% {\\n            opacity: 0;\\n        }\\n        90% {\\n            transform: scale(0);\\n            opacity: 0;\\n        }\\n\\n        100% {\\n            transform: scale(1);\\n            opacity: 1;\\n        }\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    /* position: absolute; */\\n    width: 220px;\\n    bottom: 0;\\n    left: 0;\\n    z-index: 999;\\n    &:hover {\\n        cursor: pointer;\\n    }\\n\\n    img {\\n        width: 100%;\\n        height: auto;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: relative;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 50vw;\\n    height: fit-content;\\n    max-width: 380px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    position: relative;\\n    .close-icon {\\n        width: 20px;\\n        position: absolute;\\n        top: -100px;\\n        right: 0px;\\n        cursor: pointer;\\n        opacity: 0.3;\\n    }\\n    :hover {\\n        .close-icon {\\n            opacity: 0.8;\\n        }\\n    }\\n    @media (max-width: 800px) {\\n        transform: scale(0.7);\\n        max-width: 280px;\\n        .close-icon {\\n            width: 24px;\\n            top: -105px;\\n            right: -75px;\\n        }\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 9999999999;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body{\\n        overflow: hidden;\\n    }\\n    .header--nav{\\n        z-index: 0;\\n    }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar FlybyBanner = function FlybyBanner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return active ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, __jsx(GlobalStyle, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }\n  }), __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/icons/close-icon.svg\",\n    alt: \"close icon\",\n    className: \"close-icon\",\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 17\n    }\n  }), __jsx(\"a\", {\n    href: \"https://flyby.forbitswap.com/#/live\",\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    className: \"box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 17\n    }\n  }, __jsx(WrapImage, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 21\n    }\n  }, __jsx(Astronaut, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/ido-popup/ido-man.png\",\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 29\n    }\n  })), __jsx(Banner, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/ido-popup/ido-logo.png\",\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 29\n    }\n  }))))), __jsx(BlurDiv, {\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);\n};\n\n_s(FlybyBanner, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n\n_c = FlybyBanner;\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"])(_templateObject());\n_c2 = GlobalStyle;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Content;\nvar WrapImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = WrapImage;\nvar Astronaut = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\n_c6 = Astronaut;\nvar Banner = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].a(_templateObject6());\n_c7 = Banner;\nvar BlurDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject7());\n_c8 = BlurDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlybyBanner);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"FlybyBanner\");\n$RefreshReg$(_c2, \"GlobalStyle\");\n$RefreshReg$(_c3, \"Wrapper\");\n$RefreshReg$(_c4, \"Content\");\n$RefreshReg$(_c5, \"WrapImage\");\n$RefreshReg$(_c6, \"Astronaut\");\n$RefreshReg$(_c7, \"Banner\");\n$RefreshReg$(_c8, \"BlurDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4Pzk1NzkiXSwibmFtZXMiOlsiRmx5YnlCYW5uZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiQ29udGVudCIsIldyYXBJbWFnZSIsIkFzdHJvbmF1dCIsIkJhbm5lciIsImEiLCJCbHVyRGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNNQyxzREFBUSxDQUFDLElBQUQsQ0FEZDtBQUFBLE1BQ2ZDLE1BRGU7QUFBQSxNQUNQQyxTQURPOztBQUd0QixTQUFPRCxNQUFNLEdBQ1QsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLE9BQUcsRUFBQyxnQ0FEUjtBQUVJLE9BQUcsRUFBQyxZQUZSO0FBR0ksYUFBUyxFQUFDLFlBSGQ7QUFJSSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxTQUFTLENBQUMsS0FBRCxDQUFmO0FBQUEsS0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFPSTtBQUNJLFFBQUksRUFBQyxxQ0FEVDtBQUVJLFVBQU0sRUFBQyxRQUZYO0FBR0ksT0FBRyxFQUFDLFlBSFI7QUFJSSxhQUFTLEVBQUMsS0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUksTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksT0FBRyxFQUFDLGlDQURSO0FBRUksT0FBRyxFQUFDLGlCQUZSO0FBR0ksYUFBUyxFQUFDLFNBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFRSSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksT0FBRyxFQUFDLGtDQURSO0FBRUksT0FBRyxFQUFDLGlCQUZSO0FBR0ksYUFBUyxFQUFDLFNBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUkosQ0FOSixDQVBKLENBRkosRUFpQ0ksTUFBQyxPQUFEO0FBQVMsV0FBTyxFQUFFO0FBQUEsYUFBTUEsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0osQ0FEUyxHQXFDVCxrRUFyQ0o7QUF1Q0gsQ0ExQ0Q7O0dBQU1ILFc7O0tBQUFBLFc7QUEyQ04sSUFBTUksV0FBVyxHQUFHQywyRUFBSCxtQkFBakI7TUFBTUQsVztBQVNOLElBQU1FLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNRixPO0FBY04sSUFBTUcsT0FBTyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFiO01BQU1DLE87QUFnQ04sSUFBTUMsU0FBUyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWLG9CQUFmO01BQU1FLFM7QUFHTixJQUFNQyxTQUFTLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWY7TUFBTUcsUztBQWdCTixJQUFNQyxNQUFNLEdBQUdMLHlEQUFNLENBQUNNLENBQVYsb0JBQVo7TUFBTUQsTTtBQThCTixJQUFNRSxPQUFPLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTU0sTztBQVdTZCwwRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0ZseWJ5QmFubmVyL0ZseWJ5QmFubmVyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgZmx5Ynlfcm9ja2V0IH0gZnJvbSBcIi4vZmx5Ynktcm9ja2V0LWJhc2U2NFwiO1xuXG5jb25zdCBGbHlieUJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gYWN0aXZlID8gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgPENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvaWNvbnMvY2xvc2UtaWNvbi5zdmdcIlxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJjbG9zZSBpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xvc2UtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mbHlieS5mb3JiaXRzd2FwLmNvbS8jL2xpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm94XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxXcmFwSW1hZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXN0cm9uYXV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL2lkby1wb3B1cC9pZG8tbWFuLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImpvaW4gYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpvaW4tYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FzdHJvbmF1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCYW5uZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi9pbWFnZXMvaWRvLXBvcHVwL2lkby1sb2dvLnBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImpvaW4gYmFja2dyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImpvaW4tYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Jhbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9XcmFwSW1hZ2U+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgPEJsdXJEaXYgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGZhbHNlKX0gLz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgKTtcbn07XG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgIGJvZHl7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5oZWFkZXItLW5hdntcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG5gO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmA7XG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNTB2dztcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuY2xvc2UtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTEwMHB4O1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICB9XG4gICAgOmhvdmVyIHtcbiAgICAgICAgLmNsb3NlLWljb24ge1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgICAgIG1heC13aWR0aDogMjgwcHg7XG4gICAgICAgIC5jbG9zZS1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgdG9wOiAtMTA1cHg7XG4gICAgICAgICAgICByaWdodDogLTc1cHg7XG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5jb25zdCBXcmFwSW1hZ2UgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5jb25zdCBBc3Ryb25hdXQgPSBzdHlsZWQuZGl2YFxuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cbiAgICB3aWR0aDogMjIwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5gO1xuXG5jb25zdCBCYW5uZXIgPSBzdHlsZWQuYWBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA4NSU7XG4gICAgbGVmdDogNzIlO1xuICAgIHdpZHRoOiAxMjVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgei1pbmRleDogOTk5O1xuICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gICAgQGtleWZyYW1lcyBwb3B1cC1zY2FsZSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgOTAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbmA7XG5jb25zdCBCbHVyRGl2ID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBjYztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG5gO1xuZXhwb3J0IGRlZmF1bHQgRmx5YnlCYW5uZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/FlybyBanner/FlybyBanner.jsx\n");

/***/ })

})