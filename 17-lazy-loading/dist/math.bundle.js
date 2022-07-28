"use strict";
(self["webpackChunkgetting_started"] = self["webpackChunkgetting_started"] || []).push([["math"],{

/***/ "./17-lazy-loading/src/math.js":
/*!*************************************!*\
  !*** ./17-lazy-loading/src/math.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cube": () => (/* binding */ cube),
/* harmony export */   "square": () => (/* binding */ square)
/* harmony export */ });
function square ( x ) {
  return x * x
}

async function cube ( x ) {
  return new Promise( ( res, rej ) => {
    setTimeout( () => { res( x * x * x ) }, 5000 )
  } )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0aC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUMsSUFBSTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2V0dGluZy1zdGFydGVkLy4vMTctbGF6eS1sb2FkaW5nL3NyYy9tYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzcXVhcmUgKCB4ICkge1xuICByZXR1cm4geCAqIHhcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGN1YmUgKCB4ICkge1xuICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzLCByZWogKSA9PiB7XG4gICAgc2V0VGltZW91dCggKCkgPT4geyByZXMoIHggKiB4ICogeCApIH0sIDUwMDAgKVxuICB9IClcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==