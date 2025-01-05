
    function showSection(section) {
        const formSection = document.getElementById('formSection');
        const tasksContainer = document.getElementById('tasksContainer');

        if (section === 'form') {
            formSection.style.display = 'block';
            tasksContainer.style.display = 'none';
        } else if (section === 'tasks') {
            formSection.style.display = 'none';
            tasksContainer.style.display = 'block';
        }
    }

    document.getElementById('taskForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const taskTitle = document.getElementById('taskTitle').value;
        const taskDesc = document.getElementById('taskDesc').value;
        const taskDay = document.getElementById('taskDay').value;
        const taskWeekday = document.getElementById('taskWeekday').value;

        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        taskCard.innerHTML = `
            <div class="task-header">
                <div class="task-day">${taskDay}</div>
                <div class="task-weekday">${taskWeekday}</div>
            </div>
            <div class="task-content">
                <div class="task-title">${taskTitle}</div>
                <div class="task-desc">${taskDesc}</div>
                <div class="task-status">
                    <label><input type="checkbox"> Done</label>
                    <label><input type="checkbox"> Not Done</label>
                </div>
                <div class="task-actions">
                    <button onclick="deleteTask(this)">Delete</button>
                    <button onclick="changeTask(this)">Change</button>
                </div>
            </div>
        `;

        document.getElementById('tasksContainer').appendChild(taskCard);

        // Reset form
        document.getElementById('taskForm').reset();
    });
    function completeTask(button) {
    const taskCard = button.closest('.task-card');
    const taskTitle = taskCard.querySelector('.task-title').textContent;
    const taskDesc = taskCard.querySelector('.task-desc').textContent;

    // Prompt for completion date and time
    const completionDate = prompt("Enter the completion date and time (e.g., YYYY-MM-DD HH:mm)");

    if (completionDate) {
        // Create a completed task card
        const completedTask = document.createElement('div');
        completedTask.className = 'completed-task';

        completedTask.innerHTML = `
            <h4>${taskTitle}</h4>
            <p>${taskDesc}</p>
            <p>Completed on: ${completionDate}</p>
        `;

        // Append the completed task to the Completed Tasks section
        document.getElementById('completedTasks').appendChild(completedTask);

        // Show the detail bar if there are completed tasks
        document.getElementById('detailBar').style.display = 'block';

        // Remove the task from the main task list
        taskCard.remove();
    }
}

// Attach the completeTask function to your task's 'Done' checkbox or action button
document.querySelectorAll('.task-actions button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Done') {
            completeTask(button);
        }
    });
});
    function deleteTask(button) {
        const taskCard = button.closest('.task-card');
        taskCard.remove();
    }

    function changeTask(button) {
        const taskCard = button.closest('.task-card');
        const taskTitle = taskCard.querySelector('.task-title').textContent;
        const taskDesc = taskCard.querySelector('.task-desc').textContent;
        const taskDay = taskCard.querySelector('.task-day').textContent;
        const taskWeekday = taskCard.querySelector('.task-weekday').textContent;

        // Populate the form with existing data
        document.getElementById('taskTitle').value = taskTitle;
        document.getElementById('taskDesc').value = taskDesc;
        document.getElementById('taskDay').value = taskDay;
        document.getElementById('taskWeekday').value = taskWeekday;

        // Remove the task card
        taskCard.remove();

        // Show the form section
        showSection('form');
    }
    function showDetails() {
    const formSection = document.getElementById('formSection');
    const tasksContainer = document.getElementById('tasksContainer');
    const detailBar = document.getElementById('detailBar');

    // Hide other sections
    formSection.style.display = 'none';
    tasksContainer.style.display = 'none';
    
    // Show the detail bar
    detailBar.style.display = 'block';
}
