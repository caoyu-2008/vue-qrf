/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");

const scenedirectory = require('./scenedirectory');


module.exports = (_id,_params) => {
    scenedirectory(_params);
    _325Dom.render(scenes, `<div class="el-scrollbar"><scene-directory ></scene-directory></div>`);
    return scenes;
}

