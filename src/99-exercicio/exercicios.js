
const mergeObjetos = (result, obj, properties) => {

    properties.forEach(e => {
        result[e] = obj[e];
    });

    return result;
};

const merge = (obj1, obj2) => {

    const result = {};

    /*result.id = obj1.id;
    result.nome = obj1.nome;
    result.email = obj2.email;
    result.telefone = obj2.telefone;*/

    /*Object.getOwnPropertyNames(obj1).forEach(function(val, idx, array) {
        result[val] = obj1[val];
    });

    Object.getOwnPropertyNames(obj2).forEach(function(val, idx, array) {
        result[val] = obj2[val];
    });*/

    const objetos = [obj1, obj2];
    objetos.forEach(objeto => {
        Object.keys(objeto).forEach( k => result[k] = objeto[k])
    });

    return result;
};

const mergeComSpreed = (obj1, obj2) => {

    return {
        ...obj1,
        ...obj2
    }
    
};

const mergeArray = (array1, array2) => {

    /*const result = [];
    for(let i in array1){
        result.push(i);
    }

    for(let i in array2){
        result.push(i);
    }

    return result;*/

    /*const arrayResultado = [];
    array1.forEach(v => arrayResultado.push(v));
    array2.forEach(v => arrayResultado.push(v));

    return arrayResultado;*/

    //return array1.concat(array2);

    return [
        ...array1,
        ...array2
    ];
    
};
 
module.exports = { mergeObjetos, merge, mergeComSpreed, mergeArray };