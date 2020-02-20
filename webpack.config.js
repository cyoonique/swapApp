const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './client/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV,
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: path.resolve(__dirname, 'build'),
        hot: true,
        publicPath: '/',
        inline: true
    },
    module: {
        rules: [
          {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /.(css|scss)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          }
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'client/index.html',
        }),
      ],
      resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx'],
      },
}