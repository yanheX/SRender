let shaderTemplate = {
    lowp: 'precision lowp float;\n'
    , mediump: 'precision mediump float; \n'
    , highp: 'precision highp float; \n'
    , a_normal: ''
    , u_viewMat: 'uniform Matrix4 u_viewMat4;\n'
    , u_modelMat: 'uniform Matrix4 u_modelMat4;\n'
    , mainStart: 'void main(){\n'
    , mainEnd:'}\n'
}