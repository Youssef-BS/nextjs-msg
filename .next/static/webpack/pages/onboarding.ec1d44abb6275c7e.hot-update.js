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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction ContextMenu(param) {\n    let { options , cordinates , ContextMenu , setContextMenu  } = param;\n    _s();\n    const contextMenuRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleOutsideClick = (event)=>{\n            if (event.target.id !== \"context-opener\") {\n                if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {\n                    setContextMenu(false);\n                }\n            }\n        };\n        document.addEventListener(\"click\", handleOutsideClick);\n        return ()=>{\n            document.removeEventListener(\"click\", handleOutsideClick);\n        };\n    }, []);\n    const handleClick = (e, callback)=>{\n        e.stopPropagation();\n        setContextMenu(false);\n        callback();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-dropdown-background fixed py-2 z-[100] shadow-xl\",\n        ref: contextMenuRef,\n        style: {\n            top: cordinates.y,\n            left: cordinates.x\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: options.map((param)=>/*#__PURE__*/ {\n                let { name , callback  } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    onClick: (e)=>handleClick(e, callback),\n                    className: \"px-5 py-5 cursor-pointer hover:bg-background-default-hover\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this)\n                }, name, false, {\n                    fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 5\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n            lineNumber: 35,\n            columnNumber: 1\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\sam$\\\\OneDrive\\\\Bureau\\\\messagerie\\\\client\\\\src\\\\components\\\\common\\\\ContextMenu.jsx\",\n        lineNumber: 28,\n        columnNumber: 11\n    }, this);\n}\n_s(ContextMenu, \"b9EuBvd+7o9sFh+8hxUUM+gDocw=\");\n_c = ContextMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextMenu);\nvar _c;\n$RefreshReg$(_c, \"ContextMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vQ29udGV4dE1lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFFOUMsU0FBU0csWUFBWSxLQUFxRCxFQUFFO1FBQXZELEVBQUNDLFFBQU8sRUFBR0MsV0FBVSxFQUFHRixZQUFXLEVBQUdHLGVBQWMsRUFBQyxHQUFyRDs7SUFDbkIsTUFBTUMsaUJBQWlCTCw2Q0FBTUEsQ0FBQyxJQUFJO0lBR2xDRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ2QsTUFBTU8scUJBQXFCLENBQUNDLFFBQVM7WUFDbkMsSUFBR0EsTUFBTUMsTUFBTSxDQUFDQyxFQUFFLEtBQUssa0JBQWlCO2dCQUN0QyxJQUFHSixlQUFlSyxPQUFPLElBQUksQ0FBQ0wsZUFBZUssT0FBTyxDQUFDQyxRQUFRLENBQUNKLE1BQU1DLE1BQU0sR0FBRTtvQkFDM0VKLGVBQWUsS0FBSztnQkFDckIsQ0FBQztZQUNMLENBQUM7UUFDSDtRQUNBUSxTQUFTQyxnQkFBZ0IsQ0FBQyxTQUFVUDtRQUNwQyxPQUFPLElBQUk7WUFDVE0sU0FBU0UsbUJBQW1CLENBQUMsU0FBVVI7UUFDekM7SUFDQSxHQUNBLEVBQUU7SUFHQSxNQUFNUyxjQUFjLENBQUNDLEdBQUVDLFdBQVc7UUFDaENELEVBQUVFLGVBQWU7UUFDakJkLGVBQWUsS0FBSztRQUNwQmE7SUFDRjtJQUNBLHFCQUFRLDhEQUFDRTtRQUFJQyxXQUFZO1FBQ3pCQyxLQUFLaEI7UUFDTGlCLE9BQU87WUFDTEMsS0FBTXBCLFdBQVdxQixDQUFDO1lBQ2xCQyxNQUFPdEIsV0FBV3VCLENBQUM7UUFDckI7a0JBRUYsNEVBQUNDO3NCQUVHekIsUUFBUTBCLEdBQUcsQ0FBQyx1QkFDWjtvQkFEYSxFQUFDQyxLQUFJLEVBQUVaLFNBQVEsRUFBQzt1QkFDN0IsOERBQUNhO29CQUFjQyxTQUFTLENBQUNmLElBQUlELFlBQVlDLEdBQUlDO29CQUM3Q0csV0FBVTs4QkFFUiw0RUFBQ1k7d0JBQUtaLFdBQVU7a0NBQWNTOzs7Ozs7bUJBSHZCQTs7Ozs7WUFJTDs7Ozs7Ozs7Ozs7QUFNTjtHQTdDTzVCO0tBQUFBO0FBK0NULCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9Db250ZXh0TWVudS5qc3g/NjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZUVmZmVjdCwgdXNlUmVmfSBmcm9tIFwicmVhY3RcIjtcblxuZnVuY3Rpb24gQ29udGV4dE1lbnUoe29wdGlvbnMgLCBjb3JkaW5hdGVzICwgQ29udGV4dE1lbnUgLCBzZXRDb250ZXh0TWVudX0pIHtcbiAgY29uc3QgY29udGV4dE1lbnVSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgXG4gIHVzZUVmZmVjdCgoKT0+e1xuICBjb25zdCBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQpID0+e1xuICAgIGlmKGV2ZW50LnRhcmdldC5pZCAhPT0gXCJjb250ZXh0LW9wZW5lclwiKXtcbiAgICAgIGlmKGNvbnRleHRNZW51UmVmLmN1cnJlbnQgJiYgIWNvbnRleHRNZW51UmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSl7XG4gICAgICAgc2V0Q29udGV4dE1lbnUoZmFsc2UpO1xuICAgICAgfVxuICB9XG59O1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIgLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xucmV0dXJuICgpPT57XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgaGFuZGxlT3V0c2lkZUNsaWNrKVxufTtcbn0sXG5bXSlcblxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsY2FsbGJhY2spPT57XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzZXRDb250ZXh0TWVudShmYWxzZSk7XG4gICAgY2FsbGJhY2soKTtcbiAgfTtcbiAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT17YGJnLWRyb3Bkb3duLWJhY2tncm91bmQgZml4ZWQgcHktMiB6LVsxMDBdIHNoYWRvdy14bGB9XG4gIHJlZj17Y29udGV4dE1lbnVSZWZ9XG4gIHN0eWxlPXt7XG4gICAgdG9wIDogY29yZGluYXRlcy55LFxuICAgIGxlZnQgOiBjb3JkaW5hdGVzLngsIFxuICB9fVxuICA+XG48dWw+XG4gIHtcbiAgICBvcHRpb25zLm1hcCgoe25hbWUsIGNhbGxiYWNrfSk9PihcbiAgICA8bGkga2V5PXtuYW1lfSBvbkNsaWNrPXsoZSk9PmhhbmRsZUNsaWNrKGUgLCBjYWxsYmFjayl9XG4gICAgY2xhc3NOYW1lPVwicHgtNSBweS01IGN1cnNvci1wb2ludGVyIGhvdmVyOmJnLWJhY2tncm91bmQtZGVmYXVsdC1ob3ZlclwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntuYW1lfTwvc3Bhbj5cbiAgICA8L2xpPlxuICAgICkpXG4gIH1cbjwvdWw+XG4gIDwvZGl2PlxuICBcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0TWVudTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkNvbnRleHRNZW51Iiwib3B0aW9ucyIsImNvcmRpbmF0ZXMiLCJzZXRDb250ZXh0TWVudSIsImNvbnRleHRNZW51UmVmIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImN1cnJlbnQiLCJjb250YWlucyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImUiLCJjYWxsYmFjayIsInN0b3BQcm9wYWdhdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsInN0eWxlIiwidG9wIiwieSIsImxlZnQiLCJ4IiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJvbkNsaWNrIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/common/ContextMenu.jsx\n"));

/***/ })

});