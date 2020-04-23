const path = require('path');

module.exports = {
    devtool: '#source-map',
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, '../'),
        filename: 'component.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0'],
                    }
                }
            },
        ]
    }
};