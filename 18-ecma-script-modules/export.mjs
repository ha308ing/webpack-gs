export const CONSTANT = 17

// only reading is exposed
// impossible to modify the variable from outside
export let variable = 17

export function fun () {
  console.log( "fun" )
}

export class C {
  module () {
    console.log( "module" )
  }
}

let a, b, other

export { a, b, other as c }

// export default 1 + 2 + 3 + more()
export default 1 + 2 + 3
