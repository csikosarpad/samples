export type Task = {
    id: string
    title: string
    completed: boolean
    createdAt: Date
}

export interface ITodo {
    id: string;
    title: string;
    completed: boolean
    createdAt: Date
}

export type TodoContextType = {
    todos: ITodo[];
    saveTodo: (todo: ITodo) => void;
    updateTodo: (id: number) => void;
}
