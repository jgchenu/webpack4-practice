class CopyrightWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compile.tap('CopyrightWebpackPlugin', () => {
      console.log('compile');
    });
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
