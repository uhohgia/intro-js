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

