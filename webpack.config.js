const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: './js/app.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
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
        })
    ],
}
