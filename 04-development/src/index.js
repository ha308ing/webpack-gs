import _ from "lodash"
import printMe from "./print"

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Webpack", "hello" ], " " )
  element.onclick = printMe
  return element
}

document.body.appendChild( component() )
