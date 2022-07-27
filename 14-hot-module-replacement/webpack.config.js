const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )
// const webpack = require( "webpack" )

module.exports = {
  mode: "development",
  entry: {
    index: path.resolve( __dirname, "src/index.js" ),

    // Runtime code for hot module replacement
    // hot: "webpack/hot/dev-server.js",

    // Dev server client for web socket transport,
    // hot and live reload logic
    // client: "webpack-dev-server/client/index.js?hot=true&live-reload=true"
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" ),
    hot: true
    
    // Dev server client for web socket transport,
    // hot and live reload logic
    // hot: false,
    // client: false
  },
  plugins: [
    new HtmlWebpackPlugin( { title: "Hot Module Replacement" } ),

    // Plugin for hot module replacement
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] }
    ]
  },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].bundle.js",
    clean: true
  },
  // optimization: {
  //   runtimeChunk: true,
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "verndors",
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
}
