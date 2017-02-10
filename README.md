### 搭建基本的webpack开发环境的介绍

- 配置，把 npm 换成 cnpm
- npm init
- cnpm install --save-dev babel-cli babel-core babel-polyfill babel-preset-es2015 babel-preset-react 
- cnpm install --save-dev babel-preset-stage-0 babel-preset-stage-1
- 新建 .babelrc
- cnpm install --save-dev webpack
- 配置webpack开发环境的配置文件 webpack.config.dev.js
- cnpm install --save-dev babel-loader sass-loader style-loader css-loader 
- cnpm install --save-dev html-webpack-plugin
- 在app文件夹中创建react项目文件
- cnpm install --save react react-dom
- 创建server.js文件
- cnpm install --save-dev webpack-dev-server
- 文件的配置主要参看官方文档 [webpack2.0](https://webpack.js.org/configuration/) [wbpack-dev-server](http://webpack.github.io/docs/webpack-dev-server.html)


通过上面的配置，如果只编译一个react文件的时候所需要的时间还是比较多的，而且上面还有一个莫名的记录。所以优化的空间还很大。


![image](https://github.com/minhuaF/first-react-app/blob/master/READMEIMG/pic01.png)


### 优化方案的介绍

优化部分像参考 [webpack使用优化](http://www.alloyteam.com/2016/01/webpack-use-optimization/) 这里的，不过可能由于文件比较少，所以不怎么能看出来，后面再优化。


### 参考文献
- [webpack使用优化](http://www.alloyteam.com/2016/01/webpack-use-optimization/)