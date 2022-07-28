export default function button ( fn = () => console.log( "button clicked" ), t = "Button" ) {
  const btn = document.createElement( "button" )
  btn.innerHTML = t
  btn.onclick = fn
  return btn
}
