//DADO UM VALOR, CALCULAR O ANO, MES E DIA
var num = 400;

var ano = num/365;
var mes = ano%30;
var dias = num%365 - 30;

if (dias > 30){
    dias = dias -30;
    mes += 1;

    console.log(Math.trunc(ano) + ' Ano(s)');
    console.log(Math.trunc(mes) + ' Mes(es)');
    console.log(Math.trunc(dias) + ' Dia(s)');
} else if(num == 30){

    mes+=1;
    console.log(Math.trunc(ano) + ' Ano(s)');
    console.log(Math.trunc(mes) + ' Mes(es)');
    console.log(Math.trunc(dias) + ' Dia(s)');
} else{

    console.log(Math.trunc(ano) + ' Ano(s)');
    console.log(Math.trunc(mes) + ' Mes(es)');
    console.log(Math.trunc(dias) + ' Dia(s)');
}



