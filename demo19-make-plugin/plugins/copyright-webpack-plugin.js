class CopyrightWebpackPlugin {
  apply(compiler) {
    // 编译时
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
      console.log('compile');
    });
    // 文件构建后输出到目录之前
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        debugger;
        compilation.assets['jgchen.txt'] = {
          source: function() {
            return 'jgchen is boy';
          },
          size: function() {
            return 13;
          }
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin;
