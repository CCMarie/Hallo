/********** Variante 1 **********/

// const prompt = require('prompt-sync')({sigint: true});

// Alles muss man selber machen lassen! ...
// let firstName = prompt("Vorname?: ");
// let familyName = prompt("Name?: ");
// console.log("Hallo, " + firstName + " " + familyName +"!");


const prompt = require('prompt-sync')({sigint: true});

/********** Variante 2 **********/
// Vorteil: gute Lesbarkeit / aber viele Variablen

let ziffer1, ziffer2, zahl1, zahl2, summe;

ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

console-log("Dateityp: " + typeof ziffer1);
console-log("Dateityp: " + typeof ziffer2);

// Typkonvertierung 1: ziffer --> zahl (mit Nachkomma)
zahl1 = parseFloat(ziffer1);
zahl2 = parseFloat(ziffer2);

console-log("Dateityp: " + typeof zahl1);
console-log("Dateityp: " + typeof zahl2);

summe = zahl1 + zahl2;


console.log("Die Summe der Zahlen ist: " + summe);

