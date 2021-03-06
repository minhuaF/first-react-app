// TODO webpack配置文件的语法还是es5
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin  = require('extract-text-webpack-plugin');  //用于另外打包css，非必须
var CleanWebpackPlugin = require('clean-webpack-plugin'); // a webpack plugin to remove/clean your build folder(s) before building

//path.resolve和path.join用法有不同；http://www.jianshu.com/p/fe41ee02efc8
// __dirname代表程序运行的根目录
var node_modules = path.resolve(__dirname, './node_modules');
var dir_src = path.resolve(__dirname, './src');
var dir_dist = path.resolve(__dirname, './dist');  //TODO 如果要配置多个项目，这个输出文件名要修改

module.exports = {
    
    // 应用程序开始打包 string|object|arrary
    // TODO 多个文件入口
    entry: {
        app: [
            './src/app.js'
        ],
        vendors: ['react', 'react-dom'],   // 需要公共打包的组件定义
    },
    
    // webpack 输出结果配置
    output:{
        path: dir_dist, // 所有输出文件的目标路劲
        filename: '[hash:8]-[name].js', // 对应于entry中生成出来的文件
        // 对未被列在entry中，却有需要被打包的文件的命名配置。一般用于异步按需加载的时候
        // TODO 可是不设置的话，好像也是按需加载的；怎么区分呢
        chunkFilename: '[chunkHash:8]-chunk-[name].js', 
        // publicPath: './dist/',  // 静态资源的添加路径，使用CND等时需要
        sourceMapFilename: 'sourcemaps/[name].map', // 「source map 位置」的文件名模板
        
        library: "MyLibrary",
        libraryTarget: "umd",
        pathinfo: false,
        // crossOrginLoading: false, // 指定运行时如何发出跨域请求问题

    },
    //关于模块配置
    module:{
        // webpack1.0 的写法
        // loaders: [
        //         {
        //             test: /\.jsx?$/,
        //             include: [
        //                 path.resolve(__dirname, "src")
        //             ],
        //             loaders: 'babel-loader',
        //         },
        //         {
        //             test: /\.less$/,
        //             loader: ExtractTextPlugin.extract({
        //                 fallbackLoader: "style-loader",
        //                 loader: ['css-loader', 'less-loader']
        //             })
        //         }
        // ]

        // webpack 2.0 的不同于1.0的配置
        // 具体的配置细节要认真看文档，特别是配合extract-text-webpack-plugin的使用
        rules:[
            {
                test: /\.jsx?$/,
                // include: [
                //     path.resolve(__dirname, "src")
                // ],
                exclude: /node_modules/,
                // issuer: { test, include, exclude },
                loader: "babel-loader",
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        // activate source maps via loader query
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true, importLoaders: 1 }
                        },
                        {
                            loader: 'less-loader',
                            options: { sourceMap: true }
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                loader: "css-loader"
            },
           
            { oneOf: [ /* rules */ ] },
            { rules: [ /* rules */ ] }
        ],
    },

    // 解析模块请求的选项
    resolve:{
        extensions: ['.js', '.jsx', '.less', '.css'], // 使用的扩展名
        // 模块别名列表；可以配置默认搜索路径，以提高搜索速度
        alias: {
            'react': path.join(node_modules, '/react/dist/react'),
            'react-dom': path.join(node_modules, '/react-dom/dist/react-dom')
        }
    },
    plugins:[
        new ExtractTextPlugin({ filename: '[hash:8]-[name].css',  allChunks: true } ), // allChunks 配置是否打包都同一个文件
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors", 
            filename:"vendors.js",
            minChunks: 2
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            __DEV__: true,    
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    devtool: 'source-map',
}