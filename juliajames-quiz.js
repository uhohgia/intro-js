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