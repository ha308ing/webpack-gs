const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  entry: {
    index: path.resolve( __dirname, "src/index.js" ),
    print: path.resolve( __dirname, "src/print.js" ),
  },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js"
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Output Management" } ) ],
  module: {
    rules: [ { test: /\.css$/, use: [ "style-loader", "css-loader" ] } ]
  }
}
