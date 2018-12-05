const webpackConfig = require('../../webpack.config')

const devServer = {
  clientLogLevel: 'none',
  compress: true,
  disableHostCheck: true,
  contentBase: webpackConfig.output.path,
  inline: true,
  https: false,
  host: 'localhost',
  port: '3035',
  public: 'localhost:3035',
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: {
    disableDotRule: true,
  },
  headers: { 'Access-Control-Allow-Origin': '*' },
  overlay: true,
  stats: {
    errorDetails: true,
  },
  watchOptions: { ignored: '/node_modules/' },
}

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    pathinfo: true,
  },
  cache: true,
  devServer,
}
