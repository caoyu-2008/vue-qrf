let _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
let httpFun = require("./include/httpFun");
module.exports = (params)=> {
    var scene = scenes.scenedirectory = {};
    var htmlA = `
       <a _325-href="directories.$.href" _325-class="directories.$.className" rel="noopener">
         <li role="menuitem" tabindex="-1" _325-class="'el-menu-item '+directories.$.active+' submenu-title-noDropdown'" _325-style="'padding-left: 20px; color: rgb('+directories.$.color+'); background-color: rgb(48, 65, 86);'">
         <svg attr-7="" aria-hidden="true" class="svg-icon">
          <use attr-7="" _325-href="directories.$.svghref"></use>
         </svg><span _325-text="directories.$.name"></span>
         </li>
       </a>
    `;
    var htmlSubLi = `
         <div class="nest-menu" _325-for="directories.$.subs">
          <a _325-href="#/permission/page" class="">
            <li role="menuitem" tabindex="-1" class="el-menu-item" _325-style="'padding-left: 40px; color: rgb('+directories.$.subs.$.color+'); background-color: rgb(48, 65, 86);'">
              <span _325-text="directories.$.subs.$.name"></span>
            </li>
          </a>
         </div>
    `;
    var htmlLi = `
      <li role="menuitem" aria-haspopup="true" _325-class="'el-submenu '+directories.$.active">
        <div class="el-submenu__title" style="padding-left: 20px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);" _325-click=expandDir>
         <svg attr-7="" aria-hidden="true" class="svg-icon">
          <use attr-7="" href="#icon-lock"></use>
         </svg>
         <span _325-text="directories.$.name"></span>
         <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
        </div>
        <ul role="menu" class="el-menu el-menu--inline" _325-style="'background-color: rgb(48, 65, 86); '+directories.$.subStyle"> 
        `+htmlSubLi+`
        </ul>
      </li>
    `;
    console.log(htmlLi);
    scene.variables = {
        el_submenu:{
            "1":{"expandClass":"el-submenu","subStyle":"background-color: rgb(48, 65, 86); display: none;"},
        },
        directories:[
            {name:'首页',href:'#/base/index',className:'router-link-exact-active router-link-active',active:"is-active",color:"64, 158, 255",svghref:'#icon-dashboard',text:htmlA},
            {name:'文档',href:'#/base/documentation',className:'',active:"",color:"191, 203, 217",svghref:'#icon-documentation',text:htmlA},
            {name:'引导页',href:'#/base/guide',className:'',active:"",color:"191, 203, 217",svghref:'#icon-guide',text:htmlA},
            {name:'权限测试页',className:'',active:"",color:"191, 203, 217",svghref:'#icon-guide',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'页面权限',href:'#/permission/page',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'指令权限',href:'#/permission/directive',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'角色权限',href:'#/permission/role',className:'',active:"",color:"191, 203, 217",text:htmlSubLi}
                ]
            },
            {name:'图标',href:'#/base/icon',className:'',active:"",color:"191, 203, 217",svghref:'#icon-icon',text:htmlA},
            {name:'组件',className:'',active:"",color:"191, 203, 217",svghref:'#icon-component',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'富文本编辑器',href:'#/components/tinymce',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Markdown',href:'#/components/markdown',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'JSON 编辑器',href:'#/components/json-editor',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Splitpane',href:'#/components/split-pane',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'头像上传',href:'#/components/avatar-upload',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Dropzone',href:'#/components/dropzone',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Sticky',href:'#/components/sticky',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Count To',href:'#/components/count-to',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'小组件',href:'#/components/mixin',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'返回顶部',href:'#/components/back-to-top',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'拖拽 Dialog',href:'#/components/drag-dialog',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'拖拽 Select',href:'#/components/drag-select',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'列表拖拽',href:'#/components/dnd-list',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'可拖拽看板',href:'#/components/drag-kanban',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'图表',className:'',active:"",color:"191, 203, 217",svghref:'#icon-chart',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'键盘图表',href:'#/charts/keyboard',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'折线图',href:'#/charts/line',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'混合图表',href:'#/charts/mix-chart',className:'',active:"",color:"191, 203, 217",text:htmlSubLi}
                ]
            },
            {name:'Table',className:'',active:"",color:"191, 203, 217",svghref:'#icon-table',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'动态 Table',href:'#/table/dynamic-table',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'拖拽 Table',href:'#/table/drag-table',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'Table 内编辑',href:'#/table/inline-edit-table',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'综合 Table',href:'#/table/complex-table',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'综合实例',className:'',active:"",color:"191, 203, 217",svghref:'#icon-example',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'创建文章',href:'#/example/create',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'文章列表',href:'#/example/list',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'Tab',href:'#/base/tab',className:'',active:"",color:"191, 203, 217",svghref:'#icon-tab',text:htmlA},
            {name:'错误页面',className:'',active:"",color:"191, 203, 217",svghref:'#icon-404',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'401',href:'#/error/401',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'404',href:'#/error/404',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'错误日志',href:'#/base/errlog',className:'',active:"",color:"191, 203, 217",svghref:'#icon-bug',text:htmlA},
            {name:'Excel',className:'',active:"",color:"191, 203, 217",svghref:'#icon-excel',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'导出 Excel',href:'#/excel/export-excel',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'导出 已选择项',href:'#/excel/export-selected-excel',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'导出 多级表头',href:'#/excel/export-merge-header',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                    {name:'上传 Excel',href:'#/excel/upload-excel',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'Zip',className:'',active:"",color:"191, 203, 217",svghref:'#icon-zip',text:htmlLi,
                subStyle:"display: none;",
                subs:[
                    {name:'Export Zip',href:'#/zip/download',className:'',active:"",color:"191, 203, 217",text:htmlSubLi},
                ]
            },
            {name:'PDF',href:'#/base/pdf',className:'',active:"",color:"191, 203, 217",svghref:'#icon-pdf',text:htmlA},
            {name:'换肤',href:'#/base/theme',className:'',active:"",color:"191, 203, 217",svghref:'#icon-theme',text:htmlA},
            {name:'Clipboard',href:'#/base/clipboard',className:'',active:"",color:"191, 203, 217",svghref:'#icon-clipboard',text:htmlA},
            {name:'国际化',href:'#/base/international',className:'',active:"",color:"191, 203, 217",svghref:'#icon-international',text:htmlA},
            {name:'外链',href:'#/base/link',className:'',active:"",color:"191, 203, 217",svghref:'#icon-link',text:htmlA},
            {name:'打赏',href:'#/base/donate',className:'',active:"",color:"191, 203, 217",svghref:'#icon-donate',text:htmlA},
        ]
	};

    scene.events = {
        expandDir(e){
            console.log("enter expandDir");
            var dirIndex = scene.varCtrl.getForItemIndexByDom("directories",e.target);
            console.log("expandDir dirIndex:",dirIndex);
            var classValue = scene.varCtrl.getValue("directories."+dirIndex+".active");
            console.log(classValue);
            if(classValue == "is-opened")classValue = "";
            else classValue = "is-opened";
            scene.varCtrl.set("directories."+dirIndex+".active",classValue);
            var styleValue = scene.varCtrl.getValue("directories."+dirIndex+".subStyle");
            console.log(styleValue);
            if(styleValue == "display: none;")styleValue = "";
            else styleValue = "display: none;";
            scene.varCtrl.set("directories."+dirIndex+".subStyle",styleValue);
        },
        expandDirectory(dirIndex,e){
            var index = scene.varCtrl.getForItemIndexByDom("el_submenu."+dirIndex+".expandClass");
            var classValue = scene.varCtrl.getValue("el_submenu."+dirIndex+".expandClass");
            if(classValue == "el-submenu")classValue = "el-submenu is-opened";
            else classValue = "el-submenu";
            scene.varCtrl.set("el_submenu."+dirIndex+".expandClass",classValue);
            var styleValue = scene.varCtrl.getValue("el_submenu."+dirIndex+".subStyle");
            if(styleValue.indexOf("display: none;") >= 0)styleValue = "background-color: rgb(48, 65, 86); ";
            else styleValue = "background-color: rgb(48, 65, 86); display: none;";
            scene.varCtrl.set("el_submenu."+dirIndex+".subStyle",styleValue);
        },
        notifyNavbar(e){
            var index = scene.varCtrl.getForItemIndexByDom("directories",e.target)
            var href = scene.varCtrl.getValue("directories."+index+".href");
            console.log("href:",href);
            if(!href || href == "")return;
            var scope = _325.getScope("#_325_base_head_navbar");
            var navbarScene = scope.scenes;
            navbarScene.events.notifyNavbar(index,e);
            scene.events.notifyTags(index,e);
        },
        notifyTags(index,e){
            console.log("notifyTags",index);
            var tagInfos = ['首页','文档','引导页']

            var scope = _325.getScope("#_325_base_head_tags");
            var navbarScene = scope.scenes;
            navbarScene.events.notifyTags(index,tagInfos[index],e);
        }
	};

    scene.events.init = function () {

    };

    _325Dom.definedDoms({
		'comp-scenedirectory':`<div>
   <div class="scrollbar-wrapper el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
    <div class="el-scrollbar__view">
     <ul role="menubar" class="el-menu" style="background-color: rgb(48, 65, 86);">
      <div _325-for="directories" _325-click=notifyNavbar _325-text="directories.$.text">
      </div>
      <!---->
      <div>
       <li role="menuitem" aria-haspopup="true"  _325-class="el_submenu.4.expandClass">
        <div class="el-submenu__title" style="padding-left: 20px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);" _325-click=expandDirectory.bind(null,4)>
         <svg attr-7="" aria-hidden="true" class="svg-icon">
          <use attr-7="" href="#icon-nested"></use>
         </svg>
         <span>路由嵌套</span>
         <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
        </div>
        <ul role="menu" class="el-menu el-menu--inline"  _325-style="el_submenu.4.subStyle"> 
         <div class="nest-menu">
          <li role="menuitem" aria-haspopup="true" class="el-submenu">
           <div class="el-submenu__title" style="padding-left: 40px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);">
            <span>菜单1</span>
            <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
           </div>
           <ul role="menu" class="el-menu el-menu--inline" style="background-color: rgb(48, 65, 86); display: none;"> 
            <div class="nest-menu">
             <a href="#/nested/menu1/menu1-1" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 60px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>菜单 1-1</span></li></a>
            </div>
            <div class="nest-menu">
             <li role="menuitem" aria-haspopup="true" class="el-submenu">
              <div class="el-submenu__title" style="padding-left: 60px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);">
               <span>菜单 1-2</span>
               <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
              </div>
              <ul role="menu" class="el-menu el-menu--inline" style="background-color: rgb(48, 65, 86); display: none;"> 
               <div class="nest-menu">
                <a href="#/nested/menu1/menu1-2/menu1-2-1" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 80px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>菜单 1-2-1</span></li></a>
               </div>
               <div class="nest-menu">
                <a href="#/nested/menu1/menu1-2/menu1-2-2" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 80px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>菜单 1-2-2</span></li></a>
               </div>
              </ul></li>
            </div>
            <div class="nest-menu">
             <a href="#/nested/menu1/menu1-3" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 60px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>菜单 1-3</span></li></a>
            </div>
           </ul></li>
         </div>
         <div class="nest-menu">
          <a href="#/nested/menu2" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>菜单 2</span></li></a>
         </div>
        </ul></li>
      </div>
      <div>
       <li role="menuitem" aria-haspopup="true"  _325-class="el_submenu.9.expandClass">
        <div class="el-submenu__title" style="padding-left: 20px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);" _325-click=expandDirectory.bind(null,0)>
         <svg attr-7="" aria-hidden="true" class="svg-icon">
          <use attr-7="" href="#icon-zip"></use>
         </svg>
         <span>Zip</span>
         <i class="el-submenu__icon-arrow el-icon-arrow-down"></i>
        </div>
        <ul role="menu" class="el-menu el-menu--inline"  _325-style="el_submenu.9.subStyle"> 
         <div class="nest-menu">
          <a href="#/zip/download" class=""><li role="menuitem" tabindex="-1" class="el-menu-item" style="padding-left: 40px; color: rgb(191, 203, 217); background-color: rgb(48, 65, 86);"><span>Export Zip</span></li></a>
         </div>
        </ul></li>
      </div>
      <!---->
     </ul>
    </div>
   </div>
   <div class="el-scrollbar__bar is-horizontal">
    <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
   </div>
   <div class="el-scrollbar__bar is-vertical">
    <div class="el-scrollbar__thumb" style="height: 51.7857%; transform: translateY(0%);"></div>
   </div></div>`,
		
        },scene);
    _325Dom.definedScene("scene-directory", {
        domsInScene: scene
    }, scenes);
    scene.events.init();
    return scene;
}