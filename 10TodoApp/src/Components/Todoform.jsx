import React, { useState } from "react";
import { useTodo } from "../Contexts/Todocontext";

function Todoform() {
    
    const [todoname,settodoname]=useState("")
    const{addTodo}=useTodo()

    const Add=(e)=>{
        e.preventDefault()

        if(!todoname) return

        addTodo({id:Date.now(),todoname,completed:false})
        settodoname("")
    }

    return (
        <form onSubmit={Add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoname}//wiring of the data with the output
                onChange={(e)=>settodoname(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}






export default Todoform