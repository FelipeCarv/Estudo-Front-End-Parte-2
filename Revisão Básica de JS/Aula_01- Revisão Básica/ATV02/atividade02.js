//Formula de Bhaskara
var delta, x1, x2;

const a = 0;
const b = 20;
const c = 5;



delta = Math.pow(b,2) - ((4 * a) * c);

if (delta <= 0) {
   console.log("Impossivel calcular.");
} else{


    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    

    console.log(x1);
    console.log(x2);

}

