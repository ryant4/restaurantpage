const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        initialload: './src/initialload.js',
        about: './src/about.js',
        menu: './src/menu.js',
        contact: './src/contact.js',

    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // I DONT KNOW WHAT THIS IS BUT IT RESOLVES THE WARNING
    mode: 'production',
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }, 
            {
                test: /\.(jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
};