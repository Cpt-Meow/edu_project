const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PATHS = {
    app: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../dist'),
    assets: path.join(__dirname, '../frontend/assets')
}


const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template :'./index.html',
    filename : 'index.html'
});


module.exports = {
    externals: {
        paths: PATHS
    },

    entry :'./index.js',

    output: {
        filename: `[name].[chunkhash].js`,
        path: PATHS.dist,
        publicPath: '/'
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
            vendor: {
                name: 'vendors',
                test: /node_modules/,
                chunks: 'all',
                enforce: true
                }
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '../frontend/assets/fonts',
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader:  'url-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: '/public',
                        }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    'style-loader',
                    { loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false
                        }
                    },{
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'postcss-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'resolve-url-loader',
                        options: { 
                            sourceMap: true,
                            removeCR: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ]
            }, 
        ]
    },
    resolve: {
        alias: {
            '~': PATHS.app,
        }
    },
    plugins : [
        HTMLWebpackPluginConfig,
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: '../frontend/assets/img', to: '../frontend/assets/img' },
                { from: '../frontend/assets/fonts', to: '../frontend/assets/fonts' },
            ]
        })
    ]
};