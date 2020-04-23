/**
 * Created by 宇 on 2019/5/31.
 */
const sceneFun = require("./sceneFun");
let scenes = require("./scenes");
const ContextConf = {
    data:{
    },
    prepare:function(state,conf){
        if(!state)return {};
        var bindData = {};
        sceneFun.setObjValue(conf.reqSchema,bindData,state);
        var params = {
            header:conf.header
        };
        params.header.iserial = Math.iserial();
        params.header.ikey = "_325-qrf";
        params.header.imodule = "lessons";
        _325_extend(params,bindData)
        return params;
    },
    bindServerSchema:{
        
        

    }
};
module.exports = ContextConf;
