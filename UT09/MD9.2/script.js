//pruebas truncar
console.log("EjercicioPrueba")
function truncar(numero, decimales) {
  const factor = 10 ** decimales
  return Math.trunc(numero * factor) / factor
}
truncar(3.14159, 2)
truncar(9.999, 2)    
truncar(1.239, 2)  
console.log(truncar(3.65324234, 2))
//ejercicio1
console.log("--------Ejercicio1--------")
console.log("Resultat: PI:", Math.PI);
console.log("Resultat: E:", Math.E);
//ejercicio2
console.log("--------Ejercicio2--------")
console.log("Resultat: Math.LN2:", Math.LN2);  
console.log("Resultat: Math.SQRT2:", Math.SQRT2); 
console.log("--------Ejercicio3--------")
const num1 = 7.8;
console.log("Resultat: Math.round(7.8):", Math.round(num1));
console.log("Resultat: Math.round(num):", Math.round(num1));
//ejercicio4
console.log("--------Ejercicio4--------")
console.log("Resultat: Math.ceil(7.2):", Math.ceil(7.2));
//ejercicio5
console.log("--------Ejercicio5--------")
console.log("Resultat: Math.floor(7.8):", Math.floor(7.8));
//ejercicio6
console.log("--------Ejercicio6--------")
let num2 = 10.567;
num2 = num2 % 1;
console.log(num2);
let acursarDecimal = +num2.toFixed(2);
console.log(acursarDecimal);
//ejercicio7
console.log("--------Ejercicio7--------")
console.log("Resultat: Math.random():", Math.random());

//ejercicio8
console.log("--------Ejercicio8--------")
const aleatori = Math.floor(Math.random() * 100 + 1);
console.log("Resultat: Aleatori entre 1 i 100:", aleatori);

//ejercicio9
console.log("--------Ejercicio9--------")
console.log("Resultat: 2^3:", Math.pow(2,3));

//ejercicio10
console.log("--------Ejercicio10--------")
console.log("Resultat: sqrt(16):", Math.sqrt(16));

//ejercicio11
console.log("--------Ejercicio11--------")
console.log("Resultat: Math.min(4,7,1):", Math.min(4,7,1));
console.log("Resultat: Math.max(4,7,1):", Math.max(4,7,1));

//ejercicio12
console.log("--------Ejercicio12--------")
console.log("Resultat: Math.sin(Math.PI/2):", Math.sin(Math.PI/2));
console.log("Resultat: Math.cos(Math.PI):", Math.cos(Math.PI));
console.log("Resultat: Math.tan(Math.PI/4):", Math.tan(Math.PI/4));
