const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';
  console.log('env:', env);
  return {
    entry: ['@babel/polyfill', './src/app.js'],
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
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map'
  };
};
