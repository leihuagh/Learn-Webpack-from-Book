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