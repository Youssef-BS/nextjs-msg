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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , ContextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleClick = (e, callback)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-[100] shadow-xl\",\n        ref: contextMenuRef,\n        style: {\n            top: cordinates.y,\n            left: cordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: (e)=>handleClick(e, callback),\n                    className: \"px-5 py-5 cursor-pointer hover:bg-background-default-hover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, this)\n                }, name, false, {\n                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 14,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n_s(ContextMenu, \"ks5NuEEc0bEvX1Z+ZMr8jzB7hJs=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUM7QUFFbkMsU0FBU0UsWUFBWSxLQUFxRCxFQUFFO1FBQXZELEVBQUNDLFFBQU8sRUFBR0MsV0FBVSxFQUFHRixZQUFXLEVBQUdHLGVBQWMsRUFBQyxHQUFyRDs7SUFDbkIsTUFBTUMsaUJBQWlCTCw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ2xDLE1BQU1NLGNBQWMsQ0FBQ0MsR0FBRUMsV0FBVyxDQUFDO0lBQ25DLHFCQUFPLDhEQUFDQztRQUNSQyxXQUFZO1FBQ1pDLEtBQUtOO1FBQ0xPLE9BQU87WUFDTEMsS0FBTVYsV0FBV1csQ0FBQztZQUNsQkMsTUFBT1osV0FBV2EsQ0FBQztRQUNyQjtrQkFFRiw0RUFBQ0M7c0JBRUdmLFFBQVFnQixHQUFHLENBQUMsdUJBQ1o7b0JBRGEsRUFBQ0MsS0FBSSxFQUFFWCxTQUFRLEVBQUM7dUJBQzdCLDhEQUFDWTtvQkFBY0MsU0FBUyxDQUFDZCxJQUFJRCxZQUFZQyxHQUFJQztvQkFDN0NFLFdBQVU7OEJBRVIsNEVBQUNZO3dCQUFLWixXQUFVO2tDQUFjUzs7Ozs7O21CQUh2QkE7Ozs7O1lBSUw7Ozs7Ozs7Ozs7O0FBS1I7R0F2QlNsQjtLQUFBQTtBQXlCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4PzYzMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBDb250ZXh0TWVudSh7b3B0aW9ucyAsIGNvcmRpbmF0ZXMgLCBDb250ZXh0TWVudSAsIHNldENvbnRleHRNZW51fSkge1xuICBjb25zdCBjb250ZXh0TWVudVJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSxjYWxsYmFjayk9Pnt9XG4gIHJldHVybiA8ZGl2IFxuICBjbGFzc05hbWU9e2BiZy1kcm9wZG93bi1iYWNrZ3JvdW5kIGZpeGVkIHB5LTIgei1bMTAwXSBzaGFkb3cteGxgfVxuICByZWY9e2NvbnRleHRNZW51UmVmfVxuICBzdHlsZT17e1xuICAgIHRvcCA6IGNvcmRpbmF0ZXMueSxcbiAgICBsZWZ0IDogY29yZGluYXRlcy54LCBcbiAgfX1cbiAgPlxuPHVsPlxuICB7XG4gICAgb3B0aW9ucy5tYXAoKHtuYW1lLCBjYWxsYmFja30pPT4oXG4gICAgPGxpIGtleT17bmFtZX0gb25DbGljaz17KGUpPT5oYW5kbGVDbGljayhlICwgY2FsbGJhY2spfVxuICAgIGNsYXNzTmFtZT1cInB4LTUgcHktNSBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1iYWNrZ3JvdW5kLWRlZmF1bHQtaG92ZXJcIlxuICAgID5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57bmFtZX08L3NwYW4+XG4gICAgPC9saT5cbiAgICApKVxuICB9XG48L3VsPlxuICA8L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiQ29udGV4dE1lbnUiLCJvcHRpb25zIiwiY29yZGluYXRlcyIsInNldENvbnRleHRNZW51IiwiY29udGV4dE1lbnVSZWYiLCJoYW5kbGVDbGljayIsImUiLCJjYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInN0eWxlIiwidG9wIiwieSIsImxlZnQiLCJ4IiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});