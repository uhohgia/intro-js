
/*
==================================================
********************* CASE 1 ******************** 
==================================================
*/ 


/*
========== FUNCTION EXPRESSION ==========
function expression porque esta contenida dentro de la variable 
*/ 

var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// favoriteMovie("Avengers");
// imprime: My favorite movie is  // concatena "Avengers"

/* BREAKDOWN
function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

displayFavorite("Matrix");
// imprime My favorite movie is 
// concatena "Matrix"
*/


/*
========== FUNCTION DECLARATION ==========
Funcion regular
*/ 

function movies(messageFunction, name) {
  messageFunction(name);
  // messageFunction sustituira la variable favoriteMovie creada arriba
  // name se queda como parametro
}



// messageFunction se transforma en la variable favoriteMovie
// name se vuelve el argumento
movies(favoriteMovie, "Finding Nemo");



/*
==================================================
********************* CASE 2 ******************** 
==================================================
*/ 

// But you could have bypassed the first assignment of the function, by passing the function to the movies() function inline.


// Function declaration that takes in two arguments: 
// 1. a function for displaying
// 2. a message, along with a name of a movie

function movies(messageFunction, name) {
  messageFunction(name);
  // messageFunction se sustituira por la funcion displayFavorite como argumento 1 al ser llamada abajo
  // name se queda como argumento
}

/* BREAKDOWN */

// call movies function
// add function displayFavorite inside as 1st argument
// add , + "Finding Nemo" as 2nd argument
movies(function displayFavorite(movieName){console.log("My favoriteMovie is" + movieName);} , "Finding Nemo");

