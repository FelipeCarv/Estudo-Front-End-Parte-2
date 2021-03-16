
/**
- Existem diversas formas de se declarar funções, mas a mais comum é usando o préfixo "function".
- Funções nos permite ter maior controle sobre o nosso código, pois um comando de uma função
  só pode ser executado se a função for chamada.
- Declaramos uma função da seguinte forma: 'function nomeDaFuncao(parametroDaFuncao){..comandos..};'
- Para chamar uma função criada, basta apenas chamar o nome da função seguido de seus parametros (Caso tenha).
- Um exemplo de chamada de função: 'nomeDaFuncao();'.
- Os parâmetros permite que dados entrem na função para que algumas ações possam ser realizadas.
- Algumas funções que realizam tarefas especificas, exigem que retornos sejam realizados.
*/


//criando funções.
function olaMundo() {
  console.log('Olá Mundo!');
};

function olaMundoIngles() {
  console.log('Hello World!');
};

//chamando as funções criadas
//olaMundo();
//olaMundoIngles();

//--------------------------------

//funções com parametros e retornos.

function bomDia(nome) {
  console.log('Bom dia ' + nome + "!");
}

//chamando a função com parametro.
//bomDia('Felipe');

//função com retorno
function soma(x, y) {
  let resultado = x + y;

  return console.log('a soma entre os valores informados é: ' + resultado);
}

//chamando a função com retorno.
//soma(1,2);

//--------------------------------

/**
 * Funções que são chamadas dentro de outra função, são denominadas funções auxiliares
 */

function multiplicaPorNoveQuintos(numero) {
  return numero * (9 / 5);
}

function converteFahrenheint(celsius) {
  return multiplicaPorNoveQuintos(celsius) + 32; //chamando a função auxiliar.
}

//console.log('A temperatura atual é de '+converteFahrenheint(15) + " ºF"); // retorna 59

//--------------------------------

/**
 * Expressão de função ocorre quando declaramos uma função dentro de uma variável.
 * neste caso, as funções não possuem um nome em especifico e devem possuir retorno.
 */

var eFimDeSemana = function (dia) {
  if (dia == 'sábado' || dia == 'domingo') {
    return true;
  } else {
    return false;
  }
}

console.log (eFimDeSemana('sábado'));

//--------------------------------

/**
 * Funções flecha são funções semelhantes a expressão de função, mas neste caso, omitimos o prefixo function.
 * fazemos uso também do sinal =>.
 */

var calcularArea = (comprimento, altura) => {
  return comprimento * altura;
}

//console.log('A área é de: '+calcularArea(10,6));