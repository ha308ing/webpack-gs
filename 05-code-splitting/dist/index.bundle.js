(self["webpackChunkgetting_started"] = self["webpackChunkgetting_started"] || []).push([["index"],{

/***/ "./05-code-splitting/src/index.js":
/*!****************************************!*\
  !*** ./05-code-splitting/src/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// import _ from "lodash"

// function component () {
//   const element = document.createElement( "div" )
//   element.innerHTML = _.join( [ "Hello", "webpack" ], " " )
//   return element
// }

// document.body.appendChild( component() )

// DYNAMIC IMPORTS

// function getComponent () {
//   return import( "lodash" )
//   .then( ( { default: _ } ) => {
//     const element = document.createElement( "div" )
//     element.innerHTML = _.join( [ "Hello", "webpack" ], " " )
//     return element
//   } )
//   .catch( error => "An error occurred while loading the component" )
// }

// await version
async function getComponent () {
  try {
    const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors-node_modules_lodash_lodash_js").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23))
    const element = document.createElement( "div" )
    element.innerHTML = _.join( [ "Hello", "webpack" ], " " )
    return element
  } catch ( error ) {
    return "An error occurred while loading the component"
  }
}

getComponent().then( ( component ) => {
  document.body.appendChild( component )
} )

// getComponent().then( ( component ) => {
//   document.body.appendChild( component )
//   import( "./another-module" )
//   .then( ( { default: anotherModule } ) => {
//     anotherModule().then( console.log ).catch( console.error )
//   } )
//   .catch( console.error )
// } )


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./05-code-splitting/src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhLFFBQVEseUxBQWtCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXR0aW5nLXN0YXJ0ZWQvLi8wNS1jb2RlLXNwbGl0dGluZy9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiXG5cbi8vIGZ1bmN0aW9uIGNvbXBvbmVudCAoKSB7XG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiIClcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oIFsgXCJIZWxsb1wiLCBcIndlYnBhY2tcIiBdLCBcIiBcIiApXG4vLyAgIHJldHVybiBlbGVtZW50XG4vLyB9XG5cbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoIGNvbXBvbmVudCgpIClcblxuLy8gRFlOQU1JQyBJTVBPUlRTXG5cbi8vIGZ1bmN0aW9uIGdldENvbXBvbmVudCAoKSB7XG4vLyAgIHJldHVybiBpbXBvcnQoIFwibG9kYXNoXCIgKVxuLy8gICAudGhlbiggKCB7IGRlZmF1bHQ6IF8gfSApID0+IHtcbi8vICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApXG4vLyAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oIFsgXCJIZWxsb1wiLCBcIndlYnBhY2tcIiBdLCBcIiBcIiApXG4vLyAgICAgcmV0dXJuIGVsZW1lbnRcbi8vICAgfSApXG4vLyAgIC5jYXRjaCggZXJyb3IgPT4gXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnRcIiApXG4vLyB9XG5cbi8vIGF3YWl0IHZlcnNpb25cbmFzeW5jIGZ1bmN0aW9uIGdldENvbXBvbmVudCAoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyBkZWZhdWx0OiBfIH0gPSBhd2FpdCBpbXBvcnQoIFwibG9kYXNoXCIgKVxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiIClcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbiggWyBcIkhlbGxvXCIsIFwid2VicGFja1wiIF0sIFwiIFwiIClcbiAgICByZXR1cm4gZWxlbWVudFxuICB9IGNhdGNoICggZXJyb3IgKSB7XG4gICAgcmV0dXJuIFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tcG9uZW50XCJcbiAgfVxufVxuXG5nZXRDb21wb25lbnQoKS50aGVuKCAoIGNvbXBvbmVudCApID0+IHtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggY29tcG9uZW50IClcbn0gKVxuXG4vLyBnZXRDb21wb25lbnQoKS50aGVuKCAoIGNvbXBvbmVudCApID0+IHtcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggY29tcG9uZW50IClcbi8vICAgaW1wb3J0KCBcIi4vYW5vdGhlci1tb2R1bGVcIiApXG4vLyAgIC50aGVuKCAoIHsgZGVmYXVsdDogYW5vdGhlck1vZHVsZSB9ICkgPT4ge1xuLy8gICAgIGFub3RoZXJNb2R1bGUoKS50aGVuKCBjb25zb2xlLmxvZyApLmNhdGNoKCBjb25zb2xlLmVycm9yIClcbi8vICAgfSApXG4vLyAgIC5jYXRjaCggY29uc29sZS5lcnJvciApXG4vLyB9IClcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==