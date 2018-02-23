import kit from '../app/kit.js'

class mat2{
    constructor(arr){
        if(!arr || arr.length !== 4 || !arr.every(kit.isNumber)){
            arr = this.getIdentify()
        }
        this.elements = arr;
        this.type = 'mat2';
    }
    
    getIdentify(){
        return [1,0,0,1];
    }

    plus(){

    }

    minus(){

    }

    multiply(tar){
        let type = 'scalar'
        if(tar.type){
            type = tar.type;
        } else {
            type = kit.isNumber(tar) ? type : 'outer';
        }

        switch(type){
            case 'scalar':
            this.multiplyScalar(tar);
            break;
            case 'mat2':
            this.multiplyMat2(tar);
            break;
            case 'vec2':
            this.multiplyVec2(tar);
            break;
            default: 
            console.warn('无法进行乘法运算');
            break;
        }
    }

    multiplyScalar(s) {
        this.elements.forEach(e => e = e * s);
    }

    multiplyVec2(v) {

    }

    multiplyMat2(m) {

    }

    inverse(){

    }

    transposition(){
        
    }
}

export default mat2;