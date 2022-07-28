import _, { compact } from "lodash"
import button from "./button.js"

// import { cube } from "./math.js"

// function component () {
//   return import( "./math.js" ).then( ( { cube: c } ) => {
//     const element = document.createElement( "pre" )
//     element.innerHTML = _.join( [ "Hello webpack", "5 in cube: " + c( 5 ) ], "\n\n" )
//     return element
//   } )
// }

function printButton () {
  const element = document.createElement( "div" )
  const btn = document.createElement( "button" )
  const br = document.createElement( "br" )

  btn.innerHTML = "Click me"
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )

  element.appendChild( br )
  element.appendChild( btn )

  btn.onclick = e => import( /* webpackChunkName: "print" */ "./print.js" ).then( module => {
    const print = module.default
    print()
  } )

  return element
}

document.body.appendChild( printButton() )

async function component () {
  const element = document.createElement( "pre" )
  const { cube: c } = await import( /* webpackChunkName: "math" */ "./math.js" )
  const v = await c( 5 )
  element.innerHTML = _.join( [ "Hello webpack", "5 in cube: " + v ], "\n\n" )
  return element
}

const loading = document.createElement( "div" )
loading.innerHTML = "loading..."
document.body.appendChild( loading )

component().then( async ( c ) => {
  try {
    document.body.removeChild( loading )
    document.body.appendChild( c )
    const btn = button( async () => {
      try {
        const { default: loginFn } = await import( /* webpackChunkName: "login" */ "./login.js" )
        const message = await loginFn()
        // if ( true ) throw new Error( "error at button" )
        document.body.appendChild( message )
      } catch ( error ) {
        console.error( error )
      }
    }, "Log in" )
    // if ( true ) throw new Error( "error at component" )
    document.body.appendChild( btn )
  } catch ( error ) {
    console.warn( "error at component" )
    console.error( error )
  }
} )
