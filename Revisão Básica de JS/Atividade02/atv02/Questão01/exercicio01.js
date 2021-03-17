const excluir = (array, itensParaExcluir) => {
   var a = array.filter(elemento => {
       return itensParaExcluir.indexOf(elemento) == -1
   });
    
   return a;
}

//var exemplo = [1, 2, 3, 1, 2];
//console.log(excluir(exemplo, [1, 2]));

//exemplo = ['a', 'b', 'a', 'd', 'e', 'a'];
//console.log(excluir(exemplo, ['a', 'd'])); // [ 'b', 'e' ]

//exemplo = [true, false, false, true, true, false, false];
//console.log(excluir(exemplo, [true])); // [ false, false, false, false ]