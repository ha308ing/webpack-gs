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

---

# Environment Variables

`--env` - command line environmane option

`npx webpack --env goal=local --env production --progress`

`--env production` == `env.production == true`

to use environment variables  
modify `module.exports` to function that accepts `env`:

```js
module.exports = env => { 
    // use env.YOUR_VARIABLE
    console.log( env.goal ) // local
    console.log( env.production ) // true

    // and return webpack config
    return {
        entry: ...
        ...
    }
 }
```

---

# Build Performance

[link](https://webpack.js.org/guides/build-performance/)

1. Keep updated
2. Apply loaders to certain files by specifying path with `include` option:
    ```js
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve( __dirname, "src" ),
                    loader: "babel-loader"
                }
            ]
        }
        ...
    }
    ```
3. Use limited number of loaders/toolss
4. Resolving
    1. Minimize number of items in
        - `resolve.modules`
        - `resolve.extensions`
        - `resolve.mainFiles`
        - `resolve.descriptionFiles`
    2. Set `resolve.symlinks: false` if you don't use symliks (`npm link`, `yarn link`)
    3. Set `resolve.cacheWithContext: false` if external resolving plugins are used which are not context specific
5. User `DLLPlugin` to compile separately files that rarely changed.  
    Improve compilation speed, but increase build complexity
6. Avoid production specific tooling.  
    Exclude from development mode:
    - `TerserPlugin`
    - `[fullhash]/[chunkhash]/[contenthash]`
    - `AggressiveSplittingPlugin`
    - `AggressiveMergingPlugin`
    - `ModuleConcatenationPlugin`


## TypeScript
- Use the `fork-ts-checker-webpack-plugin` for typechecking in a separate process.
- Configure loaders to skip typechecking.
- Use the `ts-loader` in `happyPackMode: true` / `transpileOnly: true`.

## Sass
`node-sass` has a bug which blocks threads from the Node.js thread pool. When using it with the `thread-loader` set `workerParallelJobs: 2`.

---

# Hot Module Replacement
is meant for development mode  
is enabled by default for `webpack-dev-server` from v4.0.0

for `webpack-dev-middleware` alternative use `webpack-hot-middleware`

```js
...
devServer: {
    static: "./dist",
    hot: true
}
...
```

## Manual Entry Point for HMR ?
```js
const path = require( "path" )
const webpack = require( "webpack" )

module.exports = {
    entry: {
        app: "./src/index.js",
        
        // Runtime code for HMR
        hot: "webpack/hot/dev-server.js",

        // Dev server client for web socket transport, hot and live reload logic
        client: "webpack-dev-server/client/index.js?hot=true&live-reload=true"
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",

        // Dev server client for web socket transport, hot and live reload logic
        hot: false,
        client: false
    },
    plugins: [
        new HtmlWebpackPlugin( { title: "HMR" } ),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve( __dirname, "dist" ),
        clean: true
    }
}
```

## HMR with Stylesheets
`style-loader` uses `module.hot.accept` and because of that  
hot loading stylesheets can be done  
by importing css into a module:  
`import "./style.css"`

---

# Tree Shaking
means eliminate dead code

[link](https://webpack.js.org/guides/tree-shaking/)

`math.js`:
```js
export function square() {...}
export function cube() {...}
```

`index.js`:
```js
import { cube } from "./math"
```

`square` is unused and is condidered as dead code  
(`/* unused harmony export square */`)



```js
optimization: {
   usedExports: true,
   ...
}
```

## Mark File as Side-Effect-Free
Side effect means code that performs a special behavior when imported,  
other than exposing one or more exports.

Example is polyfills, which affect the global scope,  
and usually do not provide exports

in `package.json`:
```json
{
  "name": "your-project",

  // means no side effects
  // and webpack can tree shaking
  // unused exports
  "sideEffects": false
}
```

If code has side-effects.  
```json
{
  "name": "your-project",

  // array of glob patterns to relevant files
  // any imported file is subject to tree shaking
  "sideEffects": [ "./src/some-side-effectful-file.js", "*.css" ]
}
```

Also side effects can be configured through `module.rules` option

## Tree Shaking vs `sideEffects`
`usedExports` = tree shaking

`sideEffect` is more efficient since it allows to skip whole files

> No direct export is used, but flagged with sideEffects -> include it
> No export is used, not flagged with sideEffects -> exclude it
> Direct export is used, not flagged with sideEffects -> include it

## Mark Function as Side-Effect-Free
to mark function that call is side-effect-free (pure)  
use `/*#__PURE__*/` annotation  
in front of function call

`/*#__PURE__*/ double(55);`

Arguments passed to functin should be marked individually.
> When the initial value in a variable declaration of an unused variable is considered as side-effect-free (pure),  
> it is getting marked as dead code, not executed and dropped by the minimizer.  
> This behavior is enabled when `optimization.innerGraph` is set to `true`.

`--optimize-minimize` flag enables `TerserPlugin`

Tree shaking is done with `ModuleConcatenationPlugin`  
which enabled in `mode: "production"`  
To enable tree shaking in development mode  
add `ModuleConcatenationPlugin`

## Conclusion
To take advantage from tree shaking
- use ES6 module syntax `import` and `export`
- dont't let compilers transfrom ESM syntax to CommonJS ( i.e. babel [link](https://babeljs.io/docs/en/babel-preset-env#modules))
- add `sideEffects` property to `package.json`
- use production mode to utilize minification and tree shaking

---

# Production
Write separate webpack configurations for each environment/mode  
To keep config DRY use config with common options.  
To merge configurations use `webpack-merge` package

in common:
```js
module.exports = {<common options>}
```

in dev:
```js
const { merge } = require( "webpack-merge" )
const common = require( "./common.js" )

module.exports = merge( common, { <dev options> } )
```

in prod:
```js
const { merge } = require( "webpack-merge" )
const common = require( "./common.js" )

module.exports = merge( common, { <prod options> } )
```

`mode` option automatically configures `DefinePlugin`

Production mode loads `TerserPlugin` by default,  
does tree shaking and minimization.  
`ClosureWebpackPlugin` also does minification.  
If use other minificatoin plugin makes sure  
it does tree shaking.  
Minification plugins configured through `optimization.minimizer`.

This will not work:  
`process.env.NODE_ENV === 'production' ? '[name].[contenthash].bundle.js' : '[name].bundle.js'`
> NODE_ENV is set in the compiled code, not in the webpack.config.js file

[link](https://github.com/webpack/webpack/issues/2537)

CLI arguments  
`--optimization-minimize`
`--mode "production"`

---

# Lazy Loading
Do dynamic import of specific modules when user interacts:
```js
button.onclick = e =>
    import( /* webpackChunkName: "print" */ "./print.js" ).
    then( module => {
        const print = module.default
        print()
    } )
```

---

# ECMAScript Modules
```js
export const a = 5
export let b = 3
export default b

export class C extends S {...}

export function fn() {}
```

```js
import d from "./module.js" // import default

import { a, b } from "./module.js"

import * as m from "./module.js"
console.log( m )
/*
{
    a: 5,
    b: 3,
    default: 3
    c: 1
    C: [class C]
    fn: [function fn]
*/
```

Set module type in `package.json`:  
`type: {"module"|"commonjs"}`

Set module type with file extension:  
- `.mjs` - ESM
- `.cjs` - CommonJS

Setting DataURI using `text/javascript` or `application/javascript` mime type  
will force moule type to ESM

Modules as ESM also affect  
the resolving logic,  
interop logic  
and the available symbols in modules

Relative request must include filename and extension:  
`import "./module.js"` or `import "./module.mjs"`  
can be disabled in webpack: `module.fullySpecified=false`

Only the "default" export can be imported from non-ESM. Named exports are not available

CommonJs Syntax is not available: `require`, `module`, `exports`, `__filename`, `__dirname`.

HMR can be used with `import.meta.webpackHot` instead of `module.hot`.

---

# Shimming
Shimming is used when you need provide something as global, e.g.  
when library needs globals,  
for polyfills ( to add to specific browser functionality )

Polyfills/shims must be imported first  
and run before all other code:
- load synchronously or
- load all code after polyfills/shims are loaded
Best practice is to load unconditionally & synchronously

1. import polyfills in entry code
2. add polyfills in entry configuration

Use `babel-preset-env` with `browserlist` to transpile according target browsers.  
The preset comes with [useBuiltIns] option, `false` by default,  
that will tranform `babel-polyfill` import to granular feature by feature `import` pattern.

Node built-ins are confirured through webpack configuration `node` option

`imports-loader` - to update context  
`exports-loader` - to add module globals
`ProvidePlugin` - to add package to global where needed, use certain methods

`require.resolve`
`module.noParse` config option - include module without parsing or resolving `require`, `import` statements. Also used to improve build performance.  
Any feature requiring AST, like `ProvidePlugin` will not work.

For packages with multiple module styles: combination of AMD, CommonJS and legacy,  
force `commonjs` path by setting `additionalCode=var%20define%20=%20false;`
via `imports-loader`

---

# TypeScript
use `ts-loader`:
```js
...
module: {
    rules: [
        {
            test: /\.tsx?/,
            exclude: /node_modules/,
            use: "ts-loader"
        }
    ]
},
resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
}
...
```

`tsconfig.json` module type must be `es6`  
to support tree shaking:
```js
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true,
    "moduleResolution": "node"
  }
}
```

If no default export use: `import * as _ from "lodash"`  
To keep syntax `imoprt _ from "lodash"` modify `tsconfig`:
```json
...
"allowSyntheticDefaultImports" : true
"esModuleInterop" : true
...
```

You can use `@babel/preset-typescript` with `babel-loader`,  
but without type checking

To define types for non-code assets add `custom.d.ts`:
```js
declare module "*.svg" {
    const content: any
    export default content
}
```

---

# Web Workers
since wepback 5 web workers supported without `worker-loader`

`new Worker( new URL( "./worker.js", import.meta.url ) )`

In Node:
```js
import { Worker } from 'worker_threads';
new Worker(new URL('./worker.js', import.meta.url));
```

`Worker` supported only on `ESM` module type


[useBuiltIns]:https://babeljs.io/docs/en/babel-preset-env#usebuiltins
