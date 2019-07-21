/**
 * 假设业务代码为1mb大小，lodash代码为1mb大小.
 * 
 * 不用Code Splitting 
 * 首次访问页面，需要加载main.js(2mb)
 * 当业务逻辑变化，又要打包，然后重新加载main.js(2mb)
 * 
 * 用Code Splitting 
 * 首次访问页面，需要加载main.js(1mb) + lodash(1mb
 * 当业务逻辑变化，重新打包，只需要重新加载 main.js(1mb)
 */
 

import _ from 'lodash';

console.log(_.join(['a','b','c'],'***'));
console.log(_.join(['a','b','c'],'****'));
console.log(_.join(['a','b','c'],'*****'));
console.log(_.join(['a','b','c'],'******'));

