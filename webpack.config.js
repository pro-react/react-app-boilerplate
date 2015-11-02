var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
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
};
