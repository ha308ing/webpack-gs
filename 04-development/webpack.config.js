const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  // mode: production | development | none
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" )
  },
  entry: {
    index: path.resolve( __dirname, "src/index.js" ),
    print: path.resolve( __dirname, "src/print.js" ),
  },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    clean: true,
    publicPath: "/"
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Development" } ) ],
  optimization: {
    runtimeChunk: "single"
  }
}
