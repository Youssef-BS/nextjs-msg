"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onboarding",{

/***/ "./src/components/common/ContextMenu.jsx":
/*!***********************************************!*\
  !*** ./src/components/common/ContextMenu.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , ContextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleOutsideClick = (event)=>{\n            if (event.target.id !== \"context-opener\") {}\n        };\n    }, []);\n    const handleClick = (e, callback)=>{\n        e.stopPropagation();\n        setContextMenu(false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-[100] shadow-xl\",\n        ref: contextMenuRef,\n        style: {\n            top: cordinates.y,\n            left: cordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: (e)=>handleClick(e, callback),\n                    className: \"px-5 py-5 cursor-pointer hover:bg-background-default-hover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    }, this)\n                }, name, false, {\n                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 29,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 21,\n        columnNumber: 10\n    }, this);\n}\n_s(ContextMenu, \"b9EuBvd+7o9sFh+8hxUUM+gDocw=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsU0FBU0csWUFBWSxLQUFxRCxFQUFFO1FBQXZELEVBQUNDLFFBQU8sRUFBR0MsV0FBVSxFQUFHRixZQUFXLEVBQUdHLGVBQWMsRUFBQyxHQUFyRDs7SUFDbkIsTUFBTUMsaUJBQWlCTCw2Q0FBTUEsQ0FBQyxJQUFJO0lBR2xDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ2QsTUFBTU8scUJBQXFCLENBQUNDLFFBQVM7WUFDbkMsSUFBR0EsTUFBTUMsTUFBTSxDQUFDQyxFQUFFLEtBQUssa0JBQWlCLENBRXhDLENBQUM7UUFDSDtJQUNBLEdBQUUsRUFBRTtJQUdKLE1BQU1DLGNBQWMsQ0FBQ0MsR0FBRUMsV0FBVztRQUNoQ0QsRUFBRUUsZUFBZTtRQUNqQlQsZUFBZSxLQUFLO1FBQ3BCUTtJQUNGO0lBQ0EscUJBQU8sOERBQUNFO1FBQ1JDLFdBQVk7UUFDWkMsS0FBS1g7UUFDTFksT0FBTztZQUNMQyxLQUFNZixXQUFXZ0IsQ0FBQztZQUNsQkMsTUFBT2pCLFdBQVdrQixDQUFDO1FBQ3JCO2tCQUVGLDRFQUFDQztzQkFFR3BCLFFBQVFxQixHQUFHLENBQUMsdUJBQ1o7b0JBRGEsRUFBQ0MsS0FBSSxFQUFFWixTQUFRLEVBQUM7dUJBQzdCLDhEQUFDYTtvQkFBY0MsU0FBUyxDQUFDZixJQUFJRCxZQUFZQyxHQUFJQztvQkFDN0NHLFdBQVU7OEJBRVIsNEVBQUNZO3dCQUFLWixXQUFVO2tDQUFjUzs7Ozs7O21CQUh2QkE7Ozs7O1lBSUw7Ozs7Ozs7Ozs7O0FBS1I7R0F0Q1N2QjtLQUFBQTtBQXdDVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4PzYzMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIENvbnRleHRNZW51KHtvcHRpb25zICwgY29yZGluYXRlcyAsIENvbnRleHRNZW51ICwgc2V0Q29udGV4dE1lbnV9KSB7XG4gIGNvbnN0IGNvbnRleHRNZW51UmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIFxuICB1c2VFZmZlY3QoKCk9PntcbiAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gKGV2ZW50KSA9PntcbiAgICBpZihldmVudC50YXJnZXQuaWQgIT09IFwiY29udGV4dC1vcGVuZXJcIil7XG4gICAgICBcbiAgICB9XG4gIH1cbiAgfSxbXSlcblxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsY2FsbGJhY2spPT57XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRDb250ZXh0TWVudShmYWxzZSk7XG4gICAgY2FsbGJhY2soKTtcbiAgfVxuICByZXR1cm4gPGRpdiBcbiAgY2xhc3NOYW1lPXtgYmctZHJvcGRvd24tYmFja2dyb3VuZCBmaXhlZCBweS0yIHotWzEwMF0gc2hhZG93LXhsYH1cbiAgcmVmPXtjb250ZXh0TWVudVJlZn1cbiAgc3R5bGU9e3tcbiAgICB0b3AgOiBjb3JkaW5hdGVzLnksXG4gICAgbGVmdCA6IGNvcmRpbmF0ZXMueCwgXG4gIH19XG4gID5cbjx1bD5cbiAge1xuICAgIG9wdGlvbnMubWFwKCh7bmFtZSwgY2FsbGJhY2t9KT0+KFxuICAgIDxsaSBrZXk9e25hbWV9IG9uQ2xpY2s9eyhlKT0+aGFuZGxlQ2xpY2soZSAsIGNhbGxiYWNrKX1cbiAgICBjbGFzc05hbWU9XCJweC01IHB5LTUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6YmctYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyXCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e25hbWV9PC9zcGFuPlxuICAgIDwvbGk+XG4gICAgKSlcbiAgfVxuPC91bD5cbiAgPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvbnRleHRNZW51Iiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudSIsImNvbnRleHRNZW51UmVmIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImhhbmRsZUNsaWNrIiwiZSIsImNhbGxiYWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwic3R5bGUiLCJ0b3AiLCJ5IiwibGVmdCIsIngiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});