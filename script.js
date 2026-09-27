// ---- Element Selection ----
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const errorMessage = document.getElementById("errorMessage");
const clearBtn = document.getElementById("clearBtn");



// Task 1: Add and Display Tasks


function createTaskElement(text) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";

  li.appendChild(span);
  li.appendChild(deleteBtn);

  return li;
}

function addTask() {
  const value = taskInput.value.trim();

  const li = createTaskElement(value);

  taskList.appendChild(li);

  taskInput.value = "";
  taskInput.focus();

  updateTaskCount();
}



// Task 2: Mark Tasks Complete


function toggleTaskComplete(task) {
  task.classList.toggle("completed");
}



// Task 3: Delete Tasks using Event Delegation


taskList.addEventListener("click", (event) => {

  if (event.target.classList.contains("delete-btn")) {

    event.target.closest("li").remove();

    updateTaskCount();
  }

});



// Task 4: Live Task Counter and Empty-State Message


function updateTaskCount() {

  const count = taskList.children.length;

  if (count === 0) {

    taskCount.textContent = "No tasks yet.";

  } else {

    taskCount.textContent =
      `${count} task${count === 1 ? "" : "s"}`;

  }
}



// Task 5: Prevent Empty Submissions


function validateTask() {

  const value = taskInput.value.trim();

  if (value === "") {

    errorMessage.textContent =
      "Please type a task before adding it.";

    return false;
  }

  errorMessage.textContent = "";

  return true;
}


// Add button event
addBtn.addEventListener("click", () => {

  if (validateTask()) {

    addTask();

  }

});


// Enter key event
taskInput.addEventListener("keyup", (event) => {

  if (event.key === "Enter") {

    if (validateTask()) {

      addTask();

    }

  }

});



// Task 2: Click Task Text to Mark Complete


taskList.addEventListener("click", (event) => {

  if (event.target.tagName === "SPAN") {

    const task = event.target.closest("li");

    toggleTaskComplete(task);

  }

});



// Task 6: Clear Completed Tasks
// Uses querySelectorAll() and a loop


clearBtn.addEventListener("click", () => {

  const completedTasks =
    taskList.querySelectorAll(".completed");

  completedTasks.forEach((task) => {

    task.remove();

  });

  updateTaskCount();

});



// Initial Task Counter

updateTaskCount();