/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS

Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have,
an array of messages you've posted (as strings)
The object should also have 4 methods:

1. postMessage(message) - adds a new message string to the array
2. deleteMessage(index) - removes the message corresponding to the index provided
3. addFriend() - increases the friend count by 1
4. removeFriend() - decreases the friend count by 1


 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the
  `name` (string), 
  `friends` (number)
  `messages` (array of strings) property

 * - Your `facebookProfile` object should have following methods
`postMessage()`
`deleteMessage()`
`addFriend()`
`removeFriend()` 

 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method


var facebookProfile = {
	name: "string",
	friends: "number",
	messages: ["Hi", "Thank you", "Please", "Bye"],
	postMessage: function addMessage(message) {
		// body...
	},
	deleteMessage: function eraseMessage() {
		// body...
	},
	addFriend: function plusFriend(newFriend) {
		// body...
	},
	removeFriend: function minusFriend(oldFriend){

	}
};




