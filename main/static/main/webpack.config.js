var path = require('path');
var webpack = require ('webpack');
var BundleTracker = require ('webpack-bundle-tracker');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  context: __dirname,
  entry: {
    // index: './src/scripts/index.js',
    animate: './src/scripts/animate-module.js',
    styles: './src/scripts/styles-module.js',
    externals: './src/scripts/externals-module.js',
  },
  output: {
    path: path.resolve('./dist/scripts/'),
    filename: '[name].bundle.js',
  },
  mode: "production",
  // Vue doesn't work unless this is present
  resolve: {
  alias: {
    vue: 'vue/dist/vue.js'
    }
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: true
    })]
  },
  plugins: [
    new BundleTracker({filename: 'webpack-stats.json'}),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.sass$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              quality: 70,
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
