const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //引入

module.exports = {
  entry: {
    main: path.join(__dirname, './src/js-test/index.js'),
    sub: path.join(__dirname, './src/js-test/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join('./src/js-test/index.html')  
    })
  ]
}