# webpack4-practice

webpack

### package.json 中的 `sideEffects`

```js
  "sideEffects": [
    "@babel/polyfill", // 用于tree Shaking 时候，不要让webapck忽略@babel/polyfill ，因为这种是挂在window的，并非是import 引入模块，调用模块使用的。这个跟usedExports为true的时候，此配置生效，若sideEffects为false，则忽略所有import未使用内容
    "*.css" // 不要忽略*.css的引入打包
  ]
  "sideEffects": false //会忽略非import模块的打包
```

### package.json 中的 usedExports

```js
optimization: {
  usedExports: true; //production 的时候，optimization就已经配置好了，不用自己去配置, 该选项用于只打包import 之后有使用过的模块，没使用过的不打包进去
}
```

### .babelrc 配置

```js
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "67"
        },
        "useBuiltIns": "usage" // 对于@babel-polyfill 只打包使用到的兼容代码，例如在项目中使用了Promise，那么是打包了Promise的polyfill 代码,并且不需要在项目中显式引入@babel-polyfill
      }
    ],
    "@babel/preset-react"
  ]
}
```
