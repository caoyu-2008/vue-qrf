/*自动编译
* 在public目录下新建node_mudules并拷贝autocompiler插件
* 将本文件拷贝到需要统一监听的目录
* 配置监听目录入口和编译脚本到conf（无用的目录入口和编译脚本请删除）
* 在本文件所在目录运行node autocompiler.js
* */
let autocompiler = require("autocompiler");
let conf = [
    {entry:"./rightPanel/src",script:"cd ./rightPanel/src && webpack"},
    {entry:"./svgPublic1/src",script:"cd ./svgPublic1/src && webpack"},
    {entry:"./directory/src",script:"cd ./directory/src && webpack"},
    {entry:"./menuShow/src",script:"cd ./menuShow/src && webpack"},
    {entry:"./base/index/src",script:"cd ./base/index/src && webpack"},
    {entry:"./base/documentation/src",script:"cd ./base/documentation/src && webpack"},
    {entry:"./base/head/navbar/src",script:"cd ./base/head/navbar/src && webpack"},
    {entry:"./base/head/tags/src",script:"cd ./base/head/tags/src && webpack"},
    {entry:"./base/bartext/src",script:"cd ./base/bartext/src && webpack"},
    ];
autocompiler(conf);
