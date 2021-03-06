const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: './js/app.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        hot: true,
        open: true,
    },

    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: [/node_modules/],
              use: [{
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015', 'stage-3'] },
              }],
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Shopping list',
            template: 'index.ejs',
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'favicons',
                to: 'favicons'
            },
        ]),
        new CopyWebpackPlugin([
            {
                from: 'sw.js',
            },
        ]),
    ],
}
