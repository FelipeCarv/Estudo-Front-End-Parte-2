
function calcularSuprimento(idade, quantidadePorDia, preco){
    let conversor = idade * 365;
    return conversor * (quantidadePorDia*preco);
};

let idade = 85;

console.log(`Você precisará pagar R$ ` + calcularSuprimento(idade, 2, 10,0) + 
            ` para ter um suprimento de lanches até os `+ idade + ' anos');