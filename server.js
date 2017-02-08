var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");

var config = require("./webpack.config.dev.js");

var PORT = 3333;

new WebpackDevServer(webpack(config), {
    publicPath: "/dist/",
    headers: {"X-Custom-Header": "yes"},
    hot: true,
    stats: { 
        colors: true 
    },
    // historyApiFallback: {
    //     index: "/static/"
    // }
}).listen(PORT, "localhost", function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log("======= Server Running at localhost " + PORT);
})
