var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + "/src",
  entry: {
    second: './app',
    html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/,  loader: ExtractTextPlugin.extract("css-loader") },
      { test: /\.png$/, loader: "file-loader" }
    ]
  },
  plugins: [
      new ExtractTextPlugin("style.css", { allChunks: true })
  ]
}

