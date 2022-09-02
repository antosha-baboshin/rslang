const path = require('path');
const webpack = require("webpack")
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const baseConfig = {
    entry: path.resolve(__dirname, './index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ts$/i,
                use: ['ts-loader'],
            },      
            {
                test: /\.(png|jpg|gif|svg|jpeg|ico)$/i,
                type: 'asset/resource',
                use: ['file-loader'],
                // options: {
                //   name: '[name].[ext]',
                // },
              },
              {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    output: {
          filename: 'index.js',
        path: path.resolve(__dirname, '../dist/rslang'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/authorization.html'),
            filename: './src/authorization.html',
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
              {
              from: path.resolve(__dirname, './src/assets/'),
              to: path.resolve(__dirname, '../dist/rslang/src/assets/'),
              },
            //   '_redirects',
            ],
            })
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};

