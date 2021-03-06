var path = require("path");
var webpack = require('webpack');

module.exports = {
 entry: [
   'webpack-dev-server/client?http://localhost:8080',
   'webpack/hot/only-dev-server',
   './src/index.jsx'
 ],
 module: {
   loaders: [{
     test: /\.jsx?$/,
     exclude: /node-modules/,
     include: path.join(__dirname, "src"),
     loader: ['babel-loader'],
       query: {
           presets: ['es2015', 'react']
       }
   }]
 },
 resolve: {
   extensions: ['', '.js', '.jsx']
 },
 output: {
   path: __dirname + '/dist',
   publicPath: '/',
   filename: 'bundle.js'
 },
 devServer: {
  contentBase: './dist',
   hot: true
 },
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
};
