# Setup Up Assets

## Create a New File

```shell
cd src
touch component.js
cd ..
```

## Fill-in `src/component.js`

```javascript
export default (text = 'Hello World') => {
  const element = document.createElement('div')
  element.innerHTML = text
  return element
}
```

## Using Component

`src/index.js`

```javascript
import component from './component'
document.body.appendChild(component('Hello Lei'))
```

## Executing Webpack

### Command

```shell
.\node_modules\.bin\webpack --mode development
```

### Results

```shell
Hash: 9e6edbb787ce7f41411e
Version: webpack 4.33.0
Time: 168ms
Built at: 06/05/2019 8:48:43 PM
  Asset      Size  Chunks             Chunk Names
main.js  4.64 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/component.js] 146 bytes {main} [built]
[./src/index.js] 88 bytes {main} [built]
```

## Executing With Source Map

### Command

```shell
.\node_modules\.bin\webpack --devtool false --mode none
```

### Result

```shell
Hash: e64881101b7e8beeb118
Version: webpack 4.33.0
Time: 150ms
Built at: 06/05/2019 8:50:39 PM
  Asset      Size  Chunks             Chunk Names
main.js  4.19 KiB       0  [emitted]  main
Entrypoint main = main.js
[0] ./src/index.js 88 bytes {0} [built]
[1] ./src/component.js 146 bytes {0} [built]
```
