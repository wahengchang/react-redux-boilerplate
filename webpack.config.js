const { resolve, join } = require('path')
const webpack = require('webpack')

const config = {
  devtool: 'cheap-eval-source-map',
  context: resolve(__dirname, 'src'),
  entry: {
    home: [
      'webpack-hot-middleware/client',
      './clientRender.js'
    ]
  },
  output: {
    path: resolve(__dirname,'public/static'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
module.exports = config
