var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var fs = require("fs");

var config = require("./webpack.config.dev.js");
var PORT = 3333;

config.entry.app.unshift("webpack-dev-server/client?http://localhost:" + PORT + "/", "webpack/hot/dev-server");


new WebpackDevServer(webpack(config), {
    contentBase: "./dist",
    headers: {"X-Custom-Header": "yes"},
    hot: false,   // 若要自动更新服务器，这里应该要true值，可是不知道为什么，false值才可以
    stats: { 
        colors: true 
    },
    historyApiFallback: true,
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
