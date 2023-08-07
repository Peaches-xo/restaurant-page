const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
//   entry: {
// 	  index: './src/index.js',
// 	  print: './src/print.js',
//  },
  output: {
    filename: 'main.js',
    //filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}; 