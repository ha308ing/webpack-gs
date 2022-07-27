import _ from "lodash"
import { log } from "./log"

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )
  element.onclick = log.bind( null, "log from index" )
  return element
}

document.body.append( component() )
