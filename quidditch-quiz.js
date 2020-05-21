/*
 * Programming Quiz: Quidditch Cup (6-5)
 */
/*
 * QUIZ REQUIREMENTS
 
Create a function called hasEnoughPlayers() 
that takes the team array as an argument 
and returns true or false depending on if the array has at least seven players.

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];


 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 

 */
 
// your code goes here

var team = [
"Oliver Wood", 
"Angelina Johnson", 
"Katie Bell", 
"Alicia Spinnet", 
"George Weasley", 
"Fred Weasley", 
"Harry Potter"];

function hasEnoughPlayers(team){
	if(team.length >= 7){
		return true
	}else{
		return false
	}
}

console.log(hasEnoughPlayers(team));
