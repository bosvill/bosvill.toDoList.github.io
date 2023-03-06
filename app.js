// 1. Create variables

// 2. Add eventListener for submit button

let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener("click", function () {
	let todoItem = document.createElement("li");
	todoItem.classList.add("paragraph-styling");
	todoItem.innerText = inputField.value;
	toDoContainer.appendChild(todoItem);
	inputField.value = "";
	let done = document.createElement("button");
	// done.classList.add("btn done");
	done.innerText = "Done";
	todoItem.appendChild(done);
	todoItem.addEventListener("click", function () {
		todoItem.style.textDecoration = "line-through";
	});
	todoItem.addEventListener("dblclick", function () {
		toDoContainer.removeChild(todoItem);
	});
});
