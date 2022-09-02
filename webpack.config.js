const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PATHS = {
     src: path.resolve(process.cwd(), "src"),
    dist: path.resolve(process.cwd(), "dist")
  };


const baseConfig = {
    entry: {
        main: `${PATHS.src}/index.ts`,
        aut: `${PATHS.src}/authorization/authorization.ts`,
    },
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
