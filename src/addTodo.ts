import { Task, TodoList } from "./types";

const form = document.getElementById('addTaskForm') as HTMLFormElement;
const input = document.getElementById('addTask') as HTMLInputElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const listContainer = document.getElementById('listContainer') as HTMLDivElement;



// Initialize todoList as an empty array of Task objects
let todoList: Task[] = [];

// Function to get a task by its title
export function getTask(title: string): Task | undefined {
    return todoList.find((item) => item.title === title);
}

// Function to get the entire to-do list
export function getTodoList(): Task[] {
    return todoList;
}

// Function to add a new task
export function addTask(title: string): Task {
    const task: Task = {
        title, 
        completed: false,
        createdAt: new Date(),  // takes current date
    };

    todoList.push(task);
    return task;
}

// Function to render the task in the listContainer
function renderTask(task: Task) {
    const taskElement = document.createElement('div');
    const taskTitle = document.createElement('p');
    taskTitle.textContent = task.title;
    
    const taskDate = document.createElement('p');
    taskDate.textContent = `Created on: ${task.createdAt.toLocaleString()}`;

    taskElement.appendChild(taskTitle);
    taskElement.appendChild(taskDate);

    listContainer.appendChild(taskElement);
}


// Event listener for the form submission
form?.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the page from refreshing on form submit

    // Get the value from the input field
    const taskTitle = input.value.trim();  ///trim method removes unnecessary white space from input.
    if (taskTitle) {
        //Adds task to the list
        const newTask = addTask(taskTitle);
        // Use the renderTask function to add the task to the DOM
        renderTask(newTask)
        
    }

    // Clear the input field after submitting
    input.value = '';
});
