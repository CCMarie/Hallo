
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

//funktionsaufruf /call

//test();


//funktionsrumpf 
//Funtionsdeklaration 

function test()
{
    console.log("hallo, Jasmin!");
}


/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

//Call
//ausgabeName();

//Funtion
function ausgabeName() {
    //Interne Variable | what happens in vegas......
    let firstName = "Jasmin";
   // console.log("hallo, Jasmin!");
   // console.log("hallo, Maria!");

    console.log("hallo, " + firstName + "!");
}
 // console.log(firstName); // fehler : Scope

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
ausgabeName2("Maria"); //Argument
ausgabeName2("Max");
ausgabeName2("Ralf");
ausgabeName2("Jasmin");



function ausgabeName2(firstName) {      //Parameter
    
    
    console.log("hallo, " + firstName + "!");
    
 }

 

/***** Funktionen 02c *****/
// Mehrere Parameter| Argumente

ausgabeNameParams("Max" , "Mütze");

const prompt = require('prompt-sync')({sigint: true});

 function ausgabeName2(firstName, familyName) {      //Parameter
    
    
    console.log("hallo, " + firstName + " " + familyName + "!");
    
 }
 