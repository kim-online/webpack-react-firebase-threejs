const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
//Tell where the src is.

module.exports = {
	context: resolve(__dirname, 'src'),
	//Entry point.
	entry: {
    app: `./index.js`,
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom', 'firebase']
	},
	//Output where bundle ends up.
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash:6].js',
		publicPath: '/'
	},
	module: {
		rules: [{
		  test: /\.js$/,
		  loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
        presets: ['env']
      }
    }, {
    	//Style tags from Javascripted css.
    	test: /\.css$/,
    	use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
		}]
	},
	plugins: [
		//Cleans, (deletes all the files in the dist folder), everytime you build.
		new CleanWebpackPlugin(['dist'], {
      root: resolve(__dirname, './')
    }),
    //Puts all the style/css loaders and code into styles file
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:6].css', 
      allChunks: true
    }),
		//Creates index.html file from index.js.
		new HtmlWebpackPlugin({
			filename: 'index.html',
      template: `./index.html`
		}),
		//All the main programs in a vendor file instead of in our app
		new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
	]
}
