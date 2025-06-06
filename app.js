function markComplete(taskElement) {
  taskElement.classList.toggle('completed');
  
  // Alternativa: puedes cambiar el texto del botón
  const button = taskElement.querySelector('.complete-btn');
  if (taskElement.classList.contains('completed')) {
    button.textContent = 'Marcar como pendiente';
  } else {
    button.textContent = 'Marcar como completada';
  }
}

document.querySelectorAll('.complete-btn').forEach(button => {
  button.addEventListener('click', function() {
    markComplete(this.closest('.task'));
  });
});

document.querySelectorAll('.complete-checkbox').forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    markComplete(this.closest('.task'));
  });
});

let tasks = [];
let currentFilter = 'all';

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text === '') return;

  tasks.push({ text, completed: false });
  input.value = '';
  renderTasks();
};
