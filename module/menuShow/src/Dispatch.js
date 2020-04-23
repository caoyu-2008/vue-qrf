/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

module.exports = (_id,_params) => {
    console.log(_id,_325.compScope);
    var scope = _325.getScope('#'+_id);
    scope.scenes = scenes;
    scenes.variables={
        styleInfo:{
            menuSize:"transform-origin: center top; z-index: 2049; display: none;",
            coverStylePad:"none",
        },
        menuList:[]
    };
    scenes.events={
        showMenu(top,left,list){
            console.log("enter showMenu",top,left);//position: absolute; top: 40px; left: 1050px;
            if(list && list.length > 0)scenes.varCtrl.set("menuList", list);
            else return;
            var menuSize = scenes.varCtrl.getValue("styleInfo.menuSize");
            if(menuSize.indexOf("display: none;") >= 0){
                menuSize = "transform-origin: center top; z-index: 2049; display: block; "+"position:absolute;top:"+top+"px;"+"left:"+left+"px;"
                scenes.varCtrl.set("styleInfo.menuSize", menuSize);
                scenes.varCtrl.set("styleInfo.coverStylePad", "block");
            }
            else{
                menuSize = "transform-origin: center top; z-index: 2049; display: none; "
                scenes.varCtrl.set("styleInfo.menuSize", menuSize);
                scenes.varCtrl.set("styleInfo.coverStylePad", "none");
            }
        },
        clickMenu(e){
            var ii = scenes.varCtrl.getForItemIndexByDom("menuList",e.target);
            var menuList = scenes.varCtrl.getValue("menuList");
            var effective = menuList[ii].effective;
            effective();
        },
        hiddenCancel(){
            var menuSize = scenes.varCtrl.getValue("styleInfo.menuSize");
            menuSize = menuSize.replace("display: block;","display: none;");
            scenes.varCtrl.set("styleInfo.menuSize", menuSize);
            scenes.varCtrl.set("styleInfo.coverStylePad", "none");
        }
    };
    _325Dom.render(scenes, `<div><ul class="el-dropdown-menu el-popper el-dropdown-menu--medium" id="dropdown-menu-xxxx" _325-style="styleInfo.menuSize" x-placement="bottom-end">
    <li _325-for="menuList" tabindex="-1" _325-class='"el-dropdown-menu__item "+menuList.$.className' _325-click=clickMenu _325-text="menuList.$.name"><!---->
    </li>
    <div x-arrow="" class="popper__arrow" style="left: 59.5px;"></div>
    </ul>
    <div _325-style='"display:"+styleInfo.coverStylePad+";position: fixed;top:0;left: 0;width: 100%;height: 100%;z-index: 990"' _325-click=hiddenCancel></div>
    </div>
`);
    return scenes;
}

