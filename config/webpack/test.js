const { resolve } = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const webpackConfig = require('./production');

const [, ...plugins] = webpackConfig.plugins;

module.exports = {
  ...webpackConfig,
  output: {
    ...webpackConfig.output,
    path: resolve('./public/packs-test'),
    publicPath: '/packs-test/'
  },
  plugins: [
    new ManifestPlugin({ publicPath: '/packs-test/', writeToFileEmit: true }),
    ...plugins
  ]
};
