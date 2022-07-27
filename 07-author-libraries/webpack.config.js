const path = require( "path" )

module.exports = {
  entry: path.resolve( __dirname, "src/index.js" ),
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "webpack-numbers.js",
    library: {
      name: "webpackNumbers",
      type: "umd"
    },
    clean: true
  },
  externals: {
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_"
    }
  },
}
