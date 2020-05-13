/////// PREGUNTA 1

/*
What value of [BLANK] would make the following expression evaluate to false. 
Notice the ! right at the beginning!
*/
!([BLANK] === 4) && "STRing" === "STRing"


// Respuestas:
-4
4  // <--- Porque el 4 es una respuesta correcta? Ellos dicen que evalua a FALSO.
"4"
"-4"


/*
The RIGHT side of && in the expression evaluates to TRUE, 
so to make the entire expression evaluate to false, 
you need the left side of && to evaluate to false.
*/


/////// PREGUNTA 2
/*
Evaluate the following logical expressions. Check the ones that evaluate to true.
*/

true || false // Porque evalua a true?
false && false // porque evalua falso?
!true // evalua a false
(13 > -7) || (false == 0) // evalua a true
(10 === "10") && (1 <= 2) // evalua a false
(3 != 6 % 3) && !(24 > 45) && (!false) // evalua a true


/////// PREGUNTA 3 

/*
Hoisting:
No me quedo claro el concepto de hoisting y como JS interpreta
el acomodo del codigo
*/

// What value will be printed to the console?x
sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting;
}


sayHi("Julia");

function sayHi(name) {
  console.log(greeting + " " + name);
  var greeting = "Hello";
}


function sayHi(name) {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

sayHi("Julia")



/////// PREGUNTA 4
/*
Hoisting:
No me queda claro el concepto de function expressions and hoisting.
*/

/*
All function declarations are hoisted and loaded 
before the script is actually run. 

Function expressions are not hoisted, 
since they involve variable assignment, 
and only variable declarations are hoisted. 

The function expression will not be loaded 
until the interpreter reaches it in the script.

*/



////// ============= PATTERNS WITH FUNCTION EXPRESSIONS ==============

///////////////// Functions as parameters

/*
Me perdi con el tema de las function expressions...
*/

// function expression catSays
	// Porque no se le asigna ningun valor a max en ningun lado?
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
    // assignment operator: catMessage = catMessage + "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
  // Porque callbackFunc tiene un valor de (3) si no es una funcion que tenga un parametro para recibir valores?
  // Porque max se sobre escribe con callbackFunc(3) <-- el 3 es el valor de max? como llego hasta aqui si no estamos llamando a la funcion catSays?
}

// pass in catSays as a callback function
helloCat(catSays);



///////////////// Named Function expressions

// Inline function expressions

/*
A function expression is when a function is assigned to a variable. 
And, in JavaScript, this can also happen when you pass a function inline as an argument to another function.
*/

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");


/*
But you could have bypassed the first assignment of the function, 
by passing the function to the movies() function inline.
*/

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");





