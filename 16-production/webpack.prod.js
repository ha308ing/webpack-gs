const { merge } = require( "webpack-merge" )
const common = require( "./webpack.common.js" )

// npm run build -- --config 16-production/webpack.prod.js
module.exports = merge( common, {
  mode: "production",
  devtool: "source-map"
} )
