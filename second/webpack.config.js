module.exports = {
  context: __dirname + '/src',
  entry: { javascript: "./app.js", html: "./index.html" },
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
}

