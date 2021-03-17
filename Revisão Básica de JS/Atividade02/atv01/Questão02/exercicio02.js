
function formulaQuadrado(lado){
    var a = lado*lado;
    return a;
}

function formulaCirculo(raio){
    var a = (3,14 * (raio*raio));
    return a;
}


function calcularArea(propriedade, formula){
    return formula(propriedade) ;
}


console.log(calcularArea(5, formulaQuadrado));
console.log(calcularArea(2 , formulaCirculo));