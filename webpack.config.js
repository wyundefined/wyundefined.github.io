


// webpack 基本配置文件  



console.log("webpack");

// 声明入口 出口  
// 模块打包  
// js
// css/less/scss
// png
// react 预编译 

// app.vue 单文件组件  打包 

const webpack = require("webpack");
const path = require("path");  // 无需安装  node 内置模块  url / querystring 
const htmlWebpackPlugin = require("html-webpack-plugin");
const openBrowserWebpackPlugin =  require("open-browser-webpack-plugin");
const extractTextWebpackPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry:["./src/main.js"],
    output:{
        path:path.resolve(__dirname,"dist"),  // resolve 正确处理 拼接 
        filename:"js/[name].[hash:8].js" ,  // hash:8 以md5 模式加密 生成长度为 8  随机字符串  防止缓存 
        publicPath:"",   // 公共路径   上线需要设置的相对路径 
    },

    devtool:"source-map",  // 方便在线调试 代码 debugger 

    resolve:{
        alias:{   // 别名
            "@":path.resolve("src"),
            "&":path.resolve("src/utils/"),
            "~":path.resolve("src/scripts/")
        }
    },


    // 处理模块打包 
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:8192,  // 1024*8 8M 
                            name:"imgs/[name].[hash:8].[ext]", // 1.jpg  =>  1.qwer1234.jpg 
                        }
                    }
                ]
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // css 创建 node 风格的 js 代码 
                    use:[
                        "css-loader", // 转为 代码为 commonJS 模块
                        {
                            loader:"postcss-loader",  // css 代码结构转换  
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"), // css 代码美化 
                                        require("autoprefixer"), // 自动补全  webkit moz ms 
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test:/\.(css|less)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  // css 创建 node 风格的 js 代码 
                    use:[
                        "css-loader", // 转为 代码为 commonJS 模块
                        {
                            loader:"postcss-loader",  // css 代码结构转换  
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"), // css 代码美化 
                                        require("autoprefixer"), // 自动补全  webkit moz ms 
                                        require("postcss-px2rem-exclude")(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i
                                            }
                                        )
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            }
        ]
    },


    // 开发环境 挂起 服务 
    devServer:{   
        contentBase:path.join(__dirname,"dist"),  // 声明服务器作用的范围 
        compress:true,
        hot:true,
        inline:true,
        host:"0.0.0.0", // localhost  192.168.53.61
        port:8080,
        // open:true,  // 自动打开浏览器 
        publicPath:"",
        proxy:{     // 代理  跨域设置 

        }
    },

    // 操作 插件 
    plugins:[
        new htmlWebpackPlugin({
            template:"./public/index.html",   // 操作模板 
            inject:true,  // 自动注入 打包生成  js/css 
        }),
        // 自动打开浏览 
        new openBrowserWebpackPlugin({
            url:"http://localhost:8080"
        }),

        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",  // 打包的抽离文件名称
            allChunks:true, // 打包所有样式  
            disable:false,  //抽离 确认是否抽离 
        }),

        // 自动引入 React / Component 
        new webpack.ProvidePlugin({
            React:"React",
            Component:['react','Component']
        })
    ]
}
