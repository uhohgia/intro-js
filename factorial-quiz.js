
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







