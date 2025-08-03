document.addEventListener('DOMContentLoaded', () => {

  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');

    // Set textContent first (this wipes children if any)
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove li when button clicked
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append the remove button AFTER setting textContent
    li.appendChild(removeBtn);

    // Append the li to the task list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
  }

  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Call addTask on DOMContentLoaded (as per instructions)
  addTask();
});
