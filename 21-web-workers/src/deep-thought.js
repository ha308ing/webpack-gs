self.onmessage = ( { data: { question } } ) => {
  self.postMessage( {
    answer: "hello!"
  } )
}
