import { useContext,useState,createContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            title:" todos message",
            compeleted:false
        }
    ],addTodo:(title)=>{},
    updateTodo:(id,title)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}
})


export const useTodo= ()=>{
    return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider