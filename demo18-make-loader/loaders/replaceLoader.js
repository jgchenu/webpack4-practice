const loaderUtils = require('loader-utils');
module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  /**
   * 等价效果  
   * this.callback(null, result);
   * return source.replace('dell', options.name);
   *
   **/
  const result = source.replace('dell', options.name);
  // 异步效果
  const callback = this.async();
  setTimeout(() => {
    callback(null,result);
  }, 2000);
};
