const webpack = require('webpack');
const { generateEntry } = require('webpacker-entry');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { join, resolve } = require('path');

const baseDir = resolve('./app/frontend/packs');
const sourcePath = 'app/frontend';
const extensions = [
  '.js',
  '.js.erb',
  '.vue',
  '.sass',
  '.scss',
  '.css',
  '.png',
  '.svg',
  '.gif',
  '.jpeg',
  '.jpg'
];

const cssLoaders = [
  MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
      importLoaders: 2,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
];

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: generateEntry(baseDir, extensions),
  output: {
    filename: '[name]-[chunkhash].js',
    chunkFilename: '[name]-[chunkhash].chunk.js',
    hotUpdateChunkFilename: '[id]-[hash].hot-update.js',
    path: resolve('./public/packs'),
    publicPath: '/packs/'
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'rails-erb-loader',
            options: {
              runner:
                (/^win/.test(process.platform) ? 'ruby ' : '') +
                'bin/rails runner'
            }
          }
        ]
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.scss$/,
        use: [
          ...cssLoaders,
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: [
          ...cssLoaders,
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|tiff|ico|svg|eot|otf|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash].[ext]',
              context: join(sourcePath)
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin({ publicPath: '/packs/', writeToFileEmit: true }),
    new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash:8].css',
      chunkFilename: '[name]-[contenthash:8].chunk.css'
    })
  ],
  resolve: {
    extensions,
    modules: ['node_modules', sourcePath],
    alias: {
      // SEE: https://qiita.com/magaya0403/items/3fbe9aa20c6a66b76662
      vue$: 'vue/dist/vue.esm.js'
    }
  }
};
