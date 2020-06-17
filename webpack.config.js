const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'), 
        publicPath: 'dist/'
        // publicPath: 'https://themostawesomewebsite.com/'
    },
    mode: 'none',

    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: ['file-loader'],
        }, 
        // {
        //     test: /\.(xml)*/,
        //     use: ['xml-loader']
        // }
        ]
    }
}