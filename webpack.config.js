const webpack = require('webpack')
const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const rootPath = path.resolve(__dirname)
const ROOT_PATH = path.resolve(__dirname)

const devConfig = merge(baseConfig, {
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(ROOT_PATH, 'manifest.json')),
            context: ROOT_PATH,
        }),
        new HtmlwebpackPlugin({
            title: 'react-webpack-demo',
            filename: 'index.html',
            template: path.resolve(ROOT_PATH, 'dist', 'index.html')
        })
    ] 
})

module.exports = devConfig
