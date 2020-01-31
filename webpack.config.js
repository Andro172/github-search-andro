const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');

const config = () => {
  // call dotenv and it will return an Object with a parsed key 
  const env = dotenv.config().parsed;
  
  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index.jsx'
    ],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    devServer: {
      contentBase: './public',
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  }
};

module.exports = config;