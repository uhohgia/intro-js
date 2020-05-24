/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 

Use the array's forEach() method to loop over 
the following array 
and add 100 to each of the values if the value is divisible by 3.

Remember that the "Test Run" button will display any logged content, 
so feel free to use console.log() to test your code.

 */
// var test = [12, 3, 9];

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(
	function(element,index) {
		if(element % 3 === 0 ){
			test[index] = test[index] + 100;
			console.log("divisible");
		}
	}
);

console.log(test);




////// Udacity answer


// Toggle Sidebar
// Quiz: Another Type of Loop (6-8)
// Directions:
// Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.

// var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
// Remember that the "Test Run" button will display any logged content, so feel free to use console.log() to test your code.

// Your Code:
/*
 * Programming Quiz: Another Type of Loop (6-8)
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here

  
// Note - We check your solution against a limited set of test-cases that check the minimum requirements, as mentioned in the quiz. Give the exercise a strong effort, trying to pass all test cases, before comparing your code with the solution.
// Here is one of the possible solutions:

// You can test your code with a smaller array first
// var test = [12, 29, 11, 3];

// Write your code here
test.forEach(function(item, index){
    if(item%3===0){
        // The commented statements below would not be able to change the value of item
        // because the `item` is a COPY of actual element, while actual is test[index]
        // item = item + 100;
        // console.log("The updated element is "+item+" and actual is "+test[index]);
        test[index]=test[index]+100;
    }
    //else 
    //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);
Hide Solution
