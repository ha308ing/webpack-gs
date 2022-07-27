const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" )
  },
  entry: {
    main: [ path.resolve( __dirname, "src/index.js" ) ]
  },
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "[name].[contenthash].js",
    clean: true,
    // publicPath: "/"
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Caching" } ) ],
  optimization: {
    // single runtime bundle for all chunks
    runtimeChunk: "single",

    moduleIds: "deterministic",

    // group 3rd-party libraries from node_modules to vendors bundle
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
