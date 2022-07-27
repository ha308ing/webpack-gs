const path = require( "path" )

module.exports = env => {
  // npm run build -- --config 08-/webpack.config.js --env goal=local --env production
  // npx webpack --env goal=local --env production
  console.log( env.goal )
  console.log( env.production )

  return {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve( __dirname, "src/index.js" ),
    output: {
      path: path.resolve( __dirname, "dist" ),
      filename: "main.js"
    },
    optimization: {
      // runtimeChunk: "single",
      splitChunks: {
        chunks: "all"
      }
    }
  }
}
