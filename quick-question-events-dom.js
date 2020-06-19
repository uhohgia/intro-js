/////// PREGUNTA 1

/*
Concepto de:

EventTarget Interface - top of the chain, does not inherit properties or methods
Node Interface - inherits properties and methods from event target
Element interface - inherits properties and methods from node

*/


/*
Think about these interfaces:

EventTarget
Node
Element
Is there a difference between these two:

document.addEventListener()
myHeading.addEventListener() (assume the myHeading variable is an element)


My answer: "myHeading is an element instead of a node like document"

*/


//////// PREGUNTA 2

// No entiendo las fases y como funcionan.

// Event Phases

/*
There are three different phases during the lifecycle of an event. They are:

the capturing phase
the at target phase
and the bubbling phase

They work in that order.

*/

document.addEventListener('click', function () {
   console.log('The document was clicked');
});

// The document was clicked
// Udacity answer : the body was clicked

// Porque aca el console log se activa en el body y no en el documento?

document.body.addEventListener('click', function () {
    console.log('The body element was clicked');
});

// the body was clicked
// Udacity answer : the document was clicked
