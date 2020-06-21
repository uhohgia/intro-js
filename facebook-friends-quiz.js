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

 * - Your `facebookProfile` object should have following methods:
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
	name: "Gia",
	friends: 5,
	messages: ["Hi", "Thank you", "Please", "Bye"],
	postMessage: function newPost(post) { // adds a new message string to the array	
			facebookProfile.messages.push(post);
			return facebookProfile.messages;
	},
	deleteMessage: function erase(index) { //removes the message corresponding to the index provided
		// get array
		facebookProfile.messages.splice(index);
		return facebookProfile.messages;
	},
	addFriend: function plusFriend() {
		facebookProfile.friends = facebookProfile.friends + 1;
		return facebookProfile.friends;
	},
	removeFriend: function minusFriend(){
		facebookProfile.friends = facebookProfile.friends - 1;
		return facebookProfile.friends;
	}
};


// calls
facebookProfile.postMessage("Hola");
facebookProfile.deleteMessage(-1);
facebookProfile.addFriend();
facebookProfile.removeFriend();



/*

UDACITY ANSWER

var facebookProfile = {
    name: "Udacian",
    friends: 25,
    messages: ["Message 1", "Message 2", "Message 3", "Message 4"],
    postMessage: function(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function(index){
        // In the following splice() method call,
        // - argument 1 = index from where the element has to be deleted
        // - argument 2 = count of elements to be deleted
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function(){
        facebookProfile.friends = facebookProfile.friends + 1;
        //friends += 1; // this statement is equivalent to the above
    },
    removeFriend: function(){
        if(facebookProfile.friends>0)
            facebookProfile.friends = facebookProfile.friends - 1;
    }
};


*/
