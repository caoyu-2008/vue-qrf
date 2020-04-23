/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

module.exports = (_id,_params) => {
    var scope = _325.getScope("#"+_id);
    scope.scenes = scenes;
    scenes.variables={
        classInfo:{
            headerSearch:"header-search right-menu-item",
            headerSearchInput:"el-input el-input--medium el-input--suffix"
        },
        readonlyInfo:{
            headerSearchInput:'true'
        },
        breadcrumbs:[{
            text:'<span attr-10="" class="no-redirect" _325-text="breadcrumbs.$.name"></span>',
            name:"首页",
            page:"page"
        }]
    };
    scenes.events={
        showMenuSize(e){
            // size-select
            var top = document.getElementById("size-select").offsetTop + document.body.scrollTop //top
            var left = document.getElementById("size-select").offsetLeft //left
            console.log("enter showMenuSize",top,left);
            var menuShowPoint = _325.getScope("#_325_menuShow");
            var list = [
                {name:'Default',className:'',effective:function(){console.log("name","Default");}},
                {name:'Medium',className:'is-disabled',effective:function(){console.log("name","Medium");}},
                {name:'Small',className:'',effective:function(){console.log("name","Small");}},
                {name:'Mini',className:'',effective:function(){console.log("name","Mini");}},
            ]
            menuShowPoint.scenes.events.showMenu(top+40,left+160,list,e);
        },
        showLanguage(e){
            // size-select
            var top = document.getElementById("language-select").offsetTop + document.body.scrollTop //top
            var left = document.getElementById("language-select").offsetLeft //left
            console.log("enter showMenuSize",top,left);
            var menuShowPoint = _325.getScope("#_325_menuShow");
            var list = [
                {name:'中文',className:'is-disabled',effective:function(){console.log("name","中文");}},
                {name:'English',className:'',effective:function(){console.log("name","English");}},
                {name:'Espa&ntilde;ol',className:'',effective:function(){console.log("name","Espa&ntilde;ol");}},
                {name:'日本語',className:'',effective:function(){console.log("name","日本語");}},
            ]
            menuShowPoint.scenes.events.showMenu(top+40,left+160,list,e);
        },
        showSearch(e){
            console.log("enter showSearch");
            var headerSearch = scenes.varCtrl.getValue("classInfo.headerSearch");
            if(headerSearch.indexOf("show") >= 0){
                headerSearch = headerSearch.replace(" show","");
                scenes.varCtrl.set("classInfo.headerSearch", headerSearch);
                scenes.varCtrl.set("classInfo.headerSearchInput", "el-input el-input--medium el-input--suffix is-focus");
                scenes.varCtrl.set("readonlyInfo.headerSearchInput", "true");
            }
            else{
                headerSearch = headerSearch+" show";
                scenes.varCtrl.set("classInfo.headerSearch", headerSearch);
                scenes.varCtrl.set("classInfo.headerSearchInput", "el-input el-input--medium el-input--suffix");
                scenes.varCtrl.set("readonlyInfo.headerSearchInput", "");
            }
        },
        notifyNavbar(index,e){
            console.log(index);
            var pageInfos = [
                {name:'首页',href:"#/base/index",navbar:0},
                {name:'文档',href:"#/base/documentation",navbar:1},
                {name:'引导页',href:"#/base/guide",navbar:2},
            ]
            var navbarList = [
                [pageInfos[0]],
                [pageInfos[0],pageInfos[1]],
                [pageInfos[0],pageInfos[2]],
            ]
            scenes.events.setBreadcrumbs(navbarList[index]);
        },
        notifyNavbarAndHref(index,e){
            console.log(index);
            var pageInfos = [
                {name:'首页',href:"#/base/index",navbar:0},
                {name:'文档',href:"#/base/documentation",navbar:1},
                {name:'引导页',href:"#/base/guide",navbar:1},
            ]
            var navbarList = [
                [pageInfos[0]],
                [pageInfos[0],pageInfos[1]],
                [pageInfos[0],pageInfos[2]],
            ]
            //这里控制跳转
            var lastIn = navbarList[index].length - 1;
            var pageUrl = navbarList[index][lastIn].href
            location.href = pageUrl;
            scenes.events.setBreadcrumbs(navbarList[index]);
        },
        setBreadcrumbs(vals){
            var breadcrumbs = [];
            for(var i = 0; i < vals.length-1; i ++){
                breadcrumbs.push({
                    text:'<a  _325-click=notifyNavbar.bind(null,'+vals[i].navbar+') attr-10="" _325-text="breadcrumbs.$.name" href="'+vals[i].href+'"></a>',
                    name:vals[i].name,
                    page:"",
                });
            }
            breadcrumbs.push({
                text:'<span attr-10="" class="no-redirect" _325-text="breadcrumbs.$.name"></span>',
                name:vals[i].name,
                page:"page"
            });
            scenes.varCtrl.set("breadcrumbs",breadcrumbs);
        }
    };
    _325Dom.render(scenes, `
  <div attr-8="" attr-14="" class="navbar"> 
   <div attr-9="" attr-8="" id="hamburger-container" class="hamburger-container" style="padding: 0px 15px;"> 
    <svg attr-9="" viewbox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="hamburger is-active">
     <path attr-9="" d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path>
    </svg>
   </div> 
   <div attr-10="" attr-8="" aria-label="Breadcrumb" role="navigation" class="el-breadcrumb app-breadcrumb breadcrumb-container" id="breadcrumb-container">
    <span attr-10="">
        <span _325-for="breadcrumbs" attr-10="" class="el-breadcrumb__item" _325-aria-current="breadcrumbs.$.page">
            <span role="link" class="el-breadcrumb__inner" _325-text="breadcrumbs.$.text">
            </span>
            <span role="presentation" class="el-breadcrumb__separator">/</span>
        </span>
    </span>
   </div> 
   <div attr-8="" class="right-menu"> 
    <div attr-11="" attr-8="" _325-class="classInfo.headerSearch" id="header-search"> 
     <svg attr-7="" attr-11="" aria-hidden="true" class="svg-icon search-icon" _325-click=showSearch> 
      <use attr-7="" href="#icon-search"></use>
     </svg> 
     <div attr-11="" class="el-select header-search-select el-select--medium">
      <!---->
      <div _325-class="classInfo.headerSearchInput">
       <!---->
       <input type="text" _325-readonly="readonlyInfo.headerSearchInput" autocomplete="off" placeholder="Search" class="el-input__inner" />
       <!---->
       <span class="el-input__suffix"><span class="el-input__suffix-inner"><i class="el-select__caret el-input__icon el-icon-"></i>
         <!---->
         <!---->
         <!---->
         <!---->
         <!----></span>
        <!----></span>
       <!---->
       <!---->
      </div>
      <div class="el-select-dropdown el-popper" style="display: none;">
       <div class="el-scrollbar" style="display: none;">
        <div class="el-select-dropdown__wrap el-scrollbar__wrap" style="margin-bottom: -17px; margin-right: -17px;">
         <ul class="el-scrollbar__view el-select-dropdown__list"></ul>
        </div>
        <div class="el-scrollbar__bar is-horizontal">
         <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
        </div>
        <div class="el-scrollbar__bar is-vertical">
         <div class="el-scrollbar__thumb" style="transform: translateY(0%);"></div>
        </div>
       </div>
       <!---->
      </div>
     </div>
    </div> 
    <!----> 
    <div attr-12="" attr-8="" id="screenfull" class="right-menu-item hover-effect">
     <svg attr-7="" attr-12="" aria-hidden="true" class="svg-icon">
      <use attr-7="" href="#icon-fullscreen"></use>
     </svg>
    </div> 
    <div attr-8="" class="el-tooltip right-menu-item hover-effect el-dropdown" id="size-select" aria-describedby="el-tooltip-5594" tabindex="0" _325-click=showMenuSize>
     <div aria-haspopup="list" aria-controls="dropdown-menu-3870" role="button" tabindex="0" class=" el-dropdown-selfdefine">
      <svg attr-7="" aria-hidden="true" class="svg-icon size-icon">
       <use attr-7="" href="#icon-size"></use>
      </svg>
     </div>
    </div> 
    <div attr-8="" class="international right-menu-item hover-effect el-dropdown" id="language-select" _325-click=showLanguage>
     <div aria-haspopup="list" aria-controls="dropdown-menu-5750" role="button" tabindex="0" class=" el-dropdown-selfdefine">
      <svg attr-7="" aria-hidden="true" class="svg-icon international-icon">
       <use attr-7="" href="#icon-language"></use>
      </svg>
     </div>
    </div > 
    <div attr-8="" class="avatar-container right-menu-item hover-effect el-dropdown">
     <div attr-8="" class="avatar-wrapper el-dropdown-selfdefine" aria-haspopup="list" aria-controls="dropdown-menu-4314" role="button" tabindex="0">
      <img attr-8="" src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80" class="user-avatar" /> 
      <i attr-8="" class="el-icon-caret-bottom"></i>
     </div> 
     <ul attr-8="" class="el-dropdown-menu el-popper el-dropdown-menu--medium" id="dropdown-menu-4314" style="display: none;">
      <a attr-8="" href="#/profile/index" class=""><li attr-8="" tabindex="-1" class="el-dropdown-menu__item">
        <!----> 个人中心 </li></a> 
      <a attr-8="" href="#/" class="router-link-active"><li attr-8="" tabindex="-1" class="el-dropdown-menu__item">
        <!----> 首页 </li></a> 
      <a attr-8="" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/"><li attr-8="" tabindex="-1" class="el-dropdown-menu__item">
        <!----> 项目地址 </li></a> 
      <a attr-8="" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/"><li attr-8="" tabindex="-1" class="el-dropdown-menu__item">
        <!---->Docs</li></a> 
      <li attr-8="" tabindex="-1" class="el-dropdown-menu__item el-dropdown-menu__item--divided">
       <!----><span attr-8="" style="display: block;">退出登录</span></li>
     </ul>
    </div>
   </div>
  </div>
`);
    return scenes;
}

