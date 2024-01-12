
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
//ausgabeName2("Maria"); //Argument
//ausgabeName2("Max");
//ausgabeName2("Ralf");
//ausgabeName2("Jasmin");



function ausgabeName2(firstName) {      //Parameter
    
    
    console.log("hallo, " + firstName + "!");
    
 }

 

/***** Funktionen 02c *****/
// Mehrere Parameter| Argumente

//ausgabeNameParams("Max" , "Mütze");

//const prompt = require('prompt-sync')({sigint: true});

//ausgabeNameParams(prompt("Vorname? :"),prompt("Name? :")); // Piping


function ausgabeNameParams(firstName, familyName) {      //Parameter
      console.log("hallo, " + firstName + " " + familyName + "!");
    
 }
 
 /***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Funktionalitäten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

//ausgabeNameSRP("Max" , "Müller")

function ausgabeNameSRP(firstName, familyName) {      //Parameter

    //1. Funktionalität:string composing
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!"

    //2.Funktionalität:string output
    
     console.log(outputStr);
    
 }
/***** Funktionen 03b *****/

 //output("hi");
 //output(2)
 //output(true);

 //function output(outputDate) {
 //   console.log(outputDate);
    // }
 output(getString("Max" , "Müller"));

 
    function getString(firstName, familyName) {
        const GAP = " ";
    let outputStr = "hallo, " + firstName + GAP + familyName + "!"
    return outputStr;
    console.log("hi");
    
 }

 function output(outputDate) {
    console.log(outputDate);
    
 }
