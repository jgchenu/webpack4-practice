const loaderUtils = require('loader-utils');
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace('dell', options.name);
  // 异步效果
  const callback = this.async();
  setTimeout(() => {
    callback(null,result);
  }, 2000);
};
