/*
 * Programming Quiz: Joining the Crew (6-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
 * - Your code should use the `push()` method to add new members to the `crew` array
 * - Print the array on the console at the end
 */


var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// ********** PREGUNTA: Esto es valido?
crew.push(doctor, sister, shepherd);


console.log(crew);



// Udacity answer

crew.push(doctor); // "Simon" gets added at the end of the array
// We have intentionally not captured the return of the push() method

crew.push(sister); // "River" gets added at the end of the array
crew.push(shepherd); // "Book" gets added at the end of the array
