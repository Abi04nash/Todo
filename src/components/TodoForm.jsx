import React, { useState } from "react";
import { useEffect } from "react";
import { useTodo } from "../context";


function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({todo , completed : false})
        setTodo("")
    }

    useEffect(() => {
        window.particlesJS("particles-container", {
          particles: {
            number: { value: 40 },
            color: { value: "#ffffff" },
            shape: { type: "star" },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: { enable: true, speed: 3 },
            line_linked: { enable: false }, 
          },
          background: { color: "#000" },
        });
      }, []);


    return (
        <form id="particles-container" onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-white/10 text-white font-bold shrink-0">
                Add ➕
            </button>
        </form>
    );
}

export default TodoForm;