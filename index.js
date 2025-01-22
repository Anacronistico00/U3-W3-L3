// 1) Quali sono i tipi primitivi principali in TypeScript?
// Risposta: string, number. boolean, undefined, null, any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
// Risposta:
var myName = 'Vittorio';
var myAge = 24;
var isStudyingTS = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
// Risposta:
var greet = function (name) {
    return 'Ciao ' + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
// Risposta
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
// Risposta
var ivaCompresa = function (price) {
    var iva = 0.22;
    return price + price * iva;
};
console.log(ivaCompresa(10)); // 12.2
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
// Risposta:
var concatStrings = function (string, string2) {
    return (string + string2).length;
};
console.log(concatStrings('Ciao', 'Ciao')); // 8
// 7) Cos'è un Type Union e come si scrive?
// Il typoe union è una 'concatenazione' di tipi. Il valore dell'oggetto più essere di diversi tipi
// Risposta:
var typeUnion = 'Ciao';
var typeUnion2 = 5;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
// Risposta:
var NumNullUndefined = null;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
// Risposta:
var numbers = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// Risposta:
var tuple = [
    'Ciao',
    'a',
    'tutti',
    23,
    67,
];
var students = [
    { name: 'Vittorio', vote: 7 },
    { name: 'Antonio', vote: 10 },
    { name: 'Marco', vote: 8 },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// Risposta:
var myCar = {
    brand: 'Fiat',
    model: 'Panda',
    year: 2017,
    doors: 5,
    wheels: 4,
    fuel: 'gasoline',
};
var prova = {
    chiave: {
        a: 'ciao',
        b: 12,
    },
};
