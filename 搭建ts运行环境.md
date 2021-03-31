npm init -y

npm install webpack webpack-cli typescript ts-loader

用tsc命令进行初始化
tsc --init

```
// webpack 配置文件
// 创建一个build文件夹，里面创建webpack.config.js文件, 代码如下：


const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
//使用node的模块
module.exports = {
    //这就是我们项目编译的入口文件
    entry: "./src/index.ts",
    output: {
        filename: "main.js"
    },
    resolve: {
        extensions: ['.ts','tsx','.js']
    },
    //这里可以配置一些对指定文件的处理
    //这里匹配后缀为ts或者tsx的文件
    //使用exclude来排除一些文件
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    //这个参数就可以在webpack中获取到了
    devtool: process.env.NODE_ENV === 'production'? false : 'inline-source-map',
    devServer:{
        //这个本地开发环境运行时是基于哪个文件夹作为根目录
        contentBase:'./dist',
        //当你有错误的时候在控制台打出
        stats: 'errors-only',
        //不启动压缩
        compress: false,
        host: 'localhost',
        port: 8081
    },
    //这里就是一些插件
    plugins:[
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]
}
```

在src的目录下，创建./src/index.ts
在src的目录下，创建template文件夹
在template文件夹下边创建index.html


安装cross-env
用于设置环境变量的,方便设置开发环境和生产环境
npm install cross-env -D


clean-webpack-plugin 能清理一些指定的文件夹

html-webpack-plugin 指定一个编译的模型

npm install clean-webpack-plugin html-webpack-plugin -D

在index.ts写代码测试一下

  "scripts": {
  "start": "webpack serve --mode development --env development webpack-dev-server --config ./build/webpack.config.js",
 //   "start": "cross-env NODE_ENV=development webpack-dev-server --config ./build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"
  },



