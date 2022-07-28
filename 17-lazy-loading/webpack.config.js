const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" )
  },
  entry: {
    index: path.resolve( __dirname, "src/index.js" ),
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Lazy Loading" } ) ],
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    clean: true
  },
  optimization: {
    // runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
}
