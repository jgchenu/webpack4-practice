# webpack4-practice
webpack

* sideEffects
```js
  "sideEffects": [
    "@babel/polyfill", // 用于tree Shaking 时候，不要让webapck忽略@babel/polyfill ，因为这种是挂在window的，并非是import 引入的
    "*.css" // 不要忽略*.css的打包
  ]
  "sideEffects": false //会忽略非import模块的打包
```