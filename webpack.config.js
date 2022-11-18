/* eslint @typescript-eslint/no-var-requires: "off" */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');

// TODO: split out this file into a common webpack with a dev and prod variant for building separate builds
module.exports = () => {
  const envKeys = {
    'process.env.GITHUB_ACCESS_TOKEN': process.env.GITHUB_ACCESS_TOKEN,
  };

  return {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
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
  };
};
