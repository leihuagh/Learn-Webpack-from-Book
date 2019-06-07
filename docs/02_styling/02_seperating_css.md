# Separating CSS

## Install `mini-css-extract-plugin`

```shell
npm add -D mini-css-extract-plugin
```

## Configuration

`webpack.parts.js`

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.extractCSS = ({ include, exclude, use = [] }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: '[name].css'
  })

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: [MiniCssExtractPlugin.loader].concat(use)
        }
      ]
    },
    plugins: [plugin]
  }
}
```

## Modify `webpack.config.js`

`webpack.config.js`

```javascript
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const parts = require('./webpack.parts')

const baseConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack Demo'
      })
    ]
  }
  // parts.loadCSS()
])

const productionConfig = merge([
  parts.extractCSS({
    use: 'css-loader'
  })
])

const developmentConfig = merge([
  parts.devServer({
    host: process.env.HOST,
    part: process.env.PORT
  }),
  parts.loadCSS()
])

module.exports = mode => {
  if (mode === 'production') {
    return merge(baseConfig, productionConfig, {
      mode
    })
  }

  return merge(baseConfig, developmentConfig, {
    mode
  })
}
```

## Executing Webpack

### Run Production

```shell
npm run build

> tutorial005@1.0.0 build C:\projects\webpack\tutorials\tutorial005 > webpack --end production

Hash: 689c2d57d195376487ff
Version: webpack 4.33.0
Time: 2341ms
Built at: 06/07/2019 6:23:28 PM
     Asset       Size  Chunks             Chunk Names
index.html  181 bytes          [emitted]
   main.js   6.88 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/main.css 1.05 KiB {0} [built]
[1] ./node_modules/css-loader/dist/cjs.js!./src/main.css 179 bytes {0} [built]
[5] ./src/index.js + 1 modules 260 bytes {0} [built]
    | ./src/index.js 109 bytes [built]
    | ./src/component.js 146 bytes [built]
    + 3 hidden modules

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [2] (webpack)/buildin/global.js 472 bytes {0} [built]
    [3] (webpack)/buildin/module.js 497 bytes {0} [built]
        + 2 hidden modules
```

### Run Development

```shell
npm start

> tutorial005@1.0.0 start C:\projects\webpack\tutorials\tutorial005 > webpack-dev-server --env development

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\projects\webpack\tutorials\tutorial005
i ｢wdm｣: wait until bundle finished: /
i ｢wdm｣:
i ｢wdm｣: Compiled successfully.
```
