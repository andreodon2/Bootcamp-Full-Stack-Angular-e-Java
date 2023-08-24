// O QUE SÃO VETORES OU ARRAYS

// COMO DECLARAR

// let array = ['string', 1, true];
// console.log(array);

let array = ['string', true, 1, ['aray1', 'array2', 'array3'], ['array4']];
// console.log(array[4]);

// FOREACH

// array.forEach(function(item, index){console.log(item, index)});

// PUSH - adiciona um novo item no final

// array.push('novo item')
// console.log(array);

// POP - remove um item no final

// array.pop();
// console.log(array);

// SHIFT - remote um item no início

// array.shift();
// console.log(array);

// UNSHIFT - adiciona um item no início

// array.unshift('novo item no início');
// console.log(array);

// indexOf - diz qual o índice de um elemento no array

// console.log(array.indexOf(true));

// splice - remove ou substitui um item pelo indice

// array.splice(0, 2);
// console.log(array);

// slide - retorna uma parte de um array existente

// let novoArray = array.slice(0, 2);
// console.log(novoArray);

// OBJETOS - Possuem propriedades e valores que definem caracteristicas e devem ser declarados entre chaves {}

let object = { 
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'objetoInterno'
    }
};

// console.log(object.boolean);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);