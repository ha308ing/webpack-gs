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

# Code Splitting

## Entry Points
in `webpack.config.js`:  
```js
...
entry: {
    index: "./src/index.js", //contains lodash
    module: "./src/module.js" //contains lodash
},
output: {
    filename: "[name].bundle.js" // 2 bundles, both contains lodash (which is bad)
...
```

---

## Prevent Dependencies

### Entry Dependencies
`dependOn` option.  
in `webpack.config.js`:  
```js
...
entry: {
    index: {
        import: "./src/index.js",
        dependOn: "shared"
    },
    module: {
        import: "./src/module.js",
        dependOn: "shared"
    },
    shared: "lodash"
...
```
generated shared bundle

Do not use multiple entry points!  
Use single entry point with multiple imports!

Use entry with multiple imports: `{ page: [ "./analytics", "./app" ] }`

---
### SplitChunksPlugin
Extract common dependencies to separate chunk or to existing entry chunk
```js
...
optimization: {
    splitChunks: {
        chunks: "all"
    }
}
...
```

---

## Dynamic Imports
`import()` calls use promises internally.  
If you use `import()` with older browsers,  
remember to shim `Promise` using a poyfill  
such as `es6-promise` or `promise-polyfill`.

```js
async function getComponent() {
    const { default: _ } = await import( "lodash" )
    const element = ...
    element.innerHTML = _.join( [ ... ], " " )
    return element
}

getComponent()
.then( component => document.body.append( component ) )
.catch( console.error )
```


## Prefetching / Preloading Modules
Inline directives inside imports

- prefetch - resource is probable needed in future navigation
- preload - resourse will also be needed in current navigation

in `LoginButton.js`:  
`import(/* webpackPrefetch: true */ './path/to/LoginModal.js');`

preload | prefetch
:--:  | :--:
preload is loading in parallel to parent chunk | prefetch loads after parent chunk has finished loading
preloaded chunk has medium priority and instantly downloading | prefetched chunk donwloads when browser is idle
preloaded chunk should be instantly requested by the parent | prefetched chunk can be used anytime in future
`<link rel="preload" href="login-modal-chunk.js">` | `<link rel="prefetch" href="login-modal-chunk.js">`

---

# Caching

Ouput filename substitutions:
- `[contenthash]` - add hash based on asset content

Extract 3rd-party libraries ( react, lodash ) to separate vendor chunk

```js
...
optimization: {
    moduleIds: "deterministic",
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
...
```

---

# Authoring Libraries

To expose exports from entry point,  
use `output.library`

```js
...
output: {
    path: ...
    filename: ...

    // exposed only through script tag
    library: <exposedName>

    // to expose in compatibility with other environments
    // add type: "umd"
    library: {
        name: <exposedName>,
        type: "umd"
    }
```

Using array as entry point for a library is not recommended.  
add an index script that serves as a single entry point [link](https://stackoverflow.com/questions/34072598/es6-exporting-importing-in-index-file)


## Externalize 3rd-party Library

To exclude 3rd-party library from bundle  
and requre user to have this library  
use `externals` option
```js
module.exports = {
    ...
    externals: {
        lodash: {
            commonjs: "lodash",
            commonjs2: "lodash",
            amd: "lodash",
            root: "_"
        }
    }
    ...
}
```

Library with several files in dependencies, like:  
```js
import A from "library/one"
import B from "library/two"
```
should be externalized by each file, or with regular expression
```js
...
externals: [
    "library/one",
    "library/two",
    // or everything that starts with library/
    /^library\/.+$/
```

To expose css associated with library,  
use `MiniCssExtractPlugin`
