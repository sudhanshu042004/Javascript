const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: './src/Dom.js',
        index: './src/index.js',
        home:'./src/HomeTAb.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './src',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'), // Path to your HTML template
            filename: 'index.html', // Output filename (inside the "dist" directory)
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    }
};