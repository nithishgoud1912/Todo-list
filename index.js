document.addEventListener('DOMContentLoaded', () => {

  const submitBtn = document.getElementById('submit-btn');
  const todoInput = document.getElementById('todo-input');
  const todosList = document.getElementById('todo-list');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  // ---------- Persistence ----------
  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // ---------- UI Rendering ----------
  function renderTodos() {
    todosList.innerHTML = ''; // Clear before re-render

    if (todos.length === 0) {
      const emptyMsg = document.createElement('li');
      emptyMsg.textContent = 'No todos yet.';
      todosList.appendChild(emptyMsg);
      return;
    }

    todos.forEach(todo => {
      const listItem = document.createElement('li');

      const titleSpan = document.createElement('span');
      titleSpan.textContent = todo.title;
      titleSpan.style.textDecoration = todo.isCompleted ? 'line-through' : 'none';

      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      // ---- Complete Button ----
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('circle-btn');
      if (todo.isCompleted) completeBtn.classList.add('checked');

      completeBtn.addEventListener('click', () => {
        todo.isCompleted = !todo.isCompleted;
        saveTodos();
        renderTodos();
      });

      // ---- Delete Button ----
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('deleteBtn');
      deleteBtn.textContent = 'Delete';

      deleteBtn.addEventListener('click', () => {
        const index = todos.findIndex(t => t.id === todo.id);
        if (index !== -1) {
          todos.splice(index, 1);
          saveTodos();
          renderTodos();
        }
      });

      buttonContainer.appendChild(completeBtn);
      buttonContainer.appendChild(deleteBtn);

      listItem.appendChild(titleSpan);
      listItem.appendChild(buttonContainer);
      todosList.appendChild(listItem);
    });
  }

  // ---------- Add Todo ----------
  function addTodo() {
    const todoTitle = todoInput.value.trim();
    if (!todoTitle) return;

    const todo = {
      id: Date.now(),
      title: todoTitle,
      isCompleted: false
    };

    todos.push(todo);
    saveTodos();
    renderTodos();

    todoInput.value = '';
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addTodo();
  });

  // ---------- Enter Key Support ----------
  todoInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTodo();
    }
  });

  // ---------- Init ----------
  renderTodos();

});