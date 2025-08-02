// Wait until the HTML document is fully loaded before running any JavaScript
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    // Get the trimmed value of the input field
    const taskText = taskInput.value.trim();

    // Check if taskText is empty, if it empty, alert user with the alert message: 'Please enter a task'.
    if (taskText === "") {
      alert("Please enter a task.");
      return; // Stop function execution here if empty
    }

    // Create a new list item element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When remove button is clicked, remove the task from the list
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the new list item to the task list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Add event listener to the Add Task button
  addButton.addEventListener('click', addTask);

  // Add event listener to input field to listen for Enter key press
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

});
