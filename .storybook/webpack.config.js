const path = require('path');
const config = require('../webpack.config.js');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.modules = config.resolve.modules;
  defaultConfig.module.rules.push({
    test: /\.sass$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          indentedSyntax: true
        }
      }
    ]
  });

  return defaultConfig;
};
