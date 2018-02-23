import Geometry from '../core/geometry.js';

/**
 * @param width Number
 * @param height Number
 * @param widthSegment[op] Number default: 10
 * @param heightSegment[op] Number default: 10
 */

class planeGeometry extends Geometry{
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

export default planeGeometry;