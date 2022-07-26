const path = require( "path" )
const HtmlWebpackPlugin = require( "html-webpack-plugin" )
const json5 = require( "json5" )
const toml = require( "toml" )
const yaml = require( "yamljs" )

module.exports = {
  entry: path.resolve( __dirname, "src/index.js" ),
  output: {
    path: path.resolve( __dirname, "dist" ),
    filename: "bundle.js",
    clean: true
  },
  plugins: [ new HtmlWebpackPlugin( { title: "Asset Management" } ) ],
  module: {
    rules: [
      { test: /\.css$/, use: [ "style-loader", "css-loader" ] },
      { test: /\.(jpg|jpeg|png|svg|gif)$/, type: "asset/resource" },
      { test: /\.(woff|woff2|otf|eot|ttf)$/, type: "asset/resource" },
      { test: /\.(csv|tsv)$/, use: [ "csv-loader" ] },
      { test: /\.xml$/, use: [ "xml-loader" ] },
      { test: /\.json5$/, type: "json", parser: { parse: json5.parse } },
      { test: /\.toml$/, type: "json", parser: { parse: toml.parse } },
      { test: /\.yaml$/, type: "json", parser: { parse: yaml.parse } }
    ]
  }
}
