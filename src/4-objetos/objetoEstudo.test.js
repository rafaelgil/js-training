const { carmona, pessoas } = require('./objetoEstudo');

test(' Objetos literal', () => {    
    expect(carmona.nome).toEqual('Rafael Carmona');
    //expect(carmona.email).toEqual('rafael.carmona@elotech.com.br');
});