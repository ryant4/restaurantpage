const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        initialload: './src/initialload.js',
        about: './src/about.js',
        menu: './src/menu.js',
        contact: './src/contact.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    // I DONT KNOW WHAT THIS IS BUT IT RESOLVES THE WARNING
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, 
            {
                test: /\.(jpg|jpeg|png)$/i,
                type: 'asset/resource',
            },
        ],
    },
};