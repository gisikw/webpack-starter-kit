/**
  * Webpack entry point for Karma. Includes all src files, along with all
  * tests, to allow Istanbul to instrument code coverage
  **/

require('core-js/es5');

var context = require.context('.', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);

//var srcContext = require.context('../src', true, /.+\.jsx?$/);
//srcContext.keys().forEach(srcContext);
