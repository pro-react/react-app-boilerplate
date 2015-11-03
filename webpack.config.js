var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: "./App.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: __dirname + "/app",
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: false,
  },
}
