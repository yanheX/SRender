const path = require('path');

module.exports = {
    entry: './src/chart3d.js',
    output: {
        filename: 'chart3d.bundle.js'
        , path: path.resolve(__dirname, 'dist')
    }
}