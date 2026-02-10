// Ejercicio splice
console.log("--- Ejercicio splice ---");
let animales = ["gato", "perro", "pez", "cangrejo"];
console.log(animales);
animales.splice(1, 2, "pajaro");  
console.log(animales);
animales = ["gato", "perro", "pez", "cangrejo"];
animales.splice(2, 1, "pajaro");  
console.log(animales);

// Ejercicio includes
console.log("--- Ejercicio includes ---");
let fruites = ["manzana", "pera"];
console.log(fruites.includes("pera"));  
console.log(fruites.includes("platano")); 

// Ejercicio forEach
console.log("--- Ejercicio forEach ---");
let frutas = ["poma", "pera", "plàtan"];
frutas.forEach(fruita => console.log("M'agrada la", fruita));

// Ejercicio Concat
console.log("--- Ejercicio Concat ---");
let a = [1, 2];
let b = [3, 4];
let d = [5, 6];
let c = a.concat(b);
console.log(c);
console.log(a);
c = c.concat(d);
console.log(c);

// Ejercicio slice separador
console.log("--- Ejercicio slice separador ---");
let paraules = ["Hola", "món"];
console.log(paraules.join(" "));

// Ejercicio slice inici/final
console.log("--- Ejercicio slice inici/final ---");
let nombres = [10, 20, 30, 40, 50, 55, 77];
console.log(nombres.slice(5, 6));

// Ejercicio length
console.log("--- Ejercicio length ---");
let colors = ["vermell", "blau", "groc", "verd", "taronja"];
console.log(colors.length);

// Ejercicio at
let nombres2 = [100, 200, 300];
console.log(nombres2.at(-1));





