const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" ),
    hot: true
  },
  entry: path.resolve( __dirname, "src/index.ts" ),
  module: {
    rules: [
      { test: /\.tsx?/, exclude: /node_modules/, use: "ts-loader" }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  plugins: [ new HtmlWebpackPlugin( { title: "TypeScript" } ) ],
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "bundle.js"
  }
}
