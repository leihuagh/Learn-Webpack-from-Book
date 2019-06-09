# Enabling PurifyCSS

## Install Packages

```shell
npm add -D glob purifycss-webpack purify-css
```

## Configuration

`webpack.parts.js`

```javascript
const PurifyCSSPlugin = require('purifycss-webpack')

exports.purifyCSS = ({ paths }) => ({
  plugins: [new PurifyCSSPlugin({ paths })]
})
```

## Executing Webpack on Production Mode

```shell
npm run build

> tutorial005@1.0.0 build C:\projects\webpack\tutorials\tutorial005 > webpack --env production

(node:8540) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
Hash: 7cadcb6039ed9606d600
Version: webpack 4.33.0
Time: 2914ms
Built at: 06/08/2019 11:15:18 PM
     Asset       Size  Chunks             Chunk Names
index.html  220 bytes          [emitted]
  main.css   2.07 KiB       0  [emitted]  main
   main.js   1.12 KiB       0  [emitted]  main
Entrypoint main = main.css main.js
[1] ./src/main.css 39 bytes {0} [built]
[2] ./src/index.js + 1 modules 322 bytes {0} [built]
    | ./src/index.js 127 bytes [built]
    | ./src/component.js 185 bytes [built]
    + 3 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!node_modules/purecss/build/pure-min.css:
    Entrypoint mini-css-extract-plugin = *
       2 modules
Child mini-css-extract-plugin node_modules/css-loader/dist/cjs.js!src/main.css:
    Entrypoint mini-css-extract-plugin = *
    [0] ./node_modules/css-loader/dist/cjs.js!./src/main.css 179 bytes {0} [built]
        + 1 hidden module
```
