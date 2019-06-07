const HtmlWebpackPlugin = require("html-webpack-plugin")

const webpackConfig = {
    devServer: {
        stats: "errors-only",
        host: process.env.HOST, // Default to `localhost`
        port: process.env.PORT, // Default to 8080
        open: true,
        overlay: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack Demo"
        })
    ]
}

module.exports = webpackConfig