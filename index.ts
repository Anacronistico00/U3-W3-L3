// 1) Quali sono i tipi primitivi principali in TypeScript?

// Risposta: string, number. boolean, undefined, null, any

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

// Risposta:
let myName: string = 'Vittorio';
let myAge: number = 24;
let isStudyingTS: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }

// Risposta:
const greet = (name: string) => {
  return 'Ciao ' + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }

// Risposta
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

// Risposta
const ivaCompresa = (price: number): number => {
  const iva = 0.22;
  return price + price * iva;
};
console.log(ivaCompresa(10)); // 12.2

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

// Risposta:
const concatStrings = (string: string, string2: string): number => {
  return (string + string2).length;
};

console.log(concatStrings('Ciao', 'Ciao')); // 8

// 7) Cos'è un Type Union e come si scrive?

// Il typoe union è una 'concatenazione' di tipi. Il valore dell'oggetto più essere di diversi tipi

// Risposta:
const typeUnion: string | number = 'Ciao';
const typeUnion2: string | number = 5;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

// Risposta:
const NumNullUndefined: number | null | undefined = null;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

// Risposta:
type GiornoSettimana =
  | 'Lunedì'
  | 'Martedì'
  | 'Mercoledì'
  | 'Giovedì'
  | 'Venerdì'
  | 'Sabato'
  | 'Domenica';

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]

// Risposta:
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

// Risposta:
const tuple: [string, string, string, number, number] = [
  'Ciao',
  'a',
  'tutti',
  23,
  67,
];

// 12) Qual è la differenza tra type e interface?

// Risposta:
// Un type è la definizione generica di un tipo.
// Una interface è una definizione generica di una struttura di un oggetto

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

// Risposta:
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

// Risposta:
interface Contacts {
  email: string;
  phone?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

// Risposta:
type studente = {
  name: string;
  vote: number;
};

let students: studente[] = [
  { name: 'Vittorio', vote: 7 },
  { name: 'Antonio', vote: 10 },
  { name: 'Marco', vote: 8 },
];
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

// Risposta:
interface Veicolo {
  brand: string;
  model: string;
  year: number;
}

interface Auto extends Veicolo {
  doors: number;
  wheels: number;
  fuel: string;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.

// Risposta:
let myCar: Auto = {
  brand: 'Fiat',
  model: 'Panda',
  year: 2017,
  doors: 5,
  wheels: 4,
  fuel: 'gasoline',
};

// 18) Cosa sono i Generics in TypeScript?

// Risposta:
// un Generic è un tipo passato come argomento di un'interfaccia.
// Es.
interface Prova {
  a: string;
  b: number;
}

interface AggiungoProva<P> {
  chiave: P;
}

let prova: AggiungoProva<Prova> = {
  chiave: {
    a: 'ciao',
    b: 12,
  },
};

// 19) È possibile avere più tipi generici in un'interfaccia?

// Risposta:
// Si,è possibile avere più generics in un'interfaccia: basta aggiungere una virgola tra un generics e l'altro
// Es.
interface Generics<A, B> {
  chiave1: A;
  chiave2: B;
}

// 20) Crea un'interfaccia generica per una risposta API.

interface APIResponse<R> {
  response: boolean;
  message: string;
  data: R;
}
