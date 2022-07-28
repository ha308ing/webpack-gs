import { CONSTANT, variable } from "./export.mjs"
// import "bindings" to exports from another module
// these bindings are live. The values are not copied,
// instead accessing "variable" will get the current value
// in the imported module

import * as module from "./export.mjs"
module.fun()
// import the "namespace object" which contains all exports

console.log( module )

import theDefaultValue from "./export.mjs"
console.log( theDefaultValue )
// shortcut to import the "default" export
