

module.exports= ({resource}) => ({
    loader: 'css-loader',
    options: {
        minimize: true,
        importLoaders: 1,
        modules: /\.module\.less/.test(resource),
        localIdentName: '[name]__[local]___[hash:base64:5]',
    }
})
