             
export const extractIdAndNameFromArguments = ({ id, name }) => {

    return `${id}${name}`;
};

export const extractIdAndNameFromObject = object => {

    const { id, name } = object;

    return `${id}${name}`;
};

export const extractParcela = object => {

    const { parcela:{parcela: numeroparcela} } = object;

    return numeroparcela;
};

export const extractParcelaFromObjetoCampos = (object, ...campos) => {

    /*let retorno = {}
    campos.forEach(e => {
        retorno[e] = object[e];
    });

    return retorno;*/
    return Object.keys(object)
            .filter(k => campos.includes(k))
            .reduce((a, k) => {a[k] = object[k]; return a;}, {}) 
};