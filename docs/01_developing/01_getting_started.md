# Developing

## Create Project

```shell
mkdir codes
cd codes
```

## Init npm Environment

```shell
npm init -y
```

## Setup `package.json` Private

```json
{
    ...
    "private": true,
    ...
}
```

## Install Webpack

```shell
npm add -D webpack webpack-cli
```

## Executing Webpack

### Command

```shell
.\node_modules\.bin\webpack
```

### Result

```shell

Insufficient number of arguments or no entry found.
Alternatively, run 'webpack(-cli) --help' for usage info.

Hash: d6e721d415a6ffc19ad5
Version: webpack 4.33.0
Time: 76ms
Built at: 06/05/2019 8:15:37 PM

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

ERROR in Entry module not found: Error: Can't resolve './src' in 'C:\projects\webpack\tutorials\tutorial005'
```

## Bug Fixing

### Create Default JavaScript File

```shell
mkdir src
cd src
touch index.js
cd ..
```

### Edit `src/index.js`

```javascript
console.log('Hello World')
```

## Executing Webpack

### Command

```shell
.\node_modules\.bin\webpack
```

### Results

```shell
Hash: 6377f50ced96662666eb
Version: webpack 4.33.0
Time: 687ms
Built at: 06/05/2019 8:22:20 PM
  Asset       Size  Chunks             Chunk Names
main.js  956 bytes       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 26 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
