module.exports = function(source) {
  /**
   * 等价效果
   * this.callback(null, result);
   * return source.replace('dell', options.name);
   *
   **/
  const result = source.replace('dell', '');
  this.callback(null, result);
};
