/*全编译
* 配置编译脚本scripts（无用的编译脚本请删除）
* 在本文件所在目录运行node allcompiler.js
* */
const process = require('process');
const exec = require('child_process').exec;

let scripts = [
    "cd ./rightPanel/src && webpack",
    "cd ./svgPublic1/src && webpack",
    "cd ./directory/src && webpack",
    "cd ./menuShow/src && webpack",
    "cd ./base/index/src && webpack",
    "cd ./base/documentation/src && webpack",
    "cd ./base/head/navbar/src && webpack",
    "cd ./base/head/tags/src && webpack",
    "cd ./base/bartext/src && webpack",
    ];

var basePath = process.cwd();
function  execute(script,callback){
    var cmd='cd "'+basePath+'" && '+script;
    console.log("execute:---------"+cmd);
    exec(cmd, function(error, stdout, stderr) {
        if(error){
            console.log(error);
        }
        else{
            console.log("成功");
            callback();
        }
    });
};
let index = 0;
function compiling(){
    console.log(index,scripts[index]);
    execute(scripts[index],function(){
        index ++;
        if(index == scripts.length)return;
        compiling();
    });
}
compiling();
