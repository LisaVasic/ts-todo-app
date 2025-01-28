
// create the blueprint for the task
export interface Task {
    id: number,
    title: string,
    createdAt: Date,
    completed: boolean,
}

// creating the list with tasks
export type TodoList = Task[] 