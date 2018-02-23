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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_kit_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math_mat4_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math_vector3_js__ = __webpack_require__(8);

/**
 * coords 点坐标
 * indexes 点坐标序列
 * faces 由点坐标构成的面片
 * normals 面片上各点的法向量，与点坐标序列（indexes）一一对应
 * globalMat  全局矩阵
 * transformMat 自身变换矩阵
 * uvs 贴图坐标，由coords与indexes计算所得
 * 
 */
 
 
 

 class geometry{
	 constructor(){
		this.coords = [];
		this.indexes = [];
		this.faces = [];
		this.normals = [];
		this.globalMat = new __WEBPACK_IMPORTED_MODULE_1__math_mat4_js__["a" /* default */]();
		this.transformMat = new __WEBPACK_IMPORTED_MODULE_1__math_mat4_js__["a" /* default */]();
		this.scale = new __WEBPACK_IMPORTED_MODULE_2__math_vector3_js__["a" /* default */](1,1,1);
		this.translate = new __WEBPACK_IMPORTED_MODULE_2__math_vector3_js__["a" /* default */](0,0,0);
		this.rotate = new __WEBPACK_IMPORTED_MODULE_2__math_vector3_js__["a" /* default */](0,0,0);
		this.name;
		this._code = __WEBPACK_IMPORTED_MODULE_0__app_kit_js__["a" /* default */].genRandomCode(4,5,'-');
		this.type = 'geometry';
	 }

	 computeFace(){

	 }

	 computeNormal(){
		 
	 }

	 
 }

 /* harmony default export */ __webpack_exports__["a"] = (geometry);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let kit = {};

/**
 * 
 * @param {Number} sNumber 单组数量
 * @param {Number} zNumber 组别数量
 * @param {String} connector 连接符
 */

kit.genRandomCode = (sNumber, zNumber, connector) => {
    if(!connector){
        connector = '';
        sNumber = sNumber * zNumber;
        zNumber = 1;
    }
    let code = '';
    for(let z = 0; z < zNumber; z++){
        code += kit.genRandomString(sNumber);
        if(z !== zNumber - 1){
            code += connector;
        }
    }
    return code;
}

kit.genRandomString = (number) => {
    let key = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let str = '';
    for(let i = 0; i < number; i++){
        str += key[kit.genRandomInt(0, key.length)];
    }
    return str;
}

kit.genRandomInt = (start, end) => {
    return parseInt(Math.random() * (end - start) + start);
}

kit.isNumber = (n) => {
    return !isNaN(Number(n));
}

/* harmony default export */ __webpack_exports__["a"] = (kit);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_kit__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_orthCamera__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__camera_orthCamera___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__camera_orthCamera__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_perspectiveCamera__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera_perspectiveCamera___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__camera_perspectiveCamera__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_camera__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_face3__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_face3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__core_face3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_geometry__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__geometry_lineGeometry__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__geometry_planeGeometry__ = __webpack_require__(10);









window.chart3d = {
    plane: __WEBPACK_IMPORTED_MODULE_7__geometry_planeGeometry__["a" /* default */]
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

class orthCamera{
    /**
     * 
     * @param {*} left 
     * @param {*} right 
     * @param {*} bottom 
     * @param {*} top 
     * @param {*} near 
     * @param {*} far 
     */
    constructor(left, right, bottom, top, near, far){
        this.viewMat = new Mat4();

    }
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class camera{
    constructor(){

    }
}

/* unused harmony default export */ var _unused_webpack_default_export = (camera);

/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class mat4{
    constructor(){
        console.log('mat4');
    }
}

/* harmony default export */ __webpack_exports__["a"] = (mat4);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class vec3{
    constructor(x, y, z){
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.type = 'vec3'
    }

    dot(){

    }

    plus(){

    }

    minus(){
        
    }
}

/* harmony default export */ __webpack_exports__["a"] = (vec3);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_geometry_js__ = __webpack_require__(0);



/**
 * @param lineWidth Number
 * @param path Array[Number,...]
 * @param type[op] String default: normal; all: normal, dotted, curve 
 * 
 */

class lineGeometry extends __WEBPACK_IMPORTED_MODULE_0__core_geometry_js__["a" /* default */]{
    constructor(){
        super();

    }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_geometry_js__ = __webpack_require__(0);


/**
 * @param width Number
 * @param height Number
 * @param widthSegment[op] Number default: 10
 * @param heightSegment[op] Number default: 10
 */

class planeGeometry extends __WEBPACK_IMPORTED_MODULE_0__core_geometry_js__["a" /* default */]{
	constructor(width, height, widthSegment, heightSegment){
		super();
		this.width = width;
		this.height = height;
		this.widthSegment = widthSegment || 10;
		this.heightSegment = heightSegment || this.widthSegment;
		this.init();
	}

	init(){
		this.computeCoords();
		this.computeIndexes();
		this.computeFace();
		this.computeNormal();
		this.computeUvs();
	}

	computeCoords(){
		for(let h = 0; h <= this.heightSegment; h++){
			for(let w = 0; w <= this.widthSegment; w++){
				let x = w / this.widthSegment * this.width;
				let y = h / this.heightSegment * this.height;
				let z = 0;
				this.coords.push(x, y, z);
			}
		}
		return this;
	}

	computeIndexes(){
		for(let i = 0; i < this.widthSegment * this.heightSegment; i++){
			let supIndex = [i, i + 1, i + this.widthSegment + 1];
			let subIndex = [i + 1, i + 1 + this.widthSegment + 1, i + this.widthSegment + 1];
			this.indexes.push(...supIndex);
			this.indexes.push(...subIndex);
		}
		return this;
	}

	computeUvs(){

	}
}

/* harmony default export */ __webpack_exports__["a"] = (planeGeometry);

/***/ })
/******/ ]);