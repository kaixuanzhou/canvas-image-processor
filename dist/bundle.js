window["CanvasProcessing"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Core = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by 80011690 on 2018/1/5.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _util = __webpack_require__(1);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 核心代码
 *
 */
var Core = exports.Core = function () {

    /**
     *
     * @param canvas  画布dom元素
     * @param params  配置参数
     */
    function Core(canvas, params) {
        _classCallCheck(this, Core);

        this.canvas = null;
        this.ctx = null;
        this.defaultParams = {};

        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * 根据图片地址绘制图片
     * @param path  路径
     * @param ctxParam   ctx.drawImaged的其他参数
     */
    //canvas context
    //配置参数默认值


    _createClass(Core, [{
        key: 'drawImage',
        value: function drawImage(path) {
            var _this = this;

            for (var _len = arguments.length, ctxParam = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                ctxParam[_key - 1] = arguments[_key];
            }

            _util2.default.loadImage(path, function (imgobj) {
                _this.ctx.drawImage(imgobj, ctxParam);
            });
        }
    }]);

    return Core;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by 80011690 on 2018/1/6.
 */
var Util = exports.Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    /**
     * 加载图片
     * @param path  路径
     * @param succCb  成功回调
     * @param errorCb  失败回调
     */


    _createClass(Util, [{
        key: 'loadImage',
        value: function loadImage(path, succCb, errorCb) {
            var imgobj = new Image();
            imgobj.onload = function () {
                succCb && typeof succCb === 'function' && succCb(imgobj);
            };
            imgobj.onerror = function () {
                errorCb && typeof errorCb === 'function' && errorCb(imgobj);
            };
            imgobj.src = path;
        }

        /**
         * 计算图片在容器里铺满的最小尺寸
         * @param yw  图片宽度
         * @param yh  图片高度
         * @param cw  容器宽度
         * @param ch  容器高度
         * @return {width,height,bl}  宽  高  比例
         */

    }, {
        key: 'minSize',
        value: function minSize(yw, yh, cw, ch) {
            var bl = 1;
            if (yw > yh) {
                bl = cw / yw;
            } else {
                bl = ch / yh;
            }
            return {
                width: yw * bl,
                height: yh * bl,
                bl: bl
            };
        }

        /**
         * 计算矩形在容器中居中时的位置
         * @param w 矩形宽
         * @param h 矩形高
         * @param cw 容器宽
         * @param ch 容器高
         */

    }, {
        key: 'getCenterPosition',
        value: function getCenterPosition(w, h, cw, ch) {
            return {
                x: (cw - w) / 2,
                y: (ch - h) / 2
            };
        }
    }]);

    return Util;
}();

/***/ })
/******/ ]);