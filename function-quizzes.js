/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 

Declare a function called laugh() 
that returns "hahahahahahahahahaha!". 
Print the value returned from the laugh() function to the console.

 */


// your code goes here
function laugh(){
	var laughing = "hahahahahahahahahaha!";
	return laughing;
}
console.log(laugh());


/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` 
 with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 

Write a function called laugh() that takes one parameter, 
num that represents the number of "ha"s to return.
 */

// declare a global variable
// no entiendo porque la variable esta vacia
var sound = "";

function laugh(num) {
	for (var x = 0; x < num; x++ ){
		sound = sound + "ha"; // ****** porque estan afuera de un console log????
	}
	sound = sound + "!"; // ******** porque estan afuera de un console log????
	return sound;
}
console.log(laugh(3));




/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

// ******* No entiendo como corre el codigo.
// ******** No entendi la logica de la estructura del codigo.

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
        // assignment operator (x = x + y) // line = line + "* "
    }
    return line + "\n";
    // adds the * and creates a new line
}

// makeLine(3);


// parameter is the input 
function buildTriangle(number){
	// add empty variable to start
	var triangle = "";
	// add a for loop that loops over the times we are putting as input
	// if "i" <= than "number" 10 then add 1 (i++)
	for (var i = 1; i <= number; i++) {
		// do something
		triangle = triangle + makeLine(i);
	}
	return triangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));





/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 
Write an anonymous function expression 
that stores a function in a variable called "laugh" 
and outputs the number of "ha"s that you pass in as an argument.
 */

// ****** lo resolvi con un while pero me tarde en comprender la logica detras de
// ******** la variable vacia y la asignacion del haNumber en el while
var laugh = function(haNumber){
	var has = "";
	var i = 1;
	while(i < haNumber){
		has += "ha";	
		i++;
	}
return has + "!";
};

console.log(laugh(10));



var laugh = function(haNumber){
	var has = "";
	for (var i = 0; i <= haNumber; i++) {
		has += "ha";
	}
	return has + "!";
};

console.log(laugh(10));


/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 
Write a named function expression 
that stores the function in a variable called cry 
and returns "boohoo!". 

Don't forget to call the function using the variable name, not the function name:

boohoo
*/


// ***** el codigo regresa el output que se pide, pero mi respuesta no es valida
var cry = function crying (){
	console.log("boohoo!") ;
};
cry();


//// ******* Udacity answer

var cry = function myFunction(){
    var sound = "boohoo!";  // ***** porque declaro una variable aqui?
    return sound;
    };

// Call the function using the variable name, not the function name
console.log(cry());

// This statement is also acceptable, but it won't print anything on your console
// cry();



