const { mergeObjetos, merge, mergeComSpreed, mergeArray } = require('./exercicios');

test('Merge entre dois objetos', ()=>{

    const obj1 = {
        id: 1,
        nome: 'Objeto 1'
    }

    const obj2 = {
        email: 'teste@teste.com',
        telefone: '44999114477'
    }

    let result = {};
    
    //mergeObjetos(result, obj1, ['id', 'nome']);
    //mergeObjetos(result, obj2, ['email', 'telefone'])

    //result = merge(obj1, obj2); 

    result = mergeComSpreed(obj1, obj2);

    expect(result.id).toEqual(1);
    expect(result.nome).toEqual('Objeto 1');
    expect(result.email).toEqual('teste@teste.com');
    expect(result.telefone).toEqual('44999114477');

});

test('Merge dois arrays', ()=>{

    const array1 = [1,2,3,4,5];
    const array2 = [10,20,30,40,50];

    const result = mergeArray(array1, array2);

    expect(result).toHaveLength(10);
});