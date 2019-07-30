const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const moduleAnalyser = filename => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module'
  });
  const dependencies = {};

  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      dependencies[node.source.value] =
        './' + path.join(dirname, node.source.value);
    }
  });

  const { code } = babel.transformFromAst(ast, null, {
    presets: ['@babel/preset-env']
  });

  return {
    filename,
    dependencies,
    code
  };
};

const makeDependenciesGraph = entry => {
  const moduleInfo = moduleAnalyser(entry);
  const graphArr = [moduleInfo];

  for (let i = 0; i < graphArr.length; i++) {
    const item = graphArr[i];
    const { dependencies } = item;
    for (let j in dependencies) {
      graphArr.push(moduleAnalyser(dependencies[j]));
    }
  }

  const graph = {};

  graphArr.forEach(item => {
    graph[item.filename] = {
      dependencies: item.dependencies,
      code: item.code
    };
  });

  return graph;
};

const generateCode = entry => {
  const graph = JSON.stringify(makeDependenciesGraph(entry));
  return `
    !function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependencies[relativePath])
        }
        const exports = {};
        !function(require,exports,code){
          eval(code);
        }(localRequire,exports,graph[module].code);
        return exports;
      }
      require('${entry}');
    }(${graph})
  `;
};
const code = generateCode('./src/index.js');
console.log(code);
