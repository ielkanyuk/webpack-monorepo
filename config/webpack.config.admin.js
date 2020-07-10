const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './admin/src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        port: 4300
    },
    plugins: [
        new HTMLPlugin({
            template: './admin/src/index.html'
        })
    ]
};