document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // This array will hold all tasks
  let tasks = [];

  // Load tasks from localStorage on page load
  function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasks = JSON.parse(savedTasks); // Convert JSON string to array
      tasks.forEach(taskText => {
        createTaskElement(taskText);
      });
    }
  }

  // Save the current tasks array to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Helper function to create a task element and append it to the DOM
  function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = () => {
      // Remove the task element from the DOM
      taskList.removeChild(li);
      // Remove the task from the tasks array
      tasks = tasks.filter(task => task !== taskText);
      // Update localStorage
      saveTasks();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
  }

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Add task to tasks array and save it
    tasks.push(taskText);
    saveTasks();

    // Create and display the task in the DOM
    createTaskElement(taskText);

    // Clear input field
    taskInput.value = "";
  }

  // Event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Load tasks when page loads
  loadTasks();
});
