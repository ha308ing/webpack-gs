module.exports = function ( config ) {
  config.set( {
    frameworks: [ "webpack" ],
    files: [
      { pattern: "test/*_test.js", watched: false },
      { pattern: "test/**/*_test.js", watched: false }
    ],
    preprocessors: {
      "test/*_test.js": [ "webpack" ],
      "test/**/*_test.js": [ "webpack" ],
    },
    webpack: { /* webpack config */ },
    plugins: ["karma-webpack"]
  })
}
