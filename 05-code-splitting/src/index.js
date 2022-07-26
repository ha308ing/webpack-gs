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
    const { default: _ } = await import( "lodash" )
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
