/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

module.exports = (_id,_params) => {
    var scope = _325.getScope("#"+_id);
    scope.scenes = scenes;
    scenes.variables={
        tagsviews:[
            {name:'首页',isActive:'router-link-exact-active router-link-active active',close:'',index:0},
        ]
    }
    scenes.events={
        closeTags(index,e){
            console.log(index);
            var isActive = 'router-link-exact-active router-link-active active';
            var tagsviews = scenes.varCtrl.getValue("tagsviews");
            for(var i = 0; i < tagsviews.length; i ++){
                var indc = scenes.varCtrl.getValue("tagsviews."+i+".index");
                if(indc == index){
                    //如果i有效，则选择i--为新的有效标签
                    var active = scenes.varCtrl.getValue("tagsviews."+i+".isActive");
                    if(!active || active.length == 0){//删除节点即可
                        //删除原的节点
                        scenes.varCtrl.delForItemByDom("tagsviews",e.target);
                    }
                    else{
                        var newIndc = scenes.varCtrl.getValue("tagsviews."+(i-1)+".index");
                        var name = scenes.varCtrl.getValue("tagsviews."+(i-1)+".name");
                        //删除原的节点
                        scenes.varCtrl.delForItemByDom("tagsviews",e.target);
                        scenes.events.notifyTags(newIndc,name,e);
                        var scope = _325.getScope("#_325_base_head_navbar");
                        var navbarScene = scope.scenes;
                        navbarScene.events.notifyNavbarAndHref(newIndc,e);
                    }
                    return;
                }
            }
        },
        notifyTags(index,name,e){
            console.log(index,name);
            var isActive = 'router-link-exact-active router-link-active active';
            var closeInfo = '<span attr-5="" class="el-icon-close" _325-click=closeTags.bind(null,'+index+')></span>';
            var tagsviews = scenes.varCtrl.getValue("tagsviews");
            var isExist = false;
            for(var i = 0; i < tagsviews.length; i ++){
                var indc = scenes.varCtrl.getValue("tagsviews."+i+".index");
                if(indc == index){
                    scenes.varCtrl.set("tagsviews."+i+".isActive",isActive);
                    isExist = true;
                }
                else{
                    scenes.varCtrl.set("tagsviews."+i+".isActive","");
                }
            }
            if(isExist)return;
            tagsviews.push({name:name,isActive:'router-link-exact-active router-link-active active',close:closeInfo,index:index});
            scenes.varCtrl.set("tagsviews",tagsviews);
        },
        switchTags(e){
            var isActive = 'router-link-exact-active router-link-active active';
            var ii = scenes.varCtrl.getForItemIndexByDom("tagsviews",e.target);
            console.log(ii);
            var index = scenes.varCtrl.getValue("tagsviews."+ii+".index");
            console.log(index);
            var tagsviews = scenes.varCtrl.getValue("tagsviews");
            for(var i = 0; i < tagsviews.length; i ++){
                if(ii != i)scenes.varCtrl.set("tagsviews."+i+".isActive","");
            }
            scenes.varCtrl.set("tagsviews."+ii+".isActive",isActive);

            var scope = _325.getScope("#_325_base_head_navbar");
            var navbarScene = scope.scenes;
            navbarScene.events.notifyNavbarAndHref(index,e);
        }
    }
    _325Dom.render(scenes, `
    <div attr-5="" attr-14="" id="tags-view-container" class="tags-view-container">
    <div attr-6="" attr-5="" class="scroll-container tags-view-wrapper el-scrollbar">
    <div class="el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
    <div class="el-scrollbar__view">
          <span _325-for="tagsviews" attr-5="" _325-click=switchTags _325-class='"tags-view-item "+tagsviews.$.isActive' _325-text="tagsviews.$.name+tagsviews.$.close">
          </span>
      </div>
      </div>
      <div class="el-scrollbar__bar is-horizontal"><div class="el-scrollbar__thumb" style="transform: translateX(0%);">
      </div></div>
      <div class="el-scrollbar__bar is-vertical"><div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div></div></div> <ul attr-5="" class="contextmenu" style="left: 0px; top: 0px; display: none;"><li attr-5="">刷新</li> <li attr-5="">关闭</li> <li attr-5="">关闭其它</li> <li attr-5="">关闭所有</li></ul></div>`);
    return scenes;
}

