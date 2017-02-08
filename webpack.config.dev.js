var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModulesPath = path.join(__dirname, './node_modules');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            './app/index.js'
        ],
        vendors: ['react', 'react-dom'],
    },
    
    output:{
        //path.resolve和path.join用法有不同； __dirname代表程序运行的根目录
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].js',
        publicPath: './dist/',
    },
    module:{
        // // webpack1.0 的写法
        // loaders: [{
        //     test: /\.jsx?$/,
        //     include: [
        //         path.resolve(__dirname, "app")
        //     ],
        //     exclude: /node_modules/,
        //     loaders: 'babel-loader',
        // }]

        // webpack 2.0 的不同于1.0的配置，还没有研究出来怎么使用
        rules:[
            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "app")
                ],
                exclude: /node_modules/,
                // issuer: { test, include, exclude },
                loader: "babel-loader",
            },
           
            { oneOf: [ /* rules */ ] },
            { rules: [ /* rules */ ] }
        ],
    },

    resolve:{
        extensions: [".js", ".jsx", "scss", ".css"],
        alias: {
            'react': path.join(nodeModulesPath, '/react/dist/react'),
            'react-dom': path.join(nodeModulesPath, '/react-dom/dist/react-dom')
        }
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({name: "vendors", filename:"vendors.js"}),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: true,    
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'dev.html',
            filename: '../index.html'
        })
    ]
}