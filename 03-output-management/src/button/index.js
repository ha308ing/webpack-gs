import "./button.css"

export default function button ( fn = null, text = "Click me" ) {
  const button = document.createElement( "button" )
  button.classList.add( "button" )
  button.innerHTML = text
  button.onclick = fn
  return button
}
