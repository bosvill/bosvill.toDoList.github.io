// Global local storage declaration
// let todos = [] 
window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || []
	const addNewTodo = document.querySelector('.form')

	addNewTodo.addEventListener('submit', e => {
		e.preventDefault()
		console.log(e.target)
		let todo = {
			// createdAt: new Date().getTime(),
			inputField: e.target.elements.inputField.value,
			done: false
		}
		console.log(todo.inputField)
		todos.push(todo)

		localStorage.setItem('todos', JSON.stringify(todos))

		e.target.reset()

		createTodoItems()
	})
	createTodoItems()
})

function createTodoItems () {
	const todoContainer = document.querySelector('.to-dos')
	todoContainer.innerHTML = ""

	todos.forEach(todo => {
		let todoItem = document.createElement('li')
		todoItem.classList.add('todo-item')
		todoContainer.appendChild(todoItem)

		let todoText = document.createElement('p')
		todoText.classList.add('todo-text')
		todoText.innerText = `${todo.inputField}`
		todoItem.appendChild(todoText)

		let doneButton = document.createElement('input')
		doneButton.classList.add('btn','done')  
		doneButton.type ='checkbox'
		doneButton.label = 'Done'
		doneButton.checked = todo.done
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

		if(todo.done) {
			todoText.classList.add('line-through')
		}

		doneButton.addEventListener('click', () => {
		todoText.classList.toggle('line-through')

		})

		doneButton.addEventListener('change', (e) => {
			todo.done = e.target.checked
			localStorage.setItem('todos', JSON.stringify(todos))

			/* if (todo.done) {
				todoItem.classList.add('done');
			} else {
				todoItem.classList.remove('done');
			}
 */
			createTodoItems()
		})

		// todoText.addEventListener('dclick', (e) =>{
		// 	todo.done = e.target.valueof(`!value`)
		// 	localStorage.setItem('todos', JSON.stringify(todos))

		// 	createTodoItems()

		// })

		editButton.addEventListener('click', () => {
			inputField.value = todoText.innerText
			todoContainer.removeChild(todoItem)
			todos = todos.filter(t => t != todo)
			localStorage.setItem('todos', JSON.stringify(todos));

			createTodoItems()
		})
	
		deleteButton.addEventListener('click', () => {
			todos = todos.filter(t => t != todo)
			localStorage.setItem('todos', JSON.stringify(todos));

			createTodoItems()
		})
		
})
}




