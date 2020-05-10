
/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = true;
var eatsAnimals = true;

var category = condition ? ();

// udacity answer
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
/*
No entiendo la estructura y como se evalua
eatsPlans se compara contra 2 condicionales?

*/


console.log(category);

/*

if eatsPlants is true and eatsAnimals is false then is "herbivore"
if eatsPlants is true and eatsAnimals is true then is "omnivore"
if eatsPlants is false and eatsAnimals is true then is "carnivore"
if eatsPlants is false and eatsAnimals is false then is "undefined"

*/
