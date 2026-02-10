//ejercicio 1
console.log("------Ejercicio 1------");
const ara = new Date();
console.log("Data i hora actuals:", ara);
//ejercicio 2
const dataConcreta = new Date("2025-12-24T18:30:00");
console.log("Data concreta:", dataConcreta);
//ejercicio 3
const dataParts = new Date(2025, 11, 24, 18, 30, 0); 
console.log("Data amb parts separats:", dataParts);
//ejercicio 4
const dataMarca = new Date(0);  // 1 gener 1970, UTC
console.log("Epoch:", dataMarca);
//ejercicio 5 
let avui = new Date();
console.log("Dia:", avui.getDate()); // veg. comentari al peu
console.log("Mes:", avui.getMonth());   // 0 = gener
console.log("Any:", avui.getFullYear());
//ejercicio 6
let avui2 = new Date();
console.log("Hora:", avui2.getHours());
console.log("Minuts:", avui2.getMinutes());
console.log("Segons:", avui2.getSeconds());
//ejercicio 7
const ms = Date.now();
console.log("Mil·lisegons des de 1970:", ms);
//ejercicio 8
const msParse = Date.parse("2025-12-24T18:30:00");
console.log("Mil·lisegons amb parse:", msParse);
//ejercicio 9
const d = new Date();
d.setDate(1);
console.log("Canviat dia:", d);
//ejercicio 10
const d1 = new Date(2026, 0, 1);
const d2 = new Date(2025, 11, 31);
console.log(d1 > d2);
console.log(d1.getTime() - d2.getTime(), "ms de diferència");
//ejercicio 11
const avui3 = new Date();
console.log("ISO:", avui3.toISOString());
//ejercicio 11 format local
console.log("Local:", avui3.toLocaleString());


