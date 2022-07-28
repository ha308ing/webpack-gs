const path = require( "path" )
const { merge } = require( "webpack-merge" )
const common = require( "./webpack.common.js" )

// npm run start -- --config 16-production/webpack.dev.js
module.exports = merge( common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.resolve( __dirname, "dist" ),
    hot: true
  },
} )
