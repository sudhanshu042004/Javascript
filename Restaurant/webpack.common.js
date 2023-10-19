const path = require('path');


module.exports={
    entry: {
        app: './src/index.js',
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         title: 'Production',
    //     }),
    // ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
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