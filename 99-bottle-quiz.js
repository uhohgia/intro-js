/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.

2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 */


// My version
// First try, I set the value to 0 in the while loop. This makes the song counts also 0.
// "0 bottles of juice in the wall ..."
// Forgot the num-1
var num = 99;

while (num >= 0) {
	if(num > 1){
		console.log( num+" bottles of juice on the wall!"+num+" bottles of juice! Take one down, pass it around..."+(num)+" bottles of juice on the wall!")
	}else{
		console.log( num+" bottle of juice on the wall!"+num+" bottle of juice! Take one down, pass it around..."+(num)+" bottle of juice on the wall!")
	} 
	num = num - 1;
}


// Second try after i saw udacity's code
// I added the num-1 
// i changed the value to >= 1 in the while loop

var num = 99;

while (num >= 1) {
	if(num > 1){
		console.log( num+" bottles of juice on the wall!"+num+" bottles of juice! Take one down, pass it around..."+(num-1)+" bottles of juice on the wall!")
	}else{
		console.log( num+" bottle of juice on the wall!"+num+" bottle of juice! Take one down, pass it around..."+(num-1)+" bottle of juice on the wall!")
	} 
	num = num - 1;
}



// udacity version
var num = 99;

while (num >=1) {
    // Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
        console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    // Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
    // All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
}