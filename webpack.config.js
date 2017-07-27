var webpack = require('webpack')
var path = require('path')
var rootPath = path.resolve(__dirname)

var config = {
    entry: path.resolve(__dirname, 'src/app.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    emitError: false,
                    //failOnWarning: false,
                    //failOnError: true,
                    useEslintrc: false,
                    configFile: path.join(__dirname, ".eslintrc")
                }
            },{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', "stage-0"],
                    plugins: [
                        "transform-object-rest-spread",
                        "transform-decorators-legacy", ["import", {
                            "libraryName": "antd",
                            "style": true
                        }]
                    ]
                }
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            }, {
                test: /\.less$/,
                exclude: [
                    path.resolve(__dirname, 'src/styles'),
                    path.resolve(__dirname, 'node_modules')
                ],
                loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]!less-loader?sourceMap=true'
            }, {
                test: /\.less$/,
                include: [path.resolve(__dirname, 'src/styles'),
                    path.resolve(__dirname, 'node_modules')],
                loader: 'style-loader!css-loader!less-loader?sourceMap=true'
            }
        ],     
    },
    resolve: {
        alias: {
            '_rxdb': path.join(rootPath, "./src/rxdb"),
            '_containers': path.join(rootPath, "./src/containers")
        }
    },
    // eslint: {
    //     configFile: './.eslintrc'
    // },
    devServer: {
        //host: 'localhost',
        //port: 6666,
        historyApiFallback: true
    },
    /*  plugins: [
     new webpack.DllReferencePlugin({
     context: __dirname,
     manifest: require('./manifest.json'),
     }),
     ],*/
}

module.exports = config