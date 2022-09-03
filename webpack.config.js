const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                 use: [
                    {
                        loader:'style-loader'
                    }, 
                    {
                        loader: 'css-loader',

                    }

                 ]

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
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist/rslang'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
           chunks: ["main"]
            
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/authorization/authorization.html'),
            filename: './authorization/authorization.html',
            chunks: ["aut"]
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
    optimization: {
        splitChunks: {
          chunks: "all",
          minSize: 1,
          minChunks: 2
        }
      }
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};

