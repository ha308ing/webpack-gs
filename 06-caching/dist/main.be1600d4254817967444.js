"use strict";
(self["webpackChunkgetting_started"] = self["webpackChunkgetting_started"] || []).push([["main"],{

/***/ 532:
/*!*********************************!*\
  !*** ./06-caching/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log */ 773);



function component () {
  const element = document.createElement( "div" )
  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join( [ "Hello", "webpack" ], " " )
  element.onclick = _log__WEBPACK_IMPORTED_MODULE_1__.log.bind( null, "log from index" )
  return element
}

document.body.append( component() )


/***/ }),

/***/ 773:
/*!*******************************!*\
  !*** ./06-caching/src/log.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 486);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function log ( text ) {
  console.log( text || lodash__WEBPACK_IMPORTED_MODULE_0___default().join( [ "i", "was", "called", "from", "log" ], " " ) )
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(532)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZTE2MDBkNDI1NDgxNzk2NzQ0NC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNCO0FBQ0s7O0FBRTNCO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQU07QUFDNUIsb0JBQW9CLDBDQUFRO0FBQzVCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVnNCOztBQUVmO0FBQ1AsdUJBQXVCLGtEQUFNO0FBQzdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLy4vMDYtY2FjaGluZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLy4vMDYtY2FjaGluZy9zcmMvbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIlxuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vbG9nXCJcblxuZnVuY3Rpb24gY29tcG9uZW50ICgpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKVxuICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbiggWyBcIkhlbGxvXCIsIFwid2VicGFja1wiIF0sIFwiIFwiIClcbiAgZWxlbWVudC5vbmNsaWNrID0gbG9nLmJpbmQoIG51bGwsIFwibG9nIGZyb20gaW5kZXhcIiApXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKCBjb21wb25lbnQoKSApXG4iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZyAoIHRleHQgKSB7XG4gIGNvbnNvbGUubG9nKCB0ZXh0IHx8IF8uam9pbiggWyBcImlcIiwgXCJ3YXNcIiwgXCJjYWxsZWRcIiwgXCJmcm9tXCIsIFwibG9nXCIgXSwgXCIgXCIgKSApXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=