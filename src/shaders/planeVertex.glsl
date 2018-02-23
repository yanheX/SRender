precision mediump float;
attribute vec4 a_position;
attribute vec4 a_normal;
attribute vec4 a_color;
attribute vec4 a_isSmooth;

uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;
uniform mat4 u_modelMatrix;

varying vec4 v_color;
varying vec4 v_normal;
varying bool v_isSmooth;

void main(){
    a_position = u_projectionMatrix * u_viewMatrix * u_modelMatrix * a_position;
    v_color = a_color;
    gl_Position = a_position;
}