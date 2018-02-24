precision mediump float;

uniform vec4 u_lightDirection;
uniform vec4 u_lightColor;

varying vec4 v_color;
varying vec4 v_normal;
varying vec4 v_lightColor;
varying vec4 v_lightDirection;

void main(){
    gl_FragColor = v_color;
}