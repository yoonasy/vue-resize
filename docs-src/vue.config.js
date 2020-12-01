const path = require('path')

module.exports = {
  publicPath: '/vue3-resize/',
  outputDir: '../docs',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: path.join(__dirname, '..', 'docs'),
  },
}
