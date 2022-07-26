import _ from "lodash"
import { print } from "./print"
import button from "./button"

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )

  const btn = button( print, "click me" )

  element.appendChild( btn )

  return element
}

document.body.appendChild( component() )
