function addTodo() {
  var input = document.getElementById('todo-input');
  var newTodo = input.value.trim();

  if (newTodo) {
      var li = document.createElement('li');
      li.textContent = newTodo;
      li.onclick = function() {
          this.parentNode.removeChild(this);
      };

      document.getElementById('todo-list').appendChild(li);
      input.value = '';
  } else {
      alert('Please enter a task!');
  }
}
