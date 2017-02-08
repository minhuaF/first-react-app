### 搭建基本的webpack开发环境的介绍

- 配置，把 npm 换成 cnpm
- npm init
- npm install --save-dev babel-cli babel-core babel-polyfill babel-preset-es2015 babel-preset-react
- 新建 .babelrc
- npm install --save-dev webpack
- npm install --save-dev webpack-dev-server
- 配置webpack开发环境的配置文件 webpack.config.dev.js
- npm install --save-dev babel-loader sass-loader style-loader css-loader react-hot-loader
- 在app文件夹中创建react项目文件
- 使用 HtmlWebpackPlugin 插件配置入口文件
- 文件的配置主要参看官方文档 [webpack2.0](https://webpack.js.org/configuration/) [wbpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)
<br/>

通过上面的配置，如果只编译一个react文件的时候所需要的时间还是比较多的，而且上面还有一个莫名的记录。所以优化的空间还很大。<br/>
![image](https://github.com/minhuaF/first-react-app/blob/master/READMEIMG/pic01.png)

<br/>

### 优化方案的介绍