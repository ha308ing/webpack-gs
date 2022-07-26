import _ from "lodash";
import "./style.css"
import LogoText from "./logo.png"
import LogoIcon from "./background.png"
import csvData from "./data/data.csv"
import xmlData from "./data/data.xml"
import json5Data from "./data/data.json5"
import tomlData from "./data/data.toml"
import yamlData from "./data/data.yaml"

console.log( csvData )
console.log( xmlData )

logData( json5Data )
logData( tomlData )
logData( yamlData )

function component () {
  const element = document.createElement( "div" )
  element.classList.add( "hello" )
  element.innerHTML = _.join( [ "Hello", "webpack" ], " " )

  const logoText = new Image()
  logoText.src = LogoText
  logoText.classList.add( "image" )

  const logoIcon = new Image()
  logoIcon.src = LogoIcon
  logoIcon.classList.add( "image" )

  element.appendChild( logoText )
  element.appendChild( logoIcon )

  return element
}

function logData ( data ) {
  console.log( data.title )
  console.log( data.owner.name )
}

document.body.appendChild( component() )
