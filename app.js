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
