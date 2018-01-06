const path = require('path');

module.exports = {
    entry: './src/index.es6',
    module:{
        rules:[
            {
                test: /\.es6?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                // 这里是匹配条件，每个选项都接收一个正则表达式或字符串
                // test 和 include 具有相同的作用，都是必须匹配选项
                // exclude 是必不匹配选项（优先于 test 和 include）
                // 最佳实践：
                // - 只在 test 和 文件名匹配 中使用正则表达式
                // - 在 include 和 exclude 中使用绝对路径数组
                // - 尽量避免 exclude，更倾向于使用 include

                // issuer: { test, include, exclude },
                // issuer 条件（导入源）

                enforce: "pre",
                enforce: "post",
                // 标识应用这些规则，即使规则覆盖（高级选项）

                loader: "babel-loader",
                // 应该应用的 loader，它相对上下文解析
                // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
                // 查看 webpack 1 升级指南。

                options: {
                    presets: ["es2015",'stage-0']
                },
                // loader 的可选项
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library:'CanvasProcessing',
        libraryTarget: 'window'
    }
};