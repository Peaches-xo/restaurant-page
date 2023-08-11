const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
          test: /\.(woff|woff|eot|ttf|otf)$/i,
          type: 'asset/resource',
        }
    ],
  },
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  entry: './src/index.js',
//   entry: {
// 	  index: './src/index.js',
// 	  print: './src/print.js',
//  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'The Stardrop Saloon',
      favicon: 'src/chickenfavicon.png',
    }),
  ],
  output: {
    //filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    //publicPath: '/',
  },
}; 