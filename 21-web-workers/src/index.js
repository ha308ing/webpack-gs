const worker = new Worker( new URL( "./deep-thought.js", import.meta.url ) )

worker.postMessage( {
  question: "Hello?"
} )

worker.onmessage = ( { data: { answer } } ) => {
  console.log( answer )
}
