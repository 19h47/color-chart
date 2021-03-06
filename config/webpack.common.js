/**
 *
 * @file webpack.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (http://19h47.fr)
 */

// Node modules
const path = require('path');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		dist: resolve('src/index.js'),
		example: resolve('src/index.js')
	},
	output: {
		library: 'ColorChart',
		libraryTarget: 'umd',
		filename: '../[name]/main.js'
	},
	devServer: {
		contentBase: resolve('/'),
		compress: true,
		port: 9000,
		inline: true,
		disableHostCheck: true
	},
	resolve: {
		alias: {
			'@': resolve('src'),
		}
	},
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'eslint-loader'
		},
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}],
	},
	plugins: [
		new CleanWebpackPlugin(['dist', 'example'], {
			root: resolve(''),
			exclude: ['.git']
		}),
		new HtmlWebpackPlugin({
			filename: resolve('example/index.html'),
			template: resolve('index.html'),
			inject: false,
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true
		}),
	],
};
