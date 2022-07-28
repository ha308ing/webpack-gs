export function square ( x ) {
  return x * x
}

export async function cube ( x ) {
  return new Promise( ( res, rej ) => {
    setTimeout( () => { res( x * x * x ) }, 5000 )
  } )
}
