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

/***/ "./src/components/common/Avatar.jsx":
/*!******************************************!*\
  !*** ./src/components/common/Avatar.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _ContextMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextMenu */ \"./src/components/common/ContextMenu.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Avatar(param) {\n    let { type , image , setImage  } = param;\n    _s();\n    const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isContextMenuVisible, setIsContextMenuVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [contextMenuCordinates, setContextMenuCordinates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const showContextMenu = (e)=>{\n        e.preventDefault();\n        setIsContextMenuVisible(true);\n        setContextMenuCordinates({\n            x: e.pageX,\n            y: e.pageY\n        });\n    };\n    const contextMenuOptions = [\n        {\n            name: \"Take Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Choose From Library\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Upload Photo\",\n            callback: ()=>{}\n        },\n        {\n            name: \"Remove Photo\",\n            callback: ()=>{}\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center\",\n                children: [\n                    type === \"lg\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative h-14 w-14\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: image,\n                            alt: \"avatar\",\n                            className: \"rounded-full\",\n                            fill: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 3\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 3\n                    }, this),\n                    type === \"xl\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative cursor-pointer z-0\",\n                        onMouseEnter: ()=>setHover(true),\n                        onMouseLeave: ()=>setHover(false),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 \\n      \".concat(hover ? \"visible\" : \"hidden\", \"\\n      \"),\n                                onClick: (e)=>showContextMenu(e),\n                                id: \"context-opener\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaCamera, {\n                                        className: \"text-2xl\",\n                                        id: \"context-opener\",\n                                        onClick: (e)=>showContextMenu(e)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        onClick: (e)=>showContextMenu(e),\n                                        id: \"context-opener\",\n                                        children: [\n                                            \"Change \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 17\n                                            }, this),\n                                            \" Profile \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 32\n                                            }, this),\n                                            \" Photo\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center justify-center h-60 w-60 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: image,\n                                    alt: \"avatar\",\n                                    className: \"rounded-full\",\n                                    fill: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 3\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 3\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, this),\n            isContextMenuVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ContextMenu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                options: contextMenuOptions,\n                condinates: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\Avatar.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Avatar, \"cQiy8MDdbmqRJK16b1LoBOktIs0=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQXZhdGFyLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFxQztBQUNQO0FBQ1M7QUFDQztBQUV4QyxTQUFTSyxPQUFPLEtBQXlCLEVBQUU7UUFBM0IsRUFBQ0MsS0FBSSxFQUFHQyxNQUFLLEVBQUdDLFNBQVEsRUFBQyxHQUF6Qjs7SUFDZCxNQUFLLENBQUNDLE9BQVFDLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUN4QyxNQUFNLENBQUNVLHNCQUF1QkMsd0JBQXdCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDdkUsTUFBTSxDQUFDWSx1QkFBdUJDLHlCQUF5QixHQUFHYiwrQ0FBUUEsQ0FBQztRQUNqRWMsR0FBRTtRQUNGQyxHQUFFO0lBQ0o7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0MsSUFBSTtRQUMzQkEsRUFBRUMsY0FBYztRQUNoQlAsd0JBQXdCLElBQUk7UUFDNUJFLHlCQUF5QjtZQUFDQyxHQUFFRyxFQUFFRSxLQUFLO1lBQUNKLEdBQUVFLEVBQUVHLEtBQUs7UUFBQTtJQUMvQztJQUNGLE1BQU1DLHFCQUFxQjtRQUN6QjtZQUFDQyxNQUFPO1lBQWVDLFVBQVcsSUFBSSxDQUFDO1FBQUM7UUFDeEM7WUFBQ0QsTUFBTztZQUF3QkMsVUFBVyxJQUFJLENBQUM7UUFBQztRQUNqRDtZQUFDRCxNQUFPO1lBQWlCQyxVQUFXLElBQUksQ0FBQztRQUFDO1FBQzFDO1lBQUNELE1BQU87WUFBaUJDLFVBQVcsSUFBSSxDQUFDO1FBQUM7S0FDM0M7SUFDQyxxQkFBTzs7MEJBQ1AsOERBQUNDO2dCQUFJQyxXQUFVOztvQkFFZHBCLFNBQVMsc0JBQ1YsOERBQUNtQjt3QkFBSUMsV0FBVTtrQ0FDZiw0RUFBQ3hCLG1EQUFLQTs0QkFBQ3lCLEtBQUtwQjs0QkFBT3FCLEtBQUk7NEJBQVNGLFdBQVU7NEJBQWVHLElBQUk7Ozs7Ozs7Ozs7O29CQUk1RHZCLFNBQVMsc0JBQ1IsOERBQUNtQjt3QkFBSUMsV0FBVTt3QkFDZkksY0FBYyxJQUFJcEIsU0FBUyxJQUFJO3dCQUMvQnFCLGNBQWMsSUFBSXJCLFNBQVMsS0FBSzs7MENBRTlCLDhEQUFDZTtnQ0FBSUMsV0FBVywySkFDZSxPQUE3QmpCLFFBQVEsWUFBWSxRQUFRLEVBQUM7Z0NBRS9CdUIsU0FBU2QsQ0FBQUEsSUFBR0QsZ0JBQWdCQztnQ0FDNUJlLElBQUk7O2tEQUVGLDhEQUFDOUIsb0RBQVFBO3dDQUFDdUIsV0FBVTt3Q0FDcEJPLElBQUc7d0NBQ0hELFNBQVNkLENBQUFBLElBQUdELGdCQUFnQkM7Ozs7OztrREFHNUIsOERBQUNnQjt3Q0FBS0YsU0FBU2QsQ0FBQUEsSUFBR0QsZ0JBQWdCQzt3Q0FDbENlLElBQUc7OzRDQUNGOzBEQUFPLDhEQUFDRTs7Ozs7NENBQUs7MERBQVMsOERBQUNBOzs7Ozs0Q0FBSzs7Ozs7Ozs7Ozs7OzswQ0FFbkMsOERBQUNWO2dDQUFJQyxXQUFVOzBDQUNmLDRFQUFDeEIsbURBQUtBO29DQUFDeUIsS0FBS3BCO29DQUFPcUIsS0FBSTtvQ0FBU0YsV0FBVTtvQ0FBZUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPM0RsQixzQ0FDRSw4REFBQ1Asb0RBQVdBO2dCQUNaZ0MsU0FBU2Q7Z0JBQ1RlLFVBQVU7Ozs7Ozs7O0FBS2hCO0dBaEVTaEM7S0FBQUE7QUFrRVQsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0F2YXRhci5qc3g/MDE3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQge0ZhQ2FtZXJhfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxuaW1wb3J0IENvbnRleHRNZW51IGZyb20gXCIuL0NvbnRleHRNZW51XCI7XG5cbmZ1bmN0aW9uIEF2YXRhcih7dHlwZSAsIGltYWdlICwgc2V0SW1hZ2V9KSB7XG4gIGNvbnN0W2hvdmVyICwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNDb250ZXh0TWVudVZpc2libGUgLCBzZXRJc0NvbnRleHRNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb250ZXh0TWVudUNvcmRpbmF0ZXMsIHNldENvbnRleHRNZW51Q29yZGluYXRlc10gPSB1c2VTdGF0ZSh7XG4gICAgeDowLFxuICAgIHk6MCxcbiAgfSlcblxuICBjb25zdCBzaG93Q29udGV4dE1lbnUgPSAoZSk9PntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0SXNDb250ZXh0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgc2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzKHt4OmUucGFnZVgseTplLnBhZ2VZfSk7XG4gIH1cbmNvbnN0IGNvbnRleHRNZW51T3B0aW9ucyA9IFtcbiAge25hbWUgOiBcIlRha2UgUGhvdG9cIiAsIGNhbGxiYWNrIDogKCk9Pnt9fSxcbiAge25hbWUgOiBcIkNob29zZSBGcm9tIExpYnJhcnlcIiAsIGNhbGxiYWNrIDogKCk9Pnt9fSxcbiAge25hbWUgOiBcIlVwbG9hZCBQaG90b1wiICwgY2FsbGJhY2sgOiAoKT0+e319LFxuICB7bmFtZSA6IFwiUmVtb3ZlIFBob3RvXCIgLCBjYWxsYmFjayA6ICgpPT57fX0sXG5dXG4gIHJldHVybiA8PlxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gIFxuICB7dHlwZSA9PT0gXCJsZ1wiICYmIChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTE0IHctMTRcIj5cbiAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cImF2YXRhclwiIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiIGZpbGwvPlxuICA8L2Rpdj5cbiAgKX1cbiAgXG4gIHt0eXBlID09PSBcInhsXCIgJiYgKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgei0wXCJcbiAgICBvbk1vdXNlRW50ZXI9eygpPT5zZXRIb3Zlcih0cnVlKX1cbiAgICBvbk1vdXNlTGVhdmU9eygpPT5zZXRIb3ZlcihmYWxzZSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B6LTEwIGJnLXBob3RvcGlja2VyLW92ZXJsYXktYmFja2dyb3VuZCBoLTYwIHctNjAgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGZsZXggaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCB0ZXh0LWNlbnRlciBnYXAtMiBcbiAgICAgICR7aG92ZXIgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9XG4gICAgICBgfVxuICAgICAgb25DbGljaz17ZT0+c2hvd0NvbnRleHRNZW51KGUpfVxuICAgICAgaWQgPVwiY29udGV4dC1vcGVuZXJcIlxuICAgICAgPlxuICAgICAgICA8RmFDYW1lcmEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIiBcbiAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKVxuICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIG9uQ2xpY2s9e2U9PnNob3dDb250ZXh0TWVudShlKX1cbiAgICAgICAgaWQ9XCJjb250ZXh0LW9wZW5lclwiXG4gICAgICAgID5DaGFuZ2UgPGJyIC8+IFByb2ZpbGUgPGJyIC8+IFBob3RvPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC02MCB3LTYwIFwiPlxuICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PVwiYXZhdGFyXCIgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCIgZmlsbC8+XG4gIDwvZGl2PlxuICA8L2Rpdj5cbiAgKX1cbiAgXG4gIDwvZGl2PlxuICB7XG4gICAgaXNDb250ZXh0TWVudVZpc2libGUgJiYgXG4gICAgICA8Q29udGV4dE1lbnUgXG4gICAgICBvcHRpb25zPXtjb250ZXh0TWVudU9wdGlvbnN9XG4gICAgICBjb25kaW5hdGVzXG4gICAgICAvPlxuICAgIFxuICB9XG4gIDwvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXZhdGFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkZhQ2FtZXJhIiwiQ29udGV4dE1lbnUiLCJBdmF0YXIiLCJ0eXBlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImhvdmVyIiwic2V0SG92ZXIiLCJpc0NvbnRleHRNZW51VmlzaWJsZSIsInNldElzQ29udGV4dE1lbnVWaXNpYmxlIiwiY29udGV4dE1lbnVDb3JkaW5hdGVzIiwic2V0Q29udGV4dE1lbnVDb3JkaW5hdGVzIiwieCIsInkiLCJzaG93Q29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwYWdlWCIsInBhZ2VZIiwiY29udGV4dE1lbnVPcHRpb25zIiwibmFtZSIsImNhbGxiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiZmlsbCIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsIm9uQ2xpY2siLCJpZCIsInNwYW4iLCJiciIsIm9wdGlvbnMiLCJjb25kaW5hdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Avatar.jsx\n"));

/***/ })

});