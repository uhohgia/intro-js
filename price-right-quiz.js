
/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
 */
 
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// 1st
prices[0] = "0";
// 3rd
prices[2] = "000";
// 7th
prices[6] = "0000000";
console.log(prices);



//// === udacity answer
for (var index = 0; index<prices.length; index++){
    //change the value of first element
    if(index===0){
        prices[index]=11;
    }
    //change the value of third element
    else if(index===2){
        prices[index]=33;
    }
    //change the value of seventh element
    else if(index===6){
        prices[index]=77;
    }
}
console.log(prices);


