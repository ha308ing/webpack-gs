import _ from "lodash"

// register service worker
if ( 'serviceWorker' in navigator ) {
  window.addEventListener( 'load', () => {
    navigator.serviceWorker.register( '/service-worker.js' ).then( registration => {
      console.log( 'SW registered: ', registration );
    } ).catch( registrationError => {
      console.log( 'SW registration failed: ', registrationError );
    } );
  } );
}

function component () {
  const element = document.createElement( "div" )
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )
  return element
}

document.body.appendChild( component() )
