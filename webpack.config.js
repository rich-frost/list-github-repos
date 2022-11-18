/* eslint @typescript-eslint/no-var-requires: "off" */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const dotenv = require('dotenv');
// TODO Add config variant to analyze bundle size with BundleAnalyzerPlugin

// TODO: split out this file into a common webpack with a dev and prod variant for building separate builds
module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  let envKeys = {};
  if (isProduction) {
    envKeys = {
      'process.env.GITHUB_ACCESS_TOKEN': process.env.GITHUB_ACCESS_TOKEN,
    };
  } else {
    const env = dotenv.config().parsed;
    envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});
  }

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.tsx',
    devtool: isProduction ? false : 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
        },
        {
          test: /\.(js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        fileName: './index.html',
      }),
      new DefinePlugin(envKeys),
    ],
    devServer: {
      hot: true,
    },
  };
};
