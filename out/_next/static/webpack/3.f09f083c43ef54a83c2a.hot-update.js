webpackHotUpdate_N_E(3,{

/***/ "./client/components/FlybyBanner/FlybyBanner.jsx":
/*!*******************************************************!*\
  !*** ./client/components/FlybyBanner/FlybyBanner.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/FlybyBanner/FlybyBanner.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    z-index: -1;\\n    background-color: #00000080;\\n    width: 100%;\\n    height: 100%;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    .box {\\n        font-size: 20px;\\n        padding: 6px;\\n        border-radius: 8px;\\n        border: 2px solid white;\\n    }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    height: fit-content;\\n    max-width: 400px;\\n    padding: 1rem;\\n    /* margin: auto; */\\n    .join-bg {\\n        max-width: 100%;\\n    }\\n    .join-man {\\n        max-width: 100px;\\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    width: 100vw;\\n    height: 100vh;\\n    z-index: 9999999999;\\n    position: fixed;\\n    top: 0;\\n    left: 0;\\n    right: 0;\\n    bottom: 0;\\n    /* background-color: #00000080; */\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar FlybyBanner = function FlybyBanner() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true),\n      active = _useState[0],\n      setActive = _useState[1];\n\n  return active ? __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, __jsx(Content, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/icons/join-bg.png\",\n    alt: \"join background\",\n    className: \"join-bg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 17\n    }\n  }), __jsx(WrapBanner, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 17\n    }\n  }, __jsx(\"div\", {\n    className: \"box\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 21\n    }\n  }, \"Join\"), __jsx(\"img\", {\n    src: \"../images/icons/join-man.png\",\n    alt: \"join man\",\n    className: \"join-man\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 21\n    }\n  }))), __jsx(BlurDiv, {\n    onClick: function onClick() {\n      return setActive(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null);\n};\n\n_s(FlybyBanner, \"8U9J+wJN8vvBTuOPDEeGZkZ5XMY=\");\n\n_c = FlybyBanner;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = Wrapper;\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Content;\nvar WrapBanner = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = WrapBanner;\nvar BlurDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject4());\n_c5 = BlurDiv;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FlybyBanner);\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"FlybyBanner\");\n$RefreshReg$(_c2, \"Wrapper\");\n$RefreshReg$(_c3, \"Content\");\n$RefreshReg$(_c4, \"WrapBanner\");\n$RefreshReg$(_c5, \"BlurDiv\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4Pzk1NzkiXSwibmFtZXMiOlsiRmx5YnlCYW5uZXIiLCJ1c2VTdGF0ZSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50IiwiV3JhcEJhbm5lciIsIkJsdXJEaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ01DLHNEQUFRLENBQUMsSUFBRCxDQURkO0FBQUEsTUFDZkMsTUFEZTtBQUFBLE1BQ1BDLFNBRE87O0FBR3RCLFNBQU9ELE1BQU0sR0FDVCxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUMsNkJBRFI7QUFFSSxPQUFHLEVBQUMsaUJBRlI7QUFHSSxhQUFTLEVBQUMsU0FIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFNSSxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBRUk7QUFDSSxPQUFHLEVBQUMsOEJBRFI7QUFFSSxPQUFHLEVBQUMsVUFGUjtBQUdJLGFBQVMsRUFBQyxVQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQU5KLENBREosRUFnQkksTUFBQyxPQUFEO0FBQVMsV0FBTyxFQUFFO0FBQUEsYUFBTUMsU0FBUyxDQUFDLEtBQUQsQ0FBZjtBQUFBLEtBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosQ0FEUyxHQW9CVCxrRUFwQko7QUFzQkgsQ0F6QkQ7O0dBQU1ILFc7O0tBQUFBLFc7QUEyQk4sSUFBTUksT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFiO01BQU1GLE87QUFlTixJQUFNRyxPQUFPLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7TUFBTUMsTztBQWFOLElBQU1DLFVBQVUsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7TUFBTUUsVTtBQVlOLElBQU1DLE9BQU8sR0FBR0oseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtNQUFNRyxPO0FBV1NULDBFQUFmIiwiZmlsZSI6Ii4vY2xpZW50L2NvbXBvbmVudHMvRmx5YnlCYW5uZXIvRmx5YnlCYW5uZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBGbHlieUJhbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gYWN0aXZlID8gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICAgIDxDb250ZW50PlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL2ljb25zL2pvaW4tYmcucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiam9pbiBiYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiam9pbi1iZ1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8V3JhcEJhbm5lcj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5Kb2luPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uL2ltYWdlcy9pY29ucy9qb2luLW1hbi5wbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiam9pbiBtYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiam9pbi1tYW5cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvV3JhcEJhbm5lcj5cbiAgICAgICAgICAgIDwvQ29udGVudD5cbiAgICAgICAgICAgIDxCbHVyRGl2IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZShmYWxzZSl9IC8+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApIDogKFxuICAgICAgICA8PjwvPlxuICAgICk7XG59O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4MDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gO1xuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xuICAgIC5qb2luLWJnIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuam9pbi1tYW4ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIH1cbmA7XG5jb25zdCBXcmFwQmFubmVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIC5ib3gge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB9XG5gO1xuY29uc3QgQmx1ckRpdiA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuYDtcbmV4cG9ydCBkZWZhdWx0IEZseWJ5QmFubmVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/FlybyBanner/FlybyBanner.jsx\n");

/***/ })

})