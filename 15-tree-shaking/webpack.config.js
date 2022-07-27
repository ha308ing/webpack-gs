const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  // mode: "production" will
  // run tree-shaking and minification
  // and remove unused exports
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" ),
    hot: true
  },
  entry: {
    index: {
      import: path.resolve( __dirname, "src/index.js" )
    }
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Tree Shaking" } ) ],
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    clean: true
  },
  optimization: {
    usedExports: true,
    // runtimeChunk: "single",
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       name: "vendors",
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: "all"
    //     }
    //   }
    // }
  }
}
