const _325Dom = require("./_325Dom");
module.exports = {
    getStrValue:function(bVariant,state){
        if(!bVariant)return null;
        if(typeof bVariant != 'string')return null;
        var lxs = bVariant.split(".");
        var rVr = null;
        var lx;
        for(var xxx in lxs){//读取配置信息，然后获取对应的绑定默认值
            lx = lxs[xxx];
            if(rVr == null)rVr = state[lx];
            else rVr = rVr[lx];
            if(typeof rVr == 'undefined')return;
        }
        if(typeof rVr == "object")return JSON.parse(JSON.stringify(rVr));
        else return rVr;
    },
    getObjValue:function(bVariant,state){
        //将配置文件中的变量取出放到指定Object变量中
        if(!bVariant)return null;
        if(typeof bVariant != 'object' || Array.isArray(bVariant))return null;
        var bindData = {};
        var lxs;
        var lx;
        for(var xx in bVariant){
            var rVr = null;
            if(typeof bVariant[xx] == 'function'){
                rVr = bVariant[xx](state);
            }
            else if(typeof bVariant[xx] == 'object'){
                if(Array.isArray(bVariant[xx])){
                    continue;
                }
                else{
                    rVr = this.getObjValue(bVariant[xx],state);
                }
            }
            else{
                rVr = this.getStrValue(bVariant[xx],state);
            }
            if(typeof rVr == "object")bindData[xx] = JSON.parse(JSON.stringify(rVr));
            else bindData[xx] = rVr;
            continue;
        }
        return bindData;
    },
    modObjValue:function(bVariant,dState,fState){
        //将配置文件中的变量取出放到指定Object变量中
        if(!bVariant)return null;
        if(typeof bVariant != 'object' || Array.isArray(bVariant))return null;
        var lxs;
        var lx;
        for(var xx in bVariant){
            var rVr = null;
            if(typeof bVariant[xx] == 'function'){
                bVariant[xx](dState,fState);
            }
            else if(typeof bVariant[xx] == 'object'){
                if(Array.isArray(bVariant[xx])){
                    continue;
                }
                else{
                    if(!dState[xx])dState[xx]={};
                    this.modObjValue(bVariant[xx],dState[xx],fState);
                }
            }
            else{
                rVr = this.getStrValue(bVariant[xx],fState);
                if(typeof rVr == "object")dState[xx] = JSON.parse(JSON.stringify(rVr));
                else dState[xx] = rVr;
            }
            continue;
        }
        return;
    },
    modVarValue:function(bVariant,scene,fState,varName){
        //将配置文件中的变量取出放到指定Object变量中
        if(!bVariant)return null;
        if(typeof bVariant != 'object' || Array.isArray(bVariant))return null;
        var lxs;
        var lx;
        for(var xx in bVariant){
            var xy = xx;
            if(varName)xy = varName+"."+xx;
            var rVr = null;
            if(typeof bVariant[xx] == 'function'){
                bVariant[xx](scene,fState,xy);
            }
            else if(typeof bVariant[xx] == 'object'){
                if(Array.isArray(bVariant[xx])){
                    continue;
                }
                else{
                    this.modVarValue(bVariant[xx],scene,fState,xy);
                }
            }
            else{
                rVr = this.getStrValue(bVariant[xx],fState);
                scene.varCtrl.set(xy,rVr);
            }
            continue;
        }
        return;
    },
    setStrValue:function(bVariant,dState,fState){//fState数据来源，dState数据目的
        if(!bVariant || !dState || typeof fState == 'undefined')return;
        if(typeof bVariant != 'string')return null;
        var lxs = bVariant.split(".");
        var rVr = null;
        var lx;
        var confVar = null;
        for(var xxx in lxs){
            lx = lxs[xxx];
            if(rVr == null){//读取配置文件，然后获取对应的绑定默认值
                confVar = dState;
                rVr = dState[lx];
                if(!rVr){
                    confVar[lx] = {};
                    rVr = confVar[lx];
                }
            }
            else{
                confVar = rVr;
                rVr = rVr[lx];
                if(!rVr){
                    confVar[lx] = {};
                    rVr = confVar[lx];
                }
            }
        }
        if(typeof fState == "object")confVar[lx] = JSON.parse(JSON.stringify(fState));
        else confVar[lx] = fState;
    },
    setObjValue:function(bVariant,dState,fState){//fState数据来源，dState数据目的
        //将指定Object变量取出放到配置文件中的变量中
        if(!bVariant || !dState || !fState)return;
        if(typeof bVariant != 'object' || Array.isArray(bVariant))return null;
        var lxs;
        var lx;
        for(var xx in bVariant){
            var rVr = null;
            if(typeof fState[xx] == 'undefined')continue;
            if(typeof bVariant[xx] == 'function'){
                bVariant[xx](dState,fState);
            }
            else if(typeof bVariant[xx] == 'object'){
                if(Array.isArray(bVariant[xx])){
                    continue;
                }
                else{
                    this.setObjValue(bVariant[xx],dState,fState[xx]);
                }
            }
            else{
                this.setStrValue(bVariant[xx],dState,fState[xx]);
            }
            continue;
        }
        return;
    },
    variablesToData:function(variables){
        if(!variables)return null;
        var data = {};
        for(var xx in variables){
            data[xx] = _325Dom.getVariables(variables[xx]);
        }
        return data;
    }
};
