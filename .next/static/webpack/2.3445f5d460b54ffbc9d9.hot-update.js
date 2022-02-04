webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: auto;\\n    left: 10px;\\n    top: 10px;\\n    /* border: 2px solid black; */\\n    /* line-height: 116px; */\\n    font-size: 80px;\\n    font-weight: bold;\\n    color: white;\\n    text-align: center;\\n    &:nth-child(1) { transform: rotateY(  0deg) translateZ(200px); }\\n    &:nth-child(2) { transform: rotateY( 90deg) translateZ(200px); }\\n    &:nth-child(3) { transform: rotateY( 180deg) translateZ(200px); }\\n    &:nth-child(4) { transform: rotateY( 270deg) translateZ(200px); }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    transform: translateZ(-180px);\\n    transform-style: preserve-3d;\\n    transition: transform 1s;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    /* border: 1px solid #CCC; */\\n    margin: 40px 0;\\n    position: relative;\\n    width: 100%;\\n    min-height: 340px;\\n    max-width: 650px;\\n    margin: 40px auto;\\n    perspective: 1000px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = [{\n  icon: 'eth'\n}, {\n  icon: 'bsc'\n}, {\n  icon: 'polygon'\n}, {\n  icon: 'ava'\n}]; // const delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      index = _useState[0],\n      setIndex = _useState[1];\n\n  var delay = index === 0 || index === 4 ? 2500 : 5000;\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    timeoutRef.current = setTimeout(function () {\n      return setIndex(function (prevIndex) {\n        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;\n      });\n    }, delay);\n    return function () {\n      resetTimeout();\n    };\n  }, [index]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(Slider, {\n    style: {\n      transform: \"translateZ(-180px) rotateY(\".concat(index / images.length * -360, \"deg)\")\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"../images/home-page/\".concat(item.icon, \".png\"),\n      alt: \"\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 29\n      }\n    }));\n  })));\n};\n\n_s(Routing, \"bhtDMAuiTWjY/oCsgWcgDfz/cnA=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWNvbiIsIlJvdXRpbmciLCJ1c2VTdGF0ZSIsImluZGV4Iiwic2V0SW5kZXgiLCJkZWxheSIsInRpbWVvdXRSZWYiLCJ1c2VSZWYiLCJyZXNldFRpbWVvdXQiLCJjdXJyZW50IiwiY2xlYXJUaW1lb3V0IiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsInByZXZJbmRleCIsImxlbmd0aCIsInRyYW5zZm9ybSIsIm1hcCIsIml0ZW0iLCJTbGlkZVNob3ciLCJzdHlsZWQiLCJkaXYiLCJTbGlkZXIiLCJTbGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFDQyxNQUFJLEVBQUM7QUFBTixDQURXLEVBQ0c7QUFBQ0EsTUFBSSxFQUFFO0FBQVAsQ0FESCxFQUNrQjtBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURsQixFQUNxQztBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURyQyxDQUFmLEMsQ0FHQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsQ0FBRCxDQURoQjtBQUFBLE1BQ1hDLEtBRFc7QUFBQSxNQUNKQyxRQURJOztBQUVsQixNQUFNQyxLQUFLLEdBQUdGLEtBQUssS0FBSyxDQUFWLElBQWVBLEtBQUssS0FBSyxDQUF6QixHQUE2QixJQUE3QixHQUFvQyxJQUFsRDtBQUNBLE1BQU1HLFVBQVUsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXpCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDdkIsUUFBR0YsVUFBVSxDQUFDRyxPQUFkLEVBQXNCO0FBQ2xCQyxrQkFBWSxDQUFDSixVQUFVLENBQUNHLE9BQVosQ0FBWjtBQUNIO0FBQ0osR0FKRDs7QUFNQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1pILGdCQUFZO0FBQ1pGLGNBQVUsQ0FBQ0csT0FBWCxHQUFxQkcsVUFBVSxDQUMzQjtBQUFBLGFBQU1SLFFBQVEsQ0FBQyxVQUFDUyxTQUFEO0FBQUEsZUFDWEEsU0FBUyxLQUFLZCxNQUFNLENBQUNlLE1BQVAsR0FBZ0IsQ0FBOUIsR0FBa0MsQ0FBbEMsR0FBc0NELFNBQVMsR0FBRyxDQUR2QztBQUFBLE9BQUQsQ0FBZDtBQUFBLEtBRDJCLEVBSS9CUixLQUorQixDQUEvQjtBQU1BLFdBQU8sWUFBTTtBQUNURyxrQkFBWTtBQUNmLEtBRkQ7QUFHSCxHQVhRLEVBV04sQ0FBQ0wsS0FBRCxDQVhNLENBQVQ7QUFjQSxTQUNJLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUNZLGVBQVMsdUNBQWdDWixLQUFLLEdBQUNKLE1BQU0sQ0FBQ2UsTUFBYixHQUFvQixDQUFDLEdBQXJEO0FBQVYsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVFmLE1BQU0sQ0FBQ2lCLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9kLEtBQVA7QUFBQSxXQUNQLE1BQUMsS0FBRDtBQUFPLFNBQUcsRUFBRUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxTQUFHLGdDQUF5QmMsSUFBSSxDQUFDakIsSUFBOUIsU0FBUjtBQUFrRCxTQUFHLEVBQUMsRUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBRE87QUFBQSxHQUFYLENBRlIsQ0FESixDQURKO0FBYUgsQ0F0Q0Q7O0dBQU1DLE87O0tBQUFBLE87QUF3Q04sSUFBTWlCLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBZjtNQUFNRixTO0FBVU4sSUFBTUcsTUFBTSxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFaO01BQU1DLE07QUFRTixJQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQVg7TUFBTUUsSztBQWtCU3JCLHNFQUFmIiwiZmlsZSI6Ii4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgaW1hZ2VzID0gW1xuICAgIHtpY29uOidldGgnfSwge2ljb246ICdic2MnfSwge2ljb246ICdwb2x5Z29uJ30sIHtpY29uOiAnYXZhJ31cbl1cbi8vIGNvbnN0IGRlbGF5ID0gMjUwMDtcbmNvbnN0IFJvdXRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBkZWxheSA9IGluZGV4ID09PSAwIHx8IGluZGV4ID09PSA0ID8gMjUwMCA6IDUwMDA7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IHJlc2V0VGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgaWYodGltZW91dFJlZi5jdXJyZW50KXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiBzZXRJbmRleCgocHJldkluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICBwcmV2SW5kZXggPT09IGltYWdlcy5sZW5ndGggLSAxID8gMCA6IHByZXZJbmRleCArIDFcbiAgICAgICAgICAgICksXG4gICAgICAgIGRlbGF5KTtcblxuICAgICAgICByZXR1cm4oKCkgPT4ge1xuICAgICAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIH0pXG4gICAgfSwgW2luZGV4XSk7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPFNsaWRlU2hvdz5cbiAgICAgICAgICAgIDxTbGlkZXIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGVaKC0xODBweCkgcm90YXRlWSgke2luZGV4L2ltYWdlcy5sZW5ndGgqLTM2MH1kZWcpYH19PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4uL2ltYWdlcy9ob21lLXBhZ2UvJHtpdGVtLmljb259LnBuZ2B9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlPlxuICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L1NsaWRlU2hvdz5cbiAgICApXG59XG5cbmNvbnN0IFNsaWRlU2hvdyA9IHN0eWxlZC5kaXZgXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgI0NDQzsgKi9cbiAgICBtYXJnaW46IDQwcHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzQwcHg7XG4gICAgbWF4LXdpZHRoOiA2NTBweDtcbiAgICBtYXJnaW46IDQwcHggYXV0bztcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xuYFxuY29uc3QgU2xpZGVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTgwcHgpO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuYFxuY29uc3QgU2xpZGUgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgLyogbGluZS1oZWlnaHQ6IDExNnB4OyAqL1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICY6bnRoLWNoaWxkKDEpIHsgdHJhbnNmb3JtOiByb3RhdGVZKCAgMGRlZykgdHJhbnNsYXRlWigyMDBweCk7IH1cbiAgICAmOm50aC1jaGlsZCgyKSB7IHRyYW5zZm9ybTogcm90YXRlWSggOTBkZWcpIHRyYW5zbGF0ZVooMjAwcHgpOyB9XG4gICAgJjpudGgtY2hpbGQoMykgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoIDE4MGRlZykgdHJhbnNsYXRlWigyMDBweCk7IH1cbiAgICAmOm50aC1jaGlsZCg0KSB7IHRyYW5zZm9ybTogcm90YXRlWSggMjcwZGVnKSB0cmFuc2xhdGVaKDIwMHB4KTsgfVxuYFxuXG5leHBvcnQgZGVmYXVsdCBSb3V0aW5nOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})