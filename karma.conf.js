// Karma Configuration

var karmaConfig = {

  frameworks: [ 'mocha'             ],
  reporters:  [ 'mocha', 'coverage' ],
  browsers:   [ 'PhantomJS'         ],
  files:      [ 'spec/entry.js'     ],

  preprocessors:  { 'spec/entry.js': [ 'webpack' ] },
  singleRun:      !process.env.WATCH,

  plugins: [
    'karma-mocha',
    'karma-webpack',
    'karma-phantomjs-launcher',
    'karma-mocha-reporter',
    'karma-coverage'
  ],

  webpackMiddleware:  { noInfo:         true            },
  coverageReporter:   { type:           'text-summary'  },
  client:             { captureConsole: false           },

  webpack: {
    devtool: 'inline-source-map',
    resolve: {
      modulesDirectories: ['./src', './node_modules']
    },
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          include: __dirname + '/src',
          loader: 'istanbul-instrumenter!babel-loader'
        }
      ],
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.jsx?$/
        }
      ]
    }
  }

};

module.exports = function(config) {
  config.set(karmaConfig);
};
