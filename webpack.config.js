var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: __dirname+'/dist/js',
		filename: 'app.js'
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: './src/html/datakom.html',                 to: __dirname+'/dist/datakom.html' },
			{ from: './src/html/linux.html',                   to: __dirname+'/dist/linux.html' },
			{ from: './src/css/exam-paper.css',                to: __dirname+'/dist/css/exam-paper.css' },
			{ from: './src/css/exam-paper-linux.css',          to: __dirname+'/dist/css/exam-paper-linux.css' },
			{ from: './node_modules/katex/dist/katex.min.css', to: __dirname+'/dist/css/katex.min.css' },
			{ from: './node_modules/katex/dist/fonts',         to: __dirname+'/dist/css/fonts' }
		])
	]
}