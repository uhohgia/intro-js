/*
 * Programming Quiz: Umbrella (7-1)
 */
/*
 
Using the umbrella example,
see if you can follow the example open() method
and create the close() method. 


TIP: Remember to put all of your object's properties
and methods inside curly braces: 
var myObject = { greeting: "hello", name: "Julia" };. 
Also, remember that an object is just another data type. 

Just like how you would put a semicolon after a string variable declaration 
var myString = "hello";
don't forget to put a semi-colon at the end of your object's declaration.


 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if(umbrella.isOpen === false){
            return "The umbrella is already closed";
        }
    }
};


//// Udacity answer

// your code goes here
    // method definition within the object definition
    close: function() {
        if (umbrella.isOpen === true) {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } else {
            return "The umbrella is already closed!";
        }
    }

