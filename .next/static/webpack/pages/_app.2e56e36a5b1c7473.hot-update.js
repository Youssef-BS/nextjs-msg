"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; }\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\nconst initialState = {\n    userInfo: undefined,\n    newUser: false\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_0__.reducerCases.SET_NEW_USER:\n            return {};\n        default:\n            return state;\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBRXBDLE1BQU1DLGVBQWU7SUFDeEJDLFVBQVdDO0lBQ1hDLFNBQVUsS0FBSztBQUNuQixFQUFDO0FBRUQsTUFBTUMsVUFBVSxDQUFDQyxPQUFRQyxTQUFTO0lBQzlCLE9BQU9BLE9BQU9DLElBQUk7UUFDZCxLQUFLUixrRUFBMEI7WUFDL0IsT0FBTztnQkFDSCxHQUFHTSxLQUFLO2dCQUNSSixVQUFXSyxPQUFPTCxRQUFRO1lBQzlCO1FBQ0EsS0FBS0YsaUVBQXlCO1lBQzlCLE9BQU8sQ0FFUDtRQUVBO1lBQ0EsT0FBT007SUFDWDtBQUNKO0FBRUEsK0RBQWVELE9BQU9BLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU3RhdGVSZWR1Y2Vycy5qcz8wMDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZHVjZXJDYXNlcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHVzZXJJbmZvIDogdW5kZWZpbmVkICxcclxuICAgIG5ld1VzZXIgOiBmYWxzZSAsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgLCBhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2goYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfVVNFUl9JTkZPIDogXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHVzZXJJbmZvIDogYWN0aW9uLnVzZXJJbmZvLFxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIHJlZHVjZXJDYXNlcy5TRVRfTkVXX1VTRVIgOiBcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWZhdWx0IDogXHJcbiAgICAgICAgcmV0dXJuIHN0YXRlIDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciA7ICJdLCJuYW1lcyI6WyJyZWR1Y2VyQ2FzZXMiLCJpbml0aWFsU3RhdGUiLCJ1c2VySW5mbyIsInVuZGVmaW5lZCIsIm5ld1VzZXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0VUX1VTRVJfSU5GTyIsIlNFVF9ORVdfVVNFUiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});