/*
Your users should be able to:

Dynamically set the size of the table as an _N_ by _M_ grid.
Choose a color.
Click a cell in the grid to fill that cell with the chosen color.
Your primary task is to implement the makeGrid() function, 
that dynamically creates a grid that the user can interact with.

Select color input
Select size input

When size is submitted by the user, call makeGrid()
*/

	// const submitButton = document.querySelector("#sizePicker");

/*
Submit is an EVENT
https://developer.mozilla.org/en-US/docs/Web/API/SubmitEvent




*/

function submitWork() {
	// get value of grid height + width 
	const valueHeight = document.querySelector("#inputHeight").value;
	const valueWidth = document.querySelector("#inputWidth").value;	
	console.log("height " + valueHeight + " width " + valueWidth);
  event.preventDefault();

	// store input in variables
	function makeGrid(gridHeight, gridWidth) {
		let table = document.getElementById("pixelCanvas");
		// rows
		let rows = document.createElement("tr");
		let columns = document.createElement('td');
		// create grid -- use nested for loop
		// outer loop
		for (var i = 1; i <= valueHeight; i++) {
			table.append(rows);
			// inner loop
			for (var j = 1; i <= valueWidth; i++) {
				rows.appendChild(columns);
			}
		}
	}
	makeGrid();

}
// add event listener to submit
document.addEventListener('submit', submitWork);





// pick a color from the colorPicker

const color = document.querySelector("#colorPicker");

// store color in variable


/// Add color to each clicked square