const htmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new htmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: 'sass-loader',
                        options: {
                            modules: true,
                            importLoaders: 0,
                            localIdentName: "[name]_[local]_[hash:base64]",
                            sourceMap: true,
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [htmlPlugin]
};