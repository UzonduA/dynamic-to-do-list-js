document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Array to keep track of tasks in memory
  let tasks = [];

  // Function to add a new task
  // taskText param allows adding from localStorage without saving again
  function addTask(taskText, save = true) {
    // If taskText param not provided, get value from input (for normal add)
    if (taskText === undefined) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create new list item and set its text content
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button and assign className (no classList.add)
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Set onclick to remove this li from taskList and update localStorage
    removeBtn.onclick = function() {
      taskList.removeChild(li);

      // Remove from tasks array and update localStorage
      tasks = tasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Append remove button to li, then li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field if this was user input (save is true)
    if (save) {
      taskInput.value = "";

      // Add to tasks array and save to localStorage
      tasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  // Load tasks from localStorage and render them
  function loadTasks() {
    tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.forEach(task => addTask(task, false)); // false = don't save again to localStorage
  }

  // Attach event listeners
  addButton.addEventListener('click', () => addTask());

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks on DOM content loaded
  loadTasks();
});
