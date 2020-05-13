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