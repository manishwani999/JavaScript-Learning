let tasks = [];

const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const clearButton = document.getElementById("clearButton");
const errorMessage = document.getElementById("errorMessage");

// Add Task
addButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    errorMessage.textContent = "Please enter a task.";
    return;
  }

  errorMessage.textContent = "";

  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };

  tasks.push(task);

  taskInput.value = "";

  renderTasks();
});

// Press Enter to add task
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});

// Display Tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.title;
    span.classList.add("task-text");

    if (task.completed) {
      span.classList.add("completed");
    }

    // Complete task
    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;

      renderTasks();
    });

    // Edit button
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");

    editButton.addEventListener("click", function () {
      const newTitle = prompt("Edit your task:", task.title);

      if (newTitle !== null && newTitle.trim() !== "") {
        task.title = newTitle.trim();
        renderTasks();
      }
    });

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (item) {
        return item.id !== task.id;
      });

      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
  });

  updateCounts();
}

// Update counters
function updateCounts() {
  const completedTasks = tasks.filter(function (task) {
    return task.completed === true;
  });

  const pendingTasks = tasks.filter(function (task) {
    return task.completed === false;
  });

  completedCount.textContent = completedTasks.length;
  pendingCount.textContent = pendingTasks.length;
}

// Clear all tasks
clearButton.addEventListener("click", function () {
  if (tasks.length === 0) {
    return;
  }

  const confirmDelete = confirm("Are you sure you want to delete all tasks?");

  if (confirmDelete) {
    tasks = [];
    renderTasks();
  }
});
