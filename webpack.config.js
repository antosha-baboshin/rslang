const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack")
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const PATHS = {
     src: path.resolve(process.cwd(), "src"),
    dist: path.resolve(process.cwd(), "dist")
  };


const baseConfig = {
    entry: {
        main: `${PATHS.src}/index.ts`,
        ebook: `${PATHS.src}/components/ebook/ebook.ts`,
        spmain: `${PATHS.src}/components/sprint/spmain.ts`,
        auth: `${PATHS.src}/components/authorization/authorization.ts`,
        spplay: `${PATHS.src}/components/sprint/spplay.ts`,
        spfinal: `${PATHS.src}/components/sprint/spfinal.ts`,
        chmain: `${PATHS.src}/components/challenge/chellmain.ts`,
        chplay: `${PATHS.src}/components/challenge/chellplay.ts`,
        chfinal: `${PATHS.src}/components/challenge/chellfinal.ts`,
        stat: `${PATHS.src}/components/statistic/statistic.ts`,
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
            template: path.resolve(__dirname, './src/components/sprint/sprint-play.html'),
            filename: './sprint/sprint-play.html',
            chunks: ["spplay"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/sprint/sprint-main.html'),
            filename: './sprint/sprint-main.html',
            chunks: ["spmain"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/sprint/sprint-final.html'),
            filename: './sprint/sprint-final.html',
            chunks: ["spfinal"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/challenge/challenge-main.html'),
            filename: './challenge/challenge-main.html',
            chunks: ["chmain"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/challenge/challenge-play.html'),
            filename: './challenge/challenge-play.html',
            chunks: ["chplay"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/challenge/challenge-final.html'),
            filename: './challenge/challenge-final.html',
            chunks: ["chfinal"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/authorization/authorization.html'),
            filename: './authorization/authorization.html',
            chunks: ["auth"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/ebook/ebook.html'),
            filename: './ebook.html',
            chunks: ["ebook"]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/components/statistic/statistic.html'),
            filename: './statistic/statistic.html',
            chunks: ["stat"]
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets/'),
                    to: path.resolve(__dirname, '../dist/rslang/assets/')
                }
            ]
        }),

        new CleanWebpackPlugin(),
        new Dotenv()
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