const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {existsSync} = require('fs');

const pkgPath = path.join(__dirname, 'package.json');
const pkg = existsSync(pkgPath) ? require(pkgPath) : {};


let theme = {};
if (pkg.theme && typeof(pkg.theme) === 'string') {
    let cfgPath = pkg.theme;
    // relative path
    if (cfgPath.charAt(0) === '.') {
        cfgPath = resolve(args.cwd, cfgPath);
    }
    const getThemeConfig = require(cfgPath);
    theme = getThemeConfig();
} else if (pkg.theme && typeof(pkg.theme) === 'object') {
    theme = pkg.theme;
}

/**
 * 抓取要打包成原生js的tsx文件
 * @param root
 * @param dir
 * @param entry
 * @param outPath
 */
const config = {
    entry: {
        app: path.resolve('src', 'App'),
    },
    output: {
        filename: '[name]_[hash].js',
        chunkFilename: '[name]_[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", "d.ts", ".js", ".css", ".scss", ".less"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['env', 'react', 'flow'],
                            plugins: [
                                'syntax-dynamic-import',
                                'transform-object-rest-spread'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.ts[x]?$/,
                // exclude: isExclude,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            // presets: ['es2015', 'stage-2'],
                            presets: ['env', 'react', 'flow'],
                            plugins: [
                                'syntax-dynamic-import',
                                'transform-object-rest-spread'
                            ]
                        }
                    },
                    {loader: "awesome-typescript-loader"}
                ]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {loader: "css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]"},
                        {loader: "postcss-loader"},
                        {
                            loader: "less-loader",
                            options: {
                                sourceMap: true,
                                modifyVars: JSON.stringify(theme)
                            }
                        }
                    ],
                    // fallback: "style-loader"
                })
            },
            {
                test: /\.s[c|a]ss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]",
                        },
                        // {loader: "postcss-loader"},
                        {loader: "sass-loader"},
                    ],
                    fallback: "style-loader"
                })

            },
            {
                test: /\.(png|jpg|svg)/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 25000
                        }
                    }
                ]
            },
            // {test: /\.svg/, loader: 'svg-url-loader'}
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};

module.exports = config;
