'use strict';

var path = require('path');
var webpack = require("webpack");
var Is_DEV_version = JSON.parse(process.env.DEV || "0");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  context: __dirname + "/src",
  entry: {
    src: './app',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract("css-loader") },

      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
    ]
  },
  plugins: !Is_DEV_version ? [
      new ExtractTextPlugin("style.css", { allChunks: true }),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
  ] : [
      new ExtractTextPlugin("style.css", { allChunks: true })
  ]
}

