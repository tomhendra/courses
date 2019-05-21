const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/playground/redux-101.js'],
  output: {
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader'
        ]
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/scripts/',
    historyApiFallback: true
  },
  devtool: 'cheap-module-eval-source-map'
};
