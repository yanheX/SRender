class webglRender{
    constructor(element, camera, op){
        this._op = {
            CULL_FACE: true
            , DEPTH_TEST:true
        }
    }

    createShader(){

    }

    createProgram(){

    }

    replaceShader(){

    }

    replaceProgram(){

    }

    resize(){

    }

    clear(){
        let gl = this.gl;
        gl.clearColor(0,0,0,0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.clear(gl.DEPTH_BUFFER);
    }


    render(){

    }

    sort(){

    }

    draw(){

    }

    
}