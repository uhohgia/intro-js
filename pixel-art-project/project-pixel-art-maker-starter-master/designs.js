/*
Your users should be able to:

Dynamically set the size of the table as an _N_ by _M_ grid.
Choose a color.
Click a cell in the grid to fill that cell with the chosen color.
Your primary task is to implement the makeGrid() function, 
that dynamically creates a grid that the user can interact with.

Select color input
Select size input
*/


// Submit is an EVENT - https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent

// Refactor: When size is submitted by the user, call makeGrid()

document.addEventListener('submit', function(){
	 event.preventDefault();
	// get value of grid height + width & store input in variables
	const valueHeight = document.querySelector("#inputHeight").value;
	const valueWidth = document.querySelector("#inputWidth").value;	
	makeGrid(valueHeight, valueWidth);
});


// Create grid function 
function makeGrid(valueHeight, valueWidth) {
	let table = document.getElementById("pixelCanvas");
	// outer loop
	for (var row = 1; row <= valueHeight; row++) {
		let trRows = document.createElement("tr");
		table.append(trRows);
		// inner loop
		for (var column = 1; column <= valueWidth; column++) {
			let tdColumns = document.createElement('td');
			trRows.append(tdColumns);
		}
	}
}


// add color

// square.addEventListener('click', function(){
// 	event.preventDefault();
// 	console.log("TD has been clicked");
// 	const colorValue = document.querySelector("#colorPicker").value;
// });




