var webpack = require('webpack')
var path = require('path')

var config = {
	entry:path.resolve(__dirname, 'src/app.js'),

	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'index.bundle.js',
		publicPath: '/'
	},
	devtool:'source-map',
	
	module:{
		loaders: [{
            test: /.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react',"stage-0"],
                plugins: [
                    "transform-object-rest-spread",
                    "transform-decorators-legacy"
                ]
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
       ]
	},
}

module.exports = config