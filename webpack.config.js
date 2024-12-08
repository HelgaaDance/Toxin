const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
  },

  plugins: [
    new PugPlugin({
      entry: 'src/pages/',
    })
  ],

  entry: './src/pages/main.js', // Основной файл JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js', // Имя скомпилированного файла
  },

  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader']
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};