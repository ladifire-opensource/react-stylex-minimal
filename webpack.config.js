const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const StylexPlugin = require("@ladifire-opensource/stylex-webpack-plugin");
const ExtractTextPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash:11].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                    {
                        loader: StylexPlugin.loader,
                        options: {
                            inject: false
                        },
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: ExtractTextPlugin.loader,
                    },
                    {
                        loader: "css-loader"
                    }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new StylexPlugin(),
        new ExtractTextPlugin({
            filename: "[name].[contenthash:11].css"
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "src": path.resolve(__dirname, "src")
        },
    }
};
