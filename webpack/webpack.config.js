const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/public/js'),
        publicPath: '/js/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'}
        }, {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }
            ]
        },]
    },
};
