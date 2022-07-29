const gulp = require( "gulp" )
const webpack = require( "webpack-stream" )

gulp.task( "webpack", function () {
  return gulp.src( "./src/index.js" ).
  pipe( webpack( { /* ... webpack config ... */ } ) ).
  pipe( gulp.dest( "dist" ) )
} )
