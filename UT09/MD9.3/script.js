console.log("---------EJERCICIO1---------")
// Datosdatos per al gràfic
const datos = {
    labels: ['Anna', 'Pere', 'Maria', 'Joan'],
    valors: [8, 5, 9, 4]
};


// Mostrar datos amb console.log
console.log("Resultat: Labels del gràfic:", datos.labels);
console.log("Resultat: Valors del gràfic:", datos.valors);


// Configurar el canvas
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipus: barres
    data: {
        labels: datos.labels,
        datasets: [{
            label: 'Notes alumnes',
            data: datos.valors,
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }]
    }
});

// Datosdatos per al gràfic
const datos = {
    labels: ['Anna', 'Pere', 'Maria', 'Joan'],
    valors: [8, 5, 9, 4]
};


// Mostrar datos amb console.log
console.log("Resultat: Labels del gràfic:", datos.labels);
console.log("Resultat: Valors del gràfic:", datos.valors);


// Configurar el canvas
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Tipus: barres
    data: {
        labels: datos.labels,
        datasets: [{
            label: 'Notes alumnes',
            data: datos.valors,
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
        }]
    }
});
