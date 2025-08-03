// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task to the list
  function addTask() {
    // Get and trim the task input value
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user and return early
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item element and set its text content to the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When the remove button is clicked, remove the corresponding list item
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeBtn);

    // Append the new task list item to the task list
    taskList.appendChild(li);

    // Clear the input field for the next task
    taskInput.value = "";
  }

  // Add event listener to the add button to call addTask when clicked
  addButton.addEventListener('click', addTask);

  // Add event listener to the input to allow adding tasks by pressing Enter
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask once on page load (as per instruction)
  addTask();
});
