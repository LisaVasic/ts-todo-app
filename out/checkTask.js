"use strict";
// import { Task, TodoList } from "./types";
document.addEventListener("DOMContentLoaded", () => {
    // Selects the checkboxes with class checkTask
    document.querySelectorAll(".checkTask").forEach((checkbox) => {
        // Runs function when checkbox is checked
        checkbox.addEventListener("change", function () {
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
    });
});
