const deleteContainer = document.getElementById('deleteContainer');
const selectButton = document.getElementById('selectButton');
const listContainer = document.getElementById('listContainer');
let isSelected = false;
// Event listener for select button
selectButton.addEventListener('click', () => {
    isSelected = !isSelected; // toggles..
    if (isSelected === true) {
        // Actions to perform when isActive is true (checkboxes are shown)
        //Assigns the elements with class checkbox to the checkboxes variable
        const checkboxes = document.querySelectorAll('.checkbox');
        //Iterates and sets them to block
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'block'; // Show checkboxes
        });
        deleteContainer.style.display = 'block';
        // Changes the text on the button to cancel when isActive
        selectButton.textContent = 'Cancel'; // Change button text
    }
    else {
        // Actions to perform when isActive is false (checkboxes are hidden)
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'none'; // Hide checkboxes
        });
        deleteContainer.style.display = 'none';
        selectButton.textContent = 'Select'; // Change button text
    }
});
const deleteButton = document.getElementById('deleteButton')?.addEventListener("click", deleteTasks);
// Function to delete selected tasks
function deleteTasks() {
    const selectedCheckboxes = document.querySelectorAll('#listContainer input[type="checkbox"]:checked');
    selectedCheckboxes.forEach(checkbox => {
        checkbox.parentElement?.remove();
    });
}
export {};
// Call function when delete button is clicked
// deleteButton.addEventListener
//document.getElementById("myButton").addEventListener("click", myFunction);
//function myFunction() {
// Your code here
//}
