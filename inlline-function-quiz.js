/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 
Call the emotions() function 
so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, 
pass an inline function expression instead.

emotions("happy", laugh(2)); 
// you can use your laugh function from the previous quizzes

Prints: "I am happy, haha!"
 */

/* ======== CASE 1====== */

// 1. MyString parameter
// 2. MyFunct = function parameter that will be replaced with variable name
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + laugh(2));
}

// PREGUNTA *********** Inline function expression. Este tipo de funcion tiene otro nombre? 
var laugh = function laughing(num){
	var ha = "";
	for (var i = 0 ; i < num; i++) {
		ha += "ha";  
		// ha = ha + "ha"
	}
	return ha + "!";
}


// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression (contenida en la variable)
emotions("happy", laugh(2)); 


/* ======== CASE 2 INLINE FUNCTION ====== */

// 1. MyString parameter
// 2. MyFunct = function parameter that will be replaced with variable value
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// PREGUNTA *********** Este tipo de funcion tiene otro nombre? 
emotions("happy", function laugh(num){ 
		var ha = "";
		for (var i = 0 ; i < num; i++) {
			ha += "ha";
		}
		return ha + "!";
	}
);




