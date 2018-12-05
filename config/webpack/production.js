const CompressionPlugin = require('compression-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackConfig = require('../../webpack.config')

module.exports = {
  ...webpackConfig,
  mode: 'production',
  stats: 'normal',
  bail: true,
  devtool: 'nosources-source-map',
  plugins: [
    ...webpackConfig.plugins,
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|json|ico|svg|eot|otf|ttf)$/,
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
}
