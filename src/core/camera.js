/**
 *
+----+----+----+----+
| Xx | Xy | Xz |  0 |  <- x axis
+----+----+----+----+
| Yx | Yy | Yz |  0 |  <- upDirection
+----+----+----+----+
| Zx | Zy | Zz |  0 |  <- z axis
+----+----+----+----+
| Tx | Ty | Tz |  1 |  <- camera position
+----+----+----+----+
 */
class camera{
    constructor(){
        this.viewMat = new mat4();
        this.upDirection = new vec4();
        this.eyeDirection = new vec4();
        this.
        this.position = new vec4();
    }

    lookAt(){

    }

}

export default camera;