import { extractIdAndNameFromArguments, 
         extractIdAndNameFromObject, 
         extractParcela,
         extractParcelaFromObjetoCampos } from './destructuring';

test(' destructuring from function args', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromArguments(object);

    expect(result).toEqual('1Eduardo');
});

test(' destructuring from object', () => {

    const object = {
        id: 1,
        name: 'Eduardo',
        email: 'eduardoj.gardin@gmail.com',
        phone: '5544999493885'
    };
    const result = extractIdAndNameFromObject(object);

    expect(result).toEqual('1Eduardo');
});

test(' destructuring from parcela', () => {

    const debito = {
        id: 1,
        tipocadastro:2,
        cadastro: 1,
        parcela: {
            tipocadastro:2,
            cadastro: 1,
            parcela: 10      
        }
    };
    const result = extractParcela(debito);

    expect(result).toEqual(10);
});

test(' destructuring from pessoa', () => {

    const pessoa = {
        id: 1,
        nome:'FULANO',
        telefone: 44996641212,
        cpf: '45725847896',
        rg: '75892589'
    };

    const result = extractParcelaFromObjetoCampos(pessoa, 'id', 'nome');
    
    expect(result.id).toEqual(1);
    expect(result.nome).toEqual('FULANO');
    expect(result.rg).toBeUndefined();
});