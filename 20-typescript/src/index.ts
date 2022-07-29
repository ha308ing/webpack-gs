// import _ from "lodash"
// no default export in lodash definitions
// add @types/lodash or use:
import * as _ from "lodash"

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )

  /// <reference types="webpack/module"/>
  console.log( import.meta.webpack )

  return element
}

document.body.appendChild( component() )
