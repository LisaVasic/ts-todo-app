const form = document.getElementById('addTaskForm');
const input = document.getElementById('addTask');
// const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
// const selectButton = document.getElementById('selectButton') as HTMLButtonElement;
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
function renderTask(task) {
    // hidden checkbox to delete selected
    const select = document.createElement('input');
    select.type = 'checkbox';
    select.classList.add('checkbox'); // class to reference to the checkboxes
    // checkbox to toggle todo
    const checkTask = document.createElement('input');
    checkTask.type = 'checkbox';
    checkTask.classList.add('checkOfTask'); // class to reference to the checkboxes
    const taskElement = document.createElement('div');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    const taskDate = document.createElement('p');
    //Format the date
    const formattedDate = task.createdAt.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
    taskDate.textContent = `${formattedDate}`;
    taskElement.appendChild(taskDate);
    taskElement.appendChild(taskTitle);
    taskElement.appendChild(select);
    taskElement.appendChild(checkTask);
    listContainer.appendChild(taskElement);
}
// Event listener for the form submission
form?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submit
    // Get the value from the input field
    const taskTitle = input.value.trim(); ///trim method removes unnecessary white space from input.
    if (taskTitle) {
        //Adds task to the list
        const newTask = addTask(taskTitle);
        // Use the renderTask function to add the task to the DOM
        renderTask(newTask);
    }
    // Clear the input field after submitting
    input.value = '';
});
