
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
 import kit from '../app/kit.js';
 import mat4 from '../math/mat4.js';
 import vec3 from '../math/vector3.js';

 class geometry{
	 constructor(){
		this.coords = [];
		this.indexes = [];
		this.faces = [];
		this.normals = [];
		this.globalMat = new mat4();
		this.transformMat = new mat4();
		this.scale = new vec3(1,1,1);
		this.translate = new vec3(0,0,0);
		this.rotate = new vec3(0,0,0);
		this.name;
		this._code = kit.genRandomCode(4,5,'-');
		this.type = 'geometry';
	 }

	 computeFace(){

	 }

	 computeNormal(){
		 
	 }

	 
 }

 export default geometry;