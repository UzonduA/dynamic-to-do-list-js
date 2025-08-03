document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

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

    // Set onclick to remove this li from taskList
    removeBtn.onclick = function() {
      taskList.removeChild(li);
    };

    // Append remove button to li, then li to taskList
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
  }

  // Add event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask on DOMContentLoaded (if needed, or remove this if not required)
  // addTask();  // Uncomment if you want to run addTask on page load
});
