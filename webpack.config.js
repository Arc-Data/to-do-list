const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: '[name][ext]',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
	],
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port: 3000,
		open: true,
		hot: false,
		liveReload:true,
		compress: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jepg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};