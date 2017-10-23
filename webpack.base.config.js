const webpack = require('webpack')
const path = require('path')

const rootPath = path.resolve(__dirname)
const ROOT_PATH = path.resolve(__dirname)
// const HtmlwebpackPlugin = require('html-webpack-plugin')

const config = {
    entry: path.resolve(__dirname, 'src/app.js'),

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            _containers: path.join(rootPath, './src/containers'),
            _util: path.join(rootPath, './src/util')
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     enforce: 'pre',
            //     loader: 'eslint-loader',
            //     exclude: /node_modules/,
            //     options: {
            //         emitWarning: true,
            //         emitError: false,
            //         // failOnWarning: false,
            //         // failOnError: true,
            //         useEslintrc: false,
            //         configFile: path.join(__dirname, '.eslintrc')
            //     }
            // }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }, {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            // {
            //     test: /\.less$/,
            //     exclude: [
            //         path.resolve(__dirname, 'src/styles'),
            //         path.resolve(__dirname, 'node_modules')
            //     ],
            //     loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]!less-loader?sourceMap=true'
            // },
            {
                test: /\.less$/,
                // include: [
                //     path.resolve(__dirname, 'src/styles'),
                //     path.resolve(__dirname, 'node_modules')
                // ],
                loader: 'style-loader!css-loader!less-loader?sourceMap=true'
            }
        ],
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(ROOT_PATH, 'manifest.json')),
            context: ROOT_PATH,
        })
    ]
}

module.exports = config
