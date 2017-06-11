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
    filename: 'bundle.js',
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
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
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
