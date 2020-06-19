/*
go to a site
open devtools
use .addEventListener() to register a listener on the document object
listen for a click event
when a click happens, log a message to the console

*/

// Primer intento
document.addEventListener(onclick, function(){
console.log("i am clicked");
});

// Segundo intento -- Funciona
document.addEventListener('click', function(){
console.log("i am clicked");
});

// Cual es la diferencia entre onclick y click?
// porque mi primer intento no funciono?
