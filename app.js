// 1. Create variables
const todoContainer = document.querySelector('.to-dos')
const todoItem = document.querySelectorAll('.todo-item')
const inputField = document.querySelector('#inputField')

const add = () => {
	let todoItem = document.createElement('li')
	todoItem.classList.add('todo-item')
	todoContainer.appendChild(todoItem)

	let todoText = document.createElement('p')
	todoText.classList.add('todo-text')
	todoText.innerText = inputField.value
	todoItem.appendChild(todoText)

	let doneButton = document.createElement('button')
	doneButton.classList.add('btn', 'done')
	doneButton.innerText = 'Done'
	todoItem.appendChild(doneButton)

	let editButton = document.createElement('button')
	editButton.classList.add('btn', 'edit')
	editButton.innerText = 'Edit'
	todoItem.appendChild(editButton)

	let deleteButton = document.createElement('button')
	deleteButton.classList.add('btn', 'delete')
	deleteButton.innerText = 'Delete'
	todoItem.appendChild(deleteButton)

	deleteButton.addEventListener('click', () =>
		todoContainer.removeChild(todoItem)
	)

	doneButton.addEventListener('click', () => {
		todoText.classList.toggle('line-through')
		editButton.setAttribute('disabled', 'disabled')
	})

	editButton.addEventListener('click', () => {
		inputField.value = todoText.innerText
		todoContainer.removeChild(todoItem)
	})

	inputField.value = ''
}

document.querySelector('.add').addEventListener('click', add)
