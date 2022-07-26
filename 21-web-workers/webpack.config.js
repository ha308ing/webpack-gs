const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "dist",
    hot: true
  },
  entry: path.resolve( __dirname, "src/index.js" ),
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "bundle.js"
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Web Workers" } ) ]
}
