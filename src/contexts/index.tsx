import React, { createContext, useReducer, FC, ReactNode } from 'react';

export interface TaskProps {
    title: string;
    status: boolean;
  }

export interface TrashProps {
    title: string
}
interface State {
    tasks: TaskProps[]
    trash: TrashProps[];
    inputValue: string;
}

type Action =
    | { type: 'addTask'; payload: TaskProps }
    | { type: 'checkTask'; payload: string }
    | { type: 'removeTask'; payload: string }
    | { type: 'restoreTrash'; payload: string }
    | { type: 'excludeTrash'; payload: string }
    | { type: 'clearTrash' }
    | { type: 'setInputValue'; payload: string }

interface TasksContextProps {
    state: State
    dispatch: React.Dispatch<Action>
}

export const TasksContext = createContext<TasksContextProps | undefined>(undefined);

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'addTask':
            const existingTask = state.tasks.some((task: TaskProps) => task.title == action.payload.title)
            if(existingTask || !action.payload.title){
                return state
            }

            return {
                ...state,
                tasks: [...state.tasks, {title: action.payload.title, status: false}],
                inputValue: ""
            }
        case 'checkTask':
            return {
                ...state,
                tasks: state.tasks.map((task: TaskProps) => {
                    if (task.title === action.payload) {
                        return { ...task, status: !task.status };
                    } else {
                        return task;
                    }
                })
            };
        case 'removeTask':
            const taskToDelete = state.tasks.find((task: TaskProps) => task.title == action.payload)
            if(taskToDelete){
                const deletedTask = state.trash.some((trash: TrashProps) => trash.title == action.payload)
                if(deletedTask){
                    return {
                        ...state,
                        tasks: state.tasks.filter((task: TaskProps) => task.title != action.payload),
                    }
                }
                return {
                    ...state,
                    tasks: state.tasks.filter((task: TaskProps) => task.title != action.payload),
                    trash: [...state.trash, {title: taskToDelete.title}]
                }
            }
            return state
        case 'restoreTrash':
            const trashToRestore = state.trash.find((trash: TrashProps) => trash.title == action.payload)
            if(trashToRestore){
                const sameTask = state.tasks.some((task: TaskProps) => task.title == trashToRestore.title)
                if(sameTask){
                    return{
                        ...state,
                        trash: state.trash.filter((trash: TrashProps) => trash.title != action.payload),
                    }
                }
                return {
                    ...state,
                    tasks: [...state.tasks, {title: trashToRestore.title, status: false}],
                    trash: state.trash.filter((trash: TrashProps) => trash.title != action.payload)
                }
            }
            return state
        case 'excludeTrash':
            const trashToDelete = state.trash.find((trash: TrashProps) => trash.title == action.payload)
            if(trashToDelete){
                return {
                    ...state,
                    trash: state.trash.filter((trash: TrashProps) => trash.title != action.payload)
                }
            }
            return state
        case 'clearTrash':
            return {
                ...state,
                trash: []
            }
        case 'setInputValue':
            return {
                ...state,
                inputValue: action.payload
            }
        default:
            return state;

    }

}
interface TasksProviderProps {
    children: ReactNode;
  }

export const TasksProvider: FC<TasksProviderProps> = ({ children }) => {
    const [ state, dispatch] = useReducer(reducer, {
        tasks: [],
        trash: [],
        inputValue: ""
    })
    return (
        <TasksContext.Provider value={{ state, dispatch }}>
            {children}
        </TasksContext.Provider>
    )
}
