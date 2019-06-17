const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const paths = require('./paths');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env/.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env/.env.dev' });
}

module.exports = {
  entry: paths.entryPath,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: paths.fontsDir,
            }
          }
        ]
      }
    ]
  },
  // specifies where webpack looks for files & which extensions
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    // output progress of webpack compilation in terminal
    new webpack.ProgressPlugin(),
    // generates html file from template (or automatically from JS)
    new HtmlWebpackPlugin({
      template: paths.templatePath,
      inject: 'head'
    }),
    // modifying script loading order can lead to faster page load time by avoiding render-blocking requests. 
    new ScriptExtHtmlWebpackPlugin({
      // async and defer load in parallel with HTML parsing. Async scripts will execute immediately after their load is complete, while deferred scripts will wait for the HTML parsing to complete then be executed in their respective order.
      defaultAttribute: 'async',
    }),
    // define firebase auth with environmental variables using process.env
    new webpack.DefinePlugin({
      'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
      'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
      'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      'process.env.FIREBASE_MESSAGING_SENDER': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER),
      'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
    })
  ]
};
