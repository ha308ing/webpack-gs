# 04. Development

## Watch mode
- add script to `package.json`'s scripts:
    ```js
    ...
    "watch": "webpack --watch"
    ...
    ```
- to run with custom config:  
    `npm run watch -- --config <configPath>`

---

## webpack-dev-server
- `npm i --save-dev webpack-dev-server`
- add to `webpack.config.js`:  
    ```js
    ...
    devServer: {
        static: path.resolve( __dirname, "dist" )
    },
    optimization: {
        runtimeChunk: "single"
    }
    ...
    ```
- add script to `package.json`:  
    `"start": "webpack serve"`

---

## webpack-dev-middleware
- `npm i --save-dev express webpack-dev-middleware`
- add to `webpack.config.js`:  
    ```js
    ...
    output: {
        ...
        publicPath: "/"
    },
    optimization: {
        runtimeChunk: "single"
    }
    ...
    ```
- write expess server `server.js`:
    ```js
    const express = require( "express" )
    const webpack = require( "webpack" )
    const webpackDevMiddleware = require( "webpack-dev-middleware" )

    const app = express()

    const config = require( "./webpack.config.js" )
    const compiler = webpack( config )

    app.use( webpackDevMiddleware( compiler, {
    publicPath: config.output.publicPath
    } ) )

    app.listen( 3000, () => console.log( "Dev server started" ) )

    ```
- add script to `package.json`:  
    `"server": "node server.js"`
