const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  // DEV config
  mode: 'development',
  devServer: {
    // static: baseWebpackConfig.externals.paths.dist,
    port: 8080,
    liveReload: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
