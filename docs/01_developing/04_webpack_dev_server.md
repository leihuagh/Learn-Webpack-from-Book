# Webpack Dev Server

## Install `webpack-dev-server`

```shell
npm add -D webpack-dev-server
```

## Setup `webpack-dev-server` Script

`package.json`

```json
{
  "name": "tutorial005",
  "version": "1.0.0",
  "private": true,
  "description": "Learn Webpack",
  "main": "index.js",
  "scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/leihuagh/Learn-Webpack-from-Book.git"
  },
  "keywords": [],
  "author": "Lei Hua",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/leihuagh/Learn-Webpack-from-Book/issues"
  },
  "homepage": "https://github.com/leihuagh/Learn-Webpack-from-Book#readme",
  "devDependencies": {
    "webpack": "^4.33.0",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.7.0"
  }
}
```

## Executing Webpack

```shell
npm start
```

## Configure WDS

`webpack.config.js`

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST, // Default to `localhost`
    port: process.env.PORT, // Default to 8080
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Demo'
    })
  ]
}

module.exports = webpackConfig
```

## Executing Webpack

```shell
npm start

> tutorial005@1.0.0 start C:\projects\webpack\tutorials\tutorial005 > webpack-dev-server --mode development

i ｢wds｣: Project is running at http://localhost:8080/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\projects\webpack\tutorials\tutorial005
i ｢wdm｣: wait until bundle finished: /
i ｢wdm｣:
i ｢wdm｣: Compiled successfully.
```
