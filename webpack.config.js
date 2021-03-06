var webPack = require('webpack');
var htmlWebPack = require('html-webpack-plugin');
var extractTextWebPackPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var config = {
  entry:{
    'app':'./app/boot.ts',
    'libs':'./deps/libraries.ts',
    'polyfills':'./deps/polyfills.ts' 
  },
  resolve:{
      extensions:['','.ts','.js','css']
  },
  module:{
      loaders:[{
           test:/\.ts$/,
           loaders:['awesome-typescript-loader','angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.css$/,
        exclude: path.resolve('deps', 'app'),
       // loader: extractTextWebPackPlugin.extract('style', 'css?sourceMap')
       loader:"style-loader!css-loader?root=."
      },
       { test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass'] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' }
      ]
  },
 plugins: [
    new webPack.optimize.CommonsChunkPlugin({
      name: ['app', 'libs', 'polyfills']
    }),

    new htmlWebPack({
      template: './index.html'
    }),
    new webPack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    })
  ],
  output: {
    publicPath: 'http://localhost:9091/',
    filename: '[name].js',
  },
};
module.exports = config;