function ejercicios() {
//exercici 3
console.log("--------Exercici 3--------");
const primeraParticipant = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};


for (let clau in primeraParticipant) {
  console.log(primeraParticipant[clau]);
}
//exercici 4
console.log("--------Exercici 4--------");
let primeraParticipant2 = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};
primeraParticipant2.localitat = "Cangas del Narcea";


console.log(primeraParticipant2);


// Mostrar valors per separat
for (let clau in primeraParticipant2) {
  console.log(primeraParticipant2[clau]);
}
//exercici 5
console.log("--------Exercici 5--------");
let primeraParticipant3 = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};
delete primeraParticipant3.nom;
console.log(primeraParticipant3);
//exercici 6
console.log("--------Exercici 6--------");
let primeraParticipant4 = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};
primeraParticipant4.localitat = "Cangas del Narcea";


primeraParticipant4.nom = "Maria Angustias";


console.log(primeraParticipant4);


for (let clau in primeraParticipant4) {
  console.log(primeraParticipant4[clau]);
}
//exercici 7
console.log("--------Exercici 7--------");
const dicc1 = {1: "A", 2: "B", 3: "Z", 4: "M", 5: "Ç", 6: "Ñ", 7: "C"};


// Obtenir valors ordenats
const dicc1Ordenat = Object.values(dicc1).sort();


console.log(dicc1);
console.log(dicc1Ordenat);


//exercici 8
console.log("--------Exercici 8--------");
const dicc2 = {p1: 1, p2: 2, p3: 100, p4: 12};


// Convertim a array de parells i ordenem segons el valor
const diccOrdenatArray = Object.entries(dicc2).sort((a, b) => a[1] - b[1]);

console.log(diccOrdenatArray);
/*
[
  ['1', 1],
  ['2', 2],
  ['4', 12],
  ['3', 100]
]
*/
}