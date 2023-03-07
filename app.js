// 1. Create variables

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

// 2. Add eventListener for submit button

addToDoButton.addEventListener("click", () => {
	// Add li to ul
	let todoItem = document.createElement("li");
	todoItem.classList.add("todo-item");
	toDoContainer.appendChild(todoItem);
	// Add p for text from input
	let todoText = document.createElement("p");
	todoText.classList.add("todo-text");
	todoText.innerText = inputField.value;
	todoItem.appendChild(todoText);
	// Add done button with 2 classes, .ready for styling
	let doneButton = document.createElement("button");
	doneButton.classList.add("btn", "done");
	doneButton.innerText = "Done";
	todoItem.appendChild(doneButton);
	doneButton.addEventListener("click", () => {
		todoText.classList.add("ready");
	});
	// Add edit button with 2 classes
	let editButton = document.createElement("button");
	editButton.classList.add("btn", "edit");
	editButton.innerText = "Edit";
	todoItem.appendChild(editButton);

	// Missing eventListener and class for editButton

	// Add delete button with 2 classes
	let deleteButton = document.createElement("button");
	deleteButton.classList.add("btn", "delete");
	deleteButton.innerText = "Delete";
	todoItem.appendChild(deleteButton);
	// delete li with all children
	deleteButton.addEventListener("click", () => {
		toDoContainer.removeChild(todoItem);
	});
	// Clear input
	inputField.value = "";
});
