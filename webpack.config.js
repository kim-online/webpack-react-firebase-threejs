const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
//Tell where the src is.
const srcDir = resolve(__dirname, 'src')

module.exports = {
	//Entry point.
	entry: `${srcDir}/index.js`,
	//Output where bundle ends up.
	output: {
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [{
			//Do this before compiling.
			enforce: 'pre',
			//In all .js files.
			test: /\.js$/,
			//Use standard-loader
			loader: 'standard-loader',
			//But not in node modules.
			exclude: /node_modules/
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
      	presets: ['env']
      }
    }, {
    	//Style tags from Javascripted css.
    	test: /\.css$/,
    	use: [{
        loader: 'style-loader'
      }, {
      	//Css-> Javascript.
        loader: 'css-loader',
        options: {
          modules: true,
          //Gives class an easier name than Reacts usual. With unique hash.
          localIdentName: '[name]-[local]-[hash:base64:6]',
          //Makes it easier use css tags in Javascript.
          camelCase: true
        }
      }]
		}]
	},
	plugins: [
		//Creates index.html file from index.js.
		new HtmlWebpackPlugin({
			template: `${srcDir}/index.html`
		}),
		//Webpack-dashboard.
		new DashboardPlugin() 
	]
}
