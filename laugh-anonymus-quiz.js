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
	var i = 0;
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
