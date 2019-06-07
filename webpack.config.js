const merge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const parts = require("./webpack.parts")

const baseConfig = merge([{
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack Demo"
            }),
        ],
    },
    parts.loadCSS()
])

const productionConfig = merge([])

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        part: process.env.PORT,
    }),
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