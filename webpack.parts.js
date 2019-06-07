exports.devServer = ({
    host,
    port
} = {}) => ({
    devServer: {
        stats: "errors-only",
        host, // default to `localhost`
        port, // default to `8080`
        open: true,
        overlay: true,
    },
})

exports.loadCSS = ({
    include,
    exclude
} = {}) => ({
    module: {
        rules: [{
            test: /\.css$/,
            include,
            exclude,
            use: ["style-loader", "css-loader"],
        }, ],
    },
})