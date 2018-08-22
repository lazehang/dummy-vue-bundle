var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Naming and path settings
var appName = 'bundle';
var entryPoint = './src/main.js';
var exportPath = path.resolve(__dirname, 'dist');

// Enviroment flag
var plugins = [];
var env = process.env.WEBPACK_ENV || process.env.NODE_ENV;

// Differ settings based on production flag
if (env === 'production') {
  var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

  plugins.push(new UglifyJsPlugin({ minimize: true }));
  plugins.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }
  ));

  appName = appName + '.min.js';
} else {
  appName = appName + '.js';
}

// Main Settings config
module.exports = {
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: appName
  },
  devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
          test: /\.ttf$/,
          loader: 'url-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{
            loader: 'url-loader',
            options: { 
                limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[hash]-[name].[ext]'
            } 
        }]
      },
      {
        test: /\.css$/,
        use: [
            {
            loader: 'style-loader'
            }, 
            {
            loader: 'css-loader'
            }
        ]
      },
      {
        test: /\.(scss|less)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
      
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'DEV'
      }),
      new webpack.HotModuleReplacementPlugin()
  ]
};