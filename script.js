// Grab DOM elements
const addBtn = document.getElementById('add-btn');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Add task handler
function addTask() {
    const taskText = input.value.trim();
    if (taskText === "") return;

    // Create new list item
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Task text element
    const span = document.createElement('span');
    span.textContent = taskText;
    span.className = 'todo-text';

    // Mark complete toggle
    span.addEventListener('click', () => {
        span.classList.toggle('completed');
    });

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    todoList.appendChild(li);

    input.value = '';
    input.focus();
}

// Event listeners
addBtn.addEventListener('click', addTask);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});
