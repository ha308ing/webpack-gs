import _ from "lodash"
import print from "./print"
import "./style.css"

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Hello", "webpack", "<br>" ], " " )
  const btn = document.createElement( "button" )
  btn.innerHTML = "Click me"
  // btn.onclick = print.bind( null, "print called from index" )
  btn.onclick = print
  // element.onclick = print.bind( null, "hello" )
  element.appendChild( btn )
  return element
}

// document.body.appendChild( component() )
let element = component() // Store the element to re-render on print.js changes
document.body.appendChild( element )

if ( module.hot ) {
  module.hot.accept( "./print.js", function () {
    console.log( "Accepting the updated printMe module" )
    document.body.removeChild( element )
    print()

    element = component()
    document.body.appendChild( element )

  } )
}
