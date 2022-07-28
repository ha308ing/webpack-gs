"use strict";
(self["webpackChunkgetting_started"] = self["webpackChunkgetting_started"] || []).push([["login"],{

/***/ "./17-lazy-loading/src/login.js":
/*!**************************************!*\
  !*** ./17-lazy-loading/src/login.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ login)
/* harmony export */ });
async function login (  ) {
  return new Promise( ( res, rej ) => {
    const message = document.createElement( "div" )
    message.innerHTML = "login"
    setTimeout( () => {
      // if ( true ) rej( "Error at login" )
      res( message )
    }, 15000 )
  } )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQvLi8xNy1sYXp5LWxvYWRpbmcvc3JjL2xvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luICggICkge1xuICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzLCByZWogKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKVxuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gXCJsb2dpblwiXG4gICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgLy8gaWYgKCB0cnVlICkgcmVqKCBcIkVycm9yIGF0IGxvZ2luXCIgKVxuICAgICAgcmVzKCBtZXNzYWdlIClcbiAgICB9LCAxNTAwMCApXG4gIH0gKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9