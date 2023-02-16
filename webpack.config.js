const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // I DONT KNOW WHAT THIS IS BUT IT RESOLVES THE WARNING
    mode: 'development',
};