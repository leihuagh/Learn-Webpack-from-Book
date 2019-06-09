# Autoprefixing

## Install Packages

```shell
npm add -D postcss-loader autoprefixer
```

## Configuration

`webpack.parts.js`

```javascript
exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => [require('autoprefixer')()]
  }
})
```

`webpack.config.js`

```shell
const productionConfig = merge([
    parts.extractCSS({
        use: ["css-loader", parts.autoprefix()],
    }),
    parts.purifyCSS({
        paths: glob.sync(`${PATHS.app}/**/*.js`, {
            nodir: true
        }),
    }),
])
```

## Add Styling

`src/main.css`

```css
.pure-button {
  border-radius: 1em;
  -webkit-border-radius: 1em;
  -moz-border-radius: 1em;
  -ms-border-radius: 1em;
  -o-border-radius: 1em;
}
```

## Setup `.browserslistrc`

```shell
touch .browserslistrc
```

`.browserslistrc`

```text
> 1% # Browser usage over 1%
Last 2 versions # Or last two versions
IE 8 # Or IE 8
```

## Executing Webpack on Production

```shell
npm run build
```
