const nodeExternals = require('webpack-node-externals')
const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");

module.exports ={
    //  告知webpack，需要在node端运行
    mode:'development',
    target:"node",
    entry:"./src/server/main.js",
    output:{
        filename:'serv.js',
        libraryTarget: "commonjs2"
    },
    externals: nodeExternals(),
    plugins:[
        new vueSSRServerPlugin()
    ]
}