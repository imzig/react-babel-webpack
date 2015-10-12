
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
      { test: /\.css$/,  loader: "style-loader!css-loader" }
    ]
  }
}

