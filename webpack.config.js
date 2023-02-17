const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        initialload: './src/initialload.js',
        about: './src/about.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // I DONT KNOW WHAT THIS IS BUT IT RESOLVES THE WARNING
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};