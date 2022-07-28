export default async function login (  ) {
  return new Promise( ( res, rej ) => {
    const message = document.createElement( "div" )
    message.innerHTML = "login"
    setTimeout( () => {
      // if ( true ) rej( "Error at login" )
      res( message )
    }, 15000 )
  } )
}
