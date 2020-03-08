const path = require("path");
const { resolve } = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const distDir = resolve(process.cwd(), "dist");

const { createTypeStyle } = require("typestyle");
const globalCSS = (() => {
    const ts = createTypeStyle();
    return ts.getStyles();
  })();
const output = {
    path: distDir,
    filename: "[name].js",
    publicPath: "http://localhost:8080/",
    chunkFilename: "[name].[chunkhash].js"
};
module.exports = {
    mode: "development",
    entry: {
        app: "./src/index.tsx"
    },

    optimization: {
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: "~",
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: "vendor"
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/templates/index.html",
            inject: true,
            globalStyle:globalCSS,
            filename: `index.html`
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devServer: {
        publicPath: "http://localhost:8080/",
        contentBase: "./dist",
        hot: true
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                use: ["babel-loader", "ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    output: output,
};
