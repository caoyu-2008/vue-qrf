let _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
let httpFun = require("./include/httpFun");
module.exports = (params)=> {
    var scene = scenes.sceneguide = {};
    scene.variables = {
    };

    scene.events = {
    };

    scene.events.init = function () {
    };

    _325Dom.definedDoms({
		'comp-sceneguide':`
  <div attr-2="" class="app-container">
   <aside>
     引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 
    <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js.</a>
   </aside> 
   <button type="button" class="el-button el-button--primary el-button--medium"><i class="el-icon-question"></i><span> 打开引导 </span></button>
  </div>		
`,
        },scene);
    _325Dom.definedScene("scene-guide", {
        domsInScene: scene
    }, scenes);
    scene.events.init();
    return scene;
}