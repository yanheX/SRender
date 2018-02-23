let kit = {};

/**
 * 
 * @param {Number} sNumber 单组数量
 * @param {Number} zNumber 组别数量
 * @param {String} connector 连接符
 */

kit.genRandomCode = (sNumber, zNumber, connector) => {
    if(!connector){
        connector = '';
        sNumber = sNumber * zNumber;
        zNumber = 1;
    }
    let code = '';
    for(let z = 0; z < zNumber; z++){
        code += kit.genRandomString(sNumber);
        if(z !== zNumber - 1){
            code += connector;
        }
    }
    return code;
}

kit.genRandomString = (number) => {
    let key = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
    let str = '';
    for(let i = 0; i < number; i++){
        str += key[kit.genRandomInt(0, key.length)];
    }
    return str;
}

kit.genRandomInt = (start, end) => {
    return parseInt(Math.random() * (end - start) + start);
}

kit.isNumber = (n) => {
    return !isNaN(Number(n));
}

export default kit;
