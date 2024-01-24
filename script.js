const input = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')

function addTodo(event) {
  event.preventDefault()
  const newTodo = input.value.trim()

  if (newTodo) {
    const li = document.createElement('li')
    li.textContent = newTodo
    todoList.addEventListener('click', (e) => {
      this.removeChild(e.target)
    })

    todoList.appendChild(li)
    input.value = ''  
  } else {
    console.log('Please enter a task!')
  }
}
