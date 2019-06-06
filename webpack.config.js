const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpackConfig = {
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Demo"
        })
    ]
}

module.exports = webpackConfig