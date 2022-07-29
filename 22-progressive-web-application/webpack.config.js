const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )
const WorkboxPlugin = require( "workbox-webpack-plugin" )

// npm run start-http -- 22-progressive-web-application/dist/
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve( __dirname, "src/index.js" ),
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin( { title: "PWA" } ),
    new WorkboxPlugin.GenerateSW( {
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    } )
  ]
}
