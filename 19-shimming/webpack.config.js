const path = require( "path" )
const webpack = require( "webpack" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    // add polyfills first
    polyfills: path.resolve( __dirname, "src/polyfills.js" ),
    index: path.resolve( __dirname, "src/index.js" ),
    thisWindow: path.resolve( __dirname, "src/windowContext.js" ),
  },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    // clean: true
  },
  plugins: [
    // shimming. add lodash package as global, where _ is used
    // new webpack.ProvidePlugin( { _: "lodash" } ),

    // shimming. add specific method (join) lodash
    // <single export>: [ package, child, ...arrayPathToChild? ]
    new webpack.ProvidePlugin( { join: [ "lodash", "join" ] } ),
    
    // new HtmlWebpackPlugin( { title: "Shimming" } )
  ],
  module: {
    rules: [
      {
        // load module in window context (if it uses this as window context)
        test: require.resolve( "./src/windowContext.js" ),
        use: "imports-loader?wrapper=window"
      },
      {
        // add globals from module ( use require in entry )
        test: require.resolve( "./src/globals.js" ),
        use: "exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse"
      }
    ]
  }
}
