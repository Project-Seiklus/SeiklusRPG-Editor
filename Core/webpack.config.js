const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'wwwroot', 'src', '/Main.ts'),
    output: {
        filename: 'seiklus-core.js',
        path: path.join(__dirname, 'wwwroot', 'js')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: 'source-map'
};