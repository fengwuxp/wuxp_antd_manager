const webpack = require('webpack');
const baseConfig = require("./webpack/webpack.base.config");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/**
 * 抓取要打包成原生js的tsx文件
 * @param root
 * @param dir
 * @param entry
 * @param outPath
 */
const config = {
    ...baseConfig,
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: "index.html",
            title: "react App",
            chunks: ['app'],
            inject: true,
        }),
        new ExtractTextPlugin('styles.css'),
    ]
};

module.exports = config;
