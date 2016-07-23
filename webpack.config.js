var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	entry: './src/App.js',
	output: {
		path: __dirname,
		filename: 'app.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react'],
			}
		}]
	},
	plugins: [
			    new BrowserSyncPlugin({
			      // browse to http://localhost:3000/ during development, 
			      // ./public directory is being served 
			      host: 'localhost',
			      port: 3000,
			      server: { baseDir: ['./'] }
			    })
			  ]
};