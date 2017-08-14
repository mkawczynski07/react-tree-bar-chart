const {resolve} = require('path');
const webpack = require('webpack');
const precss = require('precss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const mainCss = new ExtractTextPlugin('main.css');

const config = {
  entry: [
    './tree-bar-chart/TreeBarChart'
  ],

  context: resolve(__dirname, 'app'),

  output: {
    filename: 'index.js',
    path: resolve(__dirname),
    publicPath: '',
    library: 'react-tree-bar-chart',
    libraryTarget: "umd"
  },

  externals: {
    'react': 'commonjs react',
    'react-dom': 'commonjs react-dom'
  },

  plugins: [
    mainCss,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}})
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: mainCss.extract({
          fallbackLoader: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: loader => [
                    autoprefixer({browsers: ['last 2 versions']}),
                    atImport({
                      path: './src/css/*.css',
                      addDependencyTo: webpack
                    }),
                    precss
                  ]
              }
            }
          ]
        }),
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
