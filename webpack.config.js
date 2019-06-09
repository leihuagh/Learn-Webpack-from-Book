const path = require("path")
const glob = require("glob")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const parts = require("./webpack.parts")
const PATHS = {
    app: path.join(__dirname, "src")
}

const baseConfig = merge([{
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack Demo"
            }),
        ],
    },
    // parts.loadCSS()
])

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

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        part: process.env.PORT,
    }),
    parts.loadCSS()
])

module.exports = mode => {
    if (mode === "production") {
        return merge(baseConfig, productionConfig, {
            mode
        })
    }

    return merge(baseConfig, developmentConfig, {
        mode
    })
}