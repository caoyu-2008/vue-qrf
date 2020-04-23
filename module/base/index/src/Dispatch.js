/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
const sceneindex = require('./sceneindex');

module.exports = (_id,_params) => {
    sceneindex(_params);

    if(!scenes.renderReady)scenes.renderReady = {};
    scenes.renderReady["index"] = function(){
        console.log("enter index ready!");
    }

    _325Dom.render(scenes, `<scene-index />`);
    return scenes;
}

