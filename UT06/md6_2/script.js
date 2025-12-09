// Variables
let llistaNombres = [1, 2, 3, 4, 5];
let llistaMixta = ["Blanca", "Mateu", 33, true];


// Execució
console.log(typeof llistaNombres);     // "object" → és un array
console.log(typeof llistaMixta[1]);    // "string"
console.log(typeof llistaMixta[2]);    // "number"
console.log(typeof llistaMixta[3]);    // "boolean"


// Comprovació més exacta
console.log(Array.isArray(llistaNombres)); // true

//--- Exemple 1 ---
// Variables
let abecedari = ["a", "b", ["C", "D"], "e", "f"];
// Execució
console.log(abecedari[2]);

//--- Exemple 2 ---
// Variables
let nombres = [1200, [2200, 3200, 4200], 5200, 6200];
// Execució
console.log(nombres[1][nombres[1].length - 1]); // Mètode tradicional
console.log(nombres[1].at(-1));                 // Mètode modern

//--- Exemple 3 ---
// Variables
let arbres = ["taronjer", "perera", "pomera", ["ametller", "garrofer"]];
// Execució
console.log(arbres[1][2]);  // Extreu la lletra "r" de "perera"

