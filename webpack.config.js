var webpack = require('webpack');
var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

// Naming and path settings
var appName = 'bundle';
var entryPoint = './src/main.js';
var exportPath = path.resolve(__dirname, '../web/js/undone');

// Enviroment flag
var plugins = [];
var env = process.env.WEBPACK_MODE || process.env.WEBPACK_ENV || process.env.NODE_ENV;

// Differ settings based on production flag
if (env === 'production') {
  console.log("production")
  
} else {
  console.log("dev")
}

// Main Settings config
module.exports = (env, argv) => ({
  entry: entryPoint,
  output: {
    path: exportPath,
    filename: argv.mode === "production" ? appName + '.min.js' : appName + ".js"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  optimization: {
    minimize: argv.mode === "production",
    minimizer: 
      argv.mode === "production" ?
      [
        new UglifyJsPlugin({ 
          test: /\min.js($|\?)/i
        })
       ] : []
    
  },
  module: {
    rules: [
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
          test: /\.(ttf|otf)$/,
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
    new VueLoaderPlugin(),
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'DEV'
      }),
      new webpack.HotModuleReplacementPlugin()
  ]
});