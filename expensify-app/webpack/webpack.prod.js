const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const paths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${paths.jsDir}/[name].[hash].js`,
    path: paths.outputPath,
    chunkFilename: `${paths.jsDir}/[name].[chunkhash].js`,
  },
  optimization: {
    // override the default minimizer by providing different one or more customized TerserPlugin instances.
    minimizer: [
      // TerserPlugin plugin uses terser to minify JavaScript
      new TerserPlugin({
        // use multi-process parallel running to improve the build speed
        parallel: true,
        // enable file caching
        cache: true,
        // use source maps to map error message locations to modules
        sourceMap: true,
      }),
      // search for CSS assets during Webpack build and optimize \ minimize CSS
      new OptimizeCSSAssetsPlugin(),
    ],
    // Automatically split vendor and commons
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    // Keep the runtime chunk separated to enable long term caching
    runtimeChunk: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            // minify HTML
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /node_modules\/.*\.css$/,
        use: [
          //  extracts CSS into separate files & creates a CSS file per JS file which contains CSS
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false
            }
          }
        ]
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: [
          //  extracts CSS into separate files & creates a CSS file per JS file which contains CSS
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: true,
              camelCase: true,
              localIdentName: '[local]___[hash:base64:5]',
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: paths.imagesDir
            }
          },
          {
            // Minify PNG, JPEG, GIF, SVG and WEBP images with imagemin
            loader: 'image-webpack-loader',
            options: {
              // mozjpeg: lossy jpg compressor
              mozjpeg: {
                progressive: true,
                quality: 75
              },
              // optipng: enabled by default. Quality > pngquant but compression < pngquant
              optipng: {
                enabled: false
              },
              // lossy png compressor
              pngquant: {
                quality: '75-90',
                speed: 4
              },
              // lossless gif compressor
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // clears dist folder on new build
    new CleanWebpackPlugin(),
    //  extracts CSS into separate files & creates a CSS file per JS file which contains CSS
    new MiniCssExtractPlugin({
      filename: `${paths.cssDir}/[name].[hash].css`,
      chunkFilename: `${paths.cssDir}/[name].[hash].css`
    }),
    // Converts images to the WebP format while also keeping the original files
    new ImageminWebpWebpackPlugin()
  ],
  // full, separated source map for production - will not be served unless requested
  devtool: 'source-map'
};
