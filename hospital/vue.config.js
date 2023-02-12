let proxyObj = {}

proxyObj['/'] = {
    //websocket
    ws: false,
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathReWriter: {
        '^/': '/'
    }

}


module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    },
    lintOnSave: false
}