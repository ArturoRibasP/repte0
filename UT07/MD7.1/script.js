//Exercici1: Crear un objecte modificable
console.log("--------------Exercici 1--------------");
let fruita = {
    0: "meló",
    1: "síndria",
    2: "albercoc",
    length: 3
};
// Modificam
fruita[1] = "préssec";
fruita[3] = "papaia";
fruita.length = 4;
console.log(fruita);

//2) Crear una tupla utilitzant OBJECTES IMMUTABLES
console.log("--------------Exercici 2--------------");
const tupla1 = Object.freeze({
    0: "Ana",
    1: "Raquel",
    2: "Pau",
    length: 3
});
// Intent d’afegir
tupla1[3] = "Berta";  // ❌ Ignorat
// Intent de modificar
tupla1[0] = "Berta";  // ❌ Ignorat
console.log(tupla1);

//3) Exemples de tuples definides amb objectes
console.log("--------------Exercici 3--------------");
const ossos = Object.freeze({
    0: "cúbit",
    1: "radi",
    2: "húmer",
    length: 3
});
const nombres = Object.freeze({
    0: -1,
    1: -2,
    2: -3,
    length: 3
});

//4) Funcions útils per treballar amb tuples-objecte
console.log("--------------Exercici 4--------------");
const marCantabric = Object.freeze({
    0: "Astúries",
    1: "Cantàbria",
    2: "Biscaia",
    length: 3
});
console.log(marCantabric.length);

// Comptar aparicions (equivalent a count())
console.log("--------------Exercici 5--------------");
const tupla1 = Object.freeze({
    0: 1, 1: 2, 2: 3, 3: 4, 4: 5,
    5: 6, 6: 5, 7: 7, 8: 8, 9: 9,
    length: 10
});
let comptar = 0;
for (let i = 0; i < tupla1.length; i++) {
    if (tupla1[i] === 5) comptar++;
}
console.log(comptar);
//indexOf manual (equivalent a index())
console.log("--------------Exercici 6--------------");
const tuplaAliments = Object.freeze({
    0: "Pernil",
    1: "Formatge",
    2: "Mantega",
    length: 3
});
let index = -1;
for (let i = 0; i < tuplaAliments.length; i++) {
    if (tuplaAliments[i] === "Mantega") {
        index = i;
        break;
    }
}
console.log(index);


