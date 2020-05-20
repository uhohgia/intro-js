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


