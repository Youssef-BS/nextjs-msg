"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/pages/login.jsx":
/*!*****************************!*\
  !*** ./src/pages/login.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fc */ \"./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/FirebaseConfig */ \"./src/utils/FirebaseConfig.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n\n\n\n\n\n\n\n\nfunction Login() {\n    const handleLogin = async ()=>{\n        const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n        const { user: { displayName: name , email , photoUrl: profileImage  }  } = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_FirebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firebaseAuth, provider);\n        try {\n            if (email) {\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].post(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_5__.CHECK_USER_ROUTE);\n            }\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-2 text-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/whatsapp.gif\",\n                        alt: \"whatsapp\",\n                        width: 300,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-7xl\",\n                        children: \"Whatsapp\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"flex items-center gap-7 bg-search-input-container-background p-5 rounded-lg\",\n                onClick: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcGoogle, {\n                        className: \"text-4xl text-white\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white text-2xl\",\n                        children: \"Login With Google\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\pages\\\\login.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDSztBQUNXO0FBQ3lCO0FBQ2I7QUFDNUI7QUFDMkI7QUFFckQsU0FBU1EsUUFBUTtJQUNmLE1BQU1DLGNBQWMsVUFBVztRQUM3QixNQUFNQyxXQUFXLElBQUlQLDZEQUFrQkE7UUFDdkMsTUFBTSxFQUNKUSxNQUFPLEVBQ1BDLGFBQWNDLEtBQUksRUFBR0MsTUFBSyxFQUFHQyxVQUFXQyxhQUFZLEVBQUUsR0FDdkQsR0FBRyxNQUFNWiw4REFBZUEsQ0FBQ0MsK0RBQVlBLEVBQUdLO1FBQ3pDLElBQUk7WUFDSixJQUFHSSxPQUFNO2dCQUNQLE1BQU0sRUFBQ0csS0FBSSxFQUFDLEdBQUcsTUFBTVgsa0RBQVUsQ0FBQ0MsOERBQWdCQTtZQUNsRCxDQUFDO1FBQ0QsRUFBQyxPQUFNWSxLQUFJO1lBQ1ZDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDYjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN0QixtREFBS0E7d0JBQUN1QixLQUFJO3dCQUFnQkMsS0FBSTt3QkFBV0MsT0FBTzt3QkFBS0MsUUFBUTs7Ozs7O2tDQUM5RCw4REFBQ0M7d0JBQUtMLFdBQVU7a0NBQVc7Ozs7Ozs7Ozs7OzswQkFFN0IsOERBQUNNO2dCQUFPTixXQUFVO2dCQUE4RU8sU0FBU3JCOztrQ0FDdkcsOERBQUNQLG9EQUFRQTt3QkFBQ3FCLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNLO3dCQUFLTCxXQUFVO2tDQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlDO0tBNUJTZjtBQThCVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvbG9naW4uanN4P2M5M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGY0dvb2dsZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiO1xuaW1wb3J0IHtHb29nbGVBdXRoUHJvdmlkZXIgLCBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyBmaXJlYmFzZUF1dGggfSBmcm9tIFwiQC91dGlscy9GaXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQ0hFQ0tfVVNFUl9ST1VURSB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoKT0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyIDoge1xuICAgICAgZGlzcGxheU5hbWUgOiBuYW1lICwgZW1haWwgLCBwaG90b1VybCA6IHByb2ZpbGVJbWFnZSB9LFxuICAgIH0gPSBhd2FpdCBzaWduSW5XaXRoUG9wdXAoZmlyZWJhc2VBdXRoICwgcHJvdmlkZXIpO1xuICAgIHRyeSB7XG4gICAgaWYoZW1haWwpe1xuICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChDSEVDS19VU0VSX1JPVVRFICApXG4gICAgfVxuICAgIH1jYXRjaChlcnIpe1xuICAgICBjb25zb2xlLmxvZyhlcnIpIFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCBoLXNjcmVlbiB3LXNjcmVlbiBmbGV4LWNvbCBnYXAtNlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMiB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxJbWFnZSBzcmM9XCIvd2hhdHNhcHAuZ2lmXCIgYWx0PVwid2hhdHNhcHBcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC03eGxcIj5XaGF0c2FwcDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtNyBiZy1zZWFyY2gtaW5wdXQtY29udGFpbmVyLWJhY2tncm91bmQgcC01IHJvdW5kZWQtbGdcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+XG4gICAgICAgIDxGY0dvb2dsZSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCB0ZXh0LXdoaXRlXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTJ4bFwiPkxvZ2luIFdpdGggR29vZ2xlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJGY0dvb2dsZSIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsImZpcmViYXNlQXV0aCIsImF4aW9zIiwiQ0hFQ0tfVVNFUl9ST1VURSIsIkxvZ2luIiwiaGFuZGxlTG9naW4iLCJwcm92aWRlciIsInVzZXIiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJlbWFpbCIsInBob3RvVXJsIiwicHJvZmlsZUltYWdlIiwiZGF0YSIsInBvc3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/login.jsx\n"));

/***/ }),

/***/ "./src/utils/ApiRoutes.js":
/*!********************************!*\
  !*** ./src/utils/ApiRoutes.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHECK_USER_ROUTE\": function() { return /* binding */ CHECK_USER_ROUTE; },\n/* harmony export */   \"HOST\": function() { return /* binding */ HOST; }\n/* harmony export */ });\nconst HOST = \"http://localhost:3005\";\nconst AUTH_ROUTE = \"\".concat(HOST, \"/api/auth\");\nconst CHECK_USER_ROUTE = \"\".concat(AUTH_ROUTE, \"/check-user\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvQXBpUm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsT0FBTyx3QkFBd0I7QUFFNUMsTUFBTUMsYUFBYSxHQUFRLE9BQUxELE1BQUs7QUFFcEIsTUFBTUUsbUJBQW1CLEdBQWMsT0FBWEQsWUFBVyxlQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9BcGlSb3V0ZXMuanM/Njg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSE9TVCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDA1XCI7XHJcblxyXG5jb25zdCBBVVRIX1JPVVRFID0gYCR7SE9TVH0vYXBpL2F1dGhgO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIRUNLX1VTRVJfUk9VVEUgPSBgJHtBVVRIX1JPVVRFfS9jaGVjay11c2VyYCA7ICJdLCJuYW1lcyI6WyJIT1NUIiwiQVVUSF9ST1VURSIsIkNIRUNLX1VTRVJfUk9VVEUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/ApiRoutes.js\n"));

/***/ })

});