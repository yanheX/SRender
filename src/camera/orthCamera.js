import kit from '../app/kit';
import Node from '../core/Node3d';

class orthCamera extends Node{
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
        this.viewMat = new mat4();
        
    }
}

export default orthCamera;