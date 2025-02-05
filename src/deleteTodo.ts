import { TaskItem } from "./types";

const deleteContainer = document.getElementById('deleteContainer') as HTMLDivElement;
const selectButton = document.getElementById('selectButton') as HTMLButtonElement;
const listContainer = document.getElementById('listContainer') as HTMLDivElement;

let isSelected = false;


// Event listener for select button
selectButton.addEventListener('click', (): void => {
    isSelected = !isSelected; // Toggles state

    // Select all checkboxes with proper type
    const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('.checkbox');
    const taskItems: NodeListOf<HTMLElement> = document.querySelectorAll('.taskItem');


    if (isSelected === true) {
        // Show checkboxes
        checkboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.style.display = 'block';
        });

        // Show delete button
        deleteContainer.style.display = 'block';

        // Change button text
        selectButton.textContent = 'Cancel';

        // Add class to taskItem
        taskItems.forEach((taskItem) => {
            taskItem.classList.add('selected');
        });
    } else {
        // Hide checkboxes
        checkboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.style.display = 'none';
        });

        // Hide delete button
        deleteContainer.style.display = 'none';

        // Change button text
        selectButton.textContent = 'Select';

        // Remove class from taskItem
        taskItems.forEach((taskItem) => {
            taskItem.classList.remove('selected');
        });
    }
});


// Calls function below when delete button is clicked
const deleteButton = document.getElementById('deleteButton')?.addEventListener("click", deleteTasks)


// Function to delete selected tasks
export function deleteTasks () {
    const selectedCheckboxes = document.querySelectorAll('#listContainer input[type="checkbox"]:checked');
    
    // Asks to confirm the delete
    if (confirm("Delete tasks")) {
        selectedCheckboxes.forEach(checkbox => {
            checkbox.parentElement?.remove();
        }); 
    } else {
        
    }
    
}