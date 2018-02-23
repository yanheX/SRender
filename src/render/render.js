class render {
    constructor(canvas){
        this.document = canvas;
        this.init();
    }

    init(){
        this.createGL();
    }

    createGL(){
        this.gl = this.document.getContext('webgl') || this.document.getContext('experimental-webgl')
        if(!this.gl){
            throw 'ERROR: 当前浏览器不支持webgl'
        }
    }

    
}