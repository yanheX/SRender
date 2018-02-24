import kit from '../app/kit';
import Node from '../core/Node3d';

class Mesh extends Node{
    constructor(geo, mat){
        this.geometry = geo;
        this.material = mat;

    }
}

export default Mesh;