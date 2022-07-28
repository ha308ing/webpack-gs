function al () {
  // assuming in window context
  console.log( this )
  this.alert( "window alert" )
}

al()
