class vec4{
    constructor(x, y, z, w){
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
        this.w = z || 1;
        this.type = 'vec4';
    }

    normalize(){
        if(!this.w){
            console.warn('error:vector4\'s w can\'t be 0 or undefined when normalize')
            return ;
        }
        this.x /= this.w;
        this.y /= this.w;
        this.z /= this.w;
        this.w /= this.w;
    }

    plus(){

    }

    dot(){

    }

    minus(){
        
    }
}

export default vec4;