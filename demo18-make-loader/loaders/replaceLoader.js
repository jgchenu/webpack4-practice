const loaderUtils = require('loader-utils');
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  // return source.replace('dell', options.name);
  const result = source.replace('dell', options.name);
  this.callback(null, result);
};
