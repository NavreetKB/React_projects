import {createContext,useContext} from 'react'

//creating the context 
export const Todocontext=createContext({     //object vich id array jis wich futher ik obj
    todos:[
        {
            id:1,
            todoname:"Name of the task",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo:(id,todo)=>{},
    delTodo:(id)=>{},
    ToggleComplete:(id)=>{},
})
//custom hook
export const useTodo=()=>{
     return useContext(Todocontext)
}
//provider function
export const TodoProvider=Todocontext.Provider