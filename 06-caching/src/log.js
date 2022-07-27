import _ from "lodash"

export function log ( text ) {
  console.log( text || _.join( [ "i", "was", "called", "from", "log" ], " " ) )
}
