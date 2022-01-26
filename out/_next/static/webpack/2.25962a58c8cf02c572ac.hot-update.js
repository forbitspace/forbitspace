webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    display: inline-block;\\n    height: 400px;\\n    width: 100%;\\n    border-radius: 24px;\\n    background-color: yellow;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    white-space: nowrap;\\n    transition: ease 1s;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 0 auto;\\n    overflow: hidden;\\n    max-width: 750px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = ['eth', 'polygon', 'bsc', 'ava'];\nvar delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    timeoutRef.current = setTimeout(function () {\n      return setIndex(function (prevIndex) {\n        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;\n      });\n    }, delay);\n    return function () {\n      resetTimeout();\n    };\n  }, [index]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(Slider, {\n    style: {\n      transform: \"translate3d(\".concat(-index * 100, \"%, 0, 0)\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"public/images/home-page/\".concat(item, \".png\"),\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 29\n      }\n    }));\n  })));\n};\n\n_s(Routing, \"bhtDMAuiTWjY/oCsgWcgDfz/cnA=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiZGVsYXkiLCJSb3V0aW5nIiwidXNlU3RhdGUiLCJpbmRleCIsInNldEluZGV4IiwidGltZW91dFJlZiIsInVzZVJlZiIsInJlc2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwidHJhbnNmb3JtIiwibWFwIiwiaXRlbSIsIlNsaWRlU2hvdyIsInN0eWxlZCIsImRpdiIsIlNsaWRlciIsIlNsaWRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUFDLEtBQUQsRUFBUSxTQUFSLEVBQW1CLEtBQW5CLEVBQTBCLEtBQTFCLENBQWY7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBZDs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsQ0FBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUVsQixNQUFNQyxVQUFVLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF6Qjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCLFFBQUdGLFVBQVUsQ0FBQ0csT0FBZCxFQUFzQjtBQUNsQkMsa0JBQVksQ0FBQ0osVUFBVSxDQUFDRyxPQUFaLENBQVo7QUFDSDtBQUNKLEdBSkQ7O0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNaSCxnQkFBWTtBQUNaRixjQUFVLENBQUNHLE9BQVgsR0FBcUJHLFVBQVUsQ0FDM0I7QUFBQSxhQUFNUCxRQUFRLENBQUMsVUFBQ1EsU0FBRDtBQUFBLGVBQ1hBLFNBQVMsS0FBS2IsTUFBTSxDQUFDYyxNQUFQLEdBQWdCLENBQTlCLEdBQWtDLENBQWxDLEdBQXNDRCxTQUFTLEdBQUcsQ0FEdkM7QUFBQSxPQUFELENBQWQ7QUFBQSxLQUQyQixFQUkvQlosS0FKK0IsQ0FBL0I7QUFNQSxXQUFPLFlBQU07QUFDVE8sa0JBQVk7QUFDZixLQUZEO0FBR0gsR0FYUSxFQVdOLENBQUNKLEtBQUQsQ0FYTSxDQUFUO0FBY0EsU0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsTUFBRDtBQUFRLFNBQUssRUFBRTtBQUFDVyxlQUFTLHdCQUFpQixDQUFDWCxLQUFELEdBQVMsR0FBMUI7QUFBVixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUosTUFBTSxDQUFDZ0IsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT2IsS0FBUDtBQUFBLFdBQ1AsTUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLFNBQUcsb0NBQTZCYSxJQUE3QixTQUFSO0FBQWlELFNBQUcsRUFBQyxFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FETztBQUFBLEdBQVgsQ0FGUixDQURKLENBREo7QUFhSCxDQXJDRDs7R0FBTWYsTzs7S0FBQUEsTztBQXVDTixJQUFNZ0IsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFM7QUFLTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUMsTTtBQUlOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNRSxLO0FBUVNwQixzRUFBZiIsImZpbGUiOiIuL2NsaWVudC9jb21wb25lbnRzL0hvbWUvY29tcG9uZW50cy9Sb3V0aW5nLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGltYWdlcyA9IFsnZXRoJywgJ3BvbHlnb24nLCAnYnNjJywgJ2F2YSddXG5jb25zdCBkZWxheSA9IDI1MDA7XG5jb25zdCBSb3V0aW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IHJlc2V0VGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgaWYodGltZW91dFJlZi5jdXJyZW50KXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiBzZXRJbmRleCgocHJldkluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICAgICAgICAgICksXG4gICAgICAgIGRlbGF5KTtcblxuICAgICAgICByZXR1cm4oKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIH0pXG4gICAgfSwgW2luZGV4XSk7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPFNsaWRlU2hvdz5cbiAgICAgICAgICAgIDxTbGlkZXIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgkey1pbmRleCAqIDEwMH0lLCAwLCAwKWB9fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BwdWJsaWMvaW1hZ2VzL2hvbWUtcGFnZS8ke2l0ZW19LnBuZ2B9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L1NsaWRlU2hvdz5cbiAgICApXG59XG5cbmNvbnN0IFNsaWRlU2hvdyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xuYFxuY29uc3QgU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMXM7XG5gXG5jb25zdCBTbGlkZSA9IHN0eWxlZC5kaXZgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})