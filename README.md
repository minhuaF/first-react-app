### 下载
```
git clone https://github.com/minhuaF/first-react-app
```

### 安装
```
$ npm install
```

### 编译生成目标文件
```
$ npm run build 
```

### 启动
```
$ npm start
```

### 目录结构

```bash
.
├── dist                        # 目标文件
├── src
│   ├── assets                  # 公共的资源 
│   │   ├── img                 # 图片 
│   │   └── css
│   │       ├── base.sass        # 重置的样式表       
│   │       └── common.sass      # 公用的样式表
│   │   
│   ├── components              # React component （公用的模块 or 可以独立的模块）
│   │   ├── Header              # Header component 
│   │   │   ├── assets          # assets
│   │   │   ├── index.jsx       # jsx
│   │   │   └── style.sass      # sass
│   │   ├── index.js            # component api
│   │   └── other               # other component 
│   │
│   ├── containers              # React Page  
│   │   ├── Login               # Login page 
│   │   │   ├── assets          # assets
│   │   │   ├── modules         # requesting and rendering (后期加上action，reducers,contants)
│   │   │   ├── index.jsx       # jsx
│   │   │   └── style.sass      # sass
│   │   ├── index.js            # containers api
│   │   └── other               # other page 
│   │
│   ├── util                    # 工具类
│   │   ├── index.js            # interface (统一export)
│   │   ├── request.util.js          # request util 
│   │   └── other
│   │
│   ├── lang                    # 语言配置
│   │   ├── en.js               
│   │   └── zh.js
│   │
│   ├── app.js                  # 入口文件
│   ├── routes.js               # 浏览器端路由配置
│   └── index.html              # SPA 模板
│   
├── .babelrc                    # babel config
├── .gitignore                  # git ignore config 
├── server.js                   # webpack server  
├── package.json   
└── webpack.config.js           # 构建配置(内部区分开发环境和线上环境)
```

<br/>
<br/>
ps：详细笔记请移步wiki