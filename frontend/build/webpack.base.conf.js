const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


const PATHS = {
    app: path.join(__dirname, '../app'),
    dist: path.join(__dirname, '../dist'),
    assets: path.join(__dirname, '../frontend/assets')
}

// Pages const for HtmlWebpackPlugin
// const PAGES_DIR = PATHS.app
// const PAGES_DIR = `${PATHS.app}`
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.js'))


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
                    outputPath: '../frontend/assets/img/',
                        }
            }
        ]
    },
    resolve: {
        alias: {
            '~': PATHS.app,
        }
    },
    plugins : [
        HTMLWebpackPluginConfig,

        new CopyWebpackPlugin({
            patterns: [
                { from: '../frontend/assets/img', to: '../frontend/assets/img' },
                { from: '../frontend/assets/fonts', to: '../frontend/assets/fonts' },
            ]
        }),
        
        // Automatic creation any html
        // ...PAGES.map(page => new HtmlWebpackPlugin({
        //     template: `${PAGES_DIR}/${page}`,
        //     filename: `./${page.replace(/\.js/,'.html')}`
        // }))
    ]
};