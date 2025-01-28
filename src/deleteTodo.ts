const deleteContainer = document.getElementById('deleteContainer') as HTMLDivElement;
const deleteButton = document.getElementById('deleteButton') as HTMLButtonElement;
const selectButton = document.getElementById('selectButton') as HTMLButtonElement;


let isActive = false;

// Event listener for select button
selectButton.addEventListener('click', () => {
    isActive = !isActive; // toggles..

    if (isActive === true) {
// Actions to perform when isActive is true (checkboxes are shown)
        //Assigns the elements with class checkbox to the checkboxes variable
        const checkboxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLElement>;
        //Iterates and sets them to block
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'block'; // Show checkboxes
        });

        // Changes the text on the button to cancel when isActive
        selectButton.textContent = 'Cancel'; // Change button text
        
    } else {
        // Actions to perform when isActive is false (checkboxes are hidden)
        const checkboxes = document.querySelectorAll('.checkbox') as NodeListOf<HTMLElement>;
        checkboxes.forEach(checkbox => {
            checkbox.style.display = 'none'; // Hide checkboxes
        });

        
        selectButton.textContent = 'Select'; // Change button text
    }
});






// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }