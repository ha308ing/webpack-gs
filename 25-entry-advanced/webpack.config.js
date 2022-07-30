const path = require( "path" )
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" )

// npm run build -- --config 25-... --env mode="production"
module.exports = ( env ) => {
  const mode = process.env.NODE_ENV || env.mode || "development"
  console.log( env )
  return {
    mode,
    entry: {
      home: [ path.resolve( __dirname, "src/home.js" ), path.resolve( __dirname, "src/home.scss" ) ],
      account: [ path.resolve( __dirname, "src/account.js" ), path.resolve( __dirname, "src/account.scss" ) ],
    },
    output: {
      path: path.resolve( __dirname, "dist" ),
      filename: "[name].js",
      clean: true
    },
    module: {
      rules: [ {
        test: /\.scss$/,

        // in production mode save css
        // to separate file
        // using MiniCssExtractPlugin.loader
        // and MiniCssExtractPlugin plugin
        use: [
          mode !== "production" ?
          "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ],
      }, ]
    },
    plugins: [ new MiniCssExtractPlugin( { filename: "[name].css", } ) ]
  }

}
