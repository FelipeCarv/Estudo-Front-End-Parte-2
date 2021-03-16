/**
 * Arrays é uma estrutura de dados que nos permite armazenar diferentes tipos de dados de maneira sequêncial.
 * Arrays podem armazenar qualquer tipo de dado.
 * Array que armazena o mesmo tipo de dado é um array homogêneo.
 * Array que armazena diferentes tipos de dados é um array heterogêneo.
 * Os arrays possuem posições que são identificados através dos indices da posição do elemento. iniciando pelo 0.
 */

//------------------------------------------------------------------------------

/**
 * Array homogêneo e heterogêneo
 * */

var arrayhomo = ['segunda', 'terça', 'quarta']; //array de string;
var arrayhete = ['domingo', 3, true]; //array de string, inteiros e booleanos.

//verificando o elemento pelo indice

//console.log(arrayhomo); //imprime todo os elementos do array.
//console.log(arrayhete[1]); //imprime o primeiro elemento do array.

//------------------------------------------------------------------------------

/**
 * Podemos também modificar os elementos de um array acessando o mesmo através de sua posição no array.
 */

arrayhete[2] = false; //realizada a modificação do elemento 'true' para 'false' através do acesso ao elemento.
//console.log(arrayhete);

//------------------------------------------------------------------------------

/**
 * Outra funcionalidade muito interessante é a propriedade 'length'. Podemos retornar o tamanho do array.
 */

const listaCompras = ['ovos', 'manteiga', 'leite', 'queijo', 'pão'];
//console.log('O array possui '+ listaCompras.length + ' elementos.');

//------------------------------------------------------------------------------

/**
 * O Método push é um metodo destrutivo pois modifica o array original. O 'push', adiciona itens no fim do array.
 * O Método 'pop' remove o ultimo item de um array.
 */

const objetivos = ['Estudar JS', 'Passar nas disciplinas da faculdade', 'Trabalhar com TI'];
objetivos.push('Ganhar muito dinheiro', 'relaxar', 'beber muito'); //adicionando no final do array
//console.log(objetivos);

//pop
objetivos.pop();//removeu o ultimo elemento do array.
//console.log(objetivos);
//------------------------------------------------------------------------------

/**
 * O metodo 'shift()' é semelhante ao 'pop()', entretanto, remove o primeiro elemento do array.
 * O metodo 'unshift()' é semelhante ao 'push()', entretanto, adiciona um elemento, no inicio do array.
 */

//unshift()
objetivos.unshift('Dormir bem'); //informação adicionada no primeiro elemento do array.
//console.log(objetivos);

//shift()
objetivos.shift();// removeu o primeiro elemento do array.
//console.log(objetivos);

//------------------------------------------------------------------------------

/**
 * O metodo 'Splice(x,y,z)' permite adicionar ou remover um elemento no meio ou em qualquer posição do array.
 * O x é obrigatório e representa a posição onde será add/removido os itens.
 * O y é opcional e indica quantos itens serão removidos.
 * O z é p campo para adicionar um novo elemento.
 * 
 * O metodo 'Slice(x,y)' retorna um array contendo uma cópia de determinado intervalo de elementos do array.
 * O x é o indice inicial e o y é o indice final.
 * O array original não é modificado.
 */

//splice()
const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3'];

mensagens.splice(1, 1); //a partir do elemento 1, remove 1 elemento.
//console.log(mensagens); // [ 'Mensagem 1', 'Mensagem 3' ]

mensagens.splice(1, 0, 'Nova Mensagem');//a partir do elemento 1, não remove, mas adiciona um novo elemento.
//console.log(mensagens); // [ 'Mensagem 1', 'Nova Mensagem', 'Mensagem 3' ]

mensagens.splice(2, 1, 'Nova Mensagem 3'); // a partir do elemento 2, remove o elemento 2 e adiciona um novo.
//console.log(mensagens); // [ 'Mensagem 1', 'Nova Mensagem', 'Nova Mensagem 3' ]

//slice()

const letras = ['a', 'b', 'c', 'd', 'e', 'f'];

let resultado = letras.slice(1, 4);
//console.log(resultado); // [ 'b', 'c', 'd' ]
//------------------------------------------------------------------------------

/**
 * O metodo 'Concat()' permite concatenar dois arrays e retorna como parametro, o array concatenado.
 */

//concat()

const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
const array3 = ['e', 'f'];

const res = array1.concat(array2).concat(array3);

//console.log(res); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//------------------------------------------------------------------------------

/**
 * O método 'forEach()' permite percorrer elemento a elemento do array e executar alguma função nos mesmos.
 * Portanto o método forEach() recebe como argumento uma função, também chamada de função de callback.
 */

//forEach()

//const array = ['João', 'Maria', 'Daniel', 'Alice'];

array.forEach((elemento, indice) => { 
    array[indice] = elemento.toUpperCase();
});

//console.log(array);  // [ 'JOÃO', 'MARIA', 'DANIEL', 'ALICE' ]

//------------------------------------------------------------------------------

/**
 * O metodo every() verifica se todos os elementos satisfazem alguma condição estabelecida, se sim, retorna true.
 * O metodo some() verifica todos os elementos e retorna true se houver um elemento que satisfaça a condição
 * estabelecida.
 */

 let numeros = [12, 19, 7, 33, 91, 77, 3, 11];

 let todosMaioresQueTrinta = numeros.every(n => {return n > 30});

 let algumMaiorQueTrinta = numeros.some(n => {return n > 30});

 //console.log('Todos os números são maiores que 30? ' + todosMaioresQueTrinta); // false
 //console.log('Tem algum número maior que 30? ' + algumMaiorQueTrinta); // true

 //------------------------------------------------------------------------------

 /**
  * O método filter() cria um novo array baseado em um array pré existente que satisfaçam algumas condições 
  * estabelecidas em uma função.
  * 
  * O método map() cria um novo array composto dos resultados da execução de uma função anterior.
  * 
  * O método reduce() executa uma função provida pelo usuário e retorna apenas um valor. Imagine a soma
  * de todos os elementos de um array, por exemplo.
  */

 //filter()

const palavras = ['universidade', 'web', 'javascript', 'disciplina', 'aluno', 'nota'];
const re = palavras.filter(palavra => palavra.length > 6);

//console.log(re); // [ 'universidade', 'javascript', 'disciplina' ]


//map()
const array = [1, 4, 9, 16];
const r = array.map(x => x * 2);

//console.log(r); // [ 2, 8, 18, 32 ]


//reduce()

const array = [1, 4, 9, 16];
const result = array.reduce( (acumulado, valor) => acumulado + valor );

//console.log(result); // 30

//------------------------------------------------------------------------------

/**
 * O método sort() é um metodo capaz de ordenar os elementos de um array
 * Se quisermos ordenar de maneira descendente, basta invocar o sort() normalmente
 * para ordenar de maneira crescente e chamar o método reverse() para reverter a ordem do array em questão.
 */

 const exemplo = ['Bob', 'Alice', 'Carlos'];
 //console.log(exemplo.sort()); // [ 'Alice', 'Bob', 'Carlos' ]

//------------------------------------------------------------------------------

/**
 * O método indexOf() realiza uma busca no array e retorna o indice da primeira ocorrência.
 * 
 * O método find() realiza uma busca no array e retorna a primeira ocorrência do array.
 * 
 * O método findIndex() realiza uma busca no array e retorna o índice da primeira ocorrência no array
 * que satisfaça uma função passada.
 */


//indexOf()
const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3', 'Mensagem 2'];
var busca = mensagens.indexOf('Mensagem 2');

//console.log(busca); // 1


//find()
const array = [5, 12, 8, 130, 44];
const valor = array.find(item => item > 10);

//console.log(valor); // 12


//findIndex()
const mensagens = ['Mensagem 1', 'Mensagem 2', 'Mensagem 3', 'Mensagem 2'];
var busca = mensagens.indexOf('Mensagem 2');

//console.log(busca); // 1
//------------------------------------------------------------------------------