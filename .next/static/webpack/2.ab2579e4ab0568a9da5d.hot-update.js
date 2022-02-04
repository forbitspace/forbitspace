webpackHotUpdate_N_E(2,{

/***/ "./client/components/Home/components/Routing.jsx":
/*!*******************************************************!*\
  !*** ./client/components/Home/components/Routing.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/spacedevnguyen/Desktop/Documents/forbitspace/forbitspace/client/components/Home/components/Routing.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: auto;\\n    left: 10px;\\n    top: 10px;\\n    /* border: 2px solid black; */\\n    /* line-height: 116px; */\\n    font-size: 80px;\\n    font-weight: bold;\\n    color: white;\\n    text-align: center;\\n    transition: ease-in-out opacity 1s;\\n    &:nth-child(1) { transform: rotateY(   0deg) translateZ(305px); }\\n    &:nth-child(2) { transform: rotateY(  90deg) translateZ(305px); }\\n    &:nth-child(3) { transform: rotateY( 180deg) translateZ(305px); }\\n    &:nth-child(4) { transform: rotateY( 270deg) translateZ(305px); }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    height: 100%;\\n    position: absolute;\\n    top: 0;\\n    transform: translateZ(-180px);\\n    transform-style: preserve-3d;\\n    /* transition: transform 2s; */\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    /* border: 1px solid #CCC; */\\n    margin: 40px 0;\\n    position: relative;\\n    width: 100%;\\n    max-width: 650px;\\n    margin: 40px auto;\\n    /* perspective: 1000px; */\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar images = [{\n  icon: 'eth'\n}, {\n  icon: 'bsc'\n}, {\n  icon: 'polygon'\n}, {\n  icon: 'ava'\n}]; // const delay = 2500;\n\nvar Routing = function Routing() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      idx = _useState[0],\n      setIdx = _useState[1];\n\n  var delay = idx === 0 || idx === 5 ? 2500 : 5000;\n  var timeoutRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var resetTimeout = function resetTimeout() {\n    if (timeoutRef.current) {\n      clearTimeout(timeoutRef.current);\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    resetTimeout();\n    timeoutRef.current = setTimeout(function () {\n      return setIdx(function (prevIndex) {\n        return prevIndex === images.length + 1 ? 0 : prevIndex + 1;\n      });\n    }, // () => setIdx(idx+1),\n    delay);\n    return function () {\n      resetTimeout();\n    };\n  }, [idx]);\n  return __jsx(SlideShow, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"../images/home-page/eth.png\",\n    alt: \"logo-icon\",\n    style: {\n      opacity: 0\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }), __jsx(Slider, {\n    style: {\n      transform: \"translateZ(-180px) rotateY(\".concat(idx / images.length * -360, \"deg)\"),\n      transition: idx > 4 ? 'transform 0s' : 'transform 2s'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, images.map(function (item, index) {\n    return __jsx(Slide, {\n      key: index,\n      style: {\n        opacity: \"\".concat(index === idx % 4 ? \"1\" : \"0\")\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 25\n      }\n    }, __jsx(\"img\", {\n      src: \"../images/home-page/\".concat(item.icon, \".png\"),\n      alt: \"routing-\".concat(item.icon),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 29\n      }\n    }));\n  })));\n};\n\n_s(Routing, \"/CAK3tvYeNy5AZ4bx+rFxbIGOsg=\");\n\n_c = Routing;\nvar SlideShow = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = SlideShow;\nvar Slider = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\n_c3 = Slider;\nvar Slide = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\n_c4 = Slide;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routing);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Routing\");\n$RefreshReg$(_c2, \"SlideShow\");\n$RefreshReg$(_c3, \"Slider\");\n$RefreshReg$(_c4, \"Slide\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY2xpZW50L2NvbXBvbmVudHMvSG9tZS9jb21wb25lbnRzL1JvdXRpbmcuanN4PzI1ZWEiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWNvbiIsIlJvdXRpbmciLCJ1c2VTdGF0ZSIsImlkeCIsInNldElkeCIsImRlbGF5IiwidGltZW91dFJlZiIsInVzZVJlZiIsInJlc2V0VGltZW91dCIsImN1cnJlbnQiLCJjbGVhclRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwicHJldkluZGV4IiwibGVuZ3RoIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJTbGlkZVNob3ciLCJzdHlsZWQiLCJkaXYiLCJTbGlkZXIiLCJTbGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDWDtBQUFDQyxNQUFJLEVBQUM7QUFBTixDQURXLEVBQ0c7QUFBQ0EsTUFBSSxFQUFFO0FBQVAsQ0FESCxFQUNrQjtBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURsQixFQUNxQztBQUFDQSxNQUFJLEVBQUU7QUFBUCxDQURyQyxDQUFmLEMsQ0FHQTs7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsQ0FBRCxDQURaO0FBQUEsTUFDWEMsR0FEVztBQUFBLE1BQ05DLE1BRE07O0FBRWxCLE1BQU1DLEtBQUssR0FBR0YsR0FBRyxLQUFLLENBQVIsSUFBYUEsR0FBRyxLQUFLLENBQXJCLEdBQXlCLElBQXpCLEdBQWdDLElBQTlDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBekI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QixRQUFHRixVQUFVLENBQUNHLE9BQWQsRUFBc0I7QUFDbEJDLGtCQUFZLENBQUNKLFVBQVUsQ0FBQ0csT0FBWixDQUFaO0FBQ0g7QUFDSixHQUpEOztBQU1BRSx5REFBUyxDQUFDLFlBQU07QUFDWkgsZ0JBQVk7QUFDWkYsY0FBVSxDQUFDRyxPQUFYLEdBQXFCRyxVQUFVLENBQzNCO0FBQUEsYUFBTVIsTUFBTSxDQUFDLFVBQUNTLFNBQUQ7QUFBQSxlQUNUQSxTQUFTLEtBQUtkLE1BQU0sQ0FBQ2UsTUFBUCxHQUFnQixDQUE5QixHQUFrQyxDQUFsQyxHQUFzQ0QsU0FBUyxHQUFHLENBRHpDO0FBQUEsT0FBRCxDQUFaO0FBQUEsS0FEMkIsRUFJM0I7QUFDSlIsU0FMK0IsQ0FBL0I7QUFPQSxXQUFPLFlBQU07QUFDVEcsa0JBQVk7QUFDZixLQUZEO0FBR0gsR0FaUSxFQVlOLENBQUNMLEdBQUQsQ0FaTSxDQUFUO0FBZUEsU0FDSSxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLDZCQUFUO0FBQXVDLE9BQUcsRUFBQyxXQUEzQztBQUF1RCxTQUFLLEVBQUU7QUFBQ1ksYUFBTyxFQUFFO0FBQVYsS0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxNQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUNDLGVBQVMsdUNBQWlDYixHQUFELEdBQU1KLE1BQU0sQ0FBQ2UsTUFBYixHQUFvQixDQUFDLEdBQXJELFNBQVY7QUFBMEVHLGdCQUFVLEVBQUVkLEdBQUcsR0FBRSxDQUFMLEdBQVMsY0FBVCxHQUEwQjtBQUFoSCxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUUosTUFBTSxDQUFDbUIsR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1AsTUFBQyxLQUFEO0FBQU8sU0FBRyxFQUFFQSxLQUFaO0FBQW1CLFdBQUssRUFBRTtBQUFDTCxlQUFPLFlBQUlLLEtBQUssS0FBTWpCLEdBQUcsR0FBQyxDQUFmLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTlCO0FBQVIsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssU0FBRyxnQ0FBeUJnQixJQUFJLENBQUNuQixJQUE5QixTQUFSO0FBQWtELFNBQUcsb0JBQWFtQixJQUFJLENBQUNuQixJQUFsQixDQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FETztBQUFBLEdBQVgsQ0FGUixDQUZKLENBREo7QUFjSCxDQXhDRDs7R0FBTUMsTzs7S0FBQUEsTztBQTBDTixJQUFNb0IsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO01BQU1GLFM7QUFTTixJQUFNRyxNQUFNLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQVo7TUFBTUMsTTtBQVNOLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBWDtNQUFNRSxLO0FBbUJTeEIsc0VBQWYiLCJmaWxlIjoiLi9jbGllbnQvY29tcG9uZW50cy9Ib21lL2NvbXBvbmVudHMvUm91dGluZy5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gICAge2ljb246J2V0aCd9LCB7aWNvbjogJ2JzYyd9LCB7aWNvbjogJ3BvbHlnb24nfSwge2ljb246ICdhdmEnfVxuXVxuLy8gY29uc3QgZGVsYXkgPSAyNTAwO1xuY29uc3QgUm91dGluZyA9ICgpID0+IHtcbiAgICBjb25zdCBbaWR4LCBzZXRJZHhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgZGVsYXkgPSBpZHggPT09IDAgfHwgaWR4ID09PSA1ID8gMjUwMCA6IDUwMDA7XG4gICAgY29uc3QgdGltZW91dFJlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IHJlc2V0VGltZW91dCA9ICgpID0+IHtcbiAgICAgICAgaWYodGltZW91dFJlZi5jdXJyZW50KXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0UmVmLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVzZXRUaW1lb3V0KCk7XG4gICAgICAgIHRpbWVvdXRSZWYuY3VycmVudCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiBzZXRJZHgoKHByZXZJbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgcHJldkluZGV4ID09PSBpbWFnZXMubGVuZ3RoICsgMSA/IDAgOiBwcmV2SW5kZXggKyAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgLy8gKCkgPT4gc2V0SWR4KGlkeCsxKSxcbiAgICAgICAgZGVsYXkpO1xuXG4gICAgICAgIHJldHVybigoKSA9PiB7XG4gICAgICAgICAgICByZXNldFRpbWVvdXQoKTtcbiAgICAgICAgfSlcbiAgICB9LCBbaWR4XSk7XG5cblxuICAgIHJldHVybihcbiAgICAgICAgPFNsaWRlU2hvdz5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vaW1hZ2VzL2hvbWUtcGFnZS9ldGgucG5nXCIgYWx0PVwibG9nby1pY29uXCIgc3R5bGU9e3tvcGFjaXR5OiAwfX0gLz5cbiAgICAgICAgICAgIDxTbGlkZXIgc3R5bGU9e3t0cmFuc2Zvcm06IGB0cmFuc2xhdGVaKC0xODBweCkgcm90YXRlWSgkeyhpZHgpL2ltYWdlcy5sZW5ndGgqLTM2MH1kZWcpYCwgdHJhbnNpdGlvbjogaWR4ID40ID8gJ3RyYW5zZm9ybSAwcycgOiAndHJhbnNmb3JtIDJzJ319PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZSBrZXk9e2luZGV4fSBzdHlsZT17e29wYWNpdHk6YCR7aW5kZXggPT09IChpZHglNCkgPyBcIjFcIiA6IFwiMFwifWB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YC4uL2ltYWdlcy9ob21lLXBhZ2UvJHtpdGVtLmljb259LnBuZ2B9IGFsdD17YHJvdXRpbmctJHtpdGVtLmljb259YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGU+XG4gICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvU2xpZGVTaG93PlxuICAgIClcbn1cblxuY29uc3QgU2xpZGVTaG93ID0gc3R5bGVkLmRpdmBcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjQ0NDOyAqL1xuICAgIG1hcmdpbjogNDBweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDY1MHB4O1xuICAgIG1hcmdpbjogNDBweCBhdXRvO1xuICAgIC8qIHBlcnNwZWN0aXZlOiAxMDAwcHg7ICovXG5gXG5jb25zdCBTbGlkZXIgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTgwcHgpO1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDJzOyAqL1xuYFxuY29uc3QgU2xpZGUgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbGVmdDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgYmxhY2s7ICovXG4gICAgLyogbGluZS1oZWlnaHQ6IDExNnB4OyAqL1xuICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IG9wYWNpdHkgMXM7XG4gICAgJjpudGgtY2hpbGQoMSkgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoICAgMGRlZykgdHJhbnNsYXRlWigzMDVweCk7IH1cbiAgICAmOm50aC1jaGlsZCgyKSB7IHRyYW5zZm9ybTogcm90YXRlWSggIDkwZGVnKSB0cmFuc2xhdGVaKDMwNXB4KTsgfVxuICAgICY6bnRoLWNoaWxkKDMpIHsgdHJhbnNmb3JtOiByb3RhdGVZKCAxODBkZWcpIHRyYW5zbGF0ZVooMzA1cHgpOyB9XG4gICAgJjpudGgtY2hpbGQoNCkgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoIDI3MGRlZykgdHJhbnNsYXRlWigzMDVweCk7IH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgUm91dGluZzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/components/Home/components/Routing.jsx\n");

/***/ })

})