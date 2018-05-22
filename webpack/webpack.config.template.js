const path = require('path');
const {getWebpackBaseConfig} = require("./webpack.base.config");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const baseConfig = getWebpackBaseConfig({
    themePath: path.resolve("theme", "index.js")
});

const config = {
    ...baseConfig,
    plugins: [
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;
