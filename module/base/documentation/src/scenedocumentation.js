let _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
let httpFun = require("./include/httpFun");
module.exports = (params)=> {
    var scene = scenes.scenedocumentation = {};
    scene.variables = {
    };

    scene.events = {
    };

    scene.events.init = function () {
    };

    _325Dom.definedDoms({
		'comp-scenedocumentation':`
  <div attr-4="" attr-2="" class="app-container documentation-container">
   <a attr-4="" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/" class="document-btn">Documentation</a> 
   <a attr-4="" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/" class="document-btn">Github Repository</a> 
   <a attr-4="" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/" class="document-btn">国内文档</a> 
   <div attr-4="" class="share-dropdown-menu document-btn">
    <div class="share-dropdown-menu-wrapper">
     <span class="share-dropdown-menu-title">系列文章</span> 
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/59097cd7a22b9d0065fb61d2" target="_blank">基础篇</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/591aa14f570c35006961acac" target="_blank">登录权限篇</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/593121aa0ce4630057f70d35" target="_blank">实战篇</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/595b4d776fb9a06bbe7dba56" target="_blank">vue-admin-template 篇</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/5c92ff94f265da6128275a85" target="_blank">v4.0 篇</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://segmentfault.com/a/1190000009090836" target="_blank">自行封装 component</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/59bb864b5188257e7a427c09" target="_blank">优雅的使用 icon</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/59bb864b5188257e7a427c09" target="_blank">webpack4（上）</a>
     </div>
     <div class="share-dropdown-menu-item">
      <a href="https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc" target="_blank">webpack4（下）</a>
     </div>
    </div>
   </div> 
   <a attr-4="" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/zh/job/" class="document-btn">内推招聘</a>
  </div>
`,
		
        },scene);
    _325Dom.definedScene("scene-documentation", {
        domsInScene: scene
    }, scenes);
    scene.events.init();
    return scene;
}