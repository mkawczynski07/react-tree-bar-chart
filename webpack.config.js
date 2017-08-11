const {resolve} = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const precss = require('precss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './main.js'
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  context: resolve(__dirname, 'app'),

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'app'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: (loader) => [
                  autoprefixer({browsers: ['last 2 versions']}),
                  atImport({
                    path: './src/css/*.css',
                    addDependencyTo: webpack
                  }),
                  precss
                ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
