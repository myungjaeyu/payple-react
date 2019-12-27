const path = require('path')

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'payple-react.js',
        library: 'PaypleReact',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js']
    }
}