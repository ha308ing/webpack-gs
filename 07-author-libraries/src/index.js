import _ from "lodash"
import data from "./data.json"

export function numToWord ( num ) {
  return _.reduce( data, ( res, cur ) => cur.num === num ? cur.word : res, "" )
}

export function wordToNum ( word ) {
  return _.reduce( data, ( res, cur ) => cur.word === word && word.toLowerCase() ? cur.num : res, -1 )
}
