
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
  // name se queda como input
}



// messageFunction se transforma en la variable favoriteMovie
// name se vuelve el argumento
movies(favoriteMovie, "Finding Nemo");

