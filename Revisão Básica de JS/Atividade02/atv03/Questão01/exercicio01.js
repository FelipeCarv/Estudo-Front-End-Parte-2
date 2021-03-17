const excluirPropriedades = (objeto, propriedades) => {
    
};

var exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b'])); // { a: 1, c: true }
exemplo = { a: 1, b: 2, c: true };
console.log(excluirPropriedades(exemplo, ['b', 'a'])); // { c: true }