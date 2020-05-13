/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 */
 
 /*
Directions:
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number
*/

// Primer intento
// Porque no puedo encontrar casos "juliajames"?
// la jerarquia del codigo influye?
var x = 1;

while(x <= 20){
	if(x % 3 === 0){
		console.log("Julia");
	}else if(x % 5 === 0){
		console.log("James");
	}else if(x % 3 === 0 && x % 5 === 0){
		console.log("JuliaJames");
	}else{
		console.log(x)
	}
	x = x + 1;
}


// udacity answer
while (x <= 20) {
	if(x % 3 === 0 && x % 5 === 0){
		console.log("JuliaJames");
	}else if(x % 5 === 0){
		console.log("James");
	}else if(x % 3 === 0){
		console.log("Julia");
	}else{
		console.log(x);
	}
	x = x+1;
}


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




/*
 * Programming Quiz: Factorials (4-7)
 
Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. 
For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 63!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 244!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 1205!=5∗4∗3∗2∗1=120

Save your final answer in a variable called solution and print it to the console.
 */

// primer intento
// pense que la instruccion era restar en vez de sumar.
empieza en 12
si el numero es = o menor a 12 restale 1
multiplica por 1 menos
12! = 12 x 11 x 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = solution

var solution = 1;
// your code goes here
for(var number = 1; number <= 12; number++){
	solution *= number;
}
console.log(solution);


// convertido a while loop
var number = 1;
var solution = 1;

while(number <= 12){
	solution *=number;
	number++;

}
console.log(solution);



// udacity answer
let solution = 1;
for (let i = 1; i <= 12; i++) {
  solution *= i;
}
console.log(solution);






