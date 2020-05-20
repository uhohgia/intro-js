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

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes

Prints: "I am happy, haha!"
 */


// don't change this code    emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + laugh(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

// ********* No entiendo la estructura de las inline
emotions(function laugh(x) {
	var has = "";
	var i = 0;
	while(i < x){
		has += "ha";	
		i++;
	}
	return has + "!";
});


emotions("happy", laugh(2));


