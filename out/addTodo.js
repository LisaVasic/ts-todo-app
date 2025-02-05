const form = document.getElementById('addTaskForm');
const input = document.getElementById('addTask');
const listContainer = document.getElementById('listContainer');
// Initialize todoList as an empty array of Task objects
let todoList = [];
// Start id
let NextId = 1;
// Function to get a task by its title
export function getTask(title) {
    return todoList.find((item) => item.title === title);
}
// Function to get the entire to-do list
export function getTodoList() {
    return todoList;
}
// Function to add a new task
export function addTask(title) {
    const task = {
        id: NextId,
        title,
        completed: false,
        createdAt: new Date(), // takes current date
    };
    todoList.push(task);
    NextId++;
    return task;
}
// Function to render the task in the listContainer
export function renderTask(task) {
    // Hidden checkbox to delete selected
    const select = document.createElement('input');
    select.type = 'checkbox';
    select.classList.add('checkbox'); // Class to reference to the checkboxes
    // Checkbox to toggle todo
    const checkTask = document.createElement('input');
    checkTask.type = 'checkbox';
    checkTask.classList.add('checkTask'); // Class to reference to the checkboxes
    const taskElement = document.createElement('div');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    const taskDate = document.createElement('p');
    // Format the date
    const formattedDate = task.createdAt.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    taskDate.textContent = `${formattedDate}`;
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(select);
    taskElement.appendChild(taskDate);
    taskElement.appendChild(checkTask);
    // Add a class for styling
    taskElement.classList.add('taskItem');
    taskTitle.classList.add('taskTitle');
    select.classList.add('selectCheck');
    taskDate.classList.add('taskDate');
    checkTask.classList.add('checkTask');
    listContainer.appendChild(taskElement);
    // Event listener to add a class for styling when task is checked.
    checkTask.addEventListener("change", function () {
        const taskItem = this.closest(".taskItem"); // Locate parent task item
        // Adds a class when task is completed and removes when not
        if (taskItem) {
            if (this.checked) {
                taskItem.classList.add("task-completed");
            }
            else {
                taskItem.classList.remove("task-completed");
            }
        }
    });
}
// Event listener for the form submission
form?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submit
    // Get the value from the input field
    const taskTitle = input.value.trim(); ///Trim method removes unnecessary white space from input.
    if (taskTitle) {
        //Adds task to the list
        const newTask = addTask(taskTitle);
        // Use the renderTask function to add the task to the DOM
        renderTask(newTask);
    }
    // Clear the input field after submitting
    input.value = '';
});
