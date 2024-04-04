import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env, argv) => {
  /** @type {import('webpack').Configuration} */

  return ({             // eslint-disable-line
    mode: argv.mode === 'development' ? 'development' : 'production',
    target: ['web'],
    entry: path.join(__dirname, 'src/js/index.tsx'),
    output: {
      clean: true,
      path: path.join(__dirname, 'dist'),
      filename: 'js/bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.join(__dirname, './src/'),
      },
    },
    devtool:
      argv.mode === 'development' ? 'inline-source-map' : 'hidden-source-map',
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: ['/node_modules'],
          use: { loader: 'babel-loader' },
        },
        {
          test: /\.s?css$/,
          exclude: ['/node_modules'],
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName:
                    argv.mode === 'development'
                      ? '[hash:4]:[local]'
                      : '[hash:base64]',
                },
              },
            },
            'postcss-loader',
            'resolve-url-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      env.WEBPACK_SERVE &&
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src/html/index.html'),
          filename: 'index.html',
          inject: 'body',
        }),
      env.WEBPACK_SERVE &&
        new HtmlWebpackPlugin({
          template: path.join(__dirname, 'src/html/404.html'),
          filename: '404.html',
          inject: 'body',
        }),
      new MiniCssExtractPlugin({
        filename: 'css/bundle.css',
      }),
    ].filter(Boolean),
    devServer: {
      historyApiFallback: {
        rewrites: [
          { from: /^\/$/, to: '/index.html' },
          // { from: /^\/list/, to: '/index.html' },
          // { from: /./, to: '/404.html' },
        ],
      },
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      devMiddleware: {
        writeToDisk: (filePath) => {
          return !filePath.match(/\.hot-update\./);
        },
      },
      compress: true,
      port: 3000,
    },
  });                   // eslint-disable-line
};
