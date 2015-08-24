var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer  = require('webpack-dev-server');
var webpack           = require('webpack');
var config            = require('./config');

var entryPoints = [ './src/index.js' ];
if (process.argv.indexOf('-p') === -1) {
  entryPoints.push(
    'webpack-dev-server/client?http://' + config.DEV_HOST + ':' + config.DEV_PORT,
    'webpack/hot/dev-server'
  );
}

var webpackConfig = {
  entry: entryPoints,
  output: {
    filename:   'bundle.js',
    path:       __dirname + '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: config.APP_NAME
    })
  ],
  devtool: process.env.DEV_SERVER ? 'source-maps' : null,
  resolve: {
    modulesDirectories: ['./src', './node_modules'],
    extensions:         ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: __dirname + '/src'
    }]
  }
};

if (process.env.DEV_SERVER) {
  new WebpackDevServer(webpack(webpackConfig), {
    historyApiFallback: true,
    publicPath:         webpackConfig.output.publicPath,
    hot:                true,
    stats: {
      colors: true
    }
  }).listen(config.DEV_PORT, config.DEV_HOST, function (err, result) {
    if (err) { console.log(err); }
    console.log('Listening at ' + config.DEV_HOST + ':' + config.DEV_PORT);
  });
}

module.exports = webpackConfig;
