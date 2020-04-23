/**
 * Created by 曹宇 on 2019/5/31.
 */
const _325Dom = require("./include/_325Dom");
let scenes = require("./include/scenes");
const scenedocumentation = require('./scenedocumentation');

module.exports = (_id,_params) => {
    scenedocumentation(_params);

    _325Dom.render(scenes, `<scene-documentation />`);
    return scenes;
}

