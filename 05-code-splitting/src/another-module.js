import _ from "lodash"

export default async function anotherModule () {
  try {
    const { default: _ } = await import( "lodash" )
    return await new Promise( ( res, rej ) => {
      setTimeout( () => res( _.join( [ "Another", "module", "loaded" ], " " ) ), 3000 )
    } )
  } catch ( error ) {
    return "Error in another module"
  }
}

// export default async function anotherModule () {
//   try {
//     const { default: _ } = await import( "lodash" )
//     return await new Promise( ( res, rej ) => {
//       setTimeout( () => res( _.join( [ "Another", "module", "loaded" ], " " ) ), 3000 )
//     } )
//   } catch ( error ) {
//     return "Error in another module"
//   }
// }
