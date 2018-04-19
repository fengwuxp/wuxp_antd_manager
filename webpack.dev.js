const webpack = require('webpack');
const config = require("./webpack.config");
const path = require("path");
const host = require('quick-local-ip').getLocalIP4();
const port = '9091';

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            API_ROOT: JSON.stringify(`${host}:8088`),
            BASE_NAME: JSON.stringify("/")
        }
    })
);
const public = `${host}:${port}`;

config.devServer = {
    contentBase: path.join(__dirname, ''),
    compress: true,
    host: host,
    port,    //设置端口号
    public,

    publicPath: '/',
    proxy: {
        '/api': {
            target: `http://${host}:9899/react/`,
            pathRewrite: {'^/api': '/'},
            changeOrigin: true
        }
    },
    //如果你的应用使用HTML5 history API，
    //你可能需要使用index.html响应404或者问题请求，只需要设置g historyApiFallback: true即可
    historyApiFallback: true,
    // before(app) {
    //     app.use(function (req, res, next) {
    //         let url = req.url.trim();
    //         console.log(`发起请求->${url}`);
    //         if (url.split(".")[1].trim() === 0 && url.indexOf("/api/") < 0) {
    //             req.url = public;
    //             console.log(`重定向到首页->${req.url}`);
    //         }
    //         next();
    //     });
    // },
};

module.exports = config;
