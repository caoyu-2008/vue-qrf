/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = new _325_DOM("_325_" + _325.ScopeId);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = _325.Scope.scenes = {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _325Dom = __webpack_require__(0);
module.exports = {
    getStrValue: function getStrValue(bVariant, state) {
        if (!bVariant) return null;
        if (typeof bVariant != 'string') return null;
        var lxs = bVariant.split(".");
        var rVr = null;
        var lx;
        for (var xxx in lxs) {
            //读取配置信息，然后获取对应的绑定默认值
            lx = lxs[xxx];
            if (rVr == null) rVr = state[lx];else rVr = rVr[lx];
            if (typeof rVr == 'undefined') return;
        }
        if ((typeof rVr === "undefined" ? "undefined" : _typeof(rVr)) == "object") return JSON.parse(JSON.stringify(rVr));else return rVr;
    },
    getObjValue: function getObjValue(bVariant, state) {
        //将配置文件中的变量取出放到指定Object变量中
        if (!bVariant) return null;
        if ((typeof bVariant === "undefined" ? "undefined" : _typeof(bVariant)) != 'object' || Array.isArray(bVariant)) return null;
        var bindData = {};
        var lxs;
        var lx;
        for (var xx in bVariant) {
            var rVr = null;
            if (typeof bVariant[xx] == 'function') {
                rVr = bVariant[xx](state);
            } else if (_typeof(bVariant[xx]) == 'object') {
                if (Array.isArray(bVariant[xx])) {
                    continue;
                } else {
                    rVr = this.getObjValue(bVariant[xx], state);
                }
            } else {
                rVr = this.getStrValue(bVariant[xx], state);
            }
            if ((typeof rVr === "undefined" ? "undefined" : _typeof(rVr)) == "object") bindData[xx] = JSON.parse(JSON.stringify(rVr));else bindData[xx] = rVr;
            continue;
        }
        return bindData;
    },
    modObjValue: function modObjValue(bVariant, dState, fState) {
        //将配置文件中的变量取出放到指定Object变量中
        if (!bVariant) return null;
        if ((typeof bVariant === "undefined" ? "undefined" : _typeof(bVariant)) != 'object' || Array.isArray(bVariant)) return null;
        var lxs;
        var lx;
        for (var xx in bVariant) {
            var rVr = null;
            if (typeof bVariant[xx] == 'function') {
                bVariant[xx](dState, fState);
            } else if (_typeof(bVariant[xx]) == 'object') {
                if (Array.isArray(bVariant[xx])) {
                    continue;
                } else {
                    if (!dState[xx]) dState[xx] = {};
                    this.modObjValue(bVariant[xx], dState[xx], fState);
                }
            } else {
                rVr = this.getStrValue(bVariant[xx], fState);
                if ((typeof rVr === "undefined" ? "undefined" : _typeof(rVr)) == "object") dState[xx] = JSON.parse(JSON.stringify(rVr));else dState[xx] = rVr;
            }
            continue;
        }
        return;
    },
    modVarValue: function modVarValue(bVariant, scene, fState, varName) {
        //将配置文件中的变量取出放到指定Object变量中
        if (!bVariant) return null;
        if ((typeof bVariant === "undefined" ? "undefined" : _typeof(bVariant)) != 'object' || Array.isArray(bVariant)) return null;
        var lxs;
        var lx;
        for (var xx in bVariant) {
            var xy = xx;
            if (varName) xy = varName + "." + xx;
            var rVr = null;
            if (typeof bVariant[xx] == 'function') {
                bVariant[xx](scene, fState, xy);
            } else if (_typeof(bVariant[xx]) == 'object') {
                if (Array.isArray(bVariant[xx])) {
                    continue;
                } else {
                    this.modVarValue(bVariant[xx], scene, fState, xy);
                }
            } else {
                rVr = this.getStrValue(bVariant[xx], fState);
                scene.varCtrl.set(xy, rVr);
            }
            continue;
        }
        return;
    },
    setStrValue: function setStrValue(bVariant, dState, fState) {
        //fState数据来源，dState数据目的
        if (!bVariant || !dState || typeof fState == 'undefined') return;
        if (typeof bVariant != 'string') return null;
        var lxs = bVariant.split(".");
        var rVr = null;
        var lx;
        var confVar = null;
        for (var xxx in lxs) {
            lx = lxs[xxx];
            if (rVr == null) {
                //读取配置文件，然后获取对应的绑定默认值
                confVar = dState;
                rVr = dState[lx];
                if (!rVr) {
                    confVar[lx] = {};
                    rVr = confVar[lx];
                }
            } else {
                confVar = rVr;
                rVr = rVr[lx];
                if (!rVr) {
                    confVar[lx] = {};
                    rVr = confVar[lx];
                }
            }
        }
        if ((typeof fState === "undefined" ? "undefined" : _typeof(fState)) == "object") confVar[lx] = JSON.parse(JSON.stringify(fState));else confVar[lx] = fState;
    },
    setObjValue: function setObjValue(bVariant, dState, fState) {
        //fState数据来源，dState数据目的
        //将指定Object变量取出放到配置文件中的变量中
        if (!bVariant || !dState || !fState) return;
        if ((typeof bVariant === "undefined" ? "undefined" : _typeof(bVariant)) != 'object' || Array.isArray(bVariant)) return null;
        var lxs;
        var lx;
        for (var xx in bVariant) {
            var rVr = null;
            if (typeof fState[xx] == 'undefined') continue;
            if (typeof bVariant[xx] == 'function') {
                bVariant[xx](dState, fState);
            } else if (_typeof(bVariant[xx]) == 'object') {
                if (Array.isArray(bVariant[xx])) {
                    continue;
                } else {
                    this.setObjValue(bVariant[xx], dState, fState[xx]);
                }
            } else {
                this.setStrValue(bVariant[xx], dState, fState[xx]);
            }
            continue;
        }
        return;
    },
    variablesToData: function variablesToData(variables) {
        if (!variables) return null;
        var data = {};
        for (var xx in variables) {
            data[xx] = _325Dom.getVariables(variables[xx]);
        }
        return data;
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by 曹宇 on 2019/5/31.
 */
var _325Dom = __webpack_require__(0);
var scenes = __webpack_require__(1);
var sceneguide = __webpack_require__(6);

module.exports = function (_id, _params) {
    sceneguide(_params);

    _325Dom.render(scenes, "<scene-guide />");
    return scenes;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by 宇 on 2019/5/31.
 */
var sceneFun = __webpack_require__(2);
var scenes = __webpack_require__(1);
var ContextConf = {
    data: {},
    prepare: function prepare(state, conf) {
        if (!state) return {};
        var bindData = {};
        sceneFun.setObjValue(conf.reqSchema, bindData, state);
        var params = {
            header: conf.header
        };
        params.header.iserial = Math.iserial();
        params.header.ikey = "_325-qrf";
        params.header.imodule = "lessons";
        _325_extend(params, bindData);
        return params;
    },
    bindServerSchema: {}
};
module.exports = ContextConf;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var sceneFun = __webpack_require__(2);
var ContextConf = __webpack_require__(4);
module.exports = {
    post: function post(domsInScene, status) {
        var data = sceneFun.variablesToData(domsInScene.variables);
        var conf = ContextConf.bindServerSchema[status];
        if (!conf) conf = {};
        conf = _325_clone(conf); //克隆一份，以免冲突
        var successFun = conf.success;
        var errorFun = conf.error;
        conf.success = successFun && typeof successFun == 'function' ? successFun.bind(conf, domsInScene) : function (ret) {
            try {
                if ((typeof ret === "undefined" ? "undefined" : _typeof(ret)) != 'object') ret = JSON.parse(ret);
                console.log(ret);
            } catch (e) {
                console.log(e);
            }
        };
        conf.error = errorFun && typeof errorFun == 'function' ? errorFun.bind(conf, domsInScene) : function (err) {
            console.log(err);
            successFun(domsInScene, err);
        };
        new this.connection(status, conf).Post(data);
    },
    connection: function connection(status, conf) {
        var self = this;
        self.Post = function (state) {
            var params = conf.prepare(state, conf); //上送前参数预处理
            _325_ajax.postJSON({
                headers: { token: "123456" }, //加一个token
                url: conf.url,
                cache: true,
                async: true,
                data: params,
                success: conf.success,
                error: conf.error,
                time: conf.time ? conf.time : 60000
            });
        };
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _325Dom = __webpack_require__(0);
var scenes = __webpack_require__(1);
var httpFun = __webpack_require__(5);
module.exports = function (params) {
    var scene = scenes.sceneguide = {};
    scene.variables = {};

    scene.events = {};

    scene.events.init = function () {};

    _325Dom.definedDoms({
        'comp-sceneguide': "<div attr-2=\"\" class=\"app-container\"><aside>\n    \u5F15\u5BFC\u9875\u5BF9\u4E8E\u4E00\u4E9B\u7B2C\u4E00\u6B21\u8FDB\u5165\u9879\u76EE\u7684\u4EBA\u5F88\u6709\u7528\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u4ECB\u7ECD\u4E0B\u9879\u76EE\u7684\u529F\u80FD\u3002\u672C Demo \u662F\u57FA\u4E8E\n    <a href=\"https://github.com/kamranahmedse/driver.js\" target=\"_blank\">driver.js.</a></aside> <button type=\"button\" class=\"el-button el-button--primary el-button--medium\"><i class=\"el-icon-question\"></i><span>\n    \u6253\u5F00\u5F15\u5BFC\n  </span></button></div>"

    }, scene);
    _325Dom.definedScene("scene-guide", {
        domsInScene: scene
    }, scenes);
    scene.events.init();
    return scene;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Dispatch = __webpack_require__(3);
var routePath = _325.getRealPath("component.js");
_325.resourceRecord[routePath] = Dispatch;

/***/ })
/******/ ]);
//# sourceMappingURL=component.js.map