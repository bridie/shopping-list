const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, './src'),

    entry: './js/app.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Shopping list',
            template: 'index.ejs',
        })
    ],
}
