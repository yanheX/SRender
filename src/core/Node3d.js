import kit from '../app/kit';

class node3d{
    constructor(){
        this.parent = null;
        this.childs = [];
        this.globalMat = new mat4();
		this.transformMat = new mat4();
		this.scale = new vec4(1,1,1,0);
		this.translate = new vec4(0,0,0,0);
        this.rotate = new vec4(0,0,0,0);
        
        this.type = 'node3d';
    }

    append(node){
        if(!node.type){
            throw '';
        }

        this.childs.push(node);
        node.parent = this;
        node.globalMat = this.globalMat.multiply(this.translate)
    }

    insert(){

    }

    prepend(){

    }

    remove(node){
        let index = this.childs.indexOf(node);
        if(index < 0){
            console.warn('');
            return;
        }
        this.childs.splice(index, 1);

    }

    empty(){
        for(let i = this.childs.length - 1; i >= 0; i--){
            this.remove(this.childs[i]);
        }

    }

    replace(tar, node){
        let index = this.childs.indexOf(tar);
        if(index < 0){
            this.append(node);
            return;
        }
        this.childs.splice(index, 1, node);
    }

    translate(x, y, z){

        this.updateTransformMat();
    }

    rotate(x, y, z){

        this.updateTransformMat();
    }

    scale(x, y, z){

        this.updateTransformMat();
    }

    updateTransformMat(){

    }
}

export default node3d;