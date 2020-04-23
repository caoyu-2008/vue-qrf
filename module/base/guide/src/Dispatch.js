/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
const sceneguide = require('./sceneguide');

module.exports = (_id,_params) => {
    sceneguide(_params);

    _325Dom.render(scenes, `<scene-guide />`);
    return scenes;
}

