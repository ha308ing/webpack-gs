const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve( __dirname, "src/index.js" ),
    // DYNAMICALLY IMPORT another-module inside index.js
    // another: path.resolve( __dirname, "src/another-module.js" )
  },

  // PREVENT ENTRY DEPENDENCIES DUPLICATION (dependOn option)
  // entry: {
  //   another: {
  //     import: path.resolve( __dirname, "src/another-module.js" ),
  //     dependOn: "shared"
  //   },
  //   index: {
  //     import: path.resolve( __dirname, "src/index.js" ),
  //     dependOn: "shared"
  //   },
  //   shared: "lodash"
  // },

  // PREFER USE OF SINGLE ENTRY WITH MULTIPLE IMPORTS
  // entry: {
  //   main: [
  //     path.resolve( __dirname, "src/another-module.js" ),
  //     path.resolve( __dirname, "src/index.js" )
  //   ]
  // },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    clean: true
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Code Splitting" } ) ],
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" )
  },
  optimization: {
    runtimeChunk: "single",
    // PREVENT DUPLICATES WITH SplitChunksPlugin
    // splitChunks: {
    //   chunks: "all"
    // }
  }
}
