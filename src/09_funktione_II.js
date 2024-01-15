

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : 
4. Ausgabe in Konsole : 
*/


// module: output | test:
// output("hello");
// output(2);

 output(divide(4,2));
 output(divide(3,2));
 output(divide(3,-2));
 output(divide(0,2));
 output(divide(3,0));
 output(divide(0,0));

function divide(a,b) {

	if (b !== 0) {    // b ist ungleich null
		return a / b;
	} else {

		return "Division durch null ist nicht definiert";
		
	}

	return a / b;


}

// module: multiplication a * b |  test:
 //output(multiply(3,2));
 //output(multiply(3,-2));
 //output(multiply(3,0));

function multiply(a,b) {
	return a*b;
}

//modul subtraction a-b
//output(subtract(3,2));

function subtract(a, b) {
	return a - b;
}

//output(add(2,2));
//output(add(2,-2));
//output(add(2,0));

// modul : addition a+b
function add(a,b) {
	return a + b;
}


function output(outputData) {
	console.log(outputData);
}
  

