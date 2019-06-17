const webpack = require('webpack');

const paths = require('./paths');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: paths.outputDir,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        // vendor css rule
        test: /node_modules\/.*\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        // css modules rule
        test: /\.scss/,
        // loaders are executed from right to left (bottom-to-top)
        exclude: /node_modules/,
        use: [
          // 3. creates style nodes from JS strings; outputs CSS into <style> tags
          'style-loader',
          {
            // 2. translates CSS into CommonJS; parses the CSS into JavaScript and resolves any dependencies.
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          },
          // 1. compiles Sass to CSS, using Node Sass by default
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: paths.imagesDir
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: paths.outputPath,
    // enable gzip compression for everything served
    compress: true,
    // enable Hot Module Replacement (HMR) feature
    hot: true
  },
  plugins: [
    // HMR allows all kinds of modules to be updated at runtime without the need for a full refresh
    new webpack.HotModuleReplacementPlugin(),
  ],
  // lighter weight source map for dev - more efficient to use inline since webpack will have less file to resolve and read
  devtool: 'inline-source-map'
};
