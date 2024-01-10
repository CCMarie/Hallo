/* Berechnung Alter */

//deklaration 
let ageJohn, ageMark
const birthYearJohn = 2000;
const birthYearMark = 1990;

// Berchnung alter 

let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); //daten liefern lassen
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// ausgabe

console.log("ageJohn: " + ageJohn );
console.log("ageMark: " + ageMark );
console.log("Datum: " + date);
