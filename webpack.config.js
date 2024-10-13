const { watch } = require('fs');
const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
module.exports = {
  entry: './src/index.js',  // Un fichier d'entrée unique
  output: {
    filename: 'bundle.js',  // Un seul fichier de sortie
    path: path.resolve(__dirname, './public/dist')
  },
  mode: 'development',
  watch: 'true',
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert"),
      "buffer": require.resolve("buffer"),
      "util": require.resolve("util"),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "vm": require.resolve("vm-browserify"),
      "process": require.resolve("process/browser"),
      "fs": false
    }
  },
  plugins: [
    // Ces variables globales sont nécessaires pour certains polyfills
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }), 
    new Dotenv()
  ]
};
