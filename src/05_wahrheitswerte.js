/* Berechnung Alter */

//deklaration 
let ageJohn, ageMark
const birthYearJohn = 1980;
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

// Deklaration 
let isJohnOlder // Is John Older?  Y/N  True/False 
isJohnOlder = (ageJohn > ageMark); // test wahr oder unwahr 
isJohnEqual = (ageJohn == ageMark);
console.log ("isJohnOlder: " + isJohnOlder);
console.log ("isJohnequal: " + isJohnEqual);
console.log ("----------------");

