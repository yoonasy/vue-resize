const path = require('path')

function resolve (src) {
  return path.join(__dirname, src)
}

module.exports = {
  publicPath: '/vue3-resize/',
  outputDir: '../docs',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: path.join(__dirname, '..', 'docs'),
  },
  chainWebpack: config => {
    config.resolve.alias.set('vue$', resolve('../node_modules/vue'))
  },
}
