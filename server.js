
require('babel-register');

var app = new (require('express'))()
var port = 3000

// initalize webpack dev middleware if in development context
if (process.env.NODE_ENV === 'development') {
  var webpack = require('webpack')
  var config = require('./webpack.config')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

app.use(require('express').static('public'))

var handleRender = require('./src/handleRender')

app.get("*", handleRender)

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})