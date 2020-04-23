const sceneFun = require("./sceneFun");
const ContextConf = require("./ContextConf");
module.exports = {
    post:function(domsInScene,status){
        var data = sceneFun.variablesToData(domsInScene.variables);
        var conf = ContextConf.bindServerSchema[status];
        if(!conf)conf={};
        conf = _325_clone(conf);//克隆一份，以免冲突
        var successFun = conf.success;
        var errorFun = conf.error;
        conf.success = successFun && typeof successFun == 'function'?successFun.bind(conf,domsInScene):function(ret){
            try{
                if(typeof ret != 'object')ret = JSON.parse(ret);
                console.log(ret);
            }
            catch(e){
                console.log(e);
            }
        };
        conf.error = errorFun && typeof errorFun == 'function'?errorFun.bind(conf,domsInScene):function(err){
            console.log(err);
            successFun(domsInScene,err);
        };
        new this.connection(status,
            conf
        ).Post(data);
    },
    connection:function (status,conf){
        var self = this;
        self.Post = function(state){
            var params = conf.prepare(state,conf);//上送前参数预处理
            _325_ajax.postJSON({
                headers:{token:"123456"},//加一个token
                url: conf.url,
                cache: true,
                async: true,
                data: params,
                success:conf.success,
                error: conf.error,
                time:conf.time?conf.time:60000
            });
        };
    }
}
