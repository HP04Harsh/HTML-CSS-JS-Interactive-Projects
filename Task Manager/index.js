let inputtask = document.getElementById('details');
const add = document.getElementById('add');
const table = document.getElementById('disp-task');

let task = JSON.parse(localStorage.getItem('tasks')) || [];
task.forEach(task => renderTask(task));

add.addEventListener('click', () => {
    const data = inputtask.value.trim();

    if (data === "") {
        return;
    } else {
        const wholedata = {
            id: Date.now(),
            task1: data,
            completed: false
        };

        task.push(wholedata);
        saveTask();
        renderTask(wholedata);  // Immediately render the new task
        inputtask.value = "";  // Clear the input field
    }
});

function renderTask(task) {
    const li = document.createElement('li');
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span>${task.task1}</span>
        <button class="complete-btn">Delete</button>
    `;

    // Add delete event listener
    li.querySelector('.complete-btn').addEventListener('click', () => {
        deleteTask(task.id);
    });

    table.appendChild(li);
}

function deleteTask(id) {
    task = task.filter(t => t.id !== id);  // Remove task from the array
    saveTask();  // Save updated tasks
    renderTasks();  // Re-render tasks
}

function saveTask() {
    localStorage.setItem('tasks', JSON.stringify(task));
}

function renderTasks() {
    table.innerHTML = "";  // Clear the list
    task.forEach(task => renderTask(task));  // Re-render tasks from the array
}
